module.exports = [
  {
    title: "普遍适用",
    value: "default",
    // 需要安装的依赖列表
    dependencies:{
      // 全局依赖
      global:[],
      // 开发依赖
      dev:[
        "prettier"
      ],
      // 生产依赖
      prod:[]
    },
    // 文件映射，格式：source:target
    filesMap: {
      "default.js": ".prettierrc.js",
      prettierignore: ".prettierignore",
    },
  },
];
