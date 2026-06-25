



const prisma = require('../lib/prisma')
const { hashPassword } = require('../lib/argon2')

module.exports = async (req, res) => {

  const { email, password } = req.body

  try {

    const existingUser = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (existingUser) {

      return res.status(400).json({
        error: "Cet email existe déjà"
      })

    }

    const hashedPassword = await hashPassword(password)

    const user = await prisma.user.create({

      data: {
        email,
        password: hashedPassword
      }

    })

    return res.status(201).json({
      message: "Utilisateur créé",
      id: user.id,
      email: user.email
    })

  } catch (error) {

    console.error(error)

    return res.status(500).json({
      error: "Erreur lors de l'inscription"
    })

  }

}