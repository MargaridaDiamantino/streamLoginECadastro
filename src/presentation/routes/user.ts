import { Router,Request, Response } from "express";
import { UserRegisterControllers } from "../controllers";



const router = Router()
router.post("/user", (request, response) => {
  UserRegisterControllers.execute(request,response)
})

export default router