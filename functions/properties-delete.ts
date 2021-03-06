import faunadb from 'faunadb'
import { getId } from './utils/getId'

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env[`FAUNADB_SECRET`] ? process.env[`FAUNADB_SECRET`] : ''
})

exports.handler = (event: any, context: any, callback: any) => {
  const id = getId(event.path)
  console.log(`Function 'properties-delete' invoked. delete id: ${id}`)
  return client.query(q.Delete(q.Ref(`classes/properties/${id}`)))
    .then((response) => {
      console.log("success", response)
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
      })
    }).catch((error) => {
      console.log("error", error)
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error)
      })
    })
}
