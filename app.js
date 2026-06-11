const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const app=express();
app.use(express.urlencoded({ extended: true }));
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
const path = require("path");
const ejsmate=require("ejs-mate");
app.engine("ejs",ejsmate);
app.use(express.static(path.join(__dirname,"/public")));  
async function main() {
    await mongoose.connect(`mongodb://127.0.0.1:27017/wanderlust`);
}

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
});
app.listen(8080,()=>{
    console.log("Server is listnig to the port no 8080");
});

// app.get("/testListing",async (req,res)=>{
//     let sampleListing = new Listing({
//         title:"My new villa",
//         description:"By the beach",
//         price:1200,
//         location:"Calangute Goa",
//         country:"India"
//     });
//     await sampleListing.save();
//     console.log("samplea was tested");
//     res.send("its working now ");
// });

// app.get("/",(req,res)=>{
//     res.send("working");
// });

//listing details
app.get("/listing",async (req,res)=>{
    const allListing = await Listing.find();
    res.render("listings/index.ejs",{allListing});
});

//render new list form
app.get("/listing/new", async(req,res)=>{
    res.render("listings/new.ejs");
}); 

// add new list
app.post("/listings",async (req,res)=>{
    let newListing =  new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listing");
    
});

//show list 
app.get("/listing/:id",async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
});

//render list for edit
app.get("/listing/:id/edit",async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
});

//update list 
app.put("/listing/:id",async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listing/${id}`);
});

//delete list 
app.delete("/listing/:id/delete",async(req,res)=>{
    let {id} =req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listing");
});