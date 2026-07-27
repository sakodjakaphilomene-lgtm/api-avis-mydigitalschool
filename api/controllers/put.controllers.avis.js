const prisma = require("../lib/prisma")

module.exports = async (req, res) => {

  const { name, description, rating } = req.body

  try {

    const review = await prisma.review.update({
      where: {
        id: parseInt(req.params.id)
      },
      data: {
  name,
  description,
  rating: parseInt(rating)
}
    })

    return res.json({
  message: "Avis modifié avec succès",
  review
})
 } catch (error) {

  console.error(error)

  return res.status(500).json({
    error: error.message
  })



  }

}