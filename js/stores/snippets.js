define (['jquery', 'page', 'reflux'], function($, page, Reflux) {
  var SnippetActions = require('actions/snippets')

  var ids = [
      'custom-user-models-reusable-apps',
      'deprecated-projects',
      'django-braces',
      'django-debug-toolbar',
      'django-easy-select2',
      'django-performance-4-simple-things',
      'django-quicky',
      'django-reversion',
      'runserver-plus',
      'shell-plus',
      'web-api-performance-profiling-django-rest-framework',
    ]

  function getSnippets(publishFunc) {
    return $.when.apply($, ids.map(function(snippetId) {
      return $.get(page.base() + '/snippet-sources/' + snippetId + '.md').then(function(text) { return {
        id: snippetId,
        text: text,
      }
      })
    }))
  }

  return Reflux.createStore({
    init: function() {
      var store = this;
      store.listenTo(SnippetActions.loadSnippets, function() {
        getSnippets().then(function() {store.trigger(arguments)})
      })
    },
    getIdCount: function() {
      return ids.length;
    }
  })
})
