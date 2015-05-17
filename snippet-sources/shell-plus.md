---
addedOn: 2015-05-11
tags: 15-min efficiency manage.py tools
title: shell_plus
type: thought
url: http://django-extensions.readthedocs.org/en/latest/shell_plus.html
---

[shell\_plus](http://django-extensions.readthedocs.org/en/latest/shell_plus.html) is a shell for manage.py that *imports all models on startup*. Amazing, in't?

Its is part of [Django Extensions](./snippets/django-extensions).

## Which shell as default?

Put this in your `settings_local.py`, if `shell_plus` is doing it wrong.

```
SHELL_PLUS = "ipython"
```
