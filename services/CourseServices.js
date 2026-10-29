import Courses from "../models/Courses.js";

let courseList = [];

//functions that will get all courses, get 1 course, update one course, and delate 1 course

//adding a course
export function createCoruse(courseTitle, courseNumber, studentAmount) {
    const newCourseId = courseList.length + 1;
    const newCourse = new Courses(newCourseId,courseTitle, courseNumber, studentAmount);
    courseList.push(newCourse);
    return newCourse;
}

//getting all courses
export function getAllCoruses() {
    return courseList;
}

//getting 1 course
export function getOneCourse(courseId) {
    return courseList.find(course => course.id === courseId);
}

//updating the course
export function updateCoruse(id, title, number, studentAmount) {
    let course = getOneCourse(id);
    if(course){
        course.courseTitle = title;
        course.courseNumber = number;
        course.studentAmount = studentAmount;
    }
    return course;
}

//deleting a course
export function deleteCoruse(id) {
    let index = 0;
    for(let course of courseList){
        if(course.id === id) {
            courseList.splice(index, 1);
            return id;
        }
        index++;
    }
    return undefined;
}
