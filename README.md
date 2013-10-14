# assemble-rss [![NPM version](https://badge.fury.io/js/assemble-rss.png)](http://badge.fury.io/js/assemble-rss) 

> RSS generator plugin for Assemble, the static site generator for Yeoman, Grunt.js and Node.js.

## Contributing
We welcome all kinds of contributions! The most basic way to show your support is to star the project, and if you'd like to get involed please see the [Contributing to assemble-rss](https://github.com/assemble/assemble-rss/blob/master/CONTRIBUTING.md) guide for information on contributing to this project.

## Quickstart
From the same directory as your project's [Gruntfile][Getting Started] and [package.json][], install this plugin with the following command:

```bash
npm install assemble-rss --save-dev
```

Once that's done, just add `assemble-rss`, the name of this module, to the `plugins` option in the Assemble task:

```js
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    assemble: {
      options: {
        plugins: ['assemble-rss'],
        rss: {
          // RSS options
        }
      },
      ...
    }
  });
  grunt.loadNpmTasks('assemble');
  grunt.registerTask('default', ['assemble']);
};
```

If everything was installed and configured correctly, the plugin should be should be ready to use in your project!


## Options
### RSS Elements

The following RSS elements can be defined in the options, as follows: 

```js
{
  options: {
    rss: {
      category: ['foo'],
      title: 'Assemble',

      // You can define item defaults here, but you can override
      // these in the YAML front matter of each page.
      items: {
        author: 'Jon Schlinkert'
      }
    }
  }
}
```

**RSS `<channel>` Element**
* `<category>`: (Optional) Defines one or more categories for the feed 
* `<cloud>`: (Optional) Register processes to be notified immediately of updates of the feed 
* `<copyright>`: (Optional) Notifies about copyrighted material 
* `<description>`: Required. Describes the channel 
* `<docs>`: (Optional) Specifies an URL to the documentation of the format used in the feed 
* `<generator>`: (Optional) Specifies the program used to generate the feed 
* `<image>`: (Optional) Allows an image to be displayed when aggregators present a feed 
* `<language>`: (Optional) Specifies the language the feed is written in 
* `<lastBuildDate>`: (Optional) Defines the last-modified date of the content of the feed 
* `<link>`: Required. Defines the hyperlink to the channel 
* `<managingEditor>`: (Optional) Defines the e-mail address to the editor of the content of the feed 
* `<pubDate>`: (Optional) Defines the last publication date for the content of the feed 
* `<rating>`: (Optional) The PICS rating of the feed 
* `<skipDays>`: (Optional) Specifies the days where aggregators should skip updating the feed 
* `<skipHours>`: (Optional) Specifies the hours where aggregators should skip updating the feed 
* `<textInput>`: (Optional) Specifies a text input field that should be displayed with the feed 
* `<title>`: Required. Defines the title of the channel 
* `<ttl>`: (Optional) Specifies the number of minutes the feed can stay cached before refreshing it from the source 
* `<webMaster>`: (Optional) Defines the e-mail address to the webmaster of the feed 


**RSS `<item>` Element**
* `<author>`: (Optional) Specifies the e-mail address to the author of the item 
* `<category>`: (Optional) Defines one or more categories the item belongs to 
* `<comments>`: (Optional) Allows an item to link to comments about that item 
* `<description>`: (Required) Describes the item 
* `<enclosure>`: (Optional) Allows a media file to be included with the item 
* `<guid>`: (Optional) Defines a unique identifier for the item 
* `<link>`: (Required) Defines the hyperlink to the item 
* `<pubDate>`: (Optional) Defines the last-publication date for the item 
* `<source>`: (Optional) Specifies a third-party source for the item 
* `<title>`: (Required) Defines the title of the item 




## Usage Examples
```js
options: {
  rss: {},
  files: {
    './blog/': ['./templates/blog/*.hbs']
  }
}
```


## RSS Specifications
_nothing yet_.


## Author

**Jon Schlinkert**

+ [github.com/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter.com/jonschlinkert](http://twitter.com/jonschlinkert)

## License
Copyright (c) 2013 Jon Schlinkert, contributors.
Released under the MIT license

***

_This file was generated on Monday, October 14, 2013._


[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md
[package.json]: https://npmjs.org/doc/json.html