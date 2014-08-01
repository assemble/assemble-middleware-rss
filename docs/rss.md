### RSS Feed

The RSS feed is generated using the [RSS module](http://npmjs.org/rss), a fast and simple RSS generator/builder for Node projects by Dylan Greene. Some of the options this module has are not fully documented here, but are availabe; the information you might need should be with in Greene's documentation.

The content for the RSS feed is pulled from several sources.

As much of the content for the feed as possible is pulled from `package.json`, e.g. the author name and email; the site name and url. This functionality can be overidden by specifying the feed data in the plugin configuartion. See the [options documentaion](#rss-feed-data).

### RSS Feed Items

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
