---
addedOn: 2016-04-28
tags: 15-min tests performance py.test transactions
type: thought
title: Speed Up Django Tests
---

Speeding up the test runs is a neverending story.
Here a list of things to do, roughly sorted by usefulness and ease-of-implementation.
Below are resources on the topic I found useful.

## Use the slimmest TestCase possible

Your test cases usually inherit from a `TestCase` class.
Each brings their own set of features and these will slow down your tests.
So, use the slimmest (and fastest) `TestCase` possible!

Typical ones, from fastest to slowest:

 * `unittest.TestCase`
   * for testing algorithms
   * if you don't need your database (for saving or creating)
 * `django.test.TestCase` ([docs](https://docs.djangoproject.com/en/1.9/topics/testing/tools/#django.test.TestCase))
   * if you need database models
 * `django.test.TransactionTestCase` ([docs](https://docs.djangoproject.com/en/1.9/topics/testing/tools/#django.test.TransactionTestCase))
   * if you manage transactions yourself
   * if you use a database that can't rollback transactions (e.g. MySQL with MyISAM)

By inheriting from `django.test.TestCase`, your test class signals that
it needs to create and modify models, i.e. needs a database.
Setting up the database takes a long time, though.
If you don't need it, for example because you're only unit-testing a function or class,
you can avoid this overhead by inheriting from `unittest.TestCase`.

## Parallelize Tests with py.test: xdist

Run more than one test at the same time, instead one at a time.

If you're running your tests with [py.test](http://pytest.org/),
you can do this with the [xdist](http://pytest.org/latest/xdist.html) plugin.

Typically in many Django tests you'll access the database, meaning those tests are are I/O bound.
In this case, parallelizing can speed up things a lot, even with a single CPU.

First, install [xdist](https://github.com/pytest-dev/pytest-xdist):

    pip install pytest-xdist

To spread out tests over three processes / CPUs:

    py.test -n 3

Try experimenting to find the right number.

Catch: You're tests need to be independent!
If one test relies on another test having run before,
you will have very hard to track down test-failures.
(Obviously, order-dependent tests are a bad thing, no matter if you parallelize or not.
Test this by running your test suite in a loop using the `--random` parameter
of the [pytest-random](https://github.com/klrmn/pytest-random) plugin.)

## Keep the database between test-runs

This erases the initial set-up time of the database because the database + tables and fixtures are already there.
Super-useful especially when running only a small selection of tests.

Django >=1.8: Use the [--keepdb](https://docs.djangoproject.com/en/1.8/ref/django-admin/#django-admin-option---keepdb) flag.

When using py.test with Django, you really should be using pytest-django already.
If you do, you can run your tests with the `--reuse-db` parameter ([docs here](http://pytest-django.readthedocs.io/en/latest/database.html#reuse-db-reuse-the-testing-database-between-test-runs)).

Note if you want to use this by default, you can put it in your `pytest.ini`:

    [pytest]
    addopts = --reuse-db

Catch: Unlike Django's native `--keepdb`, pytest-django's `--reuse-db`
will not auto-detect migrations and recreate the database when needed.
This means, you'll need to invoke your tests either without `--reuse-db`
to recreate the database and run the migrations.

If you have `--reuse-db` in your settings and can't easily omit it,
there is a [parameter to override this](http://pytest-django.readthedocs.io/en/latest/database.html#create-db-force-re-creation-of-the-test-database): `--create-db`.

---

## Resources

* [How to speed up tests with Django and PostgreSQL](http://nemesisdesign.net/blog/coding/how-to-speed-up-tests-django-postgresql/)
