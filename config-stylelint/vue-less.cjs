module.exports ={
  "extends": [
    "stylelint-config-recommended-vue",
    "stylelint-config-standard-vue"
  ],
  "plugins": ["stylelint-order", "stylelint-less"],
  "overrides": [
    {
      "files": ["**/*.(less|vue)"],
      "customSyntax": "postcss-less"
    },
    {
      "files": ["**/*.(html|vue)"],
      "customSyntax": "postcss-html"
    },
    {
      "files": ["./demo/src/examples/**/*.vue"],
      "rules": {
        "max-empty-lines": 0,
        "declaration-empty-line-before": "never",
        "rule-empty-line-before": "never"
      }
    }
  ],
  "rules": {
    "max-nesting-depth": 4,
    "selector-max-compound-selectors": 3,
    "function-url-quotes": null,
    "property-no-unknown": null,
    "no-empty-source": null,
    "no-descending-specificity": null,
    "declaration-empty-line-before": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": ["deep", "v-deep", "global"]
      }
    ],
    "order/properties-order": [
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",
      "display",
      "justify-content",
      "align-items",
      "float",
      "clear",
      "overflow",
      "overflow-x",
      "overflow-y",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "font-size",
      "font-family",
      "font-weight",
      "border",
      "border-top",
      "border-right",
      "border-bottom",
      "border-left",
      "border-radius",
      "text-align",
      "text-justify",
      "text-indent",
      "text-overflow",
      "text-decoration",
      "white-space",
      "color",
      "background",
      "background-position",
      "background-repeat",
      "background-size",
      "background-color",
      "background-clip",
      "opacity",
      "filter",
      "list-style",
      "outline",
      "visibility",
      "box-shadow",
      "text-shadow",
      "resize",
      "transition"
    ]
  }
}
