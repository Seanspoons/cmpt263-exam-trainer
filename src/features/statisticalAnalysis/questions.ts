import { randomPick } from '../../lib/random'
import type { NetworkingQuestion } from '../networkingShared/networkingDrills'

const CONTROLLED_EXPERIMENT_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'stat-controlled-cause-effect',
    kind: 'mcq',
    prompt: 'Why are controlled experiments valuable in HCI research?',
    options: [
      'They isolate variables to test cause-effect relationships',
      'They guarantee perfect realism in every study environment',
      'They eliminate the need for hypotheses before collecting data',
      'They replace statistical analysis and interpretation entirely',
    ],
    correctOption: 0,
    explanationSteps: [
      'Controlled experiments hold other factors steady while manipulating an independent variable.',
      'That design supports stronger cause-effect claims than observational methods.',
      'They still require hypotheses, measures, and analysis.',
    ],
    conceptSummary:
      'Controlled experiments are used to isolate whether a manipulation causes a change in the measured outcome.',
  },
  {
    id: 'stat-iv-dv-classify',
    kind: 'mcq',
    prompt:
      'Researchers compare interface A vs interface B and measure completion time. What is the dependent variable?',
    options: ['Interface version', 'Completion time', 'Participant assignment method', 'Alpha level'],
    correctOption: 1,
    explanationSteps: [
      'The independent variable is what the researchers manipulate: interface A vs B.',
      'The dependent variable is what they measure in response: completion time.',
      'Alpha level is a statistical threshold, not the study outcome.',
    ],
    conceptSummary: 'IV is manipulated; DV is measured.',
  },
  {
    id: 'stat-between-vs-within',
    kind: 'mcq',
    prompt:
      'Each participant uses both prototypes in counterbalanced order. What design is this?',
    options: [
      'Within-participants',
      'Between-participants',
      'Cross-sectional survey',
      'Purely descriptive study',
    ],
    correctOption: 0,
    explanationSteps: [
      'The same participants experience both conditions.',
      'That makes the groups related rather than independent.',
      'Counterbalancing helps reduce order effects in within-participants designs.',
    ],
    conceptSummary: 'Within-participants means the same people appear in multiple conditions.',
  },
  {
    id: 'stat-between-participants-scenario',
    kind: 'mcq',
    prompt:
      'Team A tests design X with one group and design Y with a different group. What design is this?',
    options: [
      'Between-participants',
      'Within-participants',
      'Repeated-measures t-test only',
      'Matched-pairs design with identical users',
    ],
    correctOption: 0,
    explanationSteps: [
      'Different participants are assigned to different conditions.',
      'That makes the groups unrelated or independent.',
      'This design avoids carryover but needs more participants.',
    ],
    conceptSummary: 'Between-participants uses separate groups for separate conditions.',
  },
]

const HYPOTHESIS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'stat-null-hypothesis',
    kind: 'mcq',
    prompt: 'Which statement best matches the null hypothesis H0?',
    options: [
      'There is no effect or no difference to detect',
      'The preferred design must be better',
      'The sample mean is always correct',
      'The p-value will be below 0.05',
    ],
    correctOption: 0,
    explanationSteps: [
      'H0 is the baseline claim typically stating no effect or no difference.',
      'Statistical testing asks whether the observed result is unlikely under H0.',
      'Rejecting H0 supports, but does not prove with certainty, the alternative.',
    ],
    conceptSummary: 'H0 is the default no-effect explanation.',
  },
  {
    id: 'stat-alt-hypothesis',
    kind: 'mcq',
    prompt: 'What does the alternative hypothesis Ha represent?',
    options: [
      'A claim that some effect, difference, or relationship exists',
      'A guarantee that the study result will be statistically significant',
      'A descriptive statistic used to summarize the collected sample',
      'The same thing as the chosen significance level alpha',
    ],
    correctOption: 0,
    explanationSteps: [
      'Ha states that a meaningful effect or difference exists.',
      'The study data may or may not support rejecting H0 in favor of Ha.',
      'Ha is not the same thing as the significance threshold alpha.',
    ],
    conceptSummary: 'Ha is the researcher’s effect-based explanation.',
  },
  {
    id: 'stat-p-value-meaning',
    kind: 'text',
    prompt: 'What is a p-value?',
    requiredConcepts: [
      { label: 'Probability', keywords: ['probability', 'how likely'] },
      { label: 'Assuming the null is true', keywords: ['null hypothesis', 'assuming h0', 'assuming the null is true'] },
    ],
    answerDisplay:
      'A p-value is the probability of observing data this extreme, assuming the null hypothesis is true.',
    explanationSteps: [
      'It is computed under the assumption that H0 is true.',
      'Smaller p-values mean the observed data would be less likely under H0.',
      'It is not the probability that H0 itself is true.',
    ],
    conceptSummary: 'p-value asks how surprising the data are if the null hypothesis were true.',
  },
  {
    id: 'stat-reject-h0',
    kind: 'mcq',
    prompt: 'If p = 0.03 and alpha = 0.05, what decision is correct?',
    options: [
      'Reject H0 because p < alpha',
      'Fail to reject H0 because p < alpha',
      'Reject H0 because p > alpha',
      'Accept H0 with certainty',
    ],
    correctOption: 0,
    explanationSteps: [
      'The lecture rule is straightforward: if p < alpha, reject H0.',
      'Here 0.03 is below 0.05, so the result is statistically significant.',
      'That does not mean the effect is automatically large or important.',
    ],
    conceptSummary: 'p below alpha means the result is statistically significant and H0 is rejected.',
  },
  {
    id: 'stat-fail-reject-h0',
    kind: 'mcq',
    prompt: 'If p = 0.19 and alpha = 0.05, what is the correct interpretation?',
    options: [
      'Fail to reject H0 because p is not below alpha',
      'Reject H0 because the p-value exists',
      'Accept Ha because the sample was collected',
      'Conclude both hypotheses are true',
    ],
    correctOption: 0,
    explanationSteps: [
      'A p-value larger than alpha is not statistically significant by the chosen threshold.',
      'So the evidence is insufficient to reject H0.',
      'That is weaker than proving H0 true.',
    ],
    conceptSummary: 'When p is not below alpha, the data do not justify rejecting the null hypothesis.',
  },
  {
    id: 'stat-significance-definition',
    kind: 'mcq',
    prompt: 'What does statistical significance mean in this course context?',
    options: [
      'The observed result is unlikely under H0 at the chosen alpha level',
      'The result is definitely important in practice for all decisions',
      'The result must generalize to every context and user population',
      'The mean and median are equal in the sample distribution',
    ],
    correctOption: 0,
    explanationSteps: [
      'Statistical significance is about evidence against H0, not practical value.',
      'A significant result can still be small or not worth acting on.',
      'Practical significance and statistical significance are different ideas.',
    ],
    conceptSummary: 'Significance means unlikely under H0, not automatically important.',
  },
]

const TEST_SELECTION_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'stat-paired-test-same-users',
    kind: 'mcq',
    prompt:
      'Which test fits the same participants using both menu designs and rating each one?',
    options: ['Paired t-test', 'Unpaired t-test', 'Chi-square test', 'Median-only summary'],
    correctOption: 0,
    explanationSteps: [
      'The groups are related because the same participants provide both scores.',
      'Paired t-tests are used for related groups or repeated measures.',
      'Unpaired t-tests assume unrelated groups.',
    ],
    conceptSummary: 'Use a paired t-test when the two sets of observations are related.',
  },
  {
    id: 'stat-unpaired-test-different-groups',
    kind: 'mcq',
    prompt:
      'Researchers compare task times from two different participant groups, one per prototype. Which test fits best?',
    options: ['Unpaired t-test', 'Paired t-test', 'One-tail test only', 'Mode comparison'],
    correctOption: 0,
    explanationSteps: [
      'The samples come from unrelated groups.',
      'That makes the comparison independent rather than repeated.',
      'An unpaired t-test matches unrelated group means.',
    ],
    conceptSummary: 'Use an unpaired t-test when the groups are independent.',
  },
  {
    id: 'stat-one-tail-directional',
    kind: 'mcq',
    prompt:
      'A team predicts interface B will specifically reduce errors compared with interface A. Which tail choice fits?',
    options: ['One-tail', 'Two-tail', 'No-tail', 'Only descriptive statistics'],
    correctOption: 0,
    explanationSteps: [
      'The hypothesis is directional: B should reduce errors.',
      'Directional predictions align with one-tail tests.',
      'Two-tail tests are used when any difference matters regardless of direction.',
    ],
    conceptSummary: 'Use one-tail tests for directional hypotheses.',
  },
  {
    id: 'stat-two-tail-bidirectional',
    kind: 'mcq',
    prompt:
      'Researchers only predict that two designs will differ, but do not predict which is better. Which choice fits?',
    options: ['Two-tail', 'One-tail', 'Paired only', 'Alpha must be 0.10'],
    correctOption: 0,
    explanationSteps: [
      'The hypothesis is non-directional: any difference matters.',
      'Two-tail tests check for differences in either direction.',
      'One-tail would be inappropriate without a justified directional prediction.',
    ],
    conceptSummary: 'Use two-tail tests when the hypothesis is bi-directional or non-directional.',
  },
  {
    id: 'stat-test-selection-match',
    kind: 'match',
    prompt: 'Match each study setup to the most appropriate test framing.',
    pairs: [
      { left: 'Same users try both designs', right: 'Paired t-test' },
      { left: 'Different users try different designs', right: 'Unpaired t-test' },
      { left: 'Prediction states one design will be better', right: 'One-tail' },
      { left: 'Prediction states designs will differ somehow', right: 'Two-tail' },
    ],
    explanationSteps: [
      'Related samples imply paired testing; unrelated samples imply unpaired testing.',
      'Directional hypotheses imply one-tail; non-directional hypotheses imply two-tail.',
      'This is a frequent exam distinction in statistical analysis questions.',
    ],
    conceptSummary: 'Separate design choice questions into related vs unrelated groups and directional vs non-directional hypotheses.',
  },
]

const DESCRIPTIVE_STATS_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'stat-mean-definition',
    kind: 'mcq',
    prompt: 'Which descriptive statistic is the arithmetic average?',
    options: ['Mean', 'Median', 'Mode', 'Standard deviation'],
    correctOption: 0,
    explanationSteps: [
      'The mean adds all values and divides by the number of observations.',
      'Median is the middle value after sorting.',
      'Mode is the most frequent value.',
    ],
    conceptSummary: 'Mean is the average.',
  },
  {
    id: 'stat-median-definition',
    kind: 'mcq',
    prompt: 'Which descriptive statistic is the middle value when data are sorted?',
    options: ['Median', 'Mean', 'Mode', 'Alpha'],
    correctOption: 0,
    explanationSteps: [
      'Median is the center of the ordered distribution.',
      'It is often less sensitive to extreme outliers than the mean.',
      'Alpha is the significance threshold, not a descriptive statistic.',
    ],
    conceptSummary: 'Median is the ordered middle value.',
  },
  {
    id: 'stat-mode-definition',
    kind: 'mcq',
    prompt: 'Which descriptive statistic captures the most frequent value?',
    options: ['Mode', 'Mean', 'p-value', 'Type I error'],
    correctOption: 0,
    explanationSteps: [
      'Mode refers to the value that appears most often.',
      'It can be useful for categorical or repeated-response data.',
      'The other options are different statistical concepts.',
    ],
    conceptSummary: 'Mode identifies the most common value.',
  },
  {
    id: 'stat-standard-deviation',
    kind: 'mcq',
    prompt: 'What does standard deviation primarily describe?',
    options: [
      'How spread out the values are around the mean',
      'Whether H0 is true',
      'Which design to deploy',
      'The middle response only',
    ],
    correctOption: 0,
    explanationSteps: [
      'Standard deviation describes variability or dispersion in the data.',
      'Higher standard deviation means scores are more spread out.',
      'It is descriptive, not a hypothesis test decision rule.',
    ],
    conceptSummary: 'Standard deviation summarizes spread around the mean.',
  },
]

const ERROR_AND_ASSUMPTION_QUESTIONS: NetworkingQuestion[] = [
  {
    id: 'stat-type-one',
    kind: 'mcq',
    prompt: 'Type I error is best described as which mistake?',
    options: [
      'False positive',
      'False negative',
      'Right answer to the wrong question',
      'Wrong interpretation after significance',
    ],
    correctOption: 0,
    explanationSteps: [
      'Type I error means rejecting H0 when H0 is actually true.',
      'That is the classic false positive.',
      'It is related to alpha because alpha sets the tolerated risk threshold.',
    ],
    conceptSummary: 'Type I error = false positive.',
  },
  {
    id: 'stat-type-two',
    kind: 'mcq',
    prompt: 'Type II error is best described as which mistake?',
    options: [
      'False negative',
      'False positive',
      'Wrong interpretation after significance',
      'Picking median instead of mean',
    ],
    correctOption: 0,
    explanationSteps: [
      'Type II error means failing to reject H0 when a real effect exists.',
      'That is a false negative.',
      'It can happen when the study lacks power or the effect is hard to detect.',
    ],
    conceptSummary: 'Type II error = false negative.',
  },
  {
    id: 'stat-type-three',
    kind: 'mcq',
    prompt: 'Type III error in the lecture framing refers to what?',
    options: [
      'Getting the right answer to the wrong question',
      'Rejecting H0 when H0 is true',
      'Failing to reject H0 when H0 is false',
      'Using a one-tail test',
    ],
    correctOption: 0,
    explanationSteps: [
      'Type III is not about the numeric computation itself.',
      'It is about answering a different question than the one that should have been asked.',
      'That makes the conclusion irrelevant even if technically correct for the wrong setup.',
    ],
    conceptSummary: 'Type III error = right answer, wrong question.',
  },
  {
    id: 'stat-type-four',
    kind: 'mcq',
    prompt: 'Type IV error in this course framing is what kind of problem?',
    options: [
      'Wrong interpretation after finding significance',
      'Choosing the wrong mean formula',
      'Using within-participants design',
      'Collecting too many participants',
    ],
    correctOption: 0,
    explanationSteps: [
      'Type IV concerns what happens after significance is found.',
      'The mistake is overinterpreting or misinterpreting the result.',
      'A result can be significant yet still be explained badly or applied wrongly.',
    ],
    conceptSummary: 'Type IV error = incorrect interpretation of a significant finding.',
  },
  {
    id: 'stat-t-test-assumptions',
    kind: 'text',
    prompt: 'Name core assumptions that should hold before using a t-test.',
    requiredConcepts: [
      { label: 'Numeric interval-style outcome', keywords: ['numeric', 'continuous', 'interval'] },
      { label: 'Reasonable distribution assumption', keywords: ['normal', 'approximately normal'] },
      { label: 'Appropriate independence/relatedness', keywords: ['independent', 'related groups', 'matched correctly'] },
    ],
    answerDisplay:
      'A t-test assumes a numeric outcome, a roughly normal distribution, and the correct relationship structure between groups such as independent groups for unpaired tests or related groups for paired tests.',
    explanationSteps: [
      'T-tests compare means on numeric data.',
      'They typically assume the data are roughly normal or that sample conditions justify the approximation.',
      'You must also choose the correct paired vs unpaired setup based on whether observations are related.',
    ],
    conceptSummary: 'Check measurement type, distribution assumptions, and whether groups are related or independent.',
  },
]

const ALL_QUESTIONS = {
  'controlled-experiments': CONTROLLED_EXPERIMENT_QUESTIONS,
  'hypotheses-p-values': HYPOTHESIS_QUESTIONS,
  'test-selection': TEST_SELECTION_QUESTIONS,
  'descriptive-statistics': DESCRIPTIVE_STATS_QUESTIONS,
  'errors-assumptions': ERROR_AND_ASSUMPTION_QUESTIONS,
} as const

function pick(subtopic: keyof typeof ALL_QUESTIONS): NetworkingQuestion {
  return randomPick(ALL_QUESTIONS[subtopic])
}

export function generateControlledExperimentQuestion(): NetworkingQuestion {
  return pick('controlled-experiments')
}

export function generateHypothesisQuestion(): NetworkingQuestion {
  return pick('hypotheses-p-values')
}

export function generateTestSelectionQuestion(): NetworkingQuestion {
  return pick('test-selection')
}

export function generateDescriptiveStatsQuestion(): NetworkingQuestion {
  return pick('descriptive-statistics')
}

export function generateErrorsAssumptionsQuestion(): NetworkingQuestion {
  return pick('errors-assumptions')
}
