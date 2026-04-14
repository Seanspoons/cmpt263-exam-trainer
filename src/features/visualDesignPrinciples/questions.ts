import { randomPick } from '../../lib/random'
import type { NetworkingQuestion } from '../networkingShared/networkingDrills'

const FOUNDATIONS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'vdp-gui-not-enough',
    kind: 'mcq',
    prompt: 'Which statement best matches the lecture’s visual-design framing of GUI?',
    options: [
      'GUI is dominant and easy to improve, but GUI alone does not automatically mean good UI',
      'Any GUI is automatically a good interface',
      'GUI has been replaced completely by CLI',
      'GUI quality depends only on color choice',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture notes the strengths of GUI as a dominant interaction style.',
      'But it explicitly warns that having a GUI does not guarantee good UI design.',
      'Interface quality still depends on design principles.',
    ],
    conceptSummary: 'GUI is common and useful, but good UI still requires deliberate design.',
  },
  {
    id: 'vdp-poor-ui-failure',
    kind: 'mcq',
    prompt: 'Why do many systems still fail despite using GUI interfaces?',
    options: [
      'Because of poor UI design such as hard-to-find items and awkward input mechanisms',
      'Because GUI prevents any user learning',
      'Because white space is always bad',
      'Because design principles are strict laws instead of guidelines',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture points to poor interface design as a major cause of failure.',
      'Hard-to-find content and awkward input are examples of these design problems.',
      'Visual design principles aim to reduce this kind of failure.',
    ],
    conceptSummary: 'Poor UI design can undermine even technically functional GUI systems.',
  },
  {
    id: 'vdp-principles-overview',
    kind: 'match',
    prompt: 'Match each major visual-design category to the lecture overview.',
    pairs: [
      { left: 'Spacing', right: 'Use of negative space and white space' },
      { left: 'Grouping', right: 'Organizing related things together' },
      { left: 'Simplicity', right: 'Reducing clutter and unnecessary complexity' },
      { left: 'CRAP', right: 'Contrast, repetition, alignment, proximity' },
      { left: 'Visual hierarchy', right: 'Showing order of importance quickly' },
    ],
    explanationSteps: [
      'The lecture groups the visual-design material into a few major themes.',
      'These categories organize many of the later scenario questions.',
      'Knowing the high-level buckets helps classify examples quickly.',
    ],
    conceptSummary: 'Visual design in this unit centers on spacing, grouping, simplicity, CRAP, and hierarchy.',
  },
]

const SPACING_GROUPING_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'vdp-spacing-definition',
    kind: 'text',
    prompt: 'What is spacing in visual design?',
    requiredConcepts: [
      { label: 'Negative or white space', keywords: ['negative space', 'areas without content', 'white space'] },
      { label: 'Margins padding gutters line spacing', keywords: ['margins', 'padding', 'gutters', 'line spacing'] },
    ],
    answerDisplay:
      'Spacing is the use of negative or white space, such as margins, padding, gutters, and line spacing.',
    explanationSteps: [
      'The lecture defines spacing as the areas without content.',
      'Examples include margins, gutters, column spacing, line spacing, and padding.',
      'Spacing is a core readability and structure tool.',
    ],
    conceptSummary: 'Spacing uses white space to create readability and structure.',
  },
  {
    id: 'vdp-macro-micro',
    kind: 'match',
    prompt: 'Match each type of white space to its role.',
    pairs: [
      { left: 'Macro white space', right: 'Between major layout elements to control information and attention' },
      { left: 'Micro white space', right: 'Within content elements to improve readability' },
    ],
    explanationSteps: [
      'The lecture separates large-scale and small-scale spacing.',
      'Macro white space organizes the layout broadly.',
      'Micro white space improves readability within content.',
    ],
    conceptSummary: 'Macro space structures layouts; micro space improves readability inside them.',
  },
  {
    id: 'vdp-grouping-definition',
    kind: 'text',
    prompt: 'What is grouping?',
    requiredConcepts: [
      { label: 'Proximity or close together means related', keywords: ['proximity', 'close together', 'related'] },
      { label: 'Find faster / association / reduce mistakes', keywords: ['find faster', 'association', 'reduce mistakes'] },
    ],
    answerDisplay:
      'Grouping organizes related things using proximity, helping users form associations, find things faster, and make fewer mistakes.',
    explanationSteps: [
      'The lecture roots grouping in the law of proximity.',
      'Good grouping helps people scan and interpret interfaces more accurately.',
      'It also reduces mistakes by clarifying relationships.',
    ],
    conceptSummary: 'Grouping uses proximity and related cues to improve scanning and reduce mistakes.',
  },
  {
    id: 'vdp-space-limited',
    kind: 'mcq',
    prompt: 'If space is limited, what does the lecture suggest for grouping?',
    options: [
      'Use dividers or containers',
      'Remove all grouping',
      'Add more random colors',
      'Rely on overlap only',
    ],
    correctOption: 0,
    explanationSteps: [
      'When pure spacing is limited, the lecture suggests other grouping cues.',
      'Dividers and containers can preserve relationship cues without needing large gaps.',
      'The goal is still to show relatedness clearly.',
    ],
    conceptSummary: 'When spacing is constrained, use containers or dividers to preserve grouping.',
  },
]

const SIMPLICITY_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'vdp-simplicity-clutter',
    kind: 'mcq',
    prompt: 'Why does the lecture warn against visual clutter?',
    options: [
      'It causes loss of attention and more mistakes',
      'It always improves discoverability',
      'It guarantees stronger hierarchy',
      'It is required for expert users',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture explicitly links clutter with lost attention and more mistakes.',
      'Simplicity aims to reduce unnecessary competition for focus.',
      'This connects directly to attention and hierarchy concerns.',
    ],
    conceptSummary: 'Visual clutter harms attention and increases mistakes.',
  },
  {
    id: 'vdp-simplicity-strategies',
    kind: 'match',
    prompt: 'Match each simplicity tactic to the lecture guidance.',
    pairs: [
      { left: 'Hide infrequently used functions', right: 'Keep advanced options out of the way until needed' },
      { left: 'Provide good defaults', right: 'Reduce the amount users must configure manually' },
      { left: 'Use wizards', right: 'Guide complex or infrequent tasks step by step' },
    ],
    explanationSteps: [
      'The lecture offers concrete methods for simplifying interfaces.',
      'These tactics reduce visible complexity without eliminating capability.',
      'They are practical design choices, not abstract theory only.',
    ],
    conceptSummary: 'Simplicity often comes from progressive disclosure, defaults, and guided flows.',
  },
  {
    id: 'vdp-hiding-advanced-settings',
    kind: 'mcq',
    prompt: 'Hiding advanced settings until they are needed is mainly an example of what?',
    options: ['Simplicity', 'Perspective hierarchy', 'Common fate', 'Searchability'],
    correctOption: 0,
    explanationSteps: [
      'This tactic reduces clutter and initial complexity.',
      'The lecture explicitly includes it as a simplicity strategy.',
      'It helps focus attention on what matters now.',
    ],
    conceptSummary: 'Progressively revealing advanced options is a simplicity technique.',
  },
]

const CRAP_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'vdp-crap-match',
    kind: 'match',
    prompt: 'Match each CRAP principle to its meaning.',
    pairs: [
      { left: 'Contrast', right: 'Make different things stand out' },
      { left: 'Repetition', right: 'Repeat conventions to tie things together' },
      { left: 'Alignment', right: 'Line related things up visually' },
      { left: 'Proximity', right: 'Group related things and separate unrelated ones' },
    ],
    explanationSteps: [
      'CRAP is a compact memory aid for four common visual-design principles.',
      'These principles shape clarity, consistency, and structure.',
      'They are highly suited to scenario recognition questions.',
    ],
    conceptSummary: 'CRAP stands for contrast, repetition, alignment, and proximity.',
  },
  {
    id: 'vdp-contrast-definition',
    kind: 'text',
    prompt: 'What does contrast mean in CRAP?',
    requiredConcepts: [
      { label: 'Stand out / dominant / different things', keywords: ['stand out', 'different things', 'dominant'] },
      { label: 'Color size weight shape', keywords: ['color', 'size', 'weight', 'shape'] },
    ],
    answerDisplay:
      'Contrast means making different things stand out so dominant elements get attention, often through color, size, weight, or shape.',
    explanationSteps: [
      'Contrast helps distinguish what matters most from what matters less.',
      'The lecture mentions color, size, weight, and shape as contrast tools.',
      'Contrast also supports hierarchy.',
    ],
    conceptSummary: 'Contrast makes important differences visible through strong visual distinction.',
  },
  {
    id: 'vdp-repetition-scenario',
    kind: 'mcq',
    prompt: 'Repeated card styles across multiple sections mainly demonstrate which CRAP principle?',
    options: ['Repetition', 'Contrast', 'Perspective', 'Closure'],
    correctOption: 0,
    explanationSteps: [
      'Repetition ties elements together through consistent presentation.',
      'The lecture mentions repeating color, size, weight, and shape conventions.',
      'This strengthens coherence across the interface.',
    ],
    conceptSummary: 'Repetition creates unity through consistent visual treatment.',
  },
  {
    id: 'vdp-alignment-scenario',
    kind: 'mcq',
    prompt: 'Text and buttons lined up on a clean grid mainly demonstrate which principle?',
    options: ['Alignment', 'Proximity', 'Closure', 'Value'],
    correctOption: 0,
    explanationSteps: [
      'Alignment uses invisible guidelines like shared edges or centers.',
      'The grid makes related elements feel organized and associated.',
      'This is a direct application of alignment.',
    ],
    conceptSummary: 'Alignment organizes elements through shared visual lines.',
  },
  {
    id: 'vdp-proximity-scenario',
    kind: 'mcq',
    prompt: 'Related controls placed close together mainly demonstrate which principle?',
    options: ['Proximity', 'Contrast', 'Perspective', 'Scale'],
    correctOption: 0,
    explanationSteps: [
      'Proximity groups related items by closeness.',
      'The lecture notes it is like grouping plus a bit of spacing.',
      'This is one of the easiest scenario-recognition questions.',
    ],
    conceptSummary: 'Proximity uses spacing to show relatedness.',
  },
]

const HIERARCHY_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'vdp-hierarchy-definition',
    kind: 'text',
    prompt: 'What is visual hierarchy?',
    requiredConcepts: [
      { label: 'Order of importance / structure / guide attention', keywords: ['order of importance', 'guide attention', 'structure'] },
      { label: 'Priority or more important first', keywords: ['more important first', 'priority'] },
    ],
    answerDisplay:
      'Visual hierarchy creates structure so users can understand the order of importance quickly and direct attention appropriately.',
    explanationSteps: [
      'Hierarchy helps people scan and understand importance quickly.',
      'The lecture frames it as a way to structure priority visually.',
      'Without hierarchy, everything competes at once.',
    ],
    conceptSummary: 'Visual hierarchy makes priority and importance legible at a glance.',
  },
  {
    id: 'vdp-hierarchy-techniques',
    kind: 'match',
    prompt: 'Match each hierarchy principle to the lecture idea.',
    pairs: [
      { left: 'Scale or size', right: 'Larger things feel more important' },
      { left: 'Color or contrast', right: 'Brighter and stronger contrast draws attention' },
      { left: 'Perspective', right: 'Closer things can appear more important' },
      { left: 'View pattern', right: 'Top placement and F/Z reading patterns affect attention' },
      { left: 'Focal points', right: 'Items at key intersections draw more attention' },
    ],
    explanationSteps: [
      'The lecture lists multiple ways to establish hierarchy.',
      'These include size, color, contrast, position, and focal structure.',
      'Hierarchy is multi-factor rather than one single trick.',
    ],
    conceptSummary: 'Hierarchy can be created through scale, contrast, perspective, reading pattern, and focal points.',
  },
  {
    id: 'vdp-call-to-action',
    kind: 'mcq',
    prompt: 'A bigger, brighter call-to-action button demonstrates which combination best?',
    options: [
      'Contrast and hierarchy by size/color',
      'Only repetition',
      'Only common region',
      'Only help and documentation',
    ],
    correctOption: 0,
    explanationSteps: [
      'The button stands out because of stronger contrast and greater scale.',
      'That makes it more visually important than surrounding elements.',
      'This is a textbook hierarchy scenario.',
    ],
    conceptSummary: 'Making something bigger and brighter strengthens contrast and hierarchy.',
  },
  {
    id: 'vdp-view-pattern',
    kind: 'mcq',
    prompt: 'What does the lecture say about view patterns in visual hierarchy?',
    options: [
      'People often follow F- or Z-patterns and items on top seem more important',
      'People always scan randomly',
      'View pattern matters only in VR',
      'Reading patterns remove the need for hierarchy',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture ties hierarchy to predictable scanning patterns.',
      'Top placement and common reading paths affect attention.',
      'Design can use those patterns intentionally.',
    ],
    conceptSummary: 'Hierarchy can leverage predictable scanning patterns like F and Z paths.',
  },
  {
    id: 'vdp-rule-of-thirds',
    kind: 'mcq',
    prompt: 'Why are rule-of-thirds intersections relevant to visual hierarchy?',
    options: [
      'They can act as focal points that draw attention',
      'They reduce all need for alignment',
      'They are only relevant to paper surveys',
      'They eliminate the effects of contrast',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture mentions focal points and rule-of-thirds intersections.',
      'Items placed at these points can attract more attention.',
      'This is one more way to structure visual importance.',
    ],
    conceptSummary: 'Focal points can increase attention to strategically placed elements.',
  },
]

const GESTALT_PLATFORM_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'vdp-gestalt-review',
    kind: 'match',
    prompt: 'Match each Gestalt principle to the lecture review.',
    pairs: [
      { left: 'Common region', right: 'Items in the same bounded area seem related' },
      { left: 'Similarity', right: 'Similar-looking items seem related' },
      { left: 'Continuation', right: 'Elements in a line or curve guide viewing' },
      { left: 'Common fate', right: 'Items moving together seem related' },
    ],
    explanationSteps: [
      'The visual-design lecture revisits Gestalt principles in a layout context.',
      'These principles explain why grouping and hierarchy techniques work.',
      'Common fate is included here as part of that review.',
    ],
    conceptSummary: 'Gestalt principles help explain grouping and attention in visual design.',
  },
  {
    id: 'vdp-web-consideration',
    kind: 'mcq',
    prompt: 'Which statement best matches the lecture’s web design considerations?',
    options: [
      'Web interfaces need good information structure and navigation, such as breadcrumb navigation',
      'Web design does not need navigation structure',
      'Web and mobile have identical constraints',
      'Web interfaces should avoid hierarchy',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture treats web interfaces as GUI-like and navigation-heavy.',
      'Information presentation and structure matter strongly.',
      'Breadcrumbs are given as an example of navigation support.',
    ],
    conceptSummary: 'Web design depends heavily on clear information structure and navigation.',
  },
  {
    id: 'vdp-mobile-consideration',
    kind: 'mcq',
    prompt: 'Which set best matches the lecture’s mobile design considerations?',
    options: [
      'Smaller screen, less input space, bursty usage, and expectation of fast streamlined experiences',
      'Unlimited space and highly detailed static layouts',
      'No need for personalization or speed',
      'Only keyboard-driven interactions matter',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture highlights smaller displays, tighter input constraints, and bursty use on mobile.',
      'Users also expect fast and streamlined experiences.',
      'These constraints shape visual design choices directly.',
    ],
    conceptSummary: 'Mobile visual design must account for smaller, faster, more constrained usage contexts.',
  },
  {
    id: 'vdp-guidelines-not-laws',
    kind: 'mcq',
    prompt: 'How should design principles and heuristics be treated according to the lecture?',
    options: [
      'As guidelines, not strict must-haves',
      'As laws that always override context',
      'As optional trivia with no design value',
      'As rules that remove the need for user testing',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture explicitly says these are guidelines.',
      'That means they are useful lenses, not rigid laws.',
      'Context still matters.',
    ],
    conceptSummary: 'Design principles are strong guidelines, not context-free laws.',
  },
]

const ALL_QUESTIONS = {
  foundations: FOUNDATIONS_QUESTIONS,
  'spacing-grouping': SPACING_GROUPING_QUESTIONS,
  simplicity: SIMPLICITY_QUESTIONS,
  crap: CRAP_QUESTIONS,
  hierarchy: HIERARCHY_QUESTIONS,
  'gestalt-platform': GESTALT_PLATFORM_QUESTIONS,
} as const

function pick(subtopic: keyof typeof ALL_QUESTIONS): NetworkingQuestion {
  return randomPick(ALL_QUESTIONS[subtopic])
}

export function generateVdpFoundationsQuestion(): NetworkingQuestion {
  return pick('foundations')
}

export function generateVdpSpacingGroupingQuestion(): NetworkingQuestion {
  return pick('spacing-grouping')
}

export function generateVdpSimplicityQuestion(): NetworkingQuestion {
  return pick('simplicity')
}

export function generateVdpCrapQuestion(): NetworkingQuestion {
  return pick('crap')
}

export function generateVdpHierarchyQuestion(): NetworkingQuestion {
  return pick('hierarchy')
}

export function generateVdpGestaltPlatformQuestion(): NetworkingQuestion {
  return pick('gestalt-platform')
}
