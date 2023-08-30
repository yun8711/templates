module.exports = [
  {
    title: '示例配置',
    dependencies:{
      global: 'ls-lint',
    },
    filesMap: {
      '_ls-lint.yml': '.ls-lint.yml',
    },
    tips:[
      '全局依赖：@ls-lint/ls-lint',
      '添加脚本："lint:ls":"ls-lint --workdir src --warn --debug"',
      'tip：需要配合 pre-commit 使用',
    ],
  },
];
