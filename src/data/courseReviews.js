// src/data/courseReviews.js
// Central data file for managing course reviews

export const coursesBySemester = {
  "SEM 3": [
    {"code": "EC 221", "name": "Intermediate Microeconomics I"},
    {"code": "MM 225", "name": "AI and Data Science"},
    {"code": "EC 223", "name": "Intermediate Macroeconomics I"},
    {"code": "EC 225", "name": "Mathematics for Economics I"},
    {"code": "EC 227", "name": "Statistics I"}
  ],
  "SEM 4": [
    {"code": "EC 210", "name": "Intermediate Microeconomics II"},
    {"code": "DE 250", "name": "Design Thinking for Innovation"},
    {"code": "EC 212", "name": "Intermediate Macroeconomics II"},
    {"code": "EC 214", "name": "Statistics II"}
  ],
  "SEM 5": [
    {"code": "EC 306", "name": "Econometrics I"},
    {"code": "EC 308", "name": "Econometrics Lab I"},
    {"code": "EC 311", "name": "International Economics I"},
    {"code": "EC 313", "name": "Development Economics I"}
  ],
  "SEM 6": [
    {"code": "EC 302", "name": "International Economics II"},
    {"code": "EC 304", "name": "Development Economics II"},
    {"code": "EC 405", "name": "Econometrics II"},
    {"code": "EC 407", "name": "Econometrics Lab II"},
    {"code": "EC 411", "name": "Indian Economy"}
  ],
  "SEM 7": [
    {"code": "EC 402", "name": "Game Theory and Economic Analysis"}
  ],
  "Department Electives / Honors": [
    {"code": "DH 304", "name": "Economics of Healthcare"},
    {"code": "EC 216", "name": "Money and Banking"},
    {"code": "EC 315", "name": "Public Finance"},
    {"code": "EC 401", "name": "Behavioral Foundations of Decision Making"},
    {"code": "EC 440", "name": "Industrial Economics"},
    {"code": "EC 638", "name": "Financial Econometrics"},
    {"code": "EC 633", "name": "Econometrics of Programme Evaluation"},
    {"code": "EC 707", "name": "Empirical Analysis of Corporate Governance"}
  ]
};

// Course reviews database
export const courseReviews = {
  "EC221": {
    "course_code": "EC 221",
    "course_name": "Intermediate Microeconomics I",
    "instructor": "Prof. Subrato Banerjee",
    "semester": "2022-23 – Autumn",
    "prerequisites": "HS101. A good hold over the topics in HS101 is extremely helpful and understanding of graphs and mathematical portion of HS101 helps a lot if remembered. Concepts like Theories of demand, supply and market equilibrium, theories of firm, production and costs, perfect and imperfect competition, oligopoly, monopoly do continue in greater detail from HS101.",
    "learning_outcomes": "\"Will be updated soon\"",
    "learning_experience": "Overall the course is wide and covers various topics and can become interesting if studied well 🙂. Subrato sir keeps the class interactive and always takes doubt without insulting your intelligence, he'll always get back to you and clear all your doubts even if they had already been taught in previous courses. He also keeps the class amusing by asking various challenging riddles which might help in your Quant profile Tests, and have a taste of Game Theory. He is really practical in things and would love to have a cup of tea with you.",
    "content_overview": [
      "Theory of Consumer Behaviour: Preferences, Indifference curves, utility, choice, substitution and income effects, demand curves.",
      "Theory of Firm: Production function, returns to scale, cost function, profit function, short and long run supply curve.",
      "Game Theory & Strategic Behaviour: Classification, Nash Equilibrium, Prisoner's Dillema, Mixed Strategy Equilibrium, Simultaneous & Sequential move games.",
      "Market Structure: Price and output decisions under different market structures like: Perfect Competition, Monopoly, Duopoly, Oligopoly, and Monopolistic Competition. Mergers, Cournot Model, Stackelberg Model, & Bertrand Model, & Collusive Oligopoly."
    ],
    "textbooks": "Hal R Varian is used as reference during the complete course and has almost all the topics covered.",
    "time_commitment": "Understanding of concepts do take time and are quite vast, though regular practice helps a lot especially using the problem sets provided by Subrato sir during the course.",
    "evaluation": "There are 3 group assignments, a midden and an endsem. The exams are open book and open notes. The grading can become bad if the st. deviation in marks of the class is quite high.",
    "grading_stats": "To check grading stats follow this link (use LDAP).",
    "suggestions": "It can get difficult understanding the concepts in class since sometime it can feel that few topics need revision or topics being taught are more scattered. Reading the topics through Hal R Varian and taking the learning in a practical sense like practicing more numericals can help better understand the topics in a better way. Moreover, do solve the problem sets given by Subrato sir, they cover most of the curriculum and are have a similar format as the exam and sometime you may get the same question in the exam 😉\n\nThe Group Assignments also help a lot in remaining consistent with the topics being taught in class.",
    "reviewer": "Prithvi Chauhan"
  }
  
  // Add more course reviews here following the same structure
  // To add a new review, copy the structure above and update all fields
  // The key should be the course code without spaces (e.g., "EC223" for "EC 223")
};

// Helper function to get a course review by code
export const getCourseReview = (courseCode) => {
  return courseReviews[courseCode] || null;
};

// Helper function to check if a review exists
export const hasReview = (courseCode) => {
  return courseCode in courseReviews;
};

// Helper function to get all course codes
export const getAllCourseCodes = () => {
  const allCourses = [];
  Object.values(coursesBySemester).forEach(semesterCourses => {
    allCourses.push(...semesterCourses);
  });
  return allCourses;
};