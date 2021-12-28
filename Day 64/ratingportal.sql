-- Types
db.types.insertOne({ name: "German" });
db.types.insertOne({ name: "Italian" });
db.types.insertOne({ name: "American" });
-- Restaurants
db.restaurants.insertOne(
    { name: "Munich House",
    address: { street: "FoodStreet",
    streetNumber: "23b",
    postalCode: 80333,
    city: "Munich",
    country: "Germany" },
    type: { typeId: ObjectId("61cb36348f33b5dbfe5038a5"),
    name: "German" } }
);
db.restaurants.insertOne(
    { name: "Berlin Burger House",
    address: { street: "HamStreet",
    streetNumber: "12",
    postalCode: 10115,
    city: "Berlin",
    country: "Germany" },
    type: { typeId: ObjectId("61cb36368f33b5dbfe5038a7"),
    name: "American" } }
);
-- Reviews
db.reviews.insertOne(
    { reviewer: { firstName: "Niko",
    lastName: "Bellic" },
    rating: 3,
    text: "This was okay - could be better!",
    date: new Date("2021-12-28"),
    restaurant: { id: ObjectId("61cb3c0b8f33b5dbfe5038a8"),
    name: "Munich House" } }
);
db.reviews.insertOne(
    { reviewer: { firstName: "Niko",
    lastName: "Bellic" },
    rating: 5,
    text: "This was amazing!",
    date: new Date("2021-12-28"),
    restaurant: { id: ObjectId("61cb3c858f33b5dbfe5038a9"),
    name: "Berlin Burger House House" } }
);