# Write your MySQL query statement below
SELECT c.Name
AS Customers
FROM customers c
LEFT JOIN orders o ON c.id = o.CustomerId
WHERE o.CustomerId IS NULL