module.exports = [
  {
    title: "完整配置项",
    value: "all",
    // 需要安装的依赖列表
    dependencies:{
      dev:"prettier",
    },
    // 文件映射，格式：source:target
    filesMap: {
      "all.js": ".prettierrc.cjs",
      prettierignore: ".prettierignore",
    },
    hooks:{
      afterInstall(shell, pwd){
        shell.exec('npm pkg set scripts.format="prettier --write ."')
      }
    }
  },
];
