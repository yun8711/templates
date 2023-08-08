module.exports = [
  // 方案一：只进行commitlint检查
  {
    title: '只有 commitlint',
    value: 'commitlint',
    dependencies: {
      dev: ['@commitlint/cli', '@commitlint/config-conventional'],
    },
    filesMap: {
      'only-commit.js': 'commitlint.config.cjs',
    },
    hooks: {
      afterInstall: (shell, pwd) => {
        console.info('commitlint 需要配置git hook 使用，可以使用 husky 或者 git-hook');
      },
    },
  },
  // 方案二：commitlint + czg
  {
    title: 'commitlint + czg',
    value: 'commitlint-czg',
    dependencies: {
      global: ['czg'],
      dev: ['@commitlint/cli', '@commitlint/config-conventional'],
    },
    filesMap: {
      'commit-czg.js': 'commitlint.config.cjs',
    },
    hooks: {
      afterInstall: (shell, pwd) => {
        shell.exec('npm pkg set scripts.commit="czg"');
        console.info('commitlint 需要配置git hook 使用，可以使用 husky 或者 git-hook');
      },
    },
  },
  // 方案三：commitlint + czg + release-it
  {
    title: 'commitlint，czg，release-it',
    value: 'commitlint-czg-release',
    // 需要安装的依赖列表
    dependencies: {
      // 全局依赖
      global: ['czg'],
      // 开发依赖
      dev: ['@commitlint/cli', '@commitlint/config-conventional', 'release-it', '@release-it/conventional-changelog'],
      // 生产依赖
      prod: [],
    },
    // 文件映射，格式：source:target
    filesMap: {
      'commit-czg.js': 'commitlint.config.cjs',
      'default-release.js': '.release-it.cjs',
    },
    // 需要执行的命令，以hook的形式
    hooks: {
      afterInstall: (shell, pwd) => {
        shell.exec('npm pkg set scripts.commit="czg"');
        shell.exec('npm pkg set scripts.release="release-it --config .release-it.cjs"');
        console.info('commitlint 需要配置git hook 使用，可以使用 husky 或者 git-hook');
      },
    },
  },
];
