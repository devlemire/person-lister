let data = [
   'string',
   'string',
   5,
   true
]

module.exports = {
   get: ( req, res ) => {
      res.status(200).send(data)
   },
   put: ( req, res ) => {

   },
   post: ( req, res ) => {

   },
   delete: ( req, res ) => {

   }
}
