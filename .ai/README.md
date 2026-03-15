# AI 工作空间

> 个人核心竞争力 - 跨项目的 AI 驱动开发工作流

## 目录结构

```
.ai/
├── pos-ui/              # POS 系统 UI 项目
│   ├── input/
│   ├── output/
│   └── context/
├── project-a/           # 其他项目
│   ├── input/
│   ├── output/
│   └── context/
└── shared/              # 跨项目共享
    ├── glossary-global.md
    └── prompts/
```

## 使用方式

在业务项目中创建软链接：

```bash
cd /path/to/pos-ui
ln -s ~/develop-assistant/.ai/pos-ui .ai
```

## 同步策略

此目录包含个人核心资产，建议：
1. 使用私有 Git 仓库备份
2. 或云盘同步（坚果云/OneDrive）
3. 定期归档已完成项目
