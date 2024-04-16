class UpdateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async updateUser(id, user) {
        return await this.userRepository.update(id, user);
    }
}

module.exports = UpdateUserUseCase;