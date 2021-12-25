CREATE authors (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);
CREATE TABLE posts(
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    summary VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    author_id INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES authors(id)
);
INSERT INTO blog.authors (name, email)
VALUES ("Niko Bellic", "niko@email.com");
INSERT INTO blog.authors (name, email)
VALUES ("Roman Bellic", "roman@email.com");
SELECT *
FROM blog.authors;