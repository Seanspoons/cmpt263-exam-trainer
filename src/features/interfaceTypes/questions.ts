import { randomPick } from '../../lib/random'
import type { NetworkingQuestion } from '../networkingShared/networkingDrills'

const FOUNDATIONS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'interface-user-interface-definition',
    kind: 'text',
    prompt: 'What is a computer user interface?',
    requiredConcepts: [
      {
        label: 'Controls how user enters data or instructions',
        keywords: ['data', 'instructions', 'entered by the user', 'user enters'],
      },
      {
        label: 'Controls how the computer presents information back',
        keywords: ['presents information back', 'computer presents', 'output back to the user'],
      },
    ],
    answerDisplay:
      'A computer user interface controls how data or instructions are entered by the user and how the computer presents information back to the user.',
    explanationSteps: [
      'The lecture defines interface types around two-way interaction.',
      'The user provides input, and the system presents output or information back.',
      'That framing helps compare different interface styles.',
    ],
    conceptSummary: 'A user interface mediates how people give input and receive information back from the computer.',
  },
  {
    id: 'interface-decade-match',
    kind: 'match',
    prompt: 'Match each decade grouping to the lecture examples.',
    pairs: [
      { left: '1980s', right: 'Command line and GUI or WIMP' },
      { left: '1990s', right: 'Advanced graphical, web, speech or voice, pen, gesture, and touch' },
      { left: '2000s', right: 'Mobile, multimodal, shareable, tangible, AR/MR, wearable, robotic, brain' },
    ],
    explanationSteps: [
      'The lecture organizes interface evolution historically by decade.',
      'This is not just trivia; it helps show how interaction styles broadened over time.',
      'The categories are useful recognition practice.',
    ],
    conceptSummary: 'Interface types evolved from command and desktop systems into broader multimodal and embodied systems.',
  },
  {
    id: 'interface-platform-mindset',
    kind: 'mcq',
    prompt: 'What is the key design takeaway when working across interface types?',
    options: [
      'Focus on user tasks for the platform rather than copying a desktop/web app directly',
      'Always copy the desktop design exactly',
      'Choose the most novel interface regardless of task',
      'Ignore platform constraints if the brand is strong',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture warns against blindly porting one interface form into another.',
      'Different platforms support different tasks, constraints, and interaction styles.',
      'Task-platform fit matters more than cloning surface layout.',
    ],
    conceptSummary: 'Design should fit platform-specific user tasks rather than copy another form factor directly.',
  },
]

const CLI_GUI_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'interface-cli-definition',
    kind: 'text',
    prompt: 'What is a CLI?',
    requiredConcepts: [
      { label: 'Text-based commands', keywords: ['text based', 'commands', 'command line'] },
      { label: 'Keyboard input', keywords: ['keyboard', 'shortcuts', 'function keys'] },
    ],
    answerDisplay:
      'A CLI is a text-based interface where users enter commands through the keyboard.',
    explanationSteps: [
      'The CLI relies on typed commands rather than graphical controls.',
      'It is often precise and resource-light, but harder to learn and recall.',
      'This makes it powerful for some users and intimidating for others.',
    ],
    conceptSummary: 'CLI means text-based command entry through keyboard interaction.',
  },
  {
    id: 'interface-cli-benefits',
    kind: 'match',
    prompt: 'Match each CLI property to the lecture framing.',
    pairs: [
      { left: 'Benefit', right: 'Fast and precise once learned' },
      { left: 'Benefit', right: 'Low resource use' },
      { left: 'Drawback', right: 'Hard to learn and recall' },
      { left: 'Drawback', right: 'Can feel intimidating' },
    ],
    explanationSteps: [
      'CLI tradeoffs are central to comparing interface styles.',
      'It is efficient for skilled users but demands memory and expertise.',
      'This connects to later recognition-vs-recall ideas in cognition.',
    ],
    conceptSummary: 'CLI is powerful and efficient but memory-heavy and intimidating for many users.',
  },
  {
    id: 'interface-gui-definition',
    kind: 'mcq',
    prompt: 'Which statement best describes a GUI?',
    options: [
      'Users control input, storage, and output through graphical elements on a screen',
      'Users interact only through typed shell commands',
      'It always requires voice as the main modality',
      'It is defined by physical object manipulation only',
    ],
    correctOption: 0,
    explanationSteps: [
      'GUI interaction is based on graphical on-screen elements.',
      'The lecture notes these are screen-based and remote or intangible representations.',
      'This distinguishes GUI from CLI and tangible interfaces.',
    ],
    conceptSummary: 'GUI interaction happens through graphical screen elements rather than typed commands alone.',
  },
  {
    id: 'interface-recognition-over-recall',
    kind: 'mcq',
    prompt: 'Why are GUIs or WIMP interfaces often easier to learn than CLIs?',
    options: [
      'They rely more on recognition over recall',
      'They never require pointing precision',
      'They use fewer visual elements',
      'They remove all need for structure',
    ],
    correctOption: 0,
    explanationSteps: [
      'WIMP systems are often easier to learn because users can recognize options visually.',
      'CLI requires recalling commands and syntax from memory.',
      'Recognition reduces memory burden.',
    ],
    conceptSummary: 'GUI/WIMP benefits from recognition over recall.',
  },
]

const WIMP_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'interface-wimp-definition',
    kind: 'text',
    prompt: 'What is WIMP?',
    requiredConcepts: [
      { label: 'Windows', keywords: ['windows'] },
      { label: 'Icons', keywords: ['icons'] },
      { label: 'Menus', keywords: ['menus'] },
      { label: 'Pointing device', keywords: ['pointing device', 'pointing'] },
    ],
    answerDisplay:
      'WIMP stands for Windows, Icons, Menus, and Pointing device.',
    explanationSteps: [
      'WIMP names the classic desktop graphical interaction model.',
      'Each letter refers to a key GUI component family.',
      'This is a direct high-yield recognition item.',
    ],
    conceptSummary: 'WIMP = Windows, Icons, Menus, Pointing device.',
  },
  {
    id: 'interface-windows-features',
    kind: 'match',
    prompt: 'Match the windows concept to the lecture idea.',
    pairs: [
      { left: 'Windows', right: 'Help overcome display constraints' },
      { left: 'Window interaction', right: 'Supports movement, resizing, overlap, open and close' },
      { left: 'Too many windows', right: 'Can become difficult to manage' },
    ],
    explanationSteps: [
      'Windows were introduced to help use limited display space more flexibly.',
      'They support multiple operations like resize, move, overlap, and close.',
      'Too many open windows create their own usability problems.',
    ],
    conceptSummary: 'Windows solve display constraints but can become hard to manage when overused.',
  },
  {
    id: 'interface-icons-types',
    kind: 'match',
    prompt: 'Match each icon strategy to the lecture description.',
    pairs: [
      { left: 'Similarity', right: 'Best when the icon visually resembles its referent' },
      { left: 'Analogy', right: 'Useful for abstract actions through metaphor' },
      { left: 'Arbitrary', right: 'Versatile but requires learning and may confuse' },
    ],
    explanationSteps: [
      'Icon design depends on how representation maps to referent.',
      'Similarity is strongest when possible, but not always available.',
      'Arbitrary icons are flexible but memory-demanding.',
    ],
    conceptSummary: 'Good icon design depends on how clearly the symbol maps to what it means.',
  },
  {
    id: 'interface-menu-rules',
    kind: 'mcq',
    prompt: 'Which menu-design recommendation matches the lecture?',
    options: [
      'Keep Save and Quit far apart',
      'Change menu names dynamically to keep them fresh',
      'Put unlimited items in one menu level',
      'Avoid shortcut keys so users read every item',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture includes concrete menu-design rules such as separating dangerous or opposite actions.',
      'It also warns against dynamic renaming and overly long menus.',
      'Shortcut or access keys are encouraged, not discouraged.',
    ],
    conceptSummary: 'Menu design depends on careful placement, grouping, and stable naming.',
  },
  {
    id: 'interface-pointing-device',
    kind: 'mcq',
    prompt: 'Which is an example of a pointing device in the lecture framing?',
    options: ['Mouse', 'Compiler', 'Database', 'Questionnaire'],
    correctOption: 0,
    explanationSteps: [
      'Pointing devices include mouse, trackball, joystick, touchpad, finger, stylus, and light pen.',
      'Their role is to let users interact with GUI components.',
      'This is a direct component-recognition question.',
    ],
    conceptSummary: 'Pointing devices enable interaction with GUI elements.',
  },
]

const TOUCH_MOBILE_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'interface-touchscreens',
    kind: 'mcq',
    prompt: 'Which statement best describes touch screens?',
    options: [
      'They provide more direct interaction, but precision and mapping remain design issues',
      'They remove all need for icons and menus',
      'They eliminate pointing precision concerns',
      'They are identical to command-line interaction',
    ],
    correctOption: 0,
    explanationSteps: [
      'Touch screens feel direct because input happens at the display surface.',
      'But precision and mapping challenges remain important.',
      'They still often use menus and icons.',
    ],
    conceptSummary: 'Touch screens feel more direct, but still have precision and mapping challenges.',
  },
  {
    id: 'interface-mobile-tradeoffs',
    kind: 'match',
    prompt: 'Match each mobile-interface property to the lecture framing.',
    pairs: [
      { left: 'Benefit', right: 'Portable and engaging' },
      { left: 'Benefit', right: 'Supports multiple input and output modes' },
      { left: 'Drawback', right: 'Small screens' },
      { left: 'Drawback', right: 'Fat-finger problem' },
    ],
    explanationSteps: [
      'Mobile interfaces are pervasive and multimodal.',
      'Their strengths come from portability and rich device capabilities.',
      'Their weaknesses include small screens and touch imprecision.',
    ],
    conceptSummary: 'Mobile interfaces are powerful and portable but constrained by size and touch precision.',
  },
  {
    id: 'interface-mobile-best-practice',
    kind: 'mcq',
    prompt: 'Which mobile design practice best matches the lecture?',
    options: [
      'Show only the information and actions needed for the immediate task',
      'Expose every possible feature on the first screen',
      'Copy desktop navigation depth exactly',
      'Remove undo so users commit faster',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture emphasizes immediate-task focus, minimal steps, and reduced clutter for mobile.',
      'Mobile interfaces should not blindly mirror desktop density.',
      'Allowing undo or change of mind is also recommended.',
    ],
    conceptSummary: 'Good mobile design focuses tightly on the immediate task and minimizes extra steps.',
  },
]

const EMERGING_INTERFACE_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'interface-voice',
    kind: 'match',
    prompt: 'Match each speech or voice property to the lecture framing.',
    pairs: [
      { left: 'Benefit', right: 'Hands-free and accessibility-friendly' },
      { left: 'Benefit', right: 'Can feel natural or conversational' },
      { left: 'Drawback', right: 'Ambient noise and tone variation can interfere' },
      { left: 'Drawback', right: 'Privacy concerns' },
    ],
    explanationSteps: [
      'Voice interfaces are conversation-based and typically use voice input plus a trigger phrase.',
      'They can support hands-free access and accessibility.',
      'But they raise issues of noise, privacy, and realism.',
    ],
    conceptSummary: 'Voice interfaces offer hands-free natural interaction with real privacy and reliability tradeoffs.',
  },
  {
    id: 'interface-wearables',
    kind: 'mcq',
    prompt: 'Which statement best fits wearable interfaces?',
    options: [
      'They are on-body and often have tiny or no screens, making them always available but limited in interactivity',
      'They replace the physical world completely',
      'They are defined by large desktop windows',
      'They eliminate privacy concerns',
    ],
    correctOption: 0,
    explanationSteps: [
      'Wearables are on-body and often always available.',
      'Their interaction is constrained by size, input, and privacy issues.',
      'This makes them useful for some tasks but limited for others.',
    ],
    conceptSummary: 'Wearables trade always-available access against interaction and privacy constraints.',
  },
  {
    id: 'interface-ar-vr',
    kind: 'text',
    prompt: 'What is the difference between AR and VR?',
    requiredConcepts: [
      { label: 'AR augments the world', keywords: ['augment', 'overlay', 'adds to the world'] },
      { label: 'VR replaces the world', keywords: ['replace', 'fully virtual', 'replaces the world'] },
    ],
    answerDisplay:
      'AR augments or overlays the world, while VR replaces the world with a fully virtual environment.',
    explanationSteps: [
      'AR adds information or objects to the existing world.',
      'VR substitutes a virtual environment for the surrounding world.',
      'Both can be immersive but have different design implications.',
    ],
    conceptSummary: 'AR overlays the real world; VR replaces it.',
  },
  {
    id: 'interface-ar-vr-drawbacks',
    kind: 'mcq',
    prompt: 'Which issue is named as a drawback or research challenge for AR/VR?',
    options: ['Motion sickness and synchronization issues', 'No immersion at all', 'No input-design questions', 'Unlimited realism by default'],
    correctOption: 0,
    explanationSteps: [
      'The lecture mentions issues like motion sickness, synchronization, presence, navigation, display placement, and input style.',
      'These are part of why AR/VR design remains challenging.',
      'Immersion is a strength, not a drawback.',
    ],
    conceptSummary: 'AR/VR offers immersion but brings difficult comfort, realism, and input challenges.',
  },
  {
    id: 'interface-nui',
    kind: 'mcq',
    prompt: 'What makes an interface a NUI in the lecture framing?',
    options: [
      'Interaction feels direct and consistent with natural behavior',
      'It always has no screen',
      'It is always voice-only',
      'It must use desktop windows and menus',
    ],
    correctOption: 0,
    explanationSteps: [
      'NUI stands for natural user interface.',
      'The lecture frames it as direct interaction consistent with natural behavior.',
      'This does not require one specific device form.',
    ],
    conceptSummary: 'NUI emphasizes direct interaction aligned with natural human behavior.',
  },
]

const TUI_TASK_SELECTION_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'interface-tui-comparison',
    kind: 'mcq',
    prompt: 'Which statement best fits TUI in this unit?',
    options: [
      'Physical objects are coupled with digital information and manipulated directly',
      'It is purely text-based',
      'It is defined by tiny watch screens only',
      'It avoids all physical interaction',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture frames TUI as physical objects coupled with digital information.',
      'Users manipulate physical artifacts as part of control and representation.',
      'This distinguishes TUI from purely screen-based GUI interaction.',
    ],
    conceptSummary: 'TUI combines physical manipulation with digital information.',
  },
  {
    id: 'interface-tui-strengths-drawbacks',
    kind: 'match',
    prompt: 'Match each TUI point to the lecture framing.',
    pairs: [
      { left: 'Strength', right: 'Supports collaboration and direct interaction' },
      { left: 'Strength', right: 'Supports situatedness and tangible thinking' },
      { left: 'Drawback', right: 'Limited scalability and malleability' },
      { left: 'Drawback', right: 'Can cause fatigue' },
    ],
    explanationSteps: [
      'The Interface Types lecture summarizes TUI strengths and drawbacks at a high level.',
      'The strengths come from embodiment and physicality.',
      'The drawbacks come from physical constraints and limited flexibility.',
    ],
    conceptSummary: 'TUI strengths are embodied and collaborative; its drawbacks are physical and scalability-related.',
  },
  {
    id: 'interface-choose-right-type',
    kind: 'mcq',
    prompt: 'A team is designing for quick mobile check-ins while walking. What is the best mindset?',
    options: [
      'Focus on the immediate mobile task and minimize steps instead of copying a desktop workflow',
      'Port the full desktop layout unchanged',
      'Use CLI because it is always easiest for everyone',
      'Prefer VR because it is more immersive',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture’s platform-fit takeaway matters here.',
      'A mobile context demands task focus, limited steps, and tight information display.',
      'Direct desktop copying ignores the form factor and context of use.',
    ],
    conceptSummary: 'Choose interface design around platform-specific tasks and context, not direct cloning.',
  },
]

const ALL_QUESTIONS = {
  foundations: FOUNDATIONS_QUESTIONS,
  'cli-gui': CLI_GUI_QUESTIONS,
  wimp: WIMP_QUESTIONS,
  'touch-mobile': TOUCH_MOBILE_QUESTIONS,
  emerging: EMERGING_INTERFACE_QUESTIONS,
  'tui-task-selection': TUI_TASK_SELECTION_QUESTIONS,
} as const

function pick(subtopic: keyof typeof ALL_QUESTIONS): NetworkingQuestion {
  return randomPick(ALL_QUESTIONS[subtopic])
}

export function generateInterfaceFoundationsQuestion(): NetworkingQuestion {
  return pick('foundations')
}

export function generateCliGuiQuestion(): NetworkingQuestion {
  return pick('cli-gui')
}

export function generateWimpQuestion(): NetworkingQuestion {
  return pick('wimp')
}

export function generateTouchMobileQuestion(): NetworkingQuestion {
  return pick('touch-mobile')
}

export function generateEmergingInterfaceQuestion(): NetworkingQuestion {
  return pick('emerging')
}

export function generateTuiTaskSelectionQuestion(): NetworkingQuestion {
  return pick('tui-task-selection')
}
