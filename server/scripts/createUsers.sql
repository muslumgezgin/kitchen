create table users ( 
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	last_name VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	UNIQUE(email)
);
 
