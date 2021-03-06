import faunadb from 'faunadb'
import { getId } from './utils/getId'

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env[`FAUNADB_SECRET`] ? process.env[`FAUNADB_SECRET`] : ''
})

exports.handler = (event: any, context: any, callback: any) => {
  const data = JSON.parse(event.body)
  const id = getId(event.path)
  console.log(`Function 'properties-update' invoked. update id: ${id}`)
  return client.query(q.Update(q.Ref(`classes/properties/${id}`), { data }))
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
