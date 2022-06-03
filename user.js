const express=require('express')
const router=express.Router()

const userController=require('../controllers/userController')

router.get('/',userController.index)
router.put('/update',userController.update)
router.post('/show',userController.show)
router.post('/delete',userController.destroy)
router.post('/add',userController.add)
module.exports=router