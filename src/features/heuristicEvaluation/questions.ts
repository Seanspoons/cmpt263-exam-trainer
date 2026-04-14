import { randomPick } from '../../lib/random'
import type { NetworkingQuestion } from '../networkingShared/networkingDrills'

const FOUNDATIONS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'he-why-evaluation',
    kind: 'mcq',
    prompt: 'Why does evaluation matter in interface design?',
    options: [
      'Because users care not only whether a system works, but how well it works, and pre-launch discovery is cheaper',
      'Because evaluation is only needed after launch and public release',
      'Because working code automatically guarantees a good user experience',
      'Because evaluation is only about visual style and surface polish',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture frames evaluation as judging quality, value, or importance.',
      'Users care about quality of use, not just basic functionality.',
      'Finding flaws before launch usually costs less.',
    ],
    conceptSummary: 'Evaluation matters because quality of use matters and early fixes are cheaper.',
  },
  {
    id: 'he-ucd-iterative',
    kind: 'mcq',
    prompt: 'How does evaluation fit into user-centered design?',
    options: [
      'As an iterative stage used throughout the design process',
      'Only as a one-time final approval step before release',
      'Only after shipping the product to the public market',
      'It does not really belong in user-centered design workflows',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture ties evaluation directly to iterative user-centered design.',
      'It is part of refinement, not just final checking.',
      'This supports the broader course theme of iteration.',
    ],
    conceptSummary: 'Evaluation is an iterative part of user-centered design, not a one-off afterthought.',
  },
  {
    id: 'he-evaluation-types',
    kind: 'match',
    prompt: 'Match each evaluation type to the best description.',
    pairs: [
      { left: 'Usability testing or study', right: 'Users perform tasks and researchers observe or measure' },
      { left: 'In-the-wild study', right: 'Evaluation happens in a natural setting rather than a lab' },
      { left: 'Analytical evaluation', right: 'Experts inspect or predict usability without direct users' },
    ],
    explanationSteps: [
      'The lecture distinguishes evaluation types partly by whether direct users are involved and where the study happens.',
      'Analytical evaluation is the no-direct-user branch.',
      'This is a basic classification question.',
    ],
    conceptSummary: 'Evaluation types differ by user involvement, setting, and method.',
  },
  {
    id: 'he-analytical-evaluation',
    kind: 'text',
    prompt: 'What is analytical evaluation?',
    requiredConcepts: [
      { label: 'Without direct users', keywords: ['without users', 'no direct users'] },
      { label: 'Experts predict or identify problems', keywords: ['experts predict', 'identify problems', 'based on expertise'] },
    ],
    answerDisplay:
      'Analytical evaluation is evaluation without direct users, where experts predict behavior and identify usability problems.',
    explanationSteps: [
      'The lecture defines analytical evaluation as expert-based rather than participant-based.',
      'Examples include heuristic evaluation, cognitive walkthrough, and Fitts’s Law analysis.',
      'It is useful early because direct users are not required.',
    ],
    conceptSummary: 'Analytical evaluation uses expert inspection or prediction without direct-user participation.',
  },
]

const DISCOUNT_HE_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'he-discount-usability',
    kind: 'mcq',
    prompt: 'What does Nielsen’s discount usability idea emphasize?',
    options: [
      'Something is better than nothing: use lighter-weight, practical evaluation methods',
      'Only large expensive studies are valid enough to be worth doing',
      'Evaluation should avoid prototypes and wait for final products',
      'Heuristic evaluation requires many end users in every session',
    ],
    correctOption: 0,
    explanationSteps: [
      'Discount usability emphasizes practical, lower-cost evaluation moves.',
      'The lecture lists fewer participants, qualitative measures, think-aloud, narrowed prototypes, and heuristic evaluation.',
      'The key message is to evaluate even when resources are limited.',
    ],
    conceptSummary: 'Discount usability prioritizes practical evaluation over doing nothing.',
  },
  {
    id: 'he-definition',
    kind: 'text',
    prompt: 'What is heuristic evaluation?',
    requiredConcepts: [
      { label: 'Experts or expert evaluators', keywords: ['experts', 'expert evaluators'] },
      { label: 'Inspect against heuristics or guidelines', keywords: ['inspect', 'inspection', 'heuristics', 'guidelines'] },
    ],
    answerDisplay:
      'Heuristic evaluation is when expert evaluators inspect an interface against heuristics or guidelines to find usability problems.',
    explanationSteps: [
      'Heuristic evaluation is a type of analytical evaluation.',
      'Experts inspect the interface rather than observing direct users.',
      'The goal is to identify usability problems by reference to known heuristics.',
    ],
    conceptSummary: 'Heuristic evaluation is expert inspection against usability heuristics.',
  },
  {
    id: 'he-number-of-evaluators',
    kind: 'mcq',
    prompt: 'How many evaluators are typically recommended for heuristic evaluation?',
    options: ['3 to 5', '1 only', '10 to 15', 'Exactly 2'],
    correctOption: 0,
    explanationSteps: [
      'The lecture cites 3 to 5 evaluators as the common recommendation.',
      'Multiple evaluators find more problems than one evaluator alone.',
      'But the method does not require large participant samples like some other evaluations.',
    ],
    conceptSummary: 'Heuristic evaluation commonly uses 3 to 5 evaluators.',
  },
  {
    id: 'he-multiple-evaluators',
    kind: 'mcq',
    prompt: 'Which statement about evaluators is correct?',
    options: [
      'No single evaluator finds everything; easy problems are found by many and hard problems by few',
      'One evaluator is enough to find essentially all important issues',
      'Hard problems are usually found by every evaluator in the group',
      'Evaluator count does not meaningfully affect the findings at all',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture emphasizes the value of multiple evaluators.',
      'Common obvious issues are often found by many people.',
      'Subtle issues may be found by only one or two.',
    ],
    conceptSummary: 'Multiple evaluators matter because problem discovery is uneven across individuals.',
  },
]

const WORKFLOW_SEVERITY_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'he-process-order',
    kind: 'match',
    prompt: 'Match each heuristic evaluation phase to the lecture workflow.',
    pairs: [
      { left: 'Pre-evaluation training', right: 'Prepare evaluators and context before inspection' },
      { left: 'Evaluation', right: 'Inspect the interface and record problems' },
      { left: 'Severity ratings', right: 'Judge importance after problems have been seen' },
      { left: 'Debriefing', right: 'Discuss findings, improvements, and fix considerations' },
    ],
    explanationSteps: [
      'The lecture gives a clear four-stage heuristic-evaluation workflow.',
      'These steps go beyond merely memorizing the heuristics.',
      'Understanding process order is high-yield exam prep.',
    ],
    conceptSummary: 'HE workflow includes training, evaluation, severity rating, and debriefing.',
  },
  {
    id: 'he-two-passes',
    kind: 'mcq',
    prompt: 'What is the purpose of the two evaluator passes in heuristic evaluation?',
    options: [
      'First pass for overall flow, second pass for specific elements and details',
      'First pass to assign severity, second to recruit users',
      'First pass for fixing code, second for deployment',
      'They exist only for legal documentation',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture says each evaluator should do at least two passes.',
      'The first is broad and flow-oriented; the second is more specific and detailed.',
      'This helps balance overview and close inspection.',
    ],
    conceptSummary: 'Two passes support both overall understanding and detailed issue finding.',
  },
  {
    id: 'he-severity-factors',
    kind: 'match',
    prompt: 'Match each severity component to the lecture framing.',
    pairs: [
      { left: 'Frequency', right: 'How often the problem is likely to occur' },
      { left: 'Impact', right: 'How serious the consequence is when it happens' },
      { left: 'Persistence', right: 'Whether users can recover easily or the problem keeps hurting' },
    ],
    explanationSteps: [
      'The lecture says severity combines frequency, impact, and persistence.',
      'This should be judged after all problems have been seen.',
      'Each evaluator should rate issues independently.',
    ],
    conceptSummary: 'Severity blends how often, how bad, and how persistent a problem is.',
  },
  {
    id: 'he-severity-scale',
    kind: 'mcq',
    prompt: 'What does severity rating 4 mean?',
    options: [
      'A catastrophe that must be fixed',
      'A cosmetic issue',
      'Not a usability problem',
      'A minor issue that can wait',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture uses Nielsen’s familiar severity scale.',
      'Level 4 is the most severe category and should be treated as urgent.',
      'It is distinct from cosmetic or minor issues.',
    ],
    conceptSummary: 'Severity 4 means catastrophic and must fix.',
  },
  {
    id: 'he-debriefing',
    kind: 'mcq',
    prompt: 'What best describes the debriefing stage of heuristic evaluation?',
    options: [
      'Evaluators, observers, and the dev team discuss findings and improvements in a brainstorming-style session',
      'Only one evaluator silently submits a final severity number',
      'Users perform think-aloud tasks in the lab during debriefing',
      'The team immediately rewrites the app before discussing any issues',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture frames debriefing as a collaborative discussion stage.',
      'The team discusses general characteristics and potential improvements, while considering fix difficulty.',
      'It is more brainstorming-oriented than confrontational at first.',
    ],
    conceptSummary: 'Debriefing turns evaluator findings into shared understanding and possible redesign ideas.',
  },
  {
    id: 'he-pros-cons',
    kind: 'match',
    prompt: 'Match each statement to whether it is a pro or con of heuristic evaluation.',
    pairs: [
      { left: 'Pro', right: 'Simple and fast with no users required' },
      { left: 'Pro', right: 'Based on established principles' },
      { left: 'Con', right: 'Depends heavily on evaluator knowledge' },
      { left: 'Con', right: 'Mostly high-level and offers little quantitative data' },
    ],
    explanationSteps: [
      'The lecture gives both strengths and limitations of HE.',
      'It is useful because it is fast and principle-based.',
      'But it is also constrained by evaluator expertise and the heuristic set used.',
    ],
    conceptSummary: 'HE is fast and practical, but expert-dependent and not strongly quantitative.',
  },
]

const HEURISTIC_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'he-visibility-status',
    kind: 'text',
    prompt: 'What does visibility of system status mean?',
    requiredConcepts: [
      { label: 'Keep users informed', keywords: ['keep users informed', 'what is going on'] },
      { label: 'Feedback or system status', keywords: ['feedback', 'system status'] },
    ],
    answerDisplay:
      'Visibility of system status means keeping users informed about what is going on through appropriate feedback about system status.',
    explanationSteps: [
      'This heuristic is about timely awareness of what the system is doing.',
      'The lecture also gives time thresholds: 0.1 seconds, 1 second, and 10 seconds.',
      'Longer delays need clearer indicators like progress bars.',
    ],
    conceptSummary: 'Visibility of system status keeps users informed about current system state and progress.',
  },
  {
    id: 'he-response-thresholds',
    kind: 'match',
    prompt: 'Match each response-time threshold to the lecture meaning.',
    pairs: [
      { left: '0.1 second', right: 'No special indicators needed' },
      { left: '1 second', right: 'Keeps the user’s flow of thought' },
      { left: '10 seconds', right: 'Near the limit of focused attention; longer delays need a progress bar' },
    ],
    explanationSteps: [
      'The lecture attaches concrete timing guidance to system-status visibility.',
      'These thresholds are frequently tested because they are specific and memorable.',
      'They help connect heuristic principles to operational design choices.',
    ],
    conceptSummary: 'System-status visibility includes timing expectations, not just generic feedback.',
  },
  {
    id: 'he-match-real-world',
    kind: 'mcq',
    prompt: 'An interface says “transaction complete” using jargon users do not understand. Which heuristic is violated?',
    options: [
      'Match between system and real world',
      'Aesthetic and minimalist design',
      'Flexibility and efficiency of use',
      'Help and documentation',
    ],
    correctOption: 0,
    explanationSteps: [
      'This heuristic says systems should speak the user’s language.',
      'Technical jargon breaks the match with real-world concepts.',
      'Familiar words and metaphors help users understand more easily.',
    ],
    conceptSummary: 'Match with the real world means speaking in familiar user language and concepts.',
  },
  {
    id: 'he-user-control',
    kind: 'mcq',
    prompt: 'A system does not let users undo a delete. Which heuristic is violated?',
    options: [
      'User control and freedom',
      'Visibility of system status',
      'Recognition rather than recall',
      'Aesthetic and minimalist design',
    ],
    correctOption: 0,
    explanationSteps: [
      'User control and freedom covers exits like cancel, undo, and back.',
      'Users make errors and need recovery paths.',
      'Without those exits, the system feels trapping.',
    ],
    conceptSummary: 'User control and freedom requires exits, undo, and ways out of mistakes.',
  },
  {
    id: 'he-consistency-standards',
    kind: 'mcq',
    prompt: 'The same icon means different things in different parts of the app. Which heuristic is violated?',
    options: [
      'Consistency and standards',
      'Error prevention',
      'Help users recover from errors',
      'Visibility of system status',
    ],
    correctOption: 0,
    explanationSteps: [
      'Consistency and standards includes predictable meaning and behavior.',
      'If one icon means different things, users experience surprise and confusion.',
      'The heuristic also includes following platform standards.',
    ],
    conceptSummary: 'Consistency and standards reduces surprise by keeping similar things similar.',
  },
  {
    id: 'he-recognition-recall',
    kind: 'mcq',
    prompt: 'A user must remember exact command syntax because nothing is visible on screen. Which heuristic is violated?',
    options: [
      'Recognition rather than recall',
      'Help and documentation',
      'Aesthetic and minimalist design',
      'Visibility of system status',
    ],
    correctOption: 0,
    explanationSteps: [
      'This heuristic is violated when the interface demands memorization that visible options could reduce.',
      'Menus, previews, prompts, history, and autofill are all recognition aids.',
      'The goal is to reduce memory burden.',
    ],
    conceptSummary: 'Recognition rather than recall reduces unnecessary memory demands.',
  },
  {
    id: 'he-error-prevention',
    kind: 'mcq',
    prompt: 'A signup form allows impossible values and only complains after submit. Which heuristic is most directly violated?',
    options: [
      'Error prevention',
      'Flexibility and efficiency of use',
      'Help and documentation',
      'Aesthetic and minimalist design',
    ],
    correctOption: 0,
    explanationSteps: [
      'Error prevention means stopping errors before they happen where possible.',
      'Allowing impossible values through until submission is weaker than preventing them earlier.',
      'Gray-out states, constraints, autofill, and confirmations are related strategies.',
    ],
    conceptSummary: 'Error prevention is about preventing errors before they occur, not only reacting afterward.',
  },
  {
    id: 'he-flexibility',
    kind: 'mcq',
    prompt: 'There is no keyboard shortcut for an expert repetitive task. Which heuristic is most relevant?',
    options: [
      'Flexibility and efficiency of use',
      'Match between system and real world',
      'Help users recover from errors',
      'Error prevention',
    ],
    correctOption: 0,
    explanationSteps: [
      'This heuristic supports accelerators, shortcuts, jumps, defaults, and faster expert paths.',
      'Experts often benefit from more efficient alternate routes.',
      'Multiple paths with different efficiencies are encouraged.',
    ],
    conceptSummary: 'Flexibility and efficiency of use supports shortcuts and faster expert workflows.',
  },
  {
    id: 'he-minimalist',
    kind: 'mcq',
    prompt: 'A cluttered page full of irrelevant decorations makes the main task harder to see. Which heuristic is violated?',
    options: [
      'Aesthetic and minimalist design',
      'User control and freedom',
      'Help and documentation',
      'Recognition rather than recall',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture frames minimalist design as reducing irrelevant competing information.',
      'Unnecessary elements compete with relevant ones for attention.',
      'This also connects to contrast, white space, and colorblind-safe design.',
    ],
    conceptSummary: 'Aesthetic and minimalist design removes irrelevant competition for attention.',
  },
  {
    id: 'he-error-recovery',
    kind: 'mcq',
    prompt: 'An error message says “fatal error 0x802” and gives no recovery guidance. Which heuristic is violated?',
    options: [
      'Help users recognize, diagnose, and recover from errors',
      'Consistency and standards',
      'Visibility of system status',
      'Flexibility and efficiency of use',
    ],
    correctOption: 0,
    explanationSteps: [
      'This heuristic requires clear language, explanation of what happened, and how to fix it.',
      'Codes without guidance are poor support for diagnosis and recovery.',
      'The wording should also be precise and non-accusing.',
    ],
    conceptSummary: 'Good error support explains what happened and how to recover in clear user language.',
  },
  {
    id: 'he-help-docs',
    kind: 'mcq',
    prompt: 'A product only offers a huge unsearchable PDF manual. Which heuristic is most directly violated?',
    options: [
      'Help and documentation',
      'User control and freedom',
      'Error prevention',
      'Consistency and standards',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture says help should be searchable, task-focused, and concrete.',
      'A giant unsearchable document is poor support.',
      'Tutorials, reminders, wizards, and reference help are all valid forms.',
    ],
    conceptSummary: 'Help and documentation should be searchable, concrete, and task-focused.',
  },
]

const ERROR_TYPES_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'he-slip-mistake',
    kind: 'text',
    prompt: 'What is the difference between a slip and a mistake?',
    requiredConcepts: [
      { label: 'Slip is execution or inattention error', keywords: ['slip', 'execution', 'inattention'] },
      { label: 'Mistake is wrong mental model or wrong procedure', keywords: ['mistake', 'wrong mental model', 'wrong procedure', 'conscious error'] },
    ],
    answerDisplay:
      'A slip is an execution or inattention error, while a mistake comes from the wrong mental model, plan, or procedure.',
    explanationSteps: [
      'The lecture connects these distinctions to error prevention.',
      'Slips happen when the intended action goes wrong in execution.',
      'Mistakes happen when the intended action itself is based on a wrong understanding or plan.',
    ],
    conceptSummary: 'Slips are execution failures; mistakes are planning or understanding failures.',
  },
  {
    id: 'he-gray-out-example',
    kind: 'mcq',
    prompt: 'Why does graying out unavailable options fit heuristic evaluation thinking well?',
    options: [
      'It supports error prevention by constraining illegal actions before they happen',
      'It mainly supports help and documentation only',
      'It is a form of heuristic debriefing',
      'It is a severity rating method',
    ],
    correctOption: 0,
    explanationSteps: [
      'Grayed-out unavailable options prevent invalid actions proactively.',
      'That is a classic error-prevention tactic.',
      'It can also communicate state, but prevention is the central heuristic point.',
    ],
    conceptSummary: 'Constraints like graying out invalid options are core error-prevention tactics.',
  },
  {
    id: 'he-attachment-reminder',
    kind: 'mcq',
    prompt: 'A mail client warns you when you mention “attached” but forgot to include a file. Which heuristic does this best demonstrate?',
    options: [
      'Error prevention',
      'Aesthetic and minimalist design',
      'Help and documentation',
      'Consistency and standards',
    ],
    correctOption: 0,
    explanationSteps: [
      'The system prevents an error before it reaches the recipient.',
      'This is proactive error prevention rather than post-error recovery.',
      'It is a good example of “something smarter than nothing.”',
    ],
    conceptSummary: 'Helpful anticipatory checks are examples of error prevention.',
  },
]

const ALL_QUESTIONS = {
  foundations: FOUNDATIONS_QUESTIONS,
  'discount-he': DISCOUNT_HE_QUESTIONS,
  'workflow-severity': WORKFLOW_SEVERITY_QUESTIONS,
  heuristics: HEURISTIC_QUESTIONS,
  'error-types': ERROR_TYPES_QUESTIONS,
} as const

function pick(subtopic: keyof typeof ALL_QUESTIONS): NetworkingQuestion {
  return randomPick(ALL_QUESTIONS[subtopic])
}

export function generateHeFoundationsQuestion(): NetworkingQuestion {
  return pick('foundations')
}

export function generateDiscountHeQuestion(): NetworkingQuestion {
  return pick('discount-he')
}

export function generateHeWorkflowSeverityQuestion(): NetworkingQuestion {
  return pick('workflow-severity')
}

export function generateNielsenHeuristicQuestion(): NetworkingQuestion {
  return pick('heuristics')
}

export function generateHeErrorTypeQuestion(): NetworkingQuestion {
  return pick('error-types')
}
