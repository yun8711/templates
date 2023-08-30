module.exports = [
  // 方案一：只进行commitlint检查
  {
    title: 'commitlint 校验提交信息',
    filesMap: {
      'only-commit.js': 'commitlint.config.cjs',
    },
    tips:[
      '开发依赖：@commitlint/cli @commitlint/config-conventional',
      'tip：commitlint 需要配合 git hook 使用'
    ],
  },
  // 方案二：commitlint + czg
  {
    title: 'commitlint 校验提交信息，czg 辅助提交',
    filesMap: {
      'commit-czg.js': 'commitlint.config.cjs',
    },
    tips:[
      '全局依赖：czg',
      '开发依赖：@commitlint/cli @commitlint/config-conventional',
      '添加脚本："commit":"czg"',
      'tip：commitlint 需要配合 git hook 使用',
    ],
  },
  // 方案三：commitlint + czg + release-it
  {
    title: 'commitlint 校验提交信息，czg 辅助提交，release-it 版本发布',
    filesMap: {
      'commit-czg.js': 'commitlint.config.cjs',
      'default-release.js': '.release-it.cjs',
    },
    tips:[
      '全局依赖：czg',
      '开发依赖：@commitlint/cli @commitlint/config-conventional release-it @release-it/conventional-changelog',
      '添加脚本："commit":"czg"',
      '添加脚本："release":"release-it --config .release-it.cjs"',
      'tip：commitlint 需要配合 git hook 使用',
    ],
  },
  // {
  //   title: "commitlint 校验提交信息，standard-version 版本发布",
  //   value: 'commitlint-standard',
  //   // 需要安装的依赖列表
  //   dependencies: {
  //     // 全局依赖
  //     // global: 'czg',
  //     // 开发依赖
  //     dev: '@commitlint/cli @commitlint/config-conventional standard-version',
  //   },
  //   // 文件映射，格式：source:target
  //   filesMap: {
  //     'commit-czg.js': 'commitlint.config.cjs',
  //     'default-release.js': '.release-it.cjs',
  //   },
  //   // 需要执行的命令，以hook的形式
  //   hooks: {
  //     afterInstall: (shell, pwd) => {
  //       shell.exec('npm pkg set scripts.commit="czg"');
  //       shell.exec('npm pkg set scripts.release="release-it --config .release-it.cjs"');
  //       console.info('commitlint 需要配置git hook 使用，可以使用 husky 或者 git-hook');
  //     },
  //   },
  // }
];
