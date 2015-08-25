---
addedOn: 2015-08-25
tags: 15-min project views models templates
type: project
title: Django Annoying
url: https://github.com/skorokithakis/django-annoying
---

[django-annoying](https://github.com/skorokithakis/django-annoying) provides a few helpers for common annoyances with Django. Listing only the two most important ones:

[get\_object\_or\_None](https://github.com/skorokithakis/django-annoying#get_object_or_none-function) does what the name says.

    user = get_object_or_None(User, id=user_id)

Awesome!

The [render\_to](https://github.com/skorokithakis/django-annoying#render_to-decorator) decorator for view functions renders a template with the context returned.

    @render_to('template.html')
    def foo(request):
        bar = Bar.object.all()
        return {'bar': bar}

Simple, descriptive, focussing on the logic, not template cruft.

## Get it

    pip install django-annoying

Then, add `annoying` to `INSTALLED_APPS`.
