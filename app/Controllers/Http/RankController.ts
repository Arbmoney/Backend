import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import score from "App/Models/Datum";

export default class RankController{
    async index({request,response}:HttpContextContract){
        const solicitado = request.only(["nome","recorde"]);
        const db = await score.create(solicitado);
        return response.send(db);
    }
    async show({response}:HttpContextContract){
        const db = await score.all();
        return response.json({users:db});
    }
}