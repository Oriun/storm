/* users table */
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL
);
/* posts table */
CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    user_id INT,
    publication_date timestamp NOT NULL,
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id)
);
/* cover images table */
CREATE TABLE IF NOT EXISTS cover_images (
    id SERIAL PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    post_id INT UNIQUE,
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL,
    FOREIGN KEY (post_id) REFERENCES posts (id)
);
