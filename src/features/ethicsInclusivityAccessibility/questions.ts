import { randomPick } from '../../lib/random'
import type { NetworkingQuestion } from '../networkingShared/networkingDrills'

const RESEARCH_ETHICS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'ethics-human-studies',
    kind: 'mcq',
    prompt: 'What is the baseline rule for experiments involving humans?',
    options: [
      'They always require ethics consideration',
      'They never need ethics review if the interface is simple',
      'Only surveys need ethics consideration',
      'Only statistically significant studies need ethics consideration',
    ],
    correctOption: 0,
    explanationSteps: [
      'Any study involving humans raises ethical questions about consent, welfare, privacy, and fairness.',
      'Ethics is not optional just because the study seems low-risk.',
      'Human-centered computing work still needs research ethics thinking.',
    ],
    conceptSummary: 'All human-participant studies require ethics consideration.',
  },
  {
    id: 'ethics-tcps2-match',
    kind: 'match',
    prompt: 'Match each TCPS 2 principle to its core idea.',
    pairs: [
      { left: 'Respect for Persons', right: 'Honor autonomy and informed choice' },
      { left: 'Concern for Welfare', right: 'Protect well-being, privacy, and broader impacts' },
      { left: 'Justice', right: 'Treat people fairly and distribute burdens and benefits equitably' },
    ],
    explanationSteps: [
      'TCPS 2 is often summarized through three core principles.',
      'Respect for Persons centers autonomy and consent.',
      'Concern for Welfare and Justice broaden ethics beyond consent alone.',
    ],
    conceptSummary: 'Know the three TCPS 2 principles and what each protects.',
  },
  {
    id: 'ethics-respect-persons',
    kind: 'mcq',
    prompt:
      'A study pressures students into participating because the instructor is present and alternatives are unclear. Which TCPS 2 principle is most clearly threatened?',
    options: ['Respect for Persons', 'Justice', 'Novelty', 'Hedonic Quality'],
    correctOption: 0,
    explanationSteps: [
      'Respect for Persons includes meaningful autonomy and voluntary participation.',
      'Pressure or coercion undermines genuine consent.',
      'That makes the issue a direct threat to autonomy.',
    ],
    conceptSummary: 'Respect for Persons is about voluntary, informed, autonomous participation.',
  },
  {
    id: 'ethics-stanford-prison',
    kind: 'mcq',
    prompt: 'Why is the Stanford Prison Experiment often cited in ethics discussions?',
    options: [
      'It illustrates severe harm and poor protection of participant welfare',
      'It is a model example of informed consent done well',
      'It proves all experiments should be unmoderated',
      'It is mainly used to explain Fitts’ Law',
    ],
    correctOption: 0,
    explanationSteps: [
      'The Stanford Prison Experiment is a classic example of major ethical failures in human-subject research.',
      'It highlights harm, poor oversight, and inadequate protection of participants.',
      'The case is remembered as a warning, not a best practice.',
    ],
    conceptSummary: 'The Stanford Prison Experiment is used as an example of serious ethics failures.',
  },
  {
    id: 'ethics-justice',
    kind: 'mcq',
    prompt:
      'A team recruits only a vulnerable group for a risky study because they are easy to access, even though others would be more appropriate. Which principle is most implicated?',
    options: ['Justice', 'Pragmatic Quality', 'Novelty', 'One-tail hypothesis'],
    correctOption: 0,
    explanationSteps: [
      'Justice concerns fair treatment and fair distribution of research burdens and benefits.',
      'Convenience does not justify placing disproportionate burden on a vulnerable group.',
      'This is an inclusion and fairness issue.',
    ],
    conceptSummary: 'Justice addresses fairness in who bears research burdens and who benefits.',
  },
]

const CONSENT_PRIVACY_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'ethics-informed-consent',
    kind: 'mcq',
    prompt: 'What is informed consent?',
    options: [
      'Participants knowingly agree after understanding the study and its implications',
      'Participants are enrolled automatically unless they notice and opt out',
      'Participants are told only what the researcher thinks is necessary',
      'Participants sign a form after the study ends',
    ],
    correctOption: 0,
    explanationSteps: [
      'Informed consent requires that participants understand what they are agreeing to.',
      'That includes purpose, procedures, risks, and voluntary choice.',
      'A signature alone is not enough if understanding or voluntariness is missing.',
    ],
    conceptSummary: 'Informed consent means meaningful, knowledgeable, voluntary agreement.',
  },
  {
    id: 'ethics-privacy-protection',
    kind: 'mcq',
    prompt: 'What is a core expectation for participant data in HCI studies?',
    options: [
      'Private data should be handled securely and with appropriate protection',
      'All raw data should be public by default',
      'Security matters only after publication',
      'Privacy matters only for video data',
    ],
    correctOption: 0,
    explanationSteps: [
      'Privacy protection includes collecting only what is needed and storing it securely.',
      'Researchers must think about confidentiality, retention, and access.',
      'Poor data handling can harm participants even if the study task seems harmless.',
    ],
    conceptSummary: 'Ethical research includes privacy protection and secure data handling.',
  },
  {
    id: 'ethics-texas-vampires',
    kind: 'mcq',
    prompt: 'Why is the Texas Vampires Incident relevant in ethics discussions?',
    options: [
      'It highlights the harms of exposing sensitive identity-related information without protection',
      'It is a classic example of excellent participant debriefing',
      'It demonstrates a perfect accessibility audit',
      'It defines the TCPS 2 principles',
    ],
    correctOption: 0,
    explanationSteps: [
      'The case is often discussed as a warning about privacy, traceability, and unintended harm.',
      'Exposed or linkable information can create real-world consequences for people.',
      'Ethics requires anticipating those downstream risks.',
    ],
    conceptSummary: 'The Texas Vampires Incident is a cautionary example about privacy and traceable harm.',
  },
  {
    id: 'ethics-accountability-traceability',
    kind: 'mcq',
    prompt: 'Why do accountability and traceability matter in ethical design?',
    options: [
      'They help people understand decisions and identify responsibility when harm occurs',
      'They make deception more efficient',
      'They eliminate the need for accessibility',
      'They only matter in physical product design',
    ],
    correctOption: 0,
    explanationSteps: [
      'Accountability means there is clear responsibility for system outcomes.',
      'Traceability helps explain how decisions or actions happened.',
      'Without them, harmful or biased outcomes are harder to challenge or correct.',
    ],
    conceptSummary: 'Accountability and traceability support explanation, responsibility, and correction.',
  },
]

const DESIGN_ETHICS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'ethics-user-autonomy',
    kind: 'mcq',
    prompt: 'Which design principle best resists manipulative or paternalistic interfaces?',
    options: ['User autonomy and control', 'Forced action', 'Obstruction', 'Hidden costs'],
    correctOption: 0,
    explanationSteps: [
      'User autonomy and control means people should be able to make meaningful choices.',
      'Design should support rather than override informed decision-making.',
      'This is a central design ethics principle.',
    ],
    conceptSummary: 'Ethical design should preserve user autonomy and control.',
  },
  {
    id: 'ethics-transparency',
    kind: 'mcq',
    prompt: 'Why is transparency important in design ethics?',
    options: [
      'Users should be able to understand relevant system behavior, choices, and consequences',
      'It hides complexity by withholding information',
      'It means every interface must be visually minimal',
      'It removes the need for consent',
    ],
    correctOption: 0,
    explanationSteps: [
      'Transparency supports informed use and informed consent.',
      'It includes clear communication about what the system is doing and what data it uses.',
      'Opaque systems make ethical scrutiny harder.',
    ],
    conceptSummary: 'Transparency helps users make informed decisions and evaluate system behavior.',
  },
  {
    id: 'ethics-sustainability',
    kind: 'mcq',
    prompt: 'In design ethics, sustainability asks designers to consider what?',
    options: [
      'Longer-term environmental and societal impacts of technology choices',
      'Only whether a study reaches p < 0.05',
      'Only whether users can memorize commands',
      'Only how visually novel a product looks',
    ],
    correctOption: 0,
    explanationSteps: [
      'Ethical design extends beyond immediate usability.',
      'Sustainability asks whether a design’s resource use or broader consequences are responsible over time.',
      'This expands ethics beyond the moment of interaction.',
    ],
    conceptSummary: 'Sustainability considers longer-term environmental and societal effects.',
  },
]

const INCLUSION_ACCESSIBILITY_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'ethics-inclusive-design',
    kind: 'text',
    prompt: 'What is inclusive design?',
    requiredConcepts: [
      { label: 'Diverse users or different needs', keywords: ['diverse users', 'different needs', 'diversity', 'range of users'] },
      { label: 'Designing products or services', keywords: ['design products', 'design services', 'design environments', 'designing'] },
    ],
    answerDisplay:
      'Inclusive design means designing products, services, or environments for diverse users with diverse needs.',
    explanationSteps: [
      'Inclusive design explicitly considers a broad range of users rather than designing for only an assumed average person.',
      'It aims to improve fit across different abilities, backgrounds, and situations.',
      'It is broader than a single accessibility checklist.',
    ],
    conceptSummary: 'Inclusive design optimizes for diversity rather than a narrow default user.',
  },
  {
    id: 'ethics-accessibility-definition',
    kind: 'text',
    prompt: 'What is accessibility in HCI?',
    requiredConcepts: [
      { label: 'People with disabilities', keywords: ['people with disabilities', 'disabled people', 'disability'] },
      { label: 'Use without hindrance', keywords: ['without hindrance', 'without barriers', 'can use', 'usable'] },
    ],
    answerDisplay:
      'Accessibility means designing so people with disabilities can use a system without hindrance or unnecessary barriers.',
    explanationSteps: [
      'Accessibility focuses on whether systems can be used by people with disabilities.',
      'The goal is to reduce barriers, not force people to work around them.',
      'It overlaps with, but is not identical to, inclusive design.',
    ],
    conceptSummary: 'Accessibility removes barriers so people with disabilities can use the system effectively.',
  },
  {
    id: 'ethics-assistive-tech-match',
    kind: 'match',
    prompt: 'Match each assistive technology to the need it supports.',
    pairs: [
      { left: 'Screen reader', right: 'Reads interface content aloud for blind or low-vision users' },
      { left: 'Screen magnifier', right: 'Enlarges interface content for users with low vision' },
      { left: 'Voice input aid', right: 'Lets users issue commands by speech' },
      { left: 'Alternative input device', right: 'Supports interaction when standard mouse or keyboard use is difficult' },
    ],
    explanationSteps: [
      'Assistive technologies help bridge specific barriers that users may face.',
      'Knowing examples is a core recognition task in this unit.',
      'Accessibility design should work with these tools rather than against them.',
    ],
    conceptSummary: 'Assistive technologies address different access needs through different interaction supports.',
  },
  {
    id: 'ethics-accessibility-scenario',
    kind: 'mcq',
    prompt:
      'A user cannot use a standard mouse reliably because of motor impairment. Which support is most directly relevant?',
    options: ['Alternative input device', 'UEQ-S benchmark', 'Paired t-test', 'Novelty scale'],
    correctOption: 0,
    explanationSteps: [
      'Motor impairments can make standard pointer interaction difficult.',
      'Alternative input devices are designed to support different physical interaction needs.',
      'The other options are unrelated evaluation concepts.',
    ],
    conceptSummary: 'Accessibility support should match the barrier the user is encountering.',
  },
]

const PERSONALIZATION_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'ethics-personalization',
    kind: 'text',
    prompt: 'What is personalization?',
    requiredConcepts: [
      { label: 'System does it automatically', keywords: ['system', 'automatically', 'auto'] },
      { label: 'Tailors or adapts', keywords: ['tailor', 'adapt', 'modify'] },
    ],
    answerDisplay:
      'Personalization is when the system automatically tailors or adapts the experience for the user.',
    explanationSteps: [
      'The system, not the user, is the agent making the adaptation.',
      'That tailoring is often based on behavior, preferences, or history.',
      'This differs from customization, where the user manually changes things.',
    ],
    conceptSummary: 'Personalization is system-tailored adaptation.',
  },
  {
    id: 'ethics-customization',
    kind: 'text',
    prompt: 'What is customization?',
    requiredConcepts: [
      { label: 'User does it', keywords: ['user', 'manually', 'person changes'] },
      { label: 'Changes or adjusts', keywords: ['change', 'adjust', 'modify', 'configure'] },
    ],
    answerDisplay:
      'Customization is when the user manually changes or adjusts the system to fit their preferences.',
    explanationSteps: [
      'Customization is user-tailored rather than system-tailored.',
      'The person actively chooses settings, layouts, themes, or behaviors.',
      'This is a frequent compare-and-contrast item with personalization.',
    ],
    conceptSummary: 'Customization is user-driven configuration.',
  },
  {
    id: 'ethics-personalization-vs-customization',
    kind: 'mcq',
    prompt:
      'A shopping app automatically recommends products based on purchase history. Which term fits best?',
    options: ['Personalization', 'Customization', 'Assistive technology', 'Justice'],
    correctOption: 0,
    explanationSteps: [
      'The system is automatically adapting content based on prior behavior.',
      'That makes it personalization.',
      'Customization would mean the user manually changed the system.',
    ],
    conceptSummary: 'Automatic adaptation by the system is personalization, not customization.',
  },
]

const ALL_QUESTIONS = {
  'research-ethics': RESEARCH_ETHICS_QUESTIONS,
  'consent-privacy': CONSENT_PRIVACY_QUESTIONS,
  'design-ethics': DESIGN_ETHICS_QUESTIONS,
  'inclusion-accessibility': INCLUSION_ACCESSIBILITY_QUESTIONS,
  personalization: PERSONALIZATION_QUESTIONS,
} as const

function pick(subtopic: keyof typeof ALL_QUESTIONS): NetworkingQuestion {
  return randomPick(ALL_QUESTIONS[subtopic])
}

export function generateResearchEthicsQuestion(): NetworkingQuestion {
  return pick('research-ethics')
}

export function generateConsentPrivacyQuestion(): NetworkingQuestion {
  return pick('consent-privacy')
}

export function generateDesignEthicsQuestion(): NetworkingQuestion {
  return pick('design-ethics')
}

export function generateInclusionAccessibilityQuestion(): NetworkingQuestion {
  return pick('inclusion-accessibility')
}

export function generatePersonalizationQuestion(): NetworkingQuestion {
  return pick('personalization')
}
