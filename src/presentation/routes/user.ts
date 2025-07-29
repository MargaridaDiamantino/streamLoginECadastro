import { Router, Request, Response } from "express";
import { UserLoginControllers, UserRegisterControllers } from "../controllers";
import { AuthMiddleware } from "../../infrastructure/Middleware/authMiddleware";



const router = Router()

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     description: Adiciona um usuário ao banco de dados
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso.
 */

router.post("/users",(request, response) => {
  UserRegisterControllers.execute(request, response)
})


/**
 * @swagger
 * /login:
 *   post:
 *     summary: login
 *     description: loga um usuário 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: logado com sucesso.
 */
router.post("login",(request, response)=>{
  UserLoginControllers.execute(request, response)
})

export default router