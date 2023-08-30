module.exports = [
  {
    title: "适用 vue + sass",
    filesMap: {
      "vue-scss.cjs": ".stylelintrc.cjs",
      "_stylelintignore": ".stylelintignore",
    },
    tips:[
      '开发依赖：sass postcss-html postcss-scss stylelint stylelint-config-recess-order stylelint-config-recommended-vue stylelint-config-standard stylelint-config-standard-scss stylelint-prettier',
      '添加脚本："lint:style":"stylelint \"**/*.{css,scss,sass,vue}\" --allow-empty-input --fix"',
      'tip：可配合 lint-staged 使用'
    ],
  },
  {
    title: "适用 vue + less",
    filesMap: {
      "vue-less.cjs": ".stylelintrc.cjs",
      "_stylelintignore": ".stylelintignore",
    },
    tips:[
      '开发依赖：less postcss postcss-html postcss-less stylelint stylelint-config-recommended-vue stylelint-config-standard-vue stylelint-less stylelint-prettier',
      '添加脚本："lint:style":"stylelint \"**/*.{css,scss,sass,vue}\" --allow-empty-input --fix"',
      'tip：可配合 lint-staged 使用'
    ],
  }
];
