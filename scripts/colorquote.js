/**
 * The tag of colorquote. 
 *
 * Tag syntax: {% colorquote [type] %} content {% endcolorquote %}
 */

'use strict';

function colorQuote(args, content) {
  var type =  args[0] || 'info';
	var colorquote = '';

	colorquote += '<blockquote class="colorquote ' + type.trim() + '">';
	colorquote += hexo.render.renderSync({
		text: content,
		engine: 'markdown'
	}).split('\n').join('');
	colorquote += '</blockquote>';

	return colorquote;
}

hexo.extend.tag.register('colorquote', colorQuote, {
	ends: true
});