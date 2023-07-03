import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FacultyController } from './faculty.controller';
import { StudentValidation } from '../student/student.validation';

const router = express.Router();

router.get('/:id', FacultyController.getSingleFaculty);

router.delete('/:id', FacultyController.deleteFaculty);

router.patch(
  '/:id',
  validateRequest(StudentValidation.updateStudentZodSchema),
  FacultyController.updateFaculty
);

router.get('/', FacultyController.getAllFaculties);

export const FacultyRoutes = router;
