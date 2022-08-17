
import { UserService } from "../services/userService"

export class UserControler {

    static async getUsers() {
        return UserService.getUsers()
    }

}