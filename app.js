import {createCoruse} from "./services/CourseServices.js";
import {
    apiGetCourse,
    apiGetAllCourses,
    apiCreateCourse,
    apiUpdateCourse,
    apiDeleteCourse
} from "./controller/CourseController.js";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

//initializing app.js
const app = express();
const port = 9004;
app.use(bodyParser.json());
app.use(cors());

//making at least 1 coruse
createCoruse("Web Development", 3023, 30);

//http calls
app.get("/courses", apiGetAllCourses); //this is calling for all coruses
app.get("/courses/:courseId", apiGetCourse); //this is calling for a single coruse
app.post("/courses", apiCreateCourse); //this create a new coruse
app.put("/courses/:courseId", apiUpdateCourse); //updating the courses
app.delete("/courses/:courseId", apiDeleteCourse);

//calling the listener function
app.listen(port, startUp)
    .on("error", (err) => {
        console.error(err);
    });

//startup message
function startUp(){
    console.log("Starting up server...");
}