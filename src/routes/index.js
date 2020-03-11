const {Router} =  require('express')
const router = Router()

const Task = require('../models/task')


router.get('/', async (req, res)=>{
    const tasks = await Task.find()
    console.log(tasks)
    let idCont = 0
    res.render('index', {tasks,idCont})


})

router.post('/add',async (req,res)=>{

  const task =  new Task(req.body)
  await task.save()
  
    // console.log(new Task(req.body))
   
    res.redirect('/')
})

router.get('/delete/:id', async (req,res)=>{

    const {id}=req.params

    await Task.remove({_id: id})

    res.redirect('/')
    
    

})







module.exports= router

