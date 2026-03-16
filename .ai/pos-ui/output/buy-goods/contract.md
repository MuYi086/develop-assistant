# buy-goods - 领域与契约

## 1. 术语表更新建议

### 新增术语

| 业务词 | 英文名 | 含义 | 所属领域 |
|--------|--------|------|----------|
| 商品 | Goods | 门店销售的商品，含单品和套餐 | POS |
| 单品 | SingleGoods | 单一商品，无需选择规格 | POS |
| 套餐 | ComboGoods | 组合商品，含多个可选规格 | POS |
| SKU | Sku | 库存量单位，具体规格的商品实例 | POS |
| 规格属性 | Attribute | 套餐的可选属性（如辣度、份量） | POS |
| 规格属性值 | AttributeValue | 属性的具体选项 | POS |
| 购物车 | ShoppingCart | 待结算商品的临时容器 | POS |
| 购物车项 | CartItem | 购物车中的单个商品记录 | POS |
| 用餐方式 | DiningWay | 堂食(IN)/外带(OUT) | POS |
| 在售数量 | OnSaleNumber | 当前可售库存数量 | POS |
| 沽清 | SoldOut | 商品售罄或停售状态 | POS |
| 分类 | Category | 商品分类，用于筛选 | POS |
| 门店商品 | SiteGoods | 与具体门店关联的商品 | POS |

### 命名约定

```
组件命名: PascalCase
  - BuyGoodsPage.vue
  - ShoppingCartPanel.vue
  - SpecSelectorDialog.vue

组合式函数: use + PascalCase
  - useGoodsList()
  - useShoppingCart()
  - useCategoryFilter()

Store命名: use + Store名称 + Store
  - useGoodsStore
  - useCartStore

类型命名: PascalCase + 后缀
  - GoodsItem
  - CartItem
  - CategoryItem
  - SkuAttribute

枚举命名: 大写下划线 + Enum后缀
  - GoodsTypeEnum.SINGLE
  - GoodsTypeEnum.COMBO
  - DiningWayEnum.IN
  - DiningWayEnum.OUT

接口请求: camelCase + Api后缀
  - goodsListApi()
  - categoryListApi()
  - skuDetailApi()
```

## 2. 组件契约

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
| **MoreMenu** | **Component** | `views/buy-goods/components/MoreMenu.vue` | **更多菜单（隐藏售罄、重置本机商品）** |

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
  /** 最大值，默认999（购物车商品数量上限999件） */
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
| **MoreMenu** | **`toggle-show-sold-out`** | - | **切换隐藏售罄状态** |
| **MoreMenu** | **`reset-local-goods`** | - | **重置本机商品** |

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

  // 更多菜单操作
  resetLocalGoods(): void;

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
| 缺省图 | Placeholder Image | 图片加载失败显示 | `defaultImage` |

## 4. 测试契约

### 4.1 用例1: 正常流程 - 单品加购并提交

#### 前置条件
- 用户已登录
- 商品列表已加载
- 购物车为空

#### 步骤
1. 点击单品商品卡片"红烧肉套餐"
2. 验证购物车显示该商品，数量=1
3. 点击"+"增加数量至2
4. 点击"去收款"
5. 验证跳转到确认订单页

#### 预期结果
- 商品正确加入购物车
- 数量计算正确
- 总价计算正确
- 成功跳转

### 4.2 用例2: 正常流程 - 套餐规格选择后加购

#### 前置条件
- 商品列表包含套餐类型商品

#### 步骤
1. 点击套餐商品卡片"小龙虾套餐"
2. 验证弹出规格选择弹窗
3. 选择规格"麻辣"+"大份"
4. 点击"添加到购物车"
5. 验证弹窗关闭，购物车显示该套餐

#### 预期结果
- 规格弹窗正确显示属性
- 选择规格后显示对应SKU价格
- 正确加入购物车
- 购物车显示规格信息

### 4.3 用例3: 异常流程 - 切换用餐方式冲突

#### 前置条件
- 购物车有商品
- 当前用餐方式为"堂食"

#### 步骤
1. 点击切换用餐方式为"外带"
2. 系统检测到冲突商品
3. 验证显示二次确认弹窗
4. 点击"确认"
5. 验证冲突商品被移除

#### 预期结果
- 正确检测到不兼容商品
- 弹窗显示正确提示
- 确认后移除冲突商品
- 用餐方式成功切换

### 4.4 用例4: 异常流程 - 购物车为空提交

#### 前置条件
- 购物车为空

#### 步骤
1. 查看购物车面板
2. 验证"去收款"按钮状态

#### 预期结果
- 按钮为禁用状态
- 不可点击

### 4.5 用例5: 边缘情况 - 商品查询超时

#### 前置条件
- 网络延迟设置>5s

#### 步骤
1. 加载商品列表
2. 等待超时

#### 预期结果
- 显示"获取数据超时"提示
- 提供重试按钮

### 4.6 用例6: 边缘情况 - SKU规格不存在

#### 前置条件
- 套餐规格弹窗已打开

#### 步骤
1. 选择一组无效规格组合
2. 验证SKU查询返回status=2

#### 预期结果
- 显示"规格不存在"提示
- 不可添加到购物车

### 4.7 用例7: 边缘情况 - 库存为零的商品

#### 前置条件
- 有商品库存为0

#### 步骤
1. 查看商品列表
2. 验证售罄商品显示
3. 点击售罄商品

#### 预期结果
- 售罄商品有明确标识
- 点击后提示"已售罄"
- 不可加入购物车

## 5. 错误码映射

| 后端错误码 | 前端错误类型 | 处理方式 |
|-----------|-------------|---------|
| 401 | AuthError.UNAUTHORIZED | 跳转登录 |
| 403 | AuthError.FORBIDDEN | 提示无权限 |
| 500 | ApiError.SERVER_ERROR | 显示服务端错误 |
| 20001 | BusinessError.GOODS_NOT_FOUND | 显示商品不存在 |
| 20002 | BusinessError.SKU_INVALID | 显示规格无效 |
| 20003 | BusinessError.STOCK_NOT_ENOUGH | 显示库存不足 |
| 30001 | BusinessError.CART_EMPTY | 购物车为空提示 |

---

**生成时间**: 2026-03-16
**Layer**: 3
**状态**: 已完成
