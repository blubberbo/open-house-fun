import faunadb from "faunadb";
import { getId } from "./utils/getId";

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env[`FAUNADB_SECRET`] ? process.env[`FAUNADB_SECRET`] : ''
});

exports.handler = (event: any, context: any, callback: any) => {
  // const id = getId(event.path);
  console.log(`Function 'properties-read' invoked. Read id: ${330243415774069332
    }`);
  return client
    // .query(q.Get(q.Ref(`classes/properties/${330243415774069332}`)))
    .query(q.Get(q.Ref(q.Collection('properties'), "330243415774069332")))
    .then((response) => {
      console.log("success", response);
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(response),
      });
    })
    .catch((error) => {
      console.log("error", error);
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error),
      });
    });
};
