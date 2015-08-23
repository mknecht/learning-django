---
addedOn: 2015-08-23
tags: 15-min project models utils
type: project
title: django-model-utils
url: https://github.com/carljm/django-model-utils
---

As the name suggests. [django-model-utils](https://github.com/carljm/django-model-utils) provides classes and helper code for models. A selection of the goodies:

## TimeStampedModel

[Single most useful thing](https://django-model-utils.readthedocs.org/en/latest/models.html#timestampedmodel): Adds `created` and `modified` datetime fields to your model.
Keeps the latter up to date when your model changes.


## StatusModel
Gives a status field to a model, and makes it easy to update and query.

Example from [the docs](https://django-model-utils.readthedocs.org/en/latest/models.html#statusmodel):


    from model_utils.models import StatusModel
    from model_utils import Choices

    class Article(StatusModel):
        STATUS = Choices('draft', 'published')

    # ...

    a = Article()
    a.status = Article.STATUS.published

    # this save will update a.status_changed
    a.save()

    # this query will only return published articles:
    Article.published.all()


Uses the [StatusField](https://django-model-utils.readthedocs.org/en/latest/fields.html#statusfield) to provide the status, the [MonitorField](https://django-model-utils.readthedocs.org/en/latest/fields.html#monitorfield) to monitor it, and the [QueryManager](https://django-model-utils.readthedocs.org/en/latest/managers.html#querymanager) to allow for nice queries as the last.

## Choices
Makes Django choices on model values easy to use.


[From the docs](https://django-model-utils.readthedocs.org/en/latest/utilities.html#choices):

    from model_utils import Choices

    class Article(models.Model):
        STATUS = Choices('draft', 'published')
        status = models.IntegerField(
            choices=STATUS,
            default=STATUS.draft,  # No literals, only names!
        )
    ```

    ```python
    from model_utils import Choices

    class Article(models.Model):
        # 1. the database representation
        # 2. the python identifier
        # 3. display text
        STATUS = Choices((0, 'draft', _('draft')), (1, 'published', _('published')))
        status = models.IntegerField(choices=STATUS, default=STATUS.draft)

    status_display = Article.STATUS[article.status]

## Get it

    pip install django-model-utils
