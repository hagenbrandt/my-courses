import React from 'react'
import CourseEntry from './courseEntry'
import courseList from './component/data/courseList.json'

export default function CourseList () {
    const courseListData = courseList.courseList

    return (
        <>
            {courseListData.map(course => (
                <CourseEntry 
                    name={course.courseName}
                    flag={course.wishListFlag}
                />
            ))}
        </>
    )
}