DROP DATABASE IF EXISTS daybyday;
CREATE DATABASE daybyday;
USE daybyday

DROP TABLE IF EXISTS smokers;

CREATE TABLE IF NOT EXISTS smokers (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  phone VARCHAR(15) UNIQUE,
  email VARCHAR(15),
  timezone VARCHAR(15),
  progress INT(15),
  reminder VARCHAR(15)
)

DROP TABLE IF EXISTS friends;

CREATE TABLE IF NOT EXISTS friends (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) UNIQUE,
  phone VARCHAR(15),
  id_smokers INT,
)

DROP TABLE IF EXISTS smokers;

CREATE TABLE messages (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  text VARCHAR(15),
  timestamp VARCHAR(15),
  id_smokers INT,
  id_friends INT
)

ALTER TABLE friends ADD FOREIGN KEY (id_smokers) REFERENCES smokers (id);
ALTER TABLE messages ADD FOREIGN KEY (id_smokers) REFERENCES smokers (id);
ALTER TABLE messages ADD FOREIGN KEY (id_friends) REFERENCES friends (id);
