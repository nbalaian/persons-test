I don't use any store, cause I'm sure that store here will be redundant and overengineering,
but I think it's better to add context here later, to avoid props drilling
Some of data is missed for person details, I think it's related to export from scv
For all Api call should be added proper error handling, with toast or alert to make user aware what happened
delete request has delay on the be side, server return wrong list after deleting

1. To add tip for search and proper handling, cause BE returns error if term shorter than 2 characters
2. Add toasts for requests
3. Extend form with fields
4. Or handle delay properly for getPersons request or to ask BE dev for make adjustments (:
5. Add all fields for Person
6. Add and map phones and email (i didn't add cause fields are not required for creating new person)
7. Person details should be separate page, it's better ux i think. confirmation modal above is not good approach, need to be reworked
8. If the server returned the total number of people, the pagination could be more convenient and look better
9. Mocks should be organized better to be more reusable
10. There are more tests should be added

https://nbalaian.github.io/persons-test/ GH pages

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
