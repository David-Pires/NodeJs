SHOW DATABASES; -- Mostrar Databases 

CREATE TABLES -- Criar tabela

DESCRIBE nomeDaTabela -- descreve o conteudo da tabela

INSERT INTO nomeDaTabela -- insere dados dentro da tabela

USE escrevaOnomeDaTabela -- Utilizar database

SHOW TABLES -- mostrar tabelas disponíveis


SELECT * FROM usuarios WHERE idade = 8; -- selecionando coluna 

SELECT * FROM usuarios WHERE  idade >= 18; -- selecionar usando operador lógico 

DELETE FROM usuarios WHERE NOME = "David";  -- deletar utilizando WHERE 

UPDATE usuarios SET idade = 5 WHERE idade = 29; -- update, atualizando campos



-- // name, email, idade

INSERT INTO usuarios(nome, email, idade) VALUES(
  "Gulando",
  "gulando@email.com",
  85
) -- // inserindo dados na tabela


-- Plataforma de perguntas e respostas Utilizando as tecnologias EXPRESS com MySQL integrados com HTML e CSS e componentes de BOOTSTRAP. 