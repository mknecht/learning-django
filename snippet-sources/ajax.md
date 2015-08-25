---
addedOn: 2015-08-25
tags: ajax projects json yaml
type: thought
title: AJAX
---

There are two ways and plenty of libraries to serve AJAX responses with Django. This is my garden of links to these libraries and thoughts on them.

There are two different approaches: Frameworks or library.

Apart from the [(inversion of) control](http://stackoverflow.com/questions/3057526/framework-vs-toolkit-vs-library), the choice is also about the size of your undertaking. A framework does a lot of request handling for you, the routing and dispatching. Then, it provides you hooks to insert the logic you need. If you're building a fat API, that may be the way to go. If you just need a view that returns JSON, the libraries are your friend.

## Frameworks

### Django REST Framework

The hammer.

## Libraries

### django-annoying:ajax_request

The [ajax_request](https://github.com/skorokithakis/django-annoying#ajax_request-decorator) decorator [django-annoying](#!/snippets/django-annoying) for your view functions helps you with the HTTP response. It will convert a list or dictionary returned from your view function to a JSON or YAML string. It takes the `Accept` header into account.

    @ajax_request
    def your_view(request):
        return {'id': 8, 'color': 'blue', 'shapes': ['circle', 'rectangular']}

It does not help with parsing JSON from the request.
