# MediaMonks - Frontend Coding Standards

[Based on Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript/)

## Table of Contents

1. [Eslint](#eslint)
2. [Naming](#naming)
   1. [Casing](#casing)
   2. [File names](#file-names)
3. [Coding](#coding)
4. [Formatting](#formatting)
5. [Comments](#comments)
6. [TypeScript](#typescript)
7. [GIT](#git)
   1. [Branches](#branches)
   2. [Commit messages](#commit-messages)
   3. [Code Reviews](#code-reviews)
8. [Recommended Frameworks](#recommended-frameworks)
   1. [React](#react)
   2. [Vue](#vue)
   3. [Muban](#muban)
9. [Recommended Libraries](#recommended-libraries)
10. [Definition of Done Checklist](#definition-of-done-checklist)

## Eslint
Please install our [ESLint Configuration](https://www.npmjs.com/package/@mediamonks/eslint-config) to enforce the *MediaMonks - Frontend Coding Standards* in your project.

## Naming

Choosing good names is critical to creating code that is easy to use and easy to understand. You
should always take the time to think about whether you have chosen the right name for something,
especially if it is part of the public API.

#### English

All code, names, comments, etc. must be in English.

> Tip: install a spell checker in your IDE to avoid typos.

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

#### Abbreviations

Avoid them as a general rule. For example, `calculateOptimalValue()` is a better method name than
`calcOptVal()`. Being clear is more important than minimizing keystrokes. If you don't abbreviate,
developers won't have to remember whether you shortened a word like _qualified_ to `qual` or `qlfd`.

Abbreviations that are part of the HTML, CSS and/or JavaScript API are allowed, like:

- `URL` for Uniform Resource Locator
- `URI` for Uniform Resource Identifier
- `src` for source
- `DOM` for Document Object Model
- `img` for image

You should only use these abbreviations within the same context. So only use `img` if you refer to
an HTML Image Tag. (`<img>`)

We have standardized on a few abbreviations that are allowed to use:

- `app` for application
- `args` for arguments
- `auto` for automatic, as in `autoLayout`
- `bin` for binary
- `fps` for frames per second
- `id` for identifier. Please note that 'd' should be written in lowercase when used in combination
  with an other word, like `userId`.
- `info` for information, as in `GridRowInfo`
- `init` for initialize
- `lib` for library
- `max` for maximum, as in `maxHeight`
- `min` for minimum, as in `minWidth`
- `param` for parameter
- `params` for parameters
- `prop` or `props` for property or properties
- `ref` for reference
- `temp` for temporary
- `ui` for user interface
- `util` or `utils` for utility or utilities, as in `StringUtils`

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

Prefer using a verb as a name to indicate it will do something. Like `render` or `open`.

#### Classes, variables, properties, etc.

All non-functions should have a noun as a name, not a verb.

#### Booleans

Should start with `is`, `has`, `will` or `should`. Like `isValid` or `hasValues`.

#### Always Affirmative

Avoid negations. _“Don’t ever not avoid negative logic”_. Prefer `isShown` over `isHidden` or
`isEnabled` over `isDisabled`. Do not use names like `notEditable`.

#### TypeScript Generics

If the usages of the generic is obvious, then naming that generic `T` is sufficient. As long as the
usage is clear you can use `U`, `V` etc. for any following generic.

If the usage is not obvious, you should use a more descriptive name. The same naming rules as for
classes will apply then.

### Casing

#### Classes, Interfaces, Types and Generics

**PascalCase** Every individual word start with an upper case character, no underscores, no dashes.

#### Functions, properties, arguments and variables

**camelCase** Starts with a lower case character, every following individual word start with a upper
case character, no underscores, no dashes.

#### Globally used constants

**UPPER_CASE** Only use upper case characters, individual words must be separated with an
underscore.

#### CSS Class names

**kabab-case** Only use lower case characters, individual words must be separated with a dash.

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

JavaScript with React JSX syntax. If a file has the .jsx extension, it must contain React code.

#### .tsx

TypeScript with React JSX syntax. If a file has the .tsx extension, it must contain React code.

## Coding

Every function or class should do **one thing** (and do it good). If it needs to do more than one
thing, split it up. Keep your files, classes and functions small. It’s okay to have a file with just
a single line.

#### Pure functions

Prefer writing pure functions, which means they do not manipulate the input arguments or
reference/manipulate global state. This makes your code better scalable and testable.

#### Separate Logic From Configuration

Write code that is reusable, scalable and testable.

#### Do not repeat yourself (DRY)

- Do not copy code to another place.
- Avoid using the same string twice in a project.
- Move shared logic to a shared place.
- Make sure you do not have to adapt changes on multiple places.

#### Do not use Magic Numbers

See https://en.wikipedia.org/wiki/Magic_number_(programming)

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

#### Readonly

In order to be as strict as possible, every property should be set to readonly unless it should
writable.

#### Arrays

Always prefer `ReadonlyArray` over a regular `Array` unless it must be possible to modify the Array.

## GIT

### Branches

We use [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) for our branching
strategy.

#### Automatic deployment of branches

Some projects will automatically deploy to an environment when pushing commits into a specific
branch. Which branch is connected to which environment should be written in the `README.md` of the
project.

### Commit messages

Please read: https://chris.beams.io/posts/git-commit/

- If possible add a reference to the corresponding ticket in the commit message. Make sure it is
  always clear why a change was made.
- Only commit one feature at the time.
- Always check your commit in details to avoid committing wrong code.

### Code Reviews
Always let someone else review your code in the Pull/Merge Request. Make sure all code review comments are resolved, before you merge it!

## Recommended Frameworks

### React

We recommend using [React](https://reactjs.org/) for 'big build like' Single Page Applications
(SPA's). React is suited for long term projects that need stable and maintainable code. React works
great together with [TypeScript](https://www.typescriptlang.org/).

##### Getting started

Start a new React project with [Create React App](https://github.com/facebook/create-react-app).

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
- [grid-checker](https://www.npmjs.com/package/grid-checker) - provides developers a customizable,
  responsive grid-overlay to compare with the layout provided by design to compare layouts
- [GSAP](https://greensock.com/gsap/) - Green Sock Animation Platform -Animation library
- [Litepicker](https://github.com/ThijsTyZ/Litepicker) - Date range picker - lightweight, no
  dependencies
- [Lottie](http://airbnb.io/lottie/) - parses Adobe After Effects animations exported as json with
  Bodymovin and renders them natively on mobile and on the web
- [scroll-tracker-component-manager](https://www.npmjs.com/package/scroll-tracker-component-manager) -
  The ScrollTrackerComponentManager is a Class that tracks whether a component is within your
  viewport based on your scroll position.
- [seng-scss](https://www.npmjs.com/package/seng-scss) - A SCSS library of mixins and functions
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
      branch name when creating a branch from a ticket)

#### General Tasks

- [x] Double check if feature is properly working on all browsers specified in the browser matrix.
- [x] Double check if feature is properly working on all resolutions
- [x] Review all commits and check if there is room for improvement
- [x] Could any of the functions you wrote be reused on other components/features ?. If so, rewrite
      it and restart the checklist process.
- [x] Ask yourself in which scenarios could this fail?
- [x] Check if you are handling possible error states. Catch them.
- [x] Merge latest develop into branch and see if there are no conflicts. If there are conflicts
      please ask for help if you don't know which part of the code should stay.
- [x] Remove unnecessary comments.
- [x] Check the name and semantics of all functions, properties, consts etc. Do they still make
      sense? Could someone that doesn't know the code understand what it is doing?
- [x] Read your code again. Do you think it can be done better or optimized? Do it. Start process
      again.
- [x] Read the description of the ticket / email again. Did you really do what is asked for? Does
      your change solve the issue?
- [x] Run build tasks and see if they actually works
- [x] Does your project have code that isn't used anymore? Throw it away!
- [x] Make sure all linting is passing

#### UI Task

- [x] Check if HTML5 Semantic Elements are used appropriately (`header`, `section`, `footer`,
      `main`...).
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

- [x] QA/Staging/UAT/Dev deploy before every Production release. No matter if it's a hotfix or if
      the PM is pushing. Unless everything is broken, please follow the rules.
- [x] No Friday deploys. Remember the project manager not to rely on Friday deploys 😀
- [x] Run the website through page insights / Lighthouse. (Run audits in chrome)
