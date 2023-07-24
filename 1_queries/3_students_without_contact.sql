SELECT name, id, cohort_id
FROM students
WHERE email || phone IS NULL;