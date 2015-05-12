---
addedOn: 2015-05-11
tags: 15-min settings weird-defaults
title: Django Performance: 4 Simple Things
type: blog-post
url: http://django-extensions.readthedocs.org/en/latest/shell_plus.html
---
[http://www.revsys.com/blog/2015/may/06/django-performance-simple-things/](http://www.revsys.com/blog/2015/may/06/django-performance-simple-things/)

Four performance tweaks for Django. Three of them are about fixing astounding default settings:

* [persistent DB connections](https://docs.djangoproject.com/en/1.8/ref/databases/#persistent-connections), meaning reusing connections
* [caching templates](https://docs.djangoproject.com/en/1.8/ref/templates/api/#django.template.loaders.cached.Loader)
* using the [cache for settings](https://docs.djangoproject.com/en/1.6/topics/http/sessions/#using-cached-sessions)

Then, he mentions the [Django Debug Toolbar](#!snippets/django-debug-toolbar), which is awesome.
