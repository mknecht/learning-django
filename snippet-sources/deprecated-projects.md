---
addedOn: 2015-07-11
lastModifiedOn: 2015-08-30
tags: deprecated project
type: thought
title: Deprecated Projects
---
Projects that I stumbled upon, that were not worth it,
for example cuz they're ancient.
Really more a list at what *not* to look at.

# django-lint

[Project page](https://chris-lamb.co.uk/projects/django-lint), [GitHub page](https://github.com/lamby/django-lint)

Nice idea, but completely outdated. Last commit was several years ago, it's not on pypi, though pip installable.
Could not make it work (some ImportError, guess my PyLint version was too high).

# django-force-logout

[Project page](https://github.com/thread/django-force-logout)

Provides a middleware to terminate a user's session. Nice idea, but not thought thru: You have to implement a callbackto make the decision, where I would have expected a button in Django admin to do this.
