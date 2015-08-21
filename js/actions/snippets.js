define(['reflux'], function(Reflux) {
  return Reflux.createActions({
    loadSnippets: { children: ['progressed', 'completed', 'failed'] }
  })
})