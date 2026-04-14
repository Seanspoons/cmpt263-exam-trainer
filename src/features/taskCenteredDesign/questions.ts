import { randomPick } from '../../lib/random'
import type { NetworkingQuestion } from '../networkingShared/networkingDrills'

const FOUNDATIONS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'tcd-ucd-review',
    kind: 'mcq',
    prompt: 'What is the lecture’s reminder about user-centered design before task-centered design begins?',
    options: [
      'It is iterative and focuses on users and their needs in each phase',
      'It happens only after implementation',
      'It avoids evaluation entirely',
      'It is only about visual styling',
    ],
    correctOption: 0,
    explanationSteps: [
      'The task-centered lecture starts from the broader user-centered design framing.',
      'Users and their needs remain central across phases.',
      'Task-centered design is a more specific operational approach within that broader mindset.',
    ],
    conceptSummary: 'Task-centered design builds on iterative user-centered design.',
  },
  {
    id: 'tcd-definition',
    kind: 'text',
    prompt: 'What is task-centered design?',
    requiredConcepts: [
      { label: 'Who uses the system', keywords: ['who uses the system', 'users'] },
      { label: 'What tasks they perform', keywords: ['what tasks they perform', 'tasks'] },
    ],
    answerDisplay:
      'Task-centered design is about identifying who uses the system and what tasks they perform with it.',
    explanationSteps: [
      'The lecture defines task-centered design around users and tasks.',
      'It is not only about features in isolation.',
      'Understanding tasks gives design work a concrete basis.',
    ],
    conceptSummary: 'Task-centered design starts from real users and the tasks they need to perform.',
  },
  {
    id: 'tcd-why-requirements-matter',
    kind: 'mcq',
    prompt: 'Why is getting requirements right especially important?',
    options: [
      'Because different people interpret designs differently',
      'Because requirements never change',
      'Because prototypes replace requirements',
      'Because users always agree with each other',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture emphasizes that interpretation varies across people.',
      'Requirements help anchor what the product should do and how it should perform.',
      'Poor requirements lead to misaligned designs.',
    ],
    conceptSummary: 'Requirements matter because people interpret designs differently and need shared targets.',
  },
  {
    id: 'tcd-phases',
    kind: 'match',
    prompt: 'Match each task-centered design phase to the lecture process.',
    pairs: [
      { left: 'Phase I', right: 'Identification' },
      { left: 'Phase II', right: 'Requirements' },
      { left: 'Phase III', right: 'Design and prototypes' },
    ],
    explanationSteps: [
      'The lecture organizes task-centered design into three phases.',
      'Knowing the phases is foundational for later process questions.',
      'Identification leads to requirements, which lead to design and prototypes.',
    ],
    conceptSummary: 'Task-centered design has three phases: identification, requirements, and design/prototypes.',
  },
]

const IDENTIFICATION_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'tcd-phase1-steps',
    kind: 'match',
    prompt: 'Match each Phase I activity to the lecture description.',
    pairs: [
      { left: 'Get in touch with users', right: 'Contact people who might use the system' },
      { left: 'Create task examples', right: 'Write several task stories based on what was learned' },
      { left: 'Classify tasks', right: 'Judge them by frequency and importance' },
      { left: 'Evaluate task examples', right: 'Circulate them for omissions, corrections, and clarifications' },
    ],
    explanationSteps: [
      'Phase I is the identification stage.',
      'It focuses on users, tasks, and validating early understanding.',
      'These steps create the basis for later requirements.',
    ],
    conceptSummary: 'Phase I identifies users and tasks, then validates task examples.',
  },
  {
    id: 'tcd-user-characteristics',
    kind: 'mcq',
    prompt: 'Which set best matches the lecture’s user characteristics?',
    options: [
      'Ability, background, and attitude to computers',
      'Favorite font, favorite color, and salary only',
      'Only age and gender',
      'Only device ownership',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture highlights ability, background, and attitude to computers.',
      'These characteristics affect how people approach a design.',
      'They are part of good user identification work.',
    ],
    conceptSummary: 'Useful user characteristics include ability, background, and attitude to computers.',
  },
  {
    id: 'tcd-user-types',
    kind: 'match',
    prompt: 'Match each user type to the best design implication.',
    pairs: [
      { left: 'Novice', right: 'Needs constrained, step-by-step, clear information' },
      { left: 'Expert', right: 'Needs flexibility and power' },
      { left: 'Frequent user', right: 'Benefits from shortcuts' },
      { left: 'Casual or infrequent user', right: 'Needs clear instructions and menu paths' },
    ],
    explanationSteps: [
      'The lecture distinguishes novice, expert, casual/infrequent, and frequent use.',
      'Each user type benefits from different design support.',
      'This is a direct design-implication mapping question.',
    ],
    conceptSummary: 'Different user types need different interaction support.',
  },
  {
    id: 'tcd-direct-contact',
    kind: 'mcq',
    prompt: 'What is the best way to learn about users and tasks according to the lecture?',
    options: [
      'Direct contact with users when possible',
      'Assuming users and tasks without later verification',
      'Only reading internal company reports',
      'Ignoring unusual or extreme users',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture says direct contact is ideal.',
      'An intermediary is a reasonable fallback, and assumptions are a last resort to verify later.',
      'This reinforces the user-centered nature of the process.',
    ],
    conceptSummary: 'Direct user contact is the preferred source for task-centered design insight.',
  },
  {
    id: 'tcd-broad-user-coverage',
    kind: 'match',
    prompt: 'Match each user group to the lecture’s coverage recommendation.',
    pairs: [
      { left: 'Typical users', right: 'Core everyday audience' },
      { left: 'Occasional but important users', right: 'Use the system less often but still matter' },
      { left: 'Unusual or extreme users', right: 'May reveal edge cases or accessibility needs' },
    ],
    explanationSteps: [
      'The lecture says coverage should not stop at typical users only.',
      'Important occasional users and unusual users also matter.',
      'This broadens design understanding and robustness.',
    ],
    conceptSummary: 'Good user coverage includes typical, occasional-important, and unusual users.',
  },
]

const TASK_ANALYSIS_PERSONAS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'tcd-task-analysis',
    kind: 'mcq',
    prompt: 'What should task analysis focus on?',
    options: [
      'What people are trying to achieve, why, and how',
      'Only which colors they prefer',
      'Only screen resolution',
      'Only marketing slogans',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture frames task analysis around goals, reasons, and methods.',
      'It investigates an existing situation rather than abstract speculation.',
      'This is broader than recording isolated UI steps.',
    ],
    conceptSummary: 'Task analysis focuses on goals, reasons, and current ways of doing the work.',
  },
  {
    id: 'tcd-good-task-description',
    kind: 'match',
    prompt: 'Match each good task-description quality to the lecture guidance.',
    pairs: [
      { left: 'Say what, not how', right: 'Describe the job to be done rather than interface steps' },
      { left: 'Be specific', right: 'Avoid vague generic task wording' },
      { left: 'Describe a complete job', right: 'Cover the full task and information flow' },
      { left: 'Say who the users are', right: 'Tie the task to a concrete user context' },
    ],
    explanationSteps: [
      'Good task descriptions are detailed enough to guide design without freezing implementation too early.',
      'The lecture stresses describing complete jobs, not isolated micro-steps only.',
      'Specific user context matters.',
    ],
    conceptSummary: 'Good task descriptions are specific, user-grounded, and focused on complete jobs.',
  },
  {
    id: 'tcd-persona',
    kind: 'text',
    prompt: 'What is a persona?',
    requiredConcepts: [
      { label: 'Synthesized not real person', keywords: ['synthesized', 'not real person'] },
      { label: 'User characteristics goals background', keywords: ['user characteristics', 'goals', 'background'] },
    ],
    answerDisplay:
      'A persona is a synthesized, not literally real person used to capture user characteristics, goals, and background.',
    explanationSteps: [
      'Personas are based on real-user understanding but are not one actual person.',
      'They should not be idealized.',
      'Multiple personas are usually needed.',
    ],
    conceptSummary: 'Personas are synthesized user representations grounded in real-user patterns.',
  },
  {
    id: 'tcd-task-evaluation',
    kind: 'mcq',
    prompt: 'What does task evaluation mean in this lecture?',
    options: [
      'Circulating task descriptions to users for omissions, corrections, clarifications, and suggestions',
      'Ranking fonts by popularity',
      'Building final prototypes immediately',
      'Ignoring user feedback to avoid bias',
    ],
    correctOption: 0,
    explanationSteps: [
      'Task evaluation checks whether the task descriptions are missing something or misleading.',
      'Users can point out omissions or clarify details.',
      'This helps refine the accuracy of early design inputs.',
    ],
    conceptSummary: 'Task evaluation checks and refines task descriptions through user feedback.',
  },
  {
    id: 'tcd-users-not-always-right',
    kind: 'mcq',
    prompt: 'What is the lecture’s caution about user input?',
    options: [
      'Users are not always right; the goal is to build systems they will want, not just whatever they say they want',
      'Users should be ignored completely',
      'Users always know the best implementation',
      'User feedback should replace all design judgment',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture strikes a balance between user input and design judgment.',
      'The goal is not blind obedience to every suggestion.',
      'Design should create systems users will truly want and use well.',
    ],
    conceptSummary: 'User input is essential but still requires interpretation and design judgment.',
  },
]

const REQUIREMENTS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'tcd-requirement-definition',
    kind: 'mcq',
    prompt: 'What is a requirement?',
    options: [
      'A statement about the intended product specifying what it should do or how it should perform',
      'A final implementation decision only',
      'A specific color palette choice',
      'A user persona card',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture defines requirements broadly enough to include both functions and performance/quality expectations.',
      'Requirements can later support evaluation and testing.',
      'They are not only implementation details.',
    ],
    conceptSummary: 'A requirement states what a product should do or how it should perform.',
  },
  {
    id: 'tcd-fr-definition',
    kind: 'text',
    prompt: 'What is a functional requirement?',
    requiredConcepts: [
      { label: 'What system will do or behavior/task', keywords: ['what the system will do', 'function', 'behavior', 'task'] },
      { label: 'Feature or functionality', keywords: ['feature', 'functionality'] },
    ],
    answerDisplay:
      'A functional requirement specifies what the system will do, such as a function, behavior, task, or feature.',
    explanationSteps: [
      'Functional requirements are often action-oriented and become product features.',
      'They are commonly tested through functional testing.',
      'They are often phrased like verbs.',
    ],
    conceptSummary: 'Functional requirements specify system behaviors and features.',
  },
  {
    id: 'tcd-nfr-definition',
    kind: 'text',
    prompt: 'What is a non-functional requirement?',
    requiredConcepts: [
      { label: 'Characteristic or constraint/quality', keywords: ['characteristic', 'constraint', 'quality'] },
      { label: 'How it performs or property', keywords: ['how it performs', 'performance', 'property'] },
    ],
    answerDisplay:
      'A non-functional requirement specifies a characteristic, constraint, quality, or performance/property expectation of the system.',
    explanationSteps: [
      'Non-functional requirements are about product properties rather than core functions.',
      'They are often tested through performance or usability testing rather than only functional testing.',
      'They often read like attributes rather than actions.',
    ],
    conceptSummary: 'Non-functional requirements specify qualities, constraints, and performance expectations.',
  },
  {
    id: 'tcd-fr-vs-nfr-scenarios',
    kind: 'match',
    prompt: 'Match each example to functional or non-functional requirement.',
    pairs: [
      { left: 'User can reset forgotten password', right: 'Functional requirement' },
      { left: 'Login under 5 seconds', right: 'Non-functional requirement' },
      { left: 'Create new account', right: 'Functional requirement' },
      { left: 'Errors communicated clearly', right: 'Non-functional requirement' },
    ],
    explanationSteps: [
      'The lecture provides login-themed examples of both FRs and NFRs.',
      'FRs describe actions or capabilities; NFRs describe properties or constraints.',
      'This is a highly testable distinction.',
    ],
    conceptSummary: 'FRs are actions/features; NFRs are qualities, constraints, or performance targets.',
  },
  {
    id: 'tcd-moscow-priority',
    kind: 'match',
    prompt: 'Match each prioritization bucket to the lecture category.',
    pairs: [
      { left: 'Must', right: 'Absolutely must include' },
      { left: 'Should', right: 'Should include if feasible' },
      { left: 'Could', right: 'Could include if resources allow' },
      { left: 'Exclude', right: 'Leave out for now' },
    ],
    explanationSteps: [
      'The lecture presents requirement prioritization buckets similar to MoSCoW logic.',
      'These help teams decide what is essential versus optional.',
      'Prioritization matters because not every requirement can be treated equally.',
    ],
    conceptSummary: 'Requirement prioritization separates essentials from optional or excluded items.',
  },
  {
    id: 'tcd-prototypes-phase3',
    kind: 'mcq',
    prompt: 'What should prototypes in Phase III be developed around?',
    options: [
      'User groups and tasks',
      'Only developer preferences',
      'Only color-system experiments',
      'Only existing desktop layouts',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture states that user groups and tasks form the basis of potential designs.',
      'Prototypes should therefore grow from those inputs.',
      'This keeps design grounded in the earlier phases.',
    ],
    conceptSummary: 'Phase III prototypes should be based on user groups and tasks.',
  },
]

const INTERVIEWS_SURVEYS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'tcd-interview-popular',
    kind: 'mcq',
    prompt: 'What does the lecture say about interviews in requirements gathering?',
    options: [
      'They are the most popular technique for eliciting requirements',
      'They are rarely used in HCI',
      'They should always be fully unstructured only',
      'They are only for final usability testing',
    ],
    correctOption: 0,
    explanationSteps: [
      'Interviews are presented as a very common elicitation technique.',
      'They are especially useful for learning about tasks, motivations, and pain points.',
      'The lecture also notes a continuum of interview structure.',
    ],
    conceptSummary: 'Interviews are a common and important requirements-elicitation method.',
  },
  {
    id: 'tcd-semi-structured',
    kind: 'mcq',
    prompt: 'What best describes a semi-structured interview?',
    options: [
      'Predetermined questions/order with open-ended responses and recorded response essence',
      'No questions or structure at all',
      'Only yes/no closed questions',
      'A survey with radio buttons',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture describes semi-structured interviews as the most common point on the continuum.',
      'They balance comparability with open-ended depth.',
      'The interviewer records the essence of the response.',
    ],
    conceptSummary: 'Semi-structured interviews combine planned structure with open-ended responses.',
  },
  {
    id: 'tcd-survey-open-closed',
    kind: 'match',
    prompt: 'Match each question type to the lecture framing.',
    pairs: [
      { left: 'Closed-ended', right: 'Gathers quantitative data through checkboxes, radio buttons, or dropdowns' },
      { left: 'Open-ended', right: 'Gathers qualitative text responses and is slower to analyze' },
      { left: 'Likert scale', right: 'Common opinion scale with about 5, 7, or 9 points' },
    ],
    explanationSteps: [
      'The lecture distinguishes survey question types by data style and analysis burden.',
      'Closed-ended questions are more structured and quantitative.',
      'Open-ended questions are richer but slower to analyze.',
    ],
    conceptSummary: 'Survey design balances quantitative structure against qualitative depth.',
  },
  {
    id: 'tcd-leading-question',
    kind: 'mcq',
    prompt: 'Which question is leading?',
    options: [
      'Did you enjoy our amazing new website?',
      'How often do you use the site each week?',
      'What problems do you encounter with login?',
      'Which of these tasks do you do most often?',
    ],
    correctOption: 0,
    explanationSteps: [
      'Leading questions bias respondents toward a desired answer.',
      'The adjective “amazing” cues approval in advance.',
      'The lecture explicitly warns against leading questions.',
    ],
    conceptSummary: 'Leading questions bias responses by framing the desired answer.',
  },
  {
    id: 'tcd-overlapping-options',
    kind: 'mcq',
    prompt: 'Which response set shows overlapping survey options?',
    options: ['1–3 times, 3–5 times, >5 times', 'Never, monthly, weekly, daily', 'Strongly disagree to strongly agree', 'Yes, no, not sure'],
    correctOption: 0,
    explanationSteps: [
      'The category boundary at 3 overlaps between the first two choices.',
      'This makes coding and interpretation ambiguous.',
      'The lecture warns against overlapping options.',
    ],
    conceptSummary: 'Survey options should be mutually exclusive to avoid ambiguity.',
  },
  {
    id: 'tcd-double-barreled',
    kind: 'mcq',
    prompt: 'Which question is double-barreled?',
    options: [
      'How often and how much time do you spend using the app?',
      'How often do you use the app?',
      'What frustrates you most about notifications?',
      'Which device do you use most often?',
    ],
    correctOption: 0,
    explanationSteps: [
      'A double-barreled question asks about two things at once.',
      'Frequency and time spent are not identical variables.',
      'The lecture warns against this because it muddies interpretation.',
    ],
    conceptSummary: 'Double-barreled questions mix multiple variables into one response prompt.',
  },
]

const ALL_QUESTIONS = {
  foundations: FOUNDATIONS_QUESTIONS,
  identification: IDENTIFICATION_QUESTIONS,
  'task-analysis-personas': TASK_ANALYSIS_PERSONAS_QUESTIONS,
  requirements: REQUIREMENTS_QUESTIONS,
  'interviews-surveys': INTERVIEWS_SURVEYS_QUESTIONS,
} as const

function pick(subtopic: keyof typeof ALL_QUESTIONS): NetworkingQuestion {
  return randomPick(ALL_QUESTIONS[subtopic])
}

export function generateTcdFoundationsQuestion(): NetworkingQuestion {
  return pick('foundations')
}

export function generateTcdIdentificationQuestion(): NetworkingQuestion {
  return pick('identification')
}

export function generateTcdTaskAnalysisQuestion(): NetworkingQuestion {
  return pick('task-analysis-personas')
}

export function generateTcdRequirementsQuestion(): NetworkingQuestion {
  return pick('requirements')
}

export function generateTcdInterviewSurveyQuestion(): NetworkingQuestion {
  return pick('interviews-surveys')
}
