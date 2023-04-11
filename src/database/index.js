require('dotenv').config()
console.log(process.env.DATABASE_URL)
const {Pool} = require('@neondatabase/serverless')

module.exports = {
  async fetch(req, env, ctx) {
    const pool = new Pool({ connectionString: 'postgres://Vittor-Emanoel:7BPisgzqcG4N@ep-delicate-block-399797.us-east-2.aws.neon.tech/neondb' });
    const { rows: [{ now }] } = await pool.query('SELECT now()');
    ctx.waitUntil(pool.end());
    return new Response(now);
  }
}




// const { Client } = require('pg')

// const client = new Client({
//   host: 'postgres://Vittor-Emanoel:q4AmbPoLgn7x@ep-delicate-block-399797.us-east-2.aws.neon.tech/mycontacts',
//   user: 'Vittor-Emanoel',
//   password: '7BPisgzqcG4N',
//   database: 'mycontacts',
// })

// client.connect()

// exports.query = async (query, values) => {
//   const { rows } = await client.query(query, values)
//   return rows
// }
