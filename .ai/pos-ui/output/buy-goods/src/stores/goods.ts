// Pinia Store - 商品状态管理
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { GoodsItem, CategoryItem, SkuAttribute, GoodsState } from '../api/types'
import { goodsListApi, categoryListApi, skuDetailApi } from '../api/goods'

export const useGoodsStore = defineStore('goods', () => {
  // ============== State ==============
  const goodsList = ref<GoodsItem[]>([])
  const categoryList = ref<CategoryItem[]>([])
  const currentCategory = ref<string>('all')
  const diningWay = ref<'IN' | 'OUT'>('IN')
  const showSoldOut = ref<boolean>(true)
  const searchKeyword = ref<string>('')
  const loading = ref<boolean>(false)
  const error = ref<Error | null>(null)

  // ============== Getters ==============
  const filteredGoodsList = computed(() => {
    let result = goodsList.value

    // 分类筛选
    if (currentCategory.value && currentCategory.value !== 'all') {
      // 实际项目中根据 category 筛选
    }

    // 售罄筛选
    if (!showSoldOut.value) {
      result = result.filter(g => !g.isSoldOut)
    }

    // 搜索筛选
    if (searchKeyword.value) {
      const keyword = searchKeyword.value.toLowerCase()
      result = result.filter(g => g.name.toLowerCase().includes(keyword))
    }

    return result
  })

  const currentCategoryName = computed(() => {
    const category = categoryList.value.find(c => c.key === currentCategory.value)
    return category?.name ?? '全部套餐'
  })

  // ============== Actions ==============

  // 加载商品列表
  const fetchGoodsList = async (siteId: string) => {
    loading.value = true
    error.value = null

    try {
      const data = await goodsListApi({
        siteId,
        showSoldOut: showSoldOut.value ? 1 : 0,
        goodsName: searchKeyword.value || undefined,
        menuType: currentCategory.value === 'all' ? undefined : currentCategory.value,
        diningWay: diningWay.value
      })
      goodsList.value = data
    } catch (err) {
      error.value = err instanceof Error ? err : new Error('加载失败')
      throw err
    } finally {
      loading.value = false
    }
  }

  // 加载分类列表
  const fetchCategoryList = async (siteId: string) => {
    try {
      const data = await categoryListApi({
        siteId,
        type: 1,
        diningWay: diningWay.value
      })
      categoryList.value = [
        { key: 'all', name: '全部套餐' },
        ...data
      ]
    } catch (err) {
      console.error('加载分类失败:', err)
    }
  }

  // 选择分类
  const setCategory = (key: string) => {
    currentCategory.value = key
  }

  // 切换用餐方式
  const setDiningWay = (way: 'IN' | 'OUT') => {
    diningWay.value = way
  }

  // 切换售罄显示
  const toggleShowSoldOut = () => {
    showSoldOut.value = !showSoldOut.value
  }

  // 设置搜索关键词
  const setSearchKeyword = (keyword: string) => {
    searchKeyword.value = keyword
  }

  // 根据ID获取商品
  const getGoodsById = (id: number): GoodsItem | undefined => {
    return goodsList.value.find(g => g.id === id)
  }

  // 清除错误
  const clearError = () => {
    error.value = null
  }

  return {
    // State
    goodsList,
    categoryList,
    currentCategory,
    diningWay,
    showSoldOut,
    searchKeyword,
    loading,
    error,

    // Getters
    filteredGoodsList,
    currentCategoryName,

    // Actions
    fetchGoodsList,
    fetchCategoryList,
    setCategory,
    setDiningWay,
    toggleShowSoldOut,
    setSearchKeyword,
    getGoodsById,
    clearError
  }
})
