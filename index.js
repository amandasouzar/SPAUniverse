import { Router } from "./router.js"


let router = new Router()
router.AddPages("/","./pages/Home.html")
router.AddPages("/TheUniverse", "./pages/Universe.html")
router.AddPages("/Explorer", "./pages/Explorer.html")

router.Handle()

window.onpopstate = () => {router.Handle()}
window.route = () => {router.route()}

