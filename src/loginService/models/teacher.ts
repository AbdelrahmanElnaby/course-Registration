import {client} from "../../database"
import { errorHandle } from "../../utilities/globalmeth";
import { T_Teacher} from "../../utilities/types"

interface TeacherLogin{
    login:(teacher:T_Teacher)=>Promise<T_Teacher|null>;
}

class Teacher implements TeacherLogin{
   async login({email}: T_Teacher): Promise<T_Teacher | null>{
        try{
            const connection = await client.connect();
            const sql = "SELECT id, full_name, password FROM teachers WHERE email = $1";
            const variables = [email];
            const query = await connection.query(sql,variables);
            connection.release();
            return query.rowCount ? query.rows[0] : null ;
        }
        catch(err){
            throw errorHandle(err,"login-model","Teacher-Login");
        }
    }

}

const teacher:TeacherLogin = new Teacher();

export default  teacher;