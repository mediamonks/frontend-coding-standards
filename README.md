# MediaMonks - Frontend Coding Standards

[Based on Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript/)

## Table of Contents

1. [ESLint](#eslint)
2. [Naming](#naming)
   1. [Casing](#casing)
   2. [File names](#file-names)
3. [Coding](#coding)
4. [Formatting](#formatting)
5. [Comments](#comments)
6. [TypeScript](#typescript)
7. [CSS](#css)
   1. [Introduction](#introduction) 
   2. [Disclaimer](#disclaimer)
   3. [z-index](#z-index)
8. [GIT](#git)
   1. [Branches](#branches)
   2. [Commit messages](#commit-messages)
   3. [Code Reviews](#code-reviews)
9. [Node.js](#node.js)
10. [Recommended Frameworks](#recommended-frameworks)
    1. [React](#react)
    2. [Vue](#vue)
    3. [Muban](#muban)
11. [Recommended Libraries](#recommended-libraries)
12. [Definition of Done Checklist](#definition-of-done-checklist)
13. [Development environment](#development-environment)
    1. [VSCode](#vscode)
    2. [WebStorm](#webstorm)

## ESLint

Please install our [ESLint Configuration](https://www.npmjs.com/package/@mediamonks/eslint-config)
to enforce the _MediaMonks - Frontend Coding Standards_ in your project.

## Naming

Choosing good names is critical to creating code that is easy to use and easy to understand. You
should always take the time to think about whether you have chosen the right name for something,
especially if it is part of the public API.

#### English

All code, names, comments, etc. must be in English.

> Tip: install a spell checker in your IDE to avoid typos.
> [VSCode](#recommended-extensions-for-vscode) or [WebStorm](#recommended-plugins-for-webstorm)

#### Use one name for one thing

Do not reuse names. Do not use names that can mean multiple things. Always use the same name for the
same thing. So use the same name within the JavaScript, CSS and HTML for the same thing. Align
naming with the whole team: Backend, Frontend, UX, Design, PM, client, etc.

For big projects with their own jargon it could help to create a dictionary.

#### Descriptive

Names must be descriptive for the working or usage of the class, method or variable.

###### The name should always end with what the object is.

For example: a button must always end with `Button`.

- `MenuButton` a button used in the menu
- `ButtonMenu` a menu with buttons
- `MenuButtonIcon` an icon in the button of the menu

There is no limit for the length of a name, so prefer a long name which is clear and descriptive
than a short name which is not clear.

#### Context

A name should make sense within its context and should not have unnecessary information for that
context. For example a variable that holds the name of a user can be named `name` within a `User`
context. However if you need to hold the name of a user in another place, `userName` might be a
better name. Adding `user` within a `User` context (`user.userName`) is redundant and should be
avoided.

#### Abbreviations

Avoid them as a general rule. For example, `calculateOptimalValue()` is a better method name than
`calcOptVal()`. Being clear is more important than minimizing keystrokes. If you don't abbreviate,
developers won't have to remember whether you shortened a word like _qualified_ to `qual` or `qlfd`.

Abbreviations that are part of the HTML, CSS and/or JavaScript API are allowed, like:

- `url` for Uniform Resource Locator
- `uri` for Uniform Resource Identifier
- `src` for source
- `dom` for Document Object Model
- `img` for image

You should only use these abbreviations within the same context. So only use `img` if you refer to
an HTML Image Tag. (`<img>`)

We have standardized on a few abbreviations that are allowed to use:

- `app` for application
- `args` for arguments
- `auto` for automatic, as in `autoLayout`
- `bin` for binary
- `cta` for "Call to action". It's the part of the application that the user needs to click in order
  to take the action you want them to take.
- `fps` for frames per second
- `id` for identifier. Please note that 'd' should be written in lowercase when used in combination
  with another word, like `userId`.
- `info` for information, as in `GridRowInfo`
- `init` for initialize
- `lib` for library
- `max` for maximum, as in `maxHeight`
- `min` for minimum, as in `minWidth`
- `param` or `params` for parameter or parameters respectively
- `prop` or `props` for property or properties respectively
- `ref` for reference
- `temp` for temporary
- `ui` for user interface
- `util` or `utils` for utility or utilities, as in `StringUtils`

```js
// bad
prevButton.addEventListener('click', onPrevClick);

// good
previousButton.addEventListener('click', onPreviousClick);
```
```js
// bad
buttons.forEach(elm => {
  //...
});

// better
buttons.forEach((element) => { // prettier should add brackets by default
  //...
});

// best
buttons.forEach((button) => {
  //...
});
```

#### Plural or singular?

##### Classes, Interfaces, Types and Enums

Should always have a **singular** name, unless the object is only used to hold other values and
these other value are more important then the object itself, like `Props`, `Settings` or `Options`.
For example: `MyComponentProps`, `ProductionSettings` or `CalendarOptions`.

##### Arrays

Or other kind of lists should have a plural name or end with `List` or `Collection`, like
`userList`.

##### Folders

If a folder holds multiple files, but all related to one main type, it should have a singular name.
If it holds multiple main files of a type, it should have a plural name.

For example, the folder `page` contains a single page, with maybe some helper files. The folder
`pages` contains multiple pages.

#### Functions

Prefer using a verb as a name to indicate it will do something. Like `render`, `open` or `getData`.

#### Classes, variables, properties, etc.

All non-functions should have a noun as a name, not a verb.

#### Getters and setters

Although getters and setters are technically functions, they are used as if they are properties.
Therefore, their name should be a noun.

> Some frameworks support `computed` properties. They work like getters, so their name should be a
> noun as well.

#### Booleans

Should start with `is`, `has`, `will` or `should`. Like `isValid` or `hasValues`.

#### Handlers and callbacks

To indicate that a function or property is used as a callback or handler you can start the name with
`on`, like: `onClick`, `onLoadComplete`, `onResize`.
Do not postfix the name with `handler` since this is redundant when there is already an `on`.

Also note that a name of only `on` + `event name` might not be descriptive enough, depending on the 
context. Using a more descriptive name is recommended.

```js
// bad
function complete() {
  //...
}

// bad
function handleComplete() {
  //...
}

// bad
function completeHander() {
  //...
}

// bad
function onCompleteHander() {
  //...
}

// good
function onComplete() {
  //...
}

// better
function onImageLoadComplete() {
  //...
}
```

#### Always Affirmative

Avoid negations. _“Don’t ever not avoid negative logic”_. Prefer `isShown` over `isHidden` or
`isEnabled` over `isDisabled`. Do not use names like `notEditable`.

#### Prefixes

We are not using prefixes for any name. Interfaces should follow the exact naming rules as classes,
and should not use the `I` or any other pre- or postfix.

#### TypeScript Generics

If the usages of the generic is obvious, then naming that generic `T` is sufficient. As long as the
usage is clear you can use `U`, `V` etc. for any following generic.

If the usage is not obvious, you should use a more descriptive name. The same naming rules as for
classes will apply then.

```ts
// bad, prefix generics with T
class Response<TResponseData> {
  public data: TResponseData;
}

// good, use common abbreviations like T(ype), K(ey), V(alue), P(roperty) etc.
type Partial<T> = { [P in keyof T]?: T[P]; };

// better, add more semantic context by extending the type
type ResponseData = Record<string, unknown>;

class Response<T extends ResponseData> {
  public data: T;
}
```

#### Interfaces and type aliases
Depending on the use case there is a choice to implement an
[interface or type alias](https://github.com/typescript-cheatsheets/react#useful-table-for-types-vs-interfaces),
but be aware using types impacts [compilation performance](https://ncjamieson.com/prefer-interfaces/).


```ts
// bad, you should not prefix interfaces with I
interface IResponse {
  //...
};

// bad, prefix types with T
type TResponse = {
  //...
};


// good, no prefix
interface Response {
  //...
};

// good, no prefix
type Response = {
  //...
};
```

### Casing

#### Classes, Interfaces, Types and Generics

**PascalCase** Every individual word start with an upper case character, no underscores, no dashes.

#### Functions, properties, arguments and variables

**camelCase** Starts with a lower case character, every following individual word start with an upper
case character, no underscores, no dashes.

##### Properties with a getter and/or setter

When a private property has a public getter and/or setter, it's recommended to prefix the private
property with an underscore (`_`) to prevent naming conflicts.

> Note that prefixing a property name with an underscore is not allowed by the ESLint configuration.
> So in order to do this you need to disable this linting rule for this line.

```ts
// eslint-disable-next-line @typescript-eslint/naming-convention
private _isActive: boolean = false;

public get isActive(): boolean {
  return this._isActive;
}
```

#### Globally used constants

**SNAKE_UPPER_CASE** Only use upper case characters, individual words must be separated with an
underscore.

#### CSS Class names

**kebab-case** Only use lower case characters, individual words must be separated with a dash.

#### Abbreviations and Acronyms

Abbreviations and acronyms should be treated as words, which means only the first character will be
capitalized for camelCase and PascalCase.

```ts
const jsonApiSdkUrl = new JsonApiSdkUrl();
```

### File names

If a file contains only one class, type or object, or when there is one main class, type or object
with some helper classes, types or objects, the file should have the same name, in the same casing,
as that (main) class, type or object. If a file contains a class, but only an instance of that class
is exported, the file should have the same name as the class, but written in camelCase.

If a file holds multiple classes, types and/or objects, and they are all more or less equal in
importance, the file should have a name that describes all the classes, types and/or objects,
written in camelCase.

#### File extensions

#### .js

JavaScript only

#### .ts

TypeScript only

#### .jsx

JavaScript with JSX syntax. If a file has the `.jsx` extension, it must contain JSX code.

#### .tsx

TypeScript with JSX syntax. If a file has the `.tsx` extension, it must contain JSX code.

## Coding

Every function or class should do **one thing** (and do it good). If it needs to do more than one
thing, split it up. Keep your files, classes and functions small. It’s okay to have a file with just
a single line.

### Functions 

#### Pure functions

Prefer writing pure functions, which means they do not manipulate the input arguments or
reference/manipulate global state. This makes your code better scalable and testable.

#### Arrow functions

Prefer to use arrow functions when `this` should be bound to the outside context, and not to the function itself.
Arrow functions do not have their own context, so it will lexically go up a scope, and use the value of `this` in the scope in which it was defined.

```
const human = {
  message: 'Hello, World!',
  say() {
    setTimeout(() => {
      console.log(this.message);
    }, 1000);
  }
};
```

Also arrow functions are good in case of inline callbacks, which are most often found in `map`, `filter`, `reduce` methods in order 
to improve code readability.

```
[1, 2, 3]
  .map((x) => x * 5)
  .filter((x) => x < 10)
```

Prefer to use keyword `function` to create functions in cases:

- Function is at top level
- Function contains complex logic
- If there are no advantages to using the arrow function

Benefits of using the keyword `function` instead of arrow function:

- Function is not anonymous and has a name, so you get a better stack trace in case of an error
- [Hoisting](https://ui.dev/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/) allows a function to be used before it is declared, so the order is not important

Example of creating a function using the `function` keyword:

```
function secondsToDurationFormat(value: number): string {
  const days = Math.floor((value / 86400) % 365);
  const hours = Math.floor((value / 3600) % 24);
  const minutes = Math.floor((value / 60) % 60);
  const seconds = Math.floor(value % 60);

  return `P${days}DT${hours}H${minutes}M${seconds}S`;
};
```

### Separate Logic From Configuration

Write code that is reusable, scalable and testable.

### Do not repeat yourself (DRY)

- Do not copy code to another place.
- Avoid using the same string twice in a project.
- Move shared logic to a shared place.
- Make sure you do not have to adapt changes in multiple places.

### Do not use Magic Numbers

See https://en.wikipedia.org/wiki/Magic_number_(programming)


### Default in a switch

Every `switch` must have a `default`. If there is no need to handle the `default`, either throw an
`Error` or add a comment that the default is explicitly ignored.

```js
switch (state) {
  case 1: {
    // ....
    break;
  }
  case 2: {
    // ....
    break;
  }
  default: {
    throw new Error(`Unhandled value for state '${state}'`);
  }
}
```

_throw an error for things that should not occur_

```js
switch (state) {
  case 1: {
    // ....
    break;
  }
  case 2: {
    // ....
    break;
  }
  default: {
    // do nothing
    break;
  }
}
```

_add a comment that the default is explicit ignored_

Adding the comment makes it clear the developer did not forget to implement the default.

## Formatting

All code within a project should have the same formatting. To enforce that we use
[Prettier](https://prettier.io/).

## Comments

#### Documentation comments

Reconsider if your code really needs comments. Code should be self explaining. Don't add comments
that already tell what code does (by just repeating) or that are needed in order for the code to
make any sense. Code that needs such comments is probably bad. Instead, it is recommended to write
the intention of the code.

If you're new to a project or piece of code, when going over it, and trying to understand it, add
explanatory comments on things that took you some time to figure out.

If someone else asks during a code review why something is done a certain way, see if you can answer
it with a code comment instead of a reply in the review tool (when applicable).

#### Regular Expressions

Since regular expressions can be hard to read, they should have a comment that indicate what they
do. Especially when they are complex.

#### Commented out code

Don't leave commented out code into project. You can always find it back in the version control
system. If for some reason you want to keep commented out code in the project, add a comment
explaining why it is commented out.

#### TODO

If something needs to be changed or refactored later, add a `// TODO ` comment to indicate what the
issue is.

#### Refactoring

If you refactor code that has comments, please check afterwards if the comments still make sense or
need to be updated.

## TypeScript

Use TypeScript in strict mode and do not allow native JavaScript. Therefore everything must be
typed. It’s not needed to type something when TypeScript can resolve the type.

#### Access Modifiers

Keep your code as strict as possible, so keep all functions and properties `private` unless they
have to be `protected` or `public`.

Explicitly define whether your `constructor` functions are for internal or external interfaces.

```ts
// bad
constructor() {
  //...
}

// good
public constructor() {
  //...
}
```

#### Readonly

In order to be as strict as possible, every property should be set to readonly unless it should be
writable.

#### Arrays

Always prefer `ReadonlyArray` over a regular `Array` unless it must be possible to modify the Array.

Arrays should be typed as `Array<T>` rather than `T[]` for consistency.

#### Return types

Although return types are optional for TypeScript (TypeScript is very good at figuring out what the 
return type of a function is) it is absolutely recommended to explicitly add a return type for 
public (API) functions.

Adding a return type improves readability and can also help to prevent bugs. Accidentally returning 
the wrong type would not cause an error in the function declaration if there is no explicit return 
type set.

## CSS

### Introduction
This document is written to capture the conventions of writing styles for our projects. Many of the rules will be or are part of our linter and prettier settings. Due to variety of our projects and methods there might be a need for a more detailed approach per situation. This might also impact how code is being organized, structured on an architectonic level. Therefore, this part of the conventions will focus on the rules that are applicable to the majority of our implementation methods.

### Disclaimer
It's important to note that client and project requirements always undo choices made in these guidelines

### Z-index
The use of z-index can cause unwanted side effects that can be tricky to debug and manage. To avoid relying on `z-index: 99999;` we use an [scss function](https://github.com/mediamonks/seng-scss/blob/master/utils/function/_zindex.scss) in most of our frameworks, which is part of seng-scss. The indices of the list items will update when new items are added. This will help increase the maintainability.
```scss
// Maintained in variables.scss
$zLayout: default header overlay;

.overlay {
  inset: 0;
  position: fixed;
  z-index: zindex($zLayout, overlay);
}
```
It's recommended to use this `$zLayout` in situations where its z-index needs to be compared to other components. For z-axis hierarchies within components a numerical approach is allowed (and perhaps recommended) or create a local variable.

For environments that use a css-in-js solution it's recommended to use a similar approach. In the following example a numeric enum is used:

```ts
// Using a numeric enum to create a z-index map
enum ZIndex {
  Navigation = 1,

  // Value for 'Dialog' will automatically be set to 2 by the Typescript compiler
  Dialog
}

export const Navigation = styled.nav`
  ...
  z-index: ${ZIndex.Navigation}
`

export const Dialog = styled.dialog`
  ...
  z-index: ${ZIndex.Dialog}
`
```

## GIT

### Branches

We use [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) for our branching
strategy.

Branch names should adhere to the following structure:

- `bugfix` or `feature` + `/` + `{TICKET_KEY}-{TICKET_TITLE}` e.g.
  `bugfix/AB-1234-accessibility-homepage-contrast`

#### Automatic deployment of branches

Some projects will automatically deploy to an environment when pushing commits into a specific
branch. Which branch is connected to which environment should be written in the `README.md` of the
project.

### Commit messages

Please read: https://chris.beams.io/posts/git-commit/

- If possible, add the key of the corresponding ticket in the commit message.
- Make sure it is always clear why a change was made.
- Only commit one feature at the time.
- Always check your commit in details to avoid committing wrong code.

### Code Reviews

Always let someone else review your code in the Pull/Merge Request. Make sure all code review
comments are resolved, before you merge it! Please read our
[Pull Request Guidelines](https://github.com/mediamonks/frontend-coding-standards/blob/main/creating-pull-requests.md).

## Node.js

### nvm

When setting up Node.js on a new machine, it is strongly recommended to use a versioning tool such
as [nvm](https://github.com/nvm-sh/nvm). There are often times when we must switch between versions
for testing or for certain features. Tools such as [nvm](https://github.com/nvm-sh/nvm) make this
easy and simple.

### Long-term support

You **must** always use the **LTS** (Long-term support) version of Node.js as it is considered
stable and will ensure that you don't encounter any unexpected issues. Furthermore, when creating a
new project or tool, it **must** always target the **LTS** version, unless there is a good reason
not to e.g. an experimental tool or long-term project. To find out the current LTS version, you can
use a tool such as [nvm](https://github.com/nvm-sh/nvm) or simply check the Node.js
[website](https://nodejs.org/en/download).

## Recommended Frameworks

### React

We recommend using [React](https://reactjs.org/) for large Single Page Applications (SPA's). React
is suited for long term projects that need stable and maintainable code. React works great together
with [TypeScript](https://www.typescriptlang.org/).

##### Getting started

Start a new React project with one of our
[custom templates](https://github.com/mediamonks/cra-template).

### Vue

We recommend using [Vue](https://vuejs.org/) for 'campaign like' Single Page Applications (SPA's).
Vue is suited for projects that needs complex interaction, flexibility and fast development.

##### Getting Started

Start a new Vue project with [Vue Skeleton](https://github.com/hjeti/vue-skeleton).

### Muban

We recommend using [Muban](https://github.com/mediamonks/muban) for Server Rendered Websites. Muban
makes integration into CMS systems, like
[AEM](https://www.adobe.com/marketing/experience-manager.html), [Drupal](https://www.drupal.org/),
[Liferay](https://www.liferay.com/) and [Umbraco](https://umbraco.com/) easier.

## Recommended Libraries

#### Animation & UI

- [classnames](https://www.npmjs.com/package/classnames) - A simple JavaScript utility for
  conditionally joining classNames together.
- [Draggable](https://greensock.com/draggable/) - Green Sock library for dragging elements
- [grid-overlay](https://www.npmjs.com/package/qa-tools) - provides developers a customizable,
  responsive grid-overlay to compare with the layout provided by design to compare layouts
- [GSAP](https://greensock.com/gsap/) - Green Sock Animation Platform -Animation library
- [Litepicker](https://github.com/ThijsTyZ/Litepicker) - Date range picker - lightweight, no
  dependencies
- [Lottie](http://airbnb.io/lottie/) - parses Adobe After Effects animations exported as json with
  Bodymovin and renders them natively on mobile and on the web
- [scroll-tracker-component-manager](https://www.npmjs.com/package/scroll-tracker-component-manager) -
  The ScrollTrackerComponentManager is a Class that tracks whether a component is within your
  viewport based on your scroll position.
- [seng-scss](https://www.npmjs.com/package/seng-scss) - An SCSS library of mixins and functions
- [seng-device-state-tracker](https://github.com/mediamonks/seng-device-state-tracker) -
  DeviceStateTracker is a utility class that tracks which media query is currently active using the
  matchMedia API.
- [storybook](https://github.com/storybookjs/storybook) - UI component dev & test

#### Coding

- [axios](https://github.com/axios/axios) - Promise based HTTP client
- [bowser](https://www.npmjs.com/package/bowser) - A small, fast and rich-API
  browser/platform/engine detector
- [date-fns](https://www.npmjs.com/package/date-fns) - provides the most comprehensive, yet simple
  and consistent toolset for manipulating JavaScript dates
- [i18next](https://www.npmjs.com/package/i18next) - Internationalization library
- [lodash](https://lodash.com/) - A modern JavaScript utility library delivering modularity,
  performance & extras.
- [seng-disposable-event-listener](https://www.npmjs.com/package/seng-disposable-event-listener) -
  event listening management
- [seng-disposable-manager](https://www.npmjs.com/package/seng-disposable-manager) - event
  management
- [seng-event](https://www.npmjs.com/package/seng-event) - Provides Classes and utilities for
  dispatching and listening to events.
- [Yup](https://github.com/jquense/yup) - Form validation

#### TypeScript

- [isntnt](https://www.npmjs.com/package/isntnt) - Composable TypeScript predicate
- [ts-essentials](https://www.npmjs.com/package/ts-essentials) - TypeScript utilities

#### React

- [Formik](https://jaredpalmer.com/formik/) - Forms
- [MobX](https://mobx.js.org/README.html) - Simple, scalable state management
- [React Router](https://reacttraining.com/react-router/) - Router library for React
- [react-i18next](https://react.i18next.com/) - Internationalization library for React
- [react-intl](https://www.npmjs.com/package/react-intl) - Internationalization library for React
- [router-path](https://www.npmjs.com/package/router-path) - Dynamic route path creator

##### Redux

- [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps
- [redux-actions](https://www.npmjs.com/package/redux-actions) - Flux Standard Action utilities for
  Redux.
- [redux-thunk](https://github.com/reduxjs/redux-thunk) - Thunk middleware for Redux.
- [reselect](https://github.com/reduxjs/reselect) - Selector library for Redux
- [typesafe-actions](https://www.npmjs.com/package/typesafe-actions) - Typesafe utilities designed
  to reduce types verbosity and complexity in Redux Architecture.

#### Vue

- [vue-transition-component](https://www.npmjs.com/package/vue-transition-component) - Provides
  GreenSock transition functionality to vue.js components.
- [vuex-persistedstate](https://www.npmjs.com/package/vuex-persistedstate) - Persist Vuex state with
  localStorage.
- [vuex](https://vuex.vuejs.org/) - State management pattern + library for Vue.js applications

#### Muban

- [controller-controller](https://www.npmjs.com/package/controller-controller) - Manage different
  controllers based on viewport.

#### Development

- [patch-package](https://www.npmjs.com/package/patch-package) - Lets app authors instantly make and
  keep fixes to npm dependencies.
- [connect-api-mocker](https://www.npmjs.com/package/connect-api-mocker) - Middleware that fakes
  REST API server with filesystem.

##### Getting Started

Start a new Muban project with the
[Quick Start guide](https://github.com/mediamonks/muban#-quick-start).

## Definition of Done Checklist

#### Before Starting feature

- [x] Read the ticket. If no ticket is present, create one yourself or ask the Project Manager to
      create one.
- [x] Make sure the ticket is clear and actionable. If not, reassign the ticket to the person
      responsible for the creation of the tickets (the project manager or project lead) until the
      ticket is 100% clear.
- [x] Create a feature branch (`feature/ticket-number-feature-name` or for Jira use the default
      branch name when creating a branch from a ticket).

#### General Tasks

- [x] Double check if feature is properly working on all browsers specified in the browser matrix.
- [x] Double check if feature is properly working on all resolutions.
- [x] Review all commits and check if there is room for improvement.
- [x] Could any of the functions you wrote be reused in other components/features? If so, rewrite it
      and restart the checklist process.
- [x] Ask yourself in which scenarios could this fail?
- [x] Make sure to check that you are handling possible error cases.
- [x] Merge latest develop into branch and see if there are no conflicts. If there are conflicts
      please ask for help if you don't know which part of the code should stay.
- [x] Remove unnecessary comments.
- [x] Check the name and semantics of all functions, properties, variables etc. Do they still make
      sense? Could someone that doesn't know the code understand what it is doing?
- [x] Read your code again. Do you think it can be done better or optimized? Do it. Start process
      again.
- [x] Read the description of the ticket / email again. Did you really do what is asked for? Does
      your change solve the issue?
- [x] Run build tasks and see if they work.
- [x] Does your project have code that isn't used anymore? Throw it away!
- [x] Make sure all linting is passing.

#### UI Task

- [x] Check that
      [HTML5 Semantic Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning)
      are used appropriately (`header`, `section`, `footer`, `main`...).
- [x] All images have an `alt` property
- [x] All `<a>` have `title` property
- [x] Check if all images are optimized (Saved for web and compressed, resized accordingly)
- [x] Headings (`h1`, `h2`, `h3`...) are used in the correct order.
- [x] All `input`'s have a `label`
- [x] Check if you can navigate the website with keyboard (using tabs)
- [x] Check if all videos are compressed correctly
- [x] Add `aria` labels.
- [x] Check if the fonts are being loaded properly.
- [x] Check if images are being lazy loaded and for proper usage of picture with responsive images
- [x] Check the `hover`, `disabled`, `invalid` and `error` states on buttons, links, form elements,
      etc.

#### Before every release

- [x] Check for proper html `doctype`.
- [x] Check for proper `viewport` tags.
- [x] Check the site has a `title` tag.
- [x] Check for Social sharing `meta` tags.
- [x] Check the site `description`.
- [x] Check the site again while throttling the internet connection. Does it still work? Do you have
      loaders in place?
- [x] What happens if you press the `back` button in the browser? And then the `forward` button?
- [x] What happens if you refresh the page halfway the flow?
- [x] What happens if you directly enter a page at the end of the flow?
- [x] What happens if you navigate away during an async process?
- [x] What happens if you manually change a value in the URL?
- [x] Is there a `404`?
- [x] Check for a favicon.
- [x] Check for JavaScript errors in the console.
- [x] Remove all console.logs.

#### Deployment process

- [x] QA/Staging/UAT/Dev deployments before every Production release are a **must**. No matter if
      it's a hotfix or if the PM is pushing. Unless everything is broken, please follow the rules.
- [x] No Friday deploys. Inform your project manager not to rely on Friday deployments 😀
- [x] Run the website through page insights /
      [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/). (Run audits in
      chrome)

## Development environment

### VSCode

Free code editor made by Microsoft. https://code.visualstudio.com/

#### Recommended extensions for VSCode

Code linting / formatting:

- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

Styling Framework:

- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

Collaborating:

- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
- [Jira and Bitbucket (Official)](https://marketplace.visualstudio.com/items?itemName=Atlassian.atlascode)

JS/TS Framework:

- [Vetur (.vue)](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [Angular Schematics](https://marketplace.visualstudio.com/items?itemName=cyrilletuzi.angular-schematics)
- [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
- [React Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

Miscellaneous:

- [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
- [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

#### Recommended settings for VSCode

User settings.json:

```json
{
  "editor.formatOnSave": true,
  "editor.renderWhitespace": "all",
  "editor.rulers": [100],
  "files.eol": "\n",
  "files.trimTrailingWhitespace": true,
  "html.format.indentHandlebars": true,
  "html.format.wrapAttributes": "force-expand-multiline",
  "javascript.preferences.importModuleSpecifier": "relative",
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

### WebStorm

Integrated development environment focussed on web development made by JetBrains.
https://www.jetbrains.com/webstorm/

#### Recommended plugins for WebStorm

- [Spellchecking](https://www.jetbrains.com/help/webstorm/spellchecking.html)
- [String Manipulation](https://plugins.jetbrains.com/plugin/2162-string-manipulation)
- [CamelCase](https://plugins.jetbrains.com/plugin/7160-camelcase)
