# Routing In React

Let's practice working with the create-react-app file structure and routing.

# Getting Started

1. Clone this repository and navigate to it from your command-line.
2. Create and checkout a `dev` branch.
3. Run `npm install` to install the dependencies from the `package.json` file.
4. Run `npm start` to start the development server
5. Navigate to `localhost:3000` in your browser to see your app.
6. Follow along with [the first video here](https://my.kenzie.academy/courses/182/assignments/16442?module_item_id=25823) to complete the first requirement.

# Requirements

- Follow along with [the first video here](https://my.kenzie.academy/courses/182/assignments/16442?module_item_id=25823) to create a Navigation component.
- Create a new route that renders the `<Welcome/>` component. The URL path should be `/welcome/:name`. `:name` represents dynamic data passed in via the URL. You would access the route with a URL like `/welcome/davey`. You can access the variable with `props.match.params.name` within the component.
- If the `<Welcome/>` component is accessed through the `/welcome/:name` URL, it should display the dynamic name from the URL.
- If the `<Welcome/>` component is accessed through the "/" route, it should maintain its original behavior and display the value passed in with the "name" prop.
- Create a 404 component and update the Router functionality to show that component when there is no matching route for the URL specified

# Credits and References

Author: Eric Hoover

References: Tianna "RubberDuck" McCoy
