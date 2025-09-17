CREATE DATABASE db_rh;

USE db_rh;

CREATE TABLE tb_colaboradores(
id BIGINT AUTO_INCREMENT NOT NULL,
nome VARCHAR(255) NOT NULL,
turno VARCHAR(255) NOT NULL,
cargo VARCHAR(255) NOT NULL,
salario DECIMAL (10,2) NOT NULL,
PRIMARY KEY(id)
);

SELECT * FROM tb_colaboradores;

INSERT INTO tb_colaboradores(nome, turno, cargo, salario)
VALUES ("Tobirama", "Integral", "Assitant", 1528.00);
INSERT INTO tb_colaboradores(nome, turno, cargo, salario)
VALUES ("Hashirama", "Integral", "Founder", 10528.00);
INSERT INTO tb_colaboradores(nome, turno, cargo, salario)
VALUES ("Madara", "Integral", "Co-Founder", 5528.00);
INSERT INTO tb_colaboradores(nome, turno, cargo, salario)
VALUES ("Butsuma Senju", "Integral", "Team Leader", 4528.00);
INSERT INTO tb_colaboradores(nome, turno, cargo, salario)
VALUES ("Tajima Uchiha", "Integral", "Team Leader", 4.528);

SELECT * FROM tb_colaboradores;

SELECT * FROM tb_colaboradores WHERE salario >= 2000.00;
SELECT * FROM tb_colaboradores WHERE salario <= 2000.00;

UPDATE tb_colaboradores SET salario = 4528.00 WHERE id = 5;
DELETE FROM tb_colaboradores WHERE id = 6;

SELECT * FROM tb_colaboradores;


 