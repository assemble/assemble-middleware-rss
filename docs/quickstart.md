From the same directory as your project's [gruntfile][Getting Started] and [package.json][], install this plugin:

```bash
npm install {%= name %} --save-dev
```

Next add `assemble-middleware-rss`, the name of this module, to the `plugins` option in the Assemble task:
```js
module.exports = function(grunt) {
  grunt.initConfig({
    assemble: {
      options: {
        plugins: ['assemble-middleware-rss'],
        rss: {
          // RSS options
        }
      },
      ...
    }
  });
};
```

See the [options](#options) for further configuration.
