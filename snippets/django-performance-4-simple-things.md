# Django Performance: 4 Simple Things
Blog post by *Frank Wiles*

[http://www.revsys.com/blog/2015/may/06/django-performance-simple-things/](http://www.revsys.com/blog/2015/may/06/django-performance-simple-things/)

Four performance tweaks for Django. Three of them are about fixing astounding default settings:

* [persistent DB connections](https://docs.djangoproject.com/en/1.8/ref/databases/#persistent-connections), meaning reusing connections
* [caching templates](https://docs.djangoproject.com/en/1.8/ref/templates/api/#django.template.loaders.cached.Loader)
* using the [cache for settings](https://docs.djangoproject.com/en/1.6/topics/http/sessions/#using-cached-sessions)

Then, he mentions the [Django Debug Toolbar](https://github.com/django-debug-toolbar/django-debug-toolbar), which is awesome.
