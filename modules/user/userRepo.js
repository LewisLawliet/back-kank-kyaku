export class UserRepo {
    

    constructor() {
        this.entities = entities
    }

    async create() {
        const UserEntity = this.entities.user

        const exists = await this.exists(userProps.email);
        console.log('create ?');

        if (!exists) {
            await UserEntity.create(
                {
                    data: {
                        email: userProps.email,
                        password: userProps.password
                    }
                })
        }

        return
    }

     async exists() {
        const UserEntity = this.entities.user;

        const result = await UserEntity.findUnique({ where: { email: email } })

        console.log('exists : ', result);

        return !!result === true;
    }

     async getUserByEmail() {
        const UserEntity = this.entities.user;

        const result = await UserEntity.findUnique({ where: { email: email } })

        return result
    }
}export class UserRepo {
    

    constructor() {
        this.entities = entities
    }

     async create() {
        const UserEntity = this.entities.user

        const exists = await this.exists(userProps.email);
        console.log('create ?');

        if (!exists) {
            await UserEntity.create(
                {
                    data: {
                        email: userProps.email,
                        password: userProps.password
                    }
                })
        }

        return
    }

     async exists() {
        const UserEntity = this.entities.user;

        const result = await UserEntity.findUnique({ where: { email: email } })

        console.log('exists : ', result);

        return !!result === true;
    }

     async getUserByEmail() {
        const UserEntity = this.entities.user;

        const result = await UserEntity.findUnique({ where: { email: email } })

        return result
    }
}