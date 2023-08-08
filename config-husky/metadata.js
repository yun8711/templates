module.exports = [
  {
    title: '基础配置：只安装 husky',
    value: 'basic',
    // 需要安装的依赖列表
    dependencies: {
      // 开发依赖
      dev: ['husky'],
    },
    // 文件映射，格式：source:target
    filesMap: {
      '_husky-basic': '.husky',
    },
    hooks: {
      beforeInstall: (shell, pwd) => {
        shell.exec('npm pkg set scripts.prepare="husky install"');
      },
      afterInstall: (shell, pwd) => {
        shell.exec('npm run prepare');
      },
    },
  },
  {
    title: '推荐配置：commit-msg，pre-commit',
    value: 'recommended',
    dependencies: {
      // 开发依赖
      dev: ['husky'],
    },
    // 文件映射，格式：source:target
    filesMap: {
      '_husky-ly': '.husky',
    },
    hooks: {
      beforeInstall: (shell, pwd) => {
        shell.exec('npm pkg set scripts.prepare="husky install"');
      },
      afterInstall: (shell, pwd) => {
        shell.exec('npm run prepare');
      },
    },
  },
];
