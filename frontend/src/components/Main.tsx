import { useState, useEffect } from "react";

interface Data {
  title: string;
  url: string;
  description: string;
  instructors: string;
  created: number;
  duration: number;
  existing_rating: number;
  user_rating: number;
}

const Main = () => {
  const [courseData, setCourseData] = useState<Data[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/courses/")
      .then((res) => {
        return res.json();
      })
      .then((data: Data[]) => {
        setCourseData(data);
      });
  }, []);

  return (
    <div className="header">
      <h1>Course Tracker</h1>
      <p>{courseData.length} courses found.</p>
      <ul>
        {courseData.map((course) => (
          <li key={course.title}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
