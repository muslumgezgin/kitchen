create table uploadsUsersFile ( 
	id SERIAL PRIMARY KEY,
    places TEXT [],
    request_id INT NOT NULL REFERENCES requests(id),
    user_id INT NOT NULL REFERENCES (user_id),
);