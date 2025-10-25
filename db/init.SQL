create table clientes(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    stats VARCHAR(50) NOT NULL DEFAULT 'ativo', 
    -- 'ativo' ou 'inativo'
    cadastrado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
create table produtos(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome_produto VARCHAR(50) NOT NULL,
    valor_produto DECIMAL(10,2) NOT NULL,
    quantidade_estoque INT NOT NULL DEFAULT 0
);
create table compras(
	id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
	produto_id INT NOT NULL,
    quantidade_comprada INT NOT NULL DEFAULT 1,
    comprado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE,
    FOREIGN KEY (produto_id) REFERENCES produtos(id) ON DELETE CASCADE
);