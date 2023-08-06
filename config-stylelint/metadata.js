module.exports = [
  {
    title: "适用 vue 项目",
    value: "default",
    // 需要安装的依赖列表
    dependencies:{
      // 全局依赖
      global:[],
      // 开发依赖
      dev:[
        "postcss-html",
        "postcss-scss",
        "stylelint",
        "stylelint-config-recess-order",
        "stylelint-config-recommended-vue",
        "stylelint-config-standard",
        "stylelint-config-standard-scss",
        "stylelint-prettier"
      ],
      // 生产依赖
      prod:[]
    },
    // 文件映射，格式：source:target
    filesMap: {
      "vue.js": ".eslintrc.js",
      stylelintignore: ".stylelintignore",
    },
  }
];
