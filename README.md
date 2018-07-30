# react-in-15 for Polyhack 10

This repository contains a simple, barbones React widget, illustrating the use of basic React concepts. This is just a very simple Gallery APP, showing you the images from [unsplash](https://unsplash.com/)

# Prerequisites

First and foremost you will need GIT and Node.js installed on your system.
1. [GIT Downloads](https://git-scm.com/downloads)
2. [Node.js Downloads](https://nodejs.org/en/download/current/)

# Installation

Start console ([cmd on Windows](https://www.digitalcitizen.life/7-ways-launch-command-prompt-windows-7-windows-8)), and navigate to the directory where you want the code to be cloned to:

```git clone https://github.com/it-s/react-in-15.git```

At this point you should have the project on your hard-drive. Next navigae into the directory

```cd react-in-15```
```npm install```

# Building and running

While still in the console

```npm run build```

And finally

```npm run start```

# How this works

The repository has the following structure:

* [html]
* [utils]
..* client.js
..* confilg.js
..* index.js
* [views]
..* [css]
....* app.css
....* filter.css
....* footer.css
....* gallery.css
..* [gallery]
....* filter.jsx
....* footer.jsx
....* image.jsx
....* index.jsx
..* [loader]
....* container.jsx
....* error.jsx
....* indicator.jsx
....* index.js
..* app.js
* index.js

## [html]

Don't mind this. It contains an HTML template where the widget is instantiated when you run `npm run start`. It has more to do with Webpack then react itself...

## [utils]

This directory contains helpul utilities to make working with react a little bit easier (not really) :)

### client.js

A helpful wrapper for [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) making it a little bit less verbose

### config.js

Just a simple JS Object containing some configuration params for the app. (actually just a pointer to the API at the moment)

### index.js

Don't mind this. It's just an exporter for all the components in this directory. You will see plenty of theese all around the project. All they do is tell our [transpiler](https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them) what this directory contains.

## views

The heart and soul of our APP. This directory contains all the view elements and logic of our simple gallery.

### css

Some of the custom styles our APP is using. This is not React specific. It has more to do with the CSS transformer feature of [Babel](https://babeljs.io/). You can learn more about it [here](https://parceljs.org/transforms.html).

### gallery

Set of views our APP is using. This is pure React at it's best, so pay attention:

* filter.jsx - the filter bar you see on top of our view. It's a stateless react component 