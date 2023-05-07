import React from 'react'
import { useState } from 'react'
import { Checkbox } from 'antd'

import SectionTitle from './SectionTitle'
import Note from './Note'


const courses = [
    {
        name: 'CS 341 - Algorithms',
        desc: 'Handwritten lecture notes + summary sheets',
    },
    {
        name: 'CS 348 - Introduction to Database Management',
        desc: 'Handwritten summary sheets for each module'
    },
    {
        name: 'CS 350 - Operating Systems',
        desc: 'Lecture notes + summary sheets + review questions'
    },
    {
        name: 'CO 487 - Applied Crytography',
        desc: 'Handwritten summary sheets'
    },
    {
        name: 'ECON 102 - Introduction to Macroeconomics',
        desc: 'Notes for each module'
    },
    {
        name: 'CS 240 - Data Structures and Data Management',
        desc: 'Summary sheets for each module'
    },
    {
        name: 'STAT 231 - Statistics',
        desc: 'Summary sheets of key terms and formula for units 1-4'
    },
    {
        name: 'CS 245 - Logic and Computation',
        desc: 'Summary sheets of definitions and formula'
    },
    {
        name: 'STAT 230 - Probability',
        desc: 'Summary sheets of definitions and formula'
    },
    {
        name: 'MATH 239 - Introduction to Combinatorics',
        desc: 'Summary sheets of definitions and formula'
    },
    {
        name: 'MATH 136 - Linear Algebra 1',
        desc: 'Summary sheets of definitions and formula',
    },
    {
        name: 'ECON 101 - Introduction to Microeconomics',
        desc: 'Notes for each module'
    },
    {
        name: 'CS 135 - Designing Functional Programs',
        desc: 'Notes for each module'
    }, 
]

const courseTypes = ['CO', 'CS', 'ECON', 'MATH', 'STAT']
const courseLevels = ['1XX', '2XX', '3XX', '4XX']

const Notes = () => {
    const [selectedCourseTypes,  setSelectedCourseTypes] = useState(courseTypes)
    const [selectedCourseLevels, setSelectedCourseLevels] = useState(courseLevels)
    const onChangeTypes = (checkedTypes) => {
        setSelectedCourseTypes(checkedTypes)
    }
    const onChangeLevels = (checkedLevels) => {
        setSelectedCourseLevels(checkedLevels)
    }
    const filteredCourses = courses.filter(course => {
        let type = course.name.split(' ')[0]
        let level = course.name.split(' ')[1][0] + 'XX'
        return selectedCourseTypes.includes(type) && selectedCourseLevels.includes(level)  
    })
    return (
        <section id='notes' className='justify-content-center sm:w-10 md:w-9 lg:w-8 xl:w-7 mx-3 mt-5 mb-3 p-5 border-round-md'>
            <SectionTitle text='Notes'/>
            <p>Notes I have created for my university courses (mostly math and CS courses).</p>
            <h3>Course Type:</h3>
            <Checkbox.Group options={courseTypes} defaultValue={courseTypes} onChange={onChangeTypes} />
            <h3>Course Level:</h3>
            <Checkbox.Group options={courseLevels} defaultValue={courseLevels} onChange={onChangeLevels} />
            <div className='mt'></div>
            {filteredCourses.map((course, key) => {
                return (
                    <Note name={course.name} desc={course.desc} key={key}/>
                )
            })}
        </section>
    )
}

export default Notes