---
addedOn: 2015-05-11
tags: project views
type: project
title: Django Braces
url: https://github.com/brack3t/django-braces
---
Useful mixins for class-based views, such as:

* [LoginRequiredMixin](http://django-braces.readthedocs.org/en/latest/access.html#loginrequiredmixin) to require a logged in user.
* [CsrfExemptMixin](http://django-braces.readthedocs.org/en/latest/form.html#csrfexemptmixin) to make an exception from Django's CSRF protection.
* [JsonRequestResponseMixin](http://django-braces.readthedocs.org/en/latest/other.html#jsonrequestresponsemixin) parses request payload as JSON, and provides a helper method to send a JSON response.

See [the docs](http://django-braces.readthedocs.org/en/latest/index.html) for more. [Project Page](https://github.com/brack3t/django-braces) on GitHub.

## Get it

    pip install django-braces

## Example


    class ImportantApiView(
            CsrfExemptMixin,  # Disable CSRF
            LoginRequiredMixin,  # Require a logged-in user
            JsonRequestResponseMixin,  # We expect JSON as input, and return JSON.
            View,
    ):
        raise_exception = True  # Don't redirect, if authentication fails.
        require_json = True  # Raise exception, if not valid JSON.

        def post(self, *args, **kw):
            return self.render_json_response(
                {"just_the_burrito": self.request_json[u"burrito"]}
