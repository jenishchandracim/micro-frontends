# Your Chef 👨‍🍳 

Your Chef is an application that has been build following micro frontends architecture pattern to demonstrate how multiple standalone application could be built in isolation and integrated; demonstrating all the benefits that micro frontends could bring onto a business. 

This application consists of:
- The [`container`](https://github.com/jenishchandracim/micro-frontends/tree/master/container) application
- The [`content`](https://github.com/jenishchandracim/micro-frontends/tree/master/content) server
- The [`browse`](https://github.com/jenishchandracim/micro-frontends/tree/master/browse) micro frontend to enable browsing
- The [`restaurant-order`](https://github.com/jenishchandracim/micro-frontends/tree/master/restaurant-order) micro frontend to enable orders

To run this micro frontend application please start all applications in isolation, you will notice on `yarn start` that each uses different port and this is important so they could talk to each other.

Please read each README.

## References
- [Micro Frontends by Martin Fowler](https://martinfowler.com/articles/micro-frontends.html)
- [Micro Frontends extending the microservice idea to frontend development](https://micro-frontends.org/)