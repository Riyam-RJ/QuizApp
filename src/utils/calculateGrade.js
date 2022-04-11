const calculateGrade = score => {
  const percentage = parseInt(score);

  let grade;

  if (percentage >= 75) {
    grade = 'Mycket väl godkänt!';
  }
  else if (percentage >= 50) {
    grade = 'Godkänt!';
  } else {
    grade = 'Underkänt!';
  }

  return {
    grade
  };
};


export default calculateGrade;
