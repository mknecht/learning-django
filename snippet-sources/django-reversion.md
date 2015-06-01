---
addedOn: 2015-06-01
author: Dave Hall
tags: 15-min admin model feature
title: django-reversion
type: project
url: https://github.com/etianen/django-reversion/
---

[django-reversion](https://github.com/etianen/django-reversion/) gives you version control for your Django models. It's like Git for your data! (*cough*)

django-reversion tracks changes to models, and keeps the old versions around. Then, it extends Django admin to give you easy access to those old versions. You can view them, and restore them.

## How does it look like?

When you edit an instance of a model, you get an additional “History” button:

![Django admin view of a model instance with a History buttion](img/django-reversion-model-details.png)

If you click on it, you see the change history of that instance:

![Django admin view of the change history of a model instance](img/django-reversion-history.png)

When viewing the list of model instances, you get an additional “Recover deleted nodes” button:

![Django admin list view model instances](img/django-reversion-model-list.png)

If you click on it, you see the list of deleted models, and can select the ones to be restored:

![Django admin view of deleted model instances for recovery](img/django-reversion-recovery.png)

## How does it work?

django-reversion acts on post-save signals of registered models. For the rest, read the docs [explaining how it works](http://django-reversion.readthedocs.org/en/latest/how-it-works.html).

## How do I add it to my site?

Read the [Getting Started guide](http://django-reversion.readthedocs.org/en/latest/).

## Gotchas

You may run into conflicts, if your ModelAdmin class already extends another class:

```
TypeError: Error when calling the metaclass bases
    Cannot create a consistent method resolution
order (MRO) for bases ModelAdmin, VersionAdmin
```

For example, I got the above, while wanting to add version control to the `Note` class in the [django-easy-select2](#!/snippets/django-easy-select2) demo app.

## Links

[GitHub](https://github.com/etianen/django-reversion/) | [Docs](http://django-reversion.readthedocs.org/en/latest/)
