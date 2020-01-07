/**
 * The tag of firstLetterSink. 
 *
 * Tag syntax: {% firstLetterSink [word] %}
 */

'use strict';

function firstLetterSink(args) {
	
  var firstLetter    = args[0] || '';

  !firstLetter && hexo.log.warn('The word must be defined!');

  return `<span class="first-letter-sink">${firstLetter}</span>`;
}

hexo.extend.tag.register('firstLetterSink', firstLetterSink, {
	ends: false,
});