module.exports = {
  root: true,
  env: {
    browser: true,
    node: true, // 解决不支持module.exports格式的错误
    es2021: true, // 支持es2021的全局变量和类型
  },
  extends: ["plugin:vue/recommended", "eslint:recommended", "plugin:prettier/recommended"],
  // 解析器选项
  parserOptions: {
    parser: "@babel/eslint-parser",
    sourceType: "module", // 默认是script，ESM模块要写module
    ecmaVersion: 12, // 支持的ES语法版本
  },
  rules: {
    // eslint与prettier一起使用，必须这么配置
    // "prettier/prettier": "error",
    
    // eslint规则说明参见：https://eslint.bootcss.com/docs/rules/
    // 生产环境禁用console和debugger
    // "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 未使用的变量
    "no-unused-vars": ["warn"],
    // 除下面情况，强制使用===和!==：比较字面量、typeof、与null比较
    eqeqeq: ["warn", "smart"],
    // IIFE需要被括号包裹
    "wrap-iife": ["warn", "inside"],
    // 保留末尾逗号
    "comma-dangle": ["warn", "always-multiline"],
    // 换行符
    "linebreak-style": ["off"],
    // 使用双引号
    quotes: ["warn", "double"],
    // 未被赋值的变量应该使用const
    "prefer-const": [
      "warn",
      {
        destructuring: "any", // 在解构中，任何变量都应该是const
        ignoreReadBeforeAssign: false,
      },
    ],
    
    // eslint-plugin-vue规则，参见： https://eslint.vuejs.org/rules/
    "vue/no-mutating-props": ["warn"],
    // 未使用的变量
    "vue/no-unused-vars": ["warn"],
    // 标签自闭合配置
    "vue/html-self-closing": [
      "warn",
      {
        html: {
          void: "always",
          normal: "never",
          component: "never",
        },
        svg: "always",
        math: "always",
      },
    ],
    "vue/multi-word-component-names": 0,
    "vue/singleline-html-element-content-newline": ["off"],
    "vue/no-v-html": ["warn"],
    // 控制元素中第一个属性的位置
    "vue/first-attribute-linebreak": [
      "error",
      {
        singleline: "beside", // 单行时第一个属性不换行
        multiline: "below", // 多行时第一个属性不换行
      },
    ],
    // 元素有多属性时每行属性数量，单行时一行最多个，多行时每行1个，
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 10,
        multiline: {
          max: 1,
        },
      },
    ],
    // 顶级元素的顺序
    "vue/component-tags-order": [
      "error",
      {
        order: ["template", "script", "style"], // 按习惯设置的顺序
      },
    ],
  },
};

// ES+语法支持
// parserOptions.ecmaVersion=6表示支持ES6语法，但不意味着支持新的全局变量或类型，如Set
// 同时设置env.es6:true，才能支持新的ES6全局变量

// 解析器
// eslint默认使用Espree作为解析器
// babel-eslint、@typescript-eslint/parser也是兼容的

// ES+语法支持
// parserOptions.ecmaVersion=6表示支持ES6语法，但不意味着支持新的全局变量或类型，如Set
// 同时设置env.es6:true，才能支持新的ES6全局变量

// 解析器
// eslint默认使用Espree作为解析器
// babel-eslint、@typescript-eslint/parser也是兼容的
