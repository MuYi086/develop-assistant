// Pinia Store - UI 状态管理
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { GoodsItem } from '../api/types'

export const useUIStore = defineStore('ui', () => {
  // ============== State ==============

  // 规格选择弹窗
  const specSelectorVisible = ref(false)
  const currentSpecGoods = ref<GoodsItem | null>(null)

  // 确认弹窗
  const confirmDialogVisible = ref(false)
  const confirmDialogTitle = ref('温馨提示')
  const confirmDialogMessage = ref('')
  const confirmDialogType = ref<'warning' | 'info'>('info')
  const confirmDialogConfirmText = ref('确认')
  const confirmDialogCancelText = ref('取消')
  let confirmDialogResolve: ((value: boolean) => void) | null = null

  // 搜索弹窗
  const searchModalVisible = ref(false)

  // 更多菜单
  const moreMenuVisible = ref(false)

  // ============== Actions ==============

  // 打开规格选择弹窗
  const openSpecSelector = (goods: GoodsItem) => {
    currentSpecGoods.value = goods
    specSelectorVisible.value = true
  }

  // 关闭规格选择弹窗
  const closeSpecSelector = () => {
    specSelectorVisible.value = false
    currentSpecGoods.value = null
  }

  // 显示确认弹窗
  const showConfirm = (options: {
    title?: string
    message: string
    type?: 'warning' | 'info'
    confirmText?: string
    cancelText?: string
  }): Promise<boolean> => {
    confirmDialogTitle.value = options.title ?? '温馨提示'
    confirmDialogMessage.value = options.message
    confirmDialogType.value = options.type ?? 'info'
    confirmDialogConfirmText.value = options.confirmText ?? '确认'
    confirmDialogCancelText.value = options.cancelText ?? '取消'
    confirmDialogVisible.value = true

    return new Promise((resolve) => {
      confirmDialogResolve = resolve
    })
  }

  // 确认弹窗 - 确认
  const confirmDialogConfirm = () => {
    confirmDialogVisible.value = false
    confirmDialogResolve?.(true)
    confirmDialogResolve = null
  }

  // 确认弹窗 - 取消
  const confirmDialogCancel = () => {
    confirmDialogVisible.value = false
    confirmDialogResolve?.(false)
    confirmDialogResolve = null
  }

  // 打开搜索弹窗
  const openSearch = () => {
    searchModalVisible.value = true
  }

  // 关闭搜索弹窗
  const closeSearch = () => {
    searchModalVisible.value = false
  }

  // 打开更多菜单
  const openMoreMenu = () => {
    moreMenuVisible.value = true
  }

  // 关闭更多菜单
  const closeMoreMenu = () => {
    moreMenuVisible.value = false
  }

  return {
    // State
    specSelectorVisible,
    currentSpecGoods,
    confirmDialogVisible,
    confirmDialogTitle,
    confirmDialogMessage,
    confirmDialogType,
    confirmDialogConfirmText,
    confirmDialogCancelText,
    searchModalVisible,
    moreMenuVisible,

    // Actions
    openSpecSelector,
    closeSpecSelector,
    showConfirm,
    confirmDialogConfirm,
    confirmDialogCancel,
    openSearch,
    closeSearch,
    openMoreMenu,
    closeMoreMenu
  }
})
