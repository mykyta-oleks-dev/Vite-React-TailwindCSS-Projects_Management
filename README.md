# Description

This is a React application for managing Projects and their tasks, that allows to create, browse, inspect and delete projects, as well as create and delete tasks for the selected project.

## Technologies used

-   JavaScript - a high-level, multi-paradigm programming language.

-   Node.JS - free, open-source, cross-platform JavaScript runtime environment.

-   npm - package manager for the JavaScript programming language maintained by npm, Inc., a subsidiary of GitHub.

-   React - a free and open-source front-end JavaScript library for building user interfaces.

-   Vite - a build tool and development server for modern JavaScript projects, designed to provide a fast and lean development experience.

-   Tailwind CSS - a utility-first CSS framework.

## Installation

The project uses `npm` as the package manager.

```shell
$ npm install
```

## Running the project

To run the application in development mode:

```shell
$ npm run dev
```

To build the project files:

```shell
$ npm run build
```

## Features

-   Create projects: Open the form for creating projects from sidebar or default page state and input valid values

-   Browse projects: The created projects are listed on the sidebar and are available to be selected by clicking on them

-   Inspect selected project: The newly created or selected project will be displayed on the page, listing its attributes and tasks, binded with it

    -   Create tasks: Input a conent for the new task and create it by clicking the button. New task will be displayed at the end of list

    -   Delete tasks: Delete tasks by clicking the button next to the content
