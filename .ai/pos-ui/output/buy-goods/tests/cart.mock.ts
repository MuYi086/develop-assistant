// Mock数据 - 购物车相关
import { vi } from 'vitest'

// API Mock函数
export const mockCartAddApi = vi.fn()
export const mockCartUpdateApi = vi.fn()
export const mockCartRemoveApi = vi.fn()
export const mockCartClearApi = vi.fn()
export const mockCartSubmitApi = vi.fn()
export const mockCartListApi = vi.fn()

// 购物车测试数据
export const mockCartData = {
  // 空购物车
  empty: {
    items: [],
    totalAmount: 0,
    totalCount: 0,
    diningWay: 'IN'
  },

  // 有商品的购物车
  withItems: {
    items: [
      {
        id: 'item_001',
        siteGoodsId: 1,
        goodsId: 101,
        goodsName: '红烧肉套餐',
        skuId: 10001,
        skuName: '标准份',
        price: 25.8,
        quantity: 2,
        pic: 'https://example.com/hongshaorou.jpg',
        goodsTypeFlag: 'SINGLE',
        incompatibleWithOut: false // 堂食外带都支持
      },
      {
        id: 'item_002',
        siteGoodsId: 2,
        goodsId: 201,
        goodsName: '小龙虾套餐',
        skuId: 20001,
        skuName: '麻辣大份',
        price: 88.0,
        quantity: 1,
        pic: 'https://example.com/xiaolongxia.jpg',
        goodsTypeFlag: 'COMB',
        subItems: [
          { name: '小龙虾3斤', quantity: 1 },
          { name: '配菜', quantity: 1 }
        ],
        incompatibleWithOut: false
      }
    ],
    totalAmount: 139.6, // 25.8*2 + 88.0
    totalCount: 3,
    diningWay: 'IN'
  },

  // 包含堂食专属商品的购物车
  withInOnlyItems: {
    items: [
      {
        id: 'item_003',
        siteGoodsId: 4,
        goodsId: 104,
        goodsName: '堂食专属汤品',
        skuId: 10004,
        skuName: '标准份',
        price: 18.0,
        quantity: 1,
        pic: '',
        goodsTypeFlag: 'SINGLE',
        incompatibleWithOut: true // 仅堂食，不支持外带
      }
    ],
    totalAmount: 18.0,
    totalCount: 1,
    diningWay: 'IN'
  }
}

// API响应
export const mockCartApiResponse = {
  // 加购成功
  addSuccess: {
    code: 200,
    data: {
      cartId: 'cart_001',
      itemId: 'item_new',
      message: '添加成功'
    }
  },

  // 提交成功
  submitSuccess: {
    code: 200,
    data: {
      orderId: 'ORD20240316001',
      orderNo: 'ORD202403160001',
      totalAmount: 139.6,
      status: 'PENDING_PAY'
    }
  },

  // 提交失败 - 购物车为空
  submitEmpty: {
    code: 30001,
    message: '购物车为空，无法提交'
  },

  // 提交失败 - 库存不足
  submitStockError: {
    code: 20003,
    message: '商品库存不足'
  },

  // 提交超时
  submitTimeout: {
    code: 0,
    message: '提交购物车超时'
  }
}
