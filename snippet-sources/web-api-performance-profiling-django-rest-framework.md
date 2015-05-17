---
addedOn: 2015-05-11
author: Tom Christie
tags: novice django-rest-framework performance REST
type: blog-post
title: Web API performance: profiling Django REST framework
url: http://www.dabapps.com/blog/api-performance-profiling-django-rest-framework/
---

[Tom Christie shows](http://www.dabapps.com/blog/api-performance-profiling-django-rest-framework/) with some basic measurements where time is consumed during a REST API request, using [Django REST framework](./snippets/django-rest-framework). He argues there is no relevant performance downside to using a “full-blown” framework.

Bottom line: If you have a bottleneck, it's not the framework. It's usually the DB.

Good read for novices.
