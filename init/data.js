const sampleListings = [
  {
    title: "Cliffside Villa in Santorini",
    description:
      "Perched on the volcanic cliffs of Santorini, this stunning villa offers breathtaking views of the Aegean Sea and iconic blue-domed churches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&auto=format&fit=crop&q=60",
    },
    price: 4500,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Jungle Treehouse in Ubud",
    description:
      "Immerse yourself in Bali's lush jungle from this open-air treehouse. Wake up to birdsong and the sound of flowing streams below.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=800&auto=format&fit=crop&q=60",
    },
    price: 950,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "Lakeside Chalet in Interlaken",
    description:
      "Wake up to mirror-like lake reflections and snow-capped peaks in this cozy Swiss chalet. Ideal for hiking, skiing, and complete relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=60",
    },
    price: 2800,
    location: "Interlaken",
    country: "Switzerland",
  },
  {
    title: "Riad in the Marrakech Medina",
    description:
      "Step into a world of Moroccan splendor. This beautifully decorated riad features mosaic courtyards, a rooftop terrace, and authentic hammam.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&auto=format&fit=crop&q=60",
    },
    price: 1300,
    location: "Marrakech",
    country: "Morocco",
  },
  {
    title: "Overwater Bungalow in Bora Bora",
    description:
      "Float above the crystal-clear lagoon of Bora Bora in this luxurious overwater bungalow with a glass floor and private deck.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501109782957-d5be9e6b22af?w=800&auto=format&fit=crop&q=60",
    },
    price: 7500,
    location: "Bora Bora",
    country: "French Polynesia",
  },
  {
    title: "Stone Cottage in the Irish Countryside",
    description:
      "Tuck yourself into the rolling green hills of Ireland in this centuries-old stone cottage with a fireplace and a garden full of wildflowers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=60",
    },
    price: 1100,
    location: "County Clare",
    country: "Ireland",
  },
  {
    title: "Penthouse Suite in Singapore",
    description:
      "Soar above the city skyline in this ultra-modern penthouse with panoramic views of Marina Bay and a private rooftop infinity pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=60",
    },
    price: 6500,
    location: "Marina Bay",
    country: "Singapore",
  },
  {
    title: "Desert Camp in Wadi Rum",
    description:
      "Sleep under a blanket of stars in a luxury desert camp in the red sands of Wadi Rum. Camel rides and Bedouin dinners included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&auto=format&fit=crop&q=60",
    },
    price: 1400,
    location: "Wadi Rum",
    country: "Jordan",
  },
  {
    title: "Colonial Mansion in Cartagena",
    description:
      "Live in the heart of Colombia's most colorful city. This restored colonial mansion blends vibrant local art with elegant modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&auto=format&fit=crop&q=60",
    },
    price: 2100,
    location: "Cartagena",
    country: "Colombia",
  },
  {
    title: "Beachfront Shack in Goa",
    description:
      "Feel the warm breeze of the Arabian Sea from this laid-back beachfront shack. Perfect for sunsets, seafood, and soulful evenings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60",
    },
    price: 600,
    location: "Goa",
    country: "India",
  },
  {
    title: "Farmhouse in Provence",
    description:
      "Surrounded by endless lavender fields, this rustic French farmhouse is the perfect place for slow mornings, local wine, and golden sunsets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=60",
    },
    price: 2300,
    location: "Provence",
    country: "France",
  },
  {
    title: "Glass Igloo in Finnish Lapland",
    description:
      "Watch the Northern Lights dance above you from the comfort of a heated glass igloo. A once-in-a-lifetime Arctic experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&auto=format&fit=crop&q=60",
    },
    price: 3800,
    location: "Rovaniemi",
    country: "Finland",
  },
  {
    title: "Ryokan in Kyoto",
    description:
      "Experience authentic Japanese hospitality in a traditional ryokan. Tatami floors, yukata robes, and a private onsen await you.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&auto=format&fit=crop&q=60",
    },
    price: 2600,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Vineyard Estate in Tuscany",
    description:
      "Settle into this sprawling estate surrounded by vineyards and olive groves. Wine tasting, cooking classes, and stunning sunsets included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop&q=60",
    },
    price: 3200,
    location: "Siena",
    country: "Italy",
  },
  {
    title: "Houseboat on Dal Lake",
    description:
      "Drift peacefully on the shimmering Dal Lake in a hand-carved Kashmiri houseboat, surrounded by snow-capped Himalayan peaks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&auto=format&fit=crop&q=60",
    },
    price: 850,
    location: "Srinagar",
    country: "India",
  },
  {
    title: "Rainforest Lodge in Costa Rica",
    description:
      "Nestled between two national parks, this eco-lodge lets you spot toucans, sloths, and howler monkeys right from your balcony.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=60",
    },
    price: 1750,
    location: "Manuel Antonio",
    country: "Costa Rica",
  },
  {
    title: "Luxury Tent in the Masai Mara",
    description:
      "Experience the African wilderness in comfort. This luxury tented camp puts you in the middle of the world's greatest wildlife spectacle.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=60",
    },
    price: 4200,
    location: "Masai Mara",
    country: "Kenya",
  },
  {
    title: "Canal Boat in Amsterdam",
    description:
      "Cruise the historic canals of Amsterdam from your very own floating home. A quirky, unforgettable way to explore the city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&auto=format&fit=crop&q=60",
    },
    price: 1650,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Adobe Casita in Santa Fe",
    description:
      "Soak in the art, culture, and high-desert sunsets of New Mexico from this charming adobe casita with a private courtyard and kiva fireplace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=60",
    },
    price: 1350,
    location: "Santa Fe",
    country: "United States",
  },
  {
    title: "Clifftop Cottage in Big Sur",
    description:
      "Perched dramatically above the Pacific Ocean, this clifftop cottage in Big Sur offers raw coastal beauty, whale watching, and absolute solitude.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&auto=format&fit=crop&q=60",
    },
    price: 2900,
    location: "Big Sur",
    country: "United States",
  },
];

module.exports = { data: sampleListings };