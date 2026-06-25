

// identité de l'auteur 
// date de création 
// description 
// note de l'avis 

const prisma = require('../lib/prisma')

module.exports = async (req, res) => {

  const { name, date, description, rating } = req.body

  try {

    const review = await prisma.review.create({
      data: {
        name,
        date: new Date(date),
        description,
        rating: parseInt(rating)
      }
    })

    return res.status(201).json(review)

  } catch (error) {

    console.error(error)

    return res.status(500).json({
      error: "Erreur lors de la création de l'avis"
    })

  }

}