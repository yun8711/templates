module.exports = [
  {
    title: '示例配置',
    value: 'basic',
    dependencies:{
      global: 'ls-lint',
    },
    filesMap: {
      '_ls-lint.yml': '.ls-lint.yml',
    },
    hooks:{
      afterInstall(shell, pwd){
        shell.exec('npm pkg set scripts.lint:ls="ls-lint --workdir src --warn --debug"')
      }
    }
  },
];
