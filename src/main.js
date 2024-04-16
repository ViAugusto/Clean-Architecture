const expressAdapter = require('./adapters/expressAdapter');
const createUserUseCase = require('./usecases/createUserUseCase');
const deleteUserUseCase = require('./usecases/deleteUserUseCase');
const getUserUseCase = require('./usecases/getUserUseCase');
const updateUserUseCase = require('./usecases/updateUserUseCase');


expressAdapter.adaptRoute('/users', 'POST', createUserUseCase);
expressAdapter.adaptRoute('/users', 'DELETE', deleteUserUseCase);
expressAdapter.adaptRoute('/users', 'GET', getUserUseCase);
expressAdapter.adaptRoute('/users', 'UPDATE', updateUserUseCase);
expressAdapter.startServer();