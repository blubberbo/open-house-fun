# Open House Fun

This is an app created for a game my family plays while visiting open houses. After we check out a house, we each guess how much the house will sell for. After the property sells, we get points based on how close all the guesses were.

## Running in Development

To run this project in development:

- clone the repo
- run `npm i`
- run `npm start`

## Deployment

To fully deploy this app:

- Front-end: commit and push to the `main` branch - Netlify will automatically deploy
- Back-end: run `netlify deploy` from your command line
- DB: edit the database directly

Details below:

### Angular Front-end

The Angular app is hosted on Netlify at [Open House Fun](https://open-house-fun.netlify.app/) and is automatically deployed whenever code is pushed to the `main` branch of this repo (for reference: [Open House Fun repo](https://github.com/blubberbo/)open-house-fun)

### Serverless Back-end (Netlify Functions)

The serverless backend functions that connect the Angular app to the FaunaDB can be deployed by running `netlify deploy`, which will push the `/functions` folder to the Netlify app (as specified in the `./netlify.toml` file).

### FaundaDB

Database edits can be made directly in the database using the FaunaDB web ui, with a CLI, or using HTTPS calls. The schema for the db is housed in the `./schema.gql` file and can be imported directly into a fresh FaunaDB instance.

There are two databases, one for development and one for production. Both require authentication. Note: the FaundaDB secret is not needed on the front end, and is only used by the Netlify Serverless Back-end Functions.

- [development database](https://dashboard.fauna.com/db/global/open-house-fun-db_test)
- there is not currently a production database, as the app is still in development
