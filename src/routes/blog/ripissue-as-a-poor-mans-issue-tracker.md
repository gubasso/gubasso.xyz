---
title: Ripissue as a Poor Man's Issue Tracker
date: '2023-10-23'
description: >-
  How to get free from third parties issue trackers, point-and-click tools and
  own your distributed development workflow.
categories:
  - ripissue
  - rust
  - issue tracker
  - cli
---
## Motivation

I've always thought that there was something wrong with the online tools to track issues or even tasks for that matter. Github, Gitlab, and other similar platforms have great resources to work with issues, but to depend on those web-based tools raised in me some yellow-flags that I wanted to solve.

- Every information (issue/task, and its respective metadata such as descriptions and discussions) is kept in their own platform, not with me or my projects. So, if the history of my development process is important, I was locked on a third party platform.
- If I want to relate each issue with its respective commit, I had to do some manual and repetitive work. Every commit I needed to copy the issue ID (or link) and paste it to the commit message. (once again, depending on the information stored at the online tool)
- Or, if I want some decopled workflow, I needed to replicate the history saved at the issue metadata on the commit message (repetitive and exausting work, prone to some manual error too)
- Finally, the "point-and-click" workflow. Yes, I don't like it not a single bit. "Click to create an issue". "Click to comment on an issue". "Click to close an issue". Point-and-click is wrong in so many levels...

## Solution

While dealing with my struggles I found the Poor Man's Issue Tracker article and it blew my mind. The principles behind this "method" are pretty simple, but powerful:

- Issues are just plain text
- Git is the ultimate tool for distributed plain text projects

So, why do I need a third-party-point-and-click-based-tool if all I need is: git; a method; and potentially some tool to help me with those together?

To help me with that, driusan (the author of Poor Man's Issue Tracker) also wrote a cli tool, written in Go, called Bug. And I used it for a long time in my projects.

It's a simple (but powerful) tool. It helps to manage the issues which are just directories and files inside our own project. So, as the issue is created, edited or closed, so the source code is changed. All the changes are registered inside the commit and the history of the code is mixed with the issue history (which is supposed to be the evolution and explanation of the code that is being implemented, but in a human readable language, e.g. English).

And that was all that I  needed to get rid of the web-based issue trackers with a platformm agnostic issue tracker e totally distributed (because of git).

However, as I used the Bug cli, there were some features lacking. For example: when I closed and issue with the `bug close` command, the correspondent directory was deleted, and I lost the information about that issue inside the repository (technically the history is still there inside the commits, but as those files are now gone, I needed to search though git to access those informtions again. Not very practical IMHO).

## Improvement: Ripissue

So I wrote my tool: ripissue which is a cli program, written in Rust, with the purpose of implementing some missing features in the `bug` cli and automate and improve the development workflow.

There is a lot to talk about `ripissue`'s features and how we can implement a fully distributed workflow just using git and ripissue. But I'll focus on the basic usage in this article.

### Instalation

For now, Ripissue can only be installed through Rust and Cargo toolchain. So, firstly let's install Rust (https://www.rust-lang.org/tools/install):

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Then install `ripissue` with `cargo install` (https://doc.rust-lang.org/cargo/commands/cargo-install.html):

```sh
cargo install ripissue
```

Make sure the program is installed correctly calling Ripissue from the cli with the `ripi` command:

```sh
ripi --version
```

### Using Ripissue to create an issue

The basic flow to work with issues in your project is to create a new one, update your issue while implementing something in your code and then closing this issue.

For that we need to be inside a git repository that will manage some coding being produced. And all `ripi` commands in CLI must be executed at the project root (i.e. where the `.git` directory is).

Let's begging with the issue creation. Run the command:

```sh
ripi issue create "my first issue"
```

If the program was correctly executed, two thing happened now. Firstly, Ripissue created the initial directory structure for all the issues and the created issue directory itself inside it:

```
.
└── ripi
  └── Issue
    └── my_first_issue
      └── description.md
```

The `ripi` directory is where all the issues will be managed. Inside it we have the `Issue` directory where the issues are stored (we also would have the `Sprint` directory to manage sprints, or the `Epic` directory and so on. To see all the elements Ripissue manages just run the command `ripi --help`).

The `my_first_issue` directory is where all the information about this specific issue is stored.

The `ripi create` command also added and commited the respective issue to git. And this is an automation implemented in Ripissue: every command also commits its changes on git with an automatically created commit message that refers to the issues ID (the ID is simply the issue directory name). The commit history must have something like this:

```
commit 274c22b85333296e88f2bdf8a3d82072dbd0d80e (HEAD -> master)
Author: Gustavo Basso <gubasso@eambar.net>
Date:   Mon Oct 23 15:39:06 2023 -0300

    (created) Issue #my_first_issue.
```

Where the commit message has the operation that was done with the issue ID (`created issue my_first_issue`).

This is the default behaviour. The idea here is that everything done within the project and managed by Ripissue must be registered in git. But if you wish to run the command without involving any git operation, just add the `--dry` flag. With this flag `ripi` will be executed normally but the git operations will not be executed (nor added or commited to git). For example:

```sh
ripi issue create "my first issue" --dry
```

### Update the issue and/or your code

Note that the `ripi` command also created the `description.md` file, where you can put all the details about this issue in any type and form. For example, we can edit the issue description adding some subtasks to it:

**description.md**
```md
# my_first_issue (Issue)

- [ ] subtask 1
- [ ] subtask 2
- [ ] subtask 3
```

The beauty of this management method is that it's just a directory with text files! You can edit it and put informations in any way you want.

As you have edited the issue details you may also have included some new code that implements what has being described in the issue. Let's create some sample code file such as:

**some-code.js**
```js
function example() {
  console.log('hello')
}
```

And update our issue description:

**description.md**
```md
# my_first_issue (Issue)

- [x] subtask 1
- [ ] subtask 2
- [ ] subtask 3
```

Now `git status` command will show some changes made to our repository:

```
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   ripi/Issue/my_first_issue/description.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        some-code.js

no changes added to commit (use "git add" and/or "git commit -a")
```

Another idea behind the Poor Man's Issue Tracker and implemented in Ripissue is that: why do I have to describe what is being done with my code if: 1) the commit diff it self has everything that is being changed; and 2) the issue description (that is now being commited along with the code itself) has all the details related to that change?

With this issue tracker based in plain text, distributed with git and managed with some organizational method, all the information necessary about each code change is in the commit itself. We do not need to rewrite this information in the commit message, nor replicate (copy/paste) some redundant description to it. All we need is to associate the commit with the respective issue and let Ripissue to fill the commit message for us.

To register our changes and update our issue we just have to add all the changes to git and commit it using the `ripi` command:

```sh
git add -A
ripi issue commit my_first_issue
```

To make things easier for us, we can run both commands (add + commit) by just adding the `--add` flag to `ripi`. The above commands are equivalent to:

```sh
ripi issue commit my_first_issue --add
```

A new commit was made to git with the following information:

```
commit e101d4eb74dd8429a4d9f885045b71ed667b5b1e (HEAD -> master)
Author: Gustavo Basso <gubasso@eambar.net>
Date:   Mon Oct 23 16:10:19 2023 -0300

    (up) Issue #my_first_issue.
```

Now the `(up)` prefix was added to our commit message instead of `(created)`, telling us that this commit is responsible for the update of the `my_first_issue` issue along with the code that was changed.

As the project evolves and more code are added related to that issue, every change will have the respective issue ID automatically added to the commit message. It's all you need to keep track of the history of that implementation and associate it with some detailed description (everything will be registered inside the issue directory).

### Closing an issue

Let's simulate the whole implementation of the `#my_first_issue`:

**some-code.js**
```js
function example() {
  console.log('everything is ready')
}
```

**description.md**
```md
# my_first_issue (Issue)

- [x] subtask 1
- [x] subtask 2
- [x] subtask 3
```

Our `git status` is now like this:

```
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   ripi/Issue/my_first_issue/description.md
        modified:   some-code.js

no changes added to commit (use "git add" and/or "git commit -a")
```

To close the issue all we need to do is the same process done with the command `ripi commit`, but now with the `close` subcommand:

```sh
ripi issue close my_first_issue --add
```

This command will execute the following processes:

- Ripissue will add all the files to git (because of the `--add` flag)
- Before closing the issue, it will run the `ripi commit` command one last time. This is done because if you have configure some `pre-commit` hook, this will be executed and may fail before closing the issue.
- Ripissue will move the issue inside `ripi` directory:

**from:**
```
Issue/my_first_issue
```

**to:**
```
.closed/Issue/my_first_issue
```

- This change (moving the issue dir to `.closed`) will be added to git (independent of the `--add` flag)
- A new commit will be created with the prefix `closed` before the issue ID.

Now, our `git log` has two new commits:

```
commit ad486932d86cc9e899176853c3dc8636e8790141 (HEAD -> master)
Author: Gustavo Basso <gubasso@eambar.net>
Date:   Mon Oct 23 16:23:56 2023 -0300

    (closed) Issue #my_first_issue.

commit 475ca98936cbc92daf62c246f3d2fefe911bed4a
Author: Gustavo Basso <gubasso@eambar.net>
Date:   Mon Oct 23 16:23:56 2023 -0300

    (up) Issue #my_first_issue.
```

And the `ripi` directory structure is like this:

```
ripi
├── .closed
│  └── Issue
│     └── my_first_issue
│        └── description.md
└── Issue
```

This is one main difference of behaviour from the Bug program: Ripissue doesn't simply deletes our issue when we close them (it still has the `ripi issue delete` command that does that though). All the closed issues are kept inside the repository, stored inside de `.closed` directory. That way, all the history is kept in plain text files and with git command and/or GUI tools we can consult the issue directory history to see all the related code changes.

Everything is kept in one place, in plain text, fully integrated with our commit history. Isn't that something?!

## Other functionalities and Workflow

Ripissue has more functionalities than the ones detailed in this article, such as: working with git branches, managing and tracking sprints, epics, initiatives, etc. But the goal here is to present a brief introduction and a simple use case that, in my experience, is more than enough to avoid using third party tools at least for personal projects.

I intend to continue to write about Ripissue and present all it's functionalities and a full workflow that may substitute the need to use any web-based git platform such as Github and Gitlab to develop a project. Do you know that it's possible to manage a whole project with any number of developers with just git and Ripissue in a purist, simple and powerful way? That's what is planed to be in the next articles! Stay tuned and sign to my RSS chanel!
