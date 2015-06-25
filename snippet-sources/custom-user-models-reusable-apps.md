---
addedOn: 2015-06-25
tags: 15-min custom-user settings south
title: Custom User Models in Reusable Apps
type: thought
---
While playing with [Django Drip](#!snippets/django-drip), I struggled to make it work with our custom user model. As usual, I was not the first to notice. Reading up on how Django Drip was modified, helped me understand the issue. You need two things:

First, I saw [issue 29](https://github.com/zapier/django-drip/issues/29): It's [pull request](https://github.com/zapier/django-drip/pull/28/files) replaced imports of `django.contrib.auth.models.User` with [`get_user_model()`](https://docs.djangoproject.com/en/1.8/topics/auth/customizing/#django.contrib.auth.get_user_model). (The pull request differs from the docs in that it uses the model class directly, instead of the `AUTH_USER_MODEL` setting when specifying foreign keys.) With this change, a running app works with a custom user model.

But what about setup? My problem occured during migrating the database. I searched some more and found a [pull request about dynamic migrations](https://github.com/zapier/django-drip/pull/50). The issue is that Django migrations keep the state of the models at the time — which of course is different from our custom model. The solution is to replace the hardcoded references, such as label and class name, with dynamic ones and the complete (and possibly wrong) frozen version of the model with a minimal one. [Kevin Dias wrote a blog post](http://kevindias.com/writing/django-custom-user-models-south-and-reusable-apps/) about the topic, which is a good, concise read.
