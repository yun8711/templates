module.exports = [
  {
    title: "适用 vuu2 项目",
    value: "vue2",
    // 需要安装的依赖列表
    dependencies:{
      // 开发依赖
      dev:[
        "eslint",
        "@babel/eslint-parser",
        "eslint-config-prettier",
        "prettier",
        "eslint-plugin-prettier",
        "eslint-plugin-vue",
      ],
    },
    // 文件映射，格式：source:target
    filesMap: {
      "vue2.js": ".eslintrc.js",
      _eslintignore: ".eslintignore",
    },
    hooks:{
      afterInstall(shell, pwd){
        shell.exec('npm pkg set scripts.lint:eslint="eslint --fix --ext .vue,.js,.cjs,.mjs"')
      }
    }
  },
  {
    title: "适用 vuu3 项目",
    value: "vue3",
    dependencies: {
      dev:[
        "eslint",
        "eslint-config-prettier",
        "eslint-plugin-import",
        "eslint-plugin-jsonc",
        "eslint-plugin-prettier",
        "eslint-plugin-vue",
        "jsonc-eslint-parser",
        "prettier",
      ]
    },
    filesMap: {
      "vue3.js": ".eslintrc.js",
      _eslintignore: ".eslintignore",
    },
    hooks:{
      afterInstall(shell, pwd){
        shell.exec('npm pkg set scripts.lint:eslint="eslint --fix --ext .vue,.js,.cjs,.mjs"')
      }
    }
  },
  {
    title: "适用 vuu3+typescript 项目",
    value: "vue3-ts",
    dependencies: {
      dev:[
        "eslint",
        "eslint-config-prettier",
        "eslint-plugin-import",
        "eslint-plugin-jsonc",
        "eslint-plugin-prettier",
        "eslint-plugin-vue",
        "jsonc-eslint-parser",
        "prettier",
        "@typescript-eslint/eslint-plugin",
        "@typescript-eslint/parser",
        "typescript",
      ]
    },
    filesMap: {
      "vue3-ts.js": ".eslintrc.js",
      _eslintignore: ".eslintignore",
    },
    hooks:{
      afterInstall(shell, pwd){
        shell.exec('npm pkg set scripts.lint:eslint="eslint --fix --ext .vue,.ts,.tsx,.jsx,.js,.cjs,.mjs"')
      }
    }
  },
];
