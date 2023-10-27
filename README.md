
# State Management Quiz

This is a personal project with the aim of practicing the global state management tool of React. 
It is connected to a trivia API( https://opentdb.com/api_config.php). 
## Getting Started with the Project

### Dependency Installation & Startup Development Server



Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

### The Problem

I had some issues with grasping what the global state management tool is and how to work with them. So I also did some more mini-projects to practice before I started this project. I used for this project, Context API and useReducer to have more experience with the useReducer hook, as it can be useful to get started with Redux. I think there could be better writing and lots of improvements needed, but for now, I did my best.

I struggled the most with React behavior when re-rendering.
I found that sometimes, useMemo works great to prevent unnecessary and unwanting re-rendering. (for example, it re-renders when one of the choice buttons is clicked in quiz form so that the button index changes. That was a huge problem, as UI also changed.) There are still tons to learn, but overall it was a good practice and fun to play around with the global state management tool.. 


