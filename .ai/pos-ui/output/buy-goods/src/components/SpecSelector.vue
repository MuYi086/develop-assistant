// 规格选择弹窗组件
<template>
  <el-dialog
    v-model="visible"
    title="选择规格"
    width="400px"
    :close-on-click-modal="false"
    class="spec-selector-dialog"
    @close="handleClose"
  >
    <div v-if="goods" class="spec-content">
      <!-- 商品信息 -->
      <div class="goods-preview">
        <img v-if="goods.image" :src="goods.image" :alt="goods.name" class="preview-image" />
        <div class="preview-info">
          <div class="preview-name">{{ goods.name }}</div>
          <div class="preview-price">¥{{ formatPrice(selectedPrice) }}</div>
        </div>
      </div>

      <!-- 规格选择 -->
      <div v-for="attr in skuAttributes" :key="attr.attrId" class="spec-section">
        <div class="spec-title">
          {{ attr.name }}
          <span v-if="attr.mustFlag" class="required">*</span>
        </div>
        <div class="spec-options">
          <button
            v-for="value in attr.values"
            :key="value.attrValId"
            class="spec-option"
            :class="{
              'is-selected': isSelected(attr.attrId, value.attrValId),
              'is-disabled': value.stock <= 0
            }"
            :disabled="value.stock <= 0"
            @click="selectAttribute(attr.attrId, value.attrValId)"
          >
            <img v-if="value.image" :src="value.image" class="option-image" />
            <span>{{ value.name }}</span>
            <span v-if="value.stock <= 0" class="stock-tag">售罄</span>
          </button>
        </div>
      </div>

      <!-- 数量选择 -->
      <div class="quantity-section">
        <div class="spec-title">数量</div>
        <div class="quantity-control">
          <button
            class="btn-minus"
            :disabled="quantity <= 1"
            @click="quantity--"
          >
            <el-icon><Minus /></el-icon>
          </button>
          <span class="quantity">{{ quantity }}</span>
          <button class="btn-plus" @click="quantity++">
            <el-icon><Plus /></el-icon>
          </button>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button
          type="primary"
          :disabled="!canConfirm"
          :loading="loading"
          @click="handleConfirm"
        >
          加入购物车
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { Plus, Minus } from '@element-plus/icons-vue'
import type { GoodsItem, SkuAttribute } from '../api/types'
import { skuDetailApi } from '../api/goods'

interface Props {
  modelValue: boolean
  goods: GoodsItem | null
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  confirm: [goodsId: number, skuId: number | undefined, quantity: number]
}>()

const visible = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const skuAttributes = ref<SkuAttribute[]>([])
const selectedAttributes = ref<Record<number, number>>({})
const quantity = ref(1)
const loading = ref(false)
const selectedPrice = ref(0)

// 是否有默认SKU
const hasDefaultSku = computed(() => {
  return props.goods?.defaultSku !== null
})

// 是否可以确认
const canConfirm = computed(() => {
  if (!props.goods) return false

  // 检查必填规格是否已选
  for (const attr of skuAttributes.value) {
    if (attr.mustFlag && !selectedAttributes.value[attr.attrId]) {
      return false
    }
  }
  return true
})

// 加载SKU详情
const loadSkuDetail = async () => {
  if (!props.goods) return

  loading.value = true
  try {
    const result = await skuDetailApi(props.goods.goodsId)
    skuAttributes.value = result.attributes
    selectedPrice.value = result.price

    // 设置默认选中
    selectedAttributes.value = {}
    for (const attr of result.attributes) {
      const defaultValue = attr.values.find(v => v.defaultFlag)
      if (defaultValue) {
        selectedAttributes.value[attr.attrId] = defaultValue.attrValId
      }
    }
  } finally {
    loading.value = false
  }
}

// 监听商品变化
watch(() => props.goods, (newGoods) => {
  if (newGoods) {
    quantity.value = 1
    selectedAttributes.value = {}
    loadSkuDetail()
  }
}, { immediate: true })

const isSelected = (attrId: number, valueId: number): boolean => {
  return selectedAttributes.value[attrId] === valueId
}

const selectAttribute = (attrId: number, valueId: number) => {
  selectedAttributes.value[attrId] = valueId
}

const handleClose = () => {
  visible.value = false
  quantity.value = 1
  selectedAttributes.value = {}
}

const handleConfirm = () => {
  if (!props.goods || !canConfirm.value) return

  // 计算选中的SKU ID
  let skuId: number | undefined
  if (skuAttributes.value.length > 0) {
    // 根据选中的属性计算SKU ID（这里简化处理）
    skuId = props.goods.defaultSku?.skuId
  }

  emit('confirm', props.goods.goodsId, skuId, quantity.value)
  handleClose()
}

const formatPrice = (price: number): string => {
  return price.toFixed(2)
}
</script>

<style scoped lang="scss">
.spec-selector-dialog {
  :deep(.el-dialog__body) {
    padding: 20px;
  }
}

.spec-content {
  max-height: 400px;
  overflow-y: auto;
}

.goods-preview {
  display: flex;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 16px;
}

.preview-image {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
}

.preview-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.preview-name {
  font-size: 16px;
  font-weight: 500;
  color: #222;
  margin-bottom: 8px;
}

.preview-price {
  font-size: 18px;
  font-weight: 600;
  color: #e80c00;
}

.spec-section {
  margin-bottom: 16px;
}

.spec-title {
  font-size: 14px;
  font-weight: 500;
  color: #222;
  margin-bottom: 8px;

  .required {
    color: #e80c00;
  }
}

.spec-options {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.spec-option {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 13px;

  &:hover:not(:disabled) {
    border-color: #00a384;
  }

  &.is-selected {
    border-color: #00a384;
    background: #e6f7f4;
    color: #00a384;
  }

  &:disabled,
  &.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.option-image {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  object-fit: cover;
}

.stock-tag {
  font-size: 10px;
  color: #e80c00;
  background: #ffe9e8;
  padding: 2px 4px;
  border-radius: 2px;
}

.quantity-section {
  margin-top: 16px;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn-minus,
.btn-plus {
  width: 32px;
  height: 32px;
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

  &:hover:not(:disabled) {
    background: #008f73;
    border-color: #008f73;
  }
}

.quantity {
  font-size: 16px;
  font-weight: 500;
  color: #222;
  min-width: 40px;
  text-align: center;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
</style>
