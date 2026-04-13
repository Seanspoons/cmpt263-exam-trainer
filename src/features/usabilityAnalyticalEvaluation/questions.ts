import { randomPick } from '../../lib/random'
import type { NetworkingQuestion } from '../networkingShared/networkingDrills'

const USABILITY_TESTING_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'usability-core-elements',
    kind: 'match',
    prompt: 'Match each usability study element to its role.',
    pairs: [
      { left: 'Facilitator', right: 'Guides the session and prompts tasks' },
      { left: 'Participant', right: 'Attempts the tasks and provides responses' },
      { left: 'Tasks', right: 'Concrete activities users are asked to complete' },
      { left: 'Exit questions', right: 'Post-test reflections and perceptions' },
    ],
    explanationSteps: [
      'Usability studies usually include a facilitator, participant, and representative tasks.',
      'Teams often also collect demographics and exit feedback.',
      'Knowing the study anatomy helps choose and critique methods.',
    ],
    conceptSummary: 'Usability tests are structured around participants performing tasks with researcher support.',
  },
  {
    id: 'usability-demographics',
    kind: 'mcq',
    prompt: 'Why include demographic questions in a usability study?',
    options: [
      'To understand who the participants are and interpret findings in context',
      'To replace the usability tasks',
      'To compute p-values automatically',
      'To prevent any bias from ever occurring',
    ],
    correctOption: 0,
    explanationSteps: [
      'Demographics help researchers understand who was included in the study.',
      'That context matters when interpreting whether findings generalize to the target audience.',
      'Demographics complement rather than replace task-based evidence.',
    ],
    conceptSummary: 'Demographics provide participant context for interpreting study findings.',
  },
  {
    id: 'usability-prototype-test',
    kind: 'mcq',
    prompt: 'A team wants quick feedback on a prototype before launch. Which evaluation approach is most direct?',
    options: [
      'Prototype usability test with representative tasks',
      'Only web analytics on the live product',
      'A paired t-test without any prototype',
      'Only code review by developers',
    ],
    correctOption: 0,
    explanationSteps: [
      'Prototype testing gets users interacting with an early design.',
      'That makes it well suited for uncovering usability issues before launch.',
      'Analytics require deployed use, and code review does not replace user testing.',
    ],
    conceptSummary: 'Prototype tests are direct ways to gather usability feedback before deployment.',
  },
  {
    id: 'usability-exit-questions',
    kind: 'mcq',
    prompt: 'What is the main purpose of exit questions after a usability session?',
    options: [
      'Capture reflections, satisfaction, and perceived issues after task completion',
      'Teach the participant how to redesign the interface',
      'Replace task observation data',
      'Select the alpha level',
    ],
    correctOption: 0,
    explanationSteps: [
      'Exit questions gather post-task perceptions once the participant has experienced the design.',
      'They often reveal frustrations, preferences, and perceived strengths.',
      'They complement observed performance data rather than replacing it.',
    ],
    conceptSummary: 'Exit questions capture post-test reflections and subjective impressions.',
  },
]

const MAZE_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'usability-maze-definition',
    kind: 'mcq',
    prompt: 'Maze is primarily used for what kind of study?',
    options: [
      'Unmoderated usability study of prototypes or flows',
      'Long-form ethnography only',
      'Statistical significance testing only',
      'Physical TUI fabrication',
    ],
    correctOption: 0,
    explanationSteps: [
      'Maze is commonly used for unmoderated usability studies.',
      'It supports prototype tests, task flows, and structured questions.',
      'That makes it useful when rapid remote feedback is needed.',
    ],
    conceptSummary: 'Maze supports unmoderated usability studies and prototype testing.',
  },
  {
    id: 'usability-maze-blocks',
    kind: 'mcq',
    prompt: 'In Maze, what are blocks used for?',
    options: [
      'Structuring different parts of a study such as tasks and questions',
      'Preventing all participant mistakes',
      'Running a t-test inside the prototype',
      'Replacing facilitator notes in moderated sessions',
    ],
    correctOption: 0,
    explanationSteps: [
      'Maze studies are assembled from blocks such as intro, tasks, questions, and follow-ups.',
      'Blocks help structure the participant journey through the study.',
      'They organize the study; they do not guarantee good design.',
    ],
    conceptSummary: 'Maze blocks are structural building pieces of an unmoderated study.',
  },
  {
    id: 'usability-unmoderated-strength',
    kind: 'mcq',
    prompt: 'What is a key strength of an unmoderated usability study?',
    options: [
      'It scales more easily and can be run remotely without a live facilitator',
      'It allows the facilitator to intervene continuously',
      'It guarantees richer qualitative data than any other method',
      'It removes the need for study tasks',
    ],
    correctOption: 0,
    explanationSteps: [
      'Unmoderated studies are efficient because participants can complete them asynchronously.',
      'That can improve speed and scale.',
      'The tradeoff is that live clarification and probing are limited.',
    ],
    conceptSummary: 'Unmoderated studies trade facilitator control for speed and scalability.',
  },
]

const ANALYTICAL_EVAL_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'analytical-eval-definition',
    kind: 'mcq',
    prompt: 'What is analytical evaluation in HCI?',
    options: [
      'Expert-based evaluation done without direct end-user participation',
      'A live usability test with many participants',
      'Only a questionnaire benchmark',
      'A deployment analytics dashboard',
    ],
    correctOption: 0,
    explanationSteps: [
      'Analytical evaluation is performed by experts rather than end-users.',
      'It predicts or inspects usability without direct user participation.',
      'Examples include Fitts’ Law, GOMS, KLM, and cognitive walkthroughs.',
    ],
    conceptSummary: 'Analytical evaluation is expert-based and does not directly involve end-users during the evaluation.',
  },
  {
    id: 'analytical-vs-usability',
    kind: 'mcq',
    prompt: 'Which statement best distinguishes analytical evaluation from usability testing?',
    options: [
      'Analytical evaluation relies on expert analysis; usability testing observes real users doing tasks',
      'Analytical evaluation always uses larger samples than usability testing',
      'Usability testing never uses tasks',
      'Analytical evaluation is only for questionnaires',
    ],
    correctOption: 0,
    explanationSteps: [
      'Analytical evaluation predicts or inspects issues without direct user sessions.',
      'Usability testing gathers evidence from people actually attempting representative tasks.',
      'The methods are complementary, not interchangeable.',
    ],
    conceptSummary: 'Analytical methods use experts; usability tests use real participants.',
  },
  {
    id: 'evaluation-approach-choice',
    kind: 'mcq',
    prompt:
      'If a team wants to estimate likely interaction cost before recruiting users, which approach fits best?',
    options: ['Analytical evaluation', 'Exit questionnaire only', 'Post-launch web analytics', 'Crowdsourcing labels only'],
    correctOption: 0,
    explanationSteps: [
      'Analytical methods are useful early because they can be run without direct users.',
      'They help predict costs or identify likely issues before a full usability test.',
      'That makes them efficient for early-stage design analysis.',
    ],
    conceptSummary: 'Analytical evaluation is useful when direct-user testing is not yet practical.',
  },
]

const PREDICTIVE_MODEL_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'fitts-law-core',
    kind: 'mcq',
    prompt: 'What is the core idea of Fitts’ Law?',
    options: [
      'Farther and smaller targets take longer to point to',
      'Every click takes the same time',
      'Users always prefer more options',
      'Questionnaires are better than pointing models',
    ],
    correctOption: 0,
    explanationSteps: [
      'Fitts’ Law predicts pointing time using target distance and width.',
      'Targets that are farther away or smaller are harder and slower to acquire.',
      'It is a classic predictive model for pointing tasks.',
    ],
    conceptSummary: 'Fitts’ Law: farther + smaller = harder and slower.',
  },
  {
    id: 'goms-expansion',
    kind: 'mcq',
    prompt: 'What does GOMS stand for?',
    options: [
      'Goals, Operators, Methods, Selection rules',
      'Graphs, Objects, Metrics, Systems',
      'Goals, Operations, Means, Scales',
      'Generalized Output Modeling Study',
    ],
    correctOption: 0,
    explanationSteps: [
      'GOMS decomposes user activity into goals, operators, methods, and selection rules.',
      'It is used to analyze how an expert user may perform a task.',
      'The expansion is a common terminology question.',
    ],
    conceptSummary: 'GOMS = Goals, Operators, Methods, Selection rules.',
  },
  {
    id: 'klm-definition',
    kind: 'mcq',
    prompt: 'KLM is best described as what?',
    options: [
      'A simplified time-prediction model for keyboard and mouse tasks',
      'A live usability study platform',
      'A questionnaire scale',
      'A web analytics dashboard',
    ],
    correctOption: 0,
    explanationSteps: [
      'KLM stands for Keystroke-Level Model.',
      'It simplifies interaction into low-level operators and estimates expert task time.',
      'It is often treated as a simpler predictive model than full GOMS.',
    ],
    conceptSummary: 'KLM predicts expert task time from low-level keyboard and mouse actions.',
  },
  {
    id: 'predictive-model-limitation',
    kind: 'mcq',
    prompt: 'What is a key weakness of predictive models like GOMS or KLM?',
    options: [
      'They may miss real user confusion, learning issues, and context',
      'They require direct users in every session',
      'They cannot analyze interaction steps',
      'They only work for questionnaires',
    ],
    correctOption: 0,
    explanationSteps: [
      'Predictive models are efficient, but they abstract away many real-world behaviors.',
      'They often model expert performance better than novice confusion or social context.',
      'That is why they are useful but incomplete.',
    ],
    conceptSummary: 'Predictive models are efficient but can miss real-world learning and context effects.',
  },
]

const ANALYTICS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'analytics-web-analytics',
    kind: 'mcq',
    prompt: 'What is a key characteristic of web analytics?',
    options: [
      'It gathers user behavior unobtrusively from deployed systems',
      'It requires a facilitator sitting beside every user',
      'It directly reveals user intent with certainty',
      'It is identical to cognitive walkthrough',
    ],
    correctOption: 0,
    explanationSteps: [
      'Web analytics observe behavior traces such as clicks, visits, funnels, and drop-offs.',
      'This data can be collected unobtrusively at scale.',
      'However, it often needs interpretation because it shows what happened more than why.',
    ],
    conceptSummary: 'Web analytics collect large-scale behavioral traces unobtrusively.',
  },
  {
    id: 'analytics-ab-testing',
    kind: 'mcq',
    prompt: 'What does A/B testing compare?',
    options: [
      'Two deployed design variants on real users at scale',
      'Two questionnaire scales inside one survey item',
      'Two different t-tests for the same dataset',
      'Two physical TUIs in a lab with no metrics',
    ],
    correctOption: 0,
    explanationSteps: [
      'A/B testing compares alternative versions of a design in a live system.',
      'It is useful for measuring real-world behavior differences at scale.',
      'It usually requires a deployed product and measurable outcomes.',
    ],
    conceptSummary: 'A/B testing compares two deployed variants on real usage metrics.',
  },
  {
    id: 'analytics-crowdsourcing',
    kind: 'mcq',
    prompt: 'When is crowdsourcing especially attractive for evaluation work?',
    options: [
      'When a team wants quick access to many remote contributors',
      'When exact facilitator probing is the main requirement',
      'When physical lab equipment is essential',
      'When no tasks or questions are needed',
    ],
    correctOption: 0,
    explanationSteps: [
      'Crowdsourcing can provide fast access to many distributed contributors.',
      'That makes it useful for scalable data collection or certain evaluation tasks.',
      'Quality control and participant fit still matter.',
    ],
    conceptSummary: 'Crowdsourcing trades some control for speed and access to many contributors.',
  },
]

const ALL_QUESTIONS = {
  'usability-testing': USABILITY_TESTING_QUESTIONS,
  maze: MAZE_QUESTIONS,
  'analytical-evaluation': ANALYTICAL_EVAL_QUESTIONS,
  'predictive-models': PREDICTIVE_MODEL_QUESTIONS,
  'analytics-ab': ANALYTICS_QUESTIONS,
} as const

function pick(subtopic: keyof typeof ALL_QUESTIONS): NetworkingQuestion {
  return randomPick(ALL_QUESTIONS[subtopic])
}

export function generateUsabilityTestingQuestion(): NetworkingQuestion {
  return pick('usability-testing')
}

export function generateMazeQuestion(): NetworkingQuestion {
  return pick('maze')
}

export function generateAnalyticalEvaluationQuestion(): NetworkingQuestion {
  return pick('analytical-evaluation')
}

export function generatePredictiveModelQuestion(): NetworkingQuestion {
  return pick('predictive-models')
}

export function generateAnalyticsQuestion(): NetworkingQuestion {
  return pick('analytics-ab')
}
