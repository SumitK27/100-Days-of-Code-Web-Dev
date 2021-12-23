-- CREATE restaurants Table
CREATE TABLE `restaurants_finder`.`restaurants` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `type` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

-- INSERT ROWS into restaurants Table
INSERT INTO restaurants_finder.restaurants (name, type) VALUES ("Web Dev Mealery", "German");

INSERT INTO restaurants_finder.restaurants (name, type) VALUES ("Pizza House", "Italian");

INSERT INTO restaurants_finder.restaurants (name, type) VALUES ("Beergarden", "German");

-- Display Data from restaurants Table
SELECT * FROM restaurants;

SELECT * FROM restaurants WHERE type="German";

SELECT name, type FROM restaurants;

SELECT COUNT(*) FROM restaurants WHERE type="German";

-- UPDATE Data
UPDATE restaurants SET name = "Web Dev Meals" WHERE name = "Web Dev Mealery";


-- DELETE Data
DELETE FROM restaurants WHERE id = 1;

-- DELETE TABLE
DROP TABLE restaurants;

-- CREATING DATABASE DESIGN
CREATE TABLE addresses (
    id INT NOT NULL AUTO_INCREMENT,
    street VARCHAR(255) NOT NULL,
    street_number VARCHAR(45) NOT NULL,
    city VARCHAR(255) NOT NULL,
    postal_code INT NOT NULL,
    country VARCHAR(255),

    PRIMARY KEY (id)
);

CREATE TABLE types (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,

    PRIMARY KEY (id)
);