CREATE DATABASE db_gear;

USE db_gear;

CREATE TABLE tb_weapons(
	id BIGINT AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    categoria VARCHAR(255) NOT NULL,
    portador_original VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    preco DECIMAL(10,2),
    disponibilidade VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO tb_weapons(nome, categoria, portador_original, descricao, preco, disponibilidade)
VALUES ("Samehada (Pele de Tubarão)",
		"Espada Grande Senciente",
        "Kisame Hoshigaki",
        "Uma espada viva que se alimenta de chakra. Possui escamas afiadas e pode se fundir com seu portador, criando uma forma de tubarão humanoide.", 
        9800.00,
		"Em estoque");
         
INSERT INTO tb_weapons(nome, categoria, portador_original, descricao, preco, disponibilidade)
VALUES  ("Kubikiribōchō (Zanbatō)",
		"Espada Grande",
        "Zabuza Momochi",
        "Conhecida como a 'Espada que não corta, decapita'. Uma lâmina gigante com um semicírculo que se regenera usando o ferro do sangue de suas vítimas.", 
        6500.00,
        "Em estoque");
         
INSERT INTO tb_weapons(nome, categoria, portador_original, descricao, preco, disponibilidade)
VALUES  ("Gunbai Uchiwa",
		"Leque de Batalha",
        "Madara Uchiha",
        "Um leque gigante e indestrutível, capaz de refletir ataques poderosos e gerar rajadas de vento devastadoras. Símbolo do poder do clã Uchiha.",
        8900.00,
		"Em estoque");
         
INSERT INTO tb_weapons(nome, categoria, portador_original, descricao, preco, disponibilidade)
VALUES  ("Marionete do Terceiro Kazekage",
		"Marionete Humana",
        "Sasori da Areia Vermelha",
        "Considerada a obra-prima de Sasori, esta marionete foi feita a partir do corpo do Terceiro Kazekage e retém suas habilidades de Liberação de Magnetismo (Areia de Ferro).",
        12500.00,
		"Em estoque");
         
INSERT INTO tb_weapons(nome, categoria, portador_original, descricao, preco, disponibilidade)
VALUES  ("Espada Kusanagi",
		"Espada Reta",
        "Orochimaru / Sasuke Uchiha",
        "Uma lâmina lendária capaz de se estender a grandes distâncias, cortar quase qualquer material e ser controlada remotamente. Pode ser imbuída com chakra de Relâmpago.",
        7200.00,
        "Em estoque" );
         
INSERT INTO tb_weapons(nome, categoria, portador_original, descricao, preco, disponibilidade)
VALUES  ("Foice de Lâmina Tripla",
		"Foice Ritualística",
        "Hidan",
        "A arma principal de Hidan para seu ritual Jashin. Projetada para coletar sangue, ela é conectada por um cabo de metal que lhe confere um alcance imprevisível em combate.",
        5800.00,
        "Em estoque");
         
         
INSERT INTO tb_weapons(nome, categoria, portador_original, descricao, preco, disponibilidade)
VALUES  ("Hiramekarei",
		"Espada Dupla",
        "Chōjūrō",
        "Uma das Sete Espadas da Névoa. É uma espada de cabo duplo que armazena chakra e pode liberá-lo para formar armas diversas, como um martelo ou uma lâmina longa.",
         6900.00,
        "Em estoque");
         
INSERT INTO tb_weapons(nome, categoria, portador_original, descricao, preco, disponibilidade)
VALUES  ("Bashōsen",
		"Leque Elemental",
        "Kinkaku / Sábio dos Seis Caminhos",
        "Um dos Tesouros do Sábio dos Seis Caminhos. Este leque pode gerar qualquer uma das cinco naturezas de chakra básicas (Fogo, Vento, Raio, Terra, Água) com um simples comando.",
        15000.00,
        "Em estoque");     
         
SELECT * FROM tb_weapons;
         
SELECT * FROM tb_weapons WHERE preco >= 500.00;
SELECT * FROM tb_weapons WHERE preco <= 500.00;

UPDATE tb_weapons SET disponibilidade = "Vendido!" WHERE id = 8;

SELECT * FROM tb_weapons;


