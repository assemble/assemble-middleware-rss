From the same directory as your project's [gruntfile][Getting Started] and [package.json][], install this plugin:

```bash
npm install {%= name %} --save-dev
```

Next add `{%= name %}`, the name of this module, to the `plugins` option in the Assemble task:

```js
options: {
  plugins: ['assemble-middleware-rss'],
  rss: {
    title: 'RSS Feed Title',
    description: 'RSS feed description.'
  }
}
```

*Note*: Author is also required, but it is pulled from `package.json` by default. As long as you have a `package.json` file in the root directory, you don't need to include author in the options.

See the [options](#options) for further configuration.
