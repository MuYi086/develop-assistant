// API 接口层 - 购物车相关
import type { CartItem, CartSubmitResult } from './types'

// 基础请求封装
const request = {
  async post<T>(url: string, data?: unknown): Promise<T> {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: data ? JSON.stringify(data) : undefined
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json()
  },

  async get<T>(url: string, config?: { params?: Record<string, unknown> }): Promise<T> {
    const query = config?.params
      ? '?' + new URLSearchParams(config.params as Record<string, string>).toString()
      : ''
    const response = await fetch(url + query)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json()
  }
}

// 获取购物车
export const cartListApi = async (siteId: number): Promise<CartItem[]> => {
  const response = await request.get<{
    code: number
    data: { items: CartItemDTO[] }
  }>('/api/cart/list', { params: { siteId } })

  if (response.code !== 200) {
    throw new Error('获取购物车失败')
  }

  return response.data.items.map(adaptCartItem)
}

// 添加商品到购物车
export const cartAddApi = async (params: {
  siteId: number
  siteGoodsId: number
  skuId?: number
  quantity?: number
}): Promise<void> => {
  const response = await request.post<{
    code: number
    message: string
  }>('/api/cart/add', params)

  if (response.code !== 200) {
    throw new Error(response.message || '添加失败')
  }
}

// 更新购物车商品数量
export const cartUpdateApi = async (params: {
  itemId: string
  quantity: number
}): Promise<void> => {
  const response = await request.post<{
    code: number
    message: string
  }>('/api/cart/update', params)

  if (response.code !== 200) {
    throw new Error(response.message || '更新失败')
  }
}

// 删除购物车商品
export const cartRemoveApi = async (itemId: string): Promise<void> => {
  const response = await request.post<{
    code: number
    message: string
  }>('/api/cart/remove', { itemId })

  if (response.code !== 200) {
    throw new Error(response.message || '删除失败')
  }
}

// 清空购物车
export const cartClearApi = async (): Promise<void> => {
  const response = await request.post<{
    code: number
    message: string
  }>('/api/cart/clear', {})

  if (response.code !== 200) {
    throw new Error(response.message || '清空失败')
  }
}

// 提交购物车
export const cartSubmitApi = async (): Promise<CartSubmitResult> => {
  const response = await request.post<{
    code: number
    data: {
      orderId: string
      orderNo: string
      totalAmount: number
      status: string
    }
    message: string
  }>('/api/order/create', {})

  if (response.code !== 200) {
    throw new Error(response.message || '提交失败')
  }

  return {
    orderId: response.data.orderId,
    orderNo: response.data.orderNo,
    totalAmount: response.data.totalAmount,
    status: response.data.status
  }
}

// 切换用餐方式
export const switchDiningWayApi = async (params: {
  diningWay: string
  removeIncompatible?: boolean
}): Promise<{
  success: boolean
  removedItems?: string[]
}> => {
  const response = await request.post<{
    code: number
    data: {
      success: boolean
      removedItems: string[]
    }
    message: string
  }>('/api/cart/diningWay', params)

  if (response.code !== 200) {
    throw new Error(response.message || '切换失败')
  }

  return {
    success: response.data.success,
    removedItems: response.data.removedItems
  }
}

// ============== 数据类型 ==============

interface CartItemDTO {
  id: string
  siteGoodsId: number
  goodsId: number
  goodsName: string
  skuId: number
  skuName: string
  price: number
  quantity: number
  pic: string
  goodsTypeFlag: 'SINGLE' | 'COMB'
  subItems?: SubItemDTO[]
  incompatibleWithOut?: boolean
}

interface SubItemDTO {
  name: string
  quantity: number
}

const adaptCartItem = (dto: CartItemDTO): CartItem => ({
  id: dto.id,
  siteGoodsId: dto.siteGoodsId,
  goodsId: dto.goodsId,
  goodsName: dto.goodsName,
  skuId: dto.skuId,
  skuName: dto.skuName,
  price: dto.price,
  quantity: dto.quantity,
  image: dto.pic,
  type: dto.goodsTypeFlag === 'SINGLE' ? 'SINGLE' : 'COMB',
  subItems: dto.subItems?.map(s => ({
    name: s.name,
    quantity: s.quantity
  })),
  incompatibleWithOut: dto.incompatibleWithOut ?? false
})
