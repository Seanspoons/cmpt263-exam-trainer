import { randomPick } from '../../lib/random'
import type { NetworkingQuestion } from '../networkingShared/networkingDrills'

const OVERVIEW_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'cw-definition',
    kind: 'text',
    prompt: 'What is a cognitive walkthrough?',
    requiredConcepts: [
      { label: 'Analytical or expert-based evaluation', keywords: ['analytical evaluation', 'expert based', 'without users', 'without end users'] },
      { label: 'Ease of learning through task steps', keywords: ['ease of learning', 'learnability', 'task steps', 'step by step'] },
    ],
    answerDisplay:
      'A cognitive walkthrough is an analytical, expert-based evaluation method that steps through tasks to assess ease of learning.',
    explanationSteps: [
      'It is performed by designers, UX researchers, or other evaluators rather than end-users.',
      'The analysis focuses on whether a user can discover and correctly perform each action in a task.',
      'Its central concern is learnability and cognition during task performance.',
    ],
    conceptSummary: 'Cognitive walkthrough is an expert task inspection focused on learnability.',
  },
  {
    id: 'cw-vs-heuristic-eval',
    kind: 'mcq',
    prompt: 'How does cognitive walkthrough differ from heuristic evaluation?',
    options: [
      'Cognitive walkthrough is task-specific and learnability-focused; heuristic evaluation checks broader heuristics',
      'Cognitive walkthrough uses end-users while heuristic evaluation uses experts only',
      'Heuristic evaluation requires paired t-tests to validate findings',
      'They are the same method with different names and no focus difference',
    ],
    correctOption: 0,
    explanationSteps: [
      'Cognitive walkthrough inspects detailed task steps and asks whether users can figure them out.',
      'Heuristic evaluation is broader and checks interface design against heuristic principles.',
      'Both are expert-based analytical methods, but their focus differs.',
    ],
    conceptSummary: 'Walkthrough = detailed task learning analysis; heuristic evaluation = broader principle-based inspection.',
  },
  {
    id: 'cw-not-end-users',
    kind: 'mcq',
    prompt: 'Who usually performs a cognitive walkthrough?',
    options: [
      'Designers, UX researchers, and other evaluators',
      'Only end-users with no design or research team present',
      'Only statistics instructors working outside the design process',
      'Only software developers after the product has already launched',
    ],
    correctOption: 0,
    explanationSteps: [
      'Cognitive walkthrough is an analytical evaluation done by evaluators rather than end-users.',
      'Pluralistic walkthrough expands the group, but it is still a structured review.',
      'The method is used before or alongside user testing, not only after launch.',
    ],
    conceptSummary: 'Cognitive walkthrough is expert-led rather than participant-led.',
  },
]

const FOUR_QUESTION_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'cw-question-1',
    kind: 'mcq',
    prompt:
      'A novice user does not even realize they should try to save the document before closing it. Which walkthrough question is being violated?',
    options: [
      'Will users try to achieve the right result?',
      'Will the user notice the correct action is available?',
      'Will the user associate the action with the intended outcome?',
      'Will the user see progress after the action?',
    ],
    correctOption: 0,
    explanationSteps: [
      'The first walkthrough question asks whether users will even form the correct goal.',
      'If they do not realize saving is the right goal, the problem occurs before action discovery.',
      'This is a goal-formation issue rather than a control-visibility issue.',
    ],
    conceptSummary: 'Question 1 is about whether users attempt the correct goal.',
  },
  {
    id: 'cw-question-2',
    kind: 'mcq',
    prompt:
      'The correct button exists, but it blends into the page and users overlook it. Which walkthrough question is violated?',
    options: [
      'Will the user notice the correct action is available?',
      'Will users try to achieve the right result?',
      'Will the user associate the action with the intended outcome?',
      'Will the user see progress after the action?',
    ],
    correctOption: 0,
    explanationSteps: [
      'The control exists, but the user does not notice it.',
      'That maps directly to question 2 about perceiving the available action.',
      'The issue is visibility, not goal choice or feedback.',
    ],
    conceptSummary: 'Question 2 is about noticing that the right action is available.',
  },
  {
    id: 'cw-question-3',
    kind: 'mcq',
    prompt:
      'Users see the button, but its label is ambiguous so they do not connect it to what they want to accomplish. Which question is violated?',
    options: [
      'Will the user associate the correct action with the outcome they are trying to achieve?',
      'Will users try to achieve the right result?',
      'Will the user notice the correct action is available?',
      'Will the user see progress after the action?',
    ],
    correctOption: 0,
    explanationSteps: [
      'Here the action is visible, but the mapping between action and intended outcome is weak.',
      'That is exactly the third walkthrough question.',
      'The issue is semantic association, not visibility or feedback.',
    ],
    conceptSummary: 'Question 3 asks whether users connect the visible action to their goal.',
  },
  {
    id: 'cw-question-4',
    kind: 'mcq',
    prompt:
      'After clicking the correct button, nothing changes visibly, so users are unsure whether they moved closer to the goal. Which question is violated?',
    options: [
      'Will users see that progress is made toward the goal?',
      'Will users try to achieve the right result?',
      'Will the user notice the correct action is available?',
      'Will the user associate the action with the intended outcome?',
    ],
    correctOption: 0,
    explanationSteps: [
      'The action was taken, but the system gives weak feedback about progress.',
      'That maps directly to walkthrough question 4.',
      'This is a feedback/progress visibility problem.',
    ],
    conceptSummary: 'Question 4 focuses on feedback and visible progress after the action.',
  },
]

const PROCESS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'cw-preparation',
    kind: 'mcq',
    prompt: 'What should be prepared before running a cognitive walkthrough?',
    options: [
      'Representative user goals, task steps, and interface states/actions',
      'A deployment-scale A/B test with live traffic assigned randomly',
      'Only a p-value threshold for judging later significance',
      'Only demographic questions with no task or interface preparation',
    ],
    correctOption: 0,
    explanationSteps: [
      'Evaluators need a defined user profile, task, and step sequence to inspect.',
      'They also need the interface states or prototypes those tasks rely on.',
      'Without preparation, the walkthrough becomes vague and unsystematic.',
    ],
    conceptSummary: 'Prepare user assumptions, tasks, and interface steps before the walkthrough.',
  },
  {
    id: 'cw-order-steps',
    kind: 'match',
    prompt: 'Match each walkthrough phase to what happens there.',
    pairs: [
      { left: 'Preparation', right: 'Define users, tasks, and interface assumptions' },
      { left: 'Step through task', right: 'Inspect each action using the four questions' },
      { left: 'Record issues', right: 'Document breakdowns and evidence' },
      { left: 'Revise design', right: 'Use findings to improve learnability' },
    ],
    explanationSteps: [
      'A walkthrough starts with careful setup rather than jumping straight to critique.',
      'Then evaluators inspect each step using the four core questions.',
      'Findings should be recorded so they can drive design revisions.',
    ],
    conceptSummary: 'The method is structured: prepare, inspect task steps, record issues, improve design.',
  },
  {
    id: 'cw-pilot-connection',
    kind: 'mcq',
    prompt: 'How can pilot testing and cognitive walkthrough relate to each other?',
    options: [
      'A walkthrough can uncover learnability issues before or alongside pilot testing with users',
      'Pilot testing makes walkthrough impossible',
      'They are identical methods',
      'Pilot testing removes the need to think about tasks',
    ],
    correctOption: 0,
    explanationSteps: [
      'Cognitive walkthrough can be used early to predict trouble spots.',
      'Pilot testing then provides user-based evidence on whether those predicted issues appear in practice.',
      'The methods can support each other.',
    ],
    conceptSummary: 'Walkthroughs can complement later user-based pilot testing.',
  },
]

const PLURALISTIC_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'cw-pluralistic',
    kind: 'mcq',
    prompt: 'What makes a pluralistic walkthrough pluralistic?',
    options: [
      'It includes users, developers, and UX researchers together',
      'It uses multiple p-values to compare severity statistically',
      'It always compares more than two prototypes with statistical tests',
      'It runs only on live deployed products in production use',
    ],
    correctOption: 0,
    explanationSteps: [
      'Pluralistic walkthrough broadens the discussion beyond only evaluators.',
      'Users, developers, and UX researchers can all contribute perspectives.',
      'This can reveal mismatches between designer assumptions and user expectations.',
    ],
    conceptSummary: 'Pluralistic walkthrough includes multiple stakeholder perspectives, including users.',
  },
  {
    id: 'cw-task-specific',
    kind: 'mcq',
    prompt: 'Why is cognitive walkthrough considered task-specific and detailed?',
    options: [
      'Because it inspects concrete action sequences step by step',
      'Because it ignores tasks and focuses only on aesthetic heuristics',
      'Because it only asks one broad question',
      'Because it measures only benchmark scores',
    ],
    correctOption: 0,
    explanationSteps: [
      'The method follows a specific task path through the interface.',
      'At each step, evaluators ask the four walkthrough questions.',
      'That produces a detailed breakdown of potential learnability issues.',
    ],
    conceptSummary: 'Cognitive walkthrough is detailed because it follows concrete task steps.',
  },
  {
    id: 'cw-compare-heuristics',
    kind: 'mcq',
    prompt:
      'Which method is more appropriate if the question is “Can a first-time user figure out this signup flow step by step?”',
    options: [
      'Cognitive walkthrough',
      'Heuristic evaluation',
      'Web analytics only',
      'UEQ-S only',
    ],
    correctOption: 0,
    explanationSteps: [
      'The question is specifically about first-time user learning during a task flow.',
      'Cognitive walkthrough is built for that type of stepwise learnability analysis.',
      'Heuristic evaluation is broader and less tied to one detailed task path.',
    ],
    conceptSummary: 'Choose cognitive walkthrough when the focus is first-time task learnability.',
  },
]

const ALL_QUESTIONS = {
  overview: OVERVIEW_QUESTIONS,
  'four-questions': FOUR_QUESTION_QUESTIONS,
  process: PROCESS_QUESTIONS,
  pluralistic: PLURALISTIC_QUESTIONS,
} as const

function pick(subtopic: keyof typeof ALL_QUESTIONS): NetworkingQuestion {
  return randomPick(ALL_QUESTIONS[subtopic])
}

export function generateCwOverviewQuestion(): NetworkingQuestion {
  return pick('overview')
}

export function generateCwFourQuestionPrompt(): NetworkingQuestion {
  return pick('four-questions')
}

export function generateCwProcessQuestion(): NetworkingQuestion {
  return pick('process')
}

export function generateCwPluralisticQuestion(): NetworkingQuestion {
  return pick('pluralistic')
}
