import { Router } from "express";

const router = Router();

// Sample API route
router.get("/", (req, res) => {
	res.json({ message: "API is working" });
});

export default router;
