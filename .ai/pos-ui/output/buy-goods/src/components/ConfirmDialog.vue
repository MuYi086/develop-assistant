// 确认弹窗组件
<template>
  <el-dialog
    v-model="visible"
    :title="title"
    width="360px"
    :close-on-click-modal="false"
    class="confirm-dialog"
    :show-close="false"
    align-center
  >
    <div class="confirm-content">
      <el-icon v-if="type === 'warning'" class="warning-icon">
        <WarningFilled />
      </el-icon>
      <el-icon v-else class="info-icon">
        <InfoFilled />
      </el-icon>
      <p class="confirm-message">{{ message }}</p>
    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleCancel">
          {{ cancelText }}
        </el-button>
        <el-button
          :type="type === 'warning' ? 'danger' : 'primary'"
          @click="handleConfirm"
        >
          {{ confirmText }}
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { WarningFilled, InfoFilled } from '@element-plus/icons-vue'

interface Props {
  modelValue: boolean
  title: string
  message: string
  type: 'warning' | 'info'
  confirmText: string
  cancelText: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  confirm: []
  cancel: []
}>()

const visible = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const handleConfirm = () => {
  emit('confirm')
  visible.value = false
}

const handleCancel = () => {
  emit('cancel')
  visible.value = false
}
</script>

<style scoped lang="scss">
.confirm-dialog {
  :deep(.el-dialog__header) {
    display: none;
  }

  :deep(.el-dialog__body) {
    padding: 32px 24px 16px;
  }

  :deep(.el-dialog__footer) {
    padding: 16px 24px 24px;
  }
}

.confirm-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.warning-icon {
  font-size: 48px;
  color: #e6a23c;
  margin-bottom: 16px;
}

.info-icon {
  font-size: 48px;
  color: #909399;
  margin-bottom: 16px;
}

.confirm-message {
  font-size: 15px;
  color: #222;
  line-height: 1.6;
  margin: 0;
}

.dialog-footer {
  display: flex;
  justify-content: center;
  gap: 12px;

  .el-button {
    min-width: 80px;
  }
}
</style>
