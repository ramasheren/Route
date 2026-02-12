CREATE DATABASE retail_store


CREATE TABLE Suppliers(
	SupplierID INT(10) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    SupplierName VARCHAR(100),
    ContactNumber INT(11)
);

CREATE TABLE Products(
	ProductID INT(10) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    ProductName VARCHAR(100),
    Price DECIMAL(8,2),
    StockQUantity INT,
    SupplierID INT(10) UNSIGNED,
    FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID)
);
CREATE TABLE Sales(
	SaleID INT(10) PRIMARY KEY AUTO_INCREMENT,
    ProductID INT(10) UNSIGNED,
	FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    QuantitySold INT,
	SaleDate DATE
);    