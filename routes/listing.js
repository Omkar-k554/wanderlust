const express = require("express");
const router =  express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {ListingSchema,reviewSchema} = require("../ListingSchema.js");
const Listing = require("../models/listing.js");

let validateListing = (req,res,next)=>{
    let {error} =  ListingSchema.validate(req.body);
    if(error){
        let errMsg= error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
};

//listing details
router.get("/",wrapAsync(async(req,res)=>{
    const allListing = await Listing.find();
    res.render("listings/index.ejs",{allListing});
}));

//render new list form
router.get("/new", wrapAsync(async(req,res)=>{
    res.render("listings/new.ejs");
})); 

// add new list
router.post("/",
    validateListing,
    wrapAsync(async(req,res,next)=>{
         // If the image URL is empty, remove the image object
        if (!req.body.listing.image?.url) {
            delete req.body.listing.image;
        }

       let newListing =  new Listing(req.body.listing);
       await newListing.save();
       req.flash("success","New Listing is Created!");
       res.redirect(303,"listings");
    })
);

//show list 
router.get("/:id",wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if(!listing){
        req.flash("Error","Listing does not exist");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs",{listing});
}));

//render list for edit
router.get("/:id/edit",wrapAsync(async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("Error","Listing does not exist");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs",{listing});
}));

//update list 
router.put("/:id",
    validateListing,
    wrapAsync(async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash("success","Listing is Updated!");
    res.redirect(`/listings/${id}`);
}));

//delete list 
router.delete("/:id/",wrapAsync(async(req,res)=>{
    let {id} =req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing is Deleted!");
    res.redirect("/listings");
}));

module.exports = router;