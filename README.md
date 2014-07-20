# assemble-contrib-rss [![NPM version](https://badge.fury.io/js/assemble-contrib-rss.png)](http://badge.fury.io/js/assemble-contrib-rss)  [![Build Status](https://travis-ci.org/assemble/assemble-contrib-rss.png)](https://travis-ci.org/assemble/assemble-contrib-rss)

> RSS generator plugin for Assemble, the static site generator for Yeoman, Grunt.js and Node.js.

## Contributing
Find a bug? Have a feature request? Please [create an Issue](https://github.com/assemble/assemble-contrib-rss/issues).

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality,
and run `docs` in the command line to build the docs with [Verb](https://github.com/assemble/verb).

Pull requests are also encouraged, and if you find this project useful please consider "starring" it to show your support! Thanks!

## Quickstart
From the same directory as your project's [Gruntfile][Getting Started] and [package.json][], install this plugin with the following command:
```bash
npm install assemble-contrib-rss --save-dev
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

## Options
### RSS Elements

The following RSS elements can be defined in the options, as follows: 
```js
assemble: {
  options: {
    rss: {
      category: ['foo'],
      title: 'Assemble',
    }
  }
}
```

These options will be used within the RSS `<channel>`element.

Required Options:
* `title`: Defines the title of the channel 
* `description`: Describes the channel 
* `link`: Defines the hyperlink to the channel 

Other Options:
* `category`: Defines one or more categories for the feed 
* `cloud`: Register processes to be notified immediately of updates of the feed 
* `copyright`: Notifies about copyrighted material 
* `docs`: Specifies an URL to the documentation of the format used in the feed 
* `generator`: Specifies the program used to generate the feed 
* `image`: Allows an image to be displayed when aggregators present a feed 
* `language`: Specifies the language the feed is written in 
* `lastBuildDate`: Defines the last-modified date of the content of the feed 
* `managingEditor`: Defines the e-mail address to the editor of the content of the feed 
* `pubDate`: Defines the last publication date for the content of the feed 
* `rating`: The PICS rating of the feed 
* `skipDays`: Specifies the days where aggregators should skip updating the feed 
* `skipHours`: Specifies the hours where aggregators should skip updating the feed 
* `textInput`: pecifies a text input field that should be displayed with the feed 
* `ttl`: Specifies the number of minutes the feed can stay cached before refreshing it from the source 
* `webMaster`: Defines the e-mail address to the webmaster of the feed 


**RSS `item` Element**
In addition, you can define item defaults, but you can also define these in the YAML front matter of each page.

```js
assemble: {
  options: {
    rss: {
      items: {
        title: 'Assemble',
        description: 'Static site generator for Node.js',
        link: 'http://assemble.io'
      }
    }
  }
}
```

Required Options: 
* `title`: Defines the title of the item 
* `description`: Describes the item 
* `link`: Defines the hyperlink to the item 

Other Options:
* `author`: Specifies the e-mail address to the author of the item 
* `category`: Defines one or more categories the item belongs to 
* `comments`: Allows an item to link to comments about that item 
* `enclosure`: Allows a media file to be included with the item 
* `guid`: Defines a unique identifier for the item 
* `pubDate`: Defines the last-publication date for the item 
* `source`: Specifies a third-party source for the item 

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

## Authors

**Jon Schlinkert**
+ [github.com/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter.com/jonschlinkert](http://twitter.com/jonschlinkert)

**Patrick Burtchaell**
+ [github.com/pburtchaell](http://github.com/pburtchaell)
+ [twitter.com/pburtchaell](http://twitter.com/pburtchaell)

## License
Copyright (c) 2014 Jon Schlinkert (https://github.com/jonschlinkert), contributors.  
Released under the MIT license

***
[grunt]: http://gruntjs.com/
[Getting Started]: http://gruntjs.com/getting-started
[package.json]: https://npmjs.org/doc/json.html
