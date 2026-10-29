import {getAllCoruses, createCoruse, updateCoruse, deleteCoruse, getOneCourse} from "../services/CourseServices.js";

//api calls
export function apiGetAllCourses(req, res) {
    console.log("getting all courses");
    res.json(getAllCoruses());
}

export function apiGetCourse(req, res) {
    console.log(`getting ${req.params.courseId} course`);
    const course = getOneCourse(req.params.courseId);
    console.log(course);
    if (course) {
        res.json(course);
    }
    res.status(404).send("Course Not Found");
}

export function apiCreateCourse(req, res) {
    console.log(`create the course ${req.params.courseTitle}: ${req.params.courseNumber}. with ${req.body.courseStudentAmount} allowed students `);
    const course = createCoruse(req.body.courseTitle, req.body.courseNumber, req.body.courseStudentAmount);
    console.log(course);
    res.json(course);

}