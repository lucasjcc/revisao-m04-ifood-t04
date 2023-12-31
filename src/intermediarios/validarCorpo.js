const validarCorpo = (esquema) => async (req, res, next) => {
  try {
    await esquema.validateAsync(req.body)
    next()
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

module.exports = validarCorpo
