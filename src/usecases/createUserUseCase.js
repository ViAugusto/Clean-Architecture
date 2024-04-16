class CreateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async createUser(user) {
        if(user.name == null){
            throw new Error('Nome inválido');
        } 
        const result = await this.userRepository.create(user);
        if (result.statusCode != 200){

        }
    }
}

module.exports = CreateUserUseCase;