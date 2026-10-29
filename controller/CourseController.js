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
    console.log(`create the course ${req.body.courseTitle}: ${req.body.courseNumber}. with ${req.body.courseStudentAmount} allowed students `);
    const course = createCoruse(req.body.courseTitle, req.body.courseNumber, req.body.courseStudentAmount);
    console.log(course);
    res.json(course);

}

export function apiUpdateCourse(req, res) {
    console.log(`Updating course ${req.params.courseId}`);
    const updateCourse = updateCoruse(req.params.courseId, req.body.courseTitle, req.body.courseNumber, req.body.courseStudentAmount);
    console.log(updateCourse);
    res.json(updateCourse);
}