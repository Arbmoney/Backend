import { HttpContextContract } from "@ioc:Adonis/core/HttpContext";

export default class Classe{
    public async index({request, response}: HttpContextContract){
        const constante = request.only(["Name", "Record"]);
    }
}