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
Never manage z-indices that relate to items outside of a component with a hardcoded index. Overlays, Sticky Navigations are examples of items that need a z-index in relation to other components on the page. Use a central managed list of variables in combination with the [zindex](https://github.com/mediamonks/seng-scss/blob/master/utils/function/_zindex.scss) function instead.

#### Vendor prefixes
Never add vendor prefixes in the scss, use [autoprefixer](https://github.com/postcss/autoprefixer) to add them automatically.

#### Inline styles
In general the rule is to use inline styles as little as possible; the more you use it, the more fragmented the styling becomes. This makes it harder for you and especially other devs working on the project to keep track of all the styling. 

Accessibility-wise it also potentially prevents screen readers from overwriting font sizes and colors when needed.

- Never use inline styles if they are static values, always keep it in the respective scss file
- When dealing with more complex (dynamic) values, first check if it's possible to do it within css. `calc()` can be very powerful. If that doesn't give you the desired result, or you are relying on props, inline styles can be applied by using javascript
- When applying inline styles via javascript, always keep the methods that do so within the same component. If you find yourself needing a parent component applying styles on child components, consider making a method in the child component which is then called in the parent
- When working within a mandatory template (usually a header and footer from another party) there might be a need to override some styles to make it work nicely along your website. Try to do most of this "override" in a separate global scss file. Anything more complex (particularly when your website is wrapped in multiple divs) should be consolidated into a `overrideClientStyles()` method on app level  
