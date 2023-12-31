
export interface T_Course{
        courseId:number;
        code?:string;
        description?:string;
        maxClasses?:string;
    }

export interface T_CourseClass{
    courseId?:number;
    className?:string;
    maxStudents?:number;
}  

export interface T_Teacher{
        id?:number;
        fullName?:string;
        password?:string;
        email?:string;
        birthDt?:string;
        maxCourses?:number;
    }

export interface T_Student{
        id?:number;
        fullName?:string;
        password?:string;
        email?:string;
        birthDt?:string;
        maxCourses?:number;
    }

export interface T_CourseClassStudent{
        courseId?:number;
        className?:string;
        studentId?:number;
        grades?:number;
    }

export interface T_CourseClassTeacher{
        courseId?:number;
        className?:string;
        T_eacherId?:number;
        courseType?:string;
        courseDt?:string
    }

export interface T_TeacherPayload{
    id:number;
    fullName:string;
    }

export interface T_StudentPayload{
    id?:number;
    fullName?:string;
    }