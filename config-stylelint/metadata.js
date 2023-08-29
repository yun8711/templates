module.exports = [
  {
    title: "适用 vue + sass",
    value: "sass",
    // 需要安装的依赖列表
    dependencies:{
      // 开发依赖
      dev:`sass postcss-html postcss-scss stylelint stylelint-config-recess-order stylelint-config-recommended-vue
      stylelint-config-standard stylelint-config-standard-scss stylelint-prettier`,
    },
    // 文件映射，格式：source:target
    filesMap: {
      "vue-sass.cjs": ".stylelintrc.cjs",
      "stylelintignore": ".stylelintignore",
    },
  },
  {
    title: "适用 vue + less",
    value: "less",
    // 需要安装的依赖列表
    dependencies:{
      // 开发依赖
      dev:`less postcss postcss-html postcss-less stylelint stylelint-config-recommended-vue
      stylelint-config-standard-vue stylelint-less stylelint-prettier`,
    },
    // 文件映射，格式：source:target
    filesMap: {
      "vue-less.cjs": ".stylelintrc.cjs",
      "stylelintignore": ".stylelintignore",
    },
  }
];
