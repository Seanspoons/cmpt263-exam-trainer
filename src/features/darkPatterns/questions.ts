import { randomPick } from '../../lib/random'
import type { NetworkingQuestion } from '../networkingShared/networkingDrills'

const FOUNDATIONS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'dark-pattern-definition',
    kind: 'text',
    prompt: 'What is a dark pattern?',
    requiredConcepts: [
      { label: 'Manipulative design', keywords: ['deceptive', 'manipulative', 'misleading'] },
      { label: 'Against user interests', keywords: ['against user interests', 'not in the users interest', 'benefit company over user', 'harm users'] },
    ],
    answerDisplay:
      'A dark pattern is a deceptive or manipulative design pattern that leverages psychology against user interests.',
    explanationSteps: [
      'Dark patterns are not just annoying interfaces; they are intentionally manipulative.',
      'They steer users toward outcomes that benefit the service more than the user.',
      'The ethical issue is that the design works against informed, autonomous choice.',
    ],
    conceptSummary: 'Dark patterns weaponize interface design against user interests.',
  },
  {
    id: 'dark-pattern-harm',
    kind: 'mcq',
    prompt: 'Why are dark patterns considered harmful?',
    options: [
      'They exploit psychology to manipulate choices and undermine autonomy',
      'They always increase accessibility',
      'They make all interfaces simpler',
      'They guarantee informed consent',
    ],
    correctOption: 0,
    explanationSteps: [
      'Dark patterns use interface design to pressure or trick users.',
      'This can harm autonomy, privacy, finances, or trust.',
      'The problem is ethical as well as experiential.',
    ],
    conceptSummary: 'Dark patterns are harmful because they manipulate people instead of supporting informed choice.',
  },
  {
    id: 'dark-pattern-infinite-scroll',
    kind: 'mcq',
    prompt: 'How is infinite scrolling often discussed in this unit?',
    options: [
      'As a related engagement trick that can keep users consuming more than intended',
      'As a required accessibility feature',
      'As a type of paired t-test',
      'As a benchmark questionnaire scale',
    ],
    correctOption: 0,
    explanationSteps: [
      'Infinite scrolling is often discussed as a related engagement tactic.',
      'It may not fit every named dark pattern exactly, but it can leverage attention and friction asymmetrically.',
      'The key issue is whether the design supports or exploits the user.',
    ],
    conceptSummary: 'Infinite scrolling is a related engagement trick that can amplify manipulative design.',
  },
]

const BRIGNULL_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'dark-roach-motel',
    kind: 'mcq',
    prompt: 'A site makes it easy to subscribe but difficult to cancel. Which dark pattern is this?',
    options: ['Roach Motel', 'Disguised Ad', 'Bait and Switch', 'Trick Questions'],
    correctOption: 0,
    explanationSteps: [
      'Roach Motel means easy to get in and hard to get out.',
      'The classic example is frictionless signup combined with painful cancellation.',
      'This is related to the easy-in hard-out pattern often discussed with Amazon-like examples.',
    ],
    conceptSummary: 'Roach Motel = easy in, hard out.',
  },
  {
    id: 'dark-hidden-costs',
    kind: 'mcq',
    prompt: 'Extra fees appear only at the final checkout step. Which pattern is this?',
    options: ['Hidden Costs', 'Confirmshaming', 'Privacy Zuckering', 'Misdirection'],
    correctOption: 0,
    explanationSteps: [
      'Hidden Costs conceal part of the true price until the user is already committed.',
      'The late reveal increases psychological pressure to continue.',
      'This exploits sunk cost and momentum.',
    ],
    conceptSummary: 'Hidden Costs delay unpleasant information until users are already invested.',
  },
  {
    id: 'dark-confirmshaming',
    kind: 'mcq',
    prompt:
      'A popup offers “Yes, help me improve” and “No, I enjoy making bad decisions.” Which pattern is this?',
    options: ['Confirmshaming', 'Sneak into Basket', 'Disguised Ad', 'Forced Continuity'],
    correctOption: 0,
    explanationSteps: [
      'Confirmshaming manipulates users with guilt-inducing wording.',
      'The aim is to pressure acceptance by making refusal feel embarrassing or irresponsible.',
      'This is a persuasion-through-shame tactic.',
    ],
    conceptSummary: 'Confirmshaming pressures users with guilt-laden wording.',
  },
  {
    id: 'dark-privacy-zuckering',
    kind: 'mcq',
    prompt: 'A service nudges users into sharing more personal data than they intended. Which named pattern fits?',
    options: ['Privacy Zuckering', 'Bait and Switch', 'Trick Questions', 'Forced Continuity'],
    correctOption: 0,
    explanationSteps: [
      'Privacy Zuckering pushes users into revealing more private information than they expected.',
      'It often relies on confusing settings or social pressure.',
      'The harm centers on privacy and informed consent.',
    ],
    conceptSummary: 'Privacy Zuckering manipulates people into oversharing personal data.',
  },
  {
    id: 'dark-sneak-basket',
    kind: 'mcq',
    prompt: 'An optional add-on is silently added to the cart. Which pattern is this?',
    options: ['Sneak into Basket', 'Misdirection', 'Disguised Ad', 'Bait and Switch'],
    correctOption: 0,
    explanationSteps: [
      'Sneak into Basket means extra products or charges are slipped into the purchase process.',
      'Users may miss the addition until late in checkout.',
      'This exploits inattention and momentum.',
    ],
    conceptSummary: 'Sneak into Basket adds unwanted items without clear, deliberate consent.',
  },
  {
    id: 'dark-bait-switch',
    kind: 'mcq',
    prompt:
      'A control appears to perform one action but actually triggers a different, undesirable result. Which pattern is this?',
    options: ['Bait and Switch', 'Roach Motel', 'Hidden Costs', 'Confirmshaming'],
    correctOption: 0,
    explanationSteps: [
      'Bait and Switch occurs when the user expects one outcome and gets another.',
      'The design exploits learned expectations or interface conventions.',
      'This undermines trust and control.',
    ],
    conceptSummary: 'Bait and Switch violates the user’s expectation about what an action will do.',
  },
  {
    id: 'dark-brignull-match',
    kind: 'match',
    prompt: 'Match each Brignull-style dark pattern to the best description.',
    pairs: [
      { left: 'Disguised Ad', right: 'Looks like content or navigation but is actually advertising' },
      { left: 'Forced Continuity', right: 'Free trial quietly turns into ongoing billing' },
      { left: 'Trick Questions', right: 'Confusing wording makes users agree by mistake' },
      { left: 'Misdirection', right: 'Visual emphasis steers attention away from the less profitable choice' },
    ],
    explanationSteps: [
      'Brignull-style names are best learned through scenario recognition.',
      'These patterns often rely on visual hierarchy, wording, or timing tricks.',
      'Matching helps separate similar-looking patterns.',
    ],
    conceptSummary: 'Know the named dark patterns as scenario labels, not just definitions.',
  },
]

const GRAY_CATEGORY_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'dark-gray-obstruction',
    kind: 'mcq',
    prompt: 'Which Gray et al. category best fits making cancellation unnecessarily difficult?',
    options: ['Obstruction', 'Nagging', 'Sneaking', 'Forced Action'],
    correctOption: 0,
    explanationSteps: [
      'Obstruction makes the undesired-by-company action harder to complete.',
      'Cancellation friction is a classic obstruction tactic.',
      'Roach Motel is one scenario label that often maps into this category.',
    ],
    conceptSummary: 'Obstruction adds friction to choices the company does not want users to make.',
  },
  {
    id: 'dark-gray-sneaking',
    kind: 'mcq',
    prompt: 'Which Gray et al. category best fits hiding added items or fees in a purchase flow?',
    options: ['Sneaking', 'Nagging', 'Forced Action', 'Interface Interference'],
    correctOption: 0,
    explanationSteps: [
      'Sneaking means important information or actions are concealed or slipped past the user.',
      'Adding an item to the cart without clear awareness is a classic example.',
      'This category focuses on covert manipulation.',
    ],
    conceptSummary: 'Sneaking hides or slips things past the user without informed awareness.',
  },
  {
    id: 'dark-gray-interface-interference',
    kind: 'mcq',
    prompt:
      'A privacy-preserving option is tiny and low-contrast while the invasive option is bright and prominent. Which category fits best?',
    options: ['Interface Interference', 'Nagging', 'Obstruction', 'Forced Action'],
    correctOption: 0,
    explanationSteps: [
      'Interface Interference manipulates through visual design and control prominence.',
      'The interface steers users by biasing salience and choice architecture.',
      'This is not just a wording issue; it is a presentation issue.',
    ],
    conceptSummary: 'Interface Interference manipulates by designing unequal visual choice conditions.',
  },
  {
    id: 'dark-gray-match',
    kind: 'match',
    prompt: 'Match each Gray et al. category to the best description.',
    pairs: [
      { left: 'Nagging', right: 'Repeated interruptions pushing the same action' },
      { left: 'Forced Action', right: 'User must do something extra to proceed, like sharing data' },
      { left: 'Obstruction', right: 'Friction is added to discourage a user-preferred action' },
      { left: 'Sneaking', right: 'Important details or actions are concealed or slipped in' },
    ],
    explanationSteps: [
      'Gray et al. groups dark patterns by manipulation mechanism rather than named scenario.',
      'A scenario can often be recognized at both the named-pattern and category levels.',
      'This is a common compare-and-classify exam task.',
    ],
    conceptSummary: 'Gray et al. categories organize dark patterns by how the manipulation works.',
  },
]

const ETHICAL_REDESIGN_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'dark-ethical-redesign',
    kind: 'mcq',
    prompt: 'What is the best ethical redesign for a dark-pattern cancellation flow?',
    options: [
      'Make cancellation as visible and straightforward as sign-up',
      'Hide the cancel option deeper in settings',
      'Add guilt-inducing copy to the cancel button',
      'Require a phone call during business hours only',
    ],
    correctOption: 0,
    explanationSteps: [
      'Ethical redesign reduces asymmetrical friction.',
      'Users should be able to reverse decisions with reasonable effort and clarity.',
      'This respects autonomy instead of trying to trap the user.',
    ],
    conceptSummary: 'Ethical redesign removes manipulative friction and supports clear user choice.',
  },
  {
    id: 'dark-avoid-deception',
    kind: 'mcq',
    prompt: 'Which principle best helps avoid deceptive design?',
    options: [
      'Use transparent choices and align the interface with user interests',
      'Exploit hesitation before users notice',
      'Hide key information until commitment increases',
      'Make the profitable option visually dominant regardless of user benefit',
    ],
    correctOption: 0,
    explanationSteps: [
      'Avoiding deception means supporting informed, reversible, transparent decisions.',
      'Design should not depend on tricking or pressuring users.',
      'This is the opposite of dark-pattern logic.',
    ],
    conceptSummary: 'Transparent, user-aligned design is the antidote to dark patterns.',
  },
]

const ALL_QUESTIONS = {
  foundations: FOUNDATIONS_QUESTIONS,
  brignull: BRIGNULL_QUESTIONS,
  categories: GRAY_CATEGORY_QUESTIONS,
  redesign: ETHICAL_REDESIGN_QUESTIONS,
} as const

function pick(subtopic: keyof typeof ALL_QUESTIONS): NetworkingQuestion {
  return randomPick(ALL_QUESTIONS[subtopic])
}

export function generateDarkPatternFoundationQuestion(): NetworkingQuestion {
  return pick('foundations')
}

export function generateBrignullQuestion(): NetworkingQuestion {
  return pick('brignull')
}

export function generateGrayCategoryQuestion(): NetworkingQuestion {
  return pick('categories')
}

export function generateDarkPatternRedesignQuestion(): NetworkingQuestion {
  return pick('redesign')
}
