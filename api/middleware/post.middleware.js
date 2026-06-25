module.exports = (req, res, next) => {

  const { name, description, rating, date } = req.body

  if (!name || !description || !rating || !date) {

    return res.status(400).json({
      error: "Tous les champs sont obligatoires"
    })

  }

  if (rating < 1 || rating > 5) {

    return res.status(400).json({
      error: "La note doit être comprise entre 1 et 5"
    })

  }

  next()

}