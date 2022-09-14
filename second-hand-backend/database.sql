-- CREATE DATABASE IF NOT EXISTS `perntodo`;

-- CREATE TABLE todo(
--     todo_id SERIAL PRIMARY KEY,
--     description VARCHAR(255)
-- );

CREATE DATABASE IF NOT EXISTS xian;

CREATE TABLE users(
    userID SERIAL PRIMARY KEY,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    userCreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    phone VARCHAR(255)
);

CREATE TABLE merchanTypes(
    merchanTypeID SERIAL PRIMARY KEY,
    merchanTypeName VARCHAR(255),
    merchanTypeCreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE merchandisePhotos(
    merchanPhotoID SERIAL PRIMARY KEY,
    merchanPhotoURL VARCHAR(255),
    merchanPhotoCreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    merchanID INT
);

CREATE TABLE merchandises(
    merchanID SERIAL PRIMARY KEY,
    merchanName VARCHAR(255),
    merchanDescription VARCHAR(255),
    merchanPrice NUMERIC(10,2),
    merchanCreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    merchanPhoto INT,
    FOREIGN KEY (merchanPhoto) REFERENCES merchandisePhotos(merchanPhotoID),
    userID INT,
    FOREIGN KEY (userID) REFERENCES users(userID),
    merchanType INT,
    FOREIGN KEY (merchanType) REFERENCES merchanTypes(merchanTypeID)
);

ALTER TABLE merchandisePhotos ADD CONSTRAINT merchandisePhotos_merchandises_fkey FOREIGN KEY (merchanID) REFERENCES merchandises(merchanID);
    
