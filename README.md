# MediaMonks - Frontend Coding Standards

## CSS

We use [Sass](https://sass-lang.com/) as css preprocessor.

#### Selectors
Only use class names for styling, no id's.

#### z-index
Never use a `z-index` value higher then `4`. If you need more, use the [zindex](https://github.com/mediamonks/seng-scss/blob/master/utils/function/_zindex.scss) function of [seng-scss](https://www.npmjs.com/package/seng-scss).

#### Vendor prefixes
Never add vendor prefixes in the scss, use [autoprefixer](https://github.com/postcss/autoprefixer) to add them automatically. 