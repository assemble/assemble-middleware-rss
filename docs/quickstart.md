From the same directory as your project's [Gruntfile][Getting Started] and [package.json][], install this plugin with the following command:
```bash
npm install {%= name %} --save-dev
```

Next add `assemble-contrib-rss`, the name of this module, to the `plugins` option in the Assemble task:
```js
module.exports = function(grunt) {
  grunt.initConfig({
    assemble: {
      options: {
        plugins: ['assemble-contrib-rss'],
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
