// Mock数据 - 商品相关
import { vi } from 'vitest'

// API Mock函数
export const mockGoodsListApi = vi.fn()
export const mockCategoryListApi = vi.fn()
export const mockSkuDetailApi = vi.fn()
export const mockSkuInfoApi = vi.fn()

// 测试数据
export const mockGoodsListData = {
  // 单品商品
  singleGoods: [
    {
      siteGoodsId: 1,
      goodsId: 101,
      goodsName: '红烧肉套餐',
      number: 100,
      price: 25.8,
      oriPrice: 35.0,
      siteDiscountPrice: 22.8,
      pic: 'https://example.com/hongshaorou.jpg',
      soldOut: false,
      goodsTypeFlag: 'SINGLE',
      defaultSku: {
        spuId: 101,
        siteGoodsSkuId: 1001,
        skuId: 10001,
        img: 'https://example.com/hongshaorou.jpg',
        price: 25.8,
        name: '红烧肉套餐',
        status: 1,
        desc: ''
      }
    },
    {
      siteGoodsId: 3,
      goodsId: 103,
      goodsName: '已售罄单品',
      number: 0,
      price: 15.0,
      oriPrice: 20.0,
      pic: '',
      soldOut: true,
      goodsTypeFlag: 'SINGLE',
      defaultSku: null
    }
  ],

  // 套餐商品
  comboGoods: [
    {
      siteGoodsId: 2,
      goodsId: 201,
      goodsName: '小龙虾套餐',
      number: 50,
      price: 88.0,
      oriPrice: 128.0,
      siteDiscountPrice: 78.0,
      pic: 'https://example.com/xiaolongxia.jpg',
      soldOut: false,
      goodsTypeFlag: 'COMB',
      defaultSku: {
        spuId: 201,
        siteGoodsSkuId: 2001,
        skuId: 20001,
        img: 'https://example.com/xiaolongxia.jpg',
        price: 88.0,
        name: '麻辣大份',
        status: 1,
        desc: ''
      }
    }
  ]
}

// 分类数据
export const mockCategoryListData = [
  { name: '全部套餐', menuType: 'all' },
  { name: '快捷推荐', menuType: 'recommend' },
  { name: '团购上新', menuType: 'new' },
  { name: '小龙虾套餐', menuType: 'crayfish' },
  { name: '团圆家宴', menuType: 'family' },
  { name: '干岛湖有机鱼块', menuType: 'fish' },
  { name: '外酥里嫩', menuType: 'crispy' },
  { name: '健康轻食', menuType: 'light' },
  { name: '主食', menuType: 'staple' },
  { name: '鲜气解锁', menuType: 'fresh' },
]

// SKU规格数据
export const mockSkuDetailData = {
  siteId: 1,
  siteSchId: 1,
  goodsId: 201,
  goodsName: '小龙虾套餐',
  attrList: [
    {
      attrId: 1,
      mustFlag: 1,
      name: '口味',
      attrValList: [
        { attrValId: 11, name: '麻辣', defaultFlag: 1, img: '', stock: 30 },
        { attrValId: 12, name: '蒜蓉', defaultFlag: 0, img: '', stock: 20 },
        { attrValId: 13, name: '十三香', defaultFlag: 0, img: '', stock: 0 },
      ]
    },
    {
      attrId: 2,
      mustFlag: 1,
      name: '份量',
      attrValList: [
        { attrValId: 21, name: '大份(3斤)', defaultFlag: 1, img: '', stock: 30 },
        { attrValId: 22, name: '小份(1.5斤)', defaultFlag: 0, img: '', stock: 20 },
      ]
    }
  ]
}

// SKU选择后的信息
export const mockSkuInfoData = {
  // 正常SKU
  valid: {
    spuId: 201,
    siteGoodsSkuId: 2001,
    skuId: 20001,
    img: 'https://example.com/xiaolongxia.jpg',
    price: 88.0,
    name: '麻辣大份',
    status: 1,
    desc: ''
  },
  // 规格不存在
  notExist: {
    spuId: 201,
    siteGoodsSkuId: 0,
    skuId: 0,
    img: '',
    price: 0,
    name: '',
    status: 2,
    desc: '规格不存在'
  },
  // 已售罄
  soldOut: {
    spuId: 201,
    siteGoodsSkuId: 2003,
    skuId: 20003,
    img: 'https://example.com/xiaolongxia.jpg',
    price: 88.0,
    name: '十三香大份',
    status: 3,
    desc: '已售罄'
  },
  // 必选属性缺失
  missingRequired: {
    spuId: 201,
    siteGoodsSkuId: 0,
    skuId: 0,
    img: '',
    price: 0,
    name: '',
    status: -1,
    desc: '请选择口味'
  }
}
