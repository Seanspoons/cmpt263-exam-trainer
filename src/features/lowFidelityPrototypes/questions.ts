import { randomPick } from '../../lib/random'
import type { NetworkingQuestion } from '../networkingShared/networkingDrills'

const FOUNDATIONS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'lfp-prototype-definition',
    kind: 'text',
    prompt: 'What is a prototype?',
    requiredConcepts: [
      { label: 'Model or manifestation', keywords: ['model', 'manifestation', 'mockup', 'simulation'] },
      { label: 'Used to interact or test suitability', keywords: ['interact', 'explore', 'test suitability'] },
    ],
    answerDisplay:
      'A prototype is a model or manifestation of a design that stakeholders can interact with to explore or test whether it is suitable.',
    explanationSteps: [
      'The lecture treats prototypes as concrete manifestations of a design idea.',
      'They do not need to be final or complete.',
      'Their job is to let people interact with the idea and judge it early.',
    ],
    conceptSummary: 'A prototype is a testable manifestation of a design idea.',
  },
  {
    id: 'lfp-why-prototype',
    kind: 'mcq',
    prompt: 'Which option best captures why designers prototype early?',
    options: [
      'To explore ideas, communicate, and fail quickly without committing too early',
      'To avoid talking to users',
      'To finalize implementation details immediately',
      'To prove the first idea is always best',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture frames prototyping as a way to think, communicate, and test cheaply.',
      'Early prototypes reduce commitment to untested ideas.',
      'They are part of managing design risk.',
    ],
    conceptSummary: 'Early prototypes support exploration, communication, and cheap failure.',
  },
  {
    id: 'lfp-forms-match',
    kind: 'match',
    prompt: 'Match each prototype form to an example named in the lecture.',
    pairs: [
      { left: 'Storyboard', right: 'Series of sketches showing a user progressing through a task' },
      { left: 'Cardboard mock-up', right: 'Physical rough model used to test size or feel' },
      { left: 'PowerPoint slideshow', right: 'Media-based prototype that can simulate screen progression' },
      { left: 'Limited software implementation', right: 'Partially working version with only some features' },
    ],
    explanationSteps: [
      'The lecture emphasizes that prototypes can take many forms.',
      'Some are physical and some are screen-based.',
      'The important idea is fit for purpose, not one fixed format.',
    ],
    conceptSummary: 'Prototypes can be screen-based, physical, or partially implemented.',
  },
  {
    id: 'lfp-fidelity-definition',
    kind: 'text',
    prompt: 'What does fidelity mean in prototyping?',
    requiredConcepts: [
      { label: 'Functionality, detail, or performance', keywords: ['functionality', 'detail', 'performance', 'realism'] },
      { label: 'Relative to final product', keywords: ['relative to final product', 'compared to final design', 'final product'] },
    ],
    answerDisplay:
      'Fidelity is how much functionality, detail, and performance a prototype has relative to the final product.',
    explanationSteps: [
      'Fidelity is about closeness to the final product.',
      'It covers detail and behavior, not just appearance.',
      'Low, medium, and high fidelity are ways of positioning that closeness.',
    ],
    conceptSummary: 'Fidelity measures how close a prototype is to the final product.',
  },
  {
    id: 'lfp-low-fidelity-stage',
    kind: 'mcq',
    prompt: 'When are low-fidelity prototypes most useful in the design process?',
    options: [
      'When brainstorming representations, choosing directions, and roughing out interface design',
      'Only after final implementation is done',
      'Only when pitching to investors',
      'Only for final visual polish',
    ],
    correctOption: 0,
    explanationSteps: [
      'Low-fidelity work is best early when ideas are still fluid.',
      'It helps teams compare directions before investing heavily.',
      'This is why roughness is a strength rather than a weakness at that stage.',
    ],
    conceptSummary: 'LFPs are most useful for early exploration and rough design direction.',
  },
]

const SKETCHING_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'lfp-sketching-value',
    kind: 'mcq',
    prompt: 'Why is sketching a common low-fidelity prototyping method?',
    options: [
      'It needs few resources and helps express, develop, and communicate ideas',
      'It requires specialized fabrication equipment',
      'It guarantees the final design is correct',
      'It removes the need for iteration',
    ],
    correctOption: 0,
    explanationSteps: [
      'Sketching is cheap, fast, and expressive.',
      'The lecture presents it as a practical way to think through design, not just present it.',
      'That makes it valuable at the ideation stage.',
    ],
    conceptSummary: 'Sketching is cheap and useful for thinking, expressing, and communicating design ideas.',
  },
  {
    id: 'lfp-sketching-not-drawing',
    kind: 'mcq',
    prompt: 'What does the lecture mean by saying sketching is about design, not drawing?',
    options: [
      'You do not need to be artistic for sketching to be useful',
      'Sketches should never include labels or notes',
      'Sketching only matters after engineering starts',
      'Only professional illustrators can ideate well',
    ],
    correctOption: 0,
    explanationSteps: [
      'The point is to externalize ideas, not produce gallery-quality art.',
      'Roughness can even help because it signals that the design is changeable.',
      'That lowers attachment to one version.',
    ],
    conceptSummary: 'Sketching supports design thinking even when the drawings are rough.',
  },
  {
    id: 'lfp-ideation-definition',
    kind: 'text',
    prompt: 'What is ideation?',
    requiredConcepts: [
      { label: 'Coming up with ideas', keywords: ['coming up with ideas', 'generate ideas', 'develop ideas'] },
      { label: 'For design problems', keywords: ['solve design problems', 'design problems', 'design challenge'] },
    ],
    answerDisplay: 'Ideation is the process of coming up with ideas to solve design problems.',
    explanationSteps: [
      'The lecture explicitly ties sketching to ideation and invention.',
      'Ideation is broader than drawing; it is about generating possibilities.',
      'That is why sketching helps designers invent while working.',
    ],
    conceptSummary: 'Ideation means generating ideas to address a design problem.',
  },
  {
    id: 'lfp-sketching-impression',
    kind: 'mcq',
    prompt: 'Why can sketches be easier for teams to critique than polished mockups?',
    options: [
      'They look easily replaceable, so people feel freer to suggest changes',
      'They already look final',
      'They automate all transitions',
      'They eliminate ambiguity completely',
    ],
    correctOption: 0,
    explanationSteps: [
      'The roughness of sketches communicates that the design is still open.',
      'That makes criticism safer and more useful.',
      'Polished visuals can create false confidence or make people hesitate to critique.',
    ],
    conceptSummary: 'Rough sketches invite critique because they signal low commitment.',
  },
  {
    id: 'lfp-sketching-process',
    kind: 'match',
    prompt: 'Match sketching to the design activity it supports.',
    pairs: [
      { left: 'Idea generation', right: 'Producing many possibilities' },
      { left: 'Design elaboration', right: 'Developing promising concepts further' },
      { left: 'Design choices', right: 'Comparing options before selecting a direction' },
      { left: 'Engineering', right: 'Supporting later implementation thinking after concepts are clearer' },
    ],
    explanationSteps: [
      'The lecture places sketching across several stages rather than only at the very beginning.',
      'It supports both generative and refining work.',
      'That flexibility is part of why sketching is so widely used.',
    ],
    conceptSummary: 'Sketching supports idea generation, refinement, comparison, and later engineering thinking.',
  },
]

const ALTERNATIVES_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'lfp-first-idea-risk',
    kind: 'mcq',
    prompt: 'What is the main danger of fixating on the first design idea?',
    options: [
      'You can get stuck on a local maximum instead of exploring better alternatives',
      'You will always create too many prototypes',
      'You will automatically improve accessibility',
      'You will avoid all design tradeoffs',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture uses the local maximum or hill-climbing idea to describe this trap.',
      'Early fixation prevents wider exploration.',
      'That can leave stronger concepts undiscovered.',
    ],
    conceptSummary: 'Fixating on the first idea risks stopping at a merely local maximum.',
  },
  {
    id: 'lfp-right-design-process',
    kind: 'mcq',
    prompt: 'Which approach best matches the lecture’s idea of getting the right design?',
    options: [
      'Generate many ideas, reflect, choose promising ones, develop them in parallel, and iterate the final choice',
      'Pick the first acceptable idea and polish it immediately',
      'Avoid new ideas once one concept is selected',
      'Spend most time pitching the first concept to others',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture emphasizes breadth before commitment.',
      'Parallel development of promising ideas is part of avoiding premature convergence.',
      'Iteration comes after exploration, not instead of it.',
    ],
    conceptSummary: 'Good early design work explores broadly before narrowing and iterating.',
  },
  {
    id: 'lfp-exploring-alternatives-scenario',
    kind: 'mcq',
    prompt: 'A team sketches six checkout layouts before selecting two to refine further. Which concept is this best demonstrating?',
    options: [
      'Exploring alternatives before overcommitting',
      'High-fidelity prototyping',
      'Final implementation',
      'Prototype-free design',
    ],
    correctOption: 0,
    explanationSteps: [
      'The team is deliberately creating multiple alternatives first.',
      'That is exactly the lecture’s recommendation for getting the right design.',
      'The focus is on exploration, not polish.',
    ],
    conceptSummary: 'Generating multiple alternatives helps avoid premature commitment.',
  },
  {
    id: 'lfp-benefits-drawbacks-match',
    kind: 'match',
    prompt: 'Match each sketching characteristic to whether it is a benefit or drawback.',
    pairs: [
      { left: 'Easy to change', right: 'Benefit' },
      { left: 'Hard to envision dynamics', right: 'Drawback' },
      { left: 'Uses cheap materials', right: 'Benefit' },
      { left: 'Does not actually work', right: 'Drawback' },
    ],
    explanationSteps: [
      'Sketching offers speed and flexibility, but it cannot represent everything well.',
      'Dynamics and automation are common weaknesses.',
      'The tradeoff is why different fidelities exist.',
    ],
    conceptSummary: 'Sketching trades cheap flexibility for limited realism and behavior.',
  },
  {
    id: 'lfp-sketching-drawback',
    kind: 'mcq',
    prompt: 'Which is a real drawback of sketching-based LFPs?',
    options: [
      'They often struggle to represent transitions, animations, and dynamic behavior',
      'They are too expensive to revise',
      'They force teams to use final production materials',
      'They require complete automation',
    ],
    correctOption: 0,
    explanationSteps: [
      'Static sketches are strong for ideas and structure but weak for dynamic interaction.',
      'That is one reason teams later move toward medium-fidelity prototypes.',
      'The drawback is about behavioral realism.',
    ],
    conceptSummary: 'Sketching is weak at showing dynamic interaction and transitions.',
  },
]

const STORYBOARD_PAPER_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'lfp-storyboard-definition',
    kind: 'text',
    prompt: 'What is a storyboard in prototyping?',
    requiredConcepts: [
      { label: 'Series of sketches', keywords: ['series of sketches', 'multiple sketches', 'comic strip'] },
      { label: 'Shows task progression', keywords: ['task progression', 'sequence of steps', 'user progresses'] },
    ],
    answerDisplay:
      'A storyboard is a series of sketches showing how a user progresses through a task, like a comic strip of important steps.',
    explanationSteps: [
      'Storyboards focus on sequence and scenario progression.',
      'They can be annotated to explain important details.',
      'This makes them stronger for flow than isolated sketches.',
    ],
    conceptSummary: 'A storyboard shows a sequence of user actions across a task.',
  },
  {
    id: 'lfp-storyboard-scenario',
    kind: 'mcq',
    prompt: 'A rough set of checkout panels with arrows and notes explains what happens from cart to confirmation. What is this most likely?',
    options: ['Storyboard', 'Vertical prototype', 'Wizard of Oz', 'Heuristic evaluation'],
    correctOption: 0,
    explanationSteps: [
      'The scenario emphasizes a sequence of sketched steps with annotations.',
      'That matches storyboarding.',
      'The focus is communicating flow, not building deep interactivity.',
    ],
    conceptSummary: 'Annotated sequences of rough steps are storyboards.',
  },
  {
    id: 'lfp-paper-prototyping',
    kind: 'mcq',
    prompt: 'What is paper prototyping especially good for?',
    options: [
      'Exploring navigation, workflow, content organization, and backtracking',
      'Testing final system performance under load',
      'Simulating only invisible backend logic',
      'Replacing all user testing',
    ],
    correctOption: 0,
    explanationSteps: [
      'Paper prototyping goes beyond isolated sketches by letting teams think through navigation and organization.',
      'It can support both broad concepts and specific features.',
      'Back navigation and next-step logic are especially relevant.',
    ],
    conceptSummary: 'Paper prototyping is useful for navigation, workflow, and content organization.',
  },
  {
    id: 'lfp-paper-swap-scenario',
    kind: 'mcq',
    prompt: 'Paper screens are manually swapped as a participant moves through an app flow. What prototyping technique is being used?',
    options: ['Paper prototyping', 'Fitts’ Law analysis', 'A/B testing', 'GOMS'],
    correctOption: 0,
    explanationSteps: [
      'The manual swapping of paper screens is the classic paper prototyping setup.',
      'It lets teams simulate flow without coding.',
      'Manual manipulation is expected at this fidelity level.',
    ],
    conceptSummary: 'Manually swapping paper screens is paper prototyping.',
  },
  {
    id: 'lfp-real-world-examples',
    kind: 'match',
    prompt: 'Match each real-world example to what it was used to explore.',
    pairs: [
      { left: 'PalmPilot wooden model', right: 'Imagine carrying and handling the concept in physical form' },
      { left: 'Nintendo Wii U cardboard model', right: 'Test how the device would feel in the hands' },
    ],
    explanationSteps: [
      'Both examples show that low-fidelity prototypes can be physical, not just screen sketches.',
      'They are used to test form, feel, and concept plausibility early.',
      'Cheap materials can still answer important questions.',
    ],
    conceptSummary: 'Physical LFPs can test size, feel, and overall concept before detailed build work.',
  },
]

const PITFALLS_TIPS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'lfp-pitfall-polishing',
    kind: 'mcq',
    prompt: 'Which prototyping pitfall is shown when a team spends hours polishing one early rough concept?',
    options: [
      'Overinvesting in a first idea instead of exploring broadly',
      'Using too many alternative concepts',
      'Collecting too much user feedback',
      'Relying too little on realism',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture warns against diving into the first good-looking idea.',
      'Polishing too early increases attachment and wastes time.',
      'The fix is to explore a range first.',
    ],
    conceptSummary: 'Early over-polishing is a prototyping pitfall because it increases fixation.',
  },
  {
    id: 'lfp-purpose-first',
    kind: 'mcq',
    prompt: 'What is the best fix for prototyping without a clear purpose?',
    options: [
      'Start with a specific purpose or design goal for the prototype',
      'Add more colors and realism',
      'Explain the prototype for longer before showing it',
      'Skip iteration and move to implementation',
    ],
    correctOption: 0,
    explanationSteps: [
      'A prototype should answer design questions, not exist for its own sake.',
      'Purpose guides what to include and what to leave out.',
      'That keeps the work focused and cheap.',
    ],
    conceptSummary: 'A good prototype begins with a concrete purpose or design question.',
  },
  {
    id: 'lfp-good-practice-placeholder-data',
    kind: 'mcq',
    prompt: 'Using fictional names, prices, and placeholder content in an LFP is usually:',
    options: [
      'A good practice because low-fidelity work should focus on design questions, not polished content',
      'A sign the prototype is invalid',
      'Required only for high-fidelity work',
      'A major ethics violation',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture recommends fictional data and rough content in LFPs.',
      'This keeps effort low and attention on the design problem.',
      'It also avoids premature polish.',
    ],
    conceptSummary: 'Placeholder content is appropriate in LFPs when it keeps focus on the design question.',
  },
  {
    id: 'lfp-fake-interaction-tip',
    kind: 'mcq',
    prompt: 'What low-fidelity tip is described when a designer uses their hand to mimic the system responding?',
    options: [
      'Fake the interaction manually instead of worrying about real automation',
      'Switch to a finished coded prototype',
      'Avoid showing the prototype to users',
      'Hide all annotations',
    ],
    correctOption: 0,
    explanationSteps: [
      'At low fidelity, manual simulation is acceptable and often useful.',
      'The point is to communicate the design idea cheaply.',
      'You do not need real automation yet.',
    ],
    conceptSummary: 'Manual simulation is a valid LFP technique when automation is unnecessary.',
  },
  {
    id: 'lfp-show-not-overexplain',
    kind: 'mcq',
    prompt: 'Which advice best matches the lecture’s prototyping tips?',
    options: [
      'Show the design with cheap materials and annotations rather than over-explaining it',
      'Make the prototype aesthetically perfect before feedback',
      'Avoid replacing rough versions once started',
      'Use only the final production medium',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture explicitly warns against wasting time pitching instead of showing.',
      'Cheap materials, annotations, and simple demonstrations are enough.',
      'The goal is learning, not polish.',
    ],
    conceptSummary: 'LFPs should communicate ideas quickly rather than over-invest in polish or explanation.',
  },
]

export function generateLfpFoundationQuestion(): NetworkingQuestion {
  return randomPick(FOUNDATIONS_QUESTIONS)
}

export function generateLfpSketchingQuestion(): NetworkingQuestion {
  return randomPick(SKETCHING_QUESTIONS)
}

export function generateLfpAlternativesQuestion(): NetworkingQuestion {
  return randomPick(ALTERNATIVES_QUESTIONS)
}

export function generateLfpStoryboardQuestion(): NetworkingQuestion {
  return randomPick(STORYBOARD_PAPER_QUESTIONS)
}

export function generateLfpPitfallsQuestion(): NetworkingQuestion {
  return randomPick(PITFALLS_TIPS_QUESTIONS)
}
