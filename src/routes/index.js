const {Router} =  require('express')
const router = Router()

const Task = require('../models/task')


router.get('/', async (req, res)=>{
    const tasks = await Task.find()
    console.log(tasks)
    res.render('index')


})

router.post('/add',async (req,res)=>{

  const task =  new Task(req.body)
  await task.save()
  
    // console.log(new Task(req.body))
   
    res.send('recibido')
})



module.exports= router

