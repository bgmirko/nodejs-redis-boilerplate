import express from "express";
import { UserControler } from "../controllers/userController"

const router = express.Router();

router.get("/users", async (req, res) => {
    try{
        const users = await UserControler.getUsers();
        res.json({
            code: 200,
            success: true,
            message: "Users fetch successfully",
            data: users,
        })
    } catch (error) {
        res.json({
            code: error.code ?? 400,
            success: false,
            message: error.message ?? "Users fetch error"
        })
    }

})




export const usersRouter = router;