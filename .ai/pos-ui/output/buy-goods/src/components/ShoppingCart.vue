// 购物车面板组件
<template>
  <div class="shopping-cart">
    <!-- 顶部固定区域 -->
    <div class="cart-header">
      <h3 class="cart-title">购物车</h3>
      <button
        v-if="!isEmpty"
        class="clear-btn"
        @click="handleClear"
      >
        <el-icon><Delete /></el-icon>
        <span>清空商品</span>
      </button>
    </div>

    <!-- 提示信息 -->
    <div v-if="showNotice" class="cart-notice">
      温馨提示：扫描团购券，无法修改购物车
    </div>

    <!-- 购物车内容区域 -->
    <div class="cart-content">
      <div v-if="isEmpty" class="empty-cart">
        <el-icon class="empty-icon"><ShoppingCart /></el-icon>
        <p>购物车是空的</p>
        <p class="empty-tip">快去选购商品吧</p>
      </div>

      <div v-else class="cart-items">
        <CartItem
          v-for="item in items"
          :key="item.id"
          :item="item"
          @increase="handleIncrease"
          @decrease="handleDecrease"
        />
      </div>
    </div>

    <!-- 底部固定区域 -->
    <div class="cart-footer">
      <div class="cart-summary">
        <div class="total-info">
          <span class="total-count">{{ totalCount }}件商品</span>
          <span class="total-amount">
            合计：<strong>¥{{ formatPrice(totalAmount) }}</strong>
          </span>
        </div>
      </div>
      <button
        class="checkout-btn"
        :disabled="!canSubmit"
        :class="{ 'is-disabled': !canSubmit }"
        @click="handleCheckout"
      >
        {{ submitting ? '提交中...' : '去收款' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Delete, ShoppingCart } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useCartStore } from '../stores/cart'
import CartItem from './CartItem.vue'

const cartStore = useCartStore()

const items = computed(() => cartStore.items)
const totalCount = computed(() => cartStore.totalCount)
const totalAmount = computed(() => cartStore.totalAmount)
const isEmpty = computed(() => cartStore.isEmpty)
const canSubmit = computed(() => cartStore.canSubmit)
const submitting = computed(() => cartStore.submitting)

// 显示提示（当购物车有商品时显示）
const showNotice = computed(() => !isEmpty.value)

const emit = defineEmits<{
  clear: []
  checkout: []
}>()

const handleClear = () => {
  emit('clear')
}

const handleCheckout = () => {
  if (canSubmit.value) {
    emit('checkout')
  }
}

const handleIncrease = (itemId: string) => {
  cartStore.increaseQuantity(itemId)
}

const handleDecrease = (itemId: string) => {
  cartStore.decreaseQuantity(itemId)
}

const formatPrice = (price: number): string => {
  return price.toFixed(2)
}
</script>

<style scoped lang="scss">
.shopping-cart {
  width: 320px;
  height: 100%;
  background: #f5f8f8;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #fff;
  box-shadow: 0 1px 0 #f1f1f1;
}

.cart-title {
  font-size: 20px;
  font-weight: 500;
  color: #000;
  margin: 0;
}

.clear-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border: none;
  background: transparent;
  color: #999;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #e80c00;
  }
}

.cart-notice {
  padding: 8px 16px;
  background: #fff;
  color: #eb8500;
  font-size: 14px;
}

.cart-content {
  flex: 1;
  overflow-y: auto;
  background: #fff;
  padding: 0 16px;
}

.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #999;

  .empty-icon {
    font-size: 48px;
    margin-bottom: 16px;
  }

  p {
    margin: 0;
    font-size: 14px;
  }

  .empty-tip {
    font-size: 12px;
    margin-top: 8px;
  }
}

.cart-items {
  padding: 8px 0;
}

.cart-footer {
  padding: 12px 16px;
  background: #fff;
  box-shadow: 0 -1px 0 #f1f1f1, 0 -4px 14px rgba(0, 0, 0, 0.08);
}

.cart-summary {
  margin-bottom: 12px;
}

.total-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.total-count {
  font-size: 14px;
  color: #666;
}

.total-amount {
  font-size: 14px;
  color: #222;

  strong {
    font-size: 18px;
    color: #e80c00;
  }
}

.checkout-btn {
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: none;
  background: #00a384;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: #008f73;
  }

  &:disabled,
  &.is-disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}
</style>
