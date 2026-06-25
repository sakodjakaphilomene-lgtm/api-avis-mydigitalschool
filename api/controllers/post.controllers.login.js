


const prisma = require('../lib/prisma')
const { verifyPassword } = require('../lib/argon2')

module.exports = async (req, res) => {

  const { email, password } = req.body

  try {

    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (!user) {

      return res.status(404).json({
        error: "Utilisateur introuvable"
      })

    }

    const isValid = await verifyPassword(
      password,
      user.password
    )

    if (!isValid) {

      return res.status(401).json({
        error: "Mot de passe incorrect"
      })

    }

    return res.json({
      message: "Connexion réussie",
      user: {
        id: user.id,
        email: user.email
      }
    })

  } catch (error) {

    console.error(error)

    return res.status(500).json({
      error: "Erreur lors de la connexion"
    })

  }

}
