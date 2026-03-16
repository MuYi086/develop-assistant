// 侧边导航组件
<template>
  <div class="sidebar-nav">
    <div class="nav-items">
      <button
        v-for="item in navItems"
        :key="item.key"
        class="nav-item"
        :class="{ 'is-active': activeNav === item.key }"
        @click="handleNavClick(item.key)"
      >
        <el-icon class="nav-icon">
          <component :is="item.icon" />
        </el-icon>
        <span class="nav-label">{{ item.label }}</span>
      </button>
    </div>

    <div class="user-info">
      <div class="user-avatar">
        <el-avatar :size="40" :icon="UserFilled" />
      </div>
      <div class="user-name">{{ userName }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UserFilled, Food, Ticket, Setting } from '@element-plus/icons-vue'

interface NavItem {
  key: string
  label: string
  icon: string
}

const navItems: NavItem[] = [
  { key: 'order', label: '点餐', icon: 'Food' },
  { key: 'group', label: '团购', icon: 'Ticket' },
  { key: 'settings', label: '设置', icon: 'Setting' }
]

const activeNav = ref('order')
const userName = ref('杨瑞闪')

const emit = defineEmits<{
  'nav-change': [key: string]
}>()

const handleNavClick = (key: string) => {
  activeNav.value = key
  emit('nav-change', key)
}
</script>

<style scoped lang="scss">
.sidebar-nav {
  width: 80px;
  height: 100%;
  background: #202020;
  display: flex;
  flex-direction: column;
  padding: 12px 0;
}

.nav-items {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 12px 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
  color: #aaa;

  &:hover {
    color: #fff;
  }

  &.is-active {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
  }
}

.nav-icon {
  font-size: 24px;
}

.nav-label {
  font-size: 12px;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.user-avatar {
  :deep(.el-avatar) {
    background: #666;
  }
}

.user-name {
  font-size: 14px;
  color: #aaa;
}
</style>
