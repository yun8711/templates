// @see https://github.com/element-plus/element-plus/blob/dev/internal/eslint-config/index.js

module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // ecmaVersion: 'latest',
    // sourceType: 'module',
    // // ？？仅允许 import export 语句出现在模块的顶层
    // allowImportExportEverywhere: false,
    // ecmaFeatures: {
    //   // 不允许 return 语句出现在 global 环境下
    //   globalReturn: false,
    //   // 开启全局严格模式
    //   impliedStrict: true,
    //   jsx: true,
    // },
  },
  extends: [
    './index.js',
    // ESLint 内置规则，推荐用来检查常规的 JavaScript 代码
    'eslint:recommended',
    // 插件：eslint-plugin-import：用于检查 ES6 的模块导入和导出语句
    'plugin:import/recommended',
    'plugin:import/typescript',
    // 插件@typescript-eslint/eslint-plugin；针对TypeScript代码的推荐规则；关闭与eslint 冲突的规则
    'plugin:@typescript-eslint/recommended',
    // 插件eslint-plugin-jsonc：检查 JSON文件
    'plugin:jsonc/recommended-with-jsonc',
    // eslint-plugin-vue 插件，检查 Vue.js 3.0 代码
    'plugin:vue/vue3-recommended',
    // eslint-plugin-prettier 插件，将 Prettier 的格式化规则作为 ESLint 规则来运行
    'plugin:prettier/recommended',
  ],
  // 对不同类型的文件，指定更加具体的解析器和规则
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'warn',
        '@typescript-eslint/ban-types': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
      },
    },
  ],

  /**
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    // eslint (http://eslint.cn/docs/rules)
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    // "no-multiple-empty-lines": ["error", { max: 1 }], // 不允许多个空行
    // "prefer-const": "off", // 使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
    // "no-use-before-define": "off", // 禁止在 函数/类/变量 定义之前使用它们

    // vue (https://eslint.vuejs.org/rules)
    'vue/multi-word-component-names': 'off', // 组件名必须由多个单词组成
    'vue/no-unused-vars': 'warn',
    'vue/singleline-html-element-content-newline': ['off'],
    // 顶级元素的顺序
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style'], // 按习惯设置的顺序
      },
    ],
    // 标签自闭合配置
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'never',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    // 控制元素中第一个属性的位置
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'beside', // 单行时第一个属性不换行
        multiline: 'below', // 多行时第一个属性不换行
      },
    ],
    // 元素有多属性时每行属性数量，单行时一行最多个，多行时每行1个，
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 10,
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用，此规则仅在启用该no-unused-vars规则时有效
    'vue/v-slot-style': 'error', // 强制执行 v-slot 指令样式
    'vue/custom-event-name-casing': 'error', // 为自定义事件名称强制使用特定大小写
    'vue/html-closing-bracket-newline': 'error', // 在标签的右括号之前要求或禁止换行
    'vue/attribute-hyphenation': 'error', // 对模板中的自定义组件强制执行属性命名样式：my-prop="prop"

    // eslint-plugin-import (https://www.npmjs.com/package/eslint-plugin-import)
    // analysis/correctness
    'import/no-unresolved': 'off',
    // "import/named": "error",
    'import/namespace': 'off',
    // "import/default": "error",
    // "import/export": "error",

    // red flags (thus, warnings)
    // "import/no-named-as-default": "warn",
    // "import/no-named-as-default-member": "warn",
    'import/no-duplicates': 'error', // 多次引用同一个模块
    // 排序
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: 'vue',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@vue/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@element-plus/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['type'],
      },
    ],
    // typeScript (https://typescript-eslint.io/rules)
    '@typescript-eslint/no-unused-vars': 'off', // 禁止未使用的变量
    '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
    // "@typescript-eslint/ban-ts-comment": "error", // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
    // "@typescript-eslint/no-inferrable-types": "off", // 可以轻松推断的显式类型可能会增加不必要的冗长
    // "@typescript-eslint/no-namespace": "off", // 禁止使用自定义 TypeScript 模块和命名空间
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
    '@typescript-eslint/ban-types': 'off', // 禁止使用特定类型
    // "@typescript-eslint/no-var-requires": "off", // 允许使用 require() 函数导入模块
    // "@typescript-eslint/no-empty-function": "off", // 禁止空函数
    // "@typescript-eslint/no-non-null-assertion": "off", // 不允许使用后缀运算符的非空断言(!)
  },
};
