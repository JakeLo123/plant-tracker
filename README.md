# tandem plant tracker
keep up with your plants and make sure they don't miss a watering!
This app was created as part of an application for the software engineer apprentice position at [Tandem](https://madeintandem.com)
The prompt was to create an app that generates a 12 week watering schedule for a given set of plants. Each plant has a specified 'water after x number of days' property--it's okay water one day before or after. No plants are to be watered on the weekends because work/life balance is important!

## getting started
This program uses [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/). 
To get started, clone this repo, then `cd` into the main directory and run command `$ npm install` to install dependencies. Create a [PostgreSQL](https://postgresapp.com/) database called `tandemplants`, as well as one called `tandemplants.test` for automated testing. After creating the database, run `$ npm run seed`, to seed the database. Finally, run command `npm run dev` to start the app, and visit `localhost:3030`.

### usage
Visit `localhost:3030` to see the watering schedule for any given day between December 16, 2019, and March 10, 2020. Once you water a plant, you can cross it out, so you know it's been watered.

### approach
This is a single-page-application. All data is fetched on the initial load, and conditionally rendered using React. Each plant instance has its own schedule. The `Main` component is the only stateful component; it creates a watering schedule based on the response from the initial request.

##### Object-model
I decided to represent my data with a JavaScript class--`Plant`--because it is testable and easy to read/maintain. Each `Plant` instance represents one row in the database. The code for `Plant` can be found in `server/db/plants`. The instance method `getSchedule` creates a watering schedule starting on the date the plant is added to the database. 
Each plant also has a `receivedWaterOnDates` property that tracks when a user crosses a plant off the watering list for a particular date.

##### Parsing dates
 Dates are stored in the DB as strings, and passed between functions as strings. To measure them against one another to in order to perform various actions, I use the [Date.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) method. I wrote several utility functions to perform actions related to parsing dates, the code for which can be found in `utils.js`.

### testing
Run command `npm run test` to run the tests. 
I used framework [Mocha](https://mochajs.org/) and library [Chai](https://www.chaijs.com/). These should have been installed with `$ npm install` when you cloned the repo. There are unit tests for utility functions, the `Plant` model, and api routes. My goal with the tests was to document the program's behavior, and ensure that it functions correctly.

## Built with
[Node.js](https://nodejs.org), 
[React.js](https://reactjs.org/), 
[Webpack](https://webpack.js.org/), 
[Express.js](https://expressjs.com), 
[PostgreSQL](https://postgresapp.com/), and 
[Sequelize.js](https://sequelize.org/)

#### developer
Jake Loew - view more work at www.jakeloew.com