---
addedOn: 2015-07-19
tags: high-performance scaling myths
type: thought
title: Scaling Django
---
Scaling **Disqus** to 8 Billion Page Views, Matt Robenolt notes that Django's performance is not the issue in building a responsive, scalable system. Rather, the latency between system layers, like the database, is. He then describes [how caching whole responses with Varnish](http://blog.disqus.com/post/62187806135/scaling-django-to-8-billion-page-views) has been key to scaling.
