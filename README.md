# Github User Search

Hosted [here](https://mystifying-montalcini-487053.netlify.com/).

NOTE: This app makes unauthenticated calls to Github API. As a result, Github will limit the calls to 60 per hour.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Get started locally

- Clone this repo.
- Run `npm ci`.
- Run `npm start`.

## Roadmap

If I were to iterate on this, I would:

- Polish the UI
    - Need a way to self-close the `UserView` that works well with the "hid" prop.
    - Followers, following, and repo list could use more TLC.
    - `UserView`'s border-radius needs to clip the vertical scrollbar if it shows.
    - Use a CSS loader to show loading state.
    - Include and link to more relevant data in the UserView.
    - Use `Suspense` and `ErrorBoundary` for optimal asnyc experience.
    - Disable order options when "best match" sort option is selected.
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
