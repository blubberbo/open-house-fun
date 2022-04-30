import faunadb from "faunadb"; /* Import faunaDB sdk */

/* configure faunaDB Client with our secret */
const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env[`FAUNADB_SECRET`] ? process.env[`FAUNADB_SECRET`] : ''
});

/* export our lambda function as named "handler" export */
exports.handler = (event: any, context: any, callback: any) => {
  /* parse the string body into a useable JS object */
  const data = JSON.parse(event.body);
  console.log("Function `properties-create` invoked", data);
  const propertyItem = {
    data: data,
  };
  /* construct the fauna query */
  return client
    .query(q.Create(q.Ref("classes/properties"), propertyItem))
    .then((response) => {
      console.log("success", response);
      /* Success! return the response with statusCode 200 */
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(response),
      });
    })
    .catch((error) => {
      console.log("error", error);
      /* Error! return the error with statusCode 400 */
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error),
      });
    });
};
