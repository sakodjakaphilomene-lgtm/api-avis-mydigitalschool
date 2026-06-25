

const prisma = require('../lib/prisma')
const { hashPassword } = require('../lib/argon2')

module.exports = async (req, res) => {

  const { email, newPassword } = req.body

  try {

    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (!user) {

      return res.status(404).json({
        error: 'Utilisateur introuvable'
      })

    }

    const hashedPassword = await hashPassword(newPassword)

    await prisma.user.update({

      where: {
        email
      },

      data: {
        password: hashedPassword
      }

    })

    return res.json({
      message: 'Mot de passe mis à jour'
    })

  } catch (error) {

    console.error(error)

    return res.status(500).json({
      error: 'Erreur lors de la réinitialisation'
    })

  }

}