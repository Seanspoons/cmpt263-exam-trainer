import { randomPick } from '../../lib/random'
import type { NetworkingQuestion } from '../networkingShared/networkingDrills'

const MEMORY_LEARNING_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'psych-memory-review',
    kind: 'mcq',
    prompt: 'Which statement best matches the lecture review of memory?',
    options: [
      'Memory involves encoding and retrieving knowledge, both of which may involve losses',
      'Memory is perfect once information is seen once',
      'Retrieval never depends on context',
      'Recognition is harder than recall',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture frames memory as both encoding and retrieval.',
      'Losses can occur at both stages, and retrieval depends on context.',
      'Memory also fades if not retrieved often.',
    ],
    conceptSummary: 'Memory is imperfect and context-sensitive at both encoding and retrieval stages.',
  },
  {
    id: 'psych-recognition-recall',
    kind: 'mcq',
    prompt: 'Why is recognition rather than recall a key design principle?',
    options: [
      'Recognition is easier than recall and reduces memory burden',
      'Recall is always easier than recognition',
      'Recognition removes the need for interface structure',
      'Recall is preferred because it requires more effort',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture repeats that recognition is easier than recall.',
      'This is also echoed later in Nielsen’s heuristics.',
      'Good design therefore reduces unnecessary memorization.',
    ],
    conceptSummary: 'Interfaces should favor recognition because it lowers memory load.',
  },
  {
    id: 'psych-memory-implications',
    kind: 'match',
    prompt: 'Match each memory-design implication to the lecture idea.',
    pairs: [
      { left: 'Do not overload memory', right: 'Avoid requiring users to keep many temporary details in mind' },
      { left: 'Promote recognition', right: 'Prefer visible options and cues over hidden recall demands' },
      { left: 'Support encoding and retrieval', right: 'Provide multiple ways to organize and find information' },
      { left: 'Support progress memory', right: 'Help users remember where they are and what to do next' },
    ],
    explanationSteps: [
      'The lecture turns memory theory into concrete design advice.',
      'Design should externalize what users would otherwise have to remember internally.',
      'This is directly applicable to navigation, workflows, and UI structure.',
    ],
    conceptSummary: 'Good design reduces internal memory load and supports retrieval externally.',
  },
  {
    id: 'psych-how-people-learn',
    kind: 'match',
    prompt: 'Match each way people learn new things to the lecture framing.',
    pairs: [
      { left: 'Expectation transfer', right: 'Use familiar prior experience to interpret something new' },
      { left: 'Cultural conventions', right: 'Rely on learned social patterns and meanings' },
      { left: 'Observing others', right: 'Learn by watching what other people do' },
      { left: 'Instructions', right: 'Learn through reading or listening to guidance' },
    ],
    explanationSteps: [
      'The lecture lists several ways people learn beyond pure trial and error.',
      'These sources shape how users approach new interfaces.',
      'Design should account for prior expectations and conventions.',
    ],
    conceptSummary: 'People learn through prior expectations, culture, observation, and instruction.',
  },
]

const TRANSFER_MENTAL_MODEL_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'psych-positive-transfer',
    kind: 'text',
    prompt: 'What is positive transfer?',
    requiredConcepts: [
      { label: 'Prior learning or existing expectation', keywords: ['previous learning', 'prior learning', 'existing expectation'] },
      { label: 'Helps in a new situation', keywords: ['helps', 'applies', 'new situation'] },
    ],
    answerDisplay:
      'Positive transfer is when prior learning or expectations help someone in a new situation.',
    explanationSteps: [
      'Transfer effects describe how earlier learning affects later learning or performance.',
      'Positive transfer makes the new interaction easier.',
      'Design often tries to leverage positive transfer through conventions.',
    ],
    conceptSummary: 'Positive transfer happens when prior learning helps with a new task or interface.',
  },
  {
    id: 'psych-negative-transfer',
    kind: 'mcq',
    prompt: 'A user expects an old word processor workflow and struggles with a new ribbon interface. What is this?',
    options: ['Negative transfer', 'Positive transfer', 'Closure', 'Severity rating'],
    correctOption: 0,
    explanationSteps: [
      'Negative transfer happens when prior learning conflicts with the new situation.',
      'Here the old workflow expectation gets in the way.',
      'This is a classic scenario for negative transfer.',
    ],
    conceptSummary: 'Negative transfer occurs when old expectations interfere with new interaction.',
  },
  {
    id: 'psych-mental-model-definition',
    kind: 'mcq',
    prompt: 'Which statement best describes mental models in the lecture?',
    options: [
      'They are formed from fragmentary evidence and reinforced by positive feedback, even when inaccurate',
      'They are always complete and technically correct',
      'They only belong to designers, not users',
      'They are identical to source code architecture',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture stresses that mental models can be incomplete or inaccurate.',
      'People build them from limited evidence and reinforce them through feedback.',
      'That makes alignment between system image and user model important.',
    ],
    conceptSummary: 'Mental models are partial user explanations that may still be inaccurate.',
  },
  {
    id: 'psych-model-relationships',
    kind: 'match',
    prompt: 'Match each model relationship to the lecture framing.',
    pairs: [
      { left: 'Designer mental model', right: 'What the designer believes the system is and how it works' },
      { left: 'System image', right: 'What the interface actually communicates to the user' },
      { left: 'User mental model', right: 'What the user comes to believe about how the system works' },
      { left: 'Burden of alignment', right: 'Falls on the system image' },
    ],
    explanationSteps: [
      'The lecture distinguishes what designers think, what the system communicates, and what users infer.',
      'The system image mediates between designer intent and user understanding.',
      'Misalignment makes learning and use harder.',
    ],
    conceptSummary: 'The system image must align designer intent with the user’s mental model.',
  },
  {
    id: 'psych-mismatch-harder',
    kind: 'mcq',
    prompt: 'What happens when the mismatch between designer and user mental models gets larger?',
    options: [
      'The system becomes harder to learn and use',
      'The system automatically becomes more efficient',
      'Users no longer need signifiers',
      'The mismatch has no practical effect',
    ],
    correctOption: 0,
    explanationSteps: [
      'A larger model mismatch means users predict the system less accurately.',
      'That increases confusion and friction.',
      'The result is harder learning and poorer use.',
    ],
    conceptSummary: 'Greater mental-model mismatch increases learning and usability problems.',
  },
]

const METAPHOR_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'psych-metaphors-purpose',
    kind: 'mcq',
    prompt: 'Why are metaphors used in interface design?',
    options: [
      'To help users understand complex or novel things through familiar concepts',
      'To remove all need for conceptual models',
      'To make interfaces look artistic only',
      'To guarantee no false expectations occur',
    ],
    correctOption: 0,
    explanationSteps: [
      'Metaphors bridge from familiar knowledge to unfamiliar systems.',
      'This can help users form an initial understanding quickly.',
      'But poor metaphors can also mislead.',
    ],
    conceptSummary: 'Metaphors help users understand new systems by borrowing from familiar concepts.',
  },
  {
    id: 'psych-metaphor-risk',
    kind: 'mcq',
    prompt: 'What is a risk of a poor interface metaphor?',
    options: [
      'It can create false expectations or limit thinking',
      'It always improves transfer',
      'It removes the need for signifiers',
      'It guarantees a correct mental model',
    ],
    correctOption: 0,
    explanationSteps: [
      'A poor metaphor may push users toward the wrong assumptions.',
      'It can oversimplify or constrain how they think about the system.',
      'So metaphor choice matters.',
    ],
    conceptSummary: 'Bad metaphors can mislead users and constrain understanding.',
  },
  {
    id: 'psych-good-metaphor',
    kind: 'match',
    prompt: 'Match each good-metaphor guideline to the lecture framing.',
    pairs: [
      { left: 'Match user task', right: 'Choose a metaphor relevant to what users are trying to do' },
      { left: 'Close to system behavior', right: 'Pick a metaphor that aligns with how the system actually works' },
      { left: 'Fit emotional tone', right: 'Use a metaphor that feels appropriate for the experience' },
      { left: 'Do not overdo it', right: 'Use text and icons clearly rather than forcing the metaphor everywhere' },
    ],
    explanationSteps: [
      'The lecture provides practical criteria for good metaphor design.',
      'A metaphor should help, not dominate or distort the interaction.',
      'Clear text and icons still matter.',
    ],
    conceptSummary: 'Good metaphors support the task, fit the system, and avoid overreach.',
  },
]

const ACTION_GULFS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'psych-action-cycle-order',
    kind: 'match',
    prompt: 'Match each action-cycle side to its stages.',
    pairs: [
      { left: 'Execution', right: 'Goal -> plan -> specify -> perform' },
      { left: 'Evaluation', right: 'Perceive -> interpret -> compare' },
    ],
    explanationSteps: [
      'Norman’s action cycle is split into execution and evaluation.',
      'The execution side moves from intention to action.',
      'The evaluation side interprets the resulting system state.',
    ],
    conceptSummary: 'The action cycle has execution and evaluation sides with distinct stages.',
  },
  {
    id: 'psych-gulf-execution',
    kind: 'text',
    prompt: 'What is the gulf of execution?',
    requiredConcepts: [
      { label: 'User goal or intention', keywords: ['goal', 'intention', 'what user wants'] },
      { label: 'Gap to what system allows or how to act', keywords: ['what system allows', 'how to act', 'how do i use it', 'what can i do'] },
    ],
    answerDisplay:
      'The gulf of execution is the gap between the user’s goal or intention and what the system allows or supports them to do.',
    explanationSteps: [
      'This gulf is about acting on the system.',
      'Users wonder what they can do and how to do it.',
      'Poor signifiers, mappings, or conceptual models often widen it.',
    ],
    conceptSummary: 'The gulf of execution is the gap between intention and available action.',
  },
  {
    id: 'psych-gulf-evaluation',
    kind: 'mcq',
    prompt: 'A user cannot tell whether an order actually succeeded after clicking submit. Which gulf is this?',
    options: ['Gulf of evaluation', 'Gulf of execution', 'Positive transfer', 'Closure'],
    correctOption: 0,
    explanationSteps: [
      'The user acted successfully but cannot interpret the system state afterward.',
      'That is the gulf of evaluation.',
      'The key question is “what happened?” or “is this what I want?”',
    ],
    conceptSummary: 'The gulf of evaluation is about interpreting system state and outcome.',
  },
  {
    id: 'psych-bridge-gulfs',
    kind: 'match',
    prompt: 'Match each bridge to the gulf it most directly helps.',
    pairs: [
      { left: 'Signifiers', right: 'Bridge the gulf of execution' },
      { left: 'Mappings', right: 'Bridge the gulf of execution' },
      { left: 'Feedback', right: 'Bridge the gulf of evaluation' },
      { left: 'Conceptual model', right: 'Bridges both by helping interpretation and action' },
    ],
    explanationSteps: [
      'The lecture names different ways to bridge the two gulfs.',
      'Execution is helped by making actions understandable and available.',
      'Evaluation is helped by system response and understandable state.',
    ],
    conceptSummary: 'Execution needs clear action cues; evaluation needs understandable system state and feedback.',
  },
  {
    id: 'psych-action-cycle-scenario',
    kind: 'mcq',
    prompt: 'A cycle starts from an external event rather than a user goal. Which lecture point does this reflect?',
    options: [
      'The action cycle can also start from the world and may repeat multiple times',
      'The action cycle only starts from explicit goals',
      'Evaluation must always come before execution',
      'The cycle cannot include unconscious stages',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture notes the cycle is not always goal-started only.',
      'It can be event-driven, include unconscious stages, and repeat.',
      'This makes the model more flexible than a rigid sequence.',
    ],
    conceptSummary: 'Norman’s action cycle can start from the world and recur across repeated interaction.',
  },
]

const PRINCIPLES_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'psych-principles-match',
    kind: 'match',
    prompt: 'Match each interaction principle to its lecture framing.',
    pairs: [
      { left: 'Signifier', right: 'A perceivable indicator of appropriate behavior' },
      { left: 'Mapping', right: 'Relationship between controls and results' },
      { left: 'Feedback', right: 'Immediate and informative system response' },
      { left: 'Conceptual model', right: 'Simplified explanation of how something works' },
    ],
    explanationSteps: [
      'The lecture highlights affordance, signifiers, mapping, feedback, and conceptual model.',
      'These help make systems understandable and usable.',
      'They also help bridge the gulfs.',
    ],
    conceptSummary: 'Norman’s core interaction principles help users act and interpret successfully.',
  },
  {
    id: 'psych-affordance-vs-signifier',
    kind: 'mcq',
    prompt: 'What is the key difference between affordance and signifier?',
    options: [
      'Affordance concerns possible use based on object and user abilities, while signifiers communicate what behavior is appropriate',
      'They are exactly the same thing',
      'Signifiers exist only in physical objects',
      'Affordances exist only on screens',
    ],
    correctOption: 0,
    explanationSteps: [
      'Affordance is about the action possibilities themselves.',
      'Signifiers are cues that tell people what to do or what is possible.',
      'The two are related but distinct.',
    ],
    conceptSummary: 'Affordance is possibility; signifier is communicative cue.',
  },
  {
    id: 'psych-perceived-affordance-screen',
    kind: 'mcq',
    prompt: 'A touchscreen button looks tappable because of shading and styling. Which concept best fits?',
    options: ['Perceived affordance plus signifier', 'Real physical affordance only', 'Negative transfer only', 'Long-term memory'],
    correctOption: 0,
    explanationSteps: [
      'Screen-based interfaces rely heavily on perceived affordance rather than physical affordance.',
      'Styling and conventions act as signifiers that invite tapping.',
      'The screen physically affords touching everywhere, but interactivity is conveyed selectively.',
    ],
    conceptSummary: 'Screen interactivity is mostly communicated through perceived affordance and signifiers.',
  },
  {
    id: 'psych-mapping-definition',
    kind: 'text',
    prompt: 'What is mapping?',
    requiredConcepts: [
      { label: 'Relationship between control and result', keywords: ['relationship between control and result', 'control and effect'] },
      { label: 'Correspondence', keywords: ['correspondence', 'mapping'] },
    ],
    answerDisplay:
      'Mapping is the relationship or correspondence between controls and their results or effects.',
    explanationSteps: [
      'Good mapping makes it easier to predict what a control will do.',
      'The lecture lists spatial correspondence, grouping, cultural mapping, and visual similarity as strategies.',
      'Poor mapping increases confusion and errors.',
    ],
    conceptSummary: 'Mapping links controls to their effects in predictable ways.',
  },
  {
    id: 'psych-spatial-mapping',
    kind: 'mcq',
    prompt: 'A stove knob layout matches burner positions on the stove. Which mapping strategy is this?',
    options: ['Spatial correspondence', 'Negative transfer', 'Closure', 'Help documentation'],
    correctOption: 0,
    explanationSteps: [
      'The control arrangement mirrors the result arrangement in space.',
      'That is a classic example of spatial correspondence.',
      'Good mapping reduces interpretation effort.',
    ],
    conceptSummary: 'Spatial correspondence is a strong mapping strategy when layout can mirror outcome.',
  },
  {
    id: 'psych-feedback-quality',
    kind: 'mcq',
    prompt: 'Which combination best matches good feedback in the lecture?',
    options: [
      'Immediate, informative, appropriate in amount, and unobtrusive',
      'Delayed, vague, and visually overwhelming',
      'Silent and hidden',
      'Technical and accusatory',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture gives four feedback qualities: immediate, informative, appropriate, and unobtrusive.',
      'Good feedback supports evaluation without overwhelming the user.',
      'Bad feedback leaves users uncertain or overloaded.',
    ],
    conceptSummary: 'Good feedback is immediate, informative, proportional, and unobtrusive.',
  },
  {
    id: 'psych-conceptual-model',
    kind: 'mcq',
    prompt: 'What is a conceptual model?',
    options: [
      'A simplified explanation of how something works that helps users predict behavior and recover from problems',
      'A pixel-perfect visual mockup only',
      'The same thing as source code',
      'A severity score for usability issues',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture frames conceptual models as simplified explanations.',
      'They are shaped by signifiers, affordances, constraints, and mappings.',
      'A good conceptual model helps users predict behavior and recover when things go wrong.',
    ],
    conceptSummary: 'Conceptual models help users understand and predict system behavior.',
  },
]

const ALL_QUESTIONS = {
  'memory-learning': MEMORY_LEARNING_QUESTIONS,
  'transfer-mental-models': TRANSFER_MENTAL_MODEL_QUESTIONS,
  metaphors: METAPHOR_QUESTIONS,
  'action-gulfs': ACTION_GULFS_QUESTIONS,
  principles: PRINCIPLES_QUESTIONS,
} as const

function pick(subtopic: keyof typeof ALL_QUESTIONS): NetworkingQuestion {
  return randomPick(ALL_QUESTIONS[subtopic])
}

export function generatePsychMemoryLearningQuestion(): NetworkingQuestion {
  return pick('memory-learning')
}

export function generatePsychTransferMentalModelQuestion(): NetworkingQuestion {
  return pick('transfer-mental-models')
}

export function generatePsychMetaphorQuestion(): NetworkingQuestion {
  return pick('metaphors')
}

export function generatePsychActionGulfQuestion(): NetworkingQuestion {
  return pick('action-gulfs')
}

export function generatePsychPrinciplesQuestion(): NetworkingQuestion {
  return pick('principles')
}
