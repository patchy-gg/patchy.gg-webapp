// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
require('dotenv').config()
const faunadb = require('faunadb')


const faunaSecret = process.env.FAUNA_SECRET

if(!faunaSecret) {
  throw new Error("Missing faunadb secret")
}

const db = new faunadb.Client({ secret: faunaSecret })

module.exports = function (api) {
  api.loadSource( async ({ addContentType }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api
    const players = addContentType({
      typeName: 'Player',
      route: '/fantasy/player/:playerName'
    })


  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  })
}
