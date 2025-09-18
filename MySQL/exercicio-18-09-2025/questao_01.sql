CREATE DATABASE db_construindo_vidas;

USE db_construindo_vidas;

CREATE TABLE tb_categorias(
	id BIGINT AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    fase_obra VARCHAR(255) NOT NULL,    
    PRIMARY KEY (id)
);

INSERT INTO tb_categorias(nome, fase_obra)
VALUES("Materiais Básicos", "Estrutura");
INSERT INTO tb_categorias(nome, fase_obra)
VALUES("Elétrica", "Instalações");
INSERT INTO tb_categorias(nome, fase_obra)
VALUES("Acabamentos", "Acabamento");
INSERT INTO tb_categorias(nome, fase_obra)
VALUES("Ferramentas", "Uso geral");
INSERT INTO tb_categorias(nome, fase_obra)
VALUES("Hidráulica", "Instalações");

CREATE TABLE tb_produtos(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(10,2),
    marca VARCHAR(255) NOT NULL,
    uniddMedida VARCHAR(255) NOT NULL,
    categoria_id BIGINT,
    FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id)
);

INSERT INTO tb_produtos(nome, preco, marca, uniddMedida, categoria_id)
VALUES ("Alicate Universal", 35.90, "Tramontina", "Unidade", 4);
INSERT INTO tb_produtos(nome, preco, marca, uniddMedida, categoria_id)
VALUES ("Cimento Votoran 50kg", 48.50, "Votoran", "Saco", 1);
INSERT INTO tb_produtos(nome, preco, marca, uniddMedida, categoria_id)
VALUES ("Tijolo Baiano (Milheiro)", 980.00, "Genérico", "Milheiro", 1);
INSERT INTO tb_produtos(nome, preco, marca, uniddMedida, categoria_id)
VALUES ("Cano PVC Esgoto 100mm", 89.90, "Tigre", "Barra 6m", 5);
INSERT INTO tb_produtos(nome, preco, marca, uniddMedida, categoria_id)
VALUES ("Chuveiro Elétrico Top Jet", 129.90, "Lorenzetti", "Unidade", 2);
INSERT INTO tb_produtos(nome, preco, marca, uniddMedida, categoria_id)
VALUES ("Rolo Fio Flexível 2.5mm", 115.00, "Cobrecom", "Rolo 100m", 2);
INSERT INTO tb_produtos(nome, preco, marca, uniddMedida, categoria_id)
VALUES ("Tinta Acrílica Branca", 410.00, "Suvinil", "Lata 18L", 3);
INSERT INTO tb_produtos(nome, preco, marca, uniddMedida, categoria_id)
VALUES ("Argamassa AC3", 55.00, "Quartzolit", "Saco 20kg", 3);

SELECT * FROM tb_produtos;

SELECT * FROM tb_produtos WHERE preco > 100.00;
SELECT * FROM tb_produtos WHERE preco BETWEEN 75.00 AND 100.00;
SELECT * FROM tb_produtos WHERE nome LIKE "%C%";

SELECT * FROM tb_produtos  INNER JOIN tb_categorias ON tb_produtos.categoria_id = tb_categorias.id WHERE tb_categorias.nome = "Acabamentos";

