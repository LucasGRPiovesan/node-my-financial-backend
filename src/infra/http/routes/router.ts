import { Router } from "express";
import { ProfileRoutes } from "./profile.routes";
import { UserRoutes } from "./user.routes";
import { InstitutionRoutes } from "./institution.routes";

import { AuthController } from "../controllers/AuthController";
// import authMiddleware from "../middlewares/AuthMiddleware";

const router = Router();

router.get('/', (req:any, res:any) => res.status(200).send('<h1>Welcome to your API!</h1>'));

router.post("/auth", AuthController.auth);

// MIDDLEWARE
// router.use(authMiddleware);

router.use('/profile', ProfileRoutes);
router.use('/user', UserRoutes);
router.use('/institution', InstitutionRoutes);

export default router;
