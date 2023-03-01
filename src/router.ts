import { Router } from "express"

const router = Router()
// router is a sub part of the app
// this will be the api

// this will handle some of the routes, this handles routes where user is already authenticated
// it wouldn't make sense to have them all here, what if a user needs to sign in but needs to be already authenticated to reach that page?

// need some response so that these calls don't hang
router.get("/product", (req, res) => {res.json({message: "it's working"})})
router.get("/product/:id", () => {}) // id is like a parameter
router.put("/product/:id", () => {})
router.post("/product", () => {})
router.delete("/product/:id", () => {})


router.get("/update", () => {})
router.get("/update/:id", () => {}) // id is like a parameter
router.put("/update/:id", () => {})
router.post("/update", () => {})
router.delete("/update/:id", () => {})


router.get("/updatepoint", () => {})
router.get("/updatepoint/:id", () => {}) // id is like a parameter
router.put("/updatepoint/:id", () => {})
router.post("/updatepoint", () => {})
router.delete("/updatepoint/:id", () => {})

export default router;