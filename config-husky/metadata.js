module.exports = [
  {
    title: '基础配置：仅安装 husky',
    value: 'basic',
    dependencies: {
      dev: 'husky',
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
    title: '推荐配置：安装husky，增加hook: commit-msg、pre-commit ',
    value: 'recommended',
    dependencies: {
      dev: 'husky',
    },
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
