---
layout: blog_post
title: "Exploring Petabytes of the Night Sky — Jupyter Notebooks at NOIRLab's Astro Data Lab Science Platform"
author: Robert Nikutta
date: 2026-04-20
tags: [science, astronomy, jupyterhub, guest-post]
original_url: https://blog.jupyter.org/exploring-petabytes-of-the-night-sky-jupyter-notebooks-at-noirlabs-astro-data-lab-science-ae012dfd4723
---

What if you could query 420+ billion rows of astronomical catalog data from
a Jupyter notebook in your browser, in seconds? That is what the Astro Data
Lab science platform at NSF NOIRLab's Community Science and Data Center
makes possible — and since its public launch in June 2017 it has become one
of the largest deployments of Jupyter notebooks in professional science.

## The data

Astro Data Lab contains about 420 billion catalog rows across 30+ major
astronomical surveys — DES, the Legacy Surveys, DESI, the NOIRLab Source
Catalog, SDSS, Gaia, unWISE, SMASH, S-PLUS, VHS, 2MASS, and dozens more —
plus 31 million spectra served via SPARCL (the SPectra Analysis and
Retrievable Catalog Lab), and petabytes of images accessible through a
Simple Image Access service and a cutout API.

## Jupyter as the front door

Every registered user gets a persistent JupyterHub environment with the full
astronomy Python stack pre-loaded — Astropy, NumPy, SciPy, Matplotlib,
Pandas, scikit-learn — along with the `astro-datalab` client library for
querying the databases and retrieving spectra and images. Because the
notebooks run next to the data, users can crossmatch enormous catalogs and
work with survey-scale datasets without ever downloading them.

A curated collection of example notebooks helps newcomers get started, from
introductory how-tos to complete published science cases that can be
reproduced end-to-end in the browser.

## The community

Today more than 4,800 astronomers in over 90 countries use Astro Data Lab,
submitting tens of millions of data queries each year — from students
writing their first query to research teams preparing large survey papers.

Jupyter notebooks have become the lingua franca of data-intensive astronomy,
and platforms like Astro Data Lab show what is possible when open-source
scientific computing infrastructure meets open data.
