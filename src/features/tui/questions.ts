import { randomPick } from '../../lib/random'
import type { NetworkingQuestion } from '../networkingShared/networkingDrills'

const FOUNDATIONS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'tui-definition',
    kind: 'mcq',
    prompt: 'What is a tangible user interface (TUI)?',
    options: [
      'A system where digital information or control is represented through physical artifacts',
      'A questionnaire completed with pen and paper in a classroom',
      'Any interface that includes a touchscreen display surface',
      'A statistics dashboard used to summarize usability study metrics',
    ],
    correctOption: 0,
    explanationSteps: [
      'TUIs use tangible representation of digital information or control.',
      'The physical form is part of the interaction, not just decoration.',
      'This distinguishes TUIs from purely screen-based interfaces.',
    ],
    conceptSummary: 'TUI = tangible representation of digital information or controls.',
  },
  {
    id: 'tui-graspable',
    kind: 'mcq',
    prompt: 'Which concept is most closely associated with Fitzmaurice in this unit?',
    options: ['Graspable Interfaces', 'Tangible Bits', 'Radical Atoms', 'A/B Testing'],
    correctOption: 0,
    explanationSteps: [
      'Fitzmaurice is associated with Graspable Interfaces.',
      'Ishii and Ullmer are associated with Tangible Bits.',
      'Radical Atoms is a later vision for dynamic physical-digital materials.',
    ],
    conceptSummary: 'Fitzmaurice is linked to Graspable Interfaces.',
  },
  {
    id: 'tui-tangible-bits',
    kind: 'mcq',
    prompt: 'Which pair is associated with Tangible Bits?',
    options: ['Ishii and Ullmer', 'Brignull and Gray', 'Fitzmaurice and Nielsen', 'Fitts and GOMS'],
    correctOption: 0,
    explanationSteps: [
      'Tangible Bits is associated with Ishii and Ullmer.',
      'It helped define a major HCI direction linking atoms and bits.',
      'This is one of the named-history recognition items for TUI.',
    ],
    conceptSummary: 'Tangible Bits is associated with Ishii and Ullmer.',
  },
]

const CORE_CONCEPT_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'tui-radical-atoms',
    kind: 'mcq',
    prompt: 'What does Radical Atoms aim to push toward?',
    options: [
      'Physical materials that can dynamically embody digital information and form',
      'Smaller questionnaire scales for faster post-study measurement',
      'Only faster mouse pointing and target acquisition performance',
      'Removing physicality from interfaces entirely in future systems',
    ],
    correctOption: 0,
    explanationSteps: [
      'Radical Atoms imagines dynamic physical forms that can change with digital state.',
      'It extends the physical-digital connection beyond static tangible objects.',
      'The vision is more ambitious than basic tangible controls.',
    ],
    conceptSummary: 'Radical Atoms imagines dynamic physical embodiment of digital information.',
  },
  {
    id: 'tui-epistemic-actions',
    kind: 'mcq',
    prompt: 'What are epistemic actions in the context of TUI?',
    options: [
      'Physical actions that help people think, understand, or simplify a problem',
      'Actions used only to submit questionnaire results after testing',
      'Hidden actions that manipulate users into unwanted decisions',
      'Keyboard shortcuts designed only for expert desktop users',
    ],
    correctOption: 0,
    explanationSteps: [
      'Epistemic actions are performed to aid cognition, not only to directly complete a task.',
      'Moving physical objects can help externalize thinking and reduce mental load.',
      'This is one reason TUIs can support reasoning well.',
    ],
    conceptSummary: 'Epistemic actions are actions people take to help themselves think.',
  },
  {
    id: 'tui-constraints-representation',
    kind: 'match',
    prompt: 'Match each TUI concept to its best description.',
    pairs: [
      { left: 'Physical constraints', right: 'The form of objects limits or guides possible actions' },
      { left: 'Tangible representation', right: 'The problem or data are represented physically' },
      { left: 'Epistemic action', right: 'Manipulating objects helps offload or structure thinking' },
    ],
    explanationSteps: [
      'These concepts explain why TUIs can change how people think and act.',
      'Physical form is not incidental; it shapes cognition and behavior.',
      'Matching them helps separate related but distinct ideas.',
    ],
    conceptSummary: 'TUI concepts often connect physical form, representation, and cognition.',
  },
]

const STRENGTH_LIMIT_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'tui-strengths',
    kind: 'match',
    prompt: 'Match each TUI strength to the best idea.',
    pairs: [
      { left: 'Collaboration', right: 'Multiple people can gather around and manipulate shared artifacts' },
      { left: 'Direct interaction', right: 'People act on physical objects rather than only abstract controls' },
      { left: 'Situatedness', right: 'Interaction can be grounded in a physical environment or task context' },
    ],
    explanationSteps: [
      'TUIs can support collaboration, direct interaction, tangible thinking, and situated use.',
      'These strengths often come from the physical presence of artifacts.',
      'They are reasons TUIs remain attractive in certain domains.',
    ],
    conceptSummary: 'TUI strengths come from physicality, shared space, and embodied interaction.',
  },
  {
    id: 'tui-limitations',
    kind: 'mcq',
    prompt: 'Which is a common limitation of TUIs?',
    options: [
      'Scalability and limited malleability compared with purely digital interfaces',
      'They cannot support any collaboration',
      'They are always cheaper to build than screen interfaces',
      'They eliminate physical fatigue',
    ],
    correctOption: 0,
    explanationSteps: [
      'Physical artifacts do not scale or reconfigure as easily as software-only elements.',
      'TUIs can also involve fatigue during extended physical interaction.',
      'These are tradeoffs, not reasons the approach is useless.',
    ],
    conceptSummary: 'TUIs offer physical strengths but face scalability, malleability, and fatigue limits.',
  },
  {
    id: 'tui-domain-choice',
    kind: 'mcq',
    prompt:
      'Which scenario best fits a TUI strength?',
    options: [
      'A collaborative tabletop system where teams manipulate physical tokens to reason about spatial layouts',
      'A hidden subscription upsell flow',
      'A benchmark-only questionnaire study',
      'A purely textual command history',
    ],
    correctOption: 0,
    explanationSteps: [
      'TUIs are well suited to collaborative, spatial, embodied problem solving.',
      'Physical tokens can make the problem more tangible and shared.',
      'The other options do not reflect the core TUI value proposition.',
    ],
    conceptSummary: 'TUIs are especially useful when physical representation supports shared reasoning.',
  },
]

const ALL_QUESTIONS = {
  foundations: FOUNDATIONS_QUESTIONS,
  concepts: CORE_CONCEPT_QUESTIONS,
  'strengths-limitations': STRENGTH_LIMIT_QUESTIONS,
} as const

function pick(subtopic: keyof typeof ALL_QUESTIONS): NetworkingQuestion {
  return randomPick(ALL_QUESTIONS[subtopic])
}

export function generateTuiFoundationQuestion(): NetworkingQuestion {
  return pick('foundations')
}

export function generateTuiConceptQuestion(): NetworkingQuestion {
  return pick('concepts')
}

export function generateTuiStrengthQuestion(): NetworkingQuestion {
  return pick('strengths-limitations')
}
