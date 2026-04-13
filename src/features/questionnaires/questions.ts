import { randomPick } from '../../lib/random'
import type { NetworkingQuestion } from '../networkingShared/networkingDrills'

const BASICS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'questionnaires-usability-role',
    kind: 'mcq',
    prompt: 'Why are questionnaires commonly used in usability testing?',
    options: [
      'They capture structured participant perceptions efficiently',
      'They replace all task observation',
      'They automatically prove causation',
      'They eliminate the need for descriptive statistics',
    ],
    correctOption: 0,
    explanationSteps: [
      'Questionnaires efficiently gather self-reported satisfaction or experience data.',
      'They complement task observation rather than replacing it.',
      'Results are often summarized with descriptive statistics and benchmarks.',
    ],
    conceptSummary: 'Questionnaires are efficient tools for structured subjective feedback.',
  },
  {
    id: 'questionnaires-quis-name',
    kind: 'mcq',
    prompt: 'What does QUIS stand for?',
    options: [
      'Questionnaire for User Interaction Satisfaction',
      'Quality Use Interface Scale',
      'Quick Usability Insight Survey',
      'Question Utility Interaction System',
    ],
    correctOption: 0,
    explanationSteps: [
      'QUIS is a standard usability questionnaire focused on user interaction satisfaction.',
      'It is one example of a standard questionnaire used in HCI studies.',
      'Knowing the expansion is a direct recognition item.',
    ],
    conceptSummary: 'QUIS = Questionnaire for User Interaction Satisfaction.',
  },
  {
    id: 'questionnaires-standard-vs-custom',
    kind: 'mcq',
    prompt: 'Why might a team prefer a standard questionnaire over inventing one from scratch?',
    options: [
      'It supports comparability and established interpretation',
      'It guarantees perfect results',
      'It removes the need to recruit participants',
      'It automatically measures every possible construct',
    ],
    correctOption: 0,
    explanationSteps: [
      'Standard questionnaires make it easier to compare results across studies or benchmarks.',
      'They usually come with known scales and interpretation guidance.',
      'They do not solve every study design problem automatically.',
    ],
    conceptSummary: 'Standard questionnaires help with comparability and interpretation.',
  },
]

const UEQ_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'questionnaires-ueq-name',
    kind: 'mcq',
    prompt: 'What does UEQ stand for?',
    options: [
      'User Experience Questionnaire',
      'Usability Evaluation Quicktest',
      'Universal Experience Quality',
      'User Efficiency Quotient',
    ],
    correctOption: 0,
    explanationSteps: [
      'UEQ is a standard user experience questionnaire.',
      'It covers six scales that include both pragmatic and hedonic dimensions.',
      'The acronym is a common exam recognition item.',
    ],
    conceptSummary: 'UEQ = User Experience Questionnaire.',
  },
  {
    id: 'questionnaires-ueq-scales-match',
    kind: 'match',
    prompt: 'Match each UEQ scale to its focus.',
    pairs: [
      { left: 'Perspicuity', right: 'Ease of understanding and learning' },
      { left: 'Efficiency', right: 'Support for getting tasks done quickly' },
      { left: 'Dependability', right: 'Sense of control and predictability' },
      { left: 'Novelty', right: 'Creativity and innovation feel' },
    ],
    explanationSteps: [
      'UEQ includes Attractiveness, Perspicuity, Efficiency, Dependability, Stimulation, and Novelty.',
      'These scale labels are often tested as vocabulary recognition.',
      'Perspicuity and Dependability are especially easy to confuse without practice.',
    ],
    conceptSummary: 'Know the six UEQ scales and what each one captures.',
  },
  {
    id: 'questionnaires-ueq-scale-item',
    kind: 'mcq',
    prompt:
      'An item asks whether the product feels exciting and motivating. Which UEQ scale fits best?',
    options: ['Stimulation', 'Dependability', 'Efficiency', 'Perspicuity'],
    correctOption: 0,
    explanationSteps: [
      'Stimulation captures excitement and motivation.',
      'Efficiency is about task performance, not emotional engagement.',
      'Dependability is about control and predictability.',
    ],
    conceptSummary: 'Stimulation is the UEQ scale for excitement and motivation.',
  },
  {
    id: 'questionnaires-attractiveness',
    kind: 'mcq',
    prompt: 'Which UEQ scale is the broad overall impression scale?',
    options: ['Attractiveness', 'Novelty', 'Efficiency', 'Perspicuity'],
    correctOption: 0,
    explanationSteps: [
      'Attractiveness is the overall valence or general impression scale in UEQ.',
      'The other scales target more specific qualities.',
      'This distinction matters when interpreting reported results.',
    ],
    conceptSummary: 'Attractiveness is the overall UEQ impression scale.',
  },
]

const UEQS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'questionnaires-ueqs-short',
    kind: 'mcq',
    prompt: 'UEQ-S is best described as what?',
    options: [
      'A shorter version of UEQ',
      'A dark-pattern detection survey',
      'A t-test for questionnaires',
      'A prototype annotation tool',
    ],
    correctOption: 0,
    explanationSteps: [
      'UEQ-S is the short form of the User Experience Questionnaire.',
      'It compresses measurement into three higher-level scales.',
      'It is useful when time is limited.',
    ],
    conceptSummary: 'UEQ-S is the short form of UEQ.',
  },
  {
    id: 'questionnaires-pragmatic-hedonic',
    kind: 'match',
    prompt: 'Match each UEQ-S scale to the best description.',
    pairs: [
      { left: 'Pragmatic Quality', right: 'Practical and goal-directed qualities' },
      { left: 'Hedonic Quality', right: 'Appeal beyond pure task completion' },
      { left: 'Overall', right: 'Combined high-level summary score' },
    ],
    explanationSteps: [
      'UEQ-S uses three summary scales: Pragmatic Quality, Hedonic Quality, and Overall.',
      'Pragmatic focuses on utility and task-oriented support.',
      'Hedonic focuses on appeal, stimulation, and non-goal-directed experience.',
    ],
    conceptSummary: 'Pragmatic is practical; hedonic is experiential appeal.',
  },
  {
    id: 'questionnaires-pragmatic-definition',
    kind: 'text',
    prompt: 'What does pragmatic quality mean in questionnaire interpretation?',
    requiredConcepts: [
      { label: 'Practical or useful', keywords: ['practical', 'useful', 'functional'] },
      { label: 'Goal-directed', keywords: ['goal', 'task', 'goal directed'] },
    ],
    answerDisplay:
      'Pragmatic quality refers to practical, task-focused, goal-directed aspects of the experience.',
    explanationSteps: [
      'Pragmatic quality is about whether the product helps users achieve what they need efficiently and clearly.',
      'It is more about practical support than emotional appeal.',
      'This contrasts with hedonic quality.',
    ],
    conceptSummary: 'Pragmatic quality = practical support for user goals.',
  },
]

const INTERPRETATION_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'questionnaires-hedonic-definition',
    kind: 'text',
    prompt: 'What does hedonic quality mean?',
    requiredConcepts: [
      { label: 'Appeal or enjoyment', keywords: ['appeal', 'enjoyment', 'fun', 'pleasure'] },
      { label: 'Non-goal-directed', keywords: ['non goal', 'not purely task', 'beyond tasks'] },
    ],
    answerDisplay:
      'Hedonic quality refers to appealing, stimulating, non-goal-directed aspects of the experience.',
    explanationSteps: [
      'Hedonic quality is about how engaging, exciting, or appealing the experience feels.',
      'It goes beyond pure task support.',
      'It is often contrasted with pragmatic quality in UEQ-S.',
    ],
    conceptSummary: 'Hedonic quality = appeal and stimulation beyond pure utility.',
  },
  {
    id: 'questionnaires-benchmark-scenario',
    kind: 'mcq',
    prompt:
      'A UEQ benchmark shows a product scoring well below average on Efficiency. What does that imply?',
    options: [
      'Users may perceive the product as weaker than typical products on task efficiency',
      'The product is statistically significant',
      'No interpretation is possible',
      'It means the median equals the mode',
    ],
    correctOption: 0,
    explanationSteps: [
      'Benchmarks help interpret a score relative to reference products or norms.',
      'A below-average Efficiency score suggests the system may feel slower or less supportive of quick task completion.',
      'That interpretation is about experience, not a hypothesis test result.',
    ],
    conceptSummary: 'Benchmarking turns raw scores into comparative interpretation.',
  },
  {
    id: 'questionnaires-descriptive-stats',
    kind: 'mcq',
    prompt: 'Which statistics are commonly used to summarize questionnaire results?',
    options: [
      'Descriptive statistics such as means and standard deviations',
      'Only source code metrics',
      'Only p-values with no summaries',
      'Only binary pass or fail labels',
    ],
    correctOption: 0,
    explanationSteps: [
      'Questionnaire items and scales are often summarized with descriptive statistics.',
      'Mean and standard deviation are common ways to summarize central tendency and spread.',
      'Benchmarks or comparisons may then add interpretation.',
    ],
    conceptSummary: 'Questionnaire results are typically summarized using descriptive statistics.',
  },
]

const ALL_QUESTIONS = {
  basics: BASICS_QUESTIONS,
  ueq: UEQ_QUESTIONS,
  'ueq-s': UEQS_QUESTIONS,
  interpretation: INTERPRETATION_QUESTIONS,
} as const

function pick(subtopic: keyof typeof ALL_QUESTIONS): NetworkingQuestion {
  return randomPick(ALL_QUESTIONS[subtopic])
}

export function generateQuestionnaireBasicsQuestion(): NetworkingQuestion {
  return pick('basics')
}

export function generateUeqQuestion(): NetworkingQuestion {
  return pick('ueq')
}

export function generateUeqShortQuestion(): NetworkingQuestion {
  return pick('ueq-s')
}

export function generateQuestionnaireInterpretationQuestion(): NetworkingQuestion {
  return pick('interpretation')
}
