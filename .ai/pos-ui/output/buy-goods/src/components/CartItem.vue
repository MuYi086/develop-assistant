// 购物车商品项组件
<template>
  <div class="cart-item">
    <div class="item-info">
      <div class="item-name">{{ item.goodsName }}</div>
      <div v-if="item.skuName && item.skuName !== '默认规格'" class="item-sku">
        {{ item.skuName }}
      </div>
      <div v-if="item.subItems && item.subItems.length > 0" class="sub-items">
        <span v-for="(sub, idx) in item.subItems" :key="idx" class="sub-item">
          {{ sub.name }}x{{ sub.quantity }}
        </span>
      </div>
    </div>

    <div class="item-actions">
      <div class="item-price">¥{{ formatPrice(item.price * item.quantity) }}</div>
      <div class="quantity-control">
        <button
          class="btn-minus"
          :disabled="item.quantity <= 1"
          @click="handleDecrease"
        >
          <el-icon><Minus /></el-icon>
        </button>
        <span class="quantity">{{ item.quantity }}</span>
        <button class="btn-plus" @click="handleIncrease">
          <el-icon><Plus /></el-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus, Minus } from '@element-plus/icons-vue'
import type { CartItem } from '../api/types'

interface Props {
  item: CartItem
}

const props = defineProps<Props>()
const emit = defineEmits<{
  increase: [itemId: string]
  decrease: [itemId: string]
}>()

const handleIncrease = () => {
  emit('increase', props.item.id)
}

const handleDecrease = () => {
  emit('decrease', props.item.id)
}

const formatPrice = (price: number): string => {
  return price.toFixed(2)
}
</script>

<style scoped lang="scss">
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
}

.item-info {
  flex: 1;
  min-width: 0;
}

.item-name {
  font-size: 15px;
  font-weight: 500;
  color: #222;
  margin-bottom: 4px;
}

.item-sku {
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
}

.sub-items {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.sub-item {
  font-size: 11px;
  color: #999;
  background: #f5f5f5;
  padding: 2px 6px;
  border-radius: 4px;
}

.item-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.item-price {
  font-size: 15px;
  font-weight: 600;
  color: #e80c00;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-minus,
.btn-plus {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    border-color: #00a384;
    color: #00a384;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.btn-plus {
  background: #00a384;
  border-color: #00a384;
  color: #fff;

  &:hover {
    background: #008f73;
    border-color: #008f73;
  }
}

.quantity {
  font-size: 14px;
  font-weight: 500;
  color: #222;
  min-width: 24px;
  text-align: center;
}
</style>
