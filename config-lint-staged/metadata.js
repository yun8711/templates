module.exports = [
  {
    title: '示例配置',
    dependencies: {
      dev: 'lint-staged',
    },
    filesMap: {
      'example.js': 'lint-staged.config.cjs',
    },
    tips:[
      '开发依赖：lint-staged',
      'tip：在 pre-commit hook 中添加 npx lint-staged --allow-empty',
    ],
  },
];
