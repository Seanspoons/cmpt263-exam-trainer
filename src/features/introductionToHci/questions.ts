import { randomPick } from '../../lib/random'
import type { NetworkingQuestion } from '../networkingShared/networkingDrills'

const WHAT_IS_HCI_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'intro-hci-definition',
    kind: 'text',
    prompt: 'What is HCI?',
    requiredConcepts: [
      { label: 'Design implementation evaluation', keywords: ['design', 'implementation', 'evaluation'] },
      {
        label: 'Interactive systems for human use',
        keywords: ['interactive computing systems', 'human use', 'interactive systems for human use'],
      },
    ],
    answerDisplay:
      'HCI is the discipline concerned with the design, implementation, and evaluation of interactive computing systems for human use.',
    explanationSteps: [
      'This follows the ACM-style definition emphasized in the lecture.',
      'HCI is not just about visuals; it includes designing, building, and evaluating interactive systems.',
      'The human-use focus is what makes the discipline distinct.',
    ],
    conceptSummary: 'HCI studies and shapes interactive computing systems for human use.',
  },
  {
    id: 'intro-hci-useful-usable',
    kind: 'mcq',
    prompt: 'What is the core concern of HCI in this course framing?',
    options: [
      'Making computers useful and usable',
      'Maximizing programming complexity',
      'Replacing all design with engineering',
      'Focusing only on visual decoration',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture frames HCI as making computers useful and usable for people.',
      'That focus ties interface design to actual human needs and goals.',
      'The course is not about complexity for its own sake.',
    ],
    conceptSummary: 'HCI focuses on making computing systems genuinely useful and usable.',
  },
  {
    id: 'intro-hci-learning-objective',
    kind: 'mcq',
    prompt: 'Which learning objective best matches the introduction lecture?',
    options: [
      'Design useful and usable interfaces for users’ needs',
      'Write the most optimized algorithms possible',
      'Memorize company org charts',
      'Treat users as interchangeable with designers',
    ],
    correctOption: 0,
    explanationSteps: [
      'The intro lecture emphasizes designing for users and their needs.',
      'Usefulness and usability are central from the start.',
      'This frames the rest of the course as human-centered design work.',
    ],
    conceptSummary: 'The course goal is to design useful, usable interfaces that fit user needs.',
  },
]

const UI_UX_INTERACTION_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'intro-ui-definition',
    kind: 'mcq',
    prompt: 'Which statement best defines the user interface?',
    options: [
      'Everything the user encounters and interacts with, including labels, layout, navigation, response, and help',
      'Only the color palette and icons',
      'Only the backend implementation',
      'Only the emotional impact of a product',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture definition of UI is broad and includes many interaction-facing elements.',
      'It includes functionality, content, labels, presentation, layout, navigation, response speed, and help.',
      'UI is broader than appearance alone.',
    ],
    conceptSummary: 'UI includes the full encounter layer of what users see and interact with.',
  },
  {
    id: 'intro-ux-definition',
    kind: 'text',
    prompt: 'What is UX?',
    requiredConcepts: [
      {
        label: 'End-user interaction or broader felt experience',
        keywords: ['end-user interaction', 'felt experience', 'interaction with company', 'services', 'products'],
      },
      { label: 'Broader than UI', keywords: ['broader than ui', 'more than ui', 'beyond ui'] },
    ],
    answerDisplay:
      'UX is the broader felt experience of all aspects of the end-user’s interaction with a company, its services, and its products.',
    explanationSteps: [
      'UX is broader than UI and includes the overall felt experience.',
      'It includes more than on-screen elements alone.',
      'That broader framing is why UI is only one part of UX and HCI.',
    ],
    conceptSummary: 'UX is the broader overall experience, not just the visible interface.',
  },
  {
    id: 'intro-ui-vs-ux-vs-id',
    kind: 'match',
    prompt: 'Match each concept to the best description.',
    pairs: [
      { left: 'UI', right: 'The concrete interface elements and encounter points users interact with' },
      { left: 'UX', right: 'The broader overall felt experience of end-user interaction' },
      { left: 'Interaction Design', right: 'Designing how people communicate and interact in everyday and work life' },
    ],
    explanationSteps: [
      'UI is one element within the broader UX/HCI landscape.',
      'Interaction design extends beyond surface interface widgets.',
      'These distinctions are fundamental compare-and-contrast exam material.',
    ],
    conceptSummary: 'UI is narrower than UX, while interaction design focuses on the interaction itself.',
  },
  {
    id: 'intro-ui-only-one-element',
    kind: 'mcq',
    prompt: 'Which statement is correct about UI in this course?',
    options: [
      'UI is only one element of HCI and UX',
      'UI and UX are identical terms',
      'UI matters only after implementation',
      'UI excludes navigation and response time',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture explicitly distinguishes UI from the broader concepts of UX and HCI.',
      'UI is important, but it is not the whole story.',
      'This helps avoid oversimplifying design work to just screens.',
    ],
    conceptSummary: 'UI is a component within broader HCI and UX concerns.',
  },
]

const USER_CENTERED_DESIGN_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'intro-ucd-definition',
    kind: 'text',
    prompt: 'What is user-centered design?',
    requiredConcepts: [
      { label: 'Iterative', keywords: ['iterative', 'iteration'] },
      { label: 'Focus on users and needs', keywords: ['users', 'user needs', 'focus on users', 'users needs'] },
    ],
    answerDisplay:
      'User-centered design is an iterative design process that focuses on users and their needs in each phase.',
    explanationSteps: [
      'The lecture emphasizes that UCD is iterative rather than one-shot.',
      'Users and their needs stay central throughout the process.',
      'This means the design changes as learning about users improves.',
    ],
    conceptSummary: 'User-centered design is iterative and keeps user needs central in every phase.',
  },
  {
    id: 'intro-ucd-iterative',
    kind: 'mcq',
    prompt: 'Why is user-centered design described as iterative?',
    options: [
      'Because designers revisit and refine the design as they learn more about users',
      'Because the first design is always final',
      'Because users are only consulted after launch',
      'Because iteration means removing users from the process',
    ],
    correctOption: 0,
    explanationSteps: [
      'Iteration means designing, learning, revising, and repeating.',
      'User feedback and understanding shape later versions.',
      'That makes the process responsive instead of fixed.',
    ],
    conceptSummary: 'Iteration matters because understanding users improves over repeated design cycles.',
  },
  {
    id: 'intro-designer-not-user',
    kind: 'mcq',
    prompt: 'Why is “the designer is not the user” a high-value HCI reminder?',
    options: [
      'Because designers must design for user capabilities and needs rather than their own assumptions',
      'Because designers should ignore users completely',
      'Because users and designers always want the same thing',
      'Because personal taste is enough for interface design',
    ],
    correctOption: 0,
    explanationSteps: [
      'A core warning in HCI is not to treat your own perspective as universal.',
      'Designers must understand users’ capabilities, goals, and contexts.',
      'Ignoring that leads to the designer’s fallacy.',
    ],
    conceptSummary: 'Design should be based on real users, not the designer’s own default perspective.',
  },
  {
    id: 'intro-user-capabilities',
    kind: 'mcq',
    prompt: 'What should designers understand in order to design well?',
    options: [
      'Users’ capabilities and needs',
      'Only their own workflow preferences',
      'Only the implementation framework',
      'Only whether the interface looks novel',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture stresses understanding users, not just systems.',
      'Capabilities and needs affect whether a design is learnable and useful.',
      'This is a user-centered thinking question.',
    ],
    conceptSummary: 'Design quality depends on understanding user capabilities and needs.',
  },
]

const USEFUL_USABLE_MEANINGFUL_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'intro-three-goals-match',
    kind: 'match',
    prompt: 'Match each quality to its best meaning.',
    pairs: [
      { left: 'Useful', right: 'Gets the job done effectively and efficiently' },
      { left: 'Usable', right: 'Easy to learn, operate, and remember' },
      { left: 'Meaningful', right: 'Adds value and feels engaging or empowering' },
    ],
    explanationSteps: [
      'The intro lecture emphasizes that technologies should be useful, usable, and meaningful.',
      'These are related but distinct ideas.',
      'Matching them is a common exam-style recognition task.',
    ],
    conceptSummary: 'Useful, usable, and meaningful should be distinguished rather than treated as synonyms.',
  },
  {
    id: 'intro-useful-scenario',
    kind: 'mcq',
    prompt: 'A product technically helps complete the task quickly and correctly. Which quality is most directly highlighted?',
    options: ['Useful', 'Meaningful', 'Artistic', 'External consistency'],
    correctOption: 0,
    explanationSteps: [
      'Useful means the product gets the job done effectively and efficiently.',
      'This is about task support rather than emotional value or learnability alone.',
      'The scenario directly points to usefulness.',
    ],
    conceptSummary: 'Useful means the product actually helps the job get done well.',
  },
  {
    id: 'intro-usable-scenario',
    kind: 'mcq',
    prompt: 'A system is easy to learn, operate, and remember. Which quality is this?',
    options: ['Usable', 'Meaningful', 'Purely artistic', 'Engineering-only'],
    correctOption: 0,
    explanationSteps: [
      'The lecture defines usable in terms of ease of learning, operating, and remembering.',
      'This is different from whether the system solves the right problem.',
      'It is also different from whether the experience feels valuable or empowering.',
    ],
    conceptSummary: 'Usable focuses on the ease of using and remembering the system.',
  },
  {
    id: 'intro-meaningful-scenario',
    kind: 'mcq',
    prompt: 'A system adds value and feels engaging and empowering to the user. Which quality is this?',
    options: ['Meaningful', 'Usable', 'Utility only', 'Internal consistency'],
    correctOption: 0,
    explanationSteps: [
      'Meaningful is about adding value and having a richer positive significance to users.',
      'It is more than pure task completion.',
      'This helps distinguish it from usefulness and usability.',
    ],
    conceptSummary: 'Meaningful refers to value, engagement, and empowerment.',
  },
]

const GOOD_POOR_DESIGN_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'intro-poor-design-frustration',
    kind: 'match',
    prompt: 'Match each poor-design consequence to what makes it frustrating.',
    pairs: [
      { left: 'Hard to understand', right: 'Users cannot quickly figure out what the interface means' },
      { left: 'Hard to learn', right: 'New users struggle to become competent with the system' },
      { left: 'Hard to remember', right: 'Users forget how to use it after time away' },
      { left: 'Error prone', right: 'The interface leads users into mistakes or makes them hard to avoid' },
    ],
    explanationSteps: [
      'The lecture explains poor designs as frustrating because they are hard to understand, learn, remember, and are error prone.',
      'These are concrete reasons design quality matters.',
      'They connect directly to later usability topics.',
    ],
    conceptSummary: 'Poor interfaces frustrate users by creating cognitive and operational difficulty.',
  },
  {
    id: 'intro-good-design-effort',
    kind: 'mcq',
    prompt: 'Which statement best matches the lecture’s framing of good interfaces?',
    options: [
      'Good interfaces require real design effort and are not trivial',
      'Good interfaces emerge automatically once code compiles',
      'Good interfaces only matter for entertainment apps',
      'Good interfaces are mostly accidental',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture pushes against the idea that interface design is easy or secondary.',
      'Good interaction design requires deliberate effort.',
      'That is part of why HCI matters as its own discipline.',
    ],
    conceptSummary: 'Good interfaces are designed intentionally, not stumbled into.',
  },
  {
    id: 'intro-why-hci-matters',
    kind: 'mcq',
    prompt: 'Why does HCI matter?',
    options: [
      'Because interface quality affects whether technology is understandable, usable, and valuable to people',
      'Because users should adapt completely to systems',
      'Because design is less important than code in all cases',
      'Because every user behaves identically',
    ],
    correctOption: 0,
    explanationSteps: [
      'HCI matters because poor design creates real friction and failure for people.',
      'Useful, usable, meaningful systems do not happen automatically.',
      'The discipline exists because human interaction quality changes outcomes.',
    ],
    conceptSummary: 'HCI matters because the quality of interaction changes whether technology works for people.',
  },
]

const COMPARISONS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'intro-design-vs-engineering',
    kind: 'match',
    prompt: 'Match each field to the lecture’s comparison.',
    pairs: [
      { left: 'Engineering', right: 'Makes mostly-known outcomes possible' },
      { left: 'Design', right: 'Envisions new possibilities and decides what outcome should result' },
      { left: 'Design process', right: 'Keeps humans as central actors in the loop' },
    ],
    explanationSteps: [
      'The lecture contrasts engineering with design rather than treating them as identical.',
      'Engineering often realizes known outcomes; design shapes what should exist.',
      'Humans stay central in the design loop.',
    ],
    conceptSummary: 'Design decides what should be created; engineering makes outcomes possible.',
  },
  {
    id: 'intro-design-vs-art',
    kind: 'mcq',
    prompt: 'How does design differ from art in the lecture framing?',
    options: [
      'Design is constrained by usefulness and usability; art is not restricted in the same way',
      'Design never involves creativity',
      'Art must always solve a user task efficiently',
      'There is no meaningful difference between them',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture contrasts design and art through their constraints.',
      'Design must care about usefulness and usability.',
      'Art is not bound by those requirements in the same way.',
    ],
    conceptSummary: 'Design is constrained by use and usability in ways art is not.',
  },
  {
    id: 'intro-design-hard',
    kind: 'mcq',
    prompt: 'Which is NOT one of the lecture reasons design is hard?',
    options: [
      'Because every user is identical and predictable',
      'Because everyone is different',
      'Because contexts of use differ',
      'Because people appropriate technology unexpectedly',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture explicitly says design is hard because people differ and contexts vary.',
      'Unexpected appropriation of technology also complicates design.',
      'The false statement is that everyone is identical and predictable.',
    ],
    conceptSummary: 'Design is hard because users, contexts, and real-world appropriation are variable.',
  },
]

const ALL_QUESTIONS = {
  'what-is-hci': WHAT_IS_HCI_QUESTIONS,
  'ui-ux-interaction': UI_UX_INTERACTION_QUESTIONS,
  'user-centered-design': USER_CENTERED_DESIGN_QUESTIONS,
  'useful-usable-meaningful': USEFUL_USABLE_MEANINGFUL_QUESTIONS,
  'good-vs-poor-design': GOOD_POOR_DESIGN_QUESTIONS,
  comparisons: COMPARISONS_QUESTIONS,
} as const

function pick(subtopic: keyof typeof ALL_QUESTIONS): NetworkingQuestion {
  return randomPick(ALL_QUESTIONS[subtopic])
}

export function generateWhatIsHciQuestion(): NetworkingQuestion {
  return pick('what-is-hci')
}

export function generateUiUxInteractionQuestion(): NetworkingQuestion {
  return pick('ui-ux-interaction')
}

export function generateUserCenteredDesignQuestion(): NetworkingQuestion {
  return pick('user-centered-design')
}

export function generateUsefulUsableMeaningfulQuestion(): NetworkingQuestion {
  return pick('useful-usable-meaningful')
}

export function generateGoodPoorDesignQuestion(): NetworkingQuestion {
  return pick('good-vs-poor-design')
}

export function generateIntroComparisonsQuestion(): NetworkingQuestion {
  return pick('comparisons')
}
