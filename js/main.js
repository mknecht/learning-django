$(function () {
  var ractive = new Ractive({
    el: 'content',
    template: '#template',
    data: {
      articles: []
    }
  });

  $.get('snippets/django-performance-4-simple-things.md').then(function(result) {
    ractive.get('articles').push({text: markdown.toHTML(result)})
    ractive.update('articles')
  })
  $.get('snippets/django-debug-toolbar.md').then(function(result) {
    ractive.get('articles').push({text: markdown.toHTML(result)})
    ractive.update('articles')
  })
})
