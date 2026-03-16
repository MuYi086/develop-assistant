<!-- 购买商品主页面 -->
<template>
  <div class="buy-goods-page">
    <!-- 侧边导航 -->
    <SidebarNav @nav-change="handleNavChange" />

    <!-- 二级导航栏（分类+用餐方式切换） -->
    <CategoryNav
      :categories="categoryList"
      v-model:current-category="currentCategory"
      v-model:dining-way="goodsStore.diningWay"
      @category-change="handleCategoryChange"
      @dining-way-change="handleDiningWayChange"
      @search="handleSearch"
      @more="handleMore"
    />

    <!-- 主内容区域（商品网格） -->
    <div class="main-content">
      <div v-if="loading" class="loading-state">
        <el-icon class="loading-icon"><Loading /></el-icon>
        <span>加载中...</span>
      </div>

      <div v-else-if="filteredGoodsList.length === 0" class="empty-state">
        <el-icon class="empty-icon"><Box /></el-icon>
        <p>暂无商品</p>
        <p class="tip">请尝试切换分类或搜索</p>
      </div>

      <div v-else class="goods-grid">
        <GoodsCard
          v-for="goods in filteredGoodsList"
          :key="goods.id"
          :goods="goods"
          @click="handleGoodsClick"
        />
      </div>
    </div>

    <!-- 购物车面板 -->
    <ShoppingCart
      @clear="handleClearCart"
      @checkout="handleCheckout"
    />

    <!-- 规格选择弹窗 -->
    <SpecSelector
      v-model="uiStore.specSelectorVisible"
      :goods="uiStore.currentSpecGoods"
      @confirm="handleAddToCart"
    />

    <!-- 确认弹窗 -->
    <ConfirmDialog
      v-model="uiStore.confirmDialogVisible"
      :title="uiStore.confirmDialogTitle"
      :message="uiStore.confirmDialogMessage"
      :type="uiStore.confirmDialogType"
      :confirm-text="uiStore.confirmDialogConfirmText"
      :cancel-text="uiStore.confirmDialogCancelText"
      @confirm="handleConfirmDialogConfirm"
      @cancel="handleConfirmDialogCancel"
    />

    <!-- 搜索弹窗 -->
    <SearchModal
      ref="searchModalRef"
      v-model="uiStore.searchModalVisible"
      @search="handleSearchSubmit"
      @select="handleSearchSelect"
    />

    <!-- 更多菜单 -->
    <el-dialog
      v-model="uiStore.moreMenuVisible"
      title="更多"
      width="280px"
      class="more-menu-dialog"
    >
      <div class="more-menu">
        <button class="menu-item" @click="toggleShowSoldOut">
          <el-icon><View /></el-icon>
          <span>{{ showSoldOut ? '隐藏售罄商品' : '显示售罄商品' }}</span>
        </button>
        <button class="menu-item" @click="refreshGoods">
          <el-icon><Refresh /></el-icon>
          <span>刷新商品</span>
        </button>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { Loading, Box, View, Refresh } from '@element-plus/icons-vue'
import { useGoodsStore } from './stores/goods'
import { useCartStore } from './stores/cart'
import { useUIStore } from './stores/ui'
import type { GoodsItem, CategoryItem } from './api/types'

// 导入组件
import SidebarNav from './components/SidebarNav.vue'
import CategoryNav from './components/CategoryNav.vue'
import GoodsCard from './components/GoodsCard.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import SpecSelector from './components/SpecSelector.vue'
import ConfirmDialog from './components/ConfirmDialog.vue'
import SearchModal from './components/SearchModal.vue'

const goodsStore = useGoodsStore()
const cartStore = useCartStore()
const uiStore = useUIStore()

// 搜索弹窗引用
const searchModalRef = ref<InstanceType<typeof SearchModal> | null>(null)

// 计算属性
const loading = computed(() => goodsStore.loading)
const filteredGoodsList = computed(() => goodsStore.filteredGoodsList)
const categoryList = computed(() => goodsStore.categoryList)
const currentCategory = computed({
  get: () => goodsStore.currentCategory,
  set: (val: string) => goodsStore.setCategory(val)
})
const showSoldOut = computed({
  get: () => goodsStore.showSoldOut,
  set: (val: boolean) => goodsStore.showSoldOut = val
})

// 初始化
onMounted(async () => {
  const siteId = '1' // 从路由或配置中获取
  await goodsStore.fetchCategoryList(siteId)
  await goodsStore.fetchGoodsList(siteId)
  await cartStore.fetchCart(siteId)
})

// 监听用餐方式变化
watch(() => goodsStore.diningWay, async (newWay) => {
  const siteId = '1'
  await goodsStore.fetchGoodsList(siteId)
})

// 监听分类变化
watch(() => goodsStore.currentCategory, async () => {
  const siteId = '1'
  await goodsStore.fetchGoodsList(siteId)
})

// 事件处理
const handleNavChange = (key: string) => {
  console.log('导航切换:', key)
}

const handleCategoryChange = (key: string) => {
  console.log('分类切换:', key)
}

const handleDiningWayChange = async (way: 'IN' | 'OUT', incompatibleItems: string[]) => {
  // 检查是否有冲突商品
  const conflicts = cartStore.getIncompatibleItems(way)

  if (conflicts.length > 0) {
    // 显示确认弹窗
    const confirmed = await uiStore.showConfirm({
      title: '切换用餐方式',
      message: `切换到外带模式将移除 ${conflicts.length} 个不支持外带的商品，是否继续？`,
      type: 'warning',
      confirmText: '确认切换',
      cancelText: '取消'
    })

    if (confirmed) {
      await cartStore.switchDiningWay(way, true)
    }
  } else {
    await cartStore.switchDiningWay(way, false)
  }
}

const handleGoodsClick = (goods: GoodsItem) => {
  if (goods.type === 'COMB' || goods.defaultSku) {
    // 套餐或有规格的商品，打开规格选择
    uiStore.openSpecSelector(goods)
  } else {
    // 普通商品直接加入购物车
    addToCart(goods.goodsId)
  }
}

const handleAddToCart = async (goodsId: number, skuId: number | undefined, quantity: number) => {
  try {
    await cartStore.addToCart(goodsId, skuId, quantity)
    // 显示成功提示
    // ElMessage.success('已加入购物车')
  } catch (err) {
    console.error('加入购物车失败:', err)
    // ElMessage.error('加入购物车失败')
  }
}

const addToCart = async (goodsId: number) => {
  try {
    await cartStore.addToCart(goodsId)
    // ElMessage.success('已加入购物车')
  } catch (err) {
    console.error('加入购物车失败:', err)
  }
}

const handleClearCart = async () => {
  const confirmed = await uiStore.showConfirm({
    title: '清空购物车',
    message: '确定要清空购物车吗？',
    type: 'warning',
    confirmText: '清空',
    cancelText: '取消'
  })

  if (confirmed) {
    try {
      await cartStore.clearCart()
      // ElMessage.success('购物车已清空')
    } catch (err) {
      console.error('清空失败:', err)
      // ElMessage.error('清空失败')
    }
  }
}

const handleCheckout = async () => {
  try {
    const result = await cartStore.submitCart()
    // ElMessage.success('订单提交成功')
    console.log('订单结果:', result)
    // 跳转到订单详情页或打印小票
  } catch (err) {
    console.error('提交失败:', err)
    // ElMessage.error('提交失败')
  }
}

// 确认弹窗处理
const handleConfirmDialogConfirm = () => {
  uiStore.confirmDialogConfirm()
}

const handleConfirmDialogCancel = () => {
  uiStore.confirmDialogCancel()
}

// 搜索处理
const handleSearch = () => {
  uiStore.openSearch()
}

const handleSearchSubmit = async (keyword: string) => {
  goodsStore.setSearchKeyword(keyword)
  const siteId = '1'
  await goodsStore.fetchGoodsList(siteId)

  // 将搜索结果传递给搜索弹窗
  if (searchModalRef.value) {
    searchModalRef.value.setResults(filteredGoodsList.value)
  }
}

const handleSearchSelect = (item: GoodsItem) => {
  handleGoodsClick(item)
}

// 更多菜单处理
const handleMore = () => {
  uiStore.openMoreMenu()
}

const toggleShowSoldOut = () => {
  goodsStore.toggleShowSoldOut()
  uiStore.closeMoreMenu()
}

const refreshGoods = async () => {
  const siteId = '1'
  await goodsStore.fetchGoodsList(siteId)
  uiStore.closeMoreMenu()
}
</script>

<style scoped lang="scss">
.buy-goods-page {
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #ebebeb;
  overflow: hidden;
}

.main-content {
  flex: 1;
  height: 100%;
  padding: 40px 250px 0 80px; // 顶部40px(status bar) + 左侧80px(sidebar) + 右侧250px预留购物车
  overflow-y: auto;
  background: #ebebeb;
}

.loading-state,
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #999;

  .loading-icon {
    font-size: 48px;
    margin-bottom: 16px;
    animation: rotate 1s linear infinite;
  }

  .empty-icon {
    font-size: 64px;
    margin-bottom: 16px;
    color: #ddd;
  }

  p {
    margin: 0;
    font-size: 16px;
  }

  .tip {
    font-size: 14px;
    margin-top: 8px;
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.goods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
  gap: 6px;
  padding: 6px;
}

// 更多菜单样式
.more-menu-dialog {
  :deep(.el-dialog__body) {
    padding: 8px;
  }
}

.more-menu {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.2s;
  font-size: 14px;
  color: #222;

  &:hover {
    background: #f5f5f5;
  }

  .el-icon {
    font-size: 18px;
    color: #666;
  }
}
</style>
