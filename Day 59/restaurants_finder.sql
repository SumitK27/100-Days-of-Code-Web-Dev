CREATE TABLE restaurants (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    address_id INT NOT NULL,
    type_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (address_id) REFERENCES addresses(id),
    FOREIGN KEY (type_id) REFERENCES types(id)
);
CREATE TABLE reviews (
    id INT NOT NULL AUTO_INCREMENT,
    reviewer_name VARCHAR(255) NOT NULL,
    rating INT NOT NULL,
    text TEXT,
    date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    restaurant_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);
INSERT INTO types(name)
VALUES ("Italian");
INSERT INTO types(name)
VALUES ("American");
INSERT INTO types(name)
VALUES ("German");
INSERT INTO types(name)
VALUES ("Austrian");
SELECT *
FROM types;
INSERT INTO addresses (
        street,
        street_number,
        city,
        postal_code,
        country
    )
VALUES (
        "Teststreet",
        "23a",
        "Munich",
        81541,
        "Germany"
    );
INSERT INTO addresses (
        street,
        street_number,
        city,
        postal_code,
        country
    )
VALUES (
        "Greatstreet",
        "12",
        "Berlin",
        10115,
        "Germany"
    );
SELECT *
FROM addresses;
INSERT INTO restaurants (name, address_id, type_id)
VALUES ("Schnitzelhaus", 1, 3);
INSERT INTO restaurants (name, address_id, type_id)
VALUES ("Burgerhouse", 1, 2);
INSERT INTO restaurants (name, address_id, type_id)
VALUES ("La Mama", 2, 3);
SELECT *
FROM restaurants;
INSERT INTO reviews(rating, restaurant_id, reviewer_name, text)
VALUES (
        4,
        2,
        "Niko",
        "This was awesome!"
    );
INSERT INTO reviews(rating, restaurant_id, reviewer_name)
VALUES (2, 2, "Jules Barnes");
INSERT INTO reviews(rating, restaurant_id, reviewer_name, text)
VALUES (
        4,
        3,
        "Jules Barnes",
        "This was delicious!"
    );
INSERT INTO reviews(rating, restaurant_id, reviewer_name, text)
VALUES (
        5,
        3,
        "Anna Schulz",
        "Amazing!"
    );
SELECT *
FROM reviews;
SELECT *
FROM reviews
WHERE rating > 3;
SELECT restaurants.id,
    restaurants.name,
    addresses.*
FROM restaurants
    INNER JOIN addresses ON restaurants.address_id = addresses.id;
SELECT restaurants.id,
    restaurants.name,
    addresses.*,
    types.name
FROM restaurants
    INNER JOIN addresses ON restaurants.address_id = addresses.id
    INNER JOIN types ON restaurants.type_id = types.id;
SELECT restaurants.id,
    restaurants.name,
    addresses.*,
    types.name AS type_name
FROM restaurants
    INNER JOIN addresses ON restaurants.address_id = addresses.id
    INNER JOIN types ON restaurants.type_id = types.id;
SELECT name AS type_name
FROM types;
SELECT restaurants.id,
    restaurants.name,
    addresses.*,
    types.name AS type_name
FROM restaurants
    INNER JOIN addresses ON restaurants.address_id = addresses.id
    INNER JOIN types ON restaurants.type_id = types.id
WHERE addresses.city = "Munich";
SELECT reviews.id,
    reviews.reviewer_name,
    reviews.rating,
    reviews.text,
    reviews.date,
    restaurants.name as restaurant_name,
    types.name AS type_name,
    addresses.street,
    addresses.street_number,
    addresses.city,
    addresses.postal_code,
    addresses.country
FROM reviews
    INNER JOIN restaurants ON reviews.restaurant_id = restaurants.id
    INNER JOIN types ON restaurants.type_id = types.id
    INNER JOIN addresses ON restaurants.address_id = addresses.id;