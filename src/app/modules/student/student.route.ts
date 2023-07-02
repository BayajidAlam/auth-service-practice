import validateRequest from '../../middlewares/validateRequest';
import router from '../../routes';
import { UserController } from '../user/user.controller';
import { UserValidation } from '../user/user.validation';

// router.patch(
//   '/create-student',
//   validateRequest(UserValidation.createUserZodSchema),
//   UserController.createStudent
// );

router.get('/:id', SutdentController.getSingleStudent);

router.get('/', SutdentController.getAllStudents);

router.delete('/:id', SutdentController.deleteStudent);

export const StudentRoutes = router;
