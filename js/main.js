
requirejs.config({
  baseUrl: 'js',
  paths: {
    jquery: 'vendor/jquery-2.1.4.min',
    markdown: 'vendor/markdown',
    page: 'vendor/page-1.6.3',
    ractive: 'vendor/ractive-0.7.3.min',
    rvc: "vendor/rvc-0.3.1"
  },
  shim: {
    markdown: {
      exports: 'markdown'
    }
  }
});


requirejs([
  "jquery",
  "rvc",
  "vendor/modernizr-2.8.3.min",
  "vendor/semantic-1.12.2.min"
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
      new Snippet({
        el: '#content',
        data: {'snippet-id': ctx.params.snippetId},
      })
    }

    page('/snippets/:snippetId', showArticle)
    page('/', showIndex)

    page({
      hashbang: true,
    })
})
