
## Simple github user search app
This is simple user search app for github. It will show some basic information of a user.

[screencast-localhost_3000-2022.09.25-01_58_43.webm](https://user-images.githubusercontent.com/20905059/192119778-3da23e8e-22c2-4439-998f-b1ea56eb6cbd.webm)

# Code Structure
Code structure is currently basic. Each component will have its own folter which contains files for its styling, test case, snapshot, loader function, component itself and constants if required.

Theme folder is added which contains breakpoints file. Breackpoint file contains a generic implementation to handle media quiries on different screen sizes.
So that we don't need to handle each screen size seprately on every style. For big projects this folder can also have some other common theme related stuff which will be applied to whole App/
![image](https://user-images.githubusercontent.com/20905059/192119807-d5117bfc-0f3f-4219-b86f-6b75d5a4b216.png)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
