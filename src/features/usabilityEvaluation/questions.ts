import { randomPick } from '../../lib/random'
import type { NetworkingQuestion } from '../networkingShared/networkingDrills'

const FOUNDATIONS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'ue-why-evaluate',
    kind: 'mcq',
    prompt: 'Why do we evaluate interfaces instead of only asking whether they technically work?',
    options: [
      'Because evaluation asks how well the system works and whether users can use and like it',
      'Because evaluation replaces design entirely',
      'Because evaluation only matters after launch',
      'Because implementation quality makes user experience irrelevant',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture emphasis is not just function but quality of use.',
      'Evaluation checks whether people can use the system effectively and whether the experience is acceptable.',
      'That is why evaluation should happen before launch, not only after.',
    ],
    conceptSummary: 'Evaluation asks how well a system works for users, not just whether it runs.',
  },
  {
    id: 'ue-prelaunch',
    kind: 'mcq',
    prompt: 'Why is evaluation especially valuable before product launch?',
    options: [
      'It helps discover flaws before release, when changes are still cheaper and safer',
      'It guarantees zero future issues',
      'It removes the need for redesign',
      'It only measures aesthetic taste',
    ],
    correctOption: 0,
    explanationSteps: [
      'Pre-launch evaluation reduces the cost of finding and fixing problems.',
      'It is much better to discover flaws before users are relying on the product.',
      'This is a central reason to evaluate throughout design.',
    ],
    conceptSummary: 'Evaluate before launch so flaws can be found and fixed earlier.',
  },
  {
    id: 'ue-what-evaluate-match',
    kind: 'match',
    prompt: 'Match each evaluation dimension to what it covers.',
    pairs: [
      { left: 'All levels', right: 'Prototype through final product' },
      { left: 'All parts', right: 'Components through full system' },
      { left: 'All attributes', right: 'Measures like time, error rate, safety, and aesthetics' },
    ],
    explanationSteps: [
      'Evaluation is not restricted to finished systems.',
      'It can apply to isolated components or whole products.',
      'It can also target many different kinds of attributes, not only speed.',
    ],
    conceptSummary: 'Evaluation can cover different levels, parts, and attributes of a design.',
  },
  {
    id: 'ue-formative-vs-summative',
    kind: 'match',
    prompt: 'Match each evaluation timing concept to its best description.',
    pairs: [
      { left: 'Formative evaluation', right: 'During development and often more qualitative' },
      { left: 'Summative evaluation', right: 'After development and often more quantitative' },
    ],
    explanationSteps: [
      'Formative evaluation helps shape and improve a design in progress.',
      'Summative evaluation is more about judging the final result.',
      'Both are useful, but they support different moments in the design process.',
    ],
    conceptSummary: 'Formative supports improvement during development; summative judges results later.',
  },
  {
    id: 'ue-lab-vs-field',
    kind: 'mcq',
    prompt: 'Which statement best contrasts lab studies with field studies?',
    options: [
      'Lab studies have more control and internal validity, while field studies have more realism and external validity',
      'Lab studies always have higher external validity than field studies',
      'Field studies avoid real users entirely',
      'Lab and field studies differ only in the color of the testing room',
    ],
    correctOption: 0,
    explanationSteps: [
      'The key contrast is control versus realism.',
      'Laboratory settings increase internal validity by controlling variables.',
      'Field studies improve external validity by observing real-world use.',
    ],
    conceptSummary: 'Lab studies favor control; field studies favor realism.',
  },
]

const EVALUATION_TYPES_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'ue-quick-and-dirty',
    kind: 'mcq',
    prompt: 'What best describes quick and dirty evaluation?',
    options: [
      'Fast informal feedback from a small number of users or experts with little structure',
      'A formal randomized controlled trial only',
      'A method that always requires 20+ users',
      'A type of field study that lasts months',
    ],
    correctOption: 0,
    explanationSteps: [
      'Quick and dirty evaluation is intentionally lightweight.',
      'It is useful for early feedback when speed matters more than rigor.',
      'Its weakness is lower structure and consistency.',
    ],
    conceptSummary: 'Quick and dirty evaluation is informal, fast, and lightly structured.',
  },
  {
    id: 'ue-analytical-definition',
    kind: 'mcq',
    prompt: 'What defines analytical evaluation?',
    options: [
      'Experts inspect or model the interface without involving real users directly',
      'Real users perform tasks in a lab',
      'Participants use the product at home for a week',
      'Only questionnaire data is collected',
    ],
    correctOption: 0,
    explanationSteps: [
      'Analytical evaluation includes inspection and performance modelling.',
      'The defining feature is that experts evaluate without direct end-user participation.',
      'Heuristic evaluation is a common example.',
    ],
    conceptSummary: 'Analytical evaluation is expert-based evaluation without direct users.',
  },
  {
    id: 'ue-usability-testing-definition',
    kind: 'text',
    prompt: 'What is usability testing?',
    requiredConcepts: [
      { label: 'Real users', keywords: ['users', 'real users'] },
      { label: 'Perform tasks and evaluate system', keywords: ['tasks', 'perform tasks', 'measure performance', 'evaluate system'] },
    ],
    answerDisplay:
      'Usability testing is when real users perform tasks with a system while evaluators observe behavior and assess how well the system supports performance and satisfaction.',
    explanationSteps: [
      'Usability testing is about people doing representative tasks.',
      'The goal is to test the system, not the user.',
      'Both observed behavior and feedback matter.',
    ],
    conceptSummary: 'Usability testing uses real users performing tasks to evaluate the system.',
  },
  {
    id: 'ue-field-study',
    kind: 'mcq',
    prompt: 'Which scenario is a field study?',
    options: [
      'Users take the system home and researchers observe or interview them in natural use',
      'Experts inspect screens in a meeting room without users',
      'A facilitator measures time in a controlled lab',
      'Two designers give informal hallway feedback',
    ],
    correctOption: 0,
    explanationSteps: [
      'Field studies focus on use in natural settings.',
      'They often combine observation with interviews.',
      'The setting is what makes them distinct.',
    ],
    conceptSummary: 'Field studies observe real-world use in natural environments.',
  },
  {
    id: 'ue-scenario-types',
    kind: 'match',
    prompt: 'Match each scenario to the most fitting evaluation type.',
    pairs: [
      { left: 'Expert reviews interface without users', right: 'Analytical evaluation' },
      { left: 'Five users complete tasks while observed', right: 'Usability testing' },
      { left: 'Users test product at home for a week', right: 'Field study' },
      { left: 'Designer asks two users for quick feedback', right: 'Quick and dirty evaluation' },
    ],
    explanationSteps: [
      'These are high-yield recognition examples.',
      'The key cues are whether users are present, how structured the activity is, and where it happens.',
      'Sorting them quickly is useful for exams.',
    ],
    conceptSummary: 'Evaluation types can be distinguished by structure, setting, and whether users are involved.',
  },
]

const TESTING_STRUCTURE_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'ue-not-testing-the-user',
    kind: 'mcq',
    prompt: 'What is the right mindset for a usability test session?',
    options: [
      'You are testing the system, not judging whether the participant is good at using computers',
      'You are grading the participant’s intelligence',
      'You should correct every mistake immediately',
      'You should hide all tasks from participants until the end',
    ],
    correctOption: 0,
    explanationSteps: [
      'This is a foundational usability testing principle.',
      'If people struggle, that often reveals a design issue rather than a user failure.',
      'The session should feel safe and respectful for participants.',
    ],
    conceptSummary: 'Usability testing evaluates the design, not the participant.',
  },
  {
    id: 'ue-roles-match',
    kind: 'match',
    prompt: 'Match each usability test role or element to its job.',
    pairs: [
      { left: 'Facilitator', right: 'Gives instructions, observes, and asks follow-up questions' },
      { left: 'Participant', right: 'A target user or someone with a similar background' },
      { left: 'Task', right: 'A realistic activity the participant tries to perform' },
    ],
    explanationSteps: [
      'Usability testing has a simple but important structure.',
      'The facilitator guides the session without turning it into a tutorial.',
      'Tasks should be realistic and representative.',
    ],
    conceptSummary: 'Usability tests rely on facilitators, participants, and realistic tasks.',
  },
  {
    id: 'ue-measures',
    kind: 'match',
    prompt: 'Match each usability test measure to what it represents.',
    pairs: [
      { left: 'Time to complete', right: 'How long the participant needs to finish the task' },
      { left: 'Error rate', right: 'How often mistakes or failed actions occur' },
      { left: 'Breakdowns', right: 'Points where the user becomes stuck or the flow falls apart' },
      { left: 'User feedback', right: 'Subjective reactions, preferences, or frustrations' },
    ],
    explanationSteps: [
      'Usability testing can collect both behavioral and self-report evidence.',
      'Time and error measures are common quantitative indicators.',
      'Breakdowns and feedback often reveal why those numbers happen.',
    ],
    conceptSummary: 'Usability tests commonly track time, errors, breakdowns, and user feedback.',
  },
  {
    id: 'ue-process-order',
    kind: 'match',
    prompt: 'Match each usability testing phase to the main activity.',
    pairs: [
      { left: 'Preparation', right: 'Create tasks, recruit participants, and prepare materials' },
      { left: 'During test', right: 'Observe, ask questions, and record behavior' },
      { left: 'After test', right: 'Analyze data, identify problems, and make recommendations' },
    ],
    explanationSteps: [
      'The process can be remembered in three broad phases.',
      'Each phase supports the next one.',
      'Skipping preparation or analysis weakens the whole evaluation.',
    ],
    conceptSummary: 'Usability testing moves from preparation to observation to analysis.',
  },
  {
    id: 'ue-improvement-opportunities',
    kind: 'mcq',
    prompt: 'What do usability tests help you uncover besides obvious problems?',
    options: [
      'Improvement opportunities and user preferences',
      'Guaranteed final solutions',
      'Only code-level defects',
      'Only marketing segmentation data',
    ],
    correctOption: 0,
    explanationSteps: [
      'Usability testing is not only about listing failures.',
      'It also reveals opportunities for refinement and what users value.',
      'That makes the findings useful for redesign.',
    ],
    conceptSummary: 'Usability tests reveal both problems and opportunities for better design.',
  },
]

const TASK_PARTICIPANT_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'ue-task-design',
    kind: 'mcq',
    prompt: 'What makes a usability test task well designed?',
    options: [
      'It reflects real-world use, provides context, and avoids biased or confusing wording',
      'It tells users exactly which button to click first',
      'It is intentionally unrealistic to surprise participants',
      'It always hides the goal from the participant',
    ],
    correctOption: 0,
    explanationSteps: [
      'Good tasks represent what users would actually try to do.',
      'They provide enough context without scripting the interaction too tightly.',
      'Biased wording can distort the results.',
    ],
    conceptSummary: 'Good tasks are realistic, contextualized, and neutrally worded.',
  },
  {
    id: 'ue-general-vs-specific',
    kind: 'mcq',
    prompt: 'Which statement about task wording is most accurate?',
    options: [
      'Tasks can be general or specific, but their wording should avoid confusion and bias',
      'All tasks must be extremely vague',
      'All tasks must reveal the exact interface steps',
      'Task wording does not affect validity',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture allows both general and specific tasks.',
      'What matters is that the wording supports valid observation rather than leading the user.',
      'Poor wording can distort what you learn.',
    ],
    conceptSummary: 'Task wording matters because it influences validity and user behavior.',
  },
  {
    id: 'ue-participant-counts',
    kind: 'match',
    prompt: 'Match each study goal to the approximate participant guidance.',
    pairs: [
      { left: 'Qualitative usability testing', right: 'About 5 representative users' },
      { left: 'Quantitative testing', right: 'Often 20 or more users' },
      { left: 'Eye-tracking study', right: 'Often needs even more, around 39' },
    ],
    explanationSteps: [
      'Small samples can reveal many qualitative issues.',
      'More participants are needed when the goal is stronger quantitative claims.',
      'Eye-tracking commonly requires larger samples still.',
    ],
    conceptSummary: 'Participant needs depend on whether the study is qualitative, quantitative, or eye-tracking based.',
  },
  {
    id: 'ue-representative-users',
    kind: 'mcq',
    prompt: 'Who should usually serve as usability test participants?',
    options: [
      'Representative target users rather than the designers of the system',
      'Only the project’s lead designer',
      'Only expert programmers',
      'Only people who already know the interface in depth',
    ],
    correctOption: 0,
    explanationSteps: [
      'Testing with designers distorts the results because they know too much about the system.',
      'Representative users are more likely to show realistic behavior.',
      'The participant pool should resemble the people the system is for.',
    ],
    conceptSummary: 'Usability testing should use representative users, not the designers themselves.',
  },
  {
    id: 'ue-proper-facilitation',
    kind: 'mcq',
    prompt: 'During a test, a participant struggles with a task and the facilitator does not immediately correct them. Why is that often appropriate?',
    options: [
      'Because the struggle may reveal a real usability problem in the system',
      'Because facilitators are not allowed to observe',
      'Because participants should always fail at least once',
      'Because confusion makes the test more entertaining',
    ],
    correctOption: 0,
    explanationSteps: [
      'Jumping in too early can erase the evidence of a usability problem.',
      'The facilitator should observe what breaks before intervening when appropriate.',
      'This preserves the value of the session.',
    ],
    conceptSummary: 'Letting users struggle briefly can reveal real usability breakdowns.',
  },
]

const QUESTIONNAIRE_THINK_ALOUD_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'ue-questionnaire-demographics',
    kind: 'match',
    prompt: 'Match each questionnaire element to a typical example.',
    pairs: [
      { left: 'Demographic question', right: 'Age range, inclusive gender options, or experience level' },
      { left: 'Likert scale', right: 'Agreement or rating scale with points such as 5 or 7' },
      { left: 'Semantic scale', right: 'Rating between opposite adjectives or qualities' },
      { left: 'Open-ended question', right: 'Free-text response that captures richer comments' },
    ],
    explanationSteps: [
      'Usability evaluation often uses questionnaires before or after tasks.',
      'Demographics and experience help interpret the results.',
      'Open-ended items add qualitative insight that scales alone may miss.',
    ],
    conceptSummary: 'Questionnaires can collect demographics, scaled ratings, and open-ended feedback.',
  },
  {
    id: 'ue-standard-questionnaires',
    kind: 'mcq',
    prompt: 'Which set contains standard questionnaires or scales commonly used in usability evaluation?',
    options: [
      'SUS, QUIS, UEQ, and NASA-TLX',
      'GOMS, KLM, and Fitts’ Law only',
      'TCPS 2 and Stanford Prison Experiment',
      'Balsamiq and Figma',
    ],
    correctOption: 0,
    explanationSteps: [
      'These are standard post-task or post-study measurement instruments.',
      'They collect structured subjective data rather than inspect the interface directly.',
      'Knowing the names is common exam material.',
    ],
    conceptSummary: 'SUS, QUIS, UEQ, and NASA-TLX are standard evaluation questionnaires or scales.',
  },
  {
    id: 'ue-leading-question',
    kind: 'mcq',
    prompt: 'Which questionnaire item is a leading question?',
    options: [
      'Did you enjoy our excellent new interface?',
      'How easy or difficult was the task for you?',
      'What, if anything, was confusing about checkout?',
      'Describe one part of the flow you would improve.',
    ],
    correctOption: 0,
    explanationSteps: [
      'Leading questions bias the participant toward a preferred answer.',
      'Neutral wording is important in usability evaluation.',
      'Open-ended, concise questions are usually safer.',
    ],
    conceptSummary: 'Leading questions bias responses and should be avoided.',
  },
  {
    id: 'ue-think-aloud-definition',
    kind: 'text',
    prompt: 'What is think-aloud protocol?',
    requiredConcepts: [
      { label: 'Verbalize thoughts', keywords: ['verbalize', 'say thoughts', 'speak thoughts'] },
      { label: 'While using the system', keywords: ['while using system', 'during interaction', 'while performing task'] },
    ],
    answerDisplay:
      'Think-aloud protocol is when users verbalize their thoughts while they are interacting with the system during tasks.',
    explanationSteps: [
      'Think-aloud is one of the most valuable usability testing techniques.',
      'It helps reveal expectations, confusion, and interpretations that observation alone may miss.',
      'The facilitator should not turn it into a leading conversation.',
    ],
    conceptSummary: 'Think-aloud captures participants’ thoughts during interaction.',
  },
  {
    id: 'ue-think-aloud-tradeoffs',
    kind: 'match',
    prompt: 'Match each think-aloud characteristic to whether it is a benefit or downside.',
    pairs: [
      { left: 'Cheap and flexible', right: 'Benefit' },
      { left: 'Insightful and easy to use', right: 'Benefit' },
      { left: 'Unnatural and sometimes filtered', right: 'Downside' },
      { left: 'Can introduce bias', right: 'Downside' },
    ],
    explanationSteps: [
      'Think-aloud is widely used because it is practical and revealing.',
      'Its weaknesses come from the fact that speaking during action is not fully natural.',
      'Facilitator behavior can also distort what participants say.',
    ],
    conceptSummary: 'Think-aloud is valuable but can feel unnatural and can be biased.',
  },
  {
    id: 'ue-think-aloud-prompts',
    kind: 'mcq',
    prompt: 'Which facilitator prompt best fits think-aloud best practice?',
    options: [
      'What are you thinking right now?',
      'Don’t you think that button is obviously the right one?',
      'You should probably open settings next, right?',
      'Can you confirm that our design is intuitive?',
    ],
    correctOption: 0,
    explanationSteps: [
      'Good think-aloud prompts are neutral and non-leading.',
      'The facilitator should encourage speaking without steering the user.',
      'The other options bias the participant.',
    ],
    conceptSummary: 'Think-aloud prompting should be neutral rather than leading.',
  },
]

const ANALYSIS_COMPARISON_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'ue-observation-data',
    kind: 'mcq',
    prompt: 'When observing a usability session, what kinds of things should the evaluator look for?',
    options: [
      'Breakdowns, confusion, workarounds, and success or failure patterns',
      'Only whether the participant smiles',
      'Only the participant’s age',
      'Only the color palette of the interface',
    ],
    correctOption: 0,
    explanationSteps: [
      'Observation is about behavior, not just final outcomes.',
      'Workarounds and hesitation often reveal design problems.',
      'Sessions can be recorded with consent using notes or audio/video.',
    ],
    conceptSummary: 'Observation should capture breakdowns, confusion, workarounds, and outcomes.',
  },
  {
    id: 'ue-qualitative-definition',
    kind: 'text',
    prompt: 'What is qualitative data in usability evaluation?',
    requiredConcepts: [
      { label: 'Observations and feedback', keywords: ['observations', 'feedback', 'comments'] },
      { label: 'Insights or themes', keywords: ['insight', 'themes', 'patterns'] },
    ],
    answerDisplay:
      'Qualitative data includes observations, comments, and feedback that help reveal themes, patterns, and insights.',
    explanationSteps: [
      'Qualitative data helps explain what happened and why.',
      'It often comes from observations, open-ended responses, and discussion.',
      'Affinity diagramming is a common way to organize it into themes.',
    ],
    conceptSummary: 'Qualitative data provides thematic insight from observations and feedback.',
  },
  {
    id: 'ue-quantitative-definition',
    kind: 'text',
    prompt: 'What is quantitative data in usability evaluation?',
    requiredConcepts: [
      { label: 'Numbers or metrics', keywords: ['numbers', 'metrics', 'numerical'] },
      { label: 'Time or error rate', keywords: ['time', 'error rate', 'completion time'] },
    ],
    answerDisplay:
      'Quantitative data is numerical measurement data such as task completion time, error rates, and questionnaire scores.',
    explanationSteps: [
      'Quantitative data turns performance or ratings into numbers.',
      'This makes comparison easier across participants or versions.',
      'It is especially common in summative evaluation.',
    ],
    conceptSummary: 'Quantitative data uses numbers such as time, errors, and scores.',
  },
  {
    id: 'ue-affinity-diagramming',
    kind: 'mcq',
    prompt: 'Which analysis activity is most clearly qualitative?',
    options: [
      'Grouping observations into themes with affinity diagramming',
      'Calculating average completion time',
      'Computing error percentages',
      'Counting how many users finished the task',
    ],
    correctOption: 0,
    explanationSteps: [
      'Affinity diagramming is used to cluster observations and comments into themes.',
      'That makes it a qualitative analysis technique.',
      'The other options are numerical measures.',
    ],
    conceptSummary: 'Affinity diagramming is a qualitative way to organize findings into themes.',
  },
  {
    id: 'ue-severity',
    kind: 'match',
    prompt: 'Match each severity concept to its description.',
    pairs: [
      { left: 'Frequency', right: 'How often the problem occurs' },
      { left: 'Damage', right: 'How harmful the problem is when it happens' },
      { left: 'Ignorable', right: 'Low-priority issue with minimal impact' },
      { left: 'Catastrophic', right: 'Very serious issue that should be fixed urgently' },
    ],
    explanationSteps: [
      'This lecture version simplifies severity around frequency and damage.',
      'Severity helps prioritize which findings to address first.',
      'It should inform redesign recommendations, not replace judgment.',
    ],
    conceptSummary: 'Severity combines how often a problem happens with how damaging it is.',
  },
  {
    id: 'ue-results-use',
    kind: 'mcq',
    prompt: 'What should teams do with usability evaluation results?',
    options: [
      'Use severity to prioritize fixes, redesign based on findings, and also note what already works well',
      'Treat findings as strict unquestionable rules',
      'Ignore successful parts of the design',
      'Discard all user suggestions automatically',
    ],
    correctOption: 0,
    explanationSteps: [
      'Recommendations should guide redesign rather than function as rigid laws.',
      'Good reports include strengths as well as weaknesses.',
      'Findings can also inspire better alternatives.',
    ],
    conceptSummary: 'Use findings to prioritize fixes, redesign, and preserve strengths.',
  },
  {
    id: 'ue-heuristic-vs-testing',
    kind: 'text',
    prompt: 'What is the difference between heuristic evaluation and usability testing?',
    requiredConcepts: [
      { label: 'Experts and no users', keywords: ['experts', 'no users', 'without users'] },
      { label: 'Real users and behavior', keywords: ['real users', 'actual behaviour', 'actual behavior'] },
    ],
    answerDisplay:
      'Heuristic evaluation is done by experts without real users, while usability testing uses real users so it can reveal actual behavior and more realistic problems.',
    explanationSteps: [
      'Heuristic evaluation is faster and often done in one or two hours.',
      'Usability testing is slower but gives stronger evidence about real use.',
      'The best practice is often to use both together.',
    ],
    conceptSummary: 'Heuristics are expert-based; usability testing is behavior-based with real users.',
  },
  {
    id: 'ue-validity-ethics',
    kind: 'mcq',
    prompt: 'Which option best captures common validity and ethics concerns in usability evaluation?',
    options: [
      'Bias, environment, and the Hawthorne effect matter, and participants should be protected from harm with their identity respected',
      'Validity is automatic if the interface looks polished',
      'Ethics matters only in medical studies, not usability work',
      'Observation always removes bias completely',
    ],
    correctOption: 0,
    explanationSteps: [
      'People may behave differently when observed, and the environment can affect results.',
      'Better design, more participants, and better control can improve validity.',
      'Ethically, participants should be treated well and their identity protected.',
    ],
    conceptSummary: 'Usability evaluation must consider validity threats and participant ethics.',
  },
]

export function generateUeFoundationQuestion(): NetworkingQuestion {
  return randomPick(FOUNDATIONS_QUESTIONS)
}

export function generateUeTypesQuestion(): NetworkingQuestion {
  return randomPick(EVALUATION_TYPES_QUESTIONS)
}

export function generateUeTestingBasicsQuestion(): NetworkingQuestion {
  return randomPick(TESTING_STRUCTURE_QUESTIONS)
}

export function generateUeTaskParticipantQuestion(): NetworkingQuestion {
  return randomPick(TASK_PARTICIPANT_QUESTIONS)
}

export function generateUeQuestionnaireThinkAloudQuestion(): NetworkingQuestion {
  return randomPick(QUESTIONNAIRE_THINK_ALOUD_QUESTIONS)
}

export function generateUeAnalysisComparisonQuestion(): NetworkingQuestion {
  return randomPick(ANALYSIS_COMPARISON_QUESTIONS)
}
