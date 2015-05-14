---
tags: 15-min admin efficiency
title: django-easy-select2
url: https://github.com/asyncee/django-easy-select2
---

Imagine a model UI in Django admin. It has a foreign key to another model with hundreds of entries. Now, *feel* how your body tenses up, preparing to scroll thru that endless list in a hopeless search for that one line. Or, you use a searchable text box.

![Image of selectbox in Django admin with proposals for completion](img/django-easy-select2.png)

That's a [Select2](https://select2.github.io/) search field, provided by [django-easy-select](https://github.com/asyncee/django-easy-select2). [Docs](http://django-easy-select2.readthedocs.org/en/latest/)

## What else can it do?

* multi-select (for many-to-many relationships)
* create item in the search box

## Make it happen

    # 1. Install the Python module:
    pip install django-easy-select2

    #  2. Add it to your installed apps in settings:
    'easy_select2'

    # 3. Import it in your admin module:
    from easy_select2 import select2_modelform

    # 4. Create a form for your admin-model:
    PollForm = select2_modelform(Poll)

    # 5. Use it as the form for your admin-model.
    class PollAdmin(admin.ModelAdmin):
        form = PollForm
