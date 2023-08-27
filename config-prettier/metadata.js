module.exports = [
  {
    title: "完整配置",
    value: "all",
    // 需要安装的依赖列表
    dependencies:{
      dev:"prettier",
    },
    // 文件映射，格式：source:target
    filesMap: {
      "all.js": ".prettierrc.js",
      prettierignore: ".prettierignore",
    },
    hooks:{
      afterInstall(shell, pwd){
        shell.exec('npm pkg set scripts.format="prettier --write ."')
      }
    }
  },
  {
    title: "推荐配置",
    value: "recommend",
    // 需要安装的依赖列表
    dependencies:{
      dev:"prettier",
    },
    // 文件映射，格式：source:target
    filesMap: {
      "recommend.js": ".prettierrc.js",
      prettierignore: ".prettierignore",
    },
    hooks:{
      afterInstall(shell, pwd){
        shell.exec('npm pkg set scripts.format="prettier --write ."')
      }
    }
  },
];
