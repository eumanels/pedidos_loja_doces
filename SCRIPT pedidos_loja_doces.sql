CREATE DATABASE pedidos_loja_doces;

USE pedidos_loja_doces;

CREATE TABLE clientes(
id_cliente INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome_cliente VARCHAR(75) NOT NULL,
endereco VARCHAR(100)
);


DROP TABLE pedidos;

CREATE TABLE IF NOT EXISTS `pedidos_loja_doces`.`pedidos` (
  `id_pedido` INT(11) NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(200) NOT NULL,
  `valor_total` VARCHAR(45) NOT NULL,
  `id_cliente` INT(11) NOT NULL,
  PRIMARY KEY (`id_pedido`),
  INDEX `fk_pedidos_clientes_idx` (`id_cliente` ASC),
  CONSTRAINT `fk_pedidos_clientes`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `pedidos_loja_doces`.`clientes` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


ALTER TABLE `pedidos_loja_doces`.`pedidos` 
CHANGE COLUMN `descricao` `descricao` VARCHAR(200) NOT NULL ;

SELECT * FROM clientes;
