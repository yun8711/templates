module.exports = [
  {
    title: "基础配置：vue + scss",
    value: "default",
    // 需要安装的依赖列表
    dependencies:{
      // 开发依赖
      dev:'postcss-html postcss-scss stylelint stylelint-config-recess-order stylelint-config-recommended-vue stylelint-config-standard stylelint-config-standard-scss stylelint-prettier',
    },
    // 文件映射，格式：source:target
    filesMap: {
      "vue.js": ".eslintrc.js",
      stylelintignore: ".stylelintignore",
    },
  }
];
