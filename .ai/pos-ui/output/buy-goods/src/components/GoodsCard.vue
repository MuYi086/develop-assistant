// 商品卡片组件
<template>
  <div
    class="goods-card"
    :class="{ 'is-sold-out': goods.isSoldOut }"
    @click="handleClick"
  >
    <!-- 商品图片 -->
    <div class="goods-image">
      <img v-if="goods.image" :src="goods.image" :alt="goods.name" />
      <div v-else class="placeholder-image">
        <el-icon><Picture /></el-icon>
      </div>

      <!-- 标签 -->
      <div class="tags">
        <span v-if="goods.isSoldOut" class="tag tag-sold-out">售罄</span>
        <span v-if="goods.type === 'COMB'" class="tag tag-combo">套餐</span>
      </div>
    </div>

    <!-- 商品信息 -->
    <div class="goods-info">
      <div class="goods-name" :class="{ 'text-muted': goods.isSoldOut }">
        {{ goods.name }}
      </div>
      <div class="goods-price">
        <span class="price">¥{{ formatPrice(goods.price) }}</span>
        <span v-if="goods.originalPrice && goods.originalPrice !== goods.price" class="original-price">
          ¥{{ formatPrice(goods.originalPrice) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Picture } from '@element-plus/icons-vue'
import type { GoodsItem } from '../api/types'

interface Props {
  goods: GoodsItem
}

const props = defineProps<Props>()
const emit = defineEmits<{
  click: [goods: GoodsItem]
}>()

const handleClick = () => {
  if (!props.goods.isSoldOut) {
    emit('click', props.goods)
  }
}

const formatPrice = (price: number): string => {
  return price.toFixed(2)
}
</script>

<style scoped lang="scss">
.goods-card {
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover:not(.is-sold-out) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &.is-sold-out {
    cursor: not-allowed;
    opacity: 0.7;
  }
}

.goods-image {
  position: relative;
  height: 86px;
  background: #f5f5f5;
  border-radius: 8px 8px 0 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .placeholder-image {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    font-size: 24px;
  }
}

.tags {
  position: absolute;
  top: 6px;
  left: 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.tag {
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;

  &-sold-out {
    background: #ffe9e8;
    color: #e80c00;
    border: 0.5px solid #e80c00;
  }

  &-combo {
    background: #e8e8ff;
    color: #6367ff;
    border: 0.5px solid #6367ff;
  }
}

.goods-info {
  padding: 8px 6px;
}

.goods-name {
  font-size: 15px;
  font-weight: normal;
  color: #222222;
  line-height: 1.4;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &.text-muted {
    color: #999999;
  }
}

.goods-price {
  display: flex;
  align-items: center;
  gap: 6px;
}

.price {
  font-size: 14px;
  font-weight: 600;
  color: #e80c00;
}

.original-price {
  font-size: 12px;
  color: #999;
  text-decoration: line-through;
}
</style>
