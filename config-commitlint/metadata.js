module.exports = [
  {
    title: "@commitlint，czg，release-it",
    value: "default",
    // 需要安装的依赖列表
    dependencies:{
      // 全局依赖
      global:[
        "czg"
      ],
      // 开发依赖
      dev:[
        "@commitlint/cli",
        "@commitlint/config-conventional",
        "release-it",
        "@release-it/conventional-changelog"
      ],
      // 生产依赖
      prod:[]
    },
    // 文件映射，格式：source:target
    filesMap: {
      "default.js": "commitlint.config.cjs",
    },
  },
];
