Generate feed using only required options.
```js
options: {
  feed: {
    title: 'My Blog',
    description: 'A collection of writing'
    link: '<%=pkg.url%>'
  },
},
files: {
  './blog/': ['./templates/blog/*.hbs']
}
```
