import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import adminMiddleware from "../middlewares/admin.middleware.js";
import {
    createPrivateDriver,
    getPrivateDrivers,
    updatePrivateDriver,
    deletePrivateDriver,
    updateDriverLocation,
    updatePrivateDriverStatus,
    getCurrentBooking,
    updateMyProfile,
} from "../controllers/privateDriver.controller.js";

const router = express.Router();
// Private Driver Mobile APIs

router.put(
    "/status",
    authMiddleware,
    updatePrivateDriverStatus
);

router.put(
    "/location",
    authMiddleware,
    updateDriverLocation
);

router.get(
    "/current-booking",
    authMiddleware,
    getCurrentBooking
);
router.put(
    "/profile",
    authMiddleware,
    updateMyProfile
);

router.use(authMiddleware, adminMiddleware);

router.post("/", createPrivateDriver);
router.get("/", getPrivateDrivers);
router.put("/:id", updatePrivateDriver);
router.delete("/:id", deletePrivateDriver);

export default router;
