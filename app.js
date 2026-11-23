const express = require("express");
const mongoose = require("mongoose"); 
const path = require("path");
const methodOverride = require("method-override");
const ejsmate=require("ejs-mate");
const { error } = require("console");
const app=express();
const ExpressError=require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js"); 

const SessionOptions = {
    secret:"mysupersecreatcode",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+1*24*60*60*1000,
        maxAge:1*24*60*60*1000,
        httponly:true,
    },
};
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public"))); 
app.use(methodOverride("_method"));
app.use(session(SessionOptions));
app.use(flash());

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


// app.get("/",(req,res)=>{
//     res.send("working");
// });
// app.get("/session-expressTest",(req,res)=>{
//     let {name="Anonymus"} = req.query;
//     req.session.name=name;
//     res.send(name);
// });

app.use((req,res,next)=>{
    res.locals.success =req.flash("success");
    res.locals.Error =req.flash("Error");
    next();
});

app.get("/favicon.ico", (req, res) => res.status(204).end());
app.use("/listings",listings);
app.use("/listings/:id/reviews",reviews);


app.all("*splat",(req,res,next)=>{
    console.log("404 for:", req.method, req.originalUrl);
    next(new ExpressError(404,"Page not found!"));
});

//error handling 
app.use((err,req,res,next)=>{
     console.log(err);
    let {statuscode=500,message="Somthing went wrong!"}=err;
    res.status(statuscode).render("Error.ejs",{message});
});

