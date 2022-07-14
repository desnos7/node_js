let express= require('express')
let router= express.Router()


router.get('/', function (req, res) {
    res.send("page d'acceuil")
})
router.get('/inscription', function (req, res) {
    res.render("inscription")
})

router.post('/inscription', function (req, res) {
    console.log(req.body);
   res.redirect('/connexion')
})


router.get('/connexion', function (req, res) {
    res.render('connexion')
})

module.exports = router
