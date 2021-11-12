import { UserRepo } from "../../userRepo";
import bcrypt from "bcrypt"

export class CreateUser {
    

    constructor(userRepo) {
        this.userRepo = userRepo
    }

    async execute() {

        try {
            console.log(props);
            const userAlreadyExists = await this.userRepo.exists(props.email)

            if (userAlreadyExists) {
                return {
                    success: false,
                    message: 'User already exists'
                }
            }

            console.log('already exists ?',userAlreadyExists)

            const hashPassword = await bcrypt.hash(props.password);
            console.log('hashed password', hashPassword);

            props.password = hashPassword;

            await this.userRepo.create(props);

            return {
                success: true,
                message: 'User is correctly created'
            }
        }
        catch (err) {
            return {
                success: false,
                message: err
            }
        }
    }
}