import { randomPick } from '../../lib/random'
import type { NetworkingQuestion } from '../networkingShared/networkingDrills'

const WHAT_IS_USABILITY_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'usability-definition',
    kind: 'text',
    prompt: 'What is usability?',
    requiredConcepts: [
      { label: 'Ease of use', keywords: ['easy to use', 'ease of use', 'easy'] },
      { label: 'Achieve a goal with an interface', keywords: ['achieve goal', 'particular goal', 'use interface', 'tool or interface'] },
    ],
    answerDisplay:
      'Usability is the ease with which people use a tool or interface to achieve a goal.',
    explanationSteps: [
      'The lecture frames usability as ease of use in relation to accomplishing a goal.',
      'It is not just about whether features exist.',
      'This is the foundational definition for the unit.',
    ],
    conceptSummary: 'Usability is about how easy it is to use an interface to accomplish goals.',
  },
  {
    id: 'usability-components-match',
    kind: 'match',
    prompt: 'Match each usability component to the best description.',
    pairs: [
      { left: 'Learnability', right: 'How easy it is for new users to begin using the system' },
      { left: 'Efficiency', right: 'How quickly experienced users can perform tasks' },
      { left: 'Memorability', right: 'How easy it is to return after time away and still use the system' },
      { left: 'Satisfaction', right: 'How pleasant or acceptable the experience feels' },
    ],
    explanationSteps: [
      'The lecture highlights learnability, efficiency, memorability, errors, and satisfaction.',
      'These are core usability components rather than random quality labels.',
      'Memorizing the components is high-yield exam prep.',
    ],
    conceptSummary: 'Know the standard usability components and what each one means.',
  },
  {
    id: 'usability-errors-component',
    kind: 'mcq',
    prompt: 'Which usability component is most directly concerned with preventing mistakes and supporting recovery?',
    options: ['Errors', 'Novelty', 'Justice', 'Pragmatic Quality'],
    correctOption: 0,
    explanationSteps: [
      'One of the five usability components concerns errors.',
      'The idea includes both error prevention and recovery.',
      'This makes it more than simply counting how often mistakes happen.',
    ],
    conceptSummary: 'The errors component covers prevention and recovery from mistakes.',
  },
]

const USEFULNESS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'usability-utility-definition',
    kind: 'text',
    prompt: 'What is utility?',
    requiredConcepts: [
      { label: 'Needed features', keywords: ['features you need', 'provides needed features', 'needed functionality'] },
    ],
    answerDisplay:
      'Utility is whether a system provides the features or functionality you need.',
    explanationSteps: [
      'Utility asks whether the system has the right capabilities.',
      'A product can be easy to use yet still lack the needed features.',
      'That is why utility differs from usability.',
    ],
    conceptSummary: 'Utility asks whether the system has the right features for the task.',
  },
  {
    id: 'usability-useful-equation',
    kind: 'mcq',
    prompt: 'In the lecture framing, what does “useful” mean?',
    options: [
      'Usability plus utility',
      'Only ease of learning',
      'Only pleasing aesthetics',
      'Only feature quantity',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture explicitly frames useful as usability plus utility.',
      'A system must both provide needed features and be usable enough to benefit people.',
      'Missing either side weakens usefulness.',
    ],
    conceptSummary: 'Useful combines having the right features with being easy enough to use.',
  },
  {
    id: 'usability-utility-vs-usability',
    kind: 'match',
    prompt: 'Match each concept to its best description.',
    pairs: [
      { left: 'Utility', right: 'Whether the system provides the features you need' },
      { left: 'Usability', right: 'How easy and pleasant those features are to use' },
      { left: 'Useful', right: 'Having both the right features and usable interaction' },
    ],
    explanationSteps: [
      'These concepts are easy to confuse if they are not compared directly.',
      'Utility is about feature fit; usability is about ease and pleasantness.',
      'Useful depends on both.',
    ],
    conceptSummary: 'Utility, usability, and useful are related but not interchangeable.',
  },
  {
    id: 'usability-feature-but-hard',
    kind: 'mcq',
    prompt: 'A tool has the right features but is painful and confusing to use. Which statement is best?',
    options: [
      'It may have utility without strong usability',
      'It has usability without utility',
      'It is automatically useful',
      'It demonstrates external consistency only',
    ],
    correctOption: 0,
    explanationSteps: [
      'The system may provide needed functionality, so utility may be present.',
      'But if it is confusing and painful, usability is weak.',
      'That means overall usefulness is limited.',
    ],
    conceptSummary: 'Having the right features is not enough if usability is poor.',
  },
]

const UX_GOALS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'usability-desirable-goals',
    kind: 'match',
    prompt: 'Match each UX goal category to an example.',
    pairs: [
      { left: 'Desirable', right: 'Enjoyable' },
      { left: 'Desirable', right: 'Motivating' },
      { left: 'Undesirable', right: 'Frustrating' },
      { left: 'Undesirable', right: 'Patronizing' },
    ],
    explanationSteps: [
      'The lecture includes both desirable and undesirable experience goals.',
      'Desirable examples include satisfying, enjoyable, and motivating.',
      'Undesirable examples include frustrating, unpleasant, and making one feel stupid.',
    ],
    conceptSummary: 'UX goals include both desired and undesired felt qualities.',
  },
  {
    id: 'usability-goal-tradeoff',
    kind: 'mcq',
    prompt: 'Why can’t all UX and usability goals always be maximized at once?',
    options: [
      'Because design goals can conflict, such as efficiency vs learnability or error prevention vs annoyance',
      'Because only one UX goal matters',
      'Because users all value the same thing equally',
      'Because tradeoffs disappear in digital systems',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture explicitly notes that goals can compete.',
      'An interface may be efficient but hard to learn, or highly preventive but annoying.',
      'Design involves balancing competing goals rather than maximizing all of them simultaneously.',
    ],
    conceptSummary: 'Usability and UX goals involve tradeoffs rather than universal maximization.',
  },
  {
    id: 'usability-undesirable-goal',
    kind: 'mcq',
    prompt: 'Which of the following is an undesirable UX goal example from the lecture framing?',
    options: ['Frustrating', 'Rewarding', 'Helpful', 'Cognitively stimulating'],
    correctOption: 0,
    explanationSteps: [
      'Undesirable experience labels include frustrating, annoying, childish, unpleasant, and patronizing.',
      'The other options are desirable or at least positive goals.',
      'This is direct recognition practice.',
    ],
    conceptSummary: 'Be able to distinguish desirable and undesirable UX goals quickly.',
  },
]

const DESIGN_PRINCIPLE_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'usability-principles-match',
    kind: 'match',
    prompt: 'Match each design principle to its best definition.',
    pairs: [
      { left: 'Visibility', right: 'Make relevant parts, their meaning, and required actions obvious' },
      { left: 'Feedback', right: 'Tell the user their action caused something in a timely manner' },
      { left: 'Constraints', right: 'Restrict possible actions that can be performed' },
      { left: 'Consistency', right: 'Use similar operations and similar elements for similar tasks' },
      { left: 'Affordance', right: 'Display attributes that indicate how something is used' },
    ],
    explanationSteps: [
      'These five design principles are central to the usability lecture.',
      'They are often tested through direct definition recognition or scenario classification.',
      'Knowing the differences matters for applied design questions.',
    ],
    conceptSummary: 'Visibility, feedback, constraints, consistency, and affordance are the five core design principles here.',
  },
  {
    id: 'usability-visibility',
    kind: 'text',
    prompt: 'What is visibility?',
    requiredConcepts: [
      { label: 'Obvious relevant parts and what needs to be done', keywords: ['obvious', 'relevant parts', 'what needs to be done'] },
      { label: 'Meaning is clear', keywords: ['meaning', 'clear'] },
    ],
    answerDisplay:
      'Visibility means making relevant parts, their meaning, and what needs to be done obvious.',
    explanationSteps: [
      'Visibility is about surfacing the right elements and their meaning.',
      'Users should not have to guess what matters or what action to take.',
      'This often overlaps with salience and clarity.',
    ],
    conceptSummary: 'Visibility makes important elements and next actions obvious.',
  },
  {
    id: 'usability-feedback',
    kind: 'text',
    prompt: 'What is feedback?',
    requiredConcepts: [
      { label: 'Timely response after user action', keywords: ['timely', 'user action caused something', 'after action'] },
      { label: 'What has been done or system response', keywords: ['what has been done', 'system response', 'what happened'] },
    ],
    answerDisplay:
      'Feedback means telling the user in a timely way that their action caused something and what the system has done.',
    explanationSteps: [
      'Feedback closes the loop after the user acts.',
      'It reassures users that the system responded and clarifies the outcome.',
      'Loading indicators and confirmation messages are classic examples.',
    ],
    conceptSummary: 'Feedback tells users that their action had an effect and what the system did.',
  },
]

const SCENARIO_PRINCIPLE_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'usability-add-to-cart',
    kind: 'mcq',
    prompt: 'Making an Add to Cart button bigger and higher contrast is mainly improving which principle?',
    options: ['Visibility', 'Feedback', 'Consistency', 'Utility'],
    correctOption: 0,
    explanationSteps: [
      'The change makes the relevant action more noticeable.',
      'That aligns directly with visibility.',
      'It helps users see what matters and what they can do.',
    ],
    conceptSummary: 'Bigger, clearer, more salient actions are visibility improvements.',
  },
  {
    id: 'usability-loading-animation',
    kind: 'mcq',
    prompt: 'Showing a loading animation during processing is mainly an example of which principle?',
    options: ['Feedback', 'Constraints', 'Internal consistency', 'Utility'],
    correctOption: 0,
    explanationSteps: [
      'The loading animation tells the user the system received the action and is working.',
      'That is timely feedback about system state.',
      'It prevents uncertainty after the action.',
    ],
    conceptSummary: 'Loading indicators are classic feedback examples.',
  },
  {
    id: 'usability-grey-out',
    kind: 'mcq',
    prompt: 'Greying out unavailable items most directly demonstrates which principle?',
    options: ['Constraints', 'Hedonic quality', 'Justice', 'Novelty'],
    correctOption: 0,
    explanationSteps: [
      'Greying out unavailable options restricts invalid actions.',
      'It also helps visibility by showing what is unavailable, but the main principle is constraints.',
      'The lecture uses this as a constraints-style example.',
    ],
    conceptSummary: 'Disabling unavailable actions is a constraints strategy.',
  },
  {
    id: 'usability-action-verbs',
    kind: 'mcq',
    prompt: 'Using action verbs consistently for labels is mainly an example of which principle?',
    options: ['Consistency', 'Feedback', 'Affordance', 'Utility'],
    correctOption: 0,
    explanationSteps: [
      'Consistent language supports predictable interpretation across the interface.',
      'The lecture uses action-verb labeling as a consistency-style example.',
      'Consistency lowers the mental burden of relearning patterns.',
    ],
    conceptSummary: 'Consistent wording is part of consistency.',
  },
]

const CONSISTENCY_AFFORDANCE_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'usability-internal-vs-external',
    kind: 'match',
    prompt: 'Match each type of consistency to the best description.',
    pairs: [
      { left: 'Internal consistency', right: 'Similar operations and elements within one application' },
      { left: 'External consistency', right: 'Patterns that align across different applications' },
    ],
    explanationSteps: [
      'The lecture distinguishes internal consistency from external consistency.',
      'Internal applies within one system; external applies across systems.',
      'Both help users transfer expectations more effectively.',
    ],
    conceptSummary: 'Internal consistency is within one app; external consistency is across apps.',
  },
  {
    id: 'usability-affordance-definition',
    kind: 'mcq',
    prompt: 'What is affordance in this lecture framing?',
    options: [
      'Display attributes that let people know how something is used',
      'A list of all available features',
      'The same thing as feedback',
      'Only a physical handle on a door',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture frames affordance as cues about how something should be used.',
      'It is about signaling possible action through design attributes.',
      'In interfaces, this often depends on visual conventions.',
    ],
    conceptSummary: 'Affordance signals how an element can be used.',
  },
  {
    id: 'usability-perceived-affordance',
    kind: 'text',
    prompt: 'What is perceived affordance?',
    requiredConcepts: [
      { label: 'Learned mapping between action and effect', keywords: ['learned mapping', 'action and effect', 'convention'] },
      { label: 'Interface or virtual rather than real physical affordance', keywords: ['interface', 'virtual', 'not real physical affordance', 'screen'] },
    ],
    answerDisplay:
      'Perceived affordance is an interface cue based on learned mappings between action and effect rather than a real physical affordance.',
    explanationSteps: [
      'Norman argues many interface affordances are better thought of as perceived affordances.',
      'The screen element does not physically force the action the way some physical objects do.',
      'Instead, users rely on conventions and learned mappings.',
    ],
    conceptSummary: 'Perceived affordance depends on learned interface conventions rather than physical properties alone.',
  },
  {
    id: 'usability-cursor-resize',
    kind: 'mcq',
    prompt: 'Changing the cursor on hover over an edge to indicate resize is mainly an example of what?',
    options: ['Perceived affordance', 'External consistency only', 'Utility', 'Satisfaction'],
    correctOption: 0,
    explanationSteps: [
      'The cursor cue signals what action is possible.',
      'In a graphical interface, that signal relies on learned conventions rather than a real physical handle.',
      'So it is best understood as perceived affordance.',
    ],
    conceptSummary: 'Cursor-change cues are classic perceived-affordance examples in interfaces.',
  },
]

const ALL_QUESTIONS = {
  'what-is-usability': WHAT_IS_USABILITY_QUESTIONS,
  'utility-useful': USEFULNESS_QUESTIONS,
  'ux-goals': UX_GOALS_QUESTIONS,
  'design-principles': DESIGN_PRINCIPLE_QUESTIONS,
  'scenario-principles': SCENARIO_PRINCIPLE_QUESTIONS,
  'consistency-affordance': CONSISTENCY_AFFORDANCE_QUESTIONS,
} as const

function pick(subtopic: keyof typeof ALL_QUESTIONS): NetworkingQuestion {
  return randomPick(ALL_QUESTIONS[subtopic])
}

export function generateWhatIsUsabilityQuestion(): NetworkingQuestion {
  return pick('what-is-usability')
}

export function generateUtilityUsefulQuestion(): NetworkingQuestion {
  return pick('utility-useful')
}

export function generateUxGoalsQuestion(): NetworkingQuestion {
  return pick('ux-goals')
}

export function generateDesignPrinciplesQuestion(): NetworkingQuestion {
  return pick('design-principles')
}

export function generateScenarioPrinciplesQuestion(): NetworkingQuestion {
  return pick('scenario-principles')
}

export function generateConsistencyAffordanceQuestion(): NetworkingQuestion {
  return pick('consistency-affordance')
}
