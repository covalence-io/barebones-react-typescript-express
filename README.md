# 📜 Barebones React/Sass/Express/TypeScript Boilerplate

&nbsp;

## 🧠 Purpose

This project is a starting point for a TypeScript based React app that also has a local API server using Express. It serves as an excellent "sandbox" for learning the workflow of a full stack web application from our Bootcamp. There is no connection to any kind of database, but our videos and course cover MySQL and its integration into Node and Express.

Keep in mind there isn't much quality of life in this Boilerplate code, you'll miss your "hot reloading" feature of Create React App, the ability to import pictures as modules, and all the other fun stuff the big frameworks have already coded for you. They're all still accessible, but you'd have to learn to add them yourself! Feel free to ping me (`@Cool Hand Luke`) in our Discord channel if you're a student and are interested in a particular feature you'd like to see a tutorial on. 😎

&nbsp;

## 👟 Running the Project

If you already know the process of cloning a repository then follow the normal process and use the script `npm run dev` to get up and going!

If you're new or are interested in the steps and their purpose, then let's dive on in!

&nbsp;

First:

```bash
git clone https://github.com/covalence-io/barebones-react-typescript-express.git YOUR_PROJECT_NAME
```

This command will "clone" this project's code to _our_ computers! It will default to the name of the GitHub repository, but you can rename it by providing an additional argument, like `YOUR_PROJECT_NAME` in the above example. It will create a folder by that name, and copy all the juicy code into it for you!

&nbsp;

Second:

```bash
cd YOUR_PROJECT_NAME
```

Hopefully this one is fairly straightforward by this point 😂. It will change directories into the folder we just cloned the code into. Note, there are some cool shorthands you could do to combine some of these steps or making a function/alias to streamline it!

&nbsp;

Third:

```bash
npm install
```

This is also hopefully straightforward by now 🙄: it will look into the `package.json` and `package-lock.json` to install the needed dependencies for this project to do its job. It will create your `node_modules` folder for you which is what ~~makes time travel possible~~ lets the project run.

-   Note that sometimes you'll see security vulnerabilities. These will come and go and thankfully are easy to fix. `npm audit fix` can do so by updating an out-of-date package to a new version. However, alot of these free packages are written in the spare time of other developers and you're at the mercy of waiting for them to fix the vulnerability.

&nbsp;

Fourth:

```bash
npm run dev
```

This command will start the project for us! It will sometimes take a bit, depending on the speed of the computer, anywhere from 10 to 20 seconds feels average. Don't stress if your old junker of a laptop takes longer! As long as it completes without error you're good to go. 👍

-   This script will utilize `nodemon` to auto-restart your Express server, meaning any server side code you write and save will trigger a recompile, rebundle, and re-run of the server! No need to stop and restart it over and over again.
-   Notice in the `package.json` that `dev` runs `"npm-run-all --parallel watch:*"` as the actual command. It's what fires up 1) `webpack` to compile and bundle our code and 2) run `nodemon` when the server finishes building!
    -   The `npm-run-all` lets us run run multiple npm-scripts in parallel or sequentialy.
    -   `--parallel` means we run two npm-scripts at the same time.
    -   `watch:*` references any other script starting with `watch:`, check out the two in our `package.json`! They are `watch:build` and `watch:server`.
        -   Another indent level? 😤 Sheesh. But let's break down the purpose of those watch scripts!
        -   `watch:build` will tell webpack to compile and bundle our `src/client` folder as all of our React app and output it to `public/js/app.js`. It will also follow the same process for `src/server` and output it to `dist/server.js`
        -   `watch:server` watches the `dist/server.js` for changes and that's how it auto-restarts the server! Unfortunately you'll have to refresh your browser to see any React app changes.

&nbsp;

**The server will start on port 3000 (http://localhost:3000) and should default to a "Hello World" app!**

&nbsp;

Optionally:

```bash
npm run start
```

We will use this script in production. We don't need all the auto-restart stuff from the `watch:*` scripts we discussed up above. Just start the server and be done with it.

-   This assumes you have a `dist/server.js` and `public/js/app.js` already built.

&nbsp;

## 💬 Server

The server build process compiles the TypeScript files found in `src/server` into a single bundled JavaScript file located in the `dist` directory.

&nbsp;

## 💻 Client

The client build process compiles the React app located in `src/client` into a bundled located at `public/js/app.js`.

The client configuration will also build the Sass files found at `src/client/scss`. The `index.tsx` imports the `app.scss` file which already includes an import for Bootstrap.
