define (['jquery', 'page', 'reflux'], function($, page, Reflux) {
  var SnippetActions = require('actions/snippets')

  var ids = [
    'ajax',
    'custom-user-models-reusable-apps',
    'deprecated-projects',
    'django-annoying',
    'django-braces',
    'django-debug-toolbar',
    'django-easy-select2',
    'django-flat-theme',
    'django-model-utils',
    'django-performance-4-simple-things',
    'django-quicky',
    'django-reversion',
    'get-started-quickly',
    'runserver-plus',
    'shell-plus',
    'switching-users',
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
