import React, {useState, useEffect} from 'react'
import CourseEntry from './courseEntry'
import {initialState, InitialState} from './store/reducer'
import {useSelector, useDispatch, shallowEqual, connect } from 'react-redux'
import {isEqual} from 'lodash'

const courseSelector = (state: InitialState) => {
    return state.courses
}

export default function CourseList () {
    
    const courses = useSelector(courseSelector, isEqual)
    
    return (
        <>  
            {courses.map(course => (
                <CourseEntry
                    key={course.courseId} 
                    id={course.courseId}
                    name={course.courseName}
                    flag={course.wishListFlag}
                />
            ))}
        </>
    )
}