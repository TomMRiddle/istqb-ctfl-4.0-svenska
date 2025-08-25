# Interactive Syllabus & Glossary

This project is set up with Vite for a fast development experience and easy deployment to GitHub Pages.

## Important: First-Time Setup

Before you start, you need to edit two files to match your GitHub repository details:

1.  **`package.json`**:
    Find the `"homepage"` line and replace `<username>` and `<repository-name>` with your GitHub username and the name of your repository.

    ```json
    "homepage": "https://<username>.github.io/<repository-name>/"
    ```

2.  **`vite.config.ts`**:
    Find the `base` line and replace `<repository-name>` with the name of your repository.

    ```ts
    base: '/<repository-name>/',
    ```

## Step 1: Install Dependencies

You'll need Node.js installed on your machine. Open your terminal in the project directory and run:

```bash
npm install
```

This will download all the necessary tools and libraries (like React and Vite) defined in `package.json`.

## Step 2: Run the Development Server

To work on the app locally, run:

```bash
npm run dev
```

This will start a live development server. You'll see a local URL in your terminal (usually `http://localhost:5173`). Open it in your browser to see your app. The page will automatically reload as you save changes to your files.

## Step 3: Deploy to GitHub Pages

When you're ready to publish your changes, simply run:

```bash
npm run deploy
```

This single command does two things:
1.  **Builds the project**: It runs `npm run build`, which bundles all your code into a static, optimized set of files in a `dist` folder.
2.  **Deploys to GitHub**: It pushes the contents of the `dist` folder to a special branch on your repository called `gh-pages`, which is what GitHub Pages uses to host your site.

After the command finishes, your updated application will be live at the URL you specified in the `homepage` field of your `package.json`.
