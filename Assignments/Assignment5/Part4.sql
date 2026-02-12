-- Q1
-- Part2

-- Q2
ALTER TABLE Products ADD COLUMN Category VARCHAR(100) NOT NULL

-- Q3
ALTER TABLE Products DROP COLUMN Category

-- Q4
ALTER TABLE Suppliers MODIFY COLUMN ContactNumber VARCHAR(15)

-- Q5
ALTER TABLE Products MODIFY COLUMN ProductName VARCHAR(100) NOT NULL

-- Q6
-- a
INSERT INTO Suppliers(SupplierName, ContactNumber) values('FreshFoods', '01001234567')
-- b
-- i
INSERT INTO Products(ProductName, Price, StockQuantity, SupplierID)
SELECT 'Milk', 15, 50, SupplierID
FROM suppliers
WHERE SupplierName = 'FreshFoods'
-- ii
INSERT INTO Products(ProductName, Price, StockQuantity, SupplierID)
SELECT 'Bread', 10, 30, SupplierID
FROM suppliers
WHERE SupplierName = 'FreshFoods'
-- iii
INSERT INTO Products(ProductName, Price, StockQuantity, SupplierID)
SELECT 'Eggs', 20, 40, SupplierID
FROM suppliers
WHERE SupplierName = 'FreshFoods'
-- c
INSERT INTO Sales(QuantitySold, SaleDate, ProductID)
SELECT 2, '2025-05-20', ProductID
FROM Products
WHERE ProductName = 'Milk';
UPDATE products
SET StockQuantity = StockQuantity - 2
WHERE ProductName = 'Milk';

-- Q7
UPDATE products
SET Price = 25
WHERE ProductName = 'Bread'

-- Q8
DELETE FROM products
WHERE ProductName='Eggs'

-- Q9
SELECT p.ProductName, s.QuantitySold 
FROM Products p
JOIN Sales s
ON p.ProductID = s.ProductID

-- Q10
SELECt *
FROM products
ORDER BY StockQuantity DESC
LIMIT 1

-- Q11
SELECT *
FROM suppliers
WHERE SupplierName LIKE 'F%'

-- Q12
SELECT p.*
FROM Products p
LEFT JOIN Sales s
ON p.ProductID = s.ProductID
WHERE s.ProductID IS NOT NULL

-- Q13
SELECT s.QuantitySold, p.ProductName, s.SaleDate 
FROM Products p
JOIN Sales s
ON p.ProductID = s.ProductID

-- Q14
CREATE USER 'store_manager'@'localhost'
IDENTIFIED BY 'manager123';
GRANT SELECT, INSERT, UPDATE
ON retail_store.*
TO 'store_manager'@'localhost'

-- Q15
REVOKE UPDATE
ON retail_store.*
FROM 'store_manager'@'localhost'

-- Q16
GRANT DELETE
ON retail_store.Sales
TO 'store_manager'@'localhost'