let data = []
let id = 0

module.exports = {
   get: ( req, res ) => {
      res.status(200).send(data)
   },
   put: ( req, res ) => {

   },
   post: ( req, res ) => {
      console.log(req.body)
      const { name, height, age, ss_num, gender, hasTattoos } = req.body

      data.push({
         id,
         name,
         height,
         age,
         ss_num,
         gender,
         hasTattoos
      })

      id++

      res.status(200).send(data)
   },
   delete: ( req, res ) => {
      const personIndex = data.findIndex( person => person.id == req.params.id )

      data.splice(personIndex, 1)

      res.status(200).send(data)
   }
}
