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

//  router.post('/edit',(req,res)=>{
//   let param=[
//     req.body.nom,
//     req.body.adresse,
//     req.body.password,
//     req.body.telephone,
//     req.query.id
//   ]
//  con.query('UPDATE users SET ? WHERE id= ?',param,(erreur,resultat)=>{
//     res.redirect('/affiche');
//    })
// })
// router.get('/edit',(req,res)=>{
// res.render('affiche')

// })

router.post('/update',(req,res)=>{
  console.log(req.body);
  for (field in req.body){
    if (req.body[field] !== '' && field !== 'id'){
      con.query(`UPDATE \`users\` SET \`${field}\` = '${req.body[field]}' WHERE \`users\`.\`id\` = 4`, (err, result)=>{
        console.log("result")
        if (err) throw err
        else res.render("affiche", {
          resultat: result
        })
      })
    }
  }
})

 router.get('/delete',function(req,res){

   con.query ( "DELETE FROM users WHERE id=? ",req.query.id,(erreur,resultat)=>{
     res.redirect('/affiche');
   }) 

 })



router.get('/connexion', function (req, res) {
    res.render('connexion')
})

module.exports = router
