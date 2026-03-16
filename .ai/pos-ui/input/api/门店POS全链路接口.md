# 全局公共参数

**全局Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**全局Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**全局Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**全局认证方式**

> 无需认证

# 状态码说明

| 状态码 | 中文描述 |
| --- | ---- |
| 暂无参数 |

# PIGX

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-01-14 14:03:48

> 更新时间: 2026-01-14 14:03:48

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

## 登录鉴权

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-01-14 14:03:48

> 更新时间: 2026-01-14 14:03:48

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

### 账号密码登录-无验证

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-01-14 14:03:48

> 更新时间: 2026-03-16 10:06:58

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> http://192.168.10.111:9999/admin/oauth2/token?grant_type=password

**请求方式**

> POST

**Content-Type**

> urlencoded

**请求Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| Authorization | Basic cGlnOnBpZw== | string | 是 | - |
| TENANT-ID | 1 | string | 是 | - |

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| grant_type | password | string | 是 | - |

**请求Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| username | admin | string | 是 | - |
| password | fRH/h8sEeSnwYxWIXAdk | string | 是 | 默认情况 123456 的密文，注意看前端报文加密章节文档 |
| scope | server | string | 是 | - |

**认证方式**

> Basic auth

> 在Header添加参数 Authorization，其值为在Basic之后拼接空格，以及经过Base64编码的username:password

> Authorization: Basic dXNlcjpwYXNzd29yZA==

**响应示例**

* 成功(200)

```javascript
{
	"sub": "admin",
	"iss": "https://pig4cloud.com",
	"active": true,
	"token_type": "Bearer",
	"client_id": "test",
	"access_token": "ad2dc8bc-51ba-479b-8bab-62b5d534b11e",
	"refresh_token": "TqHrwOB28TR6TmZgGm4PUB7Q2IYp91lraSMP_WWFTIt0OqY0mstG0fbcbD7_bqhwgi0EWvTJj7xxjCDHHuHJVhTClx6Y5P__CBjNVs5NVAvcScK29sXBXltTHnhXa2MP",
	"aud": [
		"test"
	],
	"license": "https://pig4cloud.com",
	"nbf": 1773048977.9761372,
	"user_id": "1",
	"scope": [
		"server"
	],
	"exp": 1773092177.9761372,
	"expires_in": 43199,
	"iat": 1773048977.9761372,
	"jti": "ef897e1f-413c-4be5-b765-b157a8f6905b",
	"username": "admin"
}
```

**请求Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| Authorization | Basic cGlnOnBpZw== | string | 是 | - |
| TENANT-ID | 1 | string | 是 | - |

**Query**

### 账号密码登录-滑块验证

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-01-14 14:03:48

> 更新时间: 2026-01-27 18:44:50

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> http://192.168.201.253/auth/oauth2/token?username=admin&randomStr=blockPuzzle&code=Rg2%2BP88VnRaaFZXXaq%2Bc6WbvK2xGtWTBSaiHdzW1s3ZxBgb5jox0b1yYSRyFDSz%2Bbut8nNIq4WYLezNuJbNl5EvmkP%2Bi8A6nGqpYziFHyMM%3D&grant_type=password&scope=server

**请求方式**

> POST

**Content-Type**

> urlencoded

**请求Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| Authorization | Basic cGlnOnBpZw== | string | 是 | - |

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| username | admin | string | 是 | - |
| randomStr | blockPuzzle | string | 是 | - |
| code | Rg2%2BP88VnRaaFZXXaq%2Bc6WbvK2xGtWTBSaiHdzW1s3ZxBgb5jox0b1yYSRyFDSz%2Bbut8nNIq4WYLezNuJbNl5EvmkP%2Bi8A6nGqpYziFHyMM%3D | string | 是 | - |
| grant_type | password | string | 是 | - |
| scope | server | string | 是 | - |

**请求Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| password | JFat0Zdc | string | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
暂无数据
```

* 失败(404)

```javascript
暂无数据
```

**请求Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| Authorization | Basic cGlnOnBpZw== | string | 是 | - |

**Query**

### 刷新token

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-01-14 14:03:48

> 更新时间: 2026-01-27 18:30:14

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> http://192.168.201.122:9999/admin/oauth2/token?grant_type=refresh_token

**请求方式**

> POST

**Content-Type**

> urlencoded

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| grant_type | refresh_token | string | 是 | - |

**请求Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| scope | server | string | 是 | - |
| refresh_token | 59NoM4o4p359XEFTjJtxKx3cOtCUp6bFEIcl8JoWodA9auDIcoQwhsgeujDCec3sRaJ8Qx44sPFUuH4Mrnle86SbzgCNmxThOncpkf4ME_LHp2qTptgiOksCm3R5mZ-C | string | 是 | 获取令牌接口返回的刷新令牌接口 |

**认证方式**

> Basic auth

> 在Header添加参数 Authorization，其值为在Basic之后拼接空格，以及经过Base64编码的username:password

> Authorization: Basic dXNlcjpwYXNzd29yZA==

**响应示例**

* 成功(200)

```javascript
暂无数据
```

**Query**

### token检查

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-01-27 18:33:19

> 更新时间: 2026-01-27 18:45:57

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> ws://192.168.201.122:9999/admin/ws/info?access_token=d3e9b255-5d9e-4575-83b9-39e8fb51a4a5&TENANT-ID=1

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| access_token | d3e9b255-5d9e-4575-83b9-39e8fb51a4a5 | string | 是 | - |
| TENANT-ID | 1 | string | 是 | - |

**设置**


| 启用服务器证书验证 | 否 |
| 最大内容大小 | 5 |
| 连接超时设置 | 0 |

**Socket消息**

> 消息

* 请求(text)
```javascript
暂无数据
```

* 响应(text)
```javascript
暂无数据
```

**Query**

### APP登录

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-01-14 14:03:48

> 更新时间: 2026-01-14 14:03:48

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

#### 账号密码登录

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-01-14 14:03:48

> 更新时间: 2026-01-14 14:03:48

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.201.253:9999/auth/oauth2/token?scene=&username=appuser&password=123456&code=&mobile=&grant_type=password&scope=server

**请求方式**

> POST

**Content-Type**

> none

**请求Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| CLIENT-TOC | Y | string | 是 | 此值非常重要：如果.env配置中VITE_IS_TOC=true，获取的是客户数据，如果是false，CLIENT-TOC不传值，获取的后台客户数据 |
| Authorization | Basic bWluaTptaW5p | string | 是 | - |
| TENANT-ID | 1 | string | 是 | - |

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| scene | - | string | 是 | - |
| username | appuser | string | 是 | - |
| password | 123456 | string | 是 | - |
| code | - | string | 是 | - |
| mobile | - | string | 是 | - |
| grant_type | password | string | 是 | - |
| scope | server | string | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{"sub":"appuser","iss":"https://pig4cloud.com","active":true,"token_type":"Bearer","client_id":"mini","access_token":"b39e22ef-89f8-4884-9254-927114027d90","aud":["mini"],"license":"https://pig4cloud.com","nbf":1763532027.325912350,"user_id":"1","scope":["server"],"exp":1923532027.325912350,"expires_in":159999999,"iat":1763532027.325912350,"jti":"2a9279b5-d91b-4d9a-9ddc-225ef8621a9b","username":"appuser"}
```

* 失败(404)

```javascript
暂无数据
```

**请求Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| CLIENT-TOC | Y | string | 是 | 此值非常重要：如果.env配置中VITE_IS_TOC=true，获取的是客户数据，如果是false，CLIENT-TOC不传值，获取的后台客户数据 |
| Authorization | Basic bWluaTptaW5p | string | 是 | - |
| TENANT-ID | 1 | string | 是 | - |

**Query**

#### 微信小程序登录

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-01-14 14:03:48

> 更新时间: 2026-01-14 14:03:48

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.201.253:9999/auth/oauth2/token?mobile=APP-MINI@THE_WX_CODE&code=THE_WX_CODE&grant_type=mobile&scope=server

**请求方式**

> POST

**Content-Type**

> urlencoded

**请求Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| Authorization | Basic bWluaTptaW5p | string | 是 | - |
| Content-Type | application/x-www-form-urlencoded | string | 是 | - |

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| mobile | APP-MINI@THE_WX_CODE | string | 是 | - |
| code | THE_WX_CODE | string | 是 | - |
| grant_type | mobile | string | 是 | - |
| scope | server | string | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
暂无数据
```

* 失败(404)

```javascript
暂无数据
```

**请求Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| Authorization | Basic bWluaTptaW5p | string | 是 | - |
| Content-Type | application/x-www-form-urlencoded | string | 是 | - |

**Query**

#### 手机短信登录-短信获取

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-01-14 14:03:48

> 更新时间: 2026-01-14 14:03:48

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.201.253:9999/app/appmobile/17338122125

**请求方式**

> GET

**Content-Type**

> none

**请求Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| CLIENT-TOC | Y | string | 是 | - |
| TENANT-ID | 1 | string | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
暂无数据
```

* 失败(404)

```javascript
暂无数据
```

**请求Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| CLIENT-TOC | Y | string | 是 | - |
| TENANT-ID | 1 | string | 是 | - |

**Query**

#### 短信验证登录

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-01-14 14:03:48

> 更新时间: 2026-01-14 14:03:48

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.201.253:9999/auth/oauth2/token?mobile=APP-SMS%4017338122125&code=047494&grant_type=mobile&scope=server

**请求方式**

> POST

**Content-Type**

> none

**请求Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| Authorization | Basic YXBwOmFwcA== | string | 是 | - |
| CLIENT-TOC | Y | string | 是 | - |
| TENANT-ID | 1 | string | 是 | - |

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| mobile | APP-SMS%4017338122125 | string | 是 | - |
| code | 047494 | string | 是 | - |
| grant_type | mobile | string | 是 | - |
| scope | server | string | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
暂无数据
```

* 失败(404)

```javascript
暂无数据
```

**请求Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| Authorization | Basic YXBwOmFwcA== | string | 是 | - |
| CLIENT-TOC | Y | string | 是 | - |
| TENANT-ID | 1 | string | 是 | - |

**Query**

# 用户信息

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-01-27 09:43:13

> 更新时间: 2026-01-27 09:43:13

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

## 获取云端token

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-01-27 09:43:55

> 更新时间: 2026-03-09 17:53:59

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> http://192.168.10.111:9999/admin/user/pos/cloud-token

**请求方式**

> GET

**Content-Type**

> none

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{"code":0,"msg":null,"data":{"sub":"admin","iss":"https://pig4cloud.com","active":true,"token_type":"Bearer","client_id":"test","access_token":"53ca1800-5bb3-4156-889e-db11291fd93e","refresh_token":"QS7hyQCNsdIhhbB1_29ZmYwUEs5tP6lR2Bud3q7Tc7Y-hJPM9_pbzhWYd-iESQHNUaI_2u5AkSp1f4a-G8hb4b2WLHzfeG7fpXYmgxttQIpvQXcL7fmaB8yBoeH6Er4A","aud":["test"],"license":"https://pig4cloud.com","nbf":"1773050010.268642295","user_id":"1","scope":["server"],"exp":"1773093210.268642295","expires_in":"43199","iat":"1773050010.268642295","jti":"6713c038-fd68-46d8-ba2a-2993558a6335","username":"admin"},"ok":true}
```

* 失败(404)

```javascript
暂无数据
```

**Query**

## 获取菜单列表

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-01-27 18:27:26

> 更新时间: 2026-03-06 14:11:32

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.1.11:9999/admin/menu

**请求方式**

> GET

**Content-Type**

> none

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{"code":0,"msg":null,"data":[{"id":"2000","parentId":"-1","weight":1,"name":"系统管理","path":"/admin","componentPath":null,"meta":{"isLink":"","isIframe":null,"isKeepAlive":false,"icon":"iconfont icon-xitongguanli","isAffix":false,"title":"系统管理","isHide":false},"sortOrder":1,"menuType":"0","permission":null,"children":[{"id":"1000","parentId":"2000","weight":0,"name":"权限管理","path":"/system","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-quanxianguanli","isAffix":false,"title":"权限管理","isHide":false},"sortOrder":0,"menuType":"0","permission":null,"children":[{"id":"1100","parentId":"1000","weight":1,"name":"用户管理","path":"/admin/system/user/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-yonghuguanli","isAffix":false,"title":"用户管理","isHide":false},"sortOrder":1,"menuType":"0","permission":null},{"id":"1200","parentId":"1000","weight":2,"name":"菜单管理","path":"/admin/system/menu/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-caidan","isAffix":false,"title":"菜单管理","isHide":false},"sortOrder":2,"menuType":"0","permission":null},{"id":"1300","parentId":"1000","weight":3,"name":"角色管理","path":"/admin/system/role/index","componentPath":null,"meta":{"isLink":"","isIframe":null,"isKeepAlive":false,"icon":"iconfont icon-jiaoseguanli","isAffix":false,"title":"角色管理","isHide":false},"sortOrder":3,"menuType":"0","permission":null},{"id":"1400","parentId":"1000","weight":4,"name":"部门管理","path":"/admin/system/dept/index","componentPath":null,"meta":{"isLink":"","isIframe":null,"isKeepAlive":false,"icon":"iconfont icon-bumenguanli","isAffix":false,"title":"部门管理","isHide":false},"sortOrder":4,"menuType":"0","permission":null},{"id":"1600","parentId":"1000","weight":5,"name":"岗位管理","path":"/admin/system/post/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":true,"icon":"iconfont icon-gangweitubiao","isAffix":false,"title":"岗位管理","isHide":false},"sortOrder":5,"menuType":"0","permission":null},{"id":"1500","parentId":"1000","weight":9,"name":"租户管理","path":"/admin/system/tenant/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-tenant","isAffix":false,"title":"租户管理","isHide":false},"sortOrder":9,"menuType":"0","permission":null}]},{"id":"2001","parentId":"2000","weight":1,"name":"日志管理","path":"/admin/logs","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-xitongrizhi","isAffix":false,"title":"日志管理","isHide":false},"sortOrder":1,"menuType":"0","permission":null,"children":[{"id":"2103","parentId":"2001","weight":1,"name":"审计日志","path":"/admin/audit/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-biaodan","isAffix":false,"title":"审计日志","isHide":false},"sortOrder":1,"menuType":"0","permission":null},{"id":"2100","parentId":"2001","weight":2,"name":"操作日志","path":"/admin/log/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-jinridaiban","isAffix":false,"title":"操作日志","isHide":false},"sortOrder":2,"menuType":"0","permission":null}]},{"id":"2906","parentId":"2000","weight":6,"name":"文件管理","path":"/admin/file/index","componentPath":null,"meta":{"isLink":"","isIframe":null,"isKeepAlive":false,"icon":"iconfont icon-wendangguanli","isAffix":false,"title":"文件管理","isHide":false},"sortOrder":6,"menuType":"0","permission":null},{"id":"2200","parentId":"2000","weight":6,"name":"字典管理","path":"/admin/dict/index","componentPath":null,"meta":{"isLink":"","isIframe":null,"isKeepAlive":false,"icon":"iconfont icon-zidianguanli","isAffix":false,"title":"字典管理","isHide":false},"sortOrder":6,"menuType":"0","permission":null},{"id":"2210","parentId":"2000","weight":7,"name":"参数管理","path":"/admin/param/index","componentPath":null,"meta":{"isLink":"","isIframe":null,"isKeepAlive":true,"icon":"iconfont icon-canshuguanli","isAffix":false,"title":"参数管理","isHide":false},"sortOrder":7,"menuType":"0","permission":null},{"id":"2900","parentId":"2000","weight":8,"name":"国际化管理","path":"/admin/i18n/index","componentPath":null,"meta":{"isLink":"","isIframe":null,"isKeepAlive":false,"icon":"iconfont icon-zhongyingwenqiehuan","isAffix":false,"title":"国际化管理","isHide":false},"sortOrder":8,"menuType":"0","permission":null},{"id":"2400","parentId":"2000","weight":9,"name":"终端管理","path":"/admin/client/index","componentPath":null,"meta":{"isLink":"","isIframe":null,"isKeepAlive":true,"icon":"iconfont icon-shouji","isAffix":false,"title":"终端管理","isHide":false},"sortOrder":9,"menuType":"0","permission":null},{"id":"2500","parentId":"2000","weight":10,"name":"密钥管理","path":"/admin/social/index","componentPath":null,"meta":{"isLink":"","isIframe":null,"isKeepAlive":false,"icon":"iconfont icon-miyueguanli","isAffix":false,"title":"密钥管理","isHide":false},"sortOrder":10,"menuType":"0","permission":null},{"id":"2600","parentId":"2000","weight":11,"name":"令牌管理","path":"/admin/token/index","componentPath":null,"meta":{"isLink":"","isIframe":null,"isKeepAlive":false,"icon":"iconfont icon-lingpai","isAffix":false,"title":"令牌管理","isHide":false},"sortOrder":11,"menuType":"0","permission":null},{"id":"2920","parentId":"2000","weight":12,"name":"敏感词管理","path":"/admin/sensitive/index","componentPath":null,"meta":{"isLink":"","isIframe":null,"isKeepAlive":false,"icon":"iconfont icon-sensitiveword","isAffix":false,"title":"敏感词管理","isHide":false},"sortOrder":12,"menuType":"0","permission":""},{"id":"2910","parentId":"2000","weight":99,"name":"行政区划","path":"/admin/sysArea/index","componentPath":null,"meta":{"isLink":"","isIframe":null,"isKeepAlive":false,"icon":"iconfont icon-hangzhengquhuaguanli","isAffix":false,"title":"行政区划","isHide":false},"sortOrder":99,"menuType":"0","permission":""}]},{"id":"9900","parentId":"-1","weight":2,"name":"业务平台","path":"/biz","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-yewupingtai","isAffix":false,"title":"业务平台","isHide":false},"sortOrder":2,"menuType":"0","permission":null,"children":[{"id":"5000","parentId":"9900","weight":1,"name":"支付系统","path":"/pay","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-duoqudaozhifuxitongguanli","isAffix":false,"title":"支付系统","isHide":false},"sortOrder":1,"menuType":"0","permission":null,"children":[{"id":"5001","parentId":"5000","weight":0,"name":"收银台","path":"/biz/pay/cd/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-shouyintai","isAffix":false,"title":"收银台","isHide":false},"sortOrder":0,"menuType":"0","permission":null},{"id":"5002","parentId":"5000","weight":1,"name":"支付渠道","path":"/biz/pay/channel/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-zhifuqudao","isAffix":false,"title":"支付渠道","isHide":false},"sortOrder":1,"menuType":"0","permission":null},{"id":"5008","parentId":"5000","weight":2,"name":"商品订单","path":"/biz/pay/order/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-shangpindingdan","isAffix":false,"title":"商品订单","isHide":false},"sortOrder":2,"menuType":"0","permission":null},{"id":"5026","parentId":"5000","weight":3,"name":"支付订单","path":"/biz/pay/trade/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-biaodan","isAffix":false,"title":"支付订单","isHide":false},"sortOrder":3,"menuType":"0","permission":null},{"id":"5020","parentId":"5000","weight":4,"name":"退款订单","path":"/biz/pay/refund/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-tuikuandingdan","isAffix":false,"title":"退款订单","isHide":false},"sortOrder":4,"menuType":"0","permission":null},{"id":"5014","parentId":"5000","weight":5,"name":"通知记录","path":"/biz/pay/record/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-shangpindingdan","isAffix":false,"title":"通知记录","isHide":false},"sortOrder":5,"menuType":"0","permission":null}]},{"id":"7000","parentId":"9900","weight":2,"name":"APP管理","path":"/app","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-menhukehuduan","isAffix":false,"title":"APP管理","isHide":false},"sortOrder":2,"menuType":"0","permission":null,"children":[{"id":"7100","parentId":"7000","weight":1,"name":"客户管理","path":"/biz/app/appuser/index","componentPath":null,"meta":{"isLink":"","isIframe":null,"isKeepAlive":true,"icon":"iconfont icon-gerenzhongxin","isAffix":false,"title":"客户管理","isHide":false},"sortOrder":1,"menuType":"0","permission":null},{"id":"7200","parentId":"7000","weight":2,"name":"APP角色","path":"/biz/app/approle/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-app-juese","isAffix":false,"title":"APP角色","isHide":false},"sortOrder":2,"menuType":"0","permission":null},{"id":"7300","parentId":"7000","weight":3,"name":"APP秘钥","path":"/biz/app/appsocial/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-miyueguanli","isAffix":false,"title":"APP秘钥","isHide":false},"sortOrder":3,"menuType":"0","permission":null},{"id":"7400","parentId":"7000","weight":4,"name":"文章资讯","path":"/biz/app/appArticle/index","componentPath":null,"meta":{"isLink":"","isIframe":null,"isKeepAlive":false,"icon":"iconfont icon-wenzhangzixun","isAffix":false,"title":"文章资讯","isHide":false},"sortOrder":4,"menuType":"0","permission":""},{"id":"7600","parentId":"7000","weight":4,"name":"文章发布","path":"/biz/app/appArticle/form","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-refresh","isAffix":false,"title":"文章发布","isHide":true},"sortOrder":4,"menuType":"0","permission":null},{"id":"7500","parentId":"7000","weight":5,"name":"文章分类","path":"/biz/app/appArticleCategory/index","componentPath":null,"meta":{"isLink":"","isIframe":null,"isKeepAlive":false,"icon":"iconfont icon-biaoqian","isAffix":false,"title":"文章分类","isHide":false},"sortOrder":5,"menuType":"0","permission":""},{"id":"7700","parentId":"7000","weight":8,"name":"界面设置","path":"/biz/app/page/index","componentPath":null,"meta":{"isLink":"","isIframe":null,"isKeepAlive":false,"icon":"iconfont icon-diannao1","isAffix":false,"title":"界面设置","isHide":false},"sortOrder":8,"menuType":"0","permission":""},{"id":"7800","parentId":"7000","weight":9,"name":"通讯录","path":"/biz/app/appContacts/index","componentPath":null,"meta":{"isLink":"","isIframe":null,"isKeepAlive":false,"icon":"iconfont icon-tongxunlu","isAffix":false,"title":"通讯录","isHide":false},"sortOrder":9,"menuType":"0","permission":null},{"id":"7701","parentId":"7000","weight":9,"name":"底部导航","path":"/biz/app/tabbar/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-dibudaohang","isAffix":false,"title":"底部导航","isHide":false},"sortOrder":9,"menuType":"0","permission":null}]},{"id":"3000","parentId":"9900","weight":3,"name":"公众号平台","path":"/mp","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-weixingongzhonghao","isAffix":false,"title":"公众号平台","isHide":false},"sortOrder":3,"menuType":"0","permission":null,"children":[{"id":"3001","parentId":"3000","weight":0,"name":"账号管理","path":"/biz/mp/wx-account/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-zhanghaoguanli","isAffix":false,"title":"账号管理","isHide":false},"sortOrder":0,"menuType":"0","permission":null},{"id":"3002","parentId":"3000","weight":1,"name":"菜单设置","path":"/biz/mp/wx-menu/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-caidanshezhi","isAffix":false,"title":"菜单设置","isHide":false},"sortOrder":1,"menuType":"0","permission":null},{"id":"3006","parentId":"3000","weight":2,"name":"粉丝管理","path":"/biz/mp/wx-account-fans/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-fans","isAffix":false,"title":"粉丝管理","isHide":false},"sortOrder":2,"menuType":"0","permission":null},{"id":"3010","parentId":"3000","weight":3,"name":"标签管理","path":"/biz/mp/wx-account-tag/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-biaoqian","isAffix":false,"title":"标签管理","isHide":false},"sortOrder":3,"menuType":"0","permission":null},{"id":"3018","parentId":"3000","weight":4,"name":"自动回复","path":"/biz/mp/wx-auto-reply/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-zidonghuifu","isAffix":false,"title":"自动回复","isHide":false},"sortOrder":4,"menuType":"0","permission":null},{"id":"3015","parentId":"3000","weight":5,"name":"素材管理","path":"/biz/mp/wx-material/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-sucaiguanli","isAffix":false,"title":"素材管理","isHide":false},"sortOrder":5,"menuType":"0","permission":null},{"id":"3008","parentId":"3000","weight":6,"name":"消息管理","path":"/biz/mp/wx-fans-msg/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-xiaoxiguanli","isAffix":false,"title":"消息管理","isHide":false},"sortOrder":6,"menuType":"0","permission":null},{"id":"3022","parentId":"3000","weight":8,"name":"运营数据","path":"/biz/mp/wx-statistics/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-yunyingshuju","isAffix":false,"title":"运营数据","isHide":false},"sortOrder":8,"menuType":"0","permission":null}]}]},{"id":"9910","parentId":"-1","weight":3,"name":"基础工具","path":"/tools","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-gongju","isAffix":false,"title":"基础工具","isHide":false},"sortOrder":3,"menuType":"0","permission":null,"children":[{"id":"4002","parentId":"9910","weight":1,"name":"缓存监控","path":"/tools/data/cache","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-huancunjiankong","isAffix":false,"title":"缓存监控","isHide":false},"sortOrder":1,"menuType":"0","permission":null},{"id":"4001","parentId":"9910","weight":2,"name":"文档扩展","path":"http://pigx-gateway:9999/doc.html","componentPath":null,"meta":{"isLink":"http://pigx-gateway:9999/doc.html","isIframe":true,"isKeepAlive":false,"icon":"iconfont icon-swagger","isAffix":false,"title":"文档扩展","isHide":false},"sortOrder":2,"menuType":"0","permission":null},{"id":"9911","parentId":"9910","weight":3,"name":"路由管理","path":"/tools/route/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-apigateway","isAffix":false,"title":"路由管理","isHide":false},"sortOrder":3,"menuType":"0","permission":null},{"id":"2800","parentId":"9910","weight":4,"name":"Quartz管理","path":"/tools/job-manage/index","componentPath":null,"meta":{"isLink":"","isIframe":null,"isKeepAlive":false,"icon":"iconfont icon-quartz","isAffix":false,"title":"Quartz管理","isHide":false},"sortOrder":4,"menuType":"0","permission":null},{"id":"9912","parentId":"9910","weight":5,"name":"大屏看板","path":"/tools/data/report","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-shuju","isAffix":false,"title":"大屏看板","isHide":false},"sortOrder":5,"menuType":"0","permission":null},{"id":"9913","parentId":"9910","weight":6,"name":"数据报表","path":"/tools/data/jimu","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-shujubaobiao","isAffix":false,"title":"数据报表","isHide":false},"sortOrder":6,"menuType":"0","permission":null},{"id":"4010","parentId":"9910","weight":7,"name":"信息推送","path":"/tools/message/index","componentPath":null,"meta":{"isLink":"","isIframe":null,"isKeepAlive":false,"icon":"iconfont icon-xinxituisong","isAffix":false,"title":"信息推送","isHide":false},"sortOrder":7,"menuType":"0","permission":""}]},{"id":"6000","parentId":"-1","weight":4,"name":"协同办公","path":"/flow","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-OAxitong","isAffix":false,"title":"协同办公","isHide":false},"sortOrder":4,"menuType":"0","permission":null,"children":[{"id":"6004","parentId":"6000","weight":0,"name":"任务管理","path":"/task","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-renwuguanli","isAffix":false,"title":"任务管理","isHide":false},"sortOrder":0,"menuType":"0","permission":null,"children":[{"id":"6005","parentId":"6004","weight":0,"name":"待办任务","path":"/flow/task/pending","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-jinridaiban","isAffix":false,"title":"待办任务","isHide":false},"sortOrder":0,"menuType":"0","permission":null},{"id":"6007","parentId":"6004","weight":1,"name":"我的发起","path":"/flow/task/started","componentPath":null,"meta":{"isLink":"","isIframe":null,"isKeepAlive":false,"icon":"iconfont icon-wodefaqi","isAffix":false,"title":"我的发起","isHide":false},"sortOrder":1,"menuType":"0","permission":null},{"id":"6008","parentId":"6004","weight":2,"name":"抄送给我","path":"/flow/task/cc","componentPath":null,"meta":{"isLink":"","isIframe":null,"isKeepAlive":false,"icon":"iconfont icon-chaosonggeiwo","isAffix":false,"title":"抄送给我","isHide":false},"sortOrder":2,"menuType":"0","permission":null},{"id":"6006","parentId":"6004","weight":3,"name":"我的已办","path":"/flow/task/completed","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-document-record","isAffix":false,"title":"我的已办","isHide":false},"sortOrder":3,"menuType":"0","permission":null}]},{"id":"6003","parentId":"6000","weight":1,"name":"发起流程","path":"/flow/list/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-faqiliucheng","isAffix":false,"title":"发起流程","isHide":false},"sortOrder":1,"menuType":"0","permission":null},{"id":"6002","parentId":"6000","weight":2,"name":"创建流程","path":"/flow/create/all","componentPath":null,"meta":{"isLink":"","isIframe":null,"isKeepAlive":false,"icon":"iconfont icon-faqiliucheng","isAffix":false,"title":"创建流程","isHide":true},"sortOrder":2,"menuType":"0","permission":null},{"id":"6001","parentId":"6000","weight":3,"name":"流程管理","path":"/flow/group/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-liuchengguanli","isAffix":false,"title":"流程管理","isHide":false},"sortOrder":3,"menuType":"0","permission":null},{"id":"6010","parentId":"6000","weight":4,"name":"业务表单","path":"/flow/oaLeave/index","componentPath":null,"meta":{"isLink":"","isIframe":null,"isKeepAlive":false,"icon":"iconfont icon-qingjiashenqing","isAffix":false,"title":"业务表单","isHide":false},"sortOrder":4,"menuType":"0","permission":null}]},{"id":"9000","parentId":"-1","weight":9,"name":"开发平台","path":"/gen","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-DevOps","isAffix":false,"title":"开发平台","isHide":false},"sortOrder":9,"menuType":"0","permission":null,"children":[{"id":"9005","parentId":"9000","weight":0,"name":"数据源管理","path":"/gen/datasource/index","componentPath":null,"meta":{"isLink":"","isIframe":null,"isKeepAlive":false,"icon":"iconfont icon-shujuyuanguanli","isAffix":false,"title":"数据源管理","isHide":false},"sortOrder":0,"menuType":"0","permission":null},{"id":"9070","parentId":"9000","weight":1,"name":"数据表管理","path":"/gen/create-table/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-shujubiaoguanli1","isAffix":false,"title":"数据表管理","isHide":false},"sortOrder":1,"menuType":"0","permission":null},{"id":"9007","parentId":"9000","weight":1,"name":"生成页面","path":"/gen/gener/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-tongzhi4","isAffix":false,"title":"生成页面","isHide":true},"sortOrder":1,"menuType":"0","permission":null},{"id":"2300","parentId":"9000","weight":2,"name":"代码生成","path":"/gen/table/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-daimashengcheng","isAffix":false,"title":"代码生成","isHide":false},"sortOrder":2,"menuType":"0","permission":null},{"id":"9006","parentId":"9000","weight":2,"name":"表单设计","path":"/gen/design/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-AIshiyanshi","isAffix":false,"title":"表单设计","isHide":true},"sortOrder":2,"menuType":"0","permission":null},{"id":"9050","parentId":"9000","weight":9,"name":"元数据管理","path":"/gen/metadata","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-yuanshujuguanli","isAffix":false,"title":"元数据管理","isHide":false},"sortOrder":9,"menuType":"0","permission":null,"children":[{"id":"9065","parentId":"9050","weight":0,"name":"字段管理","path":"/gen/field-type/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-field-manage","isAffix":false,"title":"字段管理","isHide":false},"sortOrder":0,"menuType":"0","permission":null},{"id":"9051","parentId":"9050","weight":5,"name":"模板管理","path":"/gen/template/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-mti-mobanguanli","isAffix":false,"title":"模板管理","isHide":false},"sortOrder":5,"menuType":"0","permission":null},{"id":"9059","parentId":"9050","weight":6,"name":"模板分组","path":"/gen/group/index","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-shuxingtu","isAffix":false,"title":"模板分组","isHide":false},"sortOrder":6,"menuType":"0","permission":null}]}]},{"id":"2014244317777649665","parentId":"-1","weight":10,"name":"联营助手","path":"/opsmini","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"ele-Brush","isAffix":false,"title":"联营助手","isHide":false},"sortOrder":10,"menuType":"0","permission":null,"children":[{"id":"2014244725463998466","parentId":"2014244317777649665","weight":0,"name":"店铺统计","path":"shop-overview","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-huashuku","isAffix":false,"title":"店铺统计","isHide":false},"sortOrder":0,"menuType":"0","permission":null}]},{"id":"2028388373059436545","parentId":"-1","weight":11,"name":"POS","path":"/pos","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"ele-Box","isAffix":false,"title":"POS","isHide":false},"sortOrder":11,"menuType":"0","permission":null,"children":[{"id":"2028388885506916353","parentId":"2028388373059436545","weight":5,"name":"设备","path":"/mac-management","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-ico_shebei_grey","isAffix":false,"title":"设备","isHide":false},"sortOrder":5,"menuType":"0","permission":null},{"id":"2028388675661692930","parentId":"2028388373059436545","weight":8,"name":"设置","path":"/settings","componentPath":null,"meta":{"isLink":"","isIframe":false,"isKeepAlive":false,"icon":"iconfont icon-ico_shezhi_grey","isAffix":false,"title":"设置","isHide":false},"sortOrder":8,"menuType":"0","permission":null}]}],"ok":true}
```

* 失败(404)

```javascript
暂无数据
```

**Query**

## 获取用户信息

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-01-14 14:03:48

> 更新时间: 2026-01-27 18:27:33

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> http://192.168.201.122:9999/admin/user/info

**请求方式**

> GET

**Content-Type**

> none

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
暂无数据
```

**Query**

# 店铺信息

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-02-04 13:33:54

> 更新时间: 2026-03-02 14:38:47

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

## 本地店铺获取

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-02-04 13:34:21

> 更新时间: 2026-02-04 13:38:44

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.135:9999/admin/pos-site/localSiteInfo

**请求方式**

> GET

**Content-Type**

> none

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{
    "code": 0,
    "msg": "",
    "data": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | object | - |

* 失败(404)

```javascript
暂无数据
```

* 成功返回(200)

```javascript
{
    "code": 0,
    "msg": "",
    "data": [
        {
            "siteId": 1,
            "siteName": "",
            "siteNo": "",
            "siteImg": "",
            "status": "",
            "companyFlag": 1,
            "priorSchSiteId": 1,
            "currentBatchBeginTime": "2026-02-04 13:35:02",
            "currentBatchEndTime": "2026-02-04 13:35:02",
            "currentSchSiteId": 1,
            "nextBatchBeginTime": "2026-02-04 13:35:02",
            "nextBatchEndTime": "2026-02-04 13:35:02",
            "nextSchSiteId": 1,
            "siteAddress": "",
            "siteLatitude": 1,
            "siteLongitude": 1,
            "distance": 1,
            "geoHash": "",
            "isSelling": 1,
            "isPicking": 1,
            "isOrdering": 1,
            "contact": "",
            "currentBatchModifyTime": "2026-02-04 13:35:02",
            "nextBatchModifyTime": "2026-02-04 13:35:02",
            "feedTime": "2026-02-04 13:35:02",
            "disablePickingReason": "",
            "disableSellingReason": "",
            "perfectStatus": "",
            "province": "",
            "city": "",
            "district": "",
            "park": "",
            "building": "",
            "floor": "",
            "workArea": "",
            "extraInfo": "",
            "innerSign": 1,
            "currentBatchOnShelvesBeginTime": "2026-02-04 13:35:02",
            "currentBatchOnShelvesEndTime": "2026-02-04 13:35:02",
            "currentBatchOnSaleBeginTime": "2026-02-04 13:35:02",
            "currentBatchOnSaleEndTime": "2026-02-04 13:35:02",
            "nextBatchOnShelvesBeginTime": "2026-02-04 13:35:02",
            "nextBatchOnShelvesEndTime": "2026-02-04 13:35:02",
            "nextBatchOnSaleBeginTime": "2026-02-04 13:35:02",
            "nextBatchOnSaleEndTime": "2026-02-04 13:35:02",
            "nextSchSelling": 1,
            "nextSchOrdering": 1,
            "createUserId": 1,
            "createDate": "2026-02-04 13:35:02",
            "createUserName": "",
            "description": "",
            "modifyDate": "2026-02-04 13:35:02",
            "modifyUserId": 1,
            "modifyUserName": "",
            "logicDel": 1,
            "version": 1,
            "lightMealMac": 1,
            "comboMac": 1,
            "beveragesMac": 1,
            "siteIdentification": "",
            "chopsticksPrice": 1,
            "sitePayChannelInfo": "",
            "allowedUseMember": 1,
            "openTime": "2026-02-04 13:35:02",
            "siteCategory": 1,
            "messages": "",
            "menuTemplateId": 1,
            "locationImage": "",
            "sitePeriodModelList": [
                {
                    "siteSchId": 1,
                    "periodName": "",
                    "startTime": 1,
                    "endTime": 1,
                    "desc": "",
                    "defaultFlag": 1
                }
            ],
            "enterpriseId": 1,
            "kryShopId": 1,
            "saleMode": "",
            "cookingConfig": "",
            "orderConfig": "",
            "siteNetworkMode": "",
            "businessStatus": 1,
            "businessConfig": "",
            "saleConfig": "",
            "connectStatus": "",
            "area": 1,
            "maxSeatCapacity": 1,
            "elderlyMerCode": "",
            "tenantId": 1,
            "deptId": 1,
            "createBy": ""
        }
    ]
}
```

**Query**

## 云端店铺查询

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-02-04 13:48:44

> 更新时间: 2026-02-04 13:56:08

**此接口调用的是云端接口，token传入的也是云端token**

**接口状态**

> 开发中

**接口URL**

> https://ops.huabing.online/ops/site/pageSite

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
    "current": 1,
    "size": 50,
    "siteName": ""
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| current | 1 | integer | 否 | - |
| size | 50 | integer | 否 | - |
| siteName | - | string | 否 | 店铺名称 |
| siteStatus | - | string | 否 | 店铺状态 |
| siteCategory | 1 | integer | 否 | 店铺类型 空为不区分 1 为一代机  2为二代机 |
| siteCategoryList | - | array | 否 | - |
| siteIds | - | array | 否 | - |
| userSiteList | - | array | 否 | - |
| queryTheCurrentBatch | true | boolean | 否 | 是否查询当前批次: true-是 false-否 |
| logicDel | 1 | integer | 否 | 1-删除、0-未删除 |

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{
    "code": 1,
    "msg": "",
    "data": {
    }
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | object | - |

* 失败(404)

```javascript
暂无数据
```

* 成功返回(200)

```javascript
{
    "code": 0,
    "msg": "",
    "data": {
        "total": 1,
        "current": 1,
        "size": 1,
        "records": [
            {
                "siteId": 1,
                "siteName": "",
                "siteNo": "",
                "siteImg": "",
                "status": "",
                "companyFlag": 1,
                "priorSchSiteId": 1,
                "currentBatchBeginTime": "2026-02-04 13:51:48",
                "currentBatchEndTime": "2026-02-04 13:51:48",
                "currentSchSiteId": 1,
                "nextBatchBeginTime": "2026-02-04 13:51:48",
                "nextBatchEndTime": "2026-02-04 13:51:48",
                "nextSchSiteId": 1,
                "siteAddress": "",
                "siteLatitude": 1,
                "siteLongitude": 1,
                "distance": 1,
                "geoHash": "",
                "isSelling": 1,
                "isPicking": 1,
                "isOrdering": 1,
                "contact": "",
                "currentBatchModifyTime": "2026-02-04 13:51:48",
                "nextBatchModifyTime": "2026-02-04 13:51:48",
                "feedTime": "2026-02-04 13:51:48",
                "disablePickingReason": "",
                "disableSellingReason": "",
                "perfectStatus": "",
                "province": "",
                "city": "",
                "district": "",
                "park": "",
                "building": "",
                "floor": "",
                "workArea": "",
                "extraInfo": "",
                "innerSign": 1,
                "currentBatchOnShelvesBeginTime": "2026-02-04 13:51:48",
                "currentBatchOnShelvesEndTime": "2026-02-04 13:51:48",
                "currentBatchOnSaleBeginTime": "2026-02-04 13:51:48",
                "currentBatchOnSaleEndTime": "2026-02-04 13:51:48",
                "nextBatchOnShelvesBeginTime": "2026-02-04 13:51:48",
                "nextBatchOnShelvesEndTime": "2026-02-04 13:51:48",
                "nextBatchOnSaleBeginTime": "2026-02-04 13:51:48",
                "nextBatchOnSaleEndTime": "2026-02-04 13:51:48",
                "nextSchSelling": 1,
                "nextSchOrdering": 1,
                "createUserId": 1,
                "createDate": "2026-02-04 13:51:48",
                "createUserName": "",
                "description": "",
                "modifyDate": "2026-02-04 13:51:48",
                "modifyUserId": 1,
                "modifyUserName": "",
                "logicDel": 1,
                "version": 1,
                "lightMealMac": 1,
                "comboMac": 1,
                "beveragesMac": 1,
                "siteIdentification": "",
                "chopsticksPrice": 1,
                "sitePayChannelInfo": "",
                "allowedUseMember": 1,
                "openTime": "2026-02-04 13:51:48",
                "siteCategory": 1,
                "messages": "",
                "menuTemplateId": 1,
                "locationImage": "",
                "sitePeriodModelList": [
                    {
                        "siteSchId": 1,
                        "periodName": "",
                        "startTime": 1,
                        "endTime": 1,
                        "desc": "",
                        "defaultFlag": 1
                    }
                ],
                "enterpriseId": 1,
                "kryShopId": 1,
                "saleMode": "",
                "cookingConfig": "",
                "orderConfig": "",
                "siteNetworkMode": "",
                "businessStatus": 1,
                "businessConfig": "",
                "saleConfig": "",
                "connectStatus": "",
                "area": 1,
                "maxSeatCapacity": 1,
                "elderlyMerCode": "",
                "tenantId": 1,
                "deptId": 1,
                "createBy": ""
            }
        ],
        "hasNext": true
    }
}
```

**Query**

# 网络状态

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-01-31 13:48:06

> 更新时间: 2026-01-31 13:48:06

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

## 获取网络状态信息 list

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-01-31 13:47:15

> 更新时间: 2026-03-06 17:35:32

**[object Object]**

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.10:9999/admin/network-status/list?type=

**请求方式**

> GET

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| type | - | string | 否 | 可选：按类型筛选（sys_network_status.type） |

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{"code":0,"msg":null,"data":[{"id":"4","type":"PRINTER","bizId":"2027242191887044610","bizName":null,"domain":"192.168.10.90","reachable":true,"latencyMs":"54","checkTime":"2026-03-06 09:42:20","remark":null}],"ok":true}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | array | - |
| data.id | 1 | integer | 主键id |
| data.type | - | string | 类型 |
| data.domain | - | string | 探测目标 |
| data.reachable | true | boolean | 连通状态 |
| data.latencyMs | 1 | integer | 连通延迟(ms) |
| data.checkTime | 2026-01-31 13:47:07 | string | 探测时间 |
| data.remark | - | string | 备注/错误信息 |
| data.entityClass | - | object | - |
| data.entityClass.cachedConstructor | - | object | - |
| data.entityClass.cachedConstructor.clazz | - | object | - |
| data.entityClass.cachedConstructor.slot | 1 | integer | - |
| data.entityClass.cachedConstructor.parameterTypes | - | object | - |
| data.entityClass.cachedConstructor.exceptionTypes | - | object | - |
| data.entityClass.cachedConstructor.modifiers | 1 | integer | - |
| data.entityClass.cachedConstructor.signature | - | string | - |
| data.entityClass.cachedConstructor.genericInfo | - | object | - |
| data.entityClass.cachedConstructor.genericInfo.parameterTypes | - | array | The generic parameter types.  Lazily initialized. |
| data.entityClass.cachedConstructor.genericInfo.exceptionTypes | - | array | The generic exception types.  Lazily initialized. |
| data.entityClass.cachedConstructor.genericInfo.typeParameters | - | object | - |
| data.entityClass.cachedConstructor.genericInfo.factory | - | object | - |
| data.entityClass.cachedConstructor.genericInfo.tree | - | object | - |
| data.entityClass.cachedConstructor.annotations | - | array | - |
| data.entityClass.cachedConstructor.parameterAnnotations | - | array | - |
| data.entityClass.cachedConstructor.constructorAccessor | - | object | - |
| data.entityClass.cachedConstructor.root | - | object | - |
| data.entityClass.cachedConstructor.hasRealParameterData | true | boolean | - |
| data.entityClass.cachedConstructor.parameters | - | array | - |
| data.entityClass.cachedConstructor.parameters.name | - | string | - |
| data.entityClass.cachedConstructor.parameters.modifiers | 1 | integer | - |
| data.entityClass.cachedConstructor.parameters.executable | - | object | - |
| data.entityClass.cachedConstructor.parameters.executable.hasRealParameterData | true | boolean | - |
| data.entityClass.cachedConstructor.parameters.executable.parameters | - | array | - |
| data.entityClass.cachedConstructor.parameters.executable.declaredAnnotations | - | object | - |
| data.entityClass.cachedConstructor.parameters.executable.override | true | boolean | - |
| data.entityClass.cachedConstructor.parameters.executable.accessCheckCache | - | object | - |
| data.entityClass.cachedConstructor.parameters.index | 1 | integer | - |
| data.entityClass.cachedConstructor.parameters.parameterTypeCache | - | object | - |
| data.entityClass.cachedConstructor.parameters.parameterClassCache | - | object | - |
| data.entityClass.cachedConstructor.parameters.declaredAnnotations | - | object | - |
| data.entityClass.cachedConstructor.declaredAnnotations | - | object | - |
| data.entityClass.cachedConstructor.override | true | boolean | - |
| data.entityClass.cachedConstructor.accessCheckCache | - | object | - |
| data.entityClass.name | - | string | - |
| data.entityClass.module | - | object | - |
| data.entityClass.module.layer | - | object | - |
| data.entityClass.module.layer.cf | - | object | - |
| data.entityClass.module.layer.cf.parents | - | array | - |
| data.entityClass.module.layer.cf.graph | - | object | - |
| data.entityClass.module.layer.cf.graph.KEY | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.cf | - | object | - |
| data.entityClass.module.layer.cf.graph.KEY.mref | - | object | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor | - | object | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.name | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.version | - | object | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.version.version | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.version.pre | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.version.build | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.modifiers | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.open | true | boolean | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires.name | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.exports | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.exports.source | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.opens | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.opens.source | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.uses | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.provides | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.provides.service | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.packages | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.mainClass | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location | - | object | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.scheme | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.fragment | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.authority | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.userInfo | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.host | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.port | 1 | integer | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.path | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.query | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.hash | 1 | integer | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.decodedAuthority | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.decodedPath | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.decodedQuery | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.decodedFragment | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.module.layer.cf.modules | - | array | - |
| data.entityClass.module.layer.cf.modules.cf | - | object | - |
| data.entityClass.module.layer.cf.modules.mref | - | object | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor | - | object | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.name | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.version | - | object | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.version.version | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.version.pre | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.version.build | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.modifiers | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.open | true | boolean | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires.name | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.exports | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.exports.source | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.opens | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.opens.source | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.uses | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.provides | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.provides.service | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.packages | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.mainClass | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.module.layer.cf.modules.mref.location | - | object | - |
| data.entityClass.module.layer.cf.modules.mref.location.scheme | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.fragment | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.authority | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.userInfo | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.host | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.port | 1 | integer | - |
| data.entityClass.module.layer.cf.modules.mref.location.path | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.query | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.hash | 1 | integer | - |
| data.entityClass.module.layer.cf.modules.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.decodedAuthority | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.decodedPath | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.decodedQuery | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.decodedFragment | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.module.layer.cf.nameToModule | - | object | - |
| data.entityClass.module.layer.cf.nameToModule.KEY | - | object | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.cf | - | object | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref | - | object | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor | - | object | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.name | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.version | - | object | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.version.version | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.version.pre | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.version.build | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.modifiers | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.open | true | boolean | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.name | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.exports | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.exports.source | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.opens | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.opens.source | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.uses | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.provides | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.provides.service | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.packages | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.mainClass | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location | - | object | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.scheme | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.fragment | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.authority | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.userInfo | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.host | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.port | 1 | integer | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.path | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.query | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.hash | 1 | integer | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.decodedAuthority | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.decodedPath | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.decodedQuery | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.decodedFragment | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.module.layer.cf.targetPlatform | - | string | - |
| data.entityClass.module.layer.cf.allConfigurations | - | array | - |
| data.entityClass.module.layer.parents | - | array | - |
| data.entityClass.module.layer.nameToModule | - | object | - |
| data.entityClass.module.layer.nameToModule.KEY | - | object | - |
| data.entityClass.module.layer.allLayers | - | array | - |
| data.entityClass.module.layer.modules | - | array | - |
| data.entityClass.module.layer.servicesCatalog | - | object | - |
| data.entityClass.module.layer.servicesCatalog.map | - | object | - |
| data.entityClass.module.layer.servicesCatalog.map.KEY | - | array | - |
| data.entityClass.module.layer.servicesCatalog.map.KEY.module | - | object | - |
| data.entityClass.module.layer.servicesCatalog.map.KEY.providerName | - | string | - |
| data.entityClass.module.name | - | string | - |
| data.entityClass.module.loader | - | object | - |
| data.entityClass.module.loader.parent | - | object | - |
| data.entityClass.module.loader.name | - | string | - |
| data.entityClass.module.loader.unnamedModule | - | object | - |
| data.entityClass.module.loader.nameAndId | - | string | - |
| data.entityClass.module.loader.parallelLockMap | - | object | - |
| data.entityClass.module.loader.parallelLockMap.KEY | - | object | - |
| data.entityClass.module.loader.package2certs | - | object | - |
| data.entityClass.module.loader.package2certs.KEY | - | object | - |
| data.entityClass.module.loader.classes | - | array | - |
| data.entityClass.module.loader.defaultDomain | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource.location | - | object | The code location. |
| data.entityClass.module.loader.defaultDomain.codesource.location.protocol | - | string | The protocol to use (ftp, http, nntp, ... etc.) . |
| data.entityClass.module.loader.defaultDomain.codesource.location.host | - | string | The host name to connect to. |
| data.entityClass.module.loader.defaultDomain.codesource.location.port | 1 | integer | The protocol port to connect to. |
| data.entityClass.module.loader.defaultDomain.codesource.location.file | - | string | The specified file name on that host. is defined as |
| data.entityClass.module.loader.defaultDomain.codesource.location.query | - | string | The query part of this URL. |
| data.entityClass.module.loader.defaultDomain.codesource.location.authority | - | string | The authority part of this URL. |
| data.entityClass.module.loader.defaultDomain.codesource.location.path | - | string | The path part of this URL. |
| data.entityClass.module.loader.defaultDomain.codesource.location.userInfo | - | string | The userinfo part of this URL. |
| data.entityClass.module.loader.defaultDomain.codesource.location.ref | - | string | # reference. |
| data.entityClass.module.loader.defaultDomain.codesource.location.hostAddress | - | object | The host's IP address, used in equals and hashCode. Computed on demand. An uninitialized or unknown hostAddress is null. |
| data.entityClass.module.loader.defaultDomain.codesource.location.hostAddress.holder | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.hostAddress.holder.originalHostName | - | string | Reserve the original application specified hostname. The original hostname is useful for domain-based endpoint identification (see RFC 2818 and RFC 6125).  If an address was created with a raw IP address, a reverse name lookup may introduce endpoint identification security issue via DNS forging. Oracle JSSE provider is using this original hostname, via jdk.internal.misc.JavaNetAccess, for SSL/TLS endpoint identification. Note: May define a new public method in the future if necessary. |
| data.entityClass.module.loader.defaultDomain.codesource.location.hostAddress.holder.hostName | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.hostAddress.holder.address | 1 | integer | Holds a 32-bit IPv4 address. |
| data.entityClass.module.loader.defaultDomain.codesource.location.hostAddress.holder.family | 1 | integer | Specifies the address family type, for instance, '1' for IPv4 addresses, and '2' for IPv6 addresses. |
| data.entityClass.module.loader.defaultDomain.codesource.location.hostAddress.canonicalHostName | - | string | Used to store the best available hostname. Lazily initialized via a data race; safe because Strings are immutable. |
| data.entityClass.module.loader.defaultDomain.codesource.location.handler | - | object | The URLStreamHandler for this URL. |
| data.entityClass.module.loader.defaultDomain.codesource.location.hashCode | 1 | integer | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.tempState | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.tempState.protocol | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.tempState.host | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.tempState.port | 1 | integer | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.tempState.authority | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.tempState.file | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.tempState.ref | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.tempState.hashCode | 1 | integer | - |
| data.entityClass.module.loader.defaultDomain.codesource.signers | - | array | - |
| data.entityClass.module.loader.defaultDomain.codesource.signers.signerCertPath | - | object | The signer's certificate path. |
| data.entityClass.module.loader.defaultDomain.codesource.signers.signerCertPath.type | - | string | The type of certificates in this chain. |
| data.entityClass.module.loader.defaultDomain.codesource.signers.timestamp | - | object | The signature timestamp. |
| data.entityClass.module.loader.defaultDomain.codesource.signers.timestamp.timestamp | 2026-01-31 13:47:08 | string | The timestamp's date and time |
| data.entityClass.module.loader.defaultDomain.codesource.signers.timestamp.signerCertPath | - | object | The TSA's certificate path. |
| data.entityClass.module.loader.defaultDomain.codesource.signers.timestamp.signerCertPath.type | - | string | The type of certificates in this chain. |
| data.entityClass.module.loader.defaultDomain.codesource.signers.timestamp.myhash | 1 | integer | - |
| data.entityClass.module.loader.defaultDomain.codesource.signers.myhash | 1 | integer | - |
| data.entityClass.module.loader.defaultDomain.codesource.certs | - | array | - |
| data.entityClass.module.loader.defaultDomain.codesource.certs.type | - | string | The certificate type. |
| data.entityClass.module.loader.defaultDomain.codesource.certs.hash | 1 | integer | The hash code for the certificate. |
| data.entityClass.module.loader.defaultDomain.codesource.sp | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.mask | 1 | integer | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.actions | - | string | the actions string. |
| data.entityClass.module.loader.defaultDomain.codesource.sp.hostname | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.cname | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.addresses | - | array | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.addresses.holder | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.addresses.holder.originalHostName | - | string | Reserve the original application specified hostname. The original hostname is useful for domain-based endpoint identification (see RFC 2818 and RFC 6125).  If an address was created with a raw IP address, a reverse name lookup may introduce endpoint identification security issue via DNS forging. Oracle JSSE provider is using this original hostname, via jdk.internal.misc.JavaNetAccess, for SSL/TLS endpoint identification. Note: May define a new public method in the future if necessary. |
| data.entityClass.module.loader.defaultDomain.codesource.sp.addresses.holder.hostName | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.addresses.holder.address | 1 | integer | Holds a 32-bit IPv4 address. |
| data.entityClass.module.loader.defaultDomain.codesource.sp.addresses.holder.family | 1 | integer | Specifies the address family type, for instance, '1' for IPv4 addresses, and '2' for IPv6 addresses. |
| data.entityClass.module.loader.defaultDomain.codesource.sp.addresses.canonicalHostName | - | string | Used to store the best available hostname. Lazily initialized via a data race; safe because Strings are immutable. |
| data.entityClass.module.loader.defaultDomain.codesource.sp.wildcard | true | boolean | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.init_with_ip | true | boolean | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.invalid | true | boolean | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.portrange | - | array | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.defaultDeny | false | boolean | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.untrusted | true | boolean | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.trusted | true | boolean | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.cdomain | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.hdomain | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.name | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.factory | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource.factory.type | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.factory.provider | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource.factory.certFacSpi | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource.locationNoFragString | - | string | A String form of the URL for use as a key in HashMaps/Sets. The String form should be behave in the same manner as the URL when compared for equality in a HashMap/Set, except that no nameservice lookup is done on the hostname (only string comparison), and the fragment is not considered. |
| data.entityClass.module.loader.defaultDomain.classloader | - | object | - |
| data.entityClass.module.loader.defaultDomain.principals | - | array | - |
| data.entityClass.module.loader.defaultDomain.permissions | - | object | - |
| data.entityClass.module.loader.defaultDomain.permissions.readOnly | true | boolean | Whether this permission collection is read-only. <p> If set, the method will throw an exception. |
| data.entityClass.module.loader.defaultDomain.hasAllPerm | false | boolean | - |
| data.entityClass.module.loader.defaultDomain.staticPermissions | true | boolean | - |
| data.entityClass.module.loader.defaultDomain.key | - | object | - |
| data.entityClass.module.loader.packages | - | object | - |
| data.entityClass.module.loader.packages.KEY | - | object | - |
| data.entityClass.module.loader.packages.KEY.name | - | string | - |
| data.entityClass.module.loader.packages.KEY.module | - | object | - |
| data.entityClass.module.loader.libraries | - | object | - |
| data.entityClass.module.loader.libraries.libraries | - | object | - |
| data.entityClass.module.loader.libraries.libraries.KEY | - | object | - |
| data.entityClass.module.loader.libraries.libraries.KEY.fromClass | - | object | - |
| data.entityClass.module.loader.libraries.libraries.KEY.name | - | string | - |
| data.entityClass.module.loader.libraries.libraries.KEY.isBuiltin | true | boolean | - |
| data.entityClass.module.loader.libraries.libraries.KEY.isJNI | true | boolean | - |
| data.entityClass.module.loader.libraries.libraries.KEY.handle | 1 | integer | - |
| data.entityClass.module.loader.libraries.libraries.KEY.jniVersion | 1 | integer | - |
| data.entityClass.module.loader.libraries.loader | - | object | - |
| data.entityClass.module.loader.libraries.caller | - | object | - |
| data.entityClass.module.loader.libraries.searchJavaLibraryPath | true | boolean | - |
| data.entityClass.module.loader.libraries.isJNI | true | boolean | - |
| data.entityClass.module.loader.assertionLock | - | object | - |
| data.entityClass.module.loader.defaultAssertionStatus | false | boolean | - |
| data.entityClass.module.loader.packageAssertionStatus | - | object | - |
| data.entityClass.module.loader.packageAssertionStatus.KEY | true | boolean | - |
| data.entityClass.module.loader.classAssertionStatus | - | object | - |
| data.entityClass.module.loader.classAssertionStatus.KEY | true | boolean | - |
| data.entityClass.module.loader.classLoaderValueMap | - | object | - |
| data.entityClass.module.loader.classLoaderValueMap.KEY | - | object | - |
| data.entityClass.module.descriptor | - | object | - |
| data.entityClass.module.descriptor.name | - | string | - |
| data.entityClass.module.descriptor.version | - | object | - |
| data.entityClass.module.descriptor.version.version | - | string | - |
| data.entityClass.module.descriptor.version.sequence | - | array | - |
| data.entityClass.module.descriptor.version.pre | - | array | - |
| data.entityClass.module.descriptor.version.build | - | array | - |
| data.entityClass.module.descriptor.rawVersionString | - | string | - |
| data.entityClass.module.descriptor.modifiers | - | array | - |
| data.entityClass.module.descriptor.open | true | boolean | - |
| data.entityClass.module.descriptor.automatic | true | boolean | - |
| data.entityClass.module.descriptor.requires | - | array | - |
| data.entityClass.module.descriptor.requires.mods | - | array | - |
| data.entityClass.module.descriptor.requires.name | - | string | - |
| data.entityClass.module.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.module.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.module.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.module.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.module.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.module.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.module.descriptor.exports | - | array | - |
| data.entityClass.module.descriptor.exports.mods | - | array | - |
| data.entityClass.module.descriptor.exports.source | - | string | - |
| data.entityClass.module.descriptor.exports.targets | - | array | - |
| data.entityClass.module.descriptor.opens | - | array | - |
| data.entityClass.module.descriptor.opens.mods | - | array | - |
| data.entityClass.module.descriptor.opens.source | - | string | - |
| data.entityClass.module.descriptor.opens.targets | - | array | - |
| data.entityClass.module.descriptor.uses | - | array | - |
| data.entityClass.module.descriptor.provides | - | array | - |
| data.entityClass.module.descriptor.provides.service | - | string | - |
| data.entityClass.module.descriptor.provides.providers | - | array | - |
| data.entityClass.module.descriptor.packages | - | array | - |
| data.entityClass.module.descriptor.mainClass | - | string | - |
| data.entityClass.module.descriptor.hash | 1 | integer | - |
| data.entityClass.module.enableNativeAccess | true | boolean | - |
| data.entityClass.module.reads | - | array | - |
| data.entityClass.module.openPackages | - | object | - |
| data.entityClass.module.openPackages.KEY | - | array | - |
| data.entityClass.module.exportedPackages | - | object | - |
| data.entityClass.module.exportedPackages.KEY | - | array | - |
| data.entityClass.module.moduleInfoClass | - | object | - |
| data.entityClass.classLoader | - | object | - |
| data.entityClass.classLoader.parent | - | object | - |
| data.entityClass.classLoader.name | - | string | - |
| data.entityClass.classLoader.unnamedModule | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.parents | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.cf | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.version | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.version.version | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.version.pre | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.version.build | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.modifiers | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.open | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.exports | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.exports.source | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.opens | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.opens.source | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.uses | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.provides | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.provides.service | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.packages | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.mainClass | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.scheme | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.fragment | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.authority | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.userInfo | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.host | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.port | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.path | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.query | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.hash | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.decodedAuthority | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.decodedPath | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.decodedQuery | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.decodedFragment | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.cf | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.version | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.version.version | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.version.pre | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.version.build | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.modifiers | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.open | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.exports | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.exports.source | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.opens | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.opens.source | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.uses | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.provides | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.provides.service | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.packages | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.mainClass | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.scheme | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.fragment | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.authority | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.userInfo | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.host | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.port | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.path | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.query | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.hash | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.decodedAuthority | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.decodedPath | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.decodedQuery | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.decodedFragment | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.cf | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.version | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.version.version | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.version.pre | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.version.build | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.modifiers | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.open | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.exports | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.exports.source | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.opens | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.opens.source | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.uses | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.provides | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.provides.service | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.packages | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.mainClass | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.scheme | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.fragment | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.authority | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.userInfo | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.host | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.port | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.path | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.query | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.hash | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.decodedAuthority | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.decodedPath | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.decodedQuery | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.decodedFragment | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.classLoader.unnamedModule.layer.cf.targetPlatform | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.allConfigurations | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.parents | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.nameToModule | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.nameToModule.KEY | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.allLayers | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.modules | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.servicesCatalog | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.servicesCatalog.map | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.servicesCatalog.map.KEY | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.servicesCatalog.map.KEY.module | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.servicesCatalog.map.KEY.providerName | - | string | - |
| data.entityClass.classLoader.unnamedModule.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.loader | - | object | - |
| data.entityClass.classLoader.unnamedModule.descriptor | - | object | - |
| data.entityClass.classLoader.unnamedModule.descriptor.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.version | - | object | - |
| data.entityClass.classLoader.unnamedModule.descriptor.version.version | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.version.sequence | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.version.pre | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.version.build | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.rawVersionString | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.modifiers | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.open | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.descriptor.automatic | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.exports | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.exports.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.exports.source | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.exports.targets | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.opens | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.opens.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.opens.source | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.opens.targets | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.uses | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.provides | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.provides.service | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.provides.providers | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.packages | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.mainClass | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.hash | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.enableNativeAccess | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.reads | - | array | - |
| data.entityClass.classLoader.unnamedModule.openPackages | - | object | - |
| data.entityClass.classLoader.unnamedModule.openPackages.KEY | - | array | - |
| data.entityClass.classLoader.unnamedModule.exportedPackages | - | object | - |
| data.entityClass.classLoader.unnamedModule.exportedPackages.KEY | - | array | - |
| data.entityClass.classLoader.unnamedModule.moduleInfoClass | - | object | - |
| data.entityClass.classLoader.nameAndId | - | string | - |
| data.entityClass.classLoader.parallelLockMap | - | object | - |
| data.entityClass.classLoader.parallelLockMap.KEY | - | object | - |
| data.entityClass.classLoader.package2certs | - | object | - |
| data.entityClass.classLoader.package2certs.KEY | - | object | - |
| data.entityClass.classLoader.classes | - | array | - |
| data.entityClass.classLoader.defaultDomain | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource.location | - | object | The code location. |
| data.entityClass.classLoader.defaultDomain.codesource.location.protocol | - | string | The protocol to use (ftp, http, nntp, ... etc.) . |
| data.entityClass.classLoader.defaultDomain.codesource.location.host | - | string | The host name to connect to. |
| data.entityClass.classLoader.defaultDomain.codesource.location.port | 1 | integer | The protocol port to connect to. |
| data.entityClass.classLoader.defaultDomain.codesource.location.file | - | string | The specified file name on that host. is defined as |
| data.entityClass.classLoader.defaultDomain.codesource.location.query | - | string | The query part of this URL. |
| data.entityClass.classLoader.defaultDomain.codesource.location.authority | - | string | The authority part of this URL. |
| data.entityClass.classLoader.defaultDomain.codesource.location.path | - | string | The path part of this URL. |
| data.entityClass.classLoader.defaultDomain.codesource.location.userInfo | - | string | The userinfo part of this URL. |
| data.entityClass.classLoader.defaultDomain.codesource.location.ref | - | string | # reference. |
| data.entityClass.classLoader.defaultDomain.codesource.location.hostAddress | - | object | The host's IP address, used in equals and hashCode. Computed on demand. An uninitialized or unknown hostAddress is null. |
| data.entityClass.classLoader.defaultDomain.codesource.location.hostAddress.holder | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.hostAddress.holder.originalHostName | - | string | Reserve the original application specified hostname. The original hostname is useful for domain-based endpoint identification (see RFC 2818 and RFC 6125).  If an address was created with a raw IP address, a reverse name lookup may introduce endpoint identification security issue via DNS forging. Oracle JSSE provider is using this original hostname, via jdk.internal.misc.JavaNetAccess, for SSL/TLS endpoint identification. Note: May define a new public method in the future if necessary. |
| data.entityClass.classLoader.defaultDomain.codesource.location.hostAddress.holder.hostName | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.hostAddress.holder.address | 1 | integer | Holds a 32-bit IPv4 address. |
| data.entityClass.classLoader.defaultDomain.codesource.location.hostAddress.holder.family | 1 | integer | Specifies the address family type, for instance, '1' for IPv4 addresses, and '2' for IPv6 addresses. |
| data.entityClass.classLoader.defaultDomain.codesource.location.hostAddress.canonicalHostName | - | string | Used to store the best available hostname. Lazily initialized via a data race; safe because Strings are immutable. |
| data.entityClass.classLoader.defaultDomain.codesource.location.handler | - | object | The URLStreamHandler for this URL. |
| data.entityClass.classLoader.defaultDomain.codesource.location.hashCode | 1 | integer | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.tempState | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.tempState.protocol | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.tempState.host | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.tempState.port | 1 | integer | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.tempState.authority | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.tempState.file | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.tempState.ref | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.tempState.hashCode | 1 | integer | - |
| data.entityClass.classLoader.defaultDomain.codesource.signers | - | array | - |
| data.entityClass.classLoader.defaultDomain.codesource.signers.signerCertPath | - | object | The signer's certificate path. |
| data.entityClass.classLoader.defaultDomain.codesource.signers.signerCertPath.type | - | string | The type of certificates in this chain. |
| data.entityClass.classLoader.defaultDomain.codesource.signers.timestamp | - | object | The signature timestamp. |
| data.entityClass.classLoader.defaultDomain.codesource.signers.timestamp.timestamp | 2026-01-31 13:47:08 | string | The timestamp's date and time |
| data.entityClass.classLoader.defaultDomain.codesource.signers.timestamp.signerCertPath | - | object | The TSA's certificate path. |
| data.entityClass.classLoader.defaultDomain.codesource.signers.timestamp.signerCertPath.type | - | string | The type of certificates in this chain. |
| data.entityClass.classLoader.defaultDomain.codesource.signers.timestamp.myhash | 1 | integer | - |
| data.entityClass.classLoader.defaultDomain.codesource.signers.myhash | 1 | integer | - |
| data.entityClass.classLoader.defaultDomain.codesource.certs | - | array | - |
| data.entityClass.classLoader.defaultDomain.codesource.certs.type | - | string | The certificate type. |
| data.entityClass.classLoader.defaultDomain.codesource.certs.hash | 1 | integer | The hash code for the certificate. |
| data.entityClass.classLoader.defaultDomain.codesource.sp | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.mask | 1 | integer | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.actions | - | string | the actions string. |
| data.entityClass.classLoader.defaultDomain.codesource.sp.hostname | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.cname | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.addresses | - | array | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.addresses.holder | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.addresses.holder.originalHostName | - | string | Reserve the original application specified hostname. The original hostname is useful for domain-based endpoint identification (see RFC 2818 and RFC 6125).  If an address was created with a raw IP address, a reverse name lookup may introduce endpoint identification security issue via DNS forging. Oracle JSSE provider is using this original hostname, via jdk.internal.misc.JavaNetAccess, for SSL/TLS endpoint identification. Note: May define a new public method in the future if necessary. |
| data.entityClass.classLoader.defaultDomain.codesource.sp.addresses.holder.hostName | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.addresses.holder.address | 1 | integer | Holds a 32-bit IPv4 address. |
| data.entityClass.classLoader.defaultDomain.codesource.sp.addresses.holder.family | 1 | integer | Specifies the address family type, for instance, '1' for IPv4 addresses, and '2' for IPv6 addresses. |
| data.entityClass.classLoader.defaultDomain.codesource.sp.addresses.canonicalHostName | - | string | Used to store the best available hostname. Lazily initialized via a data race; safe because Strings are immutable. |
| data.entityClass.classLoader.defaultDomain.codesource.sp.wildcard | true | boolean | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.init_with_ip | true | boolean | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.invalid | true | boolean | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.portrange | - | array | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.defaultDeny | false | boolean | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.untrusted | true | boolean | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.trusted | true | boolean | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.cdomain | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.hdomain | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.name | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.factory | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource.factory.type | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.factory.provider | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource.factory.certFacSpi | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource.locationNoFragString | - | string | A String form of the URL for use as a key in HashMaps/Sets. The String form should be behave in the same manner as the URL when compared for equality in a HashMap/Set, except that no nameservice lookup is done on the hostname (only string comparison), and the fragment is not considered. |
| data.entityClass.classLoader.defaultDomain.classloader | - | object | - |
| data.entityClass.classLoader.defaultDomain.principals | - | array | - |
| data.entityClass.classLoader.defaultDomain.permissions | - | object | - |
| data.entityClass.classLoader.defaultDomain.permissions.readOnly | true | boolean | Whether this permission collection is read-only. <p> If set, the method will throw an exception. |
| data.entityClass.classLoader.defaultDomain.hasAllPerm | false | boolean | - |
| data.entityClass.classLoader.defaultDomain.staticPermissions | true | boolean | - |
| data.entityClass.classLoader.defaultDomain.key | - | object | - |
| data.entityClass.classLoader.packages | - | object | - |
| data.entityClass.classLoader.packages.KEY | - | object | - |
| data.entityClass.classLoader.packages.KEY.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.parents | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.cf | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.version | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.version.version | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.version.pre | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.version.build | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.modifiers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.open | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.exports | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.exports.source | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.opens | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.opens.source | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.uses | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.provides | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.provides.service | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.packages | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.mainClass | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.scheme | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.fragment | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.authority | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.userInfo | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.host | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.port | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.path | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.query | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.hash | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.decodedAuthority | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.decodedPath | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.decodedQuery | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.decodedFragment | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.cf | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.version | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.version.version | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.version.pre | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.version.build | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.modifiers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.open | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.exports | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.exports.source | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.opens | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.opens.source | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.uses | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.provides | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.provides.service | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.packages | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.mainClass | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.scheme | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.fragment | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.authority | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.userInfo | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.host | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.port | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.path | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.query | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.hash | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.decodedAuthority | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.decodedPath | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.decodedQuery | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.decodedFragment | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.cf | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.version | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.version.version | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.version.pre | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.version.build | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.modifiers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.open | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.exports | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.exports.source | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.opens | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.opens.source | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.uses | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.provides | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.provides.service | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.packages | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.mainClass | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.scheme | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.fragment | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.authority | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.userInfo | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.host | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.port | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.path | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.query | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.hash | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.decodedAuthority | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.decodedPath | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.decodedQuery | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.decodedFragment | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.targetPlatform | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.allConfigurations | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.parents | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.nameToModule | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.nameToModule.KEY | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.allLayers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.modules | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.servicesCatalog | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.servicesCatalog.map | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.servicesCatalog.map.KEY | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.servicesCatalog.map.KEY.module | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.servicesCatalog.map.KEY.providerName | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.loader | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.version | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.version.version | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.version.sequence | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.version.pre | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.version.build | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.rawVersionString | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.modifiers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.open | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.automatic | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.exports | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.exports.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.exports.source | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.exports.targets | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.opens | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.opens.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.opens.source | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.opens.targets | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.uses | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.provides | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.provides.service | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.provides.providers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.packages | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.mainClass | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.hash | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.enableNativeAccess | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.reads | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.openPackages | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.openPackages.KEY | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.exportedPackages | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.exportedPackages.KEY | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.moduleInfoClass | - | object | - |
| data.entityClass.classLoader.libraries | - | object | - |
| data.entityClass.classLoader.libraries.libraries | - | object | - |
| data.entityClass.classLoader.libraries.libraries.KEY | - | object | - |
| data.entityClass.classLoader.libraries.libraries.KEY.fromClass | - | object | - |
| data.entityClass.classLoader.libraries.libraries.KEY.name | - | string | - |
| data.entityClass.classLoader.libraries.libraries.KEY.isBuiltin | true | boolean | - |
| data.entityClass.classLoader.libraries.libraries.KEY.isJNI | true | boolean | - |
| data.entityClass.classLoader.libraries.libraries.KEY.handle | 1 | integer | - |
| data.entityClass.classLoader.libraries.libraries.KEY.jniVersion | 1 | integer | - |
| data.entityClass.classLoader.libraries.loader | - | object | - |
| data.entityClass.classLoader.libraries.caller | - | object | - |
| data.entityClass.classLoader.libraries.searchJavaLibraryPath | true | boolean | - |
| data.entityClass.classLoader.libraries.isJNI | true | boolean | - |
| data.entityClass.classLoader.assertionLock | - | object | - |
| data.entityClass.classLoader.defaultAssertionStatus | false | boolean | - |
| data.entityClass.classLoader.packageAssertionStatus | - | object | - |
| data.entityClass.classLoader.packageAssertionStatus.KEY | true | boolean | - |
| data.entityClass.classLoader.classAssertionStatus | - | object | - |
| data.entityClass.classLoader.classAssertionStatus.KEY | true | boolean | - |
| data.entityClass.classLoader.classLoaderValueMap | - | object | - |
| data.entityClass.classLoader.classLoaderValueMap.KEY | - | object | - |
| data.entityClass.classData | - | object | - |
| data.entityClass.packageName | - | string | - |
| data.entityClass.componentType | - | object | - |
| data.entityClass.reflectionData | - | object | - |
| data.entityClass.reflectionData.timestamp | 1 | integer | Timestamp updated by each invocation of the get method.  The VM may use this field when selecting soft references to be cleared, but it is not required to do so. |
| data.entityClass.reflectionData.referent | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields | - | array | - |
| data.entityClass.reflectionData.referent.declaredFields.clazz | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.slot | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredFields.name | - | string | - |
| data.entityClass.reflectionData.referent.declaredFields.type | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredFields.trustedFinal | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredFields.signature | - | string | - |
| data.entityClass.reflectionData.referent.declaredFields.genericInfo | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.genericInfo.genericType | - | object | The generic type info.  Lazily initialized. |
| data.entityClass.reflectionData.referent.declaredFields.genericInfo.factory | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.genericInfo.tree | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.annotations | - | array | - |
| data.entityClass.reflectionData.referent.declaredFields.fieldAccessor | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.overrideFieldAccessor | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.root | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.override | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredFields.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.publicFields | - | array | - |
| data.entityClass.reflectionData.referent.publicFields.clazz | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.slot | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicFields.name | - | string | - |
| data.entityClass.reflectionData.referent.publicFields.type | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicFields.trustedFinal | true | boolean | - |
| data.entityClass.reflectionData.referent.publicFields.signature | - | string | - |
| data.entityClass.reflectionData.referent.publicFields.genericInfo | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.genericInfo.genericType | - | object | The generic type info.  Lazily initialized. |
| data.entityClass.reflectionData.referent.publicFields.genericInfo.factory | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.genericInfo.tree | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.annotations | - | array | - |
| data.entityClass.reflectionData.referent.publicFields.fieldAccessor | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.overrideFieldAccessor | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.root | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.override | true | boolean | - |
| data.entityClass.reflectionData.referent.publicFields.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods | - | array | - |
| data.entityClass.reflectionData.referent.declaredMethods.clazz | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.slot | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredMethods.name | - | string | - |
| data.entityClass.reflectionData.referent.declaredMethods.returnType | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameterTypes | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.exceptionTypes | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredMethods.signature | - | string | - |
| data.entityClass.reflectionData.referent.declaredMethods.genericInfo | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.genericInfo.returnType | - | object | The generic return type info.  Lazily initialized. |
| data.entityClass.reflectionData.referent.declaredMethods.genericInfo.parameterTypes | - | array | - |
| data.entityClass.reflectionData.referent.declaredMethods.genericInfo.exceptionTypes | - | array | - |
| data.entityClass.reflectionData.referent.declaredMethods.genericInfo.typeParameters | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.genericInfo.factory | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.genericInfo.tree | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.annotations | - | array | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameterAnnotations | - | array | - |
| data.entityClass.reflectionData.referent.declaredMethods.annotationDefault | - | array | - |
| data.entityClass.reflectionData.referent.declaredMethods.methodAccessor | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.root | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters | - | array | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.name | - | string | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.executable | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.executable.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.executable.parameters | - | array | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.executable.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.executable.override | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.executable.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.index | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.parameterTypeCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.parameterClassCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.override | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredMethods.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods | - | array | - |
| data.entityClass.reflectionData.referent.publicMethods.clazz | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.slot | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicMethods.name | - | string | - |
| data.entityClass.reflectionData.referent.publicMethods.returnType | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.parameterTypes | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.exceptionTypes | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicMethods.signature | - | string | - |
| data.entityClass.reflectionData.referent.publicMethods.genericInfo | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.genericInfo.returnType | - | object | The generic return type info.  Lazily initialized. |
| data.entityClass.reflectionData.referent.publicMethods.genericInfo.parameterTypes | - | array | - |
| data.entityClass.reflectionData.referent.publicMethods.genericInfo.exceptionTypes | - | array | - |
| data.entityClass.reflectionData.referent.publicMethods.genericInfo.typeParameters | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.genericInfo.factory | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.genericInfo.tree | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.annotations | - | array | - |
| data.entityClass.reflectionData.referent.publicMethods.parameterAnnotations | - | array | - |
| data.entityClass.reflectionData.referent.publicMethods.annotationDefault | - | array | - |
| data.entityClass.reflectionData.referent.publicMethods.methodAccessor | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.root | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters | - | array | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.name | - | string | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.executable | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.executable.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.executable.parameters | - | array | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.executable.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.executable.override | true | boolean | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.executable.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.index | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.parameterTypeCache | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.parameterClassCache | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.override | true | boolean | - |
| data.entityClass.reflectionData.referent.publicMethods.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.clazz | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.slot | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameterTypes | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.exceptionTypes | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredConstructors.signature | - | string | - |
| data.entityClass.reflectionData.referent.declaredConstructors.genericInfo | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.genericInfo.parameterTypes | - | array | The generic parameter types.  Lazily initialized. |
| data.entityClass.reflectionData.referent.declaredConstructors.genericInfo.exceptionTypes | - | array | The generic exception types.  Lazily initialized. |
| data.entityClass.reflectionData.referent.declaredConstructors.genericInfo.typeParameters | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.genericInfo.factory | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.genericInfo.tree | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.annotations | - | array | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameterAnnotations | - | array | - |
| data.entityClass.reflectionData.referent.declaredConstructors.constructorAccessor | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.root | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters | - | array | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.name | - | string | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.executable | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.executable.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.executable.parameters | - | array | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.executable.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.executable.override | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.executable.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.index | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.parameterTypeCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.parameterClassCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.override | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredConstructors.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.clazz | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.slot | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameterTypes | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.exceptionTypes | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicConstructors.signature | - | string | - |
| data.entityClass.reflectionData.referent.publicConstructors.genericInfo | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.genericInfo.parameterTypes | - | array | The generic parameter types.  Lazily initialized. |
| data.entityClass.reflectionData.referent.publicConstructors.genericInfo.exceptionTypes | - | array | The generic exception types.  Lazily initialized. |
| data.entityClass.reflectionData.referent.publicConstructors.genericInfo.typeParameters | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.genericInfo.factory | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.genericInfo.tree | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.annotations | - | array | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameterAnnotations | - | array | - |
| data.entityClass.reflectionData.referent.publicConstructors.constructorAccessor | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.root | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters | - | array | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.name | - | string | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.executable | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.executable.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.executable.parameters | - | array | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.executable.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.executable.override | true | boolean | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.executable.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.index | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.parameterTypeCache | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.parameterClassCache | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.override | true | boolean | - |
| data.entityClass.reflectionData.referent.publicConstructors.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.clazz | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.slot | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.name | - | string | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.type | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.trustedFinal | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.signature | - | string | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.genericInfo | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.genericInfo.genericType | - | object | The generic type info.  Lazily initialized. |
| data.entityClass.reflectionData.referent.declaredPublicFields.genericInfo.factory | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.genericInfo.tree | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.annotations | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.fieldAccessor | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.overrideFieldAccessor | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.root | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.override | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.clazz | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.slot | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.name | - | string | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.returnType | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameterTypes | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.exceptionTypes | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.signature | - | string | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.genericInfo | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.genericInfo.returnType | - | object | The generic return type info.  Lazily initialized. |
| data.entityClass.reflectionData.referent.declaredPublicMethods.genericInfo.parameterTypes | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.genericInfo.exceptionTypes | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.genericInfo.typeParameters | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.genericInfo.factory | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.genericInfo.tree | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.annotations | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameterAnnotations | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.annotationDefault | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.methodAccessor | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.root | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.name | - | string | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.executable | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.executable.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.executable.parameters | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.executable.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.executable.override | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.executable.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.index | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.parameterTypeCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.parameterClassCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.override | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.interfaces | - | object | - |
| data.entityClass.reflectionData.referent.simpleName | - | string | - |
| data.entityClass.reflectionData.referent.canonicalName | - | string | - |
| data.entityClass.reflectionData.referent.redefinedCount | 1 | integer | - |
| data.entityClass.reflectionData.queue | - | object | - |
| data.entityClass.reflectionData.queue.lock | - | object | - |
| data.entityClass.reflectionData.queue.head | - | object | - |
| data.entityClass.reflectionData.queue.head.referent | - | object | - |
| data.entityClass.reflectionData.queue.head.queue | - | object | - |
| data.entityClass.reflectionData.queue.head.next | - | object | - |
| data.entityClass.reflectionData.queue.head.discovered | - | object | - |
| data.entityClass.reflectionData.queue.queueLength | 0 | integer | - |
| data.entityClass.reflectionData.next | - | object | - |
| data.entityClass.reflectionData.next.referent | - | object | - |
| data.entityClass.reflectionData.next.queue | - | object | - |
| data.entityClass.reflectionData.next.queue.lock | - | object | - |
| data.entityClass.reflectionData.next.queue.head | - | object | - |
| data.entityClass.reflectionData.next.queue.queueLength | 0 | integer | - |
| data.entityClass.reflectionData.next.next | - | object | - |
| data.entityClass.reflectionData.next.discovered | - | object | - |
| data.entityClass.reflectionData.discovered | - | object | - |
| data.entityClass.reflectionData.discovered.referent | - | object | - |
| data.entityClass.reflectionData.discovered.queue | - | object | - |
| data.entityClass.reflectionData.discovered.queue.lock | - | object | - |
| data.entityClass.reflectionData.discovered.queue.head | - | object | - |
| data.entityClass.reflectionData.discovered.queue.queueLength | 0 | integer | - |
| data.entityClass.reflectionData.discovered.next | - | object | - |
| data.entityClass.reflectionData.discovered.discovered | - | object | - |
| data.entityClass.classRedefinedCount | 1 | integer | - |
| data.entityClass.genericInfo | - | object | - |
| data.entityClass.genericInfo.superclass | - | object | The generic superclass info.  Lazily initialized. |
| data.entityClass.genericInfo.superInterfaces | - | array | The generic superinterface info.  Lazily initialized. |
| data.entityClass.genericInfo.typeParameters | - | object | - |
| data.entityClass.genericInfo.factory | - | object | - |
| data.entityClass.genericInfo.tree | - | object | - |
| data.entityClass.enumConstants | - | array | - |
| data.entityClass.enumConstantDirectory | - | object | - |
| data.entityClass.enumConstantDirectory.KEY | - | object | - |
| data.entityClass.annotationData | - | object | - |
| data.entityClass.annotationData.annotations | - | object | - |
| data.entityClass.annotationData.declaredAnnotations | - | object | - |
| data.entityClass.annotationData.redefinedCount | 1 | integer | - |
| data.entityClass.annotationType | - | object | - |
| data.entityClass.annotationType.memberTypes | - | object | Member name -> type mapping. Note that primitive types are represented by the class objects for the corresponding wrapper types.  This matches the return value that must be used for a dynamic proxy, allowing for a simple isInstance test. |
| data.entityClass.annotationType.memberTypes.KEY | - | object | - |
| data.entityClass.annotationType.memberDefaults | - | object | Member name -> default value mapping. |
| data.entityClass.annotationType.memberDefaults.KEY | - | object | - |
| data.entityClass.annotationType.members | - | object | Member name -> Method object mapping. This (and its associated accessor) are used only to generate AnnotationTypeMismatchExceptions. |
| data.entityClass.annotationType.members.KEY | - | object | - |
| data.entityClass.annotationType.members.KEY.clazz | - | object | - |
| data.entityClass.annotationType.members.KEY.slot | 1 | integer | - |
| data.entityClass.annotationType.members.KEY.name | - | string | - |
| data.entityClass.annotationType.members.KEY.returnType | - | object | - |
| data.entityClass.annotationType.members.KEY.parameterTypes | - | object | - |
| data.entityClass.annotationType.members.KEY.exceptionTypes | - | object | - |
| data.entityClass.annotationType.members.KEY.modifiers | 1 | integer | - |
| data.entityClass.annotationType.members.KEY.signature | - | string | - |
| data.entityClass.annotationType.members.KEY.genericInfo | - | object | - |
| data.entityClass.annotationType.members.KEY.genericInfo.returnType | - | object | The generic return type info.  Lazily initialized. |
| data.entityClass.annotationType.members.KEY.genericInfo.parameterTypes | - | array | - |
| data.entityClass.annotationType.members.KEY.genericInfo.exceptionTypes | - | array | - |
| data.entityClass.annotationType.members.KEY.genericInfo.typeParameters | - | object | - |
| data.entityClass.annotationType.members.KEY.genericInfo.factory | - | object | - |
| data.entityClass.annotationType.members.KEY.genericInfo.tree | - | object | - |
| data.entityClass.annotationType.members.KEY.annotations | - | array | - |
| data.entityClass.annotationType.members.KEY.parameterAnnotations | - | array | - |
| data.entityClass.annotationType.members.KEY.annotationDefault | - | array | - |
| data.entityClass.annotationType.members.KEY.methodAccessor | - | object | - |
| data.entityClass.annotationType.members.KEY.root | - | object | - |
| data.entityClass.annotationType.members.KEY.hasRealParameterData | true | boolean | - |
| data.entityClass.annotationType.members.KEY.parameters | - | array | - |
| data.entityClass.annotationType.members.KEY.parameters.name | - | string | - |
| data.entityClass.annotationType.members.KEY.parameters.modifiers | 1 | integer | - |
| data.entityClass.annotationType.members.KEY.parameters.executable | - | object | - |
| data.entityClass.annotationType.members.KEY.parameters.executable.hasRealParameterData | true | boolean | - |
| data.entityClass.annotationType.members.KEY.parameters.executable.parameters | - | array | - |
| data.entityClass.annotationType.members.KEY.parameters.executable.declaredAnnotations | - | object | - |
| data.entityClass.annotationType.members.KEY.parameters.executable.override | true | boolean | - |
| data.entityClass.annotationType.members.KEY.parameters.executable.accessCheckCache | - | object | - |
| data.entityClass.annotationType.members.KEY.parameters.index | 1 | integer | - |
| data.entityClass.annotationType.members.KEY.parameters.parameterTypeCache | - | object | - |
| data.entityClass.annotationType.members.KEY.parameters.parameterClassCache | - | object | - |
| data.entityClass.annotationType.members.KEY.parameters.declaredAnnotations | - | object | - |
| data.entityClass.annotationType.members.KEY.declaredAnnotations | - | object | - |
| data.entityClass.annotationType.members.KEY.override | true | boolean | - |
| data.entityClass.annotationType.members.KEY.accessCheckCache | - | object | - |
| data.entityClass.annotationType.retention | SOURCE | string | The retention policy for this annotation type.SOURCE CLASS RUNTIME |
| data.entityClass.annotationType.inherited | true | boolean | Whether this annotation type is inherited. |
| data.entityClass.classValueMap | - | object | - |

* 失败(404)

```javascript
暂无数据
```

* 成功返回(200)

```javascript
{
    "code": 0,
    "msg": "",
    "data": [
        {
            "id": 1,
            "type": "",
            "domain": "",
            "reachable": true,
            "latencyMs": 1,
            "checkTime": "2026-01-31 13:47:07",
            "remark": ""
        }
    ]
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | number | - |
| msg | - | string | - |
| data | - | array | - |
| data.id | 1 | number | - |
| data.type | - | string | 类型： /**
     * 云端
     */
    CLOUD("CLOUD"),
    /**
     * 店铺端
     */
    SHOP("SHOP"),
    /**
     * 外网
     */
    INTERNET("INTERNET"),

    /**
     * 机器设备
     */
    DEVICE("MAC"),

    /**
     * 小票打印机
     */
    PRINTER("PRINTER"),

    /**
     * 播报器
     */
    SPEAKER("SPEAKER"),

    /**
     * 显示屏
     */
    DISPLAY("DISPLAY")

    ; |
| data.domain | - | string | 探测目标（域名或 URL） |
| data.reachable | true | boolean | 连通状态（true 可达 / false 不可达） |
| data.latencyMs | 1 | number | 连通延迟（毫秒） |
| data.checkTime | 2026-01-31 13:47:07 | string | 本次探测时间 |
| data.remark | - | string | 备注/错误信息 |

**Query**

## 查询网络状态列表 (状态栏显示)

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-02-02 13:28:29

> 更新时间: 2026-02-02 13:28:58

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.201.122:9999/admin/network-status/statusBarList

**请求方式**

> GET

**Content-Type**

> none

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{
    "code": 0,
    "msg": "",
    "data": [
        {
            "id": 1,
            "type": "",
            "domain": "",
            "reachable": true,
            "latencyMs": 1,
            "checkTime": "2026-01-31 13:47:07",
            "remark": ""
        }
    ]
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | array | - |
| data.id | 1 | integer | 主键ID |
| data.type | - | string | 类型 |
| data.bizId | - | string | 业务ID |
| data.bizName | - | string | 业务名称 |
| data.domain | - | string | 探测目标 |
| data.reachable | true | boolean | 连通状态 |
| data.latencyMs | 1 | integer | 连通延迟(ms) |
| data.checkTime | 2026-02-02 13:28:28 | string | 探测时间 |
| data.remark | - | string | 备注/错误信息 |

* 失败(404)

```javascript
暂无数据
```

**Query**

## 获取云端网络状态 

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-03-05 15:24:52

> 更新时间: 2026-03-05 15:32:29

**[object Object]**

**接口状态**

> 开发中

**接口URL**

> https://ops.huabing.online/ops/network-status/list?type=

**请求方式**

> GET

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| type | - | string | 否 | 可选：按类型筛选（sys_network_status.type） |

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{"code":0,"msg":null,"data":[{"id":"1","type":"SHOP","bizId":null,"bizName":null,"domain":"http://192.168.10.10:7780","reachable":true,"latencyMs":"5","checkTime":"2026-03-05 15:32:15","remark":null},{"id":"2","type":"CLOUD","bizId":null,"bizName":null,"domain":"https://ops.huabing.online","reachable":true,"latencyMs":"13","checkTime":"2026-03-05 15:32:15","remark":null},{"id":"3","type":"INTERNET","bizId":null,"bizName":null,"domain":"www.baidu.com","reachable":true,"latencyMs":"329","checkTime":"2026-03-05 15:32:15","remark":null},{"id":"4","type":"PRINTER","bizId":"2027242191887044610","bizName":null,"domain":"192.168.10.90","reachable":true,"latencyMs":"66","checkTime":"2026-03-05 15:32:15","remark":null}],"ok":true}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | array | - |
| data.id | 1 | integer | 主键id |
| data.type | - | string | 类型 |
| data.domain | - | string | 探测目标 |
| data.reachable | true | boolean | 连通状态 |
| data.latencyMs | 1 | integer | 连通延迟(ms) |
| data.checkTime | 2026-01-31 13:47:07 | string | 探测时间 |
| data.remark | - | string | 备注/错误信息 |
| data.entityClass | - | object | - |
| data.entityClass.cachedConstructor | - | object | - |
| data.entityClass.cachedConstructor.clazz | - | object | - |
| data.entityClass.cachedConstructor.slot | 1 | integer | - |
| data.entityClass.cachedConstructor.parameterTypes | - | object | - |
| data.entityClass.cachedConstructor.exceptionTypes | - | object | - |
| data.entityClass.cachedConstructor.modifiers | 1 | integer | - |
| data.entityClass.cachedConstructor.signature | - | string | - |
| data.entityClass.cachedConstructor.genericInfo | - | object | - |
| data.entityClass.cachedConstructor.genericInfo.parameterTypes | - | array | The generic parameter types.  Lazily initialized. |
| data.entityClass.cachedConstructor.genericInfo.exceptionTypes | - | array | The generic exception types.  Lazily initialized. |
| data.entityClass.cachedConstructor.genericInfo.typeParameters | - | object | - |
| data.entityClass.cachedConstructor.genericInfo.factory | - | object | - |
| data.entityClass.cachedConstructor.genericInfo.tree | - | object | - |
| data.entityClass.cachedConstructor.annotations | - | array | - |
| data.entityClass.cachedConstructor.parameterAnnotations | - | array | - |
| data.entityClass.cachedConstructor.constructorAccessor | - | object | - |
| data.entityClass.cachedConstructor.root | - | object | - |
| data.entityClass.cachedConstructor.hasRealParameterData | true | boolean | - |
| data.entityClass.cachedConstructor.parameters | - | array | - |
| data.entityClass.cachedConstructor.parameters.name | - | string | - |
| data.entityClass.cachedConstructor.parameters.modifiers | 1 | integer | - |
| data.entityClass.cachedConstructor.parameters.executable | - | object | - |
| data.entityClass.cachedConstructor.parameters.executable.hasRealParameterData | true | boolean | - |
| data.entityClass.cachedConstructor.parameters.executable.parameters | - | array | - |
| data.entityClass.cachedConstructor.parameters.executable.declaredAnnotations | - | object | - |
| data.entityClass.cachedConstructor.parameters.executable.override | true | boolean | - |
| data.entityClass.cachedConstructor.parameters.executable.accessCheckCache | - | object | - |
| data.entityClass.cachedConstructor.parameters.index | 1 | integer | - |
| data.entityClass.cachedConstructor.parameters.parameterTypeCache | - | object | - |
| data.entityClass.cachedConstructor.parameters.parameterClassCache | - | object | - |
| data.entityClass.cachedConstructor.parameters.declaredAnnotations | - | object | - |
| data.entityClass.cachedConstructor.declaredAnnotations | - | object | - |
| data.entityClass.cachedConstructor.override | true | boolean | - |
| data.entityClass.cachedConstructor.accessCheckCache | - | object | - |
| data.entityClass.name | - | string | - |
| data.entityClass.module | - | object | - |
| data.entityClass.module.layer | - | object | - |
| data.entityClass.module.layer.cf | - | object | - |
| data.entityClass.module.layer.cf.parents | - | array | - |
| data.entityClass.module.layer.cf.graph | - | object | - |
| data.entityClass.module.layer.cf.graph.KEY | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.cf | - | object | - |
| data.entityClass.module.layer.cf.graph.KEY.mref | - | object | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor | - | object | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.name | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.version | - | object | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.version.version | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.version.pre | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.version.build | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.modifiers | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.open | true | boolean | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires.name | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.exports | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.exports.source | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.opens | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.opens.source | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.uses | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.provides | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.provides.service | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.packages | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.mainClass | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location | - | object | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.scheme | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.fragment | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.authority | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.userInfo | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.host | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.port | 1 | integer | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.path | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.query | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.hash | 1 | integer | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.decodedAuthority | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.decodedPath | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.decodedQuery | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.decodedFragment | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.module.layer.cf.modules | - | array | - |
| data.entityClass.module.layer.cf.modules.cf | - | object | - |
| data.entityClass.module.layer.cf.modules.mref | - | object | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor | - | object | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.name | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.version | - | object | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.version.version | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.version.pre | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.version.build | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.modifiers | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.open | true | boolean | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires.name | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.exports | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.exports.source | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.opens | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.opens.source | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.uses | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.provides | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.provides.service | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.packages | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.mainClass | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.module.layer.cf.modules.mref.location | - | object | - |
| data.entityClass.module.layer.cf.modules.mref.location.scheme | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.fragment | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.authority | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.userInfo | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.host | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.port | 1 | integer | - |
| data.entityClass.module.layer.cf.modules.mref.location.path | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.query | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.hash | 1 | integer | - |
| data.entityClass.module.layer.cf.modules.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.decodedAuthority | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.decodedPath | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.decodedQuery | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.decodedFragment | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.module.layer.cf.nameToModule | - | object | - |
| data.entityClass.module.layer.cf.nameToModule.KEY | - | object | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.cf | - | object | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref | - | object | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor | - | object | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.name | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.version | - | object | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.version.version | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.version.pre | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.version.build | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.modifiers | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.open | true | boolean | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.name | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.exports | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.exports.source | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.opens | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.opens.source | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.uses | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.provides | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.provides.service | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.packages | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.mainClass | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location | - | object | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.scheme | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.fragment | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.authority | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.userInfo | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.host | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.port | 1 | integer | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.path | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.query | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.hash | 1 | integer | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.decodedAuthority | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.decodedPath | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.decodedQuery | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.decodedFragment | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.module.layer.cf.targetPlatform | - | string | - |
| data.entityClass.module.layer.cf.allConfigurations | - | array | - |
| data.entityClass.module.layer.parents | - | array | - |
| data.entityClass.module.layer.nameToModule | - | object | - |
| data.entityClass.module.layer.nameToModule.KEY | - | object | - |
| data.entityClass.module.layer.allLayers | - | array | - |
| data.entityClass.module.layer.modules | - | array | - |
| data.entityClass.module.layer.servicesCatalog | - | object | - |
| data.entityClass.module.layer.servicesCatalog.map | - | object | - |
| data.entityClass.module.layer.servicesCatalog.map.KEY | - | array | - |
| data.entityClass.module.layer.servicesCatalog.map.KEY.module | - | object | - |
| data.entityClass.module.layer.servicesCatalog.map.KEY.providerName | - | string | - |
| data.entityClass.module.name | - | string | - |
| data.entityClass.module.loader | - | object | - |
| data.entityClass.module.loader.parent | - | object | - |
| data.entityClass.module.loader.name | - | string | - |
| data.entityClass.module.loader.unnamedModule | - | object | - |
| data.entityClass.module.loader.nameAndId | - | string | - |
| data.entityClass.module.loader.parallelLockMap | - | object | - |
| data.entityClass.module.loader.parallelLockMap.KEY | - | object | - |
| data.entityClass.module.loader.package2certs | - | object | - |
| data.entityClass.module.loader.package2certs.KEY | - | object | - |
| data.entityClass.module.loader.classes | - | array | - |
| data.entityClass.module.loader.defaultDomain | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource.location | - | object | The code location. |
| data.entityClass.module.loader.defaultDomain.codesource.location.protocol | - | string | The protocol to use (ftp, http, nntp, ... etc.) . |
| data.entityClass.module.loader.defaultDomain.codesource.location.host | - | string | The host name to connect to. |
| data.entityClass.module.loader.defaultDomain.codesource.location.port | 1 | integer | The protocol port to connect to. |
| data.entityClass.module.loader.defaultDomain.codesource.location.file | - | string | The specified file name on that host. is defined as |
| data.entityClass.module.loader.defaultDomain.codesource.location.query | - | string | The query part of this URL. |
| data.entityClass.module.loader.defaultDomain.codesource.location.authority | - | string | The authority part of this URL. |
| data.entityClass.module.loader.defaultDomain.codesource.location.path | - | string | The path part of this URL. |
| data.entityClass.module.loader.defaultDomain.codesource.location.userInfo | - | string | The userinfo part of this URL. |
| data.entityClass.module.loader.defaultDomain.codesource.location.ref | - | string | # reference. |
| data.entityClass.module.loader.defaultDomain.codesource.location.hostAddress | - | object | The host's IP address, used in equals and hashCode. Computed on demand. An uninitialized or unknown hostAddress is null. |
| data.entityClass.module.loader.defaultDomain.codesource.location.hostAddress.holder | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.hostAddress.holder.originalHostName | - | string | Reserve the original application specified hostname. The original hostname is useful for domain-based endpoint identification (see RFC 2818 and RFC 6125).  If an address was created with a raw IP address, a reverse name lookup may introduce endpoint identification security issue via DNS forging. Oracle JSSE provider is using this original hostname, via jdk.internal.misc.JavaNetAccess, for SSL/TLS endpoint identification. Note: May define a new public method in the future if necessary. |
| data.entityClass.module.loader.defaultDomain.codesource.location.hostAddress.holder.hostName | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.hostAddress.holder.address | 1 | integer | Holds a 32-bit IPv4 address. |
| data.entityClass.module.loader.defaultDomain.codesource.location.hostAddress.holder.family | 1 | integer | Specifies the address family type, for instance, '1' for IPv4 addresses, and '2' for IPv6 addresses. |
| data.entityClass.module.loader.defaultDomain.codesource.location.hostAddress.canonicalHostName | - | string | Used to store the best available hostname. Lazily initialized via a data race; safe because Strings are immutable. |
| data.entityClass.module.loader.defaultDomain.codesource.location.handler | - | object | The URLStreamHandler for this URL. |
| data.entityClass.module.loader.defaultDomain.codesource.location.hashCode | 1 | integer | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.tempState | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.tempState.protocol | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.tempState.host | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.tempState.port | 1 | integer | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.tempState.authority | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.tempState.file | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.tempState.ref | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.tempState.hashCode | 1 | integer | - |
| data.entityClass.module.loader.defaultDomain.codesource.signers | - | array | - |
| data.entityClass.module.loader.defaultDomain.codesource.signers.signerCertPath | - | object | The signer's certificate path. |
| data.entityClass.module.loader.defaultDomain.codesource.signers.signerCertPath.type | - | string | The type of certificates in this chain. |
| data.entityClass.module.loader.defaultDomain.codesource.signers.timestamp | - | object | The signature timestamp. |
| data.entityClass.module.loader.defaultDomain.codesource.signers.timestamp.timestamp | 2026-01-31 13:47:08 | string | The timestamp's date and time |
| data.entityClass.module.loader.defaultDomain.codesource.signers.timestamp.signerCertPath | - | object | The TSA's certificate path. |
| data.entityClass.module.loader.defaultDomain.codesource.signers.timestamp.signerCertPath.type | - | string | The type of certificates in this chain. |
| data.entityClass.module.loader.defaultDomain.codesource.signers.timestamp.myhash | 1 | integer | - |
| data.entityClass.module.loader.defaultDomain.codesource.signers.myhash | 1 | integer | - |
| data.entityClass.module.loader.defaultDomain.codesource.certs | - | array | - |
| data.entityClass.module.loader.defaultDomain.codesource.certs.type | - | string | The certificate type. |
| data.entityClass.module.loader.defaultDomain.codesource.certs.hash | 1 | integer | The hash code for the certificate. |
| data.entityClass.module.loader.defaultDomain.codesource.sp | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.mask | 1 | integer | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.actions | - | string | the actions string. |
| data.entityClass.module.loader.defaultDomain.codesource.sp.hostname | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.cname | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.addresses | - | array | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.addresses.holder | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.addresses.holder.originalHostName | - | string | Reserve the original application specified hostname. The original hostname is useful for domain-based endpoint identification (see RFC 2818 and RFC 6125).  If an address was created with a raw IP address, a reverse name lookup may introduce endpoint identification security issue via DNS forging. Oracle JSSE provider is using this original hostname, via jdk.internal.misc.JavaNetAccess, for SSL/TLS endpoint identification. Note: May define a new public method in the future if necessary. |
| data.entityClass.module.loader.defaultDomain.codesource.sp.addresses.holder.hostName | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.addresses.holder.address | 1 | integer | Holds a 32-bit IPv4 address. |
| data.entityClass.module.loader.defaultDomain.codesource.sp.addresses.holder.family | 1 | integer | Specifies the address family type, for instance, '1' for IPv4 addresses, and '2' for IPv6 addresses. |
| data.entityClass.module.loader.defaultDomain.codesource.sp.addresses.canonicalHostName | - | string | Used to store the best available hostname. Lazily initialized via a data race; safe because Strings are immutable. |
| data.entityClass.module.loader.defaultDomain.codesource.sp.wildcard | true | boolean | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.init_with_ip | true | boolean | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.invalid | true | boolean | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.portrange | - | array | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.defaultDeny | false | boolean | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.untrusted | true | boolean | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.trusted | true | boolean | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.cdomain | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.hdomain | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.name | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.factory | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource.factory.type | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.factory.provider | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource.factory.certFacSpi | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource.locationNoFragString | - | string | A String form of the URL for use as a key in HashMaps/Sets. The String form should be behave in the same manner as the URL when compared for equality in a HashMap/Set, except that no nameservice lookup is done on the hostname (only string comparison), and the fragment is not considered. |
| data.entityClass.module.loader.defaultDomain.classloader | - | object | - |
| data.entityClass.module.loader.defaultDomain.principals | - | array | - |
| data.entityClass.module.loader.defaultDomain.permissions | - | object | - |
| data.entityClass.module.loader.defaultDomain.permissions.readOnly | true | boolean | Whether this permission collection is read-only. <p> If set, the method will throw an exception. |
| data.entityClass.module.loader.defaultDomain.hasAllPerm | false | boolean | - |
| data.entityClass.module.loader.defaultDomain.staticPermissions | true | boolean | - |
| data.entityClass.module.loader.defaultDomain.key | - | object | - |
| data.entityClass.module.loader.packages | - | object | - |
| data.entityClass.module.loader.packages.KEY | - | object | - |
| data.entityClass.module.loader.packages.KEY.name | - | string | - |
| data.entityClass.module.loader.packages.KEY.module | - | object | - |
| data.entityClass.module.loader.libraries | - | object | - |
| data.entityClass.module.loader.libraries.libraries | - | object | - |
| data.entityClass.module.loader.libraries.libraries.KEY | - | object | - |
| data.entityClass.module.loader.libraries.libraries.KEY.fromClass | - | object | - |
| data.entityClass.module.loader.libraries.libraries.KEY.name | - | string | - |
| data.entityClass.module.loader.libraries.libraries.KEY.isBuiltin | true | boolean | - |
| data.entityClass.module.loader.libraries.libraries.KEY.isJNI | true | boolean | - |
| data.entityClass.module.loader.libraries.libraries.KEY.handle | 1 | integer | - |
| data.entityClass.module.loader.libraries.libraries.KEY.jniVersion | 1 | integer | - |
| data.entityClass.module.loader.libraries.loader | - | object | - |
| data.entityClass.module.loader.libraries.caller | - | object | - |
| data.entityClass.module.loader.libraries.searchJavaLibraryPath | true | boolean | - |
| data.entityClass.module.loader.libraries.isJNI | true | boolean | - |
| data.entityClass.module.loader.assertionLock | - | object | - |
| data.entityClass.module.loader.defaultAssertionStatus | false | boolean | - |
| data.entityClass.module.loader.packageAssertionStatus | - | object | - |
| data.entityClass.module.loader.packageAssertionStatus.KEY | true | boolean | - |
| data.entityClass.module.loader.classAssertionStatus | - | object | - |
| data.entityClass.module.loader.classAssertionStatus.KEY | true | boolean | - |
| data.entityClass.module.loader.classLoaderValueMap | - | object | - |
| data.entityClass.module.loader.classLoaderValueMap.KEY | - | object | - |
| data.entityClass.module.descriptor | - | object | - |
| data.entityClass.module.descriptor.name | - | string | - |
| data.entityClass.module.descriptor.version | - | object | - |
| data.entityClass.module.descriptor.version.version | - | string | - |
| data.entityClass.module.descriptor.version.sequence | - | array | - |
| data.entityClass.module.descriptor.version.pre | - | array | - |
| data.entityClass.module.descriptor.version.build | - | array | - |
| data.entityClass.module.descriptor.rawVersionString | - | string | - |
| data.entityClass.module.descriptor.modifiers | - | array | - |
| data.entityClass.module.descriptor.open | true | boolean | - |
| data.entityClass.module.descriptor.automatic | true | boolean | - |
| data.entityClass.module.descriptor.requires | - | array | - |
| data.entityClass.module.descriptor.requires.mods | - | array | - |
| data.entityClass.module.descriptor.requires.name | - | string | - |
| data.entityClass.module.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.module.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.module.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.module.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.module.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.module.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.module.descriptor.exports | - | array | - |
| data.entityClass.module.descriptor.exports.mods | - | array | - |
| data.entityClass.module.descriptor.exports.source | - | string | - |
| data.entityClass.module.descriptor.exports.targets | - | array | - |
| data.entityClass.module.descriptor.opens | - | array | - |
| data.entityClass.module.descriptor.opens.mods | - | array | - |
| data.entityClass.module.descriptor.opens.source | - | string | - |
| data.entityClass.module.descriptor.opens.targets | - | array | - |
| data.entityClass.module.descriptor.uses | - | array | - |
| data.entityClass.module.descriptor.provides | - | array | - |
| data.entityClass.module.descriptor.provides.service | - | string | - |
| data.entityClass.module.descriptor.provides.providers | - | array | - |
| data.entityClass.module.descriptor.packages | - | array | - |
| data.entityClass.module.descriptor.mainClass | - | string | - |
| data.entityClass.module.descriptor.hash | 1 | integer | - |
| data.entityClass.module.enableNativeAccess | true | boolean | - |
| data.entityClass.module.reads | - | array | - |
| data.entityClass.module.openPackages | - | object | - |
| data.entityClass.module.openPackages.KEY | - | array | - |
| data.entityClass.module.exportedPackages | - | object | - |
| data.entityClass.module.exportedPackages.KEY | - | array | - |
| data.entityClass.module.moduleInfoClass | - | object | - |
| data.entityClass.classLoader | - | object | - |
| data.entityClass.classLoader.parent | - | object | - |
| data.entityClass.classLoader.name | - | string | - |
| data.entityClass.classLoader.unnamedModule | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.parents | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.cf | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.version | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.version.version | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.version.pre | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.version.build | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.modifiers | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.open | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.exports | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.exports.source | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.opens | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.opens.source | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.uses | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.provides | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.provides.service | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.packages | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.mainClass | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.scheme | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.fragment | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.authority | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.userInfo | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.host | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.port | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.path | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.query | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.hash | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.decodedAuthority | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.decodedPath | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.decodedQuery | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.decodedFragment | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.cf | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.version | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.version.version | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.version.pre | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.version.build | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.modifiers | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.open | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.exports | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.exports.source | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.opens | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.opens.source | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.uses | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.provides | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.provides.service | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.packages | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.mainClass | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.scheme | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.fragment | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.authority | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.userInfo | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.host | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.port | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.path | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.query | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.hash | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.decodedAuthority | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.decodedPath | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.decodedQuery | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.decodedFragment | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.cf | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.version | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.version.version | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.version.pre | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.version.build | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.modifiers | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.open | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.exports | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.exports.source | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.opens | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.opens.source | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.uses | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.provides | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.provides.service | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.packages | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.mainClass | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.scheme | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.fragment | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.authority | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.userInfo | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.host | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.port | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.path | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.query | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.hash | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.decodedAuthority | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.decodedPath | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.decodedQuery | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.decodedFragment | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.classLoader.unnamedModule.layer.cf.targetPlatform | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.allConfigurations | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.parents | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.nameToModule | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.nameToModule.KEY | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.allLayers | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.modules | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.servicesCatalog | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.servicesCatalog.map | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.servicesCatalog.map.KEY | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.servicesCatalog.map.KEY.module | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.servicesCatalog.map.KEY.providerName | - | string | - |
| data.entityClass.classLoader.unnamedModule.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.loader | - | object | - |
| data.entityClass.classLoader.unnamedModule.descriptor | - | object | - |
| data.entityClass.classLoader.unnamedModule.descriptor.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.version | - | object | - |
| data.entityClass.classLoader.unnamedModule.descriptor.version.version | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.version.sequence | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.version.pre | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.version.build | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.rawVersionString | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.modifiers | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.open | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.descriptor.automatic | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.exports | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.exports.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.exports.source | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.exports.targets | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.opens | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.opens.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.opens.source | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.opens.targets | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.uses | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.provides | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.provides.service | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.provides.providers | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.packages | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.mainClass | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.hash | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.enableNativeAccess | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.reads | - | array | - |
| data.entityClass.classLoader.unnamedModule.openPackages | - | object | - |
| data.entityClass.classLoader.unnamedModule.openPackages.KEY | - | array | - |
| data.entityClass.classLoader.unnamedModule.exportedPackages | - | object | - |
| data.entityClass.classLoader.unnamedModule.exportedPackages.KEY | - | array | - |
| data.entityClass.classLoader.unnamedModule.moduleInfoClass | - | object | - |
| data.entityClass.classLoader.nameAndId | - | string | - |
| data.entityClass.classLoader.parallelLockMap | - | object | - |
| data.entityClass.classLoader.parallelLockMap.KEY | - | object | - |
| data.entityClass.classLoader.package2certs | - | object | - |
| data.entityClass.classLoader.package2certs.KEY | - | object | - |
| data.entityClass.classLoader.classes | - | array | - |
| data.entityClass.classLoader.defaultDomain | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource.location | - | object | The code location. |
| data.entityClass.classLoader.defaultDomain.codesource.location.protocol | - | string | The protocol to use (ftp, http, nntp, ... etc.) . |
| data.entityClass.classLoader.defaultDomain.codesource.location.host | - | string | The host name to connect to. |
| data.entityClass.classLoader.defaultDomain.codesource.location.port | 1 | integer | The protocol port to connect to. |
| data.entityClass.classLoader.defaultDomain.codesource.location.file | - | string | The specified file name on that host. is defined as |
| data.entityClass.classLoader.defaultDomain.codesource.location.query | - | string | The query part of this URL. |
| data.entityClass.classLoader.defaultDomain.codesource.location.authority | - | string | The authority part of this URL. |
| data.entityClass.classLoader.defaultDomain.codesource.location.path | - | string | The path part of this URL. |
| data.entityClass.classLoader.defaultDomain.codesource.location.userInfo | - | string | The userinfo part of this URL. |
| data.entityClass.classLoader.defaultDomain.codesource.location.ref | - | string | # reference. |
| data.entityClass.classLoader.defaultDomain.codesource.location.hostAddress | - | object | The host's IP address, used in equals and hashCode. Computed on demand. An uninitialized or unknown hostAddress is null. |
| data.entityClass.classLoader.defaultDomain.codesource.location.hostAddress.holder | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.hostAddress.holder.originalHostName | - | string | Reserve the original application specified hostname. The original hostname is useful for domain-based endpoint identification (see RFC 2818 and RFC 6125).  If an address was created with a raw IP address, a reverse name lookup may introduce endpoint identification security issue via DNS forging. Oracle JSSE provider is using this original hostname, via jdk.internal.misc.JavaNetAccess, for SSL/TLS endpoint identification. Note: May define a new public method in the future if necessary. |
| data.entityClass.classLoader.defaultDomain.codesource.location.hostAddress.holder.hostName | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.hostAddress.holder.address | 1 | integer | Holds a 32-bit IPv4 address. |
| data.entityClass.classLoader.defaultDomain.codesource.location.hostAddress.holder.family | 1 | integer | Specifies the address family type, for instance, '1' for IPv4 addresses, and '2' for IPv6 addresses. |
| data.entityClass.classLoader.defaultDomain.codesource.location.hostAddress.canonicalHostName | - | string | Used to store the best available hostname. Lazily initialized via a data race; safe because Strings are immutable. |
| data.entityClass.classLoader.defaultDomain.codesource.location.handler | - | object | The URLStreamHandler for this URL. |
| data.entityClass.classLoader.defaultDomain.codesource.location.hashCode | 1 | integer | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.tempState | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.tempState.protocol | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.tempState.host | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.tempState.port | 1 | integer | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.tempState.authority | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.tempState.file | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.tempState.ref | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.tempState.hashCode | 1 | integer | - |
| data.entityClass.classLoader.defaultDomain.codesource.signers | - | array | - |
| data.entityClass.classLoader.defaultDomain.codesource.signers.signerCertPath | - | object | The signer's certificate path. |
| data.entityClass.classLoader.defaultDomain.codesource.signers.signerCertPath.type | - | string | The type of certificates in this chain. |
| data.entityClass.classLoader.defaultDomain.codesource.signers.timestamp | - | object | The signature timestamp. |
| data.entityClass.classLoader.defaultDomain.codesource.signers.timestamp.timestamp | 2026-01-31 13:47:08 | string | The timestamp's date and time |
| data.entityClass.classLoader.defaultDomain.codesource.signers.timestamp.signerCertPath | - | object | The TSA's certificate path. |
| data.entityClass.classLoader.defaultDomain.codesource.signers.timestamp.signerCertPath.type | - | string | The type of certificates in this chain. |
| data.entityClass.classLoader.defaultDomain.codesource.signers.timestamp.myhash | 1 | integer | - |
| data.entityClass.classLoader.defaultDomain.codesource.signers.myhash | 1 | integer | - |
| data.entityClass.classLoader.defaultDomain.codesource.certs | - | array | - |
| data.entityClass.classLoader.defaultDomain.codesource.certs.type | - | string | The certificate type. |
| data.entityClass.classLoader.defaultDomain.codesource.certs.hash | 1 | integer | The hash code for the certificate. |
| data.entityClass.classLoader.defaultDomain.codesource.sp | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.mask | 1 | integer | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.actions | - | string | the actions string. |
| data.entityClass.classLoader.defaultDomain.codesource.sp.hostname | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.cname | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.addresses | - | array | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.addresses.holder | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.addresses.holder.originalHostName | - | string | Reserve the original application specified hostname. The original hostname is useful for domain-based endpoint identification (see RFC 2818 and RFC 6125).  If an address was created with a raw IP address, a reverse name lookup may introduce endpoint identification security issue via DNS forging. Oracle JSSE provider is using this original hostname, via jdk.internal.misc.JavaNetAccess, for SSL/TLS endpoint identification. Note: May define a new public method in the future if necessary. |
| data.entityClass.classLoader.defaultDomain.codesource.sp.addresses.holder.hostName | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.addresses.holder.address | 1 | integer | Holds a 32-bit IPv4 address. |
| data.entityClass.classLoader.defaultDomain.codesource.sp.addresses.holder.family | 1 | integer | Specifies the address family type, for instance, '1' for IPv4 addresses, and '2' for IPv6 addresses. |
| data.entityClass.classLoader.defaultDomain.codesource.sp.addresses.canonicalHostName | - | string | Used to store the best available hostname. Lazily initialized via a data race; safe because Strings are immutable. |
| data.entityClass.classLoader.defaultDomain.codesource.sp.wildcard | true | boolean | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.init_with_ip | true | boolean | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.invalid | true | boolean | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.portrange | - | array | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.defaultDeny | false | boolean | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.untrusted | true | boolean | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.trusted | true | boolean | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.cdomain | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.hdomain | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.name | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.factory | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource.factory.type | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.factory.provider | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource.factory.certFacSpi | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource.locationNoFragString | - | string | A String form of the URL for use as a key in HashMaps/Sets. The String form should be behave in the same manner as the URL when compared for equality in a HashMap/Set, except that no nameservice lookup is done on the hostname (only string comparison), and the fragment is not considered. |
| data.entityClass.classLoader.defaultDomain.classloader | - | object | - |
| data.entityClass.classLoader.defaultDomain.principals | - | array | - |
| data.entityClass.classLoader.defaultDomain.permissions | - | object | - |
| data.entityClass.classLoader.defaultDomain.permissions.readOnly | true | boolean | Whether this permission collection is read-only. <p> If set, the method will throw an exception. |
| data.entityClass.classLoader.defaultDomain.hasAllPerm | false | boolean | - |
| data.entityClass.classLoader.defaultDomain.staticPermissions | true | boolean | - |
| data.entityClass.classLoader.defaultDomain.key | - | object | - |
| data.entityClass.classLoader.packages | - | object | - |
| data.entityClass.classLoader.packages.KEY | - | object | - |
| data.entityClass.classLoader.packages.KEY.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.parents | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.cf | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.version | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.version.version | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.version.pre | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.version.build | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.modifiers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.open | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.exports | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.exports.source | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.opens | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.opens.source | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.uses | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.provides | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.provides.service | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.packages | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.mainClass | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.scheme | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.fragment | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.authority | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.userInfo | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.host | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.port | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.path | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.query | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.hash | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.decodedAuthority | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.decodedPath | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.decodedQuery | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.decodedFragment | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.cf | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.version | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.version.version | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.version.pre | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.version.build | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.modifiers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.open | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.exports | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.exports.source | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.opens | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.opens.source | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.uses | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.provides | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.provides.service | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.packages | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.mainClass | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.scheme | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.fragment | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.authority | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.userInfo | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.host | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.port | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.path | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.query | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.hash | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.decodedAuthority | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.decodedPath | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.decodedQuery | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.decodedFragment | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.cf | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.version | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.version.version | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.version.pre | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.version.build | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.modifiers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.open | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.exports | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.exports.source | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.opens | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.opens.source | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.uses | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.provides | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.provides.service | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.packages | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.mainClass | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.scheme | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.fragment | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.authority | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.userInfo | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.host | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.port | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.path | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.query | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.hash | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.decodedAuthority | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.decodedPath | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.decodedQuery | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.decodedFragment | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.targetPlatform | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.allConfigurations | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.parents | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.nameToModule | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.nameToModule.KEY | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.allLayers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.modules | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.servicesCatalog | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.servicesCatalog.map | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.servicesCatalog.map.KEY | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.servicesCatalog.map.KEY.module | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.servicesCatalog.map.KEY.providerName | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.loader | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.version | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.version.version | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.version.sequence | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.version.pre | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.version.build | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.rawVersionString | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.modifiers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.open | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.automatic | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.exports | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.exports.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.exports.source | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.exports.targets | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.opens | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.opens.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.opens.source | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.opens.targets | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.uses | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.provides | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.provides.service | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.provides.providers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.packages | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.mainClass | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.hash | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.enableNativeAccess | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.reads | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.openPackages | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.openPackages.KEY | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.exportedPackages | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.exportedPackages.KEY | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.moduleInfoClass | - | object | - |
| data.entityClass.classLoader.libraries | - | object | - |
| data.entityClass.classLoader.libraries.libraries | - | object | - |
| data.entityClass.classLoader.libraries.libraries.KEY | - | object | - |
| data.entityClass.classLoader.libraries.libraries.KEY.fromClass | - | object | - |
| data.entityClass.classLoader.libraries.libraries.KEY.name | - | string | - |
| data.entityClass.classLoader.libraries.libraries.KEY.isBuiltin | true | boolean | - |
| data.entityClass.classLoader.libraries.libraries.KEY.isJNI | true | boolean | - |
| data.entityClass.classLoader.libraries.libraries.KEY.handle | 1 | integer | - |
| data.entityClass.classLoader.libraries.libraries.KEY.jniVersion | 1 | integer | - |
| data.entityClass.classLoader.libraries.loader | - | object | - |
| data.entityClass.classLoader.libraries.caller | - | object | - |
| data.entityClass.classLoader.libraries.searchJavaLibraryPath | true | boolean | - |
| data.entityClass.classLoader.libraries.isJNI | true | boolean | - |
| data.entityClass.classLoader.assertionLock | - | object | - |
| data.entityClass.classLoader.defaultAssertionStatus | false | boolean | - |
| data.entityClass.classLoader.packageAssertionStatus | - | object | - |
| data.entityClass.classLoader.packageAssertionStatus.KEY | true | boolean | - |
| data.entityClass.classLoader.classAssertionStatus | - | object | - |
| data.entityClass.classLoader.classAssertionStatus.KEY | true | boolean | - |
| data.entityClass.classLoader.classLoaderValueMap | - | object | - |
| data.entityClass.classLoader.classLoaderValueMap.KEY | - | object | - |
| data.entityClass.classData | - | object | - |
| data.entityClass.packageName | - | string | - |
| data.entityClass.componentType | - | object | - |
| data.entityClass.reflectionData | - | object | - |
| data.entityClass.reflectionData.timestamp | 1 | integer | Timestamp updated by each invocation of the get method.  The VM may use this field when selecting soft references to be cleared, but it is not required to do so. |
| data.entityClass.reflectionData.referent | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields | - | array | - |
| data.entityClass.reflectionData.referent.declaredFields.clazz | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.slot | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredFields.name | - | string | - |
| data.entityClass.reflectionData.referent.declaredFields.type | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredFields.trustedFinal | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredFields.signature | - | string | - |
| data.entityClass.reflectionData.referent.declaredFields.genericInfo | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.genericInfo.genericType | - | object | The generic type info.  Lazily initialized. |
| data.entityClass.reflectionData.referent.declaredFields.genericInfo.factory | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.genericInfo.tree | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.annotations | - | array | - |
| data.entityClass.reflectionData.referent.declaredFields.fieldAccessor | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.overrideFieldAccessor | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.root | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.override | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredFields.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.publicFields | - | array | - |
| data.entityClass.reflectionData.referent.publicFields.clazz | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.slot | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicFields.name | - | string | - |
| data.entityClass.reflectionData.referent.publicFields.type | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicFields.trustedFinal | true | boolean | - |
| data.entityClass.reflectionData.referent.publicFields.signature | - | string | - |
| data.entityClass.reflectionData.referent.publicFields.genericInfo | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.genericInfo.genericType | - | object | The generic type info.  Lazily initialized. |
| data.entityClass.reflectionData.referent.publicFields.genericInfo.factory | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.genericInfo.tree | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.annotations | - | array | - |
| data.entityClass.reflectionData.referent.publicFields.fieldAccessor | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.overrideFieldAccessor | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.root | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.override | true | boolean | - |
| data.entityClass.reflectionData.referent.publicFields.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods | - | array | - |
| data.entityClass.reflectionData.referent.declaredMethods.clazz | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.slot | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredMethods.name | - | string | - |
| data.entityClass.reflectionData.referent.declaredMethods.returnType | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameterTypes | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.exceptionTypes | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredMethods.signature | - | string | - |
| data.entityClass.reflectionData.referent.declaredMethods.genericInfo | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.genericInfo.returnType | - | object | The generic return type info.  Lazily initialized. |
| data.entityClass.reflectionData.referent.declaredMethods.genericInfo.parameterTypes | - | array | - |
| data.entityClass.reflectionData.referent.declaredMethods.genericInfo.exceptionTypes | - | array | - |
| data.entityClass.reflectionData.referent.declaredMethods.genericInfo.typeParameters | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.genericInfo.factory | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.genericInfo.tree | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.annotations | - | array | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameterAnnotations | - | array | - |
| data.entityClass.reflectionData.referent.declaredMethods.annotationDefault | - | array | - |
| data.entityClass.reflectionData.referent.declaredMethods.methodAccessor | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.root | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters | - | array | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.name | - | string | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.executable | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.executable.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.executable.parameters | - | array | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.executable.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.executable.override | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.executable.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.index | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.parameterTypeCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.parameterClassCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.override | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredMethods.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods | - | array | - |
| data.entityClass.reflectionData.referent.publicMethods.clazz | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.slot | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicMethods.name | - | string | - |
| data.entityClass.reflectionData.referent.publicMethods.returnType | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.parameterTypes | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.exceptionTypes | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicMethods.signature | - | string | - |
| data.entityClass.reflectionData.referent.publicMethods.genericInfo | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.genericInfo.returnType | - | object | The generic return type info.  Lazily initialized. |
| data.entityClass.reflectionData.referent.publicMethods.genericInfo.parameterTypes | - | array | - |
| data.entityClass.reflectionData.referent.publicMethods.genericInfo.exceptionTypes | - | array | - |
| data.entityClass.reflectionData.referent.publicMethods.genericInfo.typeParameters | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.genericInfo.factory | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.genericInfo.tree | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.annotations | - | array | - |
| data.entityClass.reflectionData.referent.publicMethods.parameterAnnotations | - | array | - |
| data.entityClass.reflectionData.referent.publicMethods.annotationDefault | - | array | - |
| data.entityClass.reflectionData.referent.publicMethods.methodAccessor | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.root | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters | - | array | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.name | - | string | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.executable | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.executable.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.executable.parameters | - | array | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.executable.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.executable.override | true | boolean | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.executable.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.index | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.parameterTypeCache | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.parameterClassCache | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.override | true | boolean | - |
| data.entityClass.reflectionData.referent.publicMethods.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.clazz | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.slot | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameterTypes | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.exceptionTypes | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredConstructors.signature | - | string | - |
| data.entityClass.reflectionData.referent.declaredConstructors.genericInfo | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.genericInfo.parameterTypes | - | array | The generic parameter types.  Lazily initialized. |
| data.entityClass.reflectionData.referent.declaredConstructors.genericInfo.exceptionTypes | - | array | The generic exception types.  Lazily initialized. |
| data.entityClass.reflectionData.referent.declaredConstructors.genericInfo.typeParameters | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.genericInfo.factory | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.genericInfo.tree | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.annotations | - | array | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameterAnnotations | - | array | - |
| data.entityClass.reflectionData.referent.declaredConstructors.constructorAccessor | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.root | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters | - | array | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.name | - | string | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.executable | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.executable.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.executable.parameters | - | array | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.executable.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.executable.override | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.executable.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.index | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.parameterTypeCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.parameterClassCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.override | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredConstructors.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.clazz | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.slot | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameterTypes | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.exceptionTypes | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicConstructors.signature | - | string | - |
| data.entityClass.reflectionData.referent.publicConstructors.genericInfo | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.genericInfo.parameterTypes | - | array | The generic parameter types.  Lazily initialized. |
| data.entityClass.reflectionData.referent.publicConstructors.genericInfo.exceptionTypes | - | array | The generic exception types.  Lazily initialized. |
| data.entityClass.reflectionData.referent.publicConstructors.genericInfo.typeParameters | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.genericInfo.factory | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.genericInfo.tree | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.annotations | - | array | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameterAnnotations | - | array | - |
| data.entityClass.reflectionData.referent.publicConstructors.constructorAccessor | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.root | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters | - | array | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.name | - | string | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.executable | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.executable.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.executable.parameters | - | array | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.executable.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.executable.override | true | boolean | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.executable.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.index | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.parameterTypeCache | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.parameterClassCache | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.override | true | boolean | - |
| data.entityClass.reflectionData.referent.publicConstructors.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.clazz | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.slot | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.name | - | string | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.type | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.trustedFinal | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.signature | - | string | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.genericInfo | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.genericInfo.genericType | - | object | The generic type info.  Lazily initialized. |
| data.entityClass.reflectionData.referent.declaredPublicFields.genericInfo.factory | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.genericInfo.tree | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.annotations | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.fieldAccessor | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.overrideFieldAccessor | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.root | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.override | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.clazz | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.slot | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.name | - | string | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.returnType | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameterTypes | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.exceptionTypes | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.signature | - | string | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.genericInfo | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.genericInfo.returnType | - | object | The generic return type info.  Lazily initialized. |
| data.entityClass.reflectionData.referent.declaredPublicMethods.genericInfo.parameterTypes | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.genericInfo.exceptionTypes | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.genericInfo.typeParameters | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.genericInfo.factory | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.genericInfo.tree | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.annotations | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameterAnnotations | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.annotationDefault | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.methodAccessor | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.root | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.name | - | string | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.executable | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.executable.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.executable.parameters | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.executable.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.executable.override | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.executable.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.index | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.parameterTypeCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.parameterClassCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.override | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.interfaces | - | object | - |
| data.entityClass.reflectionData.referent.simpleName | - | string | - |
| data.entityClass.reflectionData.referent.canonicalName | - | string | - |
| data.entityClass.reflectionData.referent.redefinedCount | 1 | integer | - |
| data.entityClass.reflectionData.queue | - | object | - |
| data.entityClass.reflectionData.queue.lock | - | object | - |
| data.entityClass.reflectionData.queue.head | - | object | - |
| data.entityClass.reflectionData.queue.head.referent | - | object | - |
| data.entityClass.reflectionData.queue.head.queue | - | object | - |
| data.entityClass.reflectionData.queue.head.next | - | object | - |
| data.entityClass.reflectionData.queue.head.discovered | - | object | - |
| data.entityClass.reflectionData.queue.queueLength | 0 | integer | - |
| data.entityClass.reflectionData.next | - | object | - |
| data.entityClass.reflectionData.next.referent | - | object | - |
| data.entityClass.reflectionData.next.queue | - | object | - |
| data.entityClass.reflectionData.next.queue.lock | - | object | - |
| data.entityClass.reflectionData.next.queue.head | - | object | - |
| data.entityClass.reflectionData.next.queue.queueLength | 0 | integer | - |
| data.entityClass.reflectionData.next.next | - | object | - |
| data.entityClass.reflectionData.next.discovered | - | object | - |
| data.entityClass.reflectionData.discovered | - | object | - |
| data.entityClass.reflectionData.discovered.referent | - | object | - |
| data.entityClass.reflectionData.discovered.queue | - | object | - |
| data.entityClass.reflectionData.discovered.queue.lock | - | object | - |
| data.entityClass.reflectionData.discovered.queue.head | - | object | - |
| data.entityClass.reflectionData.discovered.queue.queueLength | 0 | integer | - |
| data.entityClass.reflectionData.discovered.next | - | object | - |
| data.entityClass.reflectionData.discovered.discovered | - | object | - |
| data.entityClass.classRedefinedCount | 1 | integer | - |
| data.entityClass.genericInfo | - | object | - |
| data.entityClass.genericInfo.superclass | - | object | The generic superclass info.  Lazily initialized. |
| data.entityClass.genericInfo.superInterfaces | - | array | The generic superinterface info.  Lazily initialized. |
| data.entityClass.genericInfo.typeParameters | - | object | - |
| data.entityClass.genericInfo.factory | - | object | - |
| data.entityClass.genericInfo.tree | - | object | - |
| data.entityClass.enumConstants | - | array | - |
| data.entityClass.enumConstantDirectory | - | object | - |
| data.entityClass.enumConstantDirectory.KEY | - | object | - |
| data.entityClass.annotationData | - | object | - |
| data.entityClass.annotationData.annotations | - | object | - |
| data.entityClass.annotationData.declaredAnnotations | - | object | - |
| data.entityClass.annotationData.redefinedCount | 1 | integer | - |
| data.entityClass.annotationType | - | object | - |
| data.entityClass.annotationType.memberTypes | - | object | Member name -> type mapping. Note that primitive types are represented by the class objects for the corresponding wrapper types.  This matches the return value that must be used for a dynamic proxy, allowing for a simple isInstance test. |
| data.entityClass.annotationType.memberTypes.KEY | - | object | - |
| data.entityClass.annotationType.memberDefaults | - | object | Member name -> default value mapping. |
| data.entityClass.annotationType.memberDefaults.KEY | - | object | - |
| data.entityClass.annotationType.members | - | object | Member name -> Method object mapping. This (and its associated accessor) are used only to generate AnnotationTypeMismatchExceptions. |
| data.entityClass.annotationType.members.KEY | - | object | - |
| data.entityClass.annotationType.members.KEY.clazz | - | object | - |
| data.entityClass.annotationType.members.KEY.slot | 1 | integer | - |
| data.entityClass.annotationType.members.KEY.name | - | string | - |
| data.entityClass.annotationType.members.KEY.returnType | - | object | - |
| data.entityClass.annotationType.members.KEY.parameterTypes | - | object | - |
| data.entityClass.annotationType.members.KEY.exceptionTypes | - | object | - |
| data.entityClass.annotationType.members.KEY.modifiers | 1 | integer | - |
| data.entityClass.annotationType.members.KEY.signature | - | string | - |
| data.entityClass.annotationType.members.KEY.genericInfo | - | object | - |
| data.entityClass.annotationType.members.KEY.genericInfo.returnType | - | object | The generic return type info.  Lazily initialized. |
| data.entityClass.annotationType.members.KEY.genericInfo.parameterTypes | - | array | - |
| data.entityClass.annotationType.members.KEY.genericInfo.exceptionTypes | - | array | - |
| data.entityClass.annotationType.members.KEY.genericInfo.typeParameters | - | object | - |
| data.entityClass.annotationType.members.KEY.genericInfo.factory | - | object | - |
| data.entityClass.annotationType.members.KEY.genericInfo.tree | - | object | - |
| data.entityClass.annotationType.members.KEY.annotations | - | array | - |
| data.entityClass.annotationType.members.KEY.parameterAnnotations | - | array | - |
| data.entityClass.annotationType.members.KEY.annotationDefault | - | array | - |
| data.entityClass.annotationType.members.KEY.methodAccessor | - | object | - |
| data.entityClass.annotationType.members.KEY.root | - | object | - |
| data.entityClass.annotationType.members.KEY.hasRealParameterData | true | boolean | - |
| data.entityClass.annotationType.members.KEY.parameters | - | array | - |
| data.entityClass.annotationType.members.KEY.parameters.name | - | string | - |
| data.entityClass.annotationType.members.KEY.parameters.modifiers | 1 | integer | - |
| data.entityClass.annotationType.members.KEY.parameters.executable | - | object | - |
| data.entityClass.annotationType.members.KEY.parameters.executable.hasRealParameterData | true | boolean | - |
| data.entityClass.annotationType.members.KEY.parameters.executable.parameters | - | array | - |
| data.entityClass.annotationType.members.KEY.parameters.executable.declaredAnnotations | - | object | - |
| data.entityClass.annotationType.members.KEY.parameters.executable.override | true | boolean | - |
| data.entityClass.annotationType.members.KEY.parameters.executable.accessCheckCache | - | object | - |
| data.entityClass.annotationType.members.KEY.parameters.index | 1 | integer | - |
| data.entityClass.annotationType.members.KEY.parameters.parameterTypeCache | - | object | - |
| data.entityClass.annotationType.members.KEY.parameters.parameterClassCache | - | object | - |
| data.entityClass.annotationType.members.KEY.parameters.declaredAnnotations | - | object | - |
| data.entityClass.annotationType.members.KEY.declaredAnnotations | - | object | - |
| data.entityClass.annotationType.members.KEY.override | true | boolean | - |
| data.entityClass.annotationType.members.KEY.accessCheckCache | - | object | - |
| data.entityClass.annotationType.retention | SOURCE | string | The retention policy for this annotation type.SOURCE CLASS RUNTIME |
| data.entityClass.annotationType.inherited | true | boolean | Whether this annotation type is inherited. |
| data.entityClass.classValueMap | - | object | - |

* 失败(404)

```javascript
暂无数据
```

* 成功返回(200)

```javascript
{
    "code": 0,
    "msg": "",
    "data": [
        {
            "id": 1,
            "type": "",
            "domain": "",
            "reachable": true,
            "latencyMs": 1,
            "checkTime": "2026-01-31 13:47:07",
            "remark": ""
        }
    ]
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | number | - |
| msg | - | string | - |
| data | - | array | - |
| data.id | 1 | number | - |
| data.type | - | string | 类型： /**
     * 云端
     */
    CLOUD("CLOUD"),
    /**
     * 店铺端
     */
    SHOP("SHOP"),
    /**
     * 外网
     */
    INTERNET("INTERNET"),

    /**
     * 机器设备
     */
    DEVICE("MAC"),

    /**
     * 小票打印机
     */
    PRINTER("PRINTER"),

    /**
     * 播报器
     */
    SPEAKER("SPEAKER"),

    /**
     * 显示屏
     */
    DISPLAY("DISPLAY")

    ; |
| data.domain | - | string | 探测目标（域名或 URL） |
| data.reachable | true | boolean | 连通状态（true 可达 / false 不可达） |
| data.latencyMs | 1 | number | 连通延迟（毫秒） |
| data.checkTime | 2026-01-31 13:47:07 | string | 本次探测时间 |
| data.remark | - | string | 备注/错误信息 |

**Query**

## 云端查询网络状态列表 (状态栏显示) 

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-03-05 15:25:07

> 更新时间: 2026-03-05 15:32:35

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> https://ops.huabing.online/ops/network-status/statusBarList

**请求方式**

> GET

**Content-Type**

> none

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{"code":0,"msg":null,"data":[{"id":"1","type":"SHOP","bizId":null,"bizName":null,"domain":"http://192.168.10.10:7780","reachable":true,"latencyMs":"4","checkTime":"2026-03-05 15:32:30","remark":null},{"id":"4","type":"PRINTER","bizId":"2027242191887044610","bizName":null,"domain":"192.168.10.90","reachable":true,"latencyMs":"108","checkTime":"2026-03-05 15:32:30","remark":null},{"id":"3","type":"INTERNET","bizId":null,"bizName":null,"domain":"www.baidu.com","reachable":true,"latencyMs":"1929","checkTime":"2026-03-05 15:32:30","remark":null},{"id":"2","type":"CLOUD","bizId":null,"bizName":null,"domain":"https://ops.huabing.online","reachable":true,"latencyMs":"67","checkTime":"2026-03-05 15:32:30","remark":null}],"ok":true}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | array | - |
| data.id | 1 | integer | 主键ID |
| data.type | - | string | 类型 |
| data.bizId | - | string | 业务ID |
| data.bizName | - | string | 业务名称 |
| data.domain | - | string | 探测目标 |
| data.reachable | true | boolean | 连通状态 |
| data.latencyMs | 1 | integer | 连通延迟(ms) |
| data.checkTime | 2026-02-02 13:28:28 | string | 探测时间 |
| data.remark | - | string | 备注/错误信息 |

* 失败(404)

```javascript
暂无数据
```

**Query**

# 打印设备

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-02-02 13:29:44

> 更新时间: 2026-02-03 15:22:21

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

## 新增打印机配置

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-02-02 13:29:49

> 更新时间: 2026-03-04 19:36:52

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.111:9999/admin/pos-printer-config/createPrinterConfig

**请求方式**

> POST

**Content-Type**

> json

**请求Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| SITE-ID | 500248 | string | 是 | - |

**请求Body参数**

```javascript
{
    "printerName": "小票打印",
    "printerType": "RECEIPT_PRINTER",
    "ticketTypes": [3,999],
    "connectionMode": "WIFI",
    "autoRetryFlag": 1,
    "ipAddress": "192.168.10.90",
    "port": 9100,
    "bluetoothAddress": "",
    "remark": "",
    "enableFlag": 1
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| printerName | - | string | 否 | 打印机名称 |
| printerType | - | string | 是 | 打印机类型：LABEL_PRINTER-标签打印机、RECEIPT_PRINTER-小票打印机 |
| ticketTypes | - | string | 是 | 打印功能（票据类型）  json 数据格式存储，例如：["1","2","3"]，查询票据类型列表后返回的数据“code” |
| connectionMode | - | string | 是 | 连接方式 : wifi/bluetooth/usb/serial |
| autoRetryFlag | 1 | integer | 否 | 失败自动补打一次 0=否 1=是 |
| ipAddress | - | string | 是 | 连接IP |
| port | 1 | integer | 否 | 连接端口 |
| bluetoothAddress | - | string | 否 | 蓝牙地址 |
| remark | - | string | 否 | 备注 |
| enableFlag | 1 | integer | 否 | 启用标记 1=启用 0=禁用 |

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{"code":0,"msg":null,"data":"2029148400668946433","ok":true}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | integer | - |

* 失败(404)

```javascript
暂无数据
```

**请求Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| SITE-ID | 500248 | string | 是 | - |

**Query**

## 打印设备列表

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-02-02 13:29:49

> 更新时间: 2026-03-04 19:36:54

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.111:9999/admin/pos-printer-config/listPrinterConfigs

**请求方式**

> GET

**Content-Type**

> none

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{"code":0,"msg":null,"data":[{"id":"2029148400668946433","printerName":"小票打印","printerType":"RECEIPT_PRINTER","ticketTypes":[3,999],"connectionMode":"WIFI","autoRetryFlag":1,"ipAddress":"192.168.10.90","port":9100,"printChannel":"NETWORK","bluetoothAddress":null,"printCharset":"GBK","createTime":"2026-03-04 18:54:13","updateTime":null,"createBy":"admin","createId":"1","updateBy":null,"updateId":null,"remark":null,"enableFlag":1,"printerStatus":null,"errorMessage":null,"siteId":"500248","delFlag":0,"syncTime":null,"usbPrinterName":null,"backlogPrintJobs":0}],"ok":true}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | array | - |
| data.id | 1 | integer | - |
| data.printerName | - | string | 打印机名称 |
| data.printerType | - | string | 打印机类型 |
| data.ticketTypes | - | string | 打印功能（票据类型）  json 数据格式存储，例如：["1","2","3"] |
| data.connectionMode | - | string | 连接方式 : wifi/bluetooth/usb/serial |
| data.autoRetryFlag | 1 | integer | 失败自动补打一次 0=否 1=是 |
| data.ipAddress | - | string | 连接IP |
| data.port | 1 | integer | 连接端口 |
| data.bluetoothAddress | - | string | 蓝牙地址 |
| data.createTime | 2026-02-02 13:29:25 | string | 创建时间 |
| data.updateTime | 2026-02-02 13:29:25 | string | 修改时间 |
| data.createBy | - | string | 创建者 |
| data.createId | 1 | integer | 创建者ID |
| data.updateBy | - | string | 修改者 |
| data.updateId | 1 | integer | 修改者ID |
| data.remark | - | string | 备注 |
| data.enableFlag | 1 | integer | 启用标记 1=启用 0=禁用 |
| data.siteId | 1 | integer | 门店ID |
| data.delFlag | 1 | integer | 删除标记,1:已删除,0:正常 |
| data.entityClass | - | object | - |
| data.entityClass.cachedConstructor | - | object | - |
| data.entityClass.cachedConstructor.clazz | - | object | - |
| data.entityClass.cachedConstructor.slot | 1 | integer | - |
| data.entityClass.cachedConstructor.parameterTypes | - | object | - |
| data.entityClass.cachedConstructor.exceptionTypes | - | object | - |
| data.entityClass.cachedConstructor.modifiers | 1 | integer | - |
| data.entityClass.cachedConstructor.signature | - | string | - |
| data.entityClass.cachedConstructor.genericInfo | - | object | - |
| data.entityClass.cachedConstructor.genericInfo.parameterTypes | - | array | The generic parameter types.  Lazily initialized. |
| data.entityClass.cachedConstructor.genericInfo.exceptionTypes | - | array | The generic exception types.  Lazily initialized. |
| data.entityClass.cachedConstructor.genericInfo.typeParameters | - | object | - |
| data.entityClass.cachedConstructor.genericInfo.factory | - | object | - |
| data.entityClass.cachedConstructor.genericInfo.tree | - | object | - |
| data.entityClass.cachedConstructor.annotations | - | array | - |
| data.entityClass.cachedConstructor.parameterAnnotations | - | array | - |
| data.entityClass.cachedConstructor.constructorAccessor | - | object | - |
| data.entityClass.cachedConstructor.root | - | object | - |
| data.entityClass.cachedConstructor.hasRealParameterData | true | boolean | - |
| data.entityClass.cachedConstructor.parameters | - | array | - |
| data.entityClass.cachedConstructor.parameters.name | - | string | - |
| data.entityClass.cachedConstructor.parameters.modifiers | 1 | integer | - |
| data.entityClass.cachedConstructor.parameters.executable | - | object | - |
| data.entityClass.cachedConstructor.parameters.executable.hasRealParameterData | true | boolean | - |
| data.entityClass.cachedConstructor.parameters.executable.parameters | - | array | - |
| data.entityClass.cachedConstructor.parameters.executable.declaredAnnotations | - | object | - |
| data.entityClass.cachedConstructor.parameters.executable.override | true | boolean | - |
| data.entityClass.cachedConstructor.parameters.executable.accessCheckCache | - | object | - |
| data.entityClass.cachedConstructor.parameters.index | 1 | integer | - |
| data.entityClass.cachedConstructor.parameters.parameterTypeCache | - | object | - |
| data.entityClass.cachedConstructor.parameters.parameterClassCache | - | object | - |
| data.entityClass.cachedConstructor.parameters.declaredAnnotations | - | object | - |
| data.entityClass.cachedConstructor.declaredAnnotations | - | object | - |
| data.entityClass.cachedConstructor.override | true | boolean | - |
| data.entityClass.cachedConstructor.accessCheckCache | - | object | - |
| data.entityClass.name | - | string | - |
| data.entityClass.module | - | object | - |
| data.entityClass.module.layer | - | object | - |
| data.entityClass.module.layer.cf | - | object | - |
| data.entityClass.module.layer.cf.parents | - | array | - |
| data.entityClass.module.layer.cf.graph | - | object | - |
| data.entityClass.module.layer.cf.graph.KEY | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.cf | - | object | - |
| data.entityClass.module.layer.cf.graph.KEY.mref | - | object | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor | - | object | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.name | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.version | - | object | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.version.version | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.version.pre | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.version.build | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.modifiers | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.open | true | boolean | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires.name | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.exports | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.exports.source | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.opens | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.opens.source | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.uses | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.provides | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.provides.service | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.packages | - | array | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.mainClass | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location | - | object | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.scheme | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.fragment | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.authority | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.userInfo | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.host | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.port | 1 | integer | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.path | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.query | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.hash | 1 | integer | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.decodedAuthority | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.decodedPath | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.decodedQuery | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.decodedFragment | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.module.layer.cf.graph.KEY.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.module.layer.cf.modules | - | array | - |
| data.entityClass.module.layer.cf.modules.cf | - | object | - |
| data.entityClass.module.layer.cf.modules.mref | - | object | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor | - | object | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.name | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.version | - | object | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.version.version | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.version.pre | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.version.build | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.modifiers | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.open | true | boolean | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires.name | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.exports | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.exports.source | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.opens | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.opens.source | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.uses | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.provides | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.provides.service | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.packages | - | array | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.mainClass | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.module.layer.cf.modules.mref.location | - | object | - |
| data.entityClass.module.layer.cf.modules.mref.location.scheme | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.fragment | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.authority | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.userInfo | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.host | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.port | 1 | integer | - |
| data.entityClass.module.layer.cf.modules.mref.location.path | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.query | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.hash | 1 | integer | - |
| data.entityClass.module.layer.cf.modules.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.decodedAuthority | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.decodedPath | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.decodedQuery | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.decodedFragment | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.module.layer.cf.modules.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.module.layer.cf.nameToModule | - | object | - |
| data.entityClass.module.layer.cf.nameToModule.KEY | - | object | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.cf | - | object | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref | - | object | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor | - | object | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.name | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.version | - | object | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.version.version | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.version.pre | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.version.build | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.modifiers | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.open | true | boolean | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.name | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.exports | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.exports.source | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.opens | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.opens.source | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.uses | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.provides | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.provides.service | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.packages | - | array | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.mainClass | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location | - | object | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.scheme | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.fragment | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.authority | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.userInfo | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.host | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.port | 1 | integer | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.path | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.query | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.hash | 1 | integer | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.decodedAuthority | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.decodedPath | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.decodedQuery | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.decodedFragment | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.module.layer.cf.nameToModule.KEY.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.module.layer.cf.targetPlatform | - | string | - |
| data.entityClass.module.layer.cf.allConfigurations | - | array | - |
| data.entityClass.module.layer.parents | - | array | - |
| data.entityClass.module.layer.nameToModule | - | object | - |
| data.entityClass.module.layer.nameToModule.KEY | - | object | - |
| data.entityClass.module.layer.allLayers | - | array | - |
| data.entityClass.module.layer.modules | - | array | - |
| data.entityClass.module.layer.servicesCatalog | - | object | - |
| data.entityClass.module.layer.servicesCatalog.map | - | object | - |
| data.entityClass.module.layer.servicesCatalog.map.KEY | - | array | - |
| data.entityClass.module.layer.servicesCatalog.map.KEY.module | - | object | - |
| data.entityClass.module.layer.servicesCatalog.map.KEY.providerName | - | string | - |
| data.entityClass.module.name | - | string | - |
| data.entityClass.module.loader | - | object | - |
| data.entityClass.module.loader.parent | - | object | - |
| data.entityClass.module.loader.name | - | string | - |
| data.entityClass.module.loader.unnamedModule | - | object | - |
| data.entityClass.module.loader.nameAndId | - | string | - |
| data.entityClass.module.loader.parallelLockMap | - | object | - |
| data.entityClass.module.loader.parallelLockMap.KEY | - | object | - |
| data.entityClass.module.loader.package2certs | - | object | - |
| data.entityClass.module.loader.package2certs.KEY | - | object | - |
| data.entityClass.module.loader.classes | - | array | - |
| data.entityClass.module.loader.defaultDomain | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource.location | - | object | The code location. |
| data.entityClass.module.loader.defaultDomain.codesource.location.protocol | - | string | The protocol to use (ftp, http, nntp, ... etc.) . |
| data.entityClass.module.loader.defaultDomain.codesource.location.host | - | string | The host name to connect to. |
| data.entityClass.module.loader.defaultDomain.codesource.location.port | 1 | integer | The protocol port to connect to. |
| data.entityClass.module.loader.defaultDomain.codesource.location.file | - | string | The specified file name on that host. is defined as |
| data.entityClass.module.loader.defaultDomain.codesource.location.query | - | string | The query part of this URL. |
| data.entityClass.module.loader.defaultDomain.codesource.location.authority | - | string | The authority part of this URL. |
| data.entityClass.module.loader.defaultDomain.codesource.location.path | - | string | The path part of this URL. |
| data.entityClass.module.loader.defaultDomain.codesource.location.userInfo | - | string | The userinfo part of this URL. |
| data.entityClass.module.loader.defaultDomain.codesource.location.ref | - | string | # reference. |
| data.entityClass.module.loader.defaultDomain.codesource.location.hostAddress | - | object | The host's IP address, used in equals and hashCode. Computed on demand. An uninitialized or unknown hostAddress is null. |
| data.entityClass.module.loader.defaultDomain.codesource.location.hostAddress.holder | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.hostAddress.holder.originalHostName | - | string | Reserve the original application specified hostname. The original hostname is useful for domain-based endpoint identification (see RFC 2818 and RFC 6125).  If an address was created with a raw IP address, a reverse name lookup may introduce endpoint identification security issue via DNS forging. Oracle JSSE provider is using this original hostname, via jdk.internal.misc.JavaNetAccess, for SSL/TLS endpoint identification. Note: May define a new public method in the future if necessary. |
| data.entityClass.module.loader.defaultDomain.codesource.location.hostAddress.holder.hostName | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.hostAddress.holder.address | 1 | integer | Holds a 32-bit IPv4 address. |
| data.entityClass.module.loader.defaultDomain.codesource.location.hostAddress.holder.family | 1 | integer | Specifies the address family type, for instance, '1' for IPv4 addresses, and '2' for IPv6 addresses. |
| data.entityClass.module.loader.defaultDomain.codesource.location.hostAddress.canonicalHostName | - | string | Used to store the best available hostname. Lazily initialized via a data race; safe because Strings are immutable. |
| data.entityClass.module.loader.defaultDomain.codesource.location.handler | - | object | The URLStreamHandler for this URL. |
| data.entityClass.module.loader.defaultDomain.codesource.location.hashCode | 1 | integer | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.tempState | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.tempState.protocol | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.tempState.host | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.tempState.port | 1 | integer | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.tempState.authority | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.tempState.file | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.tempState.ref | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.location.tempState.hashCode | 1 | integer | - |
| data.entityClass.module.loader.defaultDomain.codesource.signers | - | array | - |
| data.entityClass.module.loader.defaultDomain.codesource.signers.signerCertPath | - | object | The signer's certificate path. |
| data.entityClass.module.loader.defaultDomain.codesource.signers.signerCertPath.type | - | string | The type of certificates in this chain. |
| data.entityClass.module.loader.defaultDomain.codesource.signers.timestamp | - | object | The signature timestamp. |
| data.entityClass.module.loader.defaultDomain.codesource.signers.timestamp.timestamp | 2026-02-02 13:29:25 | string | The timestamp's date and time |
| data.entityClass.module.loader.defaultDomain.codesource.signers.timestamp.signerCertPath | - | object | The TSA's certificate path. |
| data.entityClass.module.loader.defaultDomain.codesource.signers.timestamp.signerCertPath.type | - | string | The type of certificates in this chain. |
| data.entityClass.module.loader.defaultDomain.codesource.signers.timestamp.myhash | 1 | integer | - |
| data.entityClass.module.loader.defaultDomain.codesource.signers.myhash | 1 | integer | - |
| data.entityClass.module.loader.defaultDomain.codesource.certs | - | array | - |
| data.entityClass.module.loader.defaultDomain.codesource.certs.type | - | string | The certificate type. |
| data.entityClass.module.loader.defaultDomain.codesource.certs.hash | 1 | integer | The hash code for the certificate. |
| data.entityClass.module.loader.defaultDomain.codesource.sp | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.mask | 1 | integer | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.actions | - | string | the actions string. |
| data.entityClass.module.loader.defaultDomain.codesource.sp.hostname | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.cname | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.addresses | - | array | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.addresses.holder | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.addresses.holder.originalHostName | - | string | Reserve the original application specified hostname. The original hostname is useful for domain-based endpoint identification (see RFC 2818 and RFC 6125).  If an address was created with a raw IP address, a reverse name lookup may introduce endpoint identification security issue via DNS forging. Oracle JSSE provider is using this original hostname, via jdk.internal.misc.JavaNetAccess, for SSL/TLS endpoint identification. Note: May define a new public method in the future if necessary. |
| data.entityClass.module.loader.defaultDomain.codesource.sp.addresses.holder.hostName | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.addresses.holder.address | 1 | integer | Holds a 32-bit IPv4 address. |
| data.entityClass.module.loader.defaultDomain.codesource.sp.addresses.holder.family | 1 | integer | Specifies the address family type, for instance, '1' for IPv4 addresses, and '2' for IPv6 addresses. |
| data.entityClass.module.loader.defaultDomain.codesource.sp.addresses.canonicalHostName | - | string | Used to store the best available hostname. Lazily initialized via a data race; safe because Strings are immutable. |
| data.entityClass.module.loader.defaultDomain.codesource.sp.wildcard | true | boolean | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.init_with_ip | true | boolean | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.invalid | true | boolean | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.portrange | - | array | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.defaultDeny | false | boolean | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.untrusted | true | boolean | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.trusted | true | boolean | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.cdomain | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.hdomain | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.sp.name | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.factory | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource.factory.type | - | string | - |
| data.entityClass.module.loader.defaultDomain.codesource.factory.provider | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource.factory.certFacSpi | - | object | - |
| data.entityClass.module.loader.defaultDomain.codesource.locationNoFragString | - | string | A String form of the URL for use as a key in HashMaps/Sets. The String form should be behave in the same manner as the URL when compared for equality in a HashMap/Set, except that no nameservice lookup is done on the hostname (only string comparison), and the fragment is not considered. |
| data.entityClass.module.loader.defaultDomain.classloader | - | object | - |
| data.entityClass.module.loader.defaultDomain.principals | - | array | - |
| data.entityClass.module.loader.defaultDomain.permissions | - | object | - |
| data.entityClass.module.loader.defaultDomain.permissions.readOnly | true | boolean | Whether this permission collection is read-only. <p> If set, the method will throw an exception. |
| data.entityClass.module.loader.defaultDomain.hasAllPerm | false | boolean | - |
| data.entityClass.module.loader.defaultDomain.staticPermissions | true | boolean | - |
| data.entityClass.module.loader.defaultDomain.key | - | object | - |
| data.entityClass.module.loader.packages | - | object | - |
| data.entityClass.module.loader.packages.KEY | - | object | - |
| data.entityClass.module.loader.packages.KEY.name | - | string | - |
| data.entityClass.module.loader.packages.KEY.module | - | object | - |
| data.entityClass.module.loader.libraries | - | object | - |
| data.entityClass.module.loader.libraries.libraries | - | object | - |
| data.entityClass.module.loader.libraries.libraries.KEY | - | object | - |
| data.entityClass.module.loader.libraries.libraries.KEY.fromClass | - | object | - |
| data.entityClass.module.loader.libraries.libraries.KEY.name | - | string | - |
| data.entityClass.module.loader.libraries.libraries.KEY.isBuiltin | true | boolean | - |
| data.entityClass.module.loader.libraries.libraries.KEY.isJNI | true | boolean | - |
| data.entityClass.module.loader.libraries.libraries.KEY.handle | 1 | integer | - |
| data.entityClass.module.loader.libraries.libraries.KEY.jniVersion | 1 | integer | - |
| data.entityClass.module.loader.libraries.loader | - | object | - |
| data.entityClass.module.loader.libraries.caller | - | object | - |
| data.entityClass.module.loader.libraries.searchJavaLibraryPath | true | boolean | - |
| data.entityClass.module.loader.libraries.isJNI | true | boolean | - |
| data.entityClass.module.loader.assertionLock | - | object | - |
| data.entityClass.module.loader.defaultAssertionStatus | false | boolean | - |
| data.entityClass.module.loader.packageAssertionStatus | - | object | - |
| data.entityClass.module.loader.packageAssertionStatus.KEY | true | boolean | - |
| data.entityClass.module.loader.classAssertionStatus | - | object | - |
| data.entityClass.module.loader.classAssertionStatus.KEY | true | boolean | - |
| data.entityClass.module.loader.classLoaderValueMap | - | object | - |
| data.entityClass.module.loader.classLoaderValueMap.KEY | - | object | - |
| data.entityClass.module.descriptor | - | object | - |
| data.entityClass.module.descriptor.name | - | string | - |
| data.entityClass.module.descriptor.version | - | object | - |
| data.entityClass.module.descriptor.version.version | - | string | - |
| data.entityClass.module.descriptor.version.sequence | - | array | - |
| data.entityClass.module.descriptor.version.pre | - | array | - |
| data.entityClass.module.descriptor.version.build | - | array | - |
| data.entityClass.module.descriptor.rawVersionString | - | string | - |
| data.entityClass.module.descriptor.modifiers | - | array | - |
| data.entityClass.module.descriptor.open | true | boolean | - |
| data.entityClass.module.descriptor.automatic | true | boolean | - |
| data.entityClass.module.descriptor.requires | - | array | - |
| data.entityClass.module.descriptor.requires.mods | - | array | - |
| data.entityClass.module.descriptor.requires.name | - | string | - |
| data.entityClass.module.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.module.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.module.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.module.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.module.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.module.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.module.descriptor.exports | - | array | - |
| data.entityClass.module.descriptor.exports.mods | - | array | - |
| data.entityClass.module.descriptor.exports.source | - | string | - |
| data.entityClass.module.descriptor.exports.targets | - | array | - |
| data.entityClass.module.descriptor.opens | - | array | - |
| data.entityClass.module.descriptor.opens.mods | - | array | - |
| data.entityClass.module.descriptor.opens.source | - | string | - |
| data.entityClass.module.descriptor.opens.targets | - | array | - |
| data.entityClass.module.descriptor.uses | - | array | - |
| data.entityClass.module.descriptor.provides | - | array | - |
| data.entityClass.module.descriptor.provides.service | - | string | - |
| data.entityClass.module.descriptor.provides.providers | - | array | - |
| data.entityClass.module.descriptor.packages | - | array | - |
| data.entityClass.module.descriptor.mainClass | - | string | - |
| data.entityClass.module.descriptor.hash | 1 | integer | - |
| data.entityClass.module.enableNativeAccess | true | boolean | - |
| data.entityClass.module.reads | - | array | - |
| data.entityClass.module.openPackages | - | object | - |
| data.entityClass.module.openPackages.KEY | - | array | - |
| data.entityClass.module.exportedPackages | - | object | - |
| data.entityClass.module.exportedPackages.KEY | - | array | - |
| data.entityClass.module.moduleInfoClass | - | object | - |
| data.entityClass.classLoader | - | object | - |
| data.entityClass.classLoader.parent | - | object | - |
| data.entityClass.classLoader.name | - | string | - |
| data.entityClass.classLoader.unnamedModule | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.parents | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.cf | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.version | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.version.version | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.version.pre | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.version.build | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.modifiers | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.open | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.exports | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.exports.source | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.opens | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.opens.source | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.uses | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.provides | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.provides.service | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.packages | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.mainClass | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.scheme | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.fragment | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.authority | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.userInfo | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.host | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.port | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.path | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.query | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.hash | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.decodedAuthority | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.decodedPath | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.decodedQuery | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.decodedFragment | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.graph.KEY.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.cf | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.version | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.version.version | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.version.pre | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.version.build | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.modifiers | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.open | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.exports | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.exports.source | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.opens | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.opens.source | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.uses | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.provides | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.provides.service | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.packages | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.mainClass | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.scheme | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.fragment | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.authority | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.userInfo | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.host | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.port | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.path | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.query | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.hash | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.decodedAuthority | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.decodedPath | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.decodedQuery | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.decodedFragment | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.modules.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.cf | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.version | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.version.version | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.version.pre | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.version.build | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.modifiers | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.open | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.exports | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.exports.source | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.opens | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.opens.source | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.uses | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.provides | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.provides.service | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.packages | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.mainClass | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.scheme | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.fragment | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.authority | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.userInfo | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.host | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.port | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.path | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.query | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.hash | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.decodedAuthority | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.decodedPath | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.decodedQuery | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.decodedFragment | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.nameToModule.KEY.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.classLoader.unnamedModule.layer.cf.targetPlatform | - | string | - |
| data.entityClass.classLoader.unnamedModule.layer.cf.allConfigurations | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.parents | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.nameToModule | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.nameToModule.KEY | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.allLayers | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.modules | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.servicesCatalog | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.servicesCatalog.map | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.servicesCatalog.map.KEY | - | array | - |
| data.entityClass.classLoader.unnamedModule.layer.servicesCatalog.map.KEY.module | - | object | - |
| data.entityClass.classLoader.unnamedModule.layer.servicesCatalog.map.KEY.providerName | - | string | - |
| data.entityClass.classLoader.unnamedModule.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.loader | - | object | - |
| data.entityClass.classLoader.unnamedModule.descriptor | - | object | - |
| data.entityClass.classLoader.unnamedModule.descriptor.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.version | - | object | - |
| data.entityClass.classLoader.unnamedModule.descriptor.version.version | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.version.sequence | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.version.pre | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.version.build | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.rawVersionString | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.modifiers | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.open | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.descriptor.automatic | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires.name | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.exports | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.exports.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.exports.source | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.exports.targets | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.opens | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.opens.mods | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.opens.source | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.opens.targets | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.uses | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.provides | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.provides.service | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.provides.providers | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.packages | - | array | - |
| data.entityClass.classLoader.unnamedModule.descriptor.mainClass | - | string | - |
| data.entityClass.classLoader.unnamedModule.descriptor.hash | 1 | integer | - |
| data.entityClass.classLoader.unnamedModule.enableNativeAccess | true | boolean | - |
| data.entityClass.classLoader.unnamedModule.reads | - | array | - |
| data.entityClass.classLoader.unnamedModule.openPackages | - | object | - |
| data.entityClass.classLoader.unnamedModule.openPackages.KEY | - | array | - |
| data.entityClass.classLoader.unnamedModule.exportedPackages | - | object | - |
| data.entityClass.classLoader.unnamedModule.exportedPackages.KEY | - | array | - |
| data.entityClass.classLoader.unnamedModule.moduleInfoClass | - | object | - |
| data.entityClass.classLoader.nameAndId | - | string | - |
| data.entityClass.classLoader.parallelLockMap | - | object | - |
| data.entityClass.classLoader.parallelLockMap.KEY | - | object | - |
| data.entityClass.classLoader.package2certs | - | object | - |
| data.entityClass.classLoader.package2certs.KEY | - | object | - |
| data.entityClass.classLoader.classes | - | array | - |
| data.entityClass.classLoader.defaultDomain | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource.location | - | object | The code location. |
| data.entityClass.classLoader.defaultDomain.codesource.location.protocol | - | string | The protocol to use (ftp, http, nntp, ... etc.) . |
| data.entityClass.classLoader.defaultDomain.codesource.location.host | - | string | The host name to connect to. |
| data.entityClass.classLoader.defaultDomain.codesource.location.port | 1 | integer | The protocol port to connect to. |
| data.entityClass.classLoader.defaultDomain.codesource.location.file | - | string | The specified file name on that host. is defined as |
| data.entityClass.classLoader.defaultDomain.codesource.location.query | - | string | The query part of this URL. |
| data.entityClass.classLoader.defaultDomain.codesource.location.authority | - | string | The authority part of this URL. |
| data.entityClass.classLoader.defaultDomain.codesource.location.path | - | string | The path part of this URL. |
| data.entityClass.classLoader.defaultDomain.codesource.location.userInfo | - | string | The userinfo part of this URL. |
| data.entityClass.classLoader.defaultDomain.codesource.location.ref | - | string | # reference. |
| data.entityClass.classLoader.defaultDomain.codesource.location.hostAddress | - | object | The host's IP address, used in equals and hashCode. Computed on demand. An uninitialized or unknown hostAddress is null. |
| data.entityClass.classLoader.defaultDomain.codesource.location.hostAddress.holder | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.hostAddress.holder.originalHostName | - | string | Reserve the original application specified hostname. The original hostname is useful for domain-based endpoint identification (see RFC 2818 and RFC 6125).  If an address was created with a raw IP address, a reverse name lookup may introduce endpoint identification security issue via DNS forging. Oracle JSSE provider is using this original hostname, via jdk.internal.misc.JavaNetAccess, for SSL/TLS endpoint identification. Note: May define a new public method in the future if necessary. |
| data.entityClass.classLoader.defaultDomain.codesource.location.hostAddress.holder.hostName | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.hostAddress.holder.address | 1 | integer | Holds a 32-bit IPv4 address. |
| data.entityClass.classLoader.defaultDomain.codesource.location.hostAddress.holder.family | 1 | integer | Specifies the address family type, for instance, '1' for IPv4 addresses, and '2' for IPv6 addresses. |
| data.entityClass.classLoader.defaultDomain.codesource.location.hostAddress.canonicalHostName | - | string | Used to store the best available hostname. Lazily initialized via a data race; safe because Strings are immutable. |
| data.entityClass.classLoader.defaultDomain.codesource.location.handler | - | object | The URLStreamHandler for this URL. |
| data.entityClass.classLoader.defaultDomain.codesource.location.hashCode | 1 | integer | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.tempState | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.tempState.protocol | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.tempState.host | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.tempState.port | 1 | integer | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.tempState.authority | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.tempState.file | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.tempState.ref | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.location.tempState.hashCode | 1 | integer | - |
| data.entityClass.classLoader.defaultDomain.codesource.signers | - | array | - |
| data.entityClass.classLoader.defaultDomain.codesource.signers.signerCertPath | - | object | The signer's certificate path. |
| data.entityClass.classLoader.defaultDomain.codesource.signers.signerCertPath.type | - | string | The type of certificates in this chain. |
| data.entityClass.classLoader.defaultDomain.codesource.signers.timestamp | - | object | The signature timestamp. |
| data.entityClass.classLoader.defaultDomain.codesource.signers.timestamp.timestamp | 2026-02-02 13:29:25 | string | The timestamp's date and time |
| data.entityClass.classLoader.defaultDomain.codesource.signers.timestamp.signerCertPath | - | object | The TSA's certificate path. |
| data.entityClass.classLoader.defaultDomain.codesource.signers.timestamp.signerCertPath.type | - | string | The type of certificates in this chain. |
| data.entityClass.classLoader.defaultDomain.codesource.signers.timestamp.myhash | 1 | integer | - |
| data.entityClass.classLoader.defaultDomain.codesource.signers.myhash | 1 | integer | - |
| data.entityClass.classLoader.defaultDomain.codesource.certs | - | array | - |
| data.entityClass.classLoader.defaultDomain.codesource.certs.type | - | string | The certificate type. |
| data.entityClass.classLoader.defaultDomain.codesource.certs.hash | 1 | integer | The hash code for the certificate. |
| data.entityClass.classLoader.defaultDomain.codesource.sp | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.mask | 1 | integer | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.actions | - | string | the actions string. |
| data.entityClass.classLoader.defaultDomain.codesource.sp.hostname | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.cname | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.addresses | - | array | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.addresses.holder | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.addresses.holder.originalHostName | - | string | Reserve the original application specified hostname. The original hostname is useful for domain-based endpoint identification (see RFC 2818 and RFC 6125).  If an address was created with a raw IP address, a reverse name lookup may introduce endpoint identification security issue via DNS forging. Oracle JSSE provider is using this original hostname, via jdk.internal.misc.JavaNetAccess, for SSL/TLS endpoint identification. Note: May define a new public method in the future if necessary. |
| data.entityClass.classLoader.defaultDomain.codesource.sp.addresses.holder.hostName | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.addresses.holder.address | 1 | integer | Holds a 32-bit IPv4 address. |
| data.entityClass.classLoader.defaultDomain.codesource.sp.addresses.holder.family | 1 | integer | Specifies the address family type, for instance, '1' for IPv4 addresses, and '2' for IPv6 addresses. |
| data.entityClass.classLoader.defaultDomain.codesource.sp.addresses.canonicalHostName | - | string | Used to store the best available hostname. Lazily initialized via a data race; safe because Strings are immutable. |
| data.entityClass.classLoader.defaultDomain.codesource.sp.wildcard | true | boolean | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.init_with_ip | true | boolean | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.invalid | true | boolean | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.portrange | - | array | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.defaultDeny | false | boolean | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.untrusted | true | boolean | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.trusted | true | boolean | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.cdomain | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.hdomain | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.sp.name | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.factory | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource.factory.type | - | string | - |
| data.entityClass.classLoader.defaultDomain.codesource.factory.provider | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource.factory.certFacSpi | - | object | - |
| data.entityClass.classLoader.defaultDomain.codesource.locationNoFragString | - | string | A String form of the URL for use as a key in HashMaps/Sets. The String form should be behave in the same manner as the URL when compared for equality in a HashMap/Set, except that no nameservice lookup is done on the hostname (only string comparison), and the fragment is not considered. |
| data.entityClass.classLoader.defaultDomain.classloader | - | object | - |
| data.entityClass.classLoader.defaultDomain.principals | - | array | - |
| data.entityClass.classLoader.defaultDomain.permissions | - | object | - |
| data.entityClass.classLoader.defaultDomain.permissions.readOnly | true | boolean | Whether this permission collection is read-only. <p> If set, the method will throw an exception. |
| data.entityClass.classLoader.defaultDomain.hasAllPerm | false | boolean | - |
| data.entityClass.classLoader.defaultDomain.staticPermissions | true | boolean | - |
| data.entityClass.classLoader.defaultDomain.key | - | object | - |
| data.entityClass.classLoader.packages | - | object | - |
| data.entityClass.classLoader.packages.KEY | - | object | - |
| data.entityClass.classLoader.packages.KEY.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.parents | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.cf | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.version | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.version.version | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.version.pre | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.version.build | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.modifiers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.open | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.exports | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.exports.source | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.opens | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.opens.source | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.uses | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.provides | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.provides.service | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.packages | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.mainClass | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.scheme | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.fragment | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.authority | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.userInfo | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.host | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.port | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.path | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.query | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.hash | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.decodedAuthority | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.decodedPath | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.decodedQuery | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.decodedFragment | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.graph.KEY.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.cf | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.version | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.version.version | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.version.pre | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.version.build | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.modifiers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.open | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.exports | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.exports.source | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.opens | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.opens.source | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.uses | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.provides | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.provides.service | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.packages | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.mainClass | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.scheme | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.fragment | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.authority | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.userInfo | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.host | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.port | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.path | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.query | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.hash | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.decodedAuthority | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.decodedPath | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.decodedQuery | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.decodedFragment | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.modules.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.cf | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.version | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.version.version | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.version.sequence | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.version.pre | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.version.build | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.rawVersionString | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.modifiers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.open | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.automatic | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.exports | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.exports.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.exports.source | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.exports.targets | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.opens | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.opens.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.opens.source | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.opens.targets | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.uses | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.provides | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.provides.service | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.provides.providers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.packages | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.mainClass | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.descriptor.hash | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.scheme | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.fragment | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.authority | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.userInfo | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.host | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.port | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.path | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.query | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.schemeSpecificPart | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.hash | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.decodedUserInfo | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.decodedAuthority | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.decodedPath | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.decodedQuery | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.decodedFragment | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.decodedSchemeSpecificPart | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.nameToModule.KEY.mref.location.string | - | string | The string form of this URI. |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.targetPlatform | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.layer.cf.allConfigurations | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.parents | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.nameToModule | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.nameToModule.KEY | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.allLayers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.modules | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.servicesCatalog | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.servicesCatalog.map | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.servicesCatalog.map.KEY | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.layer.servicesCatalog.map.KEY.module | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.layer.servicesCatalog.map.KEY.providerName | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.loader | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.version | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.version.version | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.version.sequence | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.version.pre | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.version.build | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.rawVersionString | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.modifiers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.open | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.automatic | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires.name | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires.compiledVersion | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires.compiledVersion.version | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires.compiledVersion.sequence | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires.compiledVersion.pre | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires.compiledVersion.build | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.requires.rawCompiledVersion | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.exports | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.exports.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.exports.source | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.exports.targets | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.opens | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.opens.mods | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.opens.source | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.opens.targets | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.uses | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.provides | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.provides.service | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.provides.providers | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.packages | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.mainClass | - | string | - |
| data.entityClass.classLoader.packages.KEY.module.descriptor.hash | 1 | integer | - |
| data.entityClass.classLoader.packages.KEY.module.enableNativeAccess | true | boolean | - |
| data.entityClass.classLoader.packages.KEY.module.reads | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.openPackages | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.openPackages.KEY | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.exportedPackages | - | object | - |
| data.entityClass.classLoader.packages.KEY.module.exportedPackages.KEY | - | array | - |
| data.entityClass.classLoader.packages.KEY.module.moduleInfoClass | - | object | - |
| data.entityClass.classLoader.libraries | - | object | - |
| data.entityClass.classLoader.libraries.libraries | - | object | - |
| data.entityClass.classLoader.libraries.libraries.KEY | - | object | - |
| data.entityClass.classLoader.libraries.libraries.KEY.fromClass | - | object | - |
| data.entityClass.classLoader.libraries.libraries.KEY.name | - | string | - |
| data.entityClass.classLoader.libraries.libraries.KEY.isBuiltin | true | boolean | - |
| data.entityClass.classLoader.libraries.libraries.KEY.isJNI | true | boolean | - |
| data.entityClass.classLoader.libraries.libraries.KEY.handle | 1 | integer | - |
| data.entityClass.classLoader.libraries.libraries.KEY.jniVersion | 1 | integer | - |
| data.entityClass.classLoader.libraries.loader | - | object | - |
| data.entityClass.classLoader.libraries.caller | - | object | - |
| data.entityClass.classLoader.libraries.searchJavaLibraryPath | true | boolean | - |
| data.entityClass.classLoader.libraries.isJNI | true | boolean | - |
| data.entityClass.classLoader.assertionLock | - | object | - |
| data.entityClass.classLoader.defaultAssertionStatus | false | boolean | - |
| data.entityClass.classLoader.packageAssertionStatus | - | object | - |
| data.entityClass.classLoader.packageAssertionStatus.KEY | true | boolean | - |
| data.entityClass.classLoader.classAssertionStatus | - | object | - |
| data.entityClass.classLoader.classAssertionStatus.KEY | true | boolean | - |
| data.entityClass.classLoader.classLoaderValueMap | - | object | - |
| data.entityClass.classLoader.classLoaderValueMap.KEY | - | object | - |
| data.entityClass.classData | - | object | - |
| data.entityClass.packageName | - | string | - |
| data.entityClass.componentType | - | object | - |
| data.entityClass.reflectionData | - | object | - |
| data.entityClass.reflectionData.timestamp | 1 | integer | Timestamp updated by each invocation of the get method.  The VM may use this field when selecting soft references to be cleared, but it is not required to do so. |
| data.entityClass.reflectionData.referent | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields | - | array | - |
| data.entityClass.reflectionData.referent.declaredFields.clazz | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.slot | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredFields.name | - | string | - |
| data.entityClass.reflectionData.referent.declaredFields.type | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredFields.trustedFinal | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredFields.signature | - | string | - |
| data.entityClass.reflectionData.referent.declaredFields.genericInfo | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.genericInfo.genericType | - | object | The generic type info.  Lazily initialized. |
| data.entityClass.reflectionData.referent.declaredFields.genericInfo.factory | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.genericInfo.tree | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.annotations | - | array | - |
| data.entityClass.reflectionData.referent.declaredFields.fieldAccessor | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.overrideFieldAccessor | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.root | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredFields.override | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredFields.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.publicFields | - | array | - |
| data.entityClass.reflectionData.referent.publicFields.clazz | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.slot | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicFields.name | - | string | - |
| data.entityClass.reflectionData.referent.publicFields.type | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicFields.trustedFinal | true | boolean | - |
| data.entityClass.reflectionData.referent.publicFields.signature | - | string | - |
| data.entityClass.reflectionData.referent.publicFields.genericInfo | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.genericInfo.genericType | - | object | The generic type info.  Lazily initialized. |
| data.entityClass.reflectionData.referent.publicFields.genericInfo.factory | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.genericInfo.tree | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.annotations | - | array | - |
| data.entityClass.reflectionData.referent.publicFields.fieldAccessor | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.overrideFieldAccessor | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.root | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.publicFields.override | true | boolean | - |
| data.entityClass.reflectionData.referent.publicFields.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods | - | array | - |
| data.entityClass.reflectionData.referent.declaredMethods.clazz | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.slot | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredMethods.name | - | string | - |
| data.entityClass.reflectionData.referent.declaredMethods.returnType | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameterTypes | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.exceptionTypes | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredMethods.signature | - | string | - |
| data.entityClass.reflectionData.referent.declaredMethods.genericInfo | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.genericInfo.returnType | - | object | The generic return type info.  Lazily initialized. |
| data.entityClass.reflectionData.referent.declaredMethods.genericInfo.parameterTypes | - | array | - |
| data.entityClass.reflectionData.referent.declaredMethods.genericInfo.exceptionTypes | - | array | - |
| data.entityClass.reflectionData.referent.declaredMethods.genericInfo.typeParameters | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.genericInfo.factory | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.genericInfo.tree | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.annotations | - | array | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameterAnnotations | - | array | - |
| data.entityClass.reflectionData.referent.declaredMethods.annotationDefault | - | array | - |
| data.entityClass.reflectionData.referent.declaredMethods.methodAccessor | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.root | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters | - | array | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.name | - | string | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.executable | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.executable.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.executable.parameters | - | array | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.executable.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.executable.override | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.executable.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.index | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.parameterTypeCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.parameterClassCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.parameters.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredMethods.override | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredMethods.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods | - | array | - |
| data.entityClass.reflectionData.referent.publicMethods.clazz | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.slot | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicMethods.name | - | string | - |
| data.entityClass.reflectionData.referent.publicMethods.returnType | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.parameterTypes | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.exceptionTypes | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicMethods.signature | - | string | - |
| data.entityClass.reflectionData.referent.publicMethods.genericInfo | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.genericInfo.returnType | - | object | The generic return type info.  Lazily initialized. |
| data.entityClass.reflectionData.referent.publicMethods.genericInfo.parameterTypes | - | array | - |
| data.entityClass.reflectionData.referent.publicMethods.genericInfo.exceptionTypes | - | array | - |
| data.entityClass.reflectionData.referent.publicMethods.genericInfo.typeParameters | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.genericInfo.factory | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.genericInfo.tree | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.annotations | - | array | - |
| data.entityClass.reflectionData.referent.publicMethods.parameterAnnotations | - | array | - |
| data.entityClass.reflectionData.referent.publicMethods.annotationDefault | - | array | - |
| data.entityClass.reflectionData.referent.publicMethods.methodAccessor | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.root | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters | - | array | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.name | - | string | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.executable | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.executable.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.executable.parameters | - | array | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.executable.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.executable.override | true | boolean | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.executable.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.index | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.parameterTypeCache | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.parameterClassCache | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.parameters.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.publicMethods.override | true | boolean | - |
| data.entityClass.reflectionData.referent.publicMethods.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.clazz | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.slot | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameterTypes | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.exceptionTypes | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredConstructors.signature | - | string | - |
| data.entityClass.reflectionData.referent.declaredConstructors.genericInfo | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.genericInfo.parameterTypes | - | array | The generic parameter types.  Lazily initialized. |
| data.entityClass.reflectionData.referent.declaredConstructors.genericInfo.exceptionTypes | - | array | The generic exception types.  Lazily initialized. |
| data.entityClass.reflectionData.referent.declaredConstructors.genericInfo.typeParameters | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.genericInfo.factory | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.genericInfo.tree | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.annotations | - | array | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameterAnnotations | - | array | - |
| data.entityClass.reflectionData.referent.declaredConstructors.constructorAccessor | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.root | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters | - | array | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.name | - | string | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.executable | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.executable.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.executable.parameters | - | array | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.executable.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.executable.override | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.executable.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.index | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.parameterTypeCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.parameterClassCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.parameters.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredConstructors.override | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredConstructors.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.clazz | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.slot | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameterTypes | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.exceptionTypes | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicConstructors.signature | - | string | - |
| data.entityClass.reflectionData.referent.publicConstructors.genericInfo | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.genericInfo.parameterTypes | - | array | The generic parameter types.  Lazily initialized. |
| data.entityClass.reflectionData.referent.publicConstructors.genericInfo.exceptionTypes | - | array | The generic exception types.  Lazily initialized. |
| data.entityClass.reflectionData.referent.publicConstructors.genericInfo.typeParameters | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.genericInfo.factory | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.genericInfo.tree | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.annotations | - | array | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameterAnnotations | - | array | - |
| data.entityClass.reflectionData.referent.publicConstructors.constructorAccessor | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.root | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters | - | array | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.name | - | string | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.executable | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.executable.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.executable.parameters | - | array | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.executable.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.executable.override | true | boolean | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.executable.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.index | 1 | integer | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.parameterTypeCache | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.parameterClassCache | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.parameters.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.publicConstructors.override | true | boolean | - |
| data.entityClass.reflectionData.referent.publicConstructors.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.clazz | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.slot | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.name | - | string | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.type | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.trustedFinal | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.signature | - | string | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.genericInfo | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.genericInfo.genericType | - | object | The generic type info.  Lazily initialized. |
| data.entityClass.reflectionData.referent.declaredPublicFields.genericInfo.factory | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.genericInfo.tree | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.annotations | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.fieldAccessor | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.overrideFieldAccessor | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.root | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.override | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredPublicFields.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.clazz | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.slot | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.name | - | string | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.returnType | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameterTypes | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.exceptionTypes | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.signature | - | string | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.genericInfo | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.genericInfo.returnType | - | object | The generic return type info.  Lazily initialized. |
| data.entityClass.reflectionData.referent.declaredPublicMethods.genericInfo.parameterTypes | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.genericInfo.exceptionTypes | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.genericInfo.typeParameters | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.genericInfo.factory | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.genericInfo.tree | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.annotations | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameterAnnotations | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.annotationDefault | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.methodAccessor | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.root | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.name | - | string | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.modifiers | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.executable | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.executable.hasRealParameterData | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.executable.parameters | - | array | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.executable.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.executable.override | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.executable.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.index | 1 | integer | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.parameterTypeCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.parameterClassCache | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.parameters.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.declaredAnnotations | - | object | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.override | true | boolean | - |
| data.entityClass.reflectionData.referent.declaredPublicMethods.accessCheckCache | - | object | - |
| data.entityClass.reflectionData.referent.interfaces | - | object | - |
| data.entityClass.reflectionData.referent.simpleName | - | string | - |
| data.entityClass.reflectionData.referent.canonicalName | - | string | - |
| data.entityClass.reflectionData.referent.redefinedCount | 1 | integer | - |
| data.entityClass.reflectionData.queue | - | object | - |
| data.entityClass.reflectionData.queue.lock | - | object | - |
| data.entityClass.reflectionData.queue.head | - | object | - |
| data.entityClass.reflectionData.queue.head.referent | - | object | - |
| data.entityClass.reflectionData.queue.head.queue | - | object | - |
| data.entityClass.reflectionData.queue.head.next | - | object | - |
| data.entityClass.reflectionData.queue.head.discovered | - | object | - |
| data.entityClass.reflectionData.queue.queueLength | 0 | integer | - |
| data.entityClass.reflectionData.next | - | object | - |
| data.entityClass.reflectionData.next.referent | - | object | - |
| data.entityClass.reflectionData.next.queue | - | object | - |
| data.entityClass.reflectionData.next.queue.lock | - | object | - |
| data.entityClass.reflectionData.next.queue.head | - | object | - |
| data.entityClass.reflectionData.next.queue.queueLength | 0 | integer | - |
| data.entityClass.reflectionData.next.next | - | object | - |
| data.entityClass.reflectionData.next.discovered | - | object | - |
| data.entityClass.reflectionData.discovered | - | object | - |
| data.entityClass.reflectionData.discovered.referent | - | object | - |
| data.entityClass.reflectionData.discovered.queue | - | object | - |
| data.entityClass.reflectionData.discovered.queue.lock | - | object | - |
| data.entityClass.reflectionData.discovered.queue.head | - | object | - |
| data.entityClass.reflectionData.discovered.queue.queueLength | 0 | integer | - |
| data.entityClass.reflectionData.discovered.next | - | object | - |
| data.entityClass.reflectionData.discovered.discovered | - | object | - |
| data.entityClass.classRedefinedCount | 1 | integer | - |
| data.entityClass.genericInfo | - | object | - |
| data.entityClass.genericInfo.superclass | - | object | The generic superclass info.  Lazily initialized. |
| data.entityClass.genericInfo.superInterfaces | - | array | The generic superinterface info.  Lazily initialized. |
| data.entityClass.genericInfo.typeParameters | - | object | - |
| data.entityClass.genericInfo.factory | - | object | - |
| data.entityClass.genericInfo.tree | - | object | - |
| data.entityClass.enumConstants | - | array | - |
| data.entityClass.enumConstantDirectory | - | object | - |
| data.entityClass.enumConstantDirectory.KEY | - | object | - |
| data.entityClass.annotationData | - | object | - |
| data.entityClass.annotationData.annotations | - | object | - |
| data.entityClass.annotationData.declaredAnnotations | - | object | - |
| data.entityClass.annotationData.redefinedCount | 1 | integer | - |
| data.entityClass.annotationType | - | object | - |
| data.entityClass.annotationType.memberTypes | - | object | Member name -> type mapping. Note that primitive types are represented by the class objects for the corresponding wrapper types.  This matches the return value that must be used for a dynamic proxy, allowing for a simple isInstance test. |
| data.entityClass.annotationType.memberTypes.KEY | - | object | - |
| data.entityClass.annotationType.memberDefaults | - | object | Member name -> default value mapping. |
| data.entityClass.annotationType.memberDefaults.KEY | - | object | - |
| data.entityClass.annotationType.members | - | object | Member name -> Method object mapping. This (and its associated accessor) are used only to generate AnnotationTypeMismatchExceptions. |
| data.entityClass.annotationType.members.KEY | - | object | - |
| data.entityClass.annotationType.members.KEY.clazz | - | object | - |
| data.entityClass.annotationType.members.KEY.slot | 1 | integer | - |
| data.entityClass.annotationType.members.KEY.name | - | string | - |
| data.entityClass.annotationType.members.KEY.returnType | - | object | - |
| data.entityClass.annotationType.members.KEY.parameterTypes | - | object | - |
| data.entityClass.annotationType.members.KEY.exceptionTypes | - | object | - |
| data.entityClass.annotationType.members.KEY.modifiers | 1 | integer | - |
| data.entityClass.annotationType.members.KEY.signature | - | string | - |
| data.entityClass.annotationType.members.KEY.genericInfo | - | object | - |
| data.entityClass.annotationType.members.KEY.genericInfo.returnType | - | object | The generic return type info.  Lazily initialized. |
| data.entityClass.annotationType.members.KEY.genericInfo.parameterTypes | - | array | - |
| data.entityClass.annotationType.members.KEY.genericInfo.exceptionTypes | - | array | - |
| data.entityClass.annotationType.members.KEY.genericInfo.typeParameters | - | object | - |
| data.entityClass.annotationType.members.KEY.genericInfo.factory | - | object | - |
| data.entityClass.annotationType.members.KEY.genericInfo.tree | - | object | - |
| data.entityClass.annotationType.members.KEY.annotations | - | array | - |
| data.entityClass.annotationType.members.KEY.parameterAnnotations | - | array | - |
| data.entityClass.annotationType.members.KEY.annotationDefault | - | array | - |
| data.entityClass.annotationType.members.KEY.methodAccessor | - | object | - |
| data.entityClass.annotationType.members.KEY.root | - | object | - |
| data.entityClass.annotationType.members.KEY.hasRealParameterData | true | boolean | - |
| data.entityClass.annotationType.members.KEY.parameters | - | array | - |
| data.entityClass.annotationType.members.KEY.parameters.name | - | string | - |
| data.entityClass.annotationType.members.KEY.parameters.modifiers | 1 | integer | - |
| data.entityClass.annotationType.members.KEY.parameters.executable | - | object | - |
| data.entityClass.annotationType.members.KEY.parameters.executable.hasRealParameterData | true | boolean | - |
| data.entityClass.annotationType.members.KEY.parameters.executable.parameters | - | array | - |
| data.entityClass.annotationType.members.KEY.parameters.executable.declaredAnnotations | - | object | - |
| data.entityClass.annotationType.members.KEY.parameters.executable.override | true | boolean | - |
| data.entityClass.annotationType.members.KEY.parameters.executable.accessCheckCache | - | object | - |
| data.entityClass.annotationType.members.KEY.parameters.index | 1 | integer | - |
| data.entityClass.annotationType.members.KEY.parameters.parameterTypeCache | - | object | - |
| data.entityClass.annotationType.members.KEY.parameters.parameterClassCache | - | object | - |
| data.entityClass.annotationType.members.KEY.parameters.declaredAnnotations | - | object | - |
| data.entityClass.annotationType.members.KEY.declaredAnnotations | - | object | - |
| data.entityClass.annotationType.members.KEY.override | true | boolean | - |
| data.entityClass.annotationType.members.KEY.accessCheckCache | - | object | - |
| data.entityClass.annotationType.retention | SOURCE | string | The retention policy for this annotation type.SOURCE CLASS RUNTIME |
| data.entityClass.annotationType.inherited | true | boolean | Whether this annotation type is inherited. |
| data.entityClass.classValueMap | - | object | - |

* 失败(404)

```javascript
暂无数据
```

* 成功返回(200)

```javascript
{
    "code": 0,
    "msg": "",
    "data": [
        {
            "id": 1,
            "printerName": "",
            "printerType": "",
            "ticketTypes": "",
            "connectionMode": "",
            "autoRetryFlag": 1,
            "ipAddress": "",
            "port": 1,
            "bluetoothAddress": "",
            "createTime": "2026-02-02 13:29:25",
            "updateTime": "2026-02-02 13:29:25",
            "createBy": "",
            "createId": 1,
            "updateBy": "",
            "updateId": 1,
            "remark": "",
            "enableFlag": 1,
            "siteId": 1,
            "delFlag": 1
        }
    ]
}
```

**Query**

## 打印设备详情

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-02-02 13:29:49

> 更新时间: 2026-02-27 13:40:35

**[object Object]**

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.10:9999/admin/pos-printer-config/getPrinterConfig?printerId=2027242191887044610

**请求方式**

> GET

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| printerId | 2027242191887044610 | integer | 是 | - |

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{"code":0,"msg":null,"data":{"id":"2027242191887044610","printerName":"小票打印","printerType":"RECEIPT_PRINTER","ticketTypes":[3,999],"connectionMode":"WIFI","autoRetryFlag":1,"ipAddress":"192.168.10.90","port":9100,"printChannel":"NETWORK","bluetoothAddress":null,"printCharset":"GBK","createTime":"2026-02-27 12:39:37","updateTime":null,"createBy":"admin","createId":"1","updateBy":null,"updateId":null,"remark":null,"enableFlag":1,"printerStatus":1,"errorMessage":null,"siteId":"500248","delFlag":null,"syncTime":"2026-02-27 13:30:05"},"ok":true}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | - | string | - |
| data | - | object | - |
| data.id | 2026942875372888065 | integer | - |
| data.printerName | 小票打印 | string | 打印机名称 |
| data.printerType | RECEIPT_PRINTER | string | 打印机类型 |
| data.ticketTypes | - | string | 打印功能（票据类型）  json 数据格式存储，例如：["1","2","3"] |
| data.connectionMode | WIFI | string | 连接方式 : wifi/bluetooth/usb/serial |
| data.autoRetryFlag | 1 | integer | 失败自动补打一次 0=否 1=是 |
| data.ipAddress | 192.168.10.99 | string | 连接IP |
| data.port | 9100 | integer | 连接端口 |
| data.printChannel | NETWORK | string | - |
| data.bluetoothAddress | - | string | 蓝牙地址 |
| data.printCharset | GBK | string | - |
| data.createTime | 2026-02-26 16:50:14 | string | 创建时间 |
| data.updateTime | - | string | 修改时间 |
| data.createBy | admin | string | 创建者 |
| data.createId | 1 | integer | 创建者ID |
| data.updateBy | - | string | 修改者 |
| data.updateId | - | integer | 修改者ID |
| data.remark | - | string | 备注 |
| data.enableFlag | 1 | integer | 启用标记 1=启用 0=禁用 |
| data.siteId | - | integer | 门店ID |
| data.delFlag | - | integer | 删除标记,1:已删除,0:正常 |
| data.syncTime | 2026-02-26 16:55:05 | string | - |
| ok | true | boolean | - |

* 失败(404)

```javascript
暂无数据
```

* 成功返回(200)

```javascript
{
    "code": 0,
    "msg": "",
    "data": {
        "id": 1,
        "printerName": "",
        "printerType": "",
        "ticketTypes": "",
        "connectionMode": "",
        "autoRetryFlag": 1,
        "ipAddress": "",
        "port": 1,
        "bluetoothAddress": "",
        "createTime": "2026-02-02 13:29:25",
        "updateTime": "2026-02-02 13:29:25",
        "createBy": "",
        "createId": 1,
        "updateBy": "",
        "updateId": 1,
        "remark": "",
        "enableFlag": 1,
        "siteId": 1,
        "delFlag": 1
    }
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | number | - |
| msg | - | string | - |
| data | - | object | - |
| data.id | 1 | number | - |
| data.printerName | - | string | - |
| data.printerType | - | string | - |
| data.ticketTypes | - | string | - |
| data.connectionMode | - | string | - |
| data.autoRetryFlag | 1 | number | - |
| data.ipAddress | - | string | - |
| data.port | 1 | number | - |
| data.bluetoothAddress | - | string | - |
| data.createTime | 2026-02-02 13:29:25 | string | - |
| data.updateTime | 2026-02-02 13:29:25 | string | - |
| data.createBy | - | string | - |
| data.createId | 1 | number | - |
| data.updateBy | - | string | - |
| data.updateId | 1 | number | - |
| data.remark | - | string | - |
| data.enableFlag | 1 | number | - |
| data.siteId | 1 | number | - |
| data.delFlag | 1 | number | - |

**Query**

## 根据ID删除打印机配置

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-02-02 13:29:49

> 更新时间: 2026-02-26 16:49:24

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.10:9999/admin/pos-printer-config/deletePrinterConfig?printerId=2026903073973985282

**请求方式**

> DELETE

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| printerId | 2026903073973985282 | integer | 是 | - |

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{"code":0,"msg":null,"data":null,"ok":true}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | object | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

## 更新打印机配置

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-02-02 13:29:49

> 更新时间: 2026-02-26 18:00:50

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.10:9999/admin/pos-printer-config/updatePrinterConfig

**请求方式**

> POST

**Content-Type**

> json

**请求Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| SITE-ID | 500248 | string | 是 | - |

**请求Body参数**

```javascript
{
    "id": "2026942875372888065",
    "printerName": "小票打印",
    "printerType": "RECEIPT_PRINTER",
    "ticketTypes": [
        3,
        999
    ],
    "connectionMode": "WIFI",
    "autoRetryFlag": 1,
    "ipAddress": "192.168.10.90",
    "port": 9100,
    "bluetoothAddress": "",
    "remark": "",
    "enableFlag": 1
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| id | 1 | integer | 否 | - |
| printerName | - | string | 否 | 打印机名称 |
| printerType | - | string | 是 | 打印机类型 |
| ticketTypes | - | string | 是 | 打印功能（票据类型）  json 数据格式存储，例如：["1","2","3"] |
| connectionMode | - | string | 是 | 连接方式 : wifi/bluetooth/usb/serial |
| autoRetryFlag | 1 | integer | 否 | 失败自动补打一次 0=否 1=是 |
| ipAddress | - | string | 是 | 连接IP |
| port | 1 | integer | 否 | 连接端口 |
| bluetoothAddress | - | string | 否 | 蓝牙地址 |
| remark | - | string | 否 | 备注 |
| enableFlag | 1 | integer | 否 | 启用标记 1=启用 0=禁用 |

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{"code":0,"msg":null,"data":"更新成功","ok":true}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | object | - |

* 失败(404)

```javascript
暂无数据
```

**请求Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| SITE-ID | 500248 | string | 是 | - |

**Query**

## 获取打印机连接方式枚举列表

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-02-27 10:18:39

> 更新时间: 2026-02-27 10:57:55

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.10:9999/admin/pos-printer-config/printerConnectionEnum

**请求方式**

> GET

**Content-Type**

> none

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{"code":0,"msg":null,"data":[{"code":"WIFI","description":"WIFI连接"},{"code":"SERIAL","description":"串口连接"}],"ok":true}
```

* 失败(404)

```javascript
暂无数据
```

**Query**

## 获取打印机类型枚举列表

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-03-02 14:38:18

> 更新时间: 2026-03-02 15:03:21

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.10:9999/admin/pos-printer-config/printerTypeEnum

**请求方式**

> GET

**Content-Type**

> none

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{"code":0,"msg":null,"data":[{"supportedTicketTypes":[],"description":"标签打印机","type":"LABEL_PRINTER"},{"supportedTicketTypes":[{"code":1,"description":"客看单","value":"CUSTOMER_VIEW"},{"code":2,"description":"预结单","value":"PRE_SETTLEMENT"},{"code":3,"description":"结账单","value":"CHECKOUT"},{"code":61,"description":"外带结账单","value":"TAKEAWAY_CHECKOUT"},{"code":999,"description":"测试票据","value":"TEST"}],"description":"小票打印机","type":"RECEIPT_PRINTER"}],"ok":true}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | array | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

# 票据

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-02-03 15:22:06

> 更新时间: 2026-02-04 09:56:49

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

## 打印测试票

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-02-03 15:49:56

> 更新时间: 2026-03-04 19:59:04

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.111:9999/admin/pos-ticket/task/printTestTicket

**请求方式**

> POST

**Content-Type**

> none

**请求Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| SITE-ID | 500248 | string | 是 | - |

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{"code":0,"msg":null,"data":null,"ok":true}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | object | - |

* 失败(404)

```javascript
暂无数据
```

**请求Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| SITE-ID | 500248 | string | 是 | - |

**Query**

## 补打小票

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-02-03 15:50:06

> 更新时间: 2026-03-04 19:37:19

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.111:9999/admin/pos-ticket/task/reprint

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
  "taskId": 0,
  "printerId": 0,
  "retryOnFailure": 0
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| taskId | 2018899281119625200 | number | 是 | 任务ID |
| printerId | 1 | number | 是 | 为空，则表示使用任务原有的打印机，不为空，则表示换机打印 |
| retryOnFailure | 0 | number | 是 | 失败是否重试：1-重试，0-不重试 |

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{"code":0,"msg":null,"data":null,"ok":true}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

## 批量补打

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-02-26 17:55:20

> 更新时间: 2026-03-04 19:59:00

**目前版本，无需传入任何参数**

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.111:9999/admin/pos-ticket/task/batchReprint

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
    "taskIds": [
        0
    ],
    "ticketTypes": [
        3,
        999
    ],
    "startTime": "2026-03-04 09:50:19",
    "endTime": "2026-03-04 09:50:19",
    "printerId": 2027242191887044610
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| taskIds | - | array | 否 | 批量重打印的任务ID列表 |
| ticketTypes | - | array | 否 | 补打的票据类型 |
| startTime | 2026-02-26 17:55:15 | string | 否 | 时间范围：开始时间 |
| endTime | 2026-02-26 17:55:15 | string | 否 | 时间范围：结束时间 |
| printerId | 1 | integer | 否 | 如果 printerId 为空，则表示使用任务原有的打印机 如果 printerId 不为空，则表示使用新的打印机重打印 |

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{"code":0,"msg":null,"data":null,"ok":true}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | object | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

## 票据类型列表

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-02-04 09:57:11

> 更新时间: 2026-02-26 17:40:21

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.10:9999/admin/pos-ticket-type/list

**请求方式**

> GET

**Content-Type**

> none

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{"code":0,"msg":null,"data":[{"id":"3","code":3,"value":"CHECKOUT","name":"结账单","enableFlag":1,"syncTime":"2026-02-26 17:40:13"},{"id":"5","code":999,"value":"TEST","name":"测试票","enableFlag":1,"syncTime":"2026-02-26 17:40:13"}],"ok":true}
```

* 失败(404)

```javascript
暂无数据
```

* 成功返回(200)

```javascript
暂无数据
```

**Query**

## 分页查询打印任务列表

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-02-04 10:19:52

> 更新时间: 2026-03-04 19:36:51

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.111:9999/admin/pos-ticket/task/page

**请求方式**

> POST

**Content-Type**

> json

**请求Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| SITE-ID | 500248 | string | 是 | - |

**请求Body参数**

```javascript
{
    "current":1,
    "size":10,
    "bizNo": "",
    "takeNumber": "",
    "ticketType": 1,
    "status": 1,
    "isPrinted": 1,
    "createTimeStart": "2026-02-04 10:19:48",
    "createTimeEnd": "2026-02-04 10:19:48",
    "reprintFlag": 1
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| bizNo | - | string | 否 | 订单号/业务单号 |
| takeNumber | - | string | 否 | 取餐号 |
| ticketType | 1 | integer | 否 | 票据类型 code |
| status | 1 | integer | 否 | 打印任务状态：0=INIT 1=SUCCESS 2=FAILED |
| isPrinted | 1 | integer | 否 | 是否打印：0=否 1=是 |
| createTimeStart | 2026-02-04 10:19:48 | string | 否 | 创建时间范围 - 开始 |
| createTimeEnd | 2026-02-04 10:19:48 | string | 否 | 创建时间范围 - 结束 |
| reprintFlag | 1 | integer | 否 | 补打标记：0=否 1=是 |

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{"code":0,"msg":null,"data":{"records":[{"id":"2028350089947078658","bizNo":null,"takeNumber":null,"ticketType":999,"ticketTypeName":"测试票据","printerId":"2027242191887044610","status":1,"statusName":"SUCCESS","failReason":null,"lastAttemptTime":"2026-03-02 14:43:26","successTime":"2026-03-02 14:43:30","isPrinted":1,"attemptCount":9,"createTime":"2026-03-02 14:43:10","updateTime":"2026-03-02 14:43:30","reprintFlag":1,"reprintBy":"admin","isSyncSuccess":1},{"id":"2028350101594660865","bizNo":null,"takeNumber":null,"ticketType":999,"ticketTypeName":"测试票据","printerId":"2027242191887044610","status":1,"statusName":"SUCCESS","failReason":null,"lastAttemptTime":"2026-03-02 14:43:30","successTime":"2026-03-02 14:43:33","isPrinted":1,"attemptCount":9,"createTime":"2026-03-02 14:43:10","updateTime":"2026-03-02 14:43:33","reprintFlag":1,"reprintBy":"admin","isSyncSuccess":1},{"id":"2028350113066082306","bizNo":null,"takeNumber":null,"ticketType":999,"ticketTypeName":"测试票据","printerId":"2027242191887044610","status":1,"statusName":"SUCCESS","failReason":null,"lastAttemptTime":"2026-03-02 14:43:33","successTime":"2026-03-02 14:43:36","isPrinted":1,"attemptCount":9,"createTime":"2026-03-02 14:43:10","updateTime":"2026-03-02 14:43:36","reprintFlag":1,"reprintBy":"admin","isSyncSuccess":1},{"id":"2028350121874120705","bizNo":null,"takeNumber":null,"ticketType":999,"ticketTypeName":"测试票据","printerId":"2027242191887044610","status":1,"statusName":"SUCCESS","failReason":null,"lastAttemptTime":"2026-03-02 14:43:36","successTime":"2026-03-02 14:43:39","isPrinted":1,"attemptCount":10,"createTime":"2026-03-02 14:43:10","updateTime":"2026-03-02 14:43:39","reprintFlag":1,"reprintBy":"admin","isSyncSuccess":1},{"id":"2028350143722250242","bizNo":null,"takeNumber":null,"ticketType":999,"ticketTypeName":"测试票据","printerId":"2027242191887044610","status":1,"statusName":"SUCCESS","failReason":null,"lastAttemptTime":"2026-03-02 14:43:39","successTime":"2026-03-02 14:43:43","isPrinted":1,"attemptCount":9,"createTime":"2026-03-02 14:43:10","updateTime":"2026-03-02 14:43:43","reprintFlag":1,"reprintBy":"admin","isSyncSuccess":1},{"id":"2028350153062965250","bizNo":null,"takeNumber":null,"ticketType":999,"ticketTypeName":"测试票据","printerId":"2027242191887044610","status":1,"statusName":"SUCCESS","failReason":null,"lastAttemptTime":"2026-03-02 14:43:43","successTime":"2026-03-02 14:43:46","isPrinted":1,"attemptCount":9,"createTime":"2026-03-02 14:43:10","updateTime":"2026-03-02 14:43:46","reprintFlag":1,"reprintBy":"admin","isSyncSuccess":1},{"id":"2028350163011854337","bizNo":null,"takeNumber":null,"ticketType":999,"ticketTypeName":"测试票据","printerId":"2027242191887044610","status":1,"statusName":"SUCCESS","failReason":null,"lastAttemptTime":"2026-03-02 14:43:46","successTime":"2026-03-02 14:43:49","isPrinted":1,"attemptCount":10,"createTime":"2026-03-02 14:43:10","updateTime":"2026-03-02 14:43:49","reprintFlag":1,"reprintBy":"admin","isSyncSuccess":1},{"id":"2028350175309553665","bizNo":null,"takeNumber":null,"ticketType":999,"ticketTypeName":"测试票据","printerId":"2027242191887044610","status":1,"statusName":"SUCCESS","failReason":null,"lastAttemptTime":"2026-03-02 14:43:49","successTime":"2026-03-02 14:43:53","isPrinted":1,"attemptCount":9,"createTime":"2026-03-02 14:43:10","updateTime":"2026-03-02 14:43:53","reprintFlag":1,"reprintBy":"admin","isSyncSuccess":1},{"id":"2028350192887881729","bizNo":null,"takeNumber":null,"ticketType":999,"ticketTypeName":"测试票据","printerId":"2027242191887044610","status":1,"statusName":"SUCCESS","failReason":null,"lastAttemptTime":"2026-03-02 14:43:53","successTime":"2026-03-02 14:43:56","isPrinted":1,"attemptCount":11,"createTime":"2026-03-02 14:43:10","updateTime":"2026-03-02 14:43:56","reprintFlag":1,"reprintBy":"admin","isSyncSuccess":1},{"id":"2028350218489913346","bizNo":null,"takeNumber":null,"ticketType":999,"ticketTypeName":"测试票据","printerId":"2027242191887044610","status":1,"statusName":"SUCCESS","failReason":null,"lastAttemptTime":"2026-03-02 14:30:09","successTime":"2026-03-02 14:30:12","isPrinted":1,"attemptCount":8,"createTime":"2026-03-02 14:43:10","updateTime":"2026-03-02 14:30:12","reprintFlag":1,"reprintBy":"admin","isSyncSuccess":1}],"total":13,"size":10,"current":1,"pages":2},"ok":true}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | object | - |
| data.records | - | array | 查询数据列表 |
| data.records.id | 1 | integer | 任务ID |
| data.records.bizNo | - | string | 订单号/业务单号 |
| data.records.takeNumber | - | string | 取餐号 |
| data.records.ticketType | 1 | integer | 票据类型 code |
| data.records.ticketTypeName | - | string | 票据类型名称 |
| data.records.printerId | 1 | integer | 打印机ID |
| data.records.status | 1 | integer | 打印任务状态：0=INIT 1=SUCCESS 2=FAILED |
| data.records.statusName | - | string | 状态名称 |
| data.records.failReason | - | string | 最近一次失败原因 |
| data.records.lastAttemptTime | 2026-02-04 10:19:48 | string | 最近一次打印尝试时间 |
| data.records.successTime | 2026-02-04 10:19:48 | string | 打印成功时间 |
| data.records.isPrinted | 1 | integer | 是否打印标记 - 前端展示："是"/"否" |
| data.records.attemptCount | 1 | integer | 尝试次数 |
| data.records.createTime | 2026-02-04 10:19:48 | string | 任务创建时间 |
| data.records.updateTime | 2026-02-04 10:19:48 | string | 任务更新时间 |
| data.records.reprintFlag | 1 | integer | 补打标记：0=否 1=是 |
| data.records.reprintBy | - | string | 补打人 |
| data.records.isSyncSuccess | 1 | integer | 是否上传成功：0=否 1=是 |
| data.total | 0 | integer | 总数 |
| data.size | 10 | integer | 每页显示条数，默认 10 |
| data.current | 1 | integer | 当前页 |
| data.orders | - | array | 排序字段信息 |
| data.orders.column | - | string | - |
| data.orders.asc | true | boolean | - |
| data.optimizeCountSql | true | boolean | 自动优化 COUNT SQL |
| data.searchCount | true | boolean | 是否进行 count 查询 |
| data.optimizeJoinOfCountSql | true | boolean | - |
| data.maxLimit | 1 | integer | 单页分页条数限制 |
| data.countId | - | string | countId |

* 失败(404)

```javascript
暂无数据
```

**请求Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| SITE-ID | 500248 | string | 是 | - |

**Query**

## 获取打印任务详情

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-02-04 10:21:51

> 更新时间: 2026-02-26 17:15:30

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.10:9999/admin/pos-ticket/task/detail?taskId=2026948748187131905

**请求方式**

> GET

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| taskId | 2026948748187131905 | integer | 是 | - |

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{"code":0,"msg":null,"data":{"id":"2026948748187131905","bizNo":null,"takeNumber":null,"ticketType":999,"ticketTypeName":"测试票据","printerId":"2026942875372888065","status":1,"statusName":"SUCCESS","failReason":null,"lastAttemptTime":"2026-02-26 17:13:35","successTime":"2026-02-26 17:13:36","isPrinted":1,"attemptCount":1,"createTime":"2026-02-26 17:13:35","updateTime":"2026-02-26 17:13:36","reprintFlag":1,"reprintBy":null,"isSyncSuccess":1},"ok":true}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | object | - |
| data.id | 1 | integer | 任务ID |
| data.bizNo | - | string | 订单号/业务单号 |
| data.takeNumber | - | string | 取餐号 |
| data.ticketType | 1 | integer | 票据类型 code |
| data.ticketTypeName | - | string | 票据类型名称 |
| data.printerId | 1 | integer | 打印机ID |
| data.status | 1 | integer | 打印任务状态：0=INIT 1=SUCCESS 2=FAILED |
| data.statusName | - | string | 状态名称 |
| data.failReason | - | string | 最近一次失败原因 |
| data.lastAttemptTime | 2026-02-04 10:21:48 | string | 最近一次打印尝试时间 |
| data.successTime | 2026-02-04 10:21:48 | string | 打印成功时间 |
| data.isPrinted | 1 | integer | 是否打印标记 - 前端展示："是"/"否" |
| data.attemptCount | 1 | integer | 尝试次数 |
| data.createTime | 2026-02-04 10:21:48 | string | 任务创建时间 |
| data.updateTime | 2026-02-04 10:21:48 | string | 任务更新时间 |
| data.reprintFlag | 1 | integer | 补打标记：0=否 1=是 |
| data.reprintBy | - | string | 补打人 |
| data.isSyncSuccess | 1 | integer | 是否上传成功：0=否 1=是 |

* 失败(404)

```javascript
暂无数据
```

**Query**

## 删除单个打印任务

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-02-04 10:22:01

> 更新时间: 2026-02-04 10:22:32

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.135:9999/admin/pos-ticket/task/remove?taskId=

**请求方式**

> DELETE

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| taskId | - | integer | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
    "code": 1,
    "msg": "",
    "data": {
    }
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | object | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

## 批量删除打印任务

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-02-04 10:22:08

> 更新时间: 2026-02-10 17:27:56

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.135:9999/admin/pos-ticket/task/removeBatch

**请求方式**

> DELETE

**Content-Type**

> json

**请求Body参数**

```javascript
[
    1889923,
    12888123,
    123890
]
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 0 | - | array | 否 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
    "code": 1,
    "msg": "",
    "data": {
    }
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | object | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

# 机器相关

> 创建人: 易智伟

> 更新人: 易智伟

> 创建时间: 2026-02-04 14:56:42

> 更新时间: 2026-02-04 14:56:42

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

# 点餐

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-03-10 13:56:35

> 更新时间: 2026-03-10 13:56:35

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

## 购物车

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-03-10 13:56:46

> 更新时间: 2026-03-10 13:57:01

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

### 自动加购

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-03-10 14:00:38

> 更新时间: 2026-03-10 14:07:38

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.111:9999/admin/client/cart/autoAddCart

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
    "siteId": 1,
    "siteSchId": 1,
    "diningWay": "",
    "switchDiningWay": "",
    "peopleNum": 1,
    "alsoNeedNum": 0
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| siteId | 1 | integer | 否 | 店铺ID |
| siteSchId | 1 | integer | 否 | 店铺批次 |
| diningWay | - | string | 否 | 用餐方式 |
| switchDiningWay | - | string | 否 | 切换的用餐方式 |
| peopleNum | 1 | integer | 否 | 就餐人数 |
| alsoNeedNum | 0 | integer | 否 | 还需加购主食数量 |

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{
    "code": 1,
    "msg": "",
    "data": {
    }
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | object | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

### 用餐方式切换，计算两者差异

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-03-10 14:00:38

> 更新时间: 2026-03-10 14:08:22

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.111:9999/admin/client/cart/switchDifference?siteId=&siteSchId=&currDiningWay=&switchDiningWay=

**请求方式**

> GET

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| siteId | - | integer | 是 | 店铺ID |
| siteSchId | - | integer | 是 | 店铺批次ID |
| currDiningWay | - | string | 是 | 当前用餐方式 |
| switchDiningWay | - | string | 是 | 需要切换的用餐方式 |

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{
    "code": 1,
    "msg": "",
    "data": {
    }
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | object | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

### 添加购物车

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-03-10 14:00:38

> 更新时间: 2026-03-16 14:01:48

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.111:9999/admin/client/cart/submissionCart

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
    "siteId": 800291,
    "siteSchId": 1204710,
    "cartId": "2033417582625460226",
    "cartKey": "90848cb2-0812-407d-8355-644c310a98fc",
    "diningWay": "IN_SITE",
    "goodsInfoList": [
        {
            "siteGoodsId": 17691512,
            "goodsId": 151583,
            "goodsNum": 1,
            "clearCount": false,
            "freedomCombo": false,
            "addGoodsList": [
            ]
        }
    ]
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| siteId | 1 | integer | 否 | 店铺ID |
| siteSchId | 1 | integer | 否 | 店铺批次ID |
| cartKey | - | string | 否 | - |
| cartId | 1 | integer | 否 | 购物车ID：有则给，无则不给 |
| groupCartId | 1 | integer | 否 | 跨用餐方式同步时的购物车分组ID |
| orderMethodType | - | string | 否 | 下单方式 |
| diningWay | - | string | 否 | 用餐方式 |
| goodsInfoList | - | array | 否 | 商品信息 |
| goodsInfoList.siteGoodsId | 1 | integer | 否 | 店铺商品ID· |
| goodsInfoList.goodsId | 1 | integer | 否 | 商品ID |
| goodsInfoList.goodsNum | 1 | integer | 否 | 商品数量: 正数、负数 正数: 添加商品 负数: 删除商品 0: 清空购物车 |
| goodsInfoList.clearCount | true | boolean | 否 | 是否清空数量： true-清空数量，false-不清空数量 |
| goodsInfoList.freedomCombo | true | boolean | 否 | 是否自由套餐: true-是、false-否 |
| goodsInfoList.addGoodsList | - | array | 否 | 加购商品列表 |
| packageInfoList | - | array | 否 | 套餐信息 |
| packageInfoList.spuId | 1 | integer | 否 | spuId = 套餐goodsId |
| packageInfoList.siteGoodsId | 1 | integer | 否 | 店铺商品ID |
| packageInfoList.skuInfoList | - | array | 否 | sku明细 |
| packageInfoList.skuInfoList.siteGoodsSkuId | 1 | integer | 否 | 套餐skuId = SiteGoodsCombSkuModel.id |
| packageInfoList.skuInfoList.goodsNum | 1 | integer | 否 | 套餐sku数量 正数添加 负数减少 0删除 |
| uniqueKeyId | 1 | integer | 否 | 未登录其余用餐方式的唯一key |

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{"code":0,"msg":"购物车添加成功","data":{"siteId":"800291","cartId":"2033417582625460226","siteName":"快鳄未来食堂（北宸店）","siteSchId":"1204710","offerType":null,"originalTotalPrice":124.6,"payableTotalPrice":124.6,"discountTotalPrice":0,"diningWay":"IN_SITE","cartsGoodsInfoList":[{"cartItemId":"2033417582784843777","applicableDiningWays":["IN_SITE"],"orderType":"NORMAL","siteGoodsId":"17691512","siteSchId":"1204710","goodsId":"151583","number":7,"goodsName":"酱煨小黄鱼","pic":"https://huabingoss.huabing.online/2025-12-huaBing-good/dc983a0c-f044-45ee-818b-00c05f3ab045_小黄鱼头图.jpg","price":17.8,"maxBuyNum":null,"spiciness":null,"materialDescribe":null,"allowOrder":true,"disableOrderReason":"","soldOut":false,"addDateTime":"1773639505460","sortInt":2147483647,"priceInfo":null,"goodSpecList":null,"addGoodsList":[]}],"packageInfoList":[],"diningWayCartsInfoList":[{"diningWay":"IN_SITE","cartsInfo":{"groupCartId":"2033417582625460226","cartId":"2033417582625460226","goodsPrice":124.6,"siteName":"快鳄未来食堂（北宸店）","goodsNum":7}},{"diningWay":"TAKE_AWAY","cartsInfo":{"groupCartId":"2033417582625460226","cartId":"2033417583254605825","goodsPrice":106.8,"siteName":"快鳄未来食堂（北宸店）","goodsNum":6}},{"diningWay":"TAKE_OUT","cartsInfo":{"groupCartId":"2033417582625460226","cartId":"2033417583854391298","goodsPrice":106.8,"siteName":"快鳄未来食堂（北宸店）","goodsNum":6}}]},"ok":true}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | object | - |

* 失败(404)

```javascript
暂无数据
```

* 成功返回(200)

```javascript
{
	"code": 0,
	"msg": "购物车添加成功",
	"data": {
		"siteId": "800291",
		"cartId": "2033368847258308609",
		"siteName": "快鳄未来食堂（北宸店）",
		"siteSchId": "1204710",
		"offerType": null,
		"originalTotalPrice": 17.8,
		"payableTotalPrice": 17.8,
		"discountTotalPrice": 0,
		"diningWay": "IN_SITE",
		"cartsGoodsInfoList": [
			{
				"cartItemId": "2033368847350583298",
				"applicableDiningWays": [
					"IN_SITE"
				],
				"orderType": "NORMAL",
				"siteGoodsId": "17691512",
				"siteSchId": "1204710",
				"goodsId": "151583",
				"number": 1,
				"goodsName": "酱煨小黄鱼",
				"pic": "https://huabingoss.huabing.online/2025-12-huaBing-good/dc983a0c-f044-45ee-818b-00c05f3ab045_小黄鱼头图.jpg",
				"price": 17.8,
				"maxBuyNum": null,
				"spiciness": null,
				"materialDescribe": null,
				"allowOrder": true,
				"disableOrderReason": "",
				"soldOut": false,
				"addDateTime": "1773627886039",
				"sortInt": 2147483647,
				"priceInfo": null,
				"goodSpecList": null,
				"addGoodsList": []
			}
		],
		"packageInfoList": [],
		"diningWayCartsInfoList": [
			{
				"diningWay": "IN_SITE",
				"cartsInfo": {
					"groupCartId": "2033368847258308609",
					"cartId": "2033368847258308609",
					"goodsPrice": 17.8,
					"siteName": "快鳄未来食堂（北宸店）",
					"goodsNum": 1
				}
			}
		]
	},
	"ok": true
}
```

**Query**

### 购物车商品管理

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-03-10 14:00:38

> 更新时间: 2026-03-16 14:01:47

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.111:9999/admin/client/cart/cartGoodsManagement

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
    "cartId": 2033417582625460226,
    "siteId": 800291,
    "siteSchId": 1204710,
    "diningWay": "IN_SITE",
    "itemList": [
        {
            "cartItemId": 2033417582784843777,
            "goodCount": -1,
            "clearCount": false,
            "addGoodsList": [
            ]
        }
    ]
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| cartId | 1 | integer | 否 | 购物车ID：有则给，无则不给 |
| groupCartId | 1 | integer | 否 | 跨用餐方式同步时的购物车分组ID |
| siteId | 1 | integer | 否 | 店铺ID |
| siteSchId | 1 | integer | 否 | 店铺批次ID |
| diningWay | - | string | 否 | 用餐方式 |
| itemList | - | array | 否 | - |
| itemList.cartItemId | 1 | integer | 否 | 商品明细ID |
| itemList.goodCount | 1 | integer | 否 | 数量 |
| itemList.clearCount | true | boolean | 否 | 是否清空数量： true-清空数量，false-不清空数量: 当只管理子类商品数量时：goodCount = 0 && clearCount = false |
| itemList.addGoodsList | - | array | 否 | 加购商品列表 |
| packageInfoList | - | array | 否 | 套餐信息 |
| packageInfoList.cartItemId | 1 | integer | 否 | - |
| packageInfoList.skuInfoList | - | array | 否 | sku明细 |
| packageInfoList.skuInfoList.cartItemSkuId | 1 | integer | 否 | 购物车skuId |
| packageInfoList.skuInfoList.goodCount | 1 | integer | 否 | 套餐sku数量 正数添加 负数减少 0删除 |
| uniqueKeyId | 1 | integer | 否 | 未登录其余用餐方式的唯一key |

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{"code":0,"msg":"购物车管理成功","data":{"siteId":"800291","cartId":"2033417582625460226","siteName":"快鳄未来食堂（北宸店）","siteSchId":"1204710","offerType":null,"originalTotalPrice":17.8,"payableTotalPrice":17.8,"discountTotalPrice":0,"diningWay":"IN_SITE","cartsGoodsInfoList":[{"cartItemId":"2033417582784843777","applicableDiningWays":["IN_SITE"],"orderType":"NORMAL","siteGoodsId":"17691512","siteSchId":"1204710","goodsId":"151583","number":1,"goodsName":"酱煨小黄鱼","pic":"https://huabingoss.huabing.online/2025-12-huaBing-good/dc983a0c-f044-45ee-818b-00c05f3ab045_小黄鱼头图.jpg","price":17.8,"maxBuyNum":null,"spiciness":null,"materialDescribe":null,"allowOrder":true,"disableOrderReason":"","soldOut":false,"addDateTime":"1773639505460","sortInt":2147483647,"priceInfo":null,"goodSpecList":null,"addGoodsList":[]}],"packageInfoList":[],"diningWayCartsInfoList":[{"diningWay":"IN_SITE","cartsInfo":{"groupCartId":"2033417582625460226","cartId":"2033417582625460226","goodsPrice":17.8,"siteName":"快鳄未来食堂（北宸店）","goodsNum":1}},{"diningWay":"TAKE_AWAY","cartsInfo":{"groupCartId":"2033417582625460226","cartId":"2033417583254605825","goodsPrice":35.6,"siteName":"快鳄未来食堂（北宸店）","goodsNum":2}},{"diningWay":"TAKE_OUT","cartsInfo":{"groupCartId":"2033417582625460226","cartId":"2033417583854391298","goodsPrice":35.6,"siteName":"快鳄未来食堂（北宸店）","goodsNum":2}}]},"ok":true}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | object | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

### 查询购物车信息

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-03-10 14:00:38

> 更新时间: 2026-03-16 13:41:53

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.111:9999/admin/client/cart/queryCartInfo?cartId=&siteId=800291&siteSchId=1204710&diningWay=IN_SITE

**请求方式**

> GET

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| groupBookingId | - | integer | 否 | - |
| orderMethodType | - | string | 否 | - |
| cartId | - | integer | 否 | 购物车ID |
| siteId | 800291 | integer | 是 | 店铺ID |
| siteSchId | 1204710 | integer | 是 | 批次ID |
| diningWay | IN_SITE | string | 是 | - |

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{"code":0,"msg":"查询购物车信息成功","data":{"siteId":"800291","cartId":"2033417582625460226","siteName":"快鳄未来食堂（北宸店）","siteSchId":"1204710","offerType":null,"originalTotalPrice":17.8,"payableTotalPrice":17.8,"discountTotalPrice":0,"diningWay":"IN_SITE","cartsGoodsInfoList":[{"cartItemId":"2033417582784843777","applicableDiningWays":["IN_SITE"],"orderType":"NORMAL","siteGoodsId":"17691512","siteSchId":"1204710","goodsId":"151583","number":1,"goodsName":"酱煨小黄鱼","pic":"https://huabingoss.huabing.online/2025-12-huaBing-good/dc983a0c-f044-45ee-818b-00c05f3ab045_小黄鱼头图.jpg","price":17.8,"maxBuyNum":null,"spiciness":null,"materialDescribe":null,"allowOrder":true,"disableOrderReason":"","soldOut":false,"addDateTime":"1773639505460","sortInt":2147483647,"priceInfo":null,"goodSpecList":null,"addGoodsList":[]}],"packageInfoList":[],"diningWayCartsInfoList":[{"diningWay":"IN_SITE","cartsInfo":{"groupCartId":"2033417582625460226","cartId":"2033417582625460226","goodsPrice":17.8,"siteName":"快鳄未来食堂（北宸店）","goodsNum":1}},{"diningWay":"TAKE_AWAY","cartsInfo":{"groupCartId":"2033417582625460226","cartId":"2033417583254605825","goodsPrice":17.8,"siteName":"快鳄未来食堂（北宸店）","goodsNum":1}},{"diningWay":"TAKE_OUT","cartsInfo":{"groupCartId":"2033417582625460226","cartId":"2033417583854391298","goodsPrice":17.8,"siteName":"快鳄未来食堂（北宸店）","goodsNum":1}}]},"ok":true}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | object | - |

* 失败(404)

```javascript
暂无数据
```

* 成功返回(200)

```javascript
{
	"code": 0,
	"msg": "查询购物车信息成功",
	"data": {
		"siteId": "800291",
		"cartId": "2033368847258308609",
		"siteName": "快鳄未来食堂（北宸店）",
		"siteSchId": "1204710",
		"offerType": null,
		"originalTotalPrice": 17.8,
		"payableTotalPrice": 17.8,
		"discountTotalPrice": 0,
		"diningWay": "IN_SITE",
		"cartsGoodsInfoList": [
			{
				"cartItemId": "2033368847350583298",
				"applicableDiningWays": [
					"IN_SITE"
				],
				"orderType": "NORMAL",
				"siteGoodsId": "17691512",
				"siteSchId": "1204710",
				"goodsId": "151583",
				"number": 1,
				"goodsName": "酱煨小黄鱼",
				"pic": "https://huabingoss.huabing.online/2025-12-huaBing-good/dc983a0c-f044-45ee-818b-00c05f3ab045_小黄鱼头图.jpg",
				"price": 17.8,
				"maxBuyNum": null,
				"spiciness": null,
				"materialDescribe": null,
				"allowOrder": true,
				"disableOrderReason": "",
				"soldOut": false,
				"addDateTime": "1773627886039",
				"sortInt": 2147483647,
				"priceInfo": null,
				"goodSpecList": null,
				"addGoodsList": []
			}
		],
		"packageInfoList": [],
		"diningWayCartsInfoList": [
			{
				"diningWay": "IN_SITE",
				"cartsInfo": {
					"groupCartId": "2033368847258308609",
					"cartId": "2033368847258308609",
					"goodsPrice": 17.8,
					"siteName": "快鳄未来食堂（北宸店）",
					"goodsNum": 1
				}
			},
			{
				"diningWay": "TAKE_AWAY",
				"cartsInfo": {
					"groupCartId": "2033368847258308609",
					"cartId": "2033368848063614978",
					"goodsPrice": 17.8,
					"siteName": "快鳄未来食堂（北宸店）",
					"goodsNum": 1
				}
			},
			{
				"diningWay": "TAKE_OUT",
				"cartsInfo": {
					"groupCartId": "2033368847258308609",
					"cartId": "2033368848667594754",
					"goodsPrice": 17.8,
					"siteName": "快鳄未来食堂（北宸店）",
					"goodsNum": 1
				}
			}
		]
	},
	"ok": true
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | number | - |
| msg | - | string | - |
| data | - | object | - |
| data.siteId | 0 | number | 店铺ID |
| data.cartId | 0 | number | 购物车ID |
| data.siteName | siteName_b9e75f30a5f1 | string | - |
| data.siteSchId | 0 | number | 批次ID |
| data.offerType | offerType_866b87aa00b4 | string | - |
| data.originalTotalPrice | 0 | number | - |
| data.payableTotalPrice | 0 | number | - |
| data.discountTotalPrice | 0 | number | - |
| data.diningWay | diningWay_5c44867dd7f1 | string | 用餐方式 |
| data.cartsGoodsInfoList | - | array | - |
| data.cartsGoodsInfoList.cartItemId | 0 | number | - |
| data.cartsGoodsInfoList.applicableDiningWays | - | array | - |
| data.cartsGoodsInfoList.orderType | orderType_a53a640514c6 | string | - |
| data.cartsGoodsInfoList.siteGoodsId | 0 | number | - |
| data.cartsGoodsInfoList.siteSchId | 0 | number | 批次ID |
| data.cartsGoodsInfoList.goodsId | 0 | number | - |
| data.cartsGoodsInfoList.number | 0 | number | - |
| data.cartsGoodsInfoList.goodsName | goodsName_ae9b946b7fee | string | - |
| data.cartsGoodsInfoList.pic | pic_eaf79ece1fba | string | - |
| data.cartsGoodsInfoList.price | 0 | number | - |
| data.cartsGoodsInfoList.maxBuyNum | 0 | number | - |
| data.cartsGoodsInfoList.spiciness | 0 | number | - |
| data.cartsGoodsInfoList.materialDescribe | materialDescribe_f53bbecedcd4 | string | - |
| data.cartsGoodsInfoList.allowOrder | false | boolean | - |
| data.cartsGoodsInfoList.disableOrderReason | disableOrderReason_030c64f824bc | string | - |
| data.cartsGoodsInfoList.soldOut | false | boolean | - |
| data.cartsGoodsInfoList.addDateTime | 0 | number | - |
| data.cartsGoodsInfoList.sortInt | 0 | number | - |
| data.cartsGoodsInfoList.priceInfo | - | object | - |
| data.cartsGoodsInfoList.priceInfo.siteGoodsId | 0 | number | - |
| data.cartsGoodsInfoList.priceInfo.goodsId | 0 | number | - |
| data.cartsGoodsInfoList.priceInfo.offerType | offerType_2d75e868523f | string | - |
| data.cartsGoodsInfoList.priceInfo.offerDesc | offerDesc_8bb1faf204ee | string | - |
| data.cartsGoodsInfoList.priceInfo.storeOfferCode | 0 | number | - |
| data.cartsGoodsInfoList.priceInfo.timestamp | 0 | number | - |
| data.cartsGoodsInfoList.priceInfo.estimatePrice | 0 | number | - |
| data.packageInfoList | - | array | - |
| data.packageInfoList.applicableDiningWays | - | array | - |
| data.packageInfoList.cartItemId | 0 | number | - |
| data.packageInfoList.orderType | orderType_547382634217 | string | - |
| data.packageInfoList.siteGoodsId | 0 | number | - |
| data.packageInfoList.siteSchId | 0 | number | 批次ID |
| data.packageInfoList.spuId | 0 | number | spuId = 套餐goodsId |
| data.packageInfoList.spuName | spuName_0ec5e8b67ac7 | string | - |
| data.packageInfoList.spuImg | spuImg_0ca04bd1d778 | string | - |
| data.packageInfoList.spuTotalNum | 0 | number | - |
| data.packageInfoList.spuTotalPrice | 0 | number | - |
| data.packageInfoList.allowOrder | false | boolean | - |
| data.packageInfoList.disableOrderReason | disableOrderReason_3a7d223c7c6a | string | - |
| data.packageInfoList.time | 0 | number | - |
| data.packageInfoList.sortInt | 0 | number | - |
| data.packageInfoList.skuInfoList | - | array | - |
| data.packageInfoList.skuInfoList.cartItemSkuId | 0 | number | - |
| data.packageInfoList.skuInfoList.siteGoodsSkuId | 0 | number | 套餐skuId = SiteGoodsCombSkuModel.id |
| data.packageInfoList.skuInfoList.skuId | 0 | number | - |
| data.packageInfoList.skuInfoList.skuName | skuName_6acb76d6d500 | string | - |
| data.packageInfoList.skuInfoList.number | 0 | number | - |
| data.packageInfoList.skuInfoList.skuTotalPrice | 0 | number | - |
| data.packageInfoList.skuInfoList.skuAttrsVals | skuAttrsVals_d35bda8f2730 | string | - |
| data.packageInfoList.skuInfoList.price | 0 | number | - |
| data.packageInfoList.skuInfoList.pic | pic_538f7372af9d | string | - |
| data.packageInfoList.skuInfoList.maxBuyNum | 0 | number | - |
| data.packageInfoList.skuInfoList.allowOrder | false | boolean | - |
| data.packageInfoList.skuInfoList.disableOrderReason | disableOrderReason_12d0206c69c3 | string | - |
| data.packageInfoList.skuInfoList.soldOut | false | boolean | - |
| data.packageInfoList.skuInfoList.time | 0 | number | - |
| data.packageInfoList.skuInfoList.applicableDiningWays | - | array | - |
| data.diningWayCartsInfoList | - | array | - |
| data.diningWayCartsInfoList.diningWay | diningWay_0b4059fbfed1 | string | 用餐方式 |
| data.diningWayCartsInfoList.cartsInfo | - | object | - |

* 成功返回(200)

```javascript
暂无数据
```

**Query**

### 创建空购物车，当前购物车即视为挂起，继续为下一位顾客下单

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-03-10 14:00:38

> 更新时间: 2026-03-10 14:02:41

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.111:9999/admin/client/cart/createOpenCart?siteId=&siteSchId=&diningWay=

**请求方式**

> POST

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| siteId | - | integer | 是 | - |
| siteSchId | - | integer | 是 | - |
| diningWay | - | string | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
    "code": 1,
    "msg": "",
    "data": {
    }
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | object | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

### 查询门店未结算购物车列表

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-03-10 14:00:38

> 更新时间: 2026-03-10 14:02:43

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.111:9999/admin/client/cart/queryOpenCartList?siteId=&siteSchId=&diningWay=

**请求方式**

> GET

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| siteId | - | integer | 是 | - |
| siteSchId | - | integer | 是 | - |
| diningWay | - | string | 否 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
    "code": 1,
    "msg": "",
    "data": {
    }
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | object | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

### 购物车价格计算

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-03-10 14:00:38

> 更新时间: 2026-03-10 14:02:25

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.111:9999/admin/client/cart/cartPriceCalculation?cartId=&siteId=&siteSchId=&groupBookingId=&orderMethodType=&diningWay=

**请求方式**

> GET

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| cartId | - | integer | 否 | - |
| siteId | - | integer | 是 | - |
| siteSchId | - | integer | 是 | - |
| groupBookingId | - | integer | 否 | - |
| orderMethodType | - | string | 否 | - |
| diningWay | - | string | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
    "code": 1,
    "msg": "",
    "data": {
    }
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | object | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

## 订单

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-03-04 18:23:32

> 更新时间: 2026-03-10 13:57:03

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

### 打印订单小票

> 创建人: 刘乐锋

> 更新人: 刘乐锋

> 创建时间: 2026-03-04 18:23:44

> 更新时间: 2026-03-04 19:36:48

```text
暂无描述
```

**接口状态**

> 开发中

**接口URL**

> http://192.168.10.111:9999/admin/pos-order-manage/printOrderTicket

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
  "orderId": 10017728355234
}
```

**认证方式**

> Bearer Token

> 在Header添加参数 Authorization，其值为在Bearer之后拼接空格和访问令牌

> Authorization: Bearer your_access_token

**响应示例**

* 成功(200)

```javascript
{"code":0,"msg":null,"data":"打印成功","ok":true}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 1 | integer | - |
| msg | - | string | - |
| data | - | object | - |

* 失败(404)

```javascript
暂无数据
```

**Query**
