# CSE343 - Web Development

This repository contains the lab work and web development exercises completed for the course **CSE343 - Web Development**. The goal of this repo is to organize, document, and publish the code created in each lab throughout the semester.

## Course Overview

CSE343 focuses on building practical web applications using core front-end technologies such as:

- HTML
- CSS
- JavaScript
- DOM manipulation
- Responsive design
- Basic interactive user interfaces
- React components, props, and state

This repository is intended to serve as a learning record and a portfolio of the work completed during the course.

## Repository Purpose

- Store all lab assignments in one place
- Track progress through the semester
- Publish the code for each lab in a clean, organized structure
- Showcase web development learning outcomes and practical implementation

## Repository Structure

```text
WEB/
├── Lab_1/
│   └── (Currently empty)
├── Lab_2/
│   ├── Lab2 (Portfolio).html
│   └── Lab2.css
├── Lab_3/
│   ├── lab3.html
│   ├── lab3.css
│   └── lab3.js
├── Lab_4/
│   ├── lab_4.html
│   ├── lab_4.js
│   ├── lab_4_div.html
│   ├── lab_4_div.js
│   └── lab_4.css
├── Lab_5/
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── user_icon.png
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── CommentInput.jsx
│       ├── Comments.jsx
│       ├── Comment.jsx
│       └── ChatMessage.jsx
└── README.md
```

## Labs Completed

### Lab 2 - Portfolio Webpage

- A personal portfolio created using HTML and CSS, with sections for education, experience, projects, skills, and interests.
- Main files:
  - `Lab_2/Lab2 (Portfolio).html`
  - `Lab_2/Lab2.css`

### Lab 3 - JavaScript Cart Counter

- A cart counter with buttons to add 1, 2, or 3, remove 1, and reset the count to zero. The count cannot go below zero.
- Practices JavaScript variables, click events, and updating text in the DOM.
- Main files:
  - `Lab_3/lab3.html`
  - `Lab_3/lab3.css`
  - `Lab_3/lab3.js`

### Lab 4 - Todo List

- Add tasks, mark them finished with a checkbox, undo completion, and delete tasks. Blank tasks are ignored.
- Includes two versions that share `Lab_4/lab_4.css`:
  - **Template version:** `Lab_4/lab_4.html` and `Lab_4/lab_4.js` copy an HTML `<template>` for each task.
  - **Div version:** `Lab_4/lab_4_div.html` and `Lab_4/lab_4_div.js` copy a hidden `<div>`, store tasks in an array, and display them with a `for` loop.
- Practices forms, DOM manipulation, event listeners, arrays, and loops. Tasks are stored only while the page is open; refreshing clears them.

### Lab 5 - React Comments App

- A comments page built with React and Vite. It starts with two sample comments and lets users type and post new comments, each displayed with a user icon.
- Practices reusable components, props, `useState`, controlled inputs, and rendering arrays with `map()`.
- Main files:
  - `Lab_5/src/App.jsx` holds the comments state and connects the components.
  - `Lab_5/src/CommentInput.jsx` handles the input and Post button.
  - `Lab_5/src/Comments.jsx` renders the comment list.
  - `Lab_5/src/Comment.jsx` displays one comment and its icon.
  - `Lab_5/src/main.jsx` mounts the app in `Lab_5/index.html`.
- Comments are stored in React state; refreshing restores the sample comments.

`Lab_1` is currently empty and has no completed exercise to describe.

## How to Run the Projects

Labs 2, 3, and 4 are static HTML/CSS/JavaScript projects. Lab 5 uses the Vite development server.

### Labs 2-4: Open directly

- Open the `.html` file in any browser.
- Example: `Lab_3/lab3.html`

### Labs 2-4: Use a local server

If you want a cleaner workflow, run a simple local server from the repository root:

```bash
cd "C:\Users\zakyo\Documents\College\Semester 5\LABS\WEB"
python -m http.server 8000
```

Then open in the browser:

```text
http://localhost:8000/
```

### Lab 5: Run the React app

Install Node.js and npm, then run these commands from the repository root:

```bash
cd Lab_5
npm install
npm run dev
```

Open the local URL printed by Vite in the terminal.

To build the app and preview the production build locally:

```bash
npm run build
npm run preview
```

## Notes

- This repository is intended for academic lab work.
- New labs will be added as the course progresses.
- The structure may evolve as more assignments are completed.

## License

This repository is for educational purposes as part of the CSE343 course.

## Maintainer

This repo is maintained by the course student(s) working on the assigned lab exercises.
