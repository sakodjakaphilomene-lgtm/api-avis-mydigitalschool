
const prisma = require('../lib/prisma')
const sendEmail = require('../lib/nodemailer')

module.exports = async (req, res) => {

  const { email } = req.body

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

    await sendEmail(
      email,
      'Réinitialisation du mot de passe',
      'Votre demande de réinitialisation a bien été prise en compte.'
    )

    return res.json({
      message: 'Email envoyé'
    })

  } catch (error) {

    console.error(error)

    return res.status(500).json({
      error: 'Erreur lors de l’envoi de l’email'
    })

  }

}