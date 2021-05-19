# Write your MySQL query statement below
SELECT Max(Salary) AS SecondHighestSalary FROM Employee
WHERE Salary < (SELECT max(Salary) from Employee)
