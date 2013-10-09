/**
 * Handlebars Helper: {{rss}} 
 * Assemble, the static site generator for Node.js, Grunt.js and Yeoman.
 * Created and maintained by Jon Schlinkert and Brian Woodward
 *
 * Copyright (c) 2013 Upstage.
 * Licensed under the MIT License (MIT).
 */

module.exports.register = function(Handlebars, options) {

  /**
   * TODO:
   * This is a placeholder for some helpers to create for this plugin. 
   * - class name
   * - text link or icon. 
   * - icons: `icon="16"`
   * - automatically calculate path based on RSS feed
   */

  Handlebars.registerHelper('rss', function(options) {
    return '<a class="rss-icon" href="" alt="">' + options + '</a>';
  });

};
