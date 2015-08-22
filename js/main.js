
requirejs.config({
  baseUrl: 'js',
  paths: {
    jquery: 'vendor/jquery-2.1.4.min',
    markdown: 'vendor/markdown',
    page: 'vendor/page-1.6.3',
    ractive: 'vendor/ractive-0.7.3.min',
    reflux: 'vendor/reflux-0.2.7.min',
    rvc: "vendor/rvc-0.3.1",
    semantic: "vendor/semantic-1.12.2.min",
  },
  shim: {
    markdown: {
      exports: 'markdown',
    },
    semantic: {
      deps: ['jquery'],
    }
  }
});


requirejs([
  "jquery",
  "rvc",
  "semantic",
  "vendor/modernizr-2.8.3.min",
]);


requirejs([
  'jquery',
  'ractive',
  'markdown',
  'page',
  'rvc!components/mainview',
  'rvc!components/snippet',
],
  function($, Ractive, markdown, page, Mainview, Snippet) {
    function showIndex() {
      new Mainview({el: '#content'})
    }

    function showArticle(ctx) {
      var SnippetActions = require('actions/snippets')
      var SnippetsStore = require('stores/snippets')
      SnippetsStore.listen(function(snippetsData) {
        var arrayWithSnippetsData = []
        ;[].push.apply(arrayWithSnippetsData, snippetsData)
        /* component.set('snippetsData', arrayWithSnippetsData) */
        arrayWithSnippetsData.filter(function(snippetData, idx) {
          if (snippetData.id == ctx.params.snippetId) {
            new Snippet({
              el: '#content',
              data: {'snippetData': snippetData},
            })
          }
        })
      });
      SnippetActions.loadSnippets()
    }

    page.base('/learning-django/')
    page('/', showIndex)
    page('/snippets/:snippetId', showArticle)

    page({
      dispatch: false,
      hashbang: true,
    })

    page("/")
})
