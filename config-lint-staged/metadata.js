module.exports = [
  {
    title: '示例配置',
    value: 'basic',
    dependencies: {
      dev: 'lint-staged',
    },
    filesMap: {
      'lint-staged-example.js': 'lint-staged.config.cjs',
    },
    hooks: {
      afterInstall: (shell, pwd) => {
        console.info('lint-staged 需要配置 pre-commit hook 使用');
      },
    },
  },
];
