create table requests (
    id SERIAL  PRIMARY KEY,
	r_info TEXT NOT NULL,
	user_id INT NOT NULL REFERENCES users(id)
);