import React from 'react';
import CourseEntry from './courseEntry'

function App() {
  return (
    <>
      <h1>My Courses</h1>
      <CourseEntry 
      name="Ruhige Hände und ein geschmeidiger Reitersitz"
      flag={true}
      />
    </>
  );
}

export default App;