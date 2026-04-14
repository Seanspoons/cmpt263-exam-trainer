import { randomPick } from '../../lib/random'
import type { NetworkingQuestion } from '../networkingShared/networkingDrills'

const FOUNDATIONS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'mfp-definition',
    kind: 'text',
    prompt: 'What is a medium-fidelity prototype?',
    requiredConcepts: [
      { label: 'Similar medium or device', keywords: ['similar medium', 'device', 'simulator', 'closer to final'] },
      { label: 'Some but not all features', keywords: ['some but not all features', 'partial functionality', 'automation'] },
    ],
    answerDisplay:
      'A medium-fidelity prototype puts ideas into a medium similar to the final design, with some but not all features implemented and some automation instead of everything being manual.',
    explanationSteps: [
      'Medium-fidelity prototypes move closer to the final medium than rough sketches do.',
      'They are still partial and selective rather than fully complete.',
      'That makes them useful for walkthroughs and targeted evaluation.',
    ],
    conceptSummary: 'MFPs are closer to the final medium and behavior, but still partial.',
  },
  {
    id: 'mfp-role',
    kind: 'mcq',
    prompt: 'What are medium-fidelity prototypes mainly used for in the lecture?',
    options: [
      'Fine-tuning interface design and supporting heuristic evaluation or usability testing',
      'Replacing all final implementation work and production engineering',
      'Avoiding redesign even after evaluation reveals real problems',
      'Only creating artistic concept posters for stakeholder presentations',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture places medium fidelity after early ideation and before finished implementation.',
      'It is useful for redesign cycles informed by evaluation.',
      'That includes heuristic evaluation and usability testing.',
    ],
    conceptSummary: 'MFPs help refine design through evaluation and redesign.',
  },
  {
    id: 'mfp-methods-match',
    kind: 'match',
    prompt: 'Match each medium-fidelity method to its description.',
    pairs: [
      { left: 'Scripted simulation', right: 'Interactive prototype that mainly works along a predefined path' },
      { left: 'Wizard of Oz', right: 'Human secretly fakes hard-to-build functionality' },
      { left: 'UI builder', right: 'Tool-based prototype using widgets and screen design software' },
    ],
    explanationSteps: [
      'The lecture highlights these as core medium-fidelity approaches.',
      'All three give more realistic interaction than hand sketches.',
      'They differ in how the interaction is produced.',
    ],
    conceptSummary: 'MFPs commonly use scripted simulations, UI builders, and Wizard of Oz setups.',
  },
  {
    id: 'mfp-walkthrough-scope',
    kind: 'mcq',
    prompt: 'Why do medium-fidelity prototypes often support only a few versions or scenarios?',
    options: [
      'Because they usually narrow down to a few promising directions and specific walkthroughs',
      'Because medium fidelity forbids real user input or interaction entirely',
      'Because they must model the entire final system in full detail',
      'Because rough sketches are usually more detailed than medium fidelity',
    ],
    correctOption: 0,
    explanationSteps: [
      'At medium fidelity, teams have usually already narrowed the field.',
      'The prototype is often designed to support a specific scenario or task flow.',
      'This keeps scope manageable while increasing realism.',
    ],
    conceptSummary: 'MFPs tend to focus on a narrowed set of promising scenarios.',
  },
]

const SCRIPTED_SIMULATION_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'mfp-scripted-simulation-definition',
    kind: 'text',
    prompt: 'What is a scripted simulation?',
    requiredConcepts: [
      { label: 'Tight script or predefined path', keywords: ['tight script', 'specific task flow', 'predefined path'] },
      { label: 'Interactive but deviations may fail', keywords: ['interactive', 'responds to input', 'deviate may fail', 'may not work'] },
    ],
    answerDisplay:
      'A scripted simulation is an interactive prototype built around a tight predefined task path, where the prototype responds along that script but may fail or appear unresponsive if the user deviates.',
    explanationSteps: [
      'The key idea is that the interaction is partly real but only for the intended path.',
      'It can look convincing when the user follows the scenario.',
      'Outside that path, behavior may break down.',
    ],
    conceptSummary: 'Scripted simulations are interactive but usually only along a predefined scenario path.',
  },
  {
    id: 'mfp-scripted-simulation-scenario',
    kind: 'mcq',
    prompt: 'A clickable shopping mockup works only when the participant scans the fleece item used in the script. What method is this?',
    options: ['Scripted simulation', 'Paper prototyping', 'A/B testing', 'Pluralistic walkthrough'],
    correctOption: 0,
    explanationSteps: [
      'The lecture uses this type of example to show script dependence.',
      'The prototype appears interactive but only supports the intended path.',
      'That is the defining characteristic of scripted simulation.',
    ],
    conceptSummary: 'If only the scripted path works, the prototype is a scripted simulation.',
  },
  {
    id: 'mfp-script-deviation',
    kind: 'mcq',
    prompt: 'Why can scripted simulations feel broken when the participant goes off-script?',
    options: [
      'Because the prototype was built to support a narrow predefined task rather than every possible action',
      'Because all medium-fidelity prototypes completely ban interactivity',
      'Because the user should never touch the prototype interface directly',
      'Because the final production system is already complete and fixed',
    ],
    correctOption: 0,
    explanationSteps: [
      'Scripted simulations prioritize one scenario over general completeness.',
      'That is what keeps them practical and fast.',
      'The limitation appears when users explore outside the intended flow.',
    ],
    conceptSummary: 'Scripted simulations trade breadth for realistic support of one chosen path.',
  },
  {
    id: 'mfp-scripted-transition',
    kind: 'mcq',
    prompt: 'Which statement best fits the lecture’s view of scripted simulations?',
    options: [
      'They can use media tools and simple inputs to trigger transitions that resemble a working system',
      'They must always be purely hand-drawn on paper',
      'They require every button to work fully',
      'They are identical to heuristic evaluation',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture notes that media-based storyboards can become interactive scripted simulations.',
      'Transitions are often triggered by simple inputs.',
      'This creates a more final-like feel without full implementation.',
    ],
    conceptSummary: 'Scripted simulations can look interactive and realistic without being fully complete.',
  },
]

const WIZARD_OF_OZ_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'mfp-woz-definition',
    kind: 'text',
    prompt: 'What is Wizard of Oz prototyping?',
    requiredConcepts: [
      { label: 'Person behind the scenes', keywords: ['person controls', 'human behind the scenes', 'fake functionality'] },
      { label: 'User thinks it is real', keywords: ['user thinks it is real', 'participant believes', 'system does not exist'] },
    ],
    answerDisplay:
      'Wizard of Oz prototyping is when a hidden person controls or fakes functionality so the participant believes they are interacting with a real working system.',
    explanationSteps: [
      'The central feature is hidden human control.',
      'This is useful when the real functionality is difficult or expensive to build.',
      'The participant should not know it is being faked during the session.',
    ],
    conceptSummary: 'Wizard of Oz uses hidden human control to simulate an unbuilt system.',
  },
  {
    id: 'mfp-woz-use-case',
    kind: 'mcq',
    prompt: 'When is Wizard of Oz especially useful?',
    options: [
      'When a feature is expensive to build but you want to test whether the idea is good first',
      'When the full production system is already complete',
      'When no human can monitor the test at all',
      'When the participant must know every internal implementation detail',
    ],
    correctOption: 0,
    explanationSteps: [
      'Wizard of Oz helps test best-case design ideas before full engineering effort.',
      'It is common for intelligent, natural-language, or future-facing features.',
      'This keeps exploration possible under limited time or resources.',
    ],
    conceptSummary: 'Wizard of Oz is useful when building the real feature is costly, premature, or not yet possible.',
  },
  {
    id: 'mfp-woz-scenario',
    kind: 'mcq',
    prompt: 'A hidden researcher manually generates the speech assistant’s replies while the participant thinks the assistant is automatic. What is this?',
    options: ['Wizard of Oz', 'Scripted simulation', 'Card sorting', 'Cognitive walkthrough'],
    correctOption: 0,
    explanationSteps: [
      'The hidden human control is the giveaway.',
      'The participant believes the system is authentic.',
      'That is the defining setup of Wizard of Oz.',
    ],
    conceptSummary: 'Hidden human control of an apparently autonomous system is Wizard of Oz.',
  },
  {
    id: 'mfp-woz-requirement',
    kind: 'mcq',
    prompt: 'Which requirement matters most for Wizard of Oz to work as intended?',
    options: [
      'The interaction should feel authentic and the participant should not know it is being faked',
      'The participant should watch the wizard operating the system openly',
      'The system must already be fully implemented before testing begins',
      'The prototype should avoid responding to user actions during the study',
    ],
    correctOption: 0,
    explanationSteps: [
      'If the illusion breaks, the method no longer tests the same thing.',
      'Authenticity is central because the goal is to evaluate the experience of the proposed feature.',
      'This is why the hidden nature of the wizard matters.',
    ],
    conceptSummary: 'Wizard of Oz depends on believable hidden simulation.',
  },
]

const FIDELITY_COMPARISON_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'mfp-hfp-definition',
    kind: 'mcq',
    prompt: 'Which description best matches a high-fidelity prototype?',
    options: [
      'A prototype that nearly looks and behaves like the final design',
      'A rough hand-drawn concept with no automation or realistic behavior',
      'A method with no interface representation or interaction surface',
      'A requirements document used without any prototype representation',
    ],
    correctOption: 0,
    explanationSteps: [
      'High-fidelity prototypes are the closest to the final product.',
      'They use final-like materials, content, and interaction.',
      'That realism is powerful but costly.',
    ],
    conceptSummary: 'HFPs are nearly final in look and behavior.',
  },
  {
    id: 'mfp-lfp-vs-hfp',
    kind: 'match',
    prompt: 'Match each fidelity level to its tradeoff.',
    pairs: [
      { left: 'LFP', right: 'Cheap to revise and invites criticism, but weak for detailed flow and error checking' },
      { left: 'HFP', right: 'Supports realistic evaluation, but is expensive and harder to change' },
    ],
    explanationSteps: [
      'The lecture contrasts LFP and HFP as a speed-versus-realism tradeoff.',
      'Low fidelity is better for broad exploration.',
      'High fidelity is better for realistic detailed feedback.',
    ],
    conceptSummary: 'LFPs favor cheap exploration; HFPs favor realism at higher cost.',
  },
  {
    id: 'mfp-hfp-risk',
    kind: 'mcq',
    prompt: 'Which is a common drawback of high-fidelity prototypes?',
    options: [
      'Users or managers may think the design is basically finished',
      'They make comparison across alternatives easier than LFPs',
      'They are easier to replace than sketches',
      'They avoid all cost and time pressure',
    ],
    correctOption: 0,
    explanationSteps: [
      'High realism can create unrealistic expectations.',
      'People may assume the design is nearly done even when major changes remain possible.',
      'That is one reason high fidelity should be used intentionally.',
    ],
    conceptSummary: 'HFP realism can create false expectations that the design is already finished.',
  },
  {
    id: 'mfp-fidelity-classification',
    kind: 'mcq',
    prompt: 'A prototype runs on a phone simulator, supports one realistic checkout flow, and automates some interactions but not all features. Which fidelity level fits best?',
    options: ['Medium fidelity', 'Low fidelity', 'No fidelity', 'Final product'],
    correctOption: 0,
    explanationSteps: [
      'The prototype is closer to the final medium than sketches are.',
      'It supports some automation and realistic interaction.',
      'But it is still partial rather than near-finished.',
    ],
    conceptSummary: 'A partial but realistic device-based walkthrough is typical medium fidelity.',
  },
]

const PROTOTYPE_TYPES_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'mfp-horizontal-definition',
    kind: 'text',
    prompt: 'What is a horizontal prototype?',
    requiredConcepts: [
      { label: 'Many features or breadth', keywords: ['many features', 'broad', 'breadth'] },
      { label: 'Shallow functionality', keywords: ['shallow functionality', 'limited depth', 'shallow'] },
    ],
    answerDisplay:
      'A horizontal prototype shows many features broadly, but each one has only shallow or limited functionality.',
    explanationSteps: [
      'Horizontal prototypes emphasize breadth.',
      'They are useful for overview and prioritization.',
      'They are not meant to deeply simulate one workflow.',
    ],
    conceptSummary: 'Horizontal prototypes cover many features shallowly.',
  },
  {
    id: 'mfp-vertical-definition',
    kind: 'text',
    prompt: 'What is a vertical prototype?',
    requiredConcepts: [
      { label: 'Few features or narrow scope', keywords: ['few features', 'narrow', 'depth'] },
      { label: 'Detailed deep functionality', keywords: ['detailed functionality', 'deep workflow', 'deep'] },
    ],
    answerDisplay:
      'A vertical prototype focuses on a narrow part of the system but implements that workflow in more realistic depth.',
    explanationSteps: [
      'Vertical prototypes emphasize depth instead of breadth.',
      'They are useful for evaluating one realistic part of the experience.',
      'This makes them strong for detailed UX questions.',
    ],
    conceptSummary: 'Vertical prototypes go deep on a small part of the system.',
  },
  {
    id: 'mfp-horizontal-scenario',
    kind: 'mcq',
    prompt: 'Many homepage features are clickable, but most do not go beyond the first screen. What prototype type is this?',
    options: ['Horizontal prototype', 'Vertical prototype', 'Local prototype', 'Wizard of Oz'],
    correctOption: 0,
    explanationSteps: [
      'The interface exposes many features but shallowly.',
      'That is the classic breadth-without-depth pattern.',
      'The lecture uses this as a horizontal prototype idea.',
    ],
    conceptSummary: 'Broad coverage with shallow functionality is horizontal prototyping.',
  },
  {
    id: 'mfp-vertical-scenario',
    kind: 'mcq',
    prompt: 'A shopping prototype lets users fully complete checkout, but only for two products. What prototype type is this?',
    options: ['Vertical prototype', 'Horizontal prototype', 'Paper sketch', 'Survey prototype'],
    correctOption: 0,
    explanationSteps: [
      'Only a narrow slice of the system is implemented.',
      'Within that slice, the experience is more complete and realistic.',
      'That is depth-focused vertical prototyping.',
    ],
    conceptSummary: 'Narrow but deep workflow support is vertical prototyping.',
  },
  {
    id: 'mfp-t-local-match',
    kind: 'match',
    prompt: 'Match each prototype type to its description.',
    pairs: [
      { left: 'T prototype', right: 'Much of the interface is shallow, but one or a few parts are developed deeply' },
      { left: 'Local prototype', right: 'Focuses on one feature at one step in a task flow to compare design alternatives' },
    ],
    explanationSteps: [
      'T and local prototypes are more selective discount views of the full system.',
      'A T prototype mixes broad shallowness with one deep area.',
      'A local prototype zooms in even more tightly on one feature-step intersection.',
    ],
    conceptSummary: 'T prototypes mix breadth with one deep area; local prototypes isolate one focused design point.',
  },
]

const TOOLS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'mfp-ui-builders',
    kind: 'mcq',
    prompt: 'Which set contains examples of interface prototyping tools named in the lecture?',
    options: [
      'Balsamiq, Figma, Axure, InVision, Sketch, Adobe XD',
      'SPSS, R, Excel, MATLAB',
      'Git, Docker, Kubernetes',
      'Maze, QUIS, UEQ, TCPS 2',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture lists several common prototyping tools.',
      'They are useful for polished look-and-feel exploration.',
      'They are still constrained by the components the tool offers.',
    ],
    conceptSummary: 'Many UI builder tools support medium-fidelity interface prototyping.',
  },
  {
    id: 'mfp-balsamiq-basics',
    kind: 'match',
    prompt: 'Match each Balsamiq concept to its role.',
    pairs: [
      { left: 'UI Element', right: 'A standard interface widget or building block' },
      { left: 'Canvas', right: 'The grid-lined working area' },
      { left: 'UI Library', right: 'The draggable list of available elements' },
      { left: 'Property Inspector', right: 'The panel for alignment, layering, and properties' },
    ],
    explanationSteps: [
      'These are the core Balsamiq basics highlighted in the lecture.',
      'They are concept questions rather than exact click-path questions.',
      'Knowing the parts helps identify the tool and what it is for.',
    ],
    conceptSummary: 'Balsamiq centers on widgets, a canvas, a UI library, and a property inspector.',
  },
  {
    id: 'mfp-figma-purpose',
    kind: 'mcq',
    prompt: 'What is Figma primarily described as in the lecture?',
    options: [
      'A collaborative interface design tool for creating, prototyping, and collaborating in real time',
      'A command-line shell for system administration',
      'A statistical test package only',
      'A paper-only sketching kit',
    ],
    correctOption: 0,
    explanationSteps: [
      'Figma is presented as collaborative and real-time.',
      'It supports a range from low to high fidelity.',
      'That makes it a versatile course tool.',
    ],
    conceptSummary: 'Figma is a collaborative design and prototyping tool.',
  },
  {
    id: 'mfp-figma-organization',
    kind: 'match',
    prompt: 'Match each Figma organization concept to its meaning.',
    pairs: [
      { left: 'Team', right: 'A collaboration space containing multiple projects' },
      { left: 'Project', right: 'A way to organize design files' },
      { left: 'Page', right: 'A way to organize content within a file' },
    ],
    explanationSteps: [
      'The lecture gives a simple hierarchy for how Figma is organized.',
      'This is often tested as recognition rather than tool procedure.',
      'The terms distinguish collaboration scope from file organization.',
    ],
    conceptSummary: 'Figma organizes work through teams, projects, and pages.',
  },
  {
    id: 'mfp-figma-modes',
    kind: 'text',
    prompt: 'What is the difference between design mode and prototype mode in Figma?',
    requiredConcepts: [
      { label: 'Design mode edits properties', keywords: ['design mode', 'properties', 'edit objects', 'selected object'] },
      { label: 'Prototype mode adds interactions', keywords: ['prototype mode', 'interactions', 'triggers', 'transitions'] },
    ],
    answerDisplay:
      'Design mode is for editing object, file, or canvas properties, while prototype mode is for adding interactions, triggers, and transitions.',
    explanationSteps: [
      'The distinction is about static editing versus interactive behavior.',
      'Prototype mode handles flows and presentation settings.',
      'Design mode handles object and layout properties.',
    ],
    conceptSummary: 'Design mode edits the interface; prototype mode connects behavior and interactions.',
  },
]

export function generateMfpFoundationQuestion(): NetworkingQuestion {
  return randomPick(FOUNDATIONS_QUESTIONS)
}

export function generateMfpScriptedSimulationQuestion(): NetworkingQuestion {
  return randomPick(SCRIPTED_SIMULATION_QUESTIONS)
}

export function generateMfpWizardOfOzQuestion(): NetworkingQuestion {
  return randomPick(WIZARD_OF_OZ_QUESTIONS)
}

export function generateMfpFidelityComparisonQuestion(): NetworkingQuestion {
  return randomPick(FIDELITY_COMPARISON_QUESTIONS)
}

export function generateMfpPrototypeTypesQuestion(): NetworkingQuestion {
  return randomPick(PROTOTYPE_TYPES_QUESTIONS)
}

export function generateMfpToolsQuestion(): NetworkingQuestion {
  return randomPick(TOOLS_QUESTIONS)
}
