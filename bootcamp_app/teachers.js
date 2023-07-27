const { Pool } = require('pg');

const config = {
  user: 'labber',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
};

const pool = new Pool(config);

const cohortName = 'JUL02'; // Replace this with the desired cohort name

const queryString = `
  SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
  FROM assistance_requests
  JOIN teachers ON teachers.id = teacher_id
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohorts.id = students.cohort_id
  WHERE cohorts.name = $1
  ORDER BY teachers.name;
`;

const values = [cohortName];

pool.query(queryString, values)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.cohort}: ${user.teacher}`);
    });
  })
  .catch(err => console.error('query error', err.stack));