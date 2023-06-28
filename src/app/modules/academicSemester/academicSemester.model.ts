import { Schema, model } from 'mongoose';
import {
  AcademicSemesterModel,
  IAcademicSemester,
} from './academicSemester.interface';
import {
  academicSemesterCode,
  academicSemesterMonths,
  academicSemesterTitles,
} from './academicSemester.constant';

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterTitles,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCode,
    },
    year: {
      type: Number,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonths,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonths,
    },
  },
  {
    timestamps: true,
  }
);

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'academicSemester',
  academicSemesterSchema
);
