var express = require("express");
var router  = express.Router();
var Shopping = require("../models/shopping");
var middleware = require("../middleware");
var request = require("request");




router.get("/",middleware.isLoggedIn, function(req, res){
    // Get all campgrounds from DB
 res.render("shop/index");
});

router.get("/single1",middleware.isLoggedIn, function(req, res){
   res.render("shop/single1"); 
});

router.get("/single2",middleware.isLoggedIn, function(req, res){
   res.render("shop/single2"); 
});

router.get("/single3",middleware.isLoggedIn, function(req, res){
   res.render("shop/single3"); 
});

router.get("/single4",middleware.isLoggedIn, function(req, res){
   res.render("shop/single4"); 
});
router.get("/single5",middleware.isLoggedIn, function(req, res){
   res.render("shop/single5"); 
});
router.get("/single6",middleware.isLoggedIn, function(req, res){
   res.render("shop/single6"); 
});
router.get("/pesticides/single11",middleware.isLoggedIn, function(req, res){
   res.render("pest/single11"); 
});

router.get("/pesticides/single2",middleware.isLoggedIn, function(req, res){
   res.render("pest/single2"); 
});

router.get("/pesticides/single3",middleware.isLoggedIn, function(req, res){
   res.render("pest/single3"); 
});

router.get("/pesticides/single4",middleware.isLoggedIn, function(req, res){
   res.render("pest/single4"); 
});
router.get("/pesticides/single5",middleware.isLoggedIn, function(req, res){
   res.render("pest/single5"); 
});
router.get("/pesticides/single6",middleware.isLoggedIn, function(req, res){
   res.render("pest/single6"); 
});


router.get("/pesticides",middleware.isLoggedIn, function(req, res){
    // Get all campgrounds from DB
 res.render("pest/index");
});


router.get("/fertilizers",middleware.isLoggedIn, function(req, res){
    // Get all campgrounds from DB
 res.render("fert/index");
});

router.get("/fertilizers/single1",middleware.isLoggedIn, function(req, res){
   res.render("fert/single1"); 
});

router.get("/fertilizers/single2",middleware.isLoggedIn, function(req, res){
   res.render("fert/single2"); 
});

router.get("/fertilizers/single3",middleware.isLoggedIn, function(req, res){
   res.render("fert/single3"); 
});

router.get("/fertilizers/single4",middleware.isLoggedIn, function(req, res){
   res.render("fert/single4"); 
});
router.get("/fertilizers/single5",middleware.isLoggedIn, function(req, res){
   res.render("fert/single5"); 
});
router.get("/fertilizers/single6",middleware.isLoggedIn, function(req, res){
   res.render("fert/single6"); 
});




router.get("/fertilizers",middleware.isLoggedIn, function(req, res){
    // Get all campgrounds from DB
 res.render("fert/index");
});

module.exports = router;