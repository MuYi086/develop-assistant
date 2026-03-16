// 类型定义

// ============== 商品相关类型 ==============

export interface GoodsItem {
  id: number
  goodsId: number
  name: string
  price: number
  originalPrice: number
  discountPrice?: number
  image: string
  stock: number
  isSoldOut: boolean
  type: 'SINGLE' | 'COMB'
  defaultSku: SkuInfo | null
}

export interface CategoryItem {
  key: string
  name: string
}

export interface SkuAttribute {
  attrId: number
  mustFlag: boolean
  name: string
  values: SkuAttributeValue[]
}

export interface SkuAttributeValue {
  attrValId: number
  name: string
  defaultFlag: boolean
  image: string
  stock: number
}

export interface SkuInfo {
  spuId: number
  siteGoodsSkuId: number
  skuId: number
  image: string
  price: number
  name: string
  status: SkuStatus
  desc: string
}

export type SkuStatus = -1 | 1 | 2 | 3

export interface GoodsListParams {
  siteId: string
  showSoldOut: 0 | 1
  goodsName?: string
  menuType?: string
  diningWay?: string
}

export interface CategoryParams {
  siteId: string
  type: 1 | 2 | 3
  diningWay?: string
}

// ============== 购物车相关类型 ==============

export interface CartItem {
  id: string
  siteGoodsId: number
  goodsId: number
  goodsName: string
  skuId: number
  skuName: string
  price: number
  quantity: number
  image: string
  type: 'SINGLE' | 'COMB'
  subItems?: { name: string; quantity: number }[]
  incompatibleWithOut: boolean
}

export interface CartSubmitResult {
  orderId: string
  orderNo: string
  totalAmount: number
  status: string
}

// ============== Store 状态类型 ==============

export interface GoodsState {
  goodsList: GoodsItem[]
  categoryList: CategoryItem[]
  currentCategory: string
  diningWay: 'IN' | 'OUT'
  showSoldOut: boolean
  searchKeyword: string
  loading: boolean
  error: Error | null
}

export interface CartState {
  items: CartItem[]
  totalCount: number
  totalAmount: number
  diningWay: 'IN' | 'OUT'
  submitting: boolean
}

// ============== UI 状态类型 ==============

export interface UIState {
  specSelectorVisible: boolean
  currentSpecGoods: GoodsItem | null
  confirmDialogVisible: boolean
  confirmDialogTitle: string
  confirmDialogMessage: string
  confirmDialogType: 'warning' | 'info'
  confirmDialogCallback: (() => void) | null
}
