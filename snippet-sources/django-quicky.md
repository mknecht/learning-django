---
addedOn: 2015-06-03
tags: 15-min project views
type: project
title: Django-quicky
url: https://github.com/sametmax/django-quicky
---

[Django-quicky](https://github.com/sametmax/django-quicky) let's you write [Bottle](http://bottlepy.org/docs/dev/index.html)-like views and routes, getting you started quicker.

I find it great to kickstart a small project, or to get the hassle out of the simple 80% views.
After creating a new Django project, this is all I had to do render a template-view with an URL-parameter:

**`urls.py`**:

    from quick import views

    urlpatterns = [
        url(r'^quick', include(views)),
    ]

**`views.py`**:


    from django_quicky import routing, view

    url, urlpatterns = routing()


    @url('/user/(\w+)')
    @view(render_to='user.html')
    def user_view(request, username, **kw):
        return {'username': username}

There is a decorator for AJAX-calls, too.

Yes, there are other tools to make this simpler, too: django-annoying's [render-to decorator](https://github.com/skorokithakis/django-annoying#render_to-decorator), the [render-to-response shortcut](https://docs.djangoproject.com/en/1.8/topics/http/shortcuts/#render-to-response), [or the ajax decorator](https://github.com/yceruto/django-ajax#ajax-decorator) from django-ajax amongst others. But I like that the logic is separated from the how (template configuration and response building) and where (URL). And I like the simplicity of having one tool for a simple job, not 50 dependencies.

## Links

[Project page and docs on GitHub](https://github.com/sametmax/django-quicky)
