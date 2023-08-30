module.exports = [
  {
    title: "适用 vue2",
    filesMap: {
      "vue2.js": ".eslintrc.cjs",
      "_eslintignore": ".eslintignore",
    },
    tips:[
      '开发依赖：eslint @babel/eslint-parser eslint-config-prettier prettier eslint-plugin-prettier eslint-plugin-vue',
      '添加脚本："lint:eslint":"eslint --fix --ext .vue,.js,.cjs,.mjs"',
      'tip：可配合 lint-staged 使用'
    ],
  },
  {
    title: "适用 vue3",
    filesMap: {
      "vue3.js": ".eslintrc.cjs",
      "_eslintignore": ".eslintignore",
    },
    tips:[
      '开发依赖：eslint eslint-config-prettier eslint-plugin-jsonc eslint-plugin-prettier eslint-plugin-vue jsonc-eslint-parser prettier',
      '添加脚本："lint:eslint":"eslint --fix --ext .vue,.js,.jsx,.cjs,.mjs"',
      'tip：可配合 lint-staged 使用'
    ],
  },
  {
    title: "适用 vue3+ts",
    filesMap: {
      "vue3-ts.js": ".eslintrc.cjs",
      "_eslintignore": ".eslintignore",
    },
    tips:[
      '开发依赖：eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jsonc eslint-plugin-prettier eslint-plugin-vue jsonc-eslint-parser prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript',
      '添加脚本："lint:eslint":"eslint --fix --ext .vue,.ts,.tsx,.jsx,.js,.cjs,.mjs"',
      'tip：可配合 lint-staged 使用'
    ],
  },
  // {
  //   title: "适用 react 项目",
  //   value: "react",
  // }
];
