import {client} from "../../database"
import { errorHandle } from "../../utilities/globalmeth";
import { T_Student } from "../../utilities/types"

interface StudentLogin{
    login:(teacher:T_Student)=>Promise<T_Student|null>;
}

class Student implements StudentLogin{
   async login({email,password}: T_Student): Promise<T_Student | null>{
        try{
            const connection = await client.connect();
            const sql = "SELECT id, full_name FROM students WHERE email = $1 AND password = $2";
            const variables = [email,password];
            const query = await connection.query(sql,variables);
            connection.release();
            return query.rowCount ? query.rows[0] : null ;
        }
        catch(err){
            throw errorHandle(err,"login-model","Student-Login");
        }
    }

}
const student:StudentLogin = new Student();

export default  student;
