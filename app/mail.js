const router = require('express').Router();
const Mail   = require('./model').Mail;


router.get('/name',(req,res,next)=> {
  Mail.find(req.query)
      .then(r => res.json(r))
      .catch(next);
});


router.post('/contact',(req,res,next)=> {
  const mail = new Mail();
  Object.assign(mail, req.body);
  mail.save()
      .then(savedMail => res.status(201).json(savedMail))
      .catch(next);
});


router.delete('/id', (req,res,next)=> {
   Mail.findByIdAndRemove(req.params.id)
       .then(savedMail => savedMail ? res.sendStatus(202) : res.sendStatus(404))
       .catch(next);
});