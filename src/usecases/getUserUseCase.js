class GetUserUseCase {
    constructor(userRepository) {
        console.log('Ele chegou no construtor');
        this.userRepository = userRepository
    }

    async findAllUsers() {
        console.log('Ele chegou no método');
        return await this.userRepository.findAll();
    }

    async findUserById(id) {
        return await this.userRepository.findById(id);
    }

    async findUserByUsername(username) {
        return await this.userRepository.findByUsername(username);
    }
}

module.exports = GetUserUseCase;