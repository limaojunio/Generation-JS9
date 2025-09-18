CREATE DATABASE db_farmacia_bem_estar;

USE db_farmacia_bem_estar;

CREATE TABLE tb_categorias(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    precisa_receita VARCHAR(3) NOT NULL
);

INSERT INTO tb_categorias(nome, precisa_receita) 
VALUES ("Medicamentos", "Sim");
INSERT INTO tb_categorias(nome, precisa_receita) 
VALUES ("Higiene Pessoal", "Não");
INSERT INTO tb_categorias(nome, precisa_receita) 
VALUES ("Cosméticos", "Não");
INSERT INTO tb_categorias(nome, precisa_receita) 
VALUES ("Vitaminas", "Não");
INSERT INTO tb_categorias(nome, precisa_receita) 
VALUES ("Infantil", "Não");

CREATE TABLE tb_produtos(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    marca VARCHAR(255) NOT NULL,
    quantidade VARCHAR(255),
    categoria_id BIGINT,
    FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id)
);

INSERT INTO tb_produtos(nome, preco, marca, quantidade, categoria_id) VALUES ("Dipirona 500mg", 8.50, "Medley", "10 comprimidos", 1);
INSERT INTO tb_produtos(nome, preco, marca, quantidade, categoria_id) VALUES ("Protetor Solar FPS 50", 75.90, "Nivea", "200ml", 3);
INSERT INTO tb_produtos(nome, preco, marca, quantidade, categoria_id) VALUES ("Creme Dental Colgate", 7.99, "Colgate", "90g", 2);
INSERT INTO tb_produtos(nome, preco, marca, quantidade, categoria_id) VALUES ("Vitamina C", 35.00, "Redoxon", "30 comprimidos", 4);
INSERT INTO tb_produtos(nome, preco, marca, quantidade, categoria_id) VALUES ("Fralda Pacote P", 45.90, "Pampers", "30 unidades", 5);
INSERT INTO tb_produtos(nome, preco, marca, quantidade, categoria_id) VALUES ("Shampoo Anticaspa", 28.50, "Clear", "400ml", 2);
INSERT INTO tb_produtos(nome, preco, marca, quantidade, categoria_id) VALUES ("Kit Shampoo e Condicionador", 55.50, "Pantene", "400ml + 170ml", 3);
INSERT INTO tb_produtos(nome, preco, marca, quantidade, categoria_id) VALUES ("Suplemento BCAA", 120.00, "Integralmedica", "120 cápsulas", 4);


SELECT * FROM tb_produtos WHERE preco > 50.00;
SELECT * FROM tb_produtos WHERE preco BETWEEN 5.00 AND 60.00;
SELECT * FROM tb_produtos WHERE nome LIKE "%c%";

SELECT tb_produtos.nome, tb_produtos.preco, tb_produtos.marca, tb_categorias.nome AS categoria FROM tb_produtos
INNER JOIN tb_categorias ON tb_produtos.categoria_id = tb_categorias.id;

SELECT tb_produtos.nome, tb_produtos.preco, tb_produtos.marca, tb_categorias.nome AS categoria FROM tb_produtos
INNER JOIN tb_categorias ON tb_produtos.categoria_id = tb_categorias.id WHERE tb_categorias.nome = "Cosméticos";