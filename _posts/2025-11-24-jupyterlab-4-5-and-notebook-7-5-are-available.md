---
layout: blog_post
title: "JupyterLab 4.5 and Notebook 7.5 are available!"
author: Jeremy Tuloup
date: 2025-11-24
tags: [jupyterlab, notebook, release]
original_url: https://blog.jupyter.org/jupyterlab-4-5-and-notebook-7-5-are-available-1bcd1fa19a47
---

JupyterLab 4.5 and Jupyter Notebook 7.5 have been released! This new minor
release of JupyterLab includes 51 new features and enhancements, 81 bug fixes,
44 maintenance tasks and 38 documentation improvements. Jupyter Notebook 7.5
has also been released, including many of the fixes and enhancements from the
JupyterLab 4.5 release.

## Highlights

### Audio and video viewers

JupyterLab now includes built-in audio and video viewers, so you can open
audio and video files directly from the file browser without leaving
JupyterLab.

### Automatic theme switching

JupyterLab can now automatically switch between light and dark themes when
"Synchronize with System Settings" is enabled, following your operating
system's appearance preference.

### Better cell rendering by default

The default windowing mode is now `contentVisibility`, which improves cell
rendering performance and alleviates a number of previously reported issues
with the full windowing mode.

### Accessibility improvements

This release continues the ongoing accessibility work in JupyterLab:

- Dialog components display buttons and checkboxes on separate lines for
  better readability.
- Selections in the terminal have better visibility under high-contrast
  themes.
- Keyboard navigation and the tab order in the status bar have been improved.

## Try it now

You can try JupyterLab 4.5 by installing it from PyPI:

```bash
pip install --upgrade jupyterlab
```

Or with conda / mamba:

```bash
conda install -c conda-forge jupyterlab
```

Similarly, for Jupyter Notebook:

```bash
pip install --upgrade notebook
```

## Acknowledgements

Many thanks to the 50+ contributors who made this release possible, and to
all the users who reported issues and tested pre-releases. See the JupyterLab
changelog for the full list of changes and contributors.
