import {
  IAcademicSemesterCodes,
  IAcademicSemesterMonth,
  IAcademicSemesterTitles,
} from './academicSemester.interface';

export const academicSemesterMonths: IAcademicSemesterMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemesterTitles: IAcademicSemesterTitles[] = [
  'Autumn',
  'Summer',
  'Fall',
];

export const academicSemesterCode: IAcademicSemesterCodes[] = [
  '01',
  '02',
  '03',
];

// create a mapper for semester code validation
export const academicSemesterCodeMapper: {
  [key: string]: string;
} = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};
