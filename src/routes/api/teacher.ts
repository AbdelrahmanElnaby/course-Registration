import {Router} from "express"
import {index, show, create, update, deleteItem} from "../../handlers/teacher"
import authorization from "../../middlewares/authorization";
import cookieParser from "cookie-parser" 

const routes = Router();

//#region teacher routes
routes.post("/",create);
routes.get("/",index);
routes.get("/:id",cookieParser(), authorization, show);
routes.put("/:id",cookieParser(), authorization, update);
routes.delete("/:id",deleteItem);
//#endregion

export default routes;