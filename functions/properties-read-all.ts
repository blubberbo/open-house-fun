import faunadb from 'faunadb'

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env[`FAUNADB_SECRET`] ? process.env[`FAUNADB_SECRET`] : ''
})

exports.handler = (event: any, context: any, callback: any) => {
  console.log("Function `properties-read-all` invoked")
  return client.query(q.Paginate(q.Match(q.Ref("indexes/all_properties"))))
    .then((response: any) => {
      const propertiesRefs = response.data
      console.log("Properties refs", propertiesRefs)
      console.log(`${propertiesRefs.length} properties found`)
      const getAllPropertiesDataQuery = propertiesRefs.map((ref: any) => {
        return q.Get(ref)
      })
      // then query the refs
      return client.query(getAllPropertiesDataQuery).then((ret) => {
        return callback(null, {
          statusCode: 200,
          body: JSON.stringify(ret)
        })
      })
    }).catch((error) => {
      console.log("error", error)
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error)
      })
    })
}
