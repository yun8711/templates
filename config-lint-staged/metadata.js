module.exports = [
  {
    title: '基础配置：示例',
    value: 'basic',
    // 需要安装的依赖列表
    dependencies: {
      // 开发依赖
      dev: 'lint-staged',
    },
    // 文件映射，格式：source:target
    filesMap: {
      'lint-staged-example.js': 'lint-staged.config.cjs',
    },
    hooks: {
      // beforeInstall: (shell, pwd) => {
      //   shell.exec('npm pkg set scripts.prepare="husky install"');
      // },
      afterInstall: (shell, pwd) => {
        console.info('lint-staged 需要配置 pre-commit hook 使用');
      },
    },
  },
];
