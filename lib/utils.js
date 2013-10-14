
/**
 * Optionally format generated XML
 */
exports.formatXML = function(src) {
  return require('js-prettify').html(src, {
    indent_size: 2,
    indent_inner_html: true
  }).replace(/(\r\n|\n\r|\n|\r){2,}/g, '\n');
};  
