import { randomPick } from '../../lib/random'
import type { NetworkingQuestion } from '../networkingShared/networkingDrills'

const FOUNDATIONS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'cognition-definition',
    kind: 'mcq',
    prompt: 'What is cognition?',
    options: [
      'The process by which knowledge and understanding is developed in the mind',
      'The physical shape of an input device',
      'Only long-term memory retrieval',
      'A list of interface types by decade',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture defines cognition as the mental development of knowledge and understanding.',
      'It is broader than memory alone.',
      'This makes cognition central to interface design decisions.',
    ],
    conceptSummary: 'Cognition concerns how the mind develops understanding and knowledge.',
  },
  {
    id: 'cognition-why-it-matters',
    kind: 'match',
    prompt: 'Match each reason for studying cognition to the lecture framing.',
    pairs: [
      { left: 'Human abilities and limitations', right: 'Helps designers understand what people can and cannot do well' },
      { left: 'Multitasking effects', right: 'Shows the costs of switching attention' },
      { left: 'Support attention, perception, and memory', right: 'Guides interface design choices' },
      { left: 'Compensate weaknesses', right: 'Helps extend human capabilities through design' },
    ],
    explanationSteps: [
      'The lecture connects cognition study directly to design practice.',
      'Understanding limits and strengths helps create better support for users.',
      'This is why cognition matters in HCI rather than being abstract psychology only.',
    ],
    conceptSummary: 'Studying cognition helps designers support strengths, compensate limits, and reduce cognitive cost.',
  },
]

const MODES_OF_COGNITION_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'cognition-experiential',
    kind: 'text',
    prompt: 'What is experiential cognition?',
    requiredConcepts: [
      { label: 'Fast or efficient reaction', keywords: ['fast', 'efficient reaction', 'intuitive', 'natural'] },
      { label: 'Instinctive or effortless', keywords: ['instinctive', 'reflexive', 'effortless'] },
    ],
    answerDisplay:
      'Experiential cognition is fast, intuitive, efficient reaction to surrounding events that feels instinctive, reflexive, and effortless.',
    explanationSteps: [
      'Experiential cognition is the fast mode of thinking highlighted in the lecture.',
      'It often feels natural, especially with expertise.',
      'It does not feel like slow deliberate analysis.',
    ],
    conceptSummary: 'Experiential cognition is fast, intuitive, and low-effort.',
  },
  {
    id: 'cognition-reflective',
    kind: 'text',
    prompt: 'What is reflective cognition?',
    requiredConcepts: [
      { label: 'Mental effort and attention', keywords: ['mental effort', 'attention'] },
      { label: 'Slow compare or decision thinking', keywords: ['compare', 'decision', 'slow thinking', 'creativity'] },
    ],
    answerDisplay:
      'Reflective cognition is slower thinking that requires mental effort and attention for comparison, decision-making, and new ideas.',
    explanationSteps: [
      'Reflective cognition is more deliberate and effortful than experiential cognition.',
      'It supports comparison, planning, and novel responses.',
      'Procedures and methods often help it along.',
    ],
    conceptSummary: 'Reflective cognition is slow, deliberate, and attention-demanding.',
  },
  {
    id: 'cognition-mode-scenarios',
    kind: 'match',
    prompt: 'Match each scenario to the cognitive mode it best fits.',
    pairs: [
      { left: 'Repeated use makes a task feel automatic and intuitive', right: 'Experiential cognition' },
      { left: 'Comparing options carefully before choosing one', right: 'Reflective cognition' },
      { left: 'Instinctive reaction with little sense of deliberate control', right: 'Experiential cognition' },
      { left: 'Methodical planning for a novel problem', right: 'Reflective cognition' },
    ],
    explanationSteps: [
      'The lecture contrasts fast, intuitive cognition with slow, effortful cognition.',
      'Scenario recognition is a good way to separate them.',
      'Repeated expertise often shifts tasks toward experiential cognition.',
    ],
    conceptSummary: 'Experiential cognition is fast and intuitive; reflective cognition is deliberate and effortful.',
  },
]

const ATTENTION_SALIENCE_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'cognition-attention-definition',
    kind: 'mcq',
    prompt: 'What is attention in the lecture framing?',
    options: [
      'Selecting what to concentrate on from surrounding stimuli',
      'Remembering long-term facts only',
      'Physically sensing light before the brain interprets it',
      'Typing commands in a shell',
    ],
    correctOption: 0,
    explanationSteps: [
      'Attention is about choosing where concentration goes among competing stimuli.',
      'A clear goal makes attention easier to direct.',
      'Salient information also helps attention focus quickly.',
    ],
    conceptSummary: 'Attention is the selection of what to focus on from available stimuli.',
  },
  {
    id: 'cognition-salience',
    kind: 'text',
    prompt: 'What is salience?',
    requiredConcepts: [
      { label: 'Stand out or pop out', keywords: ['stand out', 'set apart', 'pop out'] },
      { label: 'Displayed information or visual display', keywords: ['displayed information', 'visual display', 'display'] },
    ],
    answerDisplay:
      'Salience is a displayed quality that makes something stand out or pop out in a visual display.',
    explanationSteps: [
      'Salience supports rapid, often preattentive awareness.',
      'It helps critical elements be noticed quickly and effortlessly.',
      'This is especially important in time-critical interfaces.',
    ],
    conceptSummary: 'Salience makes an item visually stand out quickly and effortlessly.',
  },
  {
    id: 'cognition-bertin-variables',
    kind: 'match',
    prompt: 'Match each Bertin visual variable to the lecture list.',
    pairs: [
      { left: 'Position', right: 'Where an item is placed' },
      { left: 'Size', right: 'How large an item appears' },
      { left: 'Hue', right: 'Its color family' },
      { left: 'Orientation', right: 'The direction an item points' },
    ],
    explanationSteps: [
      'The lecture names Bertin visual variables as tools for salience and information encoding.',
      'The full list includes position, size, shape, value, hue, orientation, and texture.',
      'Selective quality matters especially for salience.',
    ],
    conceptSummary: 'Visual variables shape what stands out and how information is encoded.',
  },
  {
    id: 'cognition-clutter-warning',
    kind: 'mcq',
    prompt: 'A cluttered interface makes a critical warning hard to spot. What is the main design failure?',
    options: [
      'Poor salience and attention design',
      'Too much long-term memory retrieval',
      'Too much symmetry',
      'Too much utility',
    ],
    correctOption: 0,
    explanationSteps: [
      'The warning does not stand out enough from surrounding noise.',
      'That means attention is not being structured well.',
      'Reducing clutter and using visual variables carefully are the lecture takeaways.',
    ],
    conceptSummary: 'Attention design fails when important information does not stand out enough.',
  },
  {
    id: 'cognition-multitasking',
    kind: 'mcq',
    prompt: 'What does the lecture emphasize about multitasking?',
    options: [
      'Humans mainly switch attention between tasks rather than truly attend in parallel',
      'Humans process all tasks equally well in parallel',
      'Multitasking removes attention costs',
      'Only experts ever multitask',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture frames multitasking as attention switching rather than true parallel focus.',
      'Humans are better at focusing on one thing at a time.',
      'This has direct implications for notification and layout design.',
    ],
    conceptSummary: 'Multitasking usually means switching attention, not true parallel focus.',
  },
]

const PERCEPTION_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'cognition-perception-definition',
    kind: 'mcq',
    prompt: 'What is perception?',
    options: [
      'Acquiring information through the senses and transforming it into experience',
      'Typing remembered commands from memory',
      'Only storing information in long-term memory',
      'A particular icon design strategy',
    ],
    correctOption: 0,
    explanationSteps: [
      'Perception starts from sensory input but goes beyond it.',
      'It involves transforming information from the environment into experience.',
      'This is why perception is more than raw sensation.',
    ],
    conceptSummary: 'Perception turns sensory input into experience.',
  },
  {
    id: 'cognition-sensation-vs-perception',
    kind: 'text',
    prompt: 'What is the difference between sensation and perception?',
    requiredConcepts: [
      { label: 'Sensation gathers information through receptors', keywords: ['sensation', 'receptors', 'gather information'] },
      { label: 'Perception means the brain makes sense of it', keywords: ['perception', 'brain makes sense', 'brain interprets'] },
    ],
    answerDisplay:
      'Sensation is when receptors gather information and send it to the brain, while perception is when the brain makes sense of those sensations.',
    explanationSteps: [
      'The lecture separates raw input gathering from interpretation.',
      'Sensation is the input side; perception is the meaning-making side.',
      'This distinction matters because interpretation can be unreliable.',
    ],
    conceptSummary: 'Sensation gathers input; perception interprets it.',
  },
  {
    id: 'cognition-perception-unreliable',
    kind: 'mcq',
    prompt: 'Why is perception not fully reliable?',
    options: [
      'It is shaped by context, conditions, illusions, multisensory conflict, and prior knowledge',
      'It is identical to physical measurement',
      'It depends only on the retina with no interpretation',
      'It never differs across individuals',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture stresses that perception is constructed, not a direct copy of reality.',
      'Context, illusions, prior experience, and conditions all affect it.',
      'Different people may perceive the same situation differently.',
    ],
    conceptSummary: 'Perception is constructed and context-sensitive, not perfectly reliable.',
  },
  {
    id: 'cognition-constructed-model',
    kind: 'mcq',
    prompt: 'Which statement best reflects the lecture’s view of visual perception?',
    options: [
      'What we see is a constructed model of the world shaped by environment, experience, and stored knowledge',
      'Vision is a perfect recording of the external world',
      'Vision works independently of prior knowledge',
      'Vision is the same as long-term memory',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture explicitly says what we see is a constructed model.',
      'Stored knowledge and prior experience shape this model.',
      'That makes visual design and interpretation deeply contextual.',
    ],
    conceptSummary: 'Visual perception is a constructed interpretation, not a perfect copy of reality.',
  },
]

const GESTALT_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'cognition-gestalt-whole',
    kind: 'mcq',
    prompt: 'What is the core Gestalt idea highlighted in the lecture?',
    options: [
      'The organized whole is perceived as greater than the sum of the parts',
      'People only see individual pixels',
      'Similarity never matters in grouping',
      'Perception is unaffected by layout',
    ],
    correctOption: 0,
    explanationSteps: [
      'Gestalt principles explain how people organize visual information into meaningful wholes.',
      'Grouping and structure emerge from layout and appearance.',
      'This makes them highly relevant for interface design.',
    ],
    conceptSummary: 'Gestalt explains how people perceive organized wholes rather than isolated parts.',
  },
  {
    id: 'cognition-gestalt-match',
    kind: 'match',
    prompt: 'Match each Gestalt principle to its meaning.',
    pairs: [
      { left: 'Proximity', right: 'Close elements seem related' },
      { left: 'Common region', right: 'Items in the same bounded area seem related' },
      { left: 'Closure', right: 'Incomplete forms are still seen as complete' },
      { left: 'Continuation', right: 'Elements along a line or curve seem related and guide viewing' },
    ],
    explanationSteps: [
      'The lecture lists proximity, common region, similarity, closure, symmetry, and continuation.',
      'These principles guide how users interpret grouping and structure.',
      'Designers can use them intentionally in layout.',
    ],
    conceptSummary: 'Gestalt principles shape grouping, structure, and visual flow.',
  },
  {
    id: 'cognition-common-region-scenario',
    kind: 'mcq',
    prompt: 'Items grouped inside one bordered section appear related. Which Gestalt principle is this?',
    options: ['Common region', 'Closure', 'Symmetry', 'Recall'],
    correctOption: 0,
    explanationSteps: [
      'A shared boundary causes items to be perceived as belonging together.',
      'That is the definition of common region.',
      'This is a common scenario-classification question.',
    ],
    conceptSummary: 'Common region groups items through a shared boundary.',
  },
  {
    id: 'cognition-proximity-scenario',
    kind: 'mcq',
    prompt: 'Buttons placed closer together seem like part of the same tool group. Which principle is this?',
    options: ['Proximity', 'Symmetry', 'Value', 'Recall'],
    correctOption: 0,
    explanationSteps: [
      'Proximity causes close items to feel related.',
      'Designers often use spacing to imply grouping.',
      'This is one of the most basic Gestalt effects in interfaces.',
    ],
    conceptSummary: 'Proximity uses spacing to suggest relatedness.',
  },
]

const MEMORY_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'cognition-memory-definition',
    kind: 'mcq',
    prompt: 'How is memory framed in the lecture?',
    options: [
      'As encoding plus retrieval, both of which can involve losses',
      'As perfect storage of all experiences',
      'As only short-term chunking',
      'As only visual salience',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture highlights both encoding and retrieval.',
      'Losses can happen at either stage, and retrieval depends on context.',
      'This is why memory support matters in design.',
    ],
    conceptSummary: 'Memory involves encoding and retrieval, both of which are imperfect.',
  },
  {
    id: 'cognition-short-vs-long-memory',
    kind: 'match',
    prompt: 'Match each memory system to the lecture description.',
    pairs: [
      { left: 'Short-term memory', right: 'Around 7 plus or minus 2 chunks and about 20 to 30 seconds' },
      { left: 'Long-term memory', right: 'Develops through repetition and links to existing knowledge' },
    ],
    explanationSteps: [
      'The lecture gives classic high-level distinctions between short-term and long-term memory.',
      'Short-term memory is limited in capacity and duration.',
      'Long-term memory benefits from repetition and meaningful connection.',
    ],
    conceptSummary: 'Short-term memory is limited; long-term memory develops through repetition and connection.',
  },
  {
    id: 'cognition-recognition-vs-recall',
    kind: 'mcq',
    prompt: 'Why is recognition better than recall for interfaces?',
    options: [
      'Recognition is easier than recall and reduces memory load',
      'Recall is always faster than recognition',
      'Recognition requires more memorization',
      'Recognition removes the need for perception',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture explicitly states that recognition is easier than recall.',
      'Interfaces should therefore avoid forcing users to remember arbitrary temporary details.',
      'Visible options and cues reduce memory burden.',
    ],
    conceptSummary: 'Recognition is easier than recall, so interfaces should reduce memorization demands.',
  },
  {
    id: 'cognition-recognition-scenario',
    kind: 'mcq',
    prompt: 'An icon-based menu lets users pick from visible options instead of typing hidden commands. What cognitive benefit is being used?',
    options: ['Recognition rather than recall', 'Closure rather than proximity', 'Long-term memory overload', 'Symmetry'],
    correctOption: 0,
    explanationSteps: [
      'Visible choices support recognition.',
      'Typed hidden commands require recall from memory.',
      'This is one reason GUIs are often easier to learn than CLIs.',
    ],
    conceptSummary: 'Visible options support recognition and reduce recall demands.',
  },
]

const DESIGN_IMPLICATIONS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'cognition-memory-support',
    kind: 'match',
    prompt: 'Match each memory-support design tactic to the lecture framing.',
    pairs: [
      { left: 'Categories and color', right: 'Help users encode and retrieve information' },
      { left: 'Search and history', right: 'Reduce the need to remember exact past details' },
      { left: 'Progress indicators', right: 'Help users remember where they are and what comes next' },
      { left: 'Frequently used lists', right: 'Support retrieval of common actions' },
    ],
    explanationSteps: [
      'The lecture gives concrete tactics for supporting encoding and retrieval.',
      'Design should reduce memory burden rather than demand perfect recall.',
      'These examples are especially practical exam material.',
    ],
    conceptSummary: 'Design can actively support memory through cues, structure, and retrieval aids.',
  },
  {
    id: 'cognition-progress-scenario',
    kind: 'mcq',
    prompt: 'A multi-step process has no progress indicator, so users forget where they are and what to do next. What is the main design weakness?',
    options: [
      'Poor support for memory and task progress',
      'Too much symmetry',
      'Too much utility',
      'Too much experiential cognition',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture recommends helping users remember progress and next steps.',
      'Without that support, temporary state must be remembered mentally.',
      'This unnecessarily increases cognitive load.',
    ],
    conceptSummary: 'Interfaces should externalize progress so users do not have to remember temporary state.',
  },
  {
    id: 'cognition-attention-implication',
    kind: 'mcq',
    prompt: 'Which design implication best matches the lecture’s discussion of attention?',
    options: [
      'Use visual variables carefully, reduce clutter, and capture attention at the right time and amount',
      'Assume users can attend to everything equally well',
      'Maximize simultaneous distractions',
      'Hide critical information until the final step',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture emphasizes limited attention and careful attention management.',
      'Designers can direct attention through salience, structure, and reduced noise.',
      'Good attention design avoids clutter and overload.',
    ],
    conceptSummary: 'Good attention design uses salience and reduced clutter to guide focus appropriately.',
  },
]

const ALL_QUESTIONS = {
  foundations: FOUNDATIONS_QUESTIONS,
  modes: MODES_OF_COGNITION_QUESTIONS,
  'attention-salience': ATTENTION_SALIENCE_QUESTIONS,
  perception: PERCEPTION_QUESTIONS,
  gestalt: GESTALT_QUESTIONS,
  memory: MEMORY_QUESTIONS,
  'design-implications': DESIGN_IMPLICATIONS_QUESTIONS,
} as const

function pick(subtopic: keyof typeof ALL_QUESTIONS): NetworkingQuestion {
  return randomPick(ALL_QUESTIONS[subtopic])
}

export function generateCognitionFoundationQuestion(): NetworkingQuestion {
  return pick('foundations')
}

export function generateModesOfCognitionQuestion(): NetworkingQuestion {
  return pick('modes')
}

export function generateAttentionSalienceQuestion(): NetworkingQuestion {
  return pick('attention-salience')
}

export function generatePerceptionQuestion(): NetworkingQuestion {
  return pick('perception')
}

export function generateGestaltQuestion(): NetworkingQuestion {
  return pick('gestalt')
}

export function generateMemoryQuestion(): NetworkingQuestion {
  return pick('memory')
}

export function generateCognitionDesignImplicationQuestion(): NetworkingQuestion {
  return pick('design-implications')
}
