let express= require('express')
const con = require('../database/db')
let router= express.Router()


// router.get('/', function (req, res) {
//     res.send("page d'acceuil")
// })
router.get('/inscription', function (req, res) {
    res.render("inscription")
})

router.get('/affiche',function(req,res){
    con.query("SELECT * FROM users ",(erreur,resultat)=>{
        if(erreur){
          console.log(erreur);
        }else { 
          console.log("resultat", resultat);
          res.render('affiche',{resultat:resultat})
        }
    })
})




router.post('/inscription', function (req, res) {
     let nom= req.body.nom
     let addressmail= req.body.adresse
     let password= req.body.password
     let telephone= req.body.telephone

     con.query("INSERT INTO users(nom, adresse, password, telephone) VALUES (?, ?, ?, ?)", [nom,addressmail,password,telephone], (erreur,resultat)=>{
        if(resultat){
            console.log('insertion reussie');
            res.redirect('/connexion')
        }else{
            console.log('errreur',erreur);
        }
        
     })
    





   
})


router.get('/connexion', function (req, res) {
    res.render('connexion')
})

module.exports = router
