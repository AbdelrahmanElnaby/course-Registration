import { Response } from "express";

export const errorHandle = (err:unknown,owner:string,method?:string):Error=>{
    const error = err instanceof Error ? err : new Error('no error reference'); 
    const prefix = '-> '+ owner + method ?? '' + ':: '
    error.message = prefix + error.message; 
    return error;
}

export const responseHandle = (result:Object|null,res:Response,message?:string):void=>{
    if(! result ){
        res.status(300).send(message ?? "Bad User Request");
    }
    else if(result instanceof Error){
        res.status(400).send(message ?? "Internal Server Errror");
    }
    else{
        res.status(200).json(result);
    }
}

