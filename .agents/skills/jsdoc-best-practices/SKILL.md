---
name: jsdoc-best-practices
description: JSDoc conventions for Vue 3 + TypeScript projects, including file headers, interfaces, functions, composables, API modules, and Vue components. Use when adding or standardizing JSDoc comments.
license: MIT
metadata:
  author: muyi086
  version: "1.0"
---
# JSDoc 最佳实践

## 概述

本技能定义了 Vue 3 + TypeScript 项目中 JSDoc 注释的规范标准，确保代码文档的一致性、可读性和可维护性。

## 文件头部注释

每个文件顶部必须包含完整的头部注释：

```typescript
/**
 * @fileoverview 文件功能概述
 * @description 详细描述文件功能
 * - 功能点1：描述
 * - 功能点2：描述
 * - 功能点3：描述
 * @module 模块路径（如：stores/module/name 或 views/page/name）
 */
```

### 头部注释规范

| 标签 | 必填 | 说明 |
|------|------|------|
| `@fileoverview` | 是 | 一句话概括文件功能 |
| `@description` | 是 | 详细描述，使用 `-` 列表格式列出主要功能点 |
| `@module` | 是 | 模块路径，从项目根目录开始 |

## 接口/类型注释

### 导出接口

```typescript
/** 接口功能描述 */
export interface InterfaceName {
  /** 属性描述 */
  propertyName: string;
  /** 可选属性描述 */
  optionalProperty?: number;
}
```

### 类型别名

```typescript
/** 类型描述 */
export type DeviceType = "ENV_CONTROLLER" | "FEED_TOWER" | "CAMERA";
```

### 复杂接口示例

```typescript
/** 分页配置 */
export interface PaginationConfig {
  /** 当前页码 */
  currentPage: number;
  /** 每页条数 */
  pageSize: number;
  /** 总条数 */
  total: number;
}

/** 查询参数 */
export interface QueryParams {
  /** 名称（模糊搜索） */
  name: string;
  /** 类型筛选 */
  type: string;
  /** 开始日期 */
  startDate: string;
  /** 结束日期 */
  endDate: string;
}
```

## 函数/方法注释

### 标准函数

```typescript
/**
 * 函数功能描述
 * @param {ParamType} paramName - 参数描述
 * @param {OptionalType} [optionalParam] - 可选参数描述
 * @returns {ReturnType} 返回值描述
 * @throws {ErrorType} 异常描述（如有）
 * @example
 * // 使用示例
 * const result = functionName(arg1, arg2);
 */
const functionName = (paramName: ParamType, optionalParam?: OptionalType): ReturnType => {
  // 实现
};
```

### 异步函数

```typescript
/**
 * 获取数据列表
 * @param {ListParams} params - 查询参数
 * @returns {Promise<ReturnType>} 数据列表
 * @throws {Error} 请求失败时抛出错误
 */
const fetchData = async (params: ListParams): Promise<ReturnType> => {
  // 实现
};
```

### 工具函数示例

```typescript
/**
 * 格式化数值为显示文本
 * @param {number | null | undefined} value - 原始数值
 * @param {string} unit - 单位
 * @param {number} [fractionDigits] - 小数位数
 * @returns {string} 格式化后的文本
 */
const formatNumber = (
  value: number | null | undefined,
  unit: string,
  fractionDigits?: number
): string => {
  if (value == null) return "-";
  if (typeof fractionDigits === "number") {
    return `${value.toFixed(fractionDigits)}${unit}`;
  }
  return `${value}${unit}`;
};

/**
 * 提取错误信息
 * @param {unknown} error - 错误对象
 * @param {string} fallback - 默认错误信息
 * @returns {string} 错误信息
 */
const getErrorMessage = (error: unknown, fallback: string): string => {
  return (
    (error as { message?: string })?.message ||
    (error as { msg?: string })?.msg ||
    fallback
  );
};
```

## Pinia Store 注释规范

### Store 文件头部

```typescript
/**
 * @fileoverview 鸡舍监控列表 Store 模块
 * @description 管理鸡舍监控列表页的状态、查询、分页和格式化显示
 * - 状态管理：加载状态、原始数据列表
 * - 查询条件：鸡舍名称（模糊搜索）、鸡舍编号
 * - 分页管理：当前页码、每页条数、总条数
 * - 数据转换：原始数据格式化为表格显示文本
 * @module stores/chickenCoopMonitor/chickenCoopMonitor
 */
```

### Store 定义注释

```typescript
/**
 * 鸡舍监控列表 Store (Composition API)
 * @example
 * const store = useChickenCoopMonitorStore();
 * await store.fetchList();
 */
export const useChickenCoopMonitorStore = defineStore("chickenCoopMonitor", () => {
```

### 代码分区注释

Store 内部使用分区注释组织代码：

```typescript
export const useStore = defineStore("storeName", () => {
  // ==================== State ====================

  /** 数据列表 */
  const list = ref<DataItem[]>([]);
  /** 加载状态 */
  const loading = ref(false);

  // ==================== Getters ====================

  /**
   * 过滤后的数据
   * @returns {DataItem[]} 过滤结果
   */
  const filteredList = computed<DataItem[]>(() => {
    return list.value.filter(item => /* 过滤逻辑 */);
  });

  // ==================== Actions ====================

  /**
   * 获取数据列表
   * @returns {Promise<void>}
   */
  const fetchList = async (): Promise<void> => {
    // 实现
  };

  // ==================== Return ====================

  return {
    // State
    loading,
    list,
    // Getters
    filteredList,
    // Actions
    fetchList,
  };
});
```

### Return 对象分组

返回对象必须按类别分组注释：

```typescript
  return {
    // State - IDs & Tabs
    houseId,
    activeTab,
    // State - Loading
    initialLoading,
    detailLoading,
    // State - Data
    detail,
    monitorRecords,
    // Getters
    alertText,
    overviewIndicators,
    // Actions - Pagination
    setPagination,
    // Actions - Data Fetching
    fetchList,
    initialize,
  };
```

## Vue 组件注释

### 组件文件头部

```typescript
/**
 * @fileoverview 设备列表组件
 * @description 展示设备列表，支持搜索、分页、编辑、删除功能
 * - 搜索条件：设备名称、设备类型
 * - 表格列：序号、设备名称、设备类型、在线状态、操作
 * - 操作功能：编辑、查看详情、删除
 * @module views/device-management/device-list/index
 */
```

###  Props 注释

```typescript
interface Props {
  /** 设备ID */
  deviceId: number;
  /** 是否只读模式 */
  readonly?: boolean;
  /** 默认选中项 */
  defaultSelected?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  readonly: false,
  defaultSelected: () => [],
});
```

### Emits 注释

```typescript
const emit = defineEmits<{
  /** 选择变化事件 */
  (e: "selectionChange", selected: string[]): void;
  /** 确认事件 */
  (e: "confirm", data: FormData): void;
  /** 取消事件 */
  (e: "cancel"): void;
}>();
```

## API 模块注释

### API 文件头部

```typescript
/**
 * @fileoverview 设备管理 API 模块
 * @description 提供设备列表、详情、增删改查接口
 * - 设备列表：分页查询、条件筛选
 * - 设备详情：获取、更新、删除
 * - Mock 支持：开发阶段使用 Mock 数据
 * @module api/device-management/index
 */
```

### Mock 开关注释

```typescript
/**
 * 设备管理接口 Mock 开关
 * 上线接入真实接口前请改为 false，并补齐暂未定义的真实接口地址。
 */
export const USE_DEVICE_MOCK = true;
```

### API 函数注释

```typescript
/**
 * 获取设备列表
 * @param {DeviceListParams} data - 查询参数
 * @returns {Promise<ApiResponse<PageResult<DeviceItem>>>} 设备分页列表
 */
export function fetchDeviceList(data: DeviceListParams) {
  if (USE_DEVICE_MOCK) {
    return mockApi.fetchDeviceList(data);
  }
  return post<PageResult<DeviceItem>>("/device/list", data);
}

/**
 * 获取设备详情
 * @param {DeviceDetailParams} data - 查询参数
 * @returns {Promise<ApiResponse<DeviceDetail>>} 设备详情
 */
export function fetchDeviceDetail(data: DeviceDetailParams) {
  if (USE_DEVICE_MOCK) {
    return mockApi.fetchDeviceDetail(data);
  }
  return post<DeviceDetail>("/device/detail", data);
}
```

## 类型定义注释

### 响应类型

```typescript
/**
 * 通用接口返回结构
 * @template T 响应数据类型
 */
export interface ApiResponse<T> {
  /** 状态码：0 表示成功 */
  code: number;
  /** 提示信息 */
  msg: string;
  /** 响应数据 */
  data: T;
}

/**
 * 通用分页结构
 * @template T 记录类型
 */
export interface PageResult<T> {
  /** 当前页码 */
  current: number;
  /** 每页条数 */
  size: number;
  /** 总条数 */
  total: number;
  /** 数据记录 */
  records: T[];
}
```

## 注释风格要点

### 1. 简洁性
- 注释要简洁明了，避免冗余
- 函数名已表达的含义无需重复描述

### 2. 完整性
- 所有导出项（接口、类型、函数、常量）都必须有注释
- 复杂的内部函数也建议添加注释

### 3. 一致性
- 使用统一的注释格式
- 相同的概念使用相同的描述方式

### 4. 类型标注
- 使用 TypeScript 类型时，JSDoc 中也要标注类型
- 复杂类型使用 `@template` 说明泛型

### 5. 参数说明
- 每个参数都要有描述
- 可选参数使用 `[]` 包裹
- 参数描述以 `-` 分隔类型和说明

## 示例：完整的 Store 文件

```typescript
/**
 * @fileoverview 用户管理 Store 模块
 * @description 管理用户列表和详情数据
 * - 用户列表：分页、搜索、排序
 * - 用户详情：获取、更新、删除
 * - 权限管理：角色分配
 * @module stores/user/userManage
 */

import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

/** 用户查询参数 */
export interface UserQueryParams {
  /** 用户名（模糊搜索） */
  username: string;
  /** 角色筛选 */
  role: string;
  /** 状态筛选 */
  status: number | "";
}

/** 用户信息 */
export interface UserInfo {
  /** 用户ID */
  id: number;
  /** 用户名 */
  username: string;
  /** 邮箱 */
  email: string;
  /** 角色 */
  role: string;
  /** 状态：0-禁用，1-启用 */
  status: number;
}

/**
 * 用户管理 Store
 * @example
 * const store = useUserManageStore();
 * await store.fetchUserList();
 */
export const useUserManageStore = defineStore("userManage", () => {
  // ==================== State ====================

  /** 用户列表 */
  const userList = ref<UserInfo[]>([]);
  /** 加载状态 */
  const loading = ref(false);
  /** 查询参数 */
  const queryParams = reactive<UserQueryParams>({
    username: "",
    role: "",
    status: "",
  });

  // ==================== Getters ====================

  /**
   * 启用的用户列表
   * @returns {UserInfo[]} 过滤后的用户列表
   */
  const activeUsers = computed<UserInfo[]>(() => {
    return userList.value.filter((user) => user.status === 1);
  });

  // ==================== Actions ====================

  /**
   * 获取用户列表
   * @returns {Promise<void>}
   */
  const fetchUserList = async (): Promise<void> => {
    loading.value = true;
    try {
      // API 调用
    } finally {
      loading.value = false;
    }
  };

  // ==================== Return ====================

  return {
    // State
    userList,
    loading,
    queryParams,
    // Getters
    activeUsers,
    // Actions
    fetchUserList,
  };
});
```

## 工具推荐

- **ESLint**: 配置 `eslint-plugin-jsdoc` 检查注释规范
- **TypeDoc**: 基于 JSDoc 生成 API 文档
- **VS Code**: 安装 JSDoc 插件提供智能提示
