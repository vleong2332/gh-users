# Github User Search

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Roadmap

If I were to iterate on this, I would:

- Polish the UI
    - Need a way to self-close the `UserView` that works well with the "hid" prop.
    - Followers, following, and repo list could use more TLC.
    - `UserView`'s border-radius needs to clip the vertical scrollbar if it shows.
    - Use a CSS loader to show loading state.
    - Include and link to more relevant data in the UserView.
    - Use `Suspense` and `ErrorBoundary` for optimal asnyc experience.
- Refactor
    - Absctract out the presentational component from `SortOptions` and `OrderOptions`
    - Abstract out more styling literal values into the theme.
    - Look for better way to disable scrolling on the main page when `UserView` is shown.
    - Abstract out the network request code for `useFollowers`, `useFollowing`, and `useRepos` into a hook.
    - Abstract out the presentation of the followers and following lists into a separate component.
    - Abstract out the "Pic and text" combo into a separate component.
- Optimize
    - Make authenticated API calls for more request limit.
    - Use virtualization/windowing for followers and following lists.
    - Use Redux to cache results.
    - Audit render performance.
    - Perform code-splitting and lazy-loading.
- Write unit tests for rendering major markup in different states.
- Fine tune responsiveness.
- Audit and remediate for accessibility for AA-level compliance.
- Integrate TypeScript for type-safety and developer experience.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
