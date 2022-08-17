import db from "../database/models"


export class UserService {

    static async getUsers(){
        return db.User.findAll()
    }
}