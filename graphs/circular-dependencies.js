/*
 *  Given a list of courses as an array of strings,
 *  Filter out all courses that have circular prerequisite dependencies.
 *
 *  Each string represents a course to the left of the colon
 *  and the prerequisites are separated by commas to the right of the colon.
 *
 *  e.g.
 *
 *  filterBadCourses([
 *    'Math101: Intro to Algebra, Intro to Arithmetic',
 *    'Intro to Arithmetic: Basic Addition',
 *    'Basic Addition: Math101',
 *    'History101:',
 *    'History of Rome: History101',
 *    'History of Greece: History101',
 *    'Greek Mythology: History of Greece'
 *  ]);
 *
 *  returns:
 *
 *  [
 *    'History101:',
 *    'History of Rome: History101',
 *    'History of Greece: History101',
 *    'Greek Mythology: History of Greece'
 *  ]

