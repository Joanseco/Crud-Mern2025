-- Crear la base de datos
-- El nombre de la base de datos debe coincidir con el de tu archivo .env
CREATE DATABASE IF NOT EXISTS mern_mysql_db;

-- Usar la base de datos
USE mern_mysql_db;

-- Crear la tabla 'Tasks'
-- Sequelize la crea automáticamente si el campo "timestamps" es verdadero,
-- pero es buena práctica tener el script.
CREATE TABLE IF NOT EXISTS Tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);
