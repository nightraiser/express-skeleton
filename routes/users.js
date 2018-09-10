import * as usersController from '../controllers/users';
const _baseUrl = '/users';
const users = (app) => {
	app.get(`${_baseUrl}`, (req, res) => {
		usersController.userHome(req,res);
	});
};
export default users;