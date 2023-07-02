import validateRequest from '../../middlewares/validateRequest';
import router from '../../routes';
import { StudentController } from './student.controller';
import { StudentValidation } from './student.validation';

router.get('/:id', StudentController.getSingleStudent);

router.get('/', StudentController.getAllStudents);

router.delete('/:id', StudentController.deleteStudent);

router.patch(
  '/:id',
  validateRequest(StudentValidation.updateStudentZodSchema),
  StudentController.updateStudent
);

export const StudentRoutes = router;
