// 搜索弹窗组件
<template>
  <el-dialog
    v-model="visible"
    title="搜索商品"
    width="480px"
    :close-on-click-modal="true"
    class="search-dialog"
    @close="handleClose"
  >
    <div class="search-content">
      <el-input
        v-model="keyword"
        placeholder="请输入商品名称"
        clearable
        size="large"
        @keyup.enter="handleSearch"
      >
        <template #prefix>
          <el-icon><Search /></el-icon>
        </template>
        <template #append>
          <el-button type="primary" @click="handleSearch">搜索</el-button>
        </template>
      </el-input>

      <div class="search-results">
        <div v-if="loading" class="loading-state">
          <el-icon class="loading-icon"><Loading /></el-icon>
          <span>搜索中...</span>
        </div>

        <div v-else-if="!keyword" class="empty-state">
          <el-icon class="search-icon"><Search /></el-icon>
          <p>输入关键词搜索商品</p>
        </div>

        <div v-else-if="results.length === 0" class="empty-state">
          <el-icon class="empty-icon"><CircleClose /></el-icon>
          <p>未找到相关商品</p>
          <p class="tip">请尝试其他关键词</p>
        </div>

        <div v-else class="results-list">
          <div
            v-for="item in results"
            :key="item.id"
            class="result-item"
            @click="selectItem(item)"
          >
            <img v-if="item.image" :src="item.image" class="item-image" />
            <div v-else class="item-placeholder">
              <el-icon><Picture /></el-icon>
            </div>
            <div class="item-info">
              <div class="item-name">{{ item.name }}</div>
              <div class="item-price">¥{{ formatPrice(item.price) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Search, Loading, CircleClose, Picture } from '@element-plus/icons-vue'
import type { GoodsItem } from '../api/types'

interface Props {
  modelValue: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  search: [keyword: string]
  select: [item: GoodsItem]
}>()

const visible = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const keyword = ref('')
const loading = ref(false)
const results = ref<GoodsItem[]>([])

const handleSearch = () => {
  if (!keyword.value.trim()) return

  loading.value = true
  emit('search', keyword.value)

  // 模拟搜索结果（实际应从父组件传入）
  setTimeout(() => {
    loading.value = false
  }, 300)
}

const selectItem = (item: GoodsItem) => {
  emit('select', item)
  handleClose()
}

const handleClose = () => {
  visible.value = false
  keyword.value = ''
  results.value = []
}

const formatPrice = (price: number): string => {
  return price.toFixed(2)
}

// 暴露方法供父组件设置结果
const setResults = (data: GoodsItem[]) => {
  results.value = data
  loading.value = false
}

defineExpose({
  setResults
})
</script>

<style scoped lang="scss">
.search-dialog {
  :deep(.el-dialog__body) {
    padding: 20px;
  }
}

.search-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.search-results {
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
}

.loading-state,
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  color: #999;

  .loading-icon {
    font-size: 32px;
    margin-bottom: 12px;
    animation: rotate 1s linear infinite;
  }

  .search-icon,
  .empty-icon {
    font-size: 48px;
    margin-bottom: 12px;
    color: #ddd;
  }

  p {
    margin: 0;
    font-size: 14px;
  }

  .tip {
    font-size: 12px;
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

.results-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.result-item {
  display: flex;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f5f5f5;
  }
}

.item-image,
.item-placeholder {
  width: 60px;
  height: 60px;
  border-radius: 6px;
  object-fit: cover;
}

.item-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  color: #999;
}

.item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.item-name {
  font-size: 14px;
  color: #222;
  margin-bottom: 4px;
}

.item-price {
  font-size: 16px;
  font-weight: 600;
  color: #e80c00;
}
</style>
