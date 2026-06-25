
const prisma = require('../lib/prisma')

module.exports = async (req, res) => {

  try {

    const review = await prisma.review.update({

      where: {
        id: parseInt(req.params.id)
      },

      data: {
        approved: true
      }

    })

    return res.json({
      message: 'Avis autorisé',
      review
    })

  } catch (error) {

    console.error(error)

    return res.status(500).json({
      error: 'Impossible d’autoriser cet avis'
    })

  }

}