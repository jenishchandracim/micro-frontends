# Your Chef 👨‍🍳

## Container Micro frontend

This is Your Chef container application.

The container application is the entry point of the micro frontend

This application has been built using React and does the following:
- Render the Navigation Bar
- Uses React Router to select a micro frontend to render onto the page

# Getting started

1. Clone the repo
2. `yarn` - to install all the dependencies
3. `yarn build` - to build production optimized build
4. `yarn start` - to start the application

The app will start on `PORT=3000`

To successfully run the whole application, this container application is dependent on the following:

- The [`content`](https://github.com/jenishchandracim/micro-frontends/content) server
- The [`browse`](https://github.com/jenishchandracim/micro-frontends/browse) micro frontend to enable browsing
- The [`restaurant-order`](https://github.com/jenishchandracim/micro-frontends/restaurant-order) micro frontend to enable orders
