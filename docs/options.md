## RSS Elements

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

| **RSS `<channel>` Element** | **Description** |
| --------------------------- | ---------------------------------------- |
| `<category>` | (Optional) Defines one or more categories for the feed |
| `<cloud>` | (Optional) Register processes to be notified immediately of updates of the feed |
| `<copyright>` | (Optional) Notifies about copyrighted material |
| `<description>` | Required. Describes the channel |
| `<docs>` | (Optional) Specifies an URL to the documentation of the format used in the feed |
| `<generator>` | (Optional) Specifies the program used to generate the feed |
| `<image>` | (Optional) Allows an image to be displayed when aggregators present a feed |
| `<language>` | (Optional) Specifies the language the feed is written in |
| `<lastBuildDate>` | (Optional) Defines the last-modified date of the content of the feed |
| `<link>` | Required. Defines the hyperlink to the channel |
| `<managingEditor>` | (Optional) Defines the e-mail address to the editor of the content of the feed |
| `<pubDate>` | (Optional) Defines the last publication date for the content of the feed |
| `<rating>` | (Optional) The PICS rating of the feed |
| `<skipDays>` | (Optional) Specifies the days where aggregators should skip updating the feed |
| `<skipHours>` | (Optional) Specifies the hours where aggregators should skip updating the feed |
| `<textInput>` | (Optional) Specifies a text input field that should be displayed with the feed |
| `<title>` | Required. Defines the title of the channel |
| `<ttl>` | (Optional) Specifies the number of minutes the feed can stay cached before refreshing it from the source |
| `<webMaster>` | (Optional) Defines the e-mail address to the webmaster of the feed |



| **RSS `<item>` Element**    | **Description** |
| --------------------------- | ---------------------------------------- |
| `<author>` |  (Optional) Specifies the e-mail address to the author of the item |
| `<category>` |  (Optional) Defines one or more categories the item belongs to |
| `<comments>` |  (Optional) Allows an item to link to comments about that item |
| `<description>` | (Required) Describes the item |
| `<enclosure>` | (Optional) Allows a media file to be included with the item |
| `<guid>` |  (Optional) Defines a unique identifier for the item |
| `<link>` |  (Required) Defines the hyperlink to the item |
| `<pubDate>` | (Optional) Defines the last-publication date for the item |
| `<source>` |  (Optional) Specifies a third-party source for the item |
| `<title>` | (Required) Defines the title of the item |

