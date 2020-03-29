// /routes/cardRoutes.js
const mongoose = require('mongoose');
const Card = mongoose.model('cards');

module.exports = (app) => {

  app.get('/api/card', async (req, res) => {
    let card = await Card.find();
    return res.status(200).send(card);
  });

  app.post('/api/card', async (req, res) => {
    console.log(await Card.create(req.body))
    let card = await Card.create(req.body);
    // console.log(res)
    // console.log(req.body)
    return res.status(201).send({
      error: false,
      card
    })
  })

  app.put('/api/card/:id', async (req, res) => {
    const {id} = req.params;

    let card = await Card.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      card
    })
  });

  app.delete('/api/card/:id', async (req, res) => {
    const {id} = req.params;

    let card = await Card.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      card
    })

  })

}