// Pinia Store - 购物车状态管理
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { CartItem, CartSubmitResult } from '../api/types'
import {
  cartListApi,
  cartAddApi,
  cartUpdateApi,
  cartRemoveApi,
  cartClearApi,
  cartSubmitApi,
  switchDiningWayApi
} from '../api/cart'

export const useCartStore = defineStore('cart', () => {
  // ============== State ==============
  const items = ref<CartItem[]>([])
  const diningWay = ref<'IN' | 'OUT'>('IN')
  const submitting = ref<boolean>(false)
  const siteId = ref<string>('')

  // ============== Getters ==============

  // 商品总数
  const totalCount = computed(() => {
    return items.value.reduce((sum, item) => sum + item.quantity, 0)
  })

  // 商品总价
  const totalAmount = computed(() => {
    return items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  })

  // 是否为空
  const isEmpty = computed(() => items.value.length === 0)

  // 是否可提交
  const canSubmit = computed(() => !isEmpty.value && !submitting.value)

  // 获取冲突商品（切换用餐方式时）
  const getIncompatibleItems = (newDiningWay: 'IN' | 'OUT') => {
    if (newDiningWay === 'IN') {
      // 堂食模式都支持
      return []
    }
    // 外带模式下，不兼容的商品
    return items.value.filter(item => item.incompatibleWithOut)
  }

  // ============== Actions ==============

  // 加载购物车
  const fetchCart = async (sid: string) => {
    siteId.value = sid
    try {
      const data = await cartListApi(Number(sid))
      items.value = data
    } catch (err) {
      console.error('加载购物车失败:', err)
    }
  }

  // 添加商品到购物车
  const addToCart = async (
    siteGoodsId: number,
    skuId?: number,
    quantity: number = 1
  ) => {
    try {
      await cartAddApi({
        siteId: Number(siteId.value),
        siteGoodsId,
        skuId,
        quantity
      })
      // 重新加载购物车
      await fetchCart(siteId.value)
    } catch (err) {
      console.error('添加失败:', err)
      throw err
    }
  }

  // 增加数量
  const increaseQuantity = async (itemId: string) => {
    const item = items.value.find(i => i.id === itemId)
    if (!item) return

    try {
      await cartUpdateApi({
        itemId,
        quantity: item.quantity + 1
      })
      item.quantity++
    } catch (err) {
      console.error('更新数量失败:', err)
      throw err
    }
  }

  // 减少数量
  const decreaseQuantity = async (itemId: string) => {
    const item = items.value.find(i => i.id === itemId)
    if (!item) return

    if (item.quantity <= 1) {
      // 数量为1时，删除商品
      await removeItem(itemId)
      return
    }

    try {
      await cartUpdateApi({
        itemId,
        quantity: item.quantity - 1
      })
      item.quantity--
    } catch (err) {
      console.error('更新数量失败:', err)
      throw err
    }
  }

  // 直接设置数量
  const setQuantity = async (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      await removeItem(itemId)
      return
    }

    try {
      await cartUpdateApi({ itemId, quantity })
      const item = items.value.find(i => i.id === itemId)
      if (item) {
        item.quantity = quantity
      }
    } catch (err) {
      console.error('更新数量失败:', err)
      throw err
    }
  }

  // 删除商品
  const removeItem = async (itemId: string) => {
    try {
      await cartRemoveApi(itemId)
      const index = items.value.findIndex(i => i.id === itemId)
      if (index > -1) {
        items.value.splice(index, 1)
      }
    } catch (err) {
      console.error('删除失败:', err)
      throw err
    }
  }

  // 清空购物车
  const clearCart = async () => {
    try {
      await cartClearApi()
      items.value = []
    } catch (err) {
      console.error('清空失败:', err)
      throw err
    }
  }

  // 提交购物车
  const submitCart = async (): Promise<CartSubmitResult> => {
    if (isEmpty.value) {
      throw new Error('购物车为空')
    }

    submitting.value = true
    try {
      const result = await cartSubmitApi()
      // 提交成功后清空购物车
      items.value = []
      return result
    } catch (err) {
      console.error('提交失败:', err)
      throw err
    } finally {
      submitting.value = false
    }
  }

  // 切换用餐方式
  const switchDiningWay = async (
    newDiningWay: 'IN' | 'OUT',
    removeIncompatible: boolean = false
  ): Promise<{ success: boolean; removedCount: number }> => {
    try {
      const result = await switchDiningWayApi({
        diningWay: newDiningWay,
        removeIncompatible
      })

      if (result.success) {
        diningWay.value = newDiningWay
        if (result.removedItems && result.removedItems.length > 0) {
          // 移除冲突商品
          items.value = items.value.filter(
            item => !result.removedItems?.includes(item.id)
          )
        }
      }

      return {
        success: result.success,
        removedCount: result.removedItems?.length ?? 0
      }
    } catch (err) {
      console.error('切换失败:', err)
      throw err
    }
  }

  return {
    // State
    items,
    diningWay,
    submitting,

    // Getters
    totalCount,
    totalAmount,
    isEmpty,
    canSubmit,
    getIncompatibleItems,

    // Actions
    fetchCart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    setQuantity,
    removeItem,
    clearCart,
    submitCart,
    switchDiningWay
  }
})
