CREATE TABLE categories(
    category_id serial not null PRIMARY KEY,
    category_name varchar(32) not null,
    category_path varchar(50) not null  
);

CREATE TABLE sub_categories(
    subcategory_id serial not null PRIMARY KEY,
    subcategory_name varchar(64) not null,
    category_id int REFERENCES categories(category_id)
);

CREATE TABLE products(
    product_id serial not null primary key,
    product_name varchar(128) not null,
    product_price varchar(32) not null,
    product_description varchar(256),
    category_id int REFERENCES categories(category_id),
    subcategory_id int REFERENCES sub_categories(subcategory_id)
);

CREATE TABLE users(
    user_id serial not null PRIMARY KEY,
    user_name varchar(96) not null,
    user_password varchar(12) not null,
    is_admin boolean DEFAULT false
);

CREATE TABLE cart(
    cart_id serial not null PRIMARY KEY,
    product_id int not null REFERENCES products(product_id),
    product_count int DEFAULT 1,
    user_id int not null REFERENCES users(user_id)
);

CREATE TABLE orders(
    order_id serial not null PRIMARY KEY,
    order_address text not null,
    order_create_time timestamptz default current_timestamp,
    user_id int not null REFERENCES users(user_id)
);

CREATE TABLE order_details (
    order_detail_id serial not null PRIMARY KEY,
    product_id int NOT NULL REFERENCES products(product_id),
    product_count int,
    product_img text not null,
    order_id int NOT NULL REFERENCES orders(order_id)
);