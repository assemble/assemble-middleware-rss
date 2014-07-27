# assemble-middleware-rss [![NPM version](https://badge.fury.io/js/assemble-middleware-rss.svg)](http://badge.fury.io/js/assemble-middleware-rss)  [![Build Status](https://travis-ci.org/assemble/assemble-middleware-rss.svg)](https://travis-ci.org/assemble/assemble-middleware-rss)

> RSS generator plugin for Assemble.

## Quickstart
From the same directory as your project's [gruntfile][Getting Started] and [package.json][], install this plugin:

```bash
npm install assemble-middleware-rss --save-dev
```

Next add `assemble-middleware-rss`, the name of this module, to the `plugins` option in the Assemble task:

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


## Options
#### Plugin Options
| Option    | Type    | Description                              | Default Value |  
|:----------|:-------:|------------------------------------------|---------------|
| `debug`   | boolean | Enable developer mode                    | `false`       |
| `format`  | boolean | Format output XML file using js-prettify | `false`       |
| `dest`    | string  | Destination of the generated RSS feed    |`'feed.xml'`   |

#### RSS Feed Data
> Data for the RSS `<channel>` element.

This data is defined under the plugin configuration.

```js
assemble: {
  options: {
    feed: {
      title: 'foo',
      description: 'bar'
    }
  }
}
```

| Required     | Type   | Desciption                           | Default Value   |     
|:-------------|:------:|--------------------------------------|----------------:|
| `title`      | string | Defines the title of the channel     | pkg.name        |
| `description`| string | Describes the channel                | pkg.description |
| `link`       | string | Defines the hyperlink to the channel | pkg.homepage    |

| Optional        | Type   | Description | Default Value |
|:----------------|:------:|-------------|--------------:|
| `categories`    | array  | Defines one or more categories for the feed |
| `cloud`         | string | Register processes to be notified immediately of updates of the feed | |
| `copyright`     | string | Notifies about copyrighted material |
| `docs`          | string | Specifies an URL to the documentation of the format used in the feed |
| `generator`     | string | Specifies the program used to generate the feed |
| `image`         | string | Allows an image to be displayed when aggregators present a feed |
| `language`      | string | Specifies the language the feed is written in | 'en'
| `lastBuildDate` | string | Defines the last-modified date of the content of the feed |
| `managingEditor`| string | Defines the e-mail address to the editor of the content of the feed |
| `pubDate`       | string | Defines the last publication date for the content of the feed |
| `rating`        | string | The PICS rating of the feed |
| `skipDays`      | string | Specifies the days where aggregators should skip updating the feed |
| `skipHours`     | string | Specifies the hours where aggregators should skip updating the feed | 
| `textInput`     | string | pecifies a text input field that should be displayed with the feed |
| `ttl`           | string | Specifies the number of minutes the feed can stay cached | '60' |
| `webmaster`     | string | Defines the email address to the webmaster of the feed |
| `geoRSS`        | boolean| Enable or disable GeoRSS | false

#### RSS Item Data
> Data for the RSS `<item>`element(s).

The data for feed items is generally grabbed from the YAML Front Matter.
```
title: Foo
desciption: This is foo.
```

Three values are required for the RSS feed to generate:

| Value         | Type   | Description                                       |      
|:--------------|:------:|---------------------------------------------------|
| `title`       | string | Defines the title of the item                     |
| `description` | string | Describes the item                                |

All other values are optional:

| Value         | Type   | Desciption                                             |      
|:--------------|:------:|--------------------------------------------------------|
| `author`      | string | Specifies the e-mail address to the author of the item |
| `date`        | string | Defines the last-publication date for the item         |
| `link`        | string | Defines the hyperlink to the item                      |
| `categories`  | string | Defines one or more categories the item belongs to     |
| `comments`    | string | Allows an item to link to comments about that item     |
| `guid`        | string | Defines a unique identifier for the item               |
| `source`      | string | Specifies a third-party source for the item            | 
| `lat`         | number | The latitude coordinate of the item                    |
| `long`        | number | The longitude coordinate of the item                   |

#### Excluding content
Both `published: false` and `rss: false` will exclude an item from the feed. However, note that `published: false` will entirely prevent a page from being assembled.


## Usage Examples
Generate feed using only required options.
```js
options: {
  rss: {
    title: 'RSS feed description.',
    description: 'RSS feed description.'
  }
}
```


## RSS Specifications
#### RSS Feed

The RSS feed is generated using the [RSS module](http://npmjs.org/rss), a fast and simple RSS generator/builder for Node projects by Dylan Greene. Some of the options this module has are not fully documented here, but are availabe; the information you might need should be with in Greene's documentation.

The content for the RSS feed is pulled from several sources.

As much of the content for the feed as possible is pulled from `package.json`, e.g. the author name and email; the site name and url. This functionality can be overidden by specifying the feed data in the plugin configuartion. See the [options documentaion](#rss-feed-data).

#### RSS Feed Items

The data for each item is pulled from YAML Front Matter (YFM).
```
title: foo
desciption: bar
```

If you do not want to include a page in the RSS feed, you don't have to.
```
rss: false
```

The item data you can define in the YFM is listed under [the options](#rss-item-options)


***
Built with care by [Patrick Burtchaell](http://twitter.com/pburtchaell) in New Orleans.

Copyright (c) 2014 Patrick Burtchaell, Jon Schlinkert, contributors. Released under the MIT license.

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md

