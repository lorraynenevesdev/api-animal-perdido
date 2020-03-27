-- MySQL Script generated by MySQL Workbench
-- Fri Mar 27 10:33:58 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema angular_nodejs
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema angular_nodejs
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `angular_nodejs` DEFAULT CHARACTER SET utf8 ;
USE `angular_nodejs` ;

-- -----------------------------------------------------
-- Table `angular_nodejs`.`animal_perdido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `angular_nodejs`.`animal_perdido` (
  `idanimal_perdido` INT NOT NULL AUTO_INCREMENT,
  `especie` VARCHAR(45) NULL,
  `caracteristicas_fisicas` TEXT NULL,
  `foto` VARCHAR(255) NULL,
  `quando` DATE NULL,
  `onde` VARCHAR(255) NULL,
  PRIMARY KEY (`idanimal_perdido`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;