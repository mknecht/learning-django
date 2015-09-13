---
addedOn: 2015-08-29
tags: 15-min quickstart vanilla
type: thought
title: Get Started Quickly
---

How do you create a vanilla Django project, and quick?

When doing my 15 minutes of learning Django each day, I often find myself in need of an unspoiled project where I can try a new app or configuration. I only have 15 minutes — so I need it fast.

A few solutions help, ordered by my personal taste:

# virtualenvwrapper.django

Uses `virtualenvwrapper`'s [mkproject](http://virtualenvwrapper.readthedocs.org/en/latest/command_ref.html#mkproject) to create a new Django project.

Start a new project like so:

  mkproject -t django mywebsite

Leaves you with an already activated virtualenv, in which latest Django is installed, and a project created by `django-admin.py`.

Does not work, when you only install it in a virtualenv and use it from there.

[BitBucket](https://bitbucket.org/dhellmann/virtualenvwrapper.django)
