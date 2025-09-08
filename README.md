# biochar-systems-dev

This repository contains the content and layout files for the Hugo website on "biochar systems", developped as the final deliverable of the Vinnova research project [Biochar systems analysis for climate benefits](https://www.vinnova.se/p/biokol---systemanalys-for-klimatnytta/).

If you are reading this, it means that you are likely an editor of the contents of the website. This README.md file will guide you in how to edit the website: 

## Contribution guide

Feedback & contributions to this project are welcome. Feedback can be sent by email to elias.azzi@slu.se. Contributions can be made via filing issues on Github & making pull requests. 

On the content side:
- Identification of bugs or language typos
- Translation improvements to existing languages (English, Swedish), translation to new languagues
- Submission of new contents e.g. pyrolysis datasheets, life cycle inventories
- Suggestion of new references & scientific content vulgarisation
- ...

On the technical side: 
- Suggestion of new interactive modules, or improvement of existing ones
- ...

## Prerequisites & Installation

### 1. Hugo

For Windows users:
- download the precompiled hugo release `hugo_extended_0.88.1_Windows-64bit.zip` from this page https://github.com/gohugoio/hugo/releases
- unzip this folder somewhere on your machine, e.g. in "C:\Users\eazzi\\.hugo"
- the folder .hugo should contain "hugo.exe", a license file, and a readme.md file
- then, we need to add this folder to our Windows system variable path so that we can use hugo in the command line (cmd)
- in the windows search, type 'path' and you should see the Control Panel menu called "Edit environment variable for your account". Click it.
- in the list of variables, double-click on the variable called "Path"
- in the window that opened, add a new line with the path "C:\Users\eazzi\\.hugo" (where your hugo.exe file is)
- save/ok/close

To check your that everything is ok:
- open a command line (cmd),
- make sure the command is on the same drive as where you put your .hugo files (i.e. C: in example above, and not H:) (note: to change drive in the cmd, just type C: and enter)
- type 'hugo version' 
- it should return the version number of hugo

### 2. git or github account
Git & GitHub are two different things, but we use them together.
- GitHub is hosting the online version of the repository, accessible to others
- Git is used locally, on your computer, to track changes you make to a folder, and save these changes at different points in time (so called commits)

>> Note: as an alternative to the command-line git, you can use the GitHub Desktop App (which is a graphical user interface for git).

From the git command line, we can push the changes we made locally onto the remote (online github repository), so that others can have access to the updates.

- Install git (from Software Center on a KTH laptop, or from https://gitforwindows.org/). ALTERNATIVELY: use Github Desktop app.
- Make a github account (https://github.com/) & ask to access this repository as editor from another person in the project

### 3. A nice text editor
To edit the website, I recommend using a text editor like Visual Studio Code (open-source, from Microsoft): https://code.visualstudio.com/ 

## Get a copy of this repository & use the git workflow

### 1. Cloning 
Now that you have all the software needed, time to get this repository on your machine (i.e. clone it):

- a bit higher up on this page, click on green button "Code"
- in the dropdown menu, either:
- copy the git clone adress and go to your git bash command line (recommanded)
- download the zip files and put them somewhere on your computer, and stat git bash in that repository

Tutorials: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository 

### 2. Branching

Before making major changes, you should probably make a 'new' branch.

By default, a git repository has always a "master" branch. That's the main branch, where you have the latest stable working version of your project. Then, you can decide to make a new branch, i.e. a copy of the current branch, and save your changes (commits) to the new branch. At any time, you can switch between master & new branch or delete the new branch if not satisfied with your code. But if satisfied with your changes on the new branch, you can "merge" it with the "master" branch. Then, the new branch disappears, and changes are saved in the master. 

To create a new branch: 
```git
git checkout -b AddingSwedishTranslation
```
More on this: Git Workflow https://guides.github.com/introduction/flow/ & check youtube videos about it 

### 3. Push & Pull requests
Once happy with the changes on your local machine, you want to make them available on the remote online repository. For that you need to "push" your code and, in some cases, make a "pull request".

- Push https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository 
- Pull requests https://opensource.com/article/19/7/create-pull-request-github


### Cheatsheet of git commands
The ones we use all over and over:
```git
git status
git add .
git commit -m "Some message"
git push --set-upstream origin master

git checkout NameOfABranch
git checkout -b NameOfNEWBranch

git checkout master
git merge NameOfNEWBranch

```

The ones we use just a few times
```git
git init

git remote add origin https://github.com/ntropy-esa/biochar-systems-dev

```

## Editing the contents of the website

To do that properly, 
- open visual code (your new text editor), and select the folder biochar-systems-dev
- open a git bash in your local folder biochar-systems-dev: this window will be used for git commands, checking status, making commits (or GitHub Desktop)
- open another git bash cmd in the folder biochar-systems-dev, and run in that one the command hugo ``` hugo serve -D --disableFastRender ``` This will launch a local web server on your computer. It will tell you that the hugo website is running at some localhost adress. Open your favorite web browser (ideally in a private window, to avoid style caching issues) and type that address (typically http://localhost:1313/biochar-systems/). Any changes you do in the content files, will  be rendered directly. Sometimes, there are bugs and it won't manage to compile and render the changes. In that case, just interrupt (Ctrl+C in that bash window), and re-type the command (shortcut: arrow-up, and enter).

### Hugo folder structure
The folder biochar-systems-dev contains the following subfolders:
- archetypes > not used
- assets > used, if any custom css or js is needed, it can go in here
- content > used, the main folder for changing the content
- data >    
- fontawesome > used, just some special characters used sometimes
- layouts > used, the main folder for changing the layout
- resources > not used
- static > used, contains some static files like images or other scripts: it's called static because hugo simply copies these file to the final website without editing them at all
- theme > the second main folder for changing the layout, each theme has a folder structure as above with arhetypes/assets/layouts/static and few other things. The theme used is defined in the config file of the website
- config.toml > the config file of the website

To know the meaning of each of this folders, check out hugo documentation. The important ones are explained below:

- content
- layouts
- static
- theme/airspace-hugo-adapted

### Change content files

Markdown files that can also have html text.

Page bundles

Associated ressources 

#### Grid layout of pages

The pages have a grid layout based on bootstrap 

### Change layout / theme files


### Make use of `shortcodes`
In hugo, we can add special content in a markdown content page by the use of "shortcodes". Shortcodes are usually HTML/JavaScript pieces of codes, e.g. to include a Youtube video in your page, make a table interactive, display an image gallery... You can define your own shortcodes or adapt from existing ones.

Some of the shortcodes currently installed in this project (check the folders: layouts/shortcodes, and themes/_themeName_/layouts/shortcodes) are:

#### highlight
#### button
#### expandcss
#### tabs
#### tooltip_glossary
#### fontawesome
#### bw2widget
#### stabilitytable
#### notice
Can be of type: tip (green), warning (red), info (orange), note (blue)
{{% notice tip %}}
A notice disclaimer
{{% /notice %}}

### Scientific formulas
It's not a shortcode, but a plugin based on MathJax. It allows to write scientific equations as in LaTeX, and they will be rendered in html using this MathJax.js library. See example on demo page. It needs the parameter ```mathjax : true``` in the frontmatter of the page.

### Commit your changes in git

Main commands to use (check on what branch you are):

```git
git status
git add .
git commit -m "I changed this and that"
```


## Make a pull request to the remote repository
To push
```git
git push -u origin AddingSwedishTranslation
```
The new branch should be on github, and you can head to github's website to make a pull request

https://opensource.com/article/19/7/create-pull-request-github

## Generate the website, and upload it

- From the command line, in the folder biochar-systems-dev, type: 'hugo'
- The generated website will be located in the folder biochar-systems (at the same level as biochar-systems-dev)
- Place these files on your web server, and it will be up and running
