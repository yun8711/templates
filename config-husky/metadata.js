module.exports = [
  {
    title: '基础配置：仅安装 husky',
    tips:[
      '添加脚本："prepare":"husky install"',
      '开发依赖：husky',
      'tip：手动添加 git hook',
    ],
  },
  {
    title: '推荐配置：安装husky，增加hook: commit-msg、pre-commit ',
    filesMap: {
      '_husky': '.husky',
    },
    tips:[
      '添加脚本："prepare":"husky install"',
      '开发依赖：husky',
      'tip：commit-msg 钩子中执行 commitlint，pre-commit 钩子中执行 lint-staged',
    ],
  },
];
