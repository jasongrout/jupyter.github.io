---
layout: blog_post
title: "JupyterLite Officially Joins Project Jupyter!"
author: Project Jupyter
date: 2026-02-19
tags: [jupyterlite, webassembly, announcement]
original_url: https://blog.jupyter.org/jupyterlite-officially-joins-project-jupyter-77df24c8db80
---

JupyterLite is now an official part of Project Jupyter! This milestone marks
a significant step forward for interactive computing in the browser and
strengthens JupyterLite's role within the Jupyter ecosystem.

## What is JupyterLite?

JupyterLite is a JupyterLab distribution that runs entirely in your web
browser. Kernels execute directly in the browser using WebAssembly, which
eliminates the need for an application server. A JupyterLite site is just a
collection of static files, so it can be deployed anywhere static files can
be hosted.

## Why it matters

Running Jupyter entirely in the browser has some compelling benefits:

- **Instant access**: start computing with a single click — no prior Python
  setup, environment configuration, or server management required.
- **Scalability**: host thousands of concurrent users from a static website
  (for example GitHub Pages) with zero per-user server costs.
- **Privacy and portability**: code and data remain in the user's browser,
  which makes JupyterLite ideal for embedding in documentation, tutorials,
  and interactive demos.

JupyterLite already powers the "Try Jupyter" experience on the official
Jupyter website, and it is used by projects such as numpy.org and sympy.org
for interactive documentation. It also underlies services such as Jupyter
Everywhere and notebook.link.

## Joining the Jupyter Frontends subproject

JupyterLite becomes part of the Jupyter Frontends subproject, alongside
JupyterLab and Jupyter Notebook. Bringing JupyterLite into the Frontends
subproject offers several benefits, including much easier coordination with
JupyterLab and Notebook development — many technical decisions in JupyterLab
affect JupyterLite, and vice versa.

Since its creation in 2021, JupyterLite has grown from an experimental proof
of concept into a widely used distribution with a rich ecosystem of kernels
and extensions, including the Pyodide-based Python kernel and the xeus
family of WebAssembly kernels.

We are excited about this next chapter for interactive computing in the
browser. Try it out, report issues, and contribute — JupyterLite development
happens in the open, and new contributors are always welcome!
