---
title: >-
  Optimizing Development Workflows: From Gitflow to Trunk-Based Development with
  Ripissue
date: '2024-07-09'
description: >-
  In this article, we expore the transition from Gitflow to trunk-based
  development. With this change we were able to increase our productivity and
  quality in software development. Moreover, we give insights into the Ripissue
  CLI tool and its integration into the new Cwntflow.
categories:
  - Software Development
  - Git Workflows
  - Continuous Integration
  - Open Source
  - Project Management
---
<script context="module">
  import { base } from "$app/paths";
</script>

## Contents

## Introduction

The software development process plays a crucial role to ensure
code quality and team productivity. This article explores our
journey of transitioning from Gitflow to trunk-based development,
with a focus on the Ripissue CLI tool and its integration into our
custom workflow, Cwntflow. We'll discuss why a structured
development process matters, our experience with Gitflow, the
benefits of trunk-based development, and the role of Ripissue as a crucial helper to our workflow.

## Why Should I Care About a Development Process?

At cwnt.io, co-founded by myself, Gustavo Basso, and my partner Ismael, we prioritize quality and productivity in our open-source projects and tech consulting services. Despite being a small team, we understand the importance of a well-defined development process to maintain code quality and facilitate future growth.

By studying and implementing a development process, we aim to achieve agility and efficiency in our projects. Our goal is to create a workflow that integrates all aspects of development, from coding to issue tracking, without compromising quality. We believe that this approach enables us to be more productive and ensures that our code meets high standards.

Regarding Ripissue, one of the main motivations behind creating this tool was to solve real-world problems, optimize our workflow, and integrate with our broader development process and organization. Ripissue is designed to make issue tracking and task management easier, and to maintain a clear development workflow.

## Just for context, a brief Ripissue Overview

Ripissue is a command-line interface (CLI) tool designed to simplify issue tracking within Git repositories. It provides a straightforward file structure and workflow for managing issues and tasks, and leverages Git's distributed nature.

Some of Ripissue's key features are:

- Easy to install via Cargo
- Operates within the project's root directory, automatically handling Git commits and file changes.
- Allows creating, updating, closing, reopening, and listing of issues directly from the CLI.
- Facilitates automatic branch creation and switching related to specific issues.
- Integrates with Git and ensures that all operations are reflected in the repository.

For more information, there is <!-- link --> this article that we wrote that explains the tool in more details.

## Our first try: a Gitflow inspired process

To improve our workflow, we studied various development processes and workflows. We draw insights from resources like <!-- link --> Atlassian's comparison of Git workflows and realized that combining elements from different models could help us design a process tailored to our needs.

Our initial approach was inspired by Gitflow, which is a popular branching model that maintains a stable master branch, a development branch, and feature and release branches (many!). While this structure is well-organized, it proved to be cumbersome and slow for our needs, even with a small team.

We faced several drawbacks with Gitflow. Our workflow became bureaucratic and inefficient. The process was not agile enough for our taste, and the overhead of managing multiple branches and pull requests (PRs) became a bottleneck.

## Trunk-Based Development to the Rescue

As we continued to work on improving Ripissue, we also realized the need to research and implement a better development process. In our findings we found the trunk-based development model — a workflow simpler and more powerful than Gitflow. Essentially, trunk-based development involves a single main branch (commonly called mainline) where all developers commit frequently. This approach offers several advantages:

- Simplicity: Fewer branches to manage, reducing complexity.
- Agility: Faster integration (i.e. REAL continuous integration) and continuous delivery.
- Quality: Automation flows and frequent commits and reviews to ensure code quality.
- Scalability: Easier to scale the development team and handle external contributions.

## Implementing (the new) Cwntflow

So we decided to switch to a trunk-based development workflow because it could allow us to build with a faster, cleaner, and clearer process. This approach alongside with Ripissue helps us to make the development workflow easier, faster, and self-documented alongside the code, eliminating the need for third-party platforms or context switching from the developer's terminal to a visual web interface.

Cwntflow, our custom workflow, is inspired by trunk-based development and it features two main processes: one for project core-team and another for external contributors. The new Cwntflow is designed to ensure efficiency while maintaining high code quality.

For the core-team of developers, we follow a more strictly trunk-based model. Each commit is "production ready", safeguarded by automatic checks, and reviewed asynchronously. This approach ensures that all commits are reviewed as soon as possible without blocking the development process, and still maintains high code quality and facilitates continuous integration. The core-team interact directly with the mainline of development, making the process fast and efficient.

<br>

<img src="{base}/CoreTeamFlowMermaid.png" style="max-width: 100%;">

<br>

External contributors follow a more classic PR workflow. They work in forks of the central repository, collaborating with the core-team who act as the gatekeepers of external implementations. Contributors and developers exchange code and feedbacks throughout this review workflow and once the final implementation is reviewed and approved by a core-team member, the code is finally pushed to the mainline.

<br>

<img src="{base}/ContributorsFlowMermaid.png" style="max-width: 100%;">

<br>

Regardless of the workflow, every commit needs to be reviewed. We implement safeguards to enforce code quality, such as automation checks, tests, git hooks, and continuous deployment (CD) pipelines. As we are committing directly to the mainline, we have to do as many automated checks as possible to mitigate the risk of breaking the code and ensures that we keep high standards of quality and productivity.

## Enhancing Ripissue for Better Integration

Ripissue is used as a backbone for our process. It was designed to make development workflows as simple as possible as it integrates issue tracking with Git and allows developers to manage issues and tasks directly from the CLI. The current version (v0.1.5) supports a full range of functionalities, and we are working on refactoring it to improve usability and add new features.

Some of the upcoming features include AI-assisted commit messages, built-in chat for developer-reviewer communication, and enhanced reporting. Our goal is to combine effective management conventions with powerful tooling to increase productivity and scalability.

## Conclusion

Transitioning from Gitflow to trunk-based development has significantly improved our productivity at cwnt.io. The integration of Ripissue into our new Cwntflow contributed greatly for the process. We are ready to take the next step and battle-proof our development tools and conventions to improve our work and future growth. And we invite you to battle-test those tools with us and give your feedback on how we can improve and make the development flow even better. That's our goal.
