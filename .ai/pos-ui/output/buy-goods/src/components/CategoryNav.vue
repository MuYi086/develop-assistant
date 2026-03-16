// 分类导航组件
<template>
  <div class="category-nav">
    <div class="nav-header">
      <div class="dining-way-toggle">
        <button
          class="toggle-btn"
          :class="{ 'is-active': diningWay === 'IN' }"
          @click="switchDiningWay('IN')"
        >
          <el-icon><ForkSpoon /></el-icon>
          <span>堂食</span>
        </button>
        <button
          class="toggle-btn"
          :class="{ 'is-active': diningWay === 'OUT' }"
          @click="switchDiningWay('OUT')"
        >
          <el-icon><ShoppingBag /></el-icon>
          <span>外带</span>
        </button>
      </div>
    </div>

    <div class="nav-list">
      <button
        v-for="category in categories"
        :key="category.key"
        class="category-item"
        :class="{ 'is-active': currentCategory === category.key }"
        @click="selectCategory(category.key)"
      >
        {{ category.name }}
      </button>
    </div>

    <div class="nav-footer">
      <button class="action-btn" @click="handleSearch">
        <el-icon><Search /></el-icon>
        <span>搜索</span>
      </button>
      <button class="action-btn" @click="handleMore">
        <el-icon><More /></el-icon>
        <span>更多</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ForkSpoon, ShoppingBag, Search, More } from '@element-plus/icons-vue'
import type { CategoryItem } from '../api/types'

interface Props {
  categories: CategoryItem[]
  currentCategory: string
  diningWay: 'IN' | 'OUT'
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:currentCategory': [key: string]
  'update:diningWay': [way: 'IN' | 'OUT']
  'category-change': [key: string]
  'dining-way-change': [way: 'IN' | 'OUT', incompatibleItems: string[]]
  search: []
  more: []
}>()

const selectCategory = (key: string) => {
  emit('update:currentCategory', key)
  emit('category-change', key)
}

const switchDiningWay = async (way: 'IN' | 'OUT') => {
  if (way === props.diningWay) return

  emit('update:diningWay', way)
  emit('dining-way-change', way, []) // 由父组件处理冲突检测
}

const handleSearch = () => {
  emit('search')
}

const handleMore = () => {
  emit('more')
}
</script>

<style scoped lang="scss">
.category-nav {
  width: 164px;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e8e8e8;
}

.nav-header {
  padding: 12px;
  border-bottom: 1px solid #f0f0f0;
}

.dining-way-toggle {
  display: flex;
  gap: 8px;
}

.toggle-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 4px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 12px;
  color: #666;

  &:hover {
    border-color: #00a384;
    color: #00a384;
  }

  &.is-active {
    background: #00a384;
    border-color: #00a384;
    color: #fff;
  }

  .el-icon {
    font-size: 16px;
  }
}

.nav-list {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
}

.category-item {
  width: 100%;
  padding: 12px 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  text-align: left;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 4px;

  &:hover {
    background: #f5f5f5;
    color: #222;
  }

  &.is-active {
    background: #e6f7f4;
    color: #00a384;
    font-weight: 500;
  }
}

.nav-footer {
  padding: 12px;
  border-top: 1px solid #f0f0f0;
  display: flex;
  gap: 8px;
}

.action-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 4px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 12px;
  color: #666;

  &:hover {
    color: #00a384;
  }

  .el-icon {
    font-size: 18px;
  }
}
</style>
