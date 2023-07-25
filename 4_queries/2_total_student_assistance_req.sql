SELECT COUNT(assistance_requests) AS total_assitances,
  students.name AS name
FROM assistance_requests
JOIN students ON students.id = student_id
WHERE name = 'Elliot Dickinson'
GROUP BY name;