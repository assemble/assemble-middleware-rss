### Plugin Options
| Option    | Type    | Description                              | Default Value |  
|:----------|:-------:|------------------------------------------|---------------|
| `debug`   | boolean | Enable developer mode                    | `false`       |
| `format`  | boolean | Format output XML file using js-prettify | `false`       |
| `dest`    | string  | Destination of the generated RSS feed    |`'feed.xml'`   |

### RSS Feed Data
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

### RSS Item Data
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

### Excluding content
Both `published: false` and `rss: false` will exclude an item from the feed. However, note that `published: false` will entirely prevent a page from being assembled.
