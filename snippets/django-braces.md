---
type: project
url: https://github.com/brack3t/django-braces
tags: project views
addedOn: 2015-05-11
---
# Django Braces

Useful mixins for class-based views, such as:

* [LoginRequiredMixin](http://django-braces.readthedocs.org/en/latest/access.html#loginrequiredmixin) to require a logged in user.
* [CsrfExemptMixin](http://django-braces.readthedocs.org/en/latest/form.html#csrfexemptmixin) to make an exception from Django's CSRF protection.
* [JsonRequestResponseMixin](http://django-braces.readthedocs.org/en/latest/other.html#jsonrequestresponsemixin) parses request payload as JSON, and provides a helper method to send a JSON response.

See [the docs](http://django-braces.readthedocs.org/en/latest/index.html) for more. [Project Page](https://github.com/brack3t/django-braces) on GitHub.

## Get it

    pip install django-braces

## Example

    def blub():
        pass
