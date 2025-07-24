---
layout: ../../layout/MarkdownLayout.astro
title: "Run GitHub actions locally with act"
description: "Speed up your CI/CD workflow by running GitHub Actions locally with act! Iteratively test each workflow and job to make sure everything works before pushing to your repository."
pubDate: July 24, 2025
tags: ["CI/CD", "GitHub Actions"]
---

# Run GitHub Actions workflows on your local machine with act!

Running and testing GitHub Actions can be time consuming and erroneous. Plus you might hit a billing threshold which will block you.

This is where <a href="https://github.com/nektos/act" target="_blank">act</a> comes in!

From the docs:
> When you run act it reads in your GitHub Actions from .github/workflows/ and determines the set of actions that need to be run. It uses the Docker API to either pull or build the necessary images, as defined in your workflow files and finally determines the execution path based on the dependencies that were defined. Once it has the execution path, it then uses the Docker API to run containers for each action based on the images prepared earlier. The environment variables and filesystem are all configured to match what GitHub provides.

Essentially, it allows you to work on your own machine, get all the dependencies you would need in your workflow, and test it fast.

In the next steps, I will go over what it takes to test, build and publish a **Flutter app** using only *act*

## Setting everything up

First, you need <a href="https://docs.docker.com/engine/install/" target="_blank">Docker</a> in order to run *act*

Once you have installed Docker, run the following command to install act (works on any OS with `bash`):

```bash
curl --proto '=https' --tlsv1.2 -sSf https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash
```

We have everything in place, let's use it.

# Usage

// ToDo