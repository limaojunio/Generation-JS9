CREATE DATABASE db_academia_konoha;

USE db_academia_konoha;

CREATE TABLE tb_estudantes(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cla VARCHAR(255) NOT NULL,
    joninResponsavel VARCHAR(255) NOT NULL,
    especialidadeJutsu VARCHAR(255) NOT NULL,
    notaFinal DECIMAL(10,2)
    
);

INSERT INTO tb_estudantes (nome, cla, joninResponsavel, especialidadeJutsu, notaFinal) 
VALUES ('Uzumaki Naruto', 'Uzumaki', 'Hatake Kakashi', 'Ninjutsu', 6.50);

INSERT INTO tb_estudantes (nome, cla, joninResponsavel, especialidadeJutsu, notaFinal) 
VALUES('Uchiha Sasuke', 'Uchiha', 'Hatake Kakashi', 'Ninjutsu', 9.80);

INSERT INTO tb_estudantes (nome, cla, joninResponsavel, especialidadeJutsu, notaFinal) 
VALUES('Haruno Sakura', 'Haruno', 'Hatake Kakashi', 'Controle de Chakra', 9.20);

INSERT INTO tb_estudantes (nome, cla, joninResponsavel, especialidadeJutsu, notaFinal) 
VALUES('Nara Shikamaru', 'Nara', 'Sarutobi Asuma', 'Técnicas de Clã', 8.50);

INSERT INTO tb_estudantes (nome, cla, joninResponsavel, especialidadeJutsu, notaFinal) 
VALUES('Hyuuga Hinata', 'Hyuuga', 'Yuhi Kurenai', 'Taijutsu (Punho Gentil)', 6.80);

INSERT INTO tb_estudantes (nome, cla, joninResponsavel, especialidadeJutsu, notaFinal) 
VALUES('Rock Lee', 'Nenhum', 'Maito Gai', 'Taijutsu (Punho Forte)', 5.50);

INSERT INTO tb_estudantes (nome, cla, joninResponsavel, especialidadeJutsu, notaFinal) 
VALUES('Hyuuga Neji', 'Hyuuga', 'Maito Gai', 'Taijutsu (Punho Gentil)', 9.50);

INSERT INTO tb_estudantes (nome, cla, joninResponsavel, especialidadeJutsu, notaFinal) 
VALUES('Inuzuka Kiba', 'Inuzuka', 'Yuhi Kurenai', 'Técnicas de Clã', 7.00);

SELECT * FROM tb_estudantes;

SELECT * FROM tb_estudantes WHERE notaFinal >= 7.00;
SELECT * FROM tb_estudantes WHERE notaFinal <= 7.00;

UPDATE tb_estudantes SET notaFinal = 7.1 WHERE id = 6 ;





