# 🎣 Hooks Demo

This is the final state of the app from the session, having added some state management using `useState`, an API call using `useEffect` and some basic state sharing using `useContext`.

Have an explore of the app to make sure you understand the basic structure of the components.

## Notes

👉 This is a React app created with `Create-React-App`.

👉 We've added a package called `tailwind` to simplify the CSS. Tailwind gives us some handy reusable classes just like we talked about in our CSS sessions, which makes component development very fast and consistent.

👉 We've structured the app with a nice tidy `App` component, and then a `Layout` we can reuse for different pages when we add new functionality, and split all our components into their own folder.

👉 We've also added a `<LoadingIndicator/>` using a publicly available `npm` library called `react-spinner-kit`. We're not using it yet, but it'll come in useful to make our app look nice once we add some functionality that needs it. (Try importing the `<LoadingIndicator/>` component in the app somewhere and reloading to have a look at it, if you're curious.)

👀 (You may notice that we haven't added any testing, but this is just a demo..! If this were a real app, we'd definitely be adding our `.test.tsx` files for each component! 🧪👩‍🔬)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
