
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
      new Snippet({
        el: '#content',
        data: {'snippet-id': ctx.params.snippetId},
      })
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
