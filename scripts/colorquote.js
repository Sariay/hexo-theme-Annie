/**
 * Colored quote block
 * The code snippet comes from 'https://github.com/ppoffice/hexo-theme-minos/blob/master/scripts/99_tags.js'!
 */

hexo.extend.tag.register('colorquote', function (args, content) {
    var type =  args[0];
    return '<blockquote class="colorquote ' + type + '">' + content + '</blockquote>';
}, {ends: true});