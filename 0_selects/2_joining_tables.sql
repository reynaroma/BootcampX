SELECT students.name AS student_name, students.email AS student_email, cohorts.name AS cohort_name
FROM students
JOIN cohorts ON cohort_id = cohorts.id;