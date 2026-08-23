const express = require("express");
const mongoose = require("mongoose"); 
const path = require("path");
const methodOverride = require("method-override");
const ejsmate=require("ejs-mate");
const Listing = require("./models/listing.js");
const { error } = require("console");
const app=express();
const wrapAsync=require("./utils/wrapAsync.js");
const ExpressError=require("./utils/ExpressError.js");
const {ListingSchema} = require("./ListingSchema.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public"))); 
app.use(methodOverride("_method"));


// //Midelware creation for access token 
// app.use("/api",(req,res,next)=>{
//     let {token} = req.query;
//     if(token === "GiveAccess"){
//         return next();
//     }
//     throw new Error("ACCESS DENIED");
// });


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
app.get("/listings",wrapAsync(async(req,res)=>{
    const allListing = await Listing.find();
    res.render("listings/index.ejs",{allListing});
}));

//render new list form
app.get("/listings/new", wrapAsync(async(req,res)=>{
    res.render("listings/new.ejs");
})); 

// add new list
app.post("/listings",
    validateListing,
    wrapAsync(async(req,res,next)=>{
    let newListing =  new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
    })
);

//show list 
app.get("/listings/:id",wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
}));

//render list for edit
app.get("/listings/:id/edit",wrapAsync(async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}));

//update list 
app.put("/listings/:id",
    validateListing,
    wrapAsync(async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
}));

//delete list 
app.delete("/listings/:id/",wrapAsync(async(req,res)=>{
    let {id} =req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}));

app.all("*splat",(req,res,next)=>{
    next(new ExpressError(404,"Page not found!"));
});

//error handling 
app.use((err,req,res,next)=>{
     console.log(err);
    let {statuscode=500,message="Somthing went wrong!"}=err;
    res.status(statuscode).render("Error.ejs",{message});

    //res.status(statuscode).send(message);
});
