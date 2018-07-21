DROP DATABASE IF EXISTS items;
CREATE DATABASE items;

\c items;

CREATE TABLE goods (
  ID SERIAL PRIMARY KEY,
  seller VARCHAR,
  seller_rating INTEGER,
  category VARCHAR,
  item_name VARCHAR,
  price INTEGER,
  condition VARCHAR,
  description VARCHAR,
  quantity INTEGER,
  comments VARCHAR,
  likes INTEGER
);

INSERT INTO goods (seller, seller_rating, category, item_name, price, condition, description, quantity, comments, likes)
  VALUES ('Eric', 5, 'Tech', 'Macbook', 1000, 'new', 'Great new Macbook', 3, 'This is a great product', 4);
