const express = require("express");
const mongoose = require("mongoose"); 
const path = require("path");
const methodOverride = require("method-override");
const ejsmate=require("ejs-mate");
const Listing = require("./models/listing.js");

const app=express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public"))); 
app.use(methodOverride("_method"));

app.engine("ejs",ejsmate);
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

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

app.get("/",(req,res)=>{
    res.send("working");
});

//listing details
app.get("/listings",async (req,res)=>{
    const allListing = await Listing.find();
    res.render("listings/index.ejs",{allListing});
});

//render new list form
app.get("/listings/new", async(req,res)=>{
    res.render("listings/new.ejs");
}); 

// add new list
app.post("/listings",async (req,res)=>{
    let newListing =  new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
    
});

//show list 
app.get("/listings/:id",async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
});

//render list for edit
app.get("/listings/:id/edit",async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
});

//update list 
app.put("/listings/:id",async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
});

//delete list 
app.delete("/listings/:id/",async(req,res)=>{
    let {id} =req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
});