import { Router, Request, Response } from "express";
import { UserRegisterControllers } from "../controllers";



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

router.post("/users", (request, response) => {
  UserRegisterControllers.execute(request, response)
})

export default router