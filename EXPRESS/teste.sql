-- // name, email, idade

INSERT INTO usuarios(nome, email, idade) VALUES(
  "Gulando",
  "gulando@email.com",
  85
) -- // inserindo dados na tabela


SELECT * FROM usuarios WHERE idade = 8; -- selecionando coluna 

SELECT * FROM usuarios WHERE  idade >= 18; -- selecionar usando operador lógico 

DELETE FROM usuarios WHERE NOME = "David";  -- deletar utilizando WHERE 

UPDATE usuarios SET idade = 5 WHERE idade = 29; 