// API 接口层 - 商品相关
import type {
  GoodsItem,
  CategoryItem,
  SkuAttribute,
  SkuInfo,
  GoodsListParams,
  CategoryParams
} from './types'

// 基础请求封装
const request = {
  async get<T>(url: string, config?: { params?: Record<string, unknown> }): Promise<T> {
    const query = config?.params
      ? '?' + new URLSearchParams(config.params as Record<string, string>).toString()
      : ''
    const response = await fetch(url + query)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json()
  },

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
  }
}

// 商品列表接口
export const goodsListApi = async (params: GoodsListParams): Promise<GoodsItem[]> => {
  const response = await request.get<{
    code: number
    data: { list: GoodsItemDTO[] }
  }>('/api/pos/goods/list', { params })

  if (response.code !== 200) {
    throw new Error('获取商品列表失败')
  }

  return response.data.list.map(adaptGoodsItem)
}

// 分类列表接口
export const categoryListApi = async (params: CategoryParams): Promise<CategoryItem[]> => {
  const response = await request.get<{
    code: number
    data: { list: CategoryDTO[] }
  }>('/api/pos/category/list', { params })

  if (response.code !== 200) {
    throw new Error('获取分类列表失败')
  }

  return response.data.list.map(adaptCategory)
}

// SKU详情接口
export const skuDetailApi = async (siteGoodsId: number): Promise<SkuAttribute[]> => {
  const response = await request.get<{
    code: number
    data: { attrList: SkuAttributeDTO[] }
  }>('/api/pos/goods/sku/detail', { params: { siteGoodsId } })

  if (response.code !== 200) {
    throw new Error('获取SKU详情失败')
  }

  return response.data.attrList.map(adaptSkuAttribute)
}

// SKU信息查询（选择规格后）
export const skuInfoApi = async (
  siteGoodsId: number,
  attrValList: number[]
): Promise<SkuInfo> => {
  const response = await request.get<{
    code: number
    data: SkuInfoDTO
  }>('/api/pos/goods/sku/info', {
    params: { siteGoodsId, attrValList: attrValList.join(',') }
  })

  if (response.code !== 200) {
    throw new Error('获取SKU信息失败')
  }

  return adaptSkuInfo(response.data)
}

// ============== 数据转换 ==============

interface GoodsItemDTO {
  siteGoodsId: number
  goodsId: number
  goodsName: string
  number: number
  price: number
  oriPrice: number
  siteDiscountPrice?: number
  pic: string
  soldOut: boolean
  goodsTypeFlag: 'SINGLE' | 'COMB'
  defaultSku: DefaultSkuDTO | null
}

interface DefaultSkuDTO {
  spuId: number
  siteGoodsSkuId: number
  skuId: number
  img: string
  price: number
  name: string
  status: number
  desc: string
}

interface CategoryDTO {
  name: string
  menuType: string
}

interface SkuAttributeDTO {
  attrId: number
  mustFlag: number
  name: string
  attrValList: SkuAttributeValueDTO[]
}

interface SkuAttributeValueDTO {
  attrValId: number
  name: string
  defaultFlag: number
  img: string
  stock: number
}

interface SkuInfoDTO {
  spuId: number
  siteGoodsSkuId: number
  skuId: number
  img: string
  price: number
  name: string
  status: number
  desc: string
}

const adaptGoodsItem = (dto: GoodsItemDTO): GoodsItem => ({
  id: dto.siteGoodsId,
  goodsId: dto.goodsId,
  name: dto.goodsName,
  price: dto.price,
  originalPrice: dto.oriPrice,
  discountPrice: dto.siteDiscountPrice,
  image: dto.pic,
  stock: dto.number,
  isSoldOut: dto.soldOut,
  type: dto.goodsTypeFlag === 'SINGLE' ? 'SINGLE' : 'COMB',
  defaultSku: dto.defaultSku ? {
    spuId: dto.defaultSku.spuId,
    siteGoodsSkuId: dto.defaultSku.siteGoodsSkuId,
    skuId: dto.defaultSku.skuId,
    image: dto.defaultSku.img,
    price: dto.defaultSku.price,
    name: dto.defaultSku.name,
    status: dto.defaultSku.status,
    desc: dto.defaultSku.desc
  } : null
})

const adaptCategory = (dto: CategoryDTO): CategoryItem => ({
  key: dto.menuType,
  name: dto.name
})

const adaptSkuAttribute = (dto: SkuAttributeDTO): SkuAttribute => ({
  attrId: dto.attrId,
  mustFlag: dto.mustFlag === 1,
  name: dto.name,
  values: dto.attrValList.map(v => ({
    attrValId: v.attrValId,
    name: v.name,
    defaultFlag: v.defaultFlag === 1,
    image: v.img,
    stock: v.stock
  }))
})

const adaptSkuInfo = (dto: SkuInfoDTO): SkuInfo => ({
  spuId: dto.spuId,
  siteGoodsSkuId: dto.siteGoodsSkuId,
  skuId: dto.skuId,
  image: dto.img,
  price: dto.price,
  name: dto.name,
  status: dto.status,
  desc: dto.desc
})
