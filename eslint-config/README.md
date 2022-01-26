# Media.Monks - Eslint configuration

To make sure your project is following the [Media.Monks - Frontend Coding Standards](https://github.com/mediamonks/frontend-coding-standards) you should install `@mediamonks/eslint-config` and its peer dependencies as an [eslint extension](https://eslint.org/docs/user-guide/configuring#extending-configuration-files):

```
npx install-peerdeps --dev @mediamonks/eslint-config
```

And set `@mediamonks` as `extends` in your `.eslintrc.js` file:

```
module.exports = {
    "extends": "@mediamonks"
}
```

This Eslint extension is configured for JavaScript, [TypeScript](http://typescriptlang.org/), [React](https://reactjs.org/), [Vue](https://vuejs.org/) and [Muban](https://mediamonks.github.io/muban/) projects.

#### Prettier
This eslint-configuration uses [Prettier](https://prettier.io/) for the formatting. Please make sure you use the same [Prettier configuration](.prettierrc) to avoid conflicts.
