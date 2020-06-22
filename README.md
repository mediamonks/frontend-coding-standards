# MediaMonks - Frontend Coding Standards

## CSS

We use [Sass](https://sass-lang.com/) as css preprocessor.

#### Selectors
- Only use class names for styling, no id's
- Use snake case for selectors (eg `.image-wrapper`)
- When targeting any element add a class to it when possible to be more specific (eg `.list` instead of `ul`) to retain styles when the html element is changed (eg from `ul` to `ol`)
- When using mixins always put them as the first properties of the selector, it looks neat and this way they can be (partially) overridden when needed:
```
.header {
    @include size(100%, 10rem);
    background-color: white;
    ...
    
    &.is-small {
        height: 5rem;
    }
}
```
- When using a modifier use `&.{modifier-name}` at the end of the selector (see above example) . When one modifier affect multiple child elements add it to the parent element (after its properties) and nested selectors instead


#### z-index
Never use a `z-index` value higher then `4`. If you need more, use the [zindex](https://github.com/mediamonks/seng-scss/blob/master/utils/function/_zindex.scss) function of [seng-scss](https://www.npmjs.com/package/seng-scss).

#### Vendor prefixes
Never add vendor prefixes in the scss, use [autoprefixer](https://github.com/postcss/autoprefixer) to add them automatically. 