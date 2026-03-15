# 购买商品 - 组件契约

## 页面路由

| 路由 | 页面组件 | 说明 |
|------|----------|------|
| `/buy-goods` | BuyGoodsPage | 购买商品主页面 |

## 组件清单

| 组件名 | 类型 | 文件路径 | 说明 |
|--------|------|----------|------|
| BuyGoodsPage | Page | `views/buy-goods/index.vue` | 购买商品页面主体 |
| ProductList | Component | `views/buy-goods/components/ProductList.vue` | 商品列表区域 |
| ProductCard | Component | `views/buy-goods/components/ProductCard.vue` | 单个商品卡片 |
| CategoryTabs | Component | `views/buy-goods/components/CategoryTabs.vue` | 分类Tab栏 |
| SearchModal | Component | `views/buy-goods/components/SearchModal.vue` | 商品搜索弹窗 |
| SpecSelector | Component | `views/buy-goods/components/SpecSelector.vue` | 套餐规格选择弹窗 |
| ShoppingCart | Component | `views/buy-goods/components/ShoppingCart.vue` | 购物车区域 |
| CartItem | Component | `views/buy-goods/components/CartItem.vue` | 购物车单项 |
| **QuantityStepper** | **Component** | `components/QuantityStepper.vue` | **数量加减器（复用组件）** |
| DiningModeSwitch | Component | `views/buy-goods/components/DiningModeSwitch.vue` | 用餐方式切换 |
| ConfirmDialog | Component | `components/ConfirmDialog.vue` | 通用确认弹窗 |

## Props 契约

### ProductCard 商品卡片

```typescript
interface ProductCardProps {
  /** 店铺商品ID */
  siteGoodsId: number;
  /** 商品名称 */
  goodsName: string;
  /** 售价 */
  price: number;
  /** 原价 */
  oriPrice: number;
  /** 店铺优惠价 */
  siteDiscountPrice?: number;
  /** 商品图片 */
  pic: string;
  /** 是否售罄 */
  soldOut: boolean;
  /** 商品类型 SINGLE-普通商品 COMB-套餐商品 */
  goodsTypeFlag: 'SINGLE' | 'COMB';
  /** 默认SKU信息 */
  defaultSku?: DefaultSku;
  /** 已加购数量 */
  cartQuantity?: number;
}

interface DefaultSku {
  spuId: number;
  siteGoodsSkuId: number;
  skuId: number;
  img: string;
  price: number;
  name: string;
  status: number; // -1必选属性缺失 1正常 2规格不存在 3已售罄
  desc: string;
}
```

### CategoryTabs 分类Tab

```typescript
interface CategoryTabsProps {
  /** 分类列表 */
  categories: Category[];
  /** 当前选中分类值 */
  activeMenuType: string;
}

interface Category {
  name: string;
  menuType: string;
}
```

### SpecSelector 规格选择器

```typescript
interface SpecSelectorProps {
  /** 是否显示 */
  visible: boolean;
  /** 店铺商品ID */
  siteGoodsId: number;
  /** 商品名称 */
  goodsName: string;
  /** 属性列表 */
  attrList: Attr[];
}

interface Attr {
  attrId: number;
  mustFlag: number; // 是否必选
  name: string;
  attrValList: AttrVal[];
}

interface AttrVal {
  attrValId: number;
  name: string;
  defaultFlag: number; // 是否默认选择
  img: string;
  stock: number;
}

// 规格选择结果
interface SelectedSku {
  spuId: number;
  siteGoodsSkuId: number;
  skuId: number;
  img: string;
  price: number;
  name: string;
  status: number;
  desc: string;
}
```

### ShoppingCart 购物车

```typescript
interface ShoppingCartProps {
  /** 购物车商品列表 */
  items: CartItem[];
  /** 总金额 */
  totalAmount: number;
  /** 总数量 */
  totalCount: number;
  /** 用餐方式 */
  diningWay: string;
  /** 是否可提交（购物车非空） */
  submittable: boolean;
}
```

### CartItem 购物车项

```typescript
interface CartItemProps {
  /** 购物车项ID */
  id: string;
  /** 商品名称 */
  goodsName: string;
  /** SKU复合名称 */
  skuName?: string;
  /** 子商品明细（套餐有） */
  subItems?: SubItem[];
  /** 售价 */
  price: number;
  /** 数量 */
  quantity: number;
  /** 最大可购买数量（库存限制） */
  maxQuantity?: number;
}
```

### QuantityStepper 数量加减器（新增独立组件）

```typescript
interface QuantityStepperProps {
  /** 当前数量 */
  value: number;
  /** 最小值 */
  min?: number;
  /** 最大值 */
  max?: number;
  /** 步长 */
  step?: number;
  /** 是否禁用 */
  disabled?: boolean;
  /** 尺寸 sm/md/lg */
  size?: 'sm' | 'md' | 'lg';
}

interface QuantityStepperEvents {
  /** 值变化 */
  'change': (value: number) => void;
  /** 达到最小值 */
  'min-reached': () => void;
  /** 达到最大值 */
  'max-reached': () => void;
}
```

## Events 契约

| 组件 | 事件 | 参数 | 说明 |
|------|------|------|------|
| ProductCard | `click` | `product: Product` | 点击商品卡片 |
| ProductCard | `add-to-cart` | `siteGoodsId: number` | 直接加购（单品） |
| ProductCard | `select-spec` | `siteGoodsId: number` | 选择规格（套餐） |
| CategoryTabs | `change` | `menuType: string` | 切换分类 |
| SearchModal | `search` | `goodsName: string` | 执行搜索 |
| SearchModal | `close` | - | 关闭弹窗 |
| SpecSelector | `confirm` | `sku: SelectedSku` | 确认选择规格并加购 |
| SpecSelector | `cancel` | - | 取消选择 |
| **QuantityStepper** | ** `update:modelValue`** | ** `value: number`** | **数量变化（v-model）** |
| ShoppingCart | `submit` | - | 提交购物车去收款 |
| ShoppingCart | `clear` | - | 清空购物车 |
| CartItem | `update:quantity` | `{ id: string, quantity: number }` | 更新数量 |
| CartItem | `remove` | `id: string` | 删除商品 |
| DiningModeSwitch | `change` | `diningWay: string` | 切换用餐方式 |
| DiningModeSwitch | `before-change` | `diningWay: string` | 切换前检查 |

## Store 契约 (Pinia) - 拆分设计

### ProductStore (商品相关)

```typescript
// stores/product.ts
interface ProductState {
  // 商品列表
  products: Product[];
  loading: boolean;

  // 分类
  categories: Category[];
  currentMenuType: string;

  // 筛选条件
  filters: {
    showSoldOut: boolean; // 0-不显示售罄 1-显示售罄
    goodsName: string; // 模糊搜索
    diningWay: string;
  };

  // 规格选择
  specSelectorVisible: boolean;
  selectedProduct: Product | null;
  skuDetail: SkuDetail | null;
}

interface ProductActions {
  // 商品列表
  fetchProducts(siteId: number): Promise<void>;
  setFilter(key: keyof ProductState['filters'], value: any): void;

  // 分类
  fetchCategories(siteId: number, type: number): Promise<void>;
  setCategory(menuType: string): void;

  // 搜索
  searchProducts(goodsName: string): void;
  toggleShowSoldOut(): void;

  // 规格选择
  openSpecSelector(product: Product): void;
  closeSpecSelector(): void;
  fetchSkuDetail(siteGoodsId: number): Promise<void>;
  fetchSelectedSku(siteGoodsId: number, attrValList: number[]): Promise<SelectedSku>;
}
```

### CartStore (购物车相关)

```typescript
// stores/cart.ts
interface CartState {
  // 购物车数据
  items: CartItem[];
  loading: boolean;

  // 金额统计
  totalAmount: number;
  totalCount: number;

  // 用餐方式
  diningWay: string;
}

interface CartActions {
  // 购物车操作
  fetchCart(siteId: number): Promise<void>;

  // 加购
  addToCart(siteGoodsId: number, skuId?: number): Promise<void>;

  // 更新数量
  updateQuantity(itemId: string, quantity: number): Promise<void>;

  // 删除
  removeItem(itemId: string): Promise<void>;

  // 清空
  clearCart(): Promise<void>;

  // 提交
  submitCart(): Promise<string>; // 返回订单ID

  // 用餐方式
  switchDiningWay(diningWay: string): Promise<boolean>;
}
```

## API 契约（根据实际接口调整）

### ProductStore APIs

| 接口 | 方法 | 实际路径 | 用途 |
|------|------|----------|------|
| 获取商品列表 | POST | `/siteGoods/list` | 加载商品列表 |
| 获取分类列表 | POST | `/siteGoods/menuType` | 加载分类Tab |
| 获取SKU详情 | POST | `/siteGoods/sku/detail` | 规格选择弹窗数据 |
| 获取选中SKU信息 | POST | `/siteGoods/sku/info` | 规格选择确认 |

**商品列表入参：**
```typescript
{
  siteId: number;
  showSoldOut: 0 | 1; // 0-不显示售罄 1-显示售罄
  goodsName?: string; // 模糊搜索
  menuType?: string; // 分类筛选
  diningWay?: string;
}
```

**分类列表入参：**
```typescript
{
  siteId: number;
  type: 1 | 2 | 3; // 1全部 2单品 3套餐
  diningWay?: string;
}
```

**SKU详情入参：**
```typescript
{
  siteGoodsId: number;
}
```

**选中SKU入参：**
```typescript
{
  siteGoodsId: number;
  attrValList: number[]; // 选择的属性值id [1,2,3,4,5]
}
```

### CartStore APIs

| 接口 | 方法 | 路径 | 用途 |
|------|------|------|------|
| 获取购物车 | POST | `/cart/list` | 加载购物车 |
| 添加商品 | POST | `/cart/add` | 加购商品 |
| 更新数量 | POST | `/cart/update` | 修改数量 |
| 删除商品 | POST | `/cart/remove` | 删除单项 |
| 清空购物车 | POST | `/cart/clear` | 清空购物车 |
| 提交购物车 | POST | `/order/create` | 创建订单 |
| 切换用餐方式 | POST | `/cart/diningWay` | 切换用餐模式 |

## 术语提取（更新 glossary.md）

| 术语 | 英文 | 定义 | 代码中使用 |
|------|------|------|-----------|
| 店铺商品 | SiteGoods | 店铺下的商品实例 | `siteGoodsId` |
| 单品 | SINGLE | 普通商品类型 | `goodsTypeFlag: 'SINGLE'` |
| 套餐 | COMB | 套餐商品类型 | `goodsTypeFlag: 'COMB'` |
| SKU | SKU | 库存量单位（规格） | `siteGoodsSkuId`, `skuId` |
| 属性 | Attr | 套餐的可选规格维度 | `attrList` |
| 属性值 | AttrVal | 规格的具体选项 | `attrValList` |
| 在售 | not soldOut | 商品可购买状态 | `soldOut: false` |
| 已售罄 | Sold Out | 商品库存为0 | `soldOut: true` |
| 加购 | Add to Cart | 将商品加入购物车 | `addToCart()` |
| 购物车 | Shopping Cart | 存放待结算商品 | `CartStore` |
| 用餐方式 | Dining Way | 就餐/外带模式 | `diningWay` |
| 沽清 | Stock Out | 商品库存管理 | `posStockNumber` |
