## RSS Elements

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
