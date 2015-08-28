---
addedOn: 2015-08-28
tags: admin users support
type: thought
title: Switching Users
---
For customer support, it's great if you can use the customers accounts as they would.
Of course, on [django-packages](https://www.djangopackages.com/) there is a grid
for this: [user-switching](https://www.djangopackages.com/grids/g/user-switching/).

Currently, there is only one mature solution:

# Django Hijack

After configuration, you'll get a new button in the Django Admin users page:

![Button on the right-hand side in the Django Admin user page](img/django-hijack-button.png)

After clicking it, you'll be redirected to the main page, but logged in as that user.

So you don't get confused, you can configure Django Hijack to display a warning at the top of the page:

![Warning at the top of the page](img/django-hijack-warning.png)

There are API calls to switch users, too, and more features. [GitHub repo with docs](https://github.com/arteria/django-hijack)


## Custom User Models

    ImproperlyConfigured: `SHOW_HIJACKUSER_IN_ADMIN` does not work with a custom user model. Instead, mix in the `HijackUserAdminMixin` yourself

If you run into this problem, you're using a custom user model. As indicated, there is a fix for [custom user models](https://github.com/arteria/django-hijack#support-for-custom-user-models).

# django-su

Inferior in terms of features and maturity. Did not seem to handle custom user models, so did not test it.

[https://github.com/adamcharnock/django-su](django-su at GitHub)
