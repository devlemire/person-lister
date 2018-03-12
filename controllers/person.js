let data = []
let id = 0

module.exports = {
   get: ( req, res ) => {
      res.status(200).send(data)
   },
   put: ( req, res ) => {
      console.log( req.params.id )
      const personIndex = data.findIndex(person => person.id == req.params.id)
      console.log(personIndex)

      data[ personIndex ].name = req.body.name

      res.status(200).send(data)
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
