import { Router } from "express";
import {registerUser, verifyEmail} from "../controllers/auth.controllers.js"
import {validate} from "../middlewares/validate.middleware.js"
import {userRegistrationValidator} from "../validators/index.js"
const router = Router();

router.route("/register").post(userRegistrationValidator(), validate, registerUser);
router.route("/verify-email/:token").get(verifyEmail);

export default router;
