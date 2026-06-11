const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const listingSchema = new Schema({
    title:{
        type:String,
        required:true,
    },

    description:String,
    image: {
        filename: {
            type: String,
        },

        url: {
            type: String,
            default:
                "https://www.istockphoto.com/photo/laptop-on-wooden-round-table-near-a-white-sofa-with-cushion-on-brown-carpet-in-gm2216217201-632908108",
        },
    },
    price:Number,
    location:String,
    country:String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing; 