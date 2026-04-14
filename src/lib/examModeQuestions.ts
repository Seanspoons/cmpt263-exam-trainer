import { randomPick } from './random'
import type { UnitId } from './study'
import type { NetworkingQuestion } from '../features/networkingShared/networkingDrills'
import {
  generateGoodPoorDesignQuestion,
  generateIntroComparisonsQuestion,
  generateUiUxInteractionQuestion,
  generateUsefulUsableMeaningfulQuestion,
  generateUserCenteredDesignQuestion,
  generateWhatIsHciQuestion,
} from '../features/introductionToHci/questions'
import {
  generateControlledExperimentQuestion,
  generateDescriptiveStatsQuestion,
  generateErrorsAssumptionsQuestion,
  generateHypothesisQuestion,
  generateTestSelectionQuestion,
} from '../features/statisticalAnalysis/questions'
import {
  generateCwFourQuestionPrompt,
  generateCwOverviewQuestion,
  generateCwPluralisticQuestion,
  generateCwProcessQuestion,
} from '../features/cognitiveWalkthrough/questions'
import {
  generateBrignullQuestion,
  generateDarkPatternFoundationQuestion,
  generateDarkPatternRedesignQuestion,
  generateGrayCategoryQuestion,
} from '../features/darkPatterns/questions'
import {
  generateConsentPrivacyQuestion,
  generateDesignEthicsQuestion,
  generateInclusionAccessibilityQuestion,
  generatePersonalizationQuestion,
  generateResearchEthicsQuestion,
} from '../features/ethicsInclusivityAccessibility/questions'
import {
  generateQuestionnaireBasicsQuestion,
  generateQuestionnaireInterpretationQuestion,
  generateUeqQuestion,
  generateUeqShortQuestion,
} from '../features/questionnaires/questions'
import {
  generateTuiConceptQuestion,
  generateTuiFoundationQuestion,
  generateTuiStrengthQuestion,
} from '../features/tui/questions'
import {
  generateAnalyticsQuestion,
  generateAnalyticalEvaluationQuestion,
  generateMazeQuestion,
  generatePredictiveModelQuestion,
  generateUsabilityTestingQuestion,
} from '../features/usabilityAnalyticalEvaluation/questions'

const EXAM_GENERATORS_BY_UNIT: Partial<Record<UnitId, Array<() => NetworkingQuestion>>> = {
  'introduction-to-hci': [
    generateWhatIsHciQuestion,
    generateUiUxInteractionQuestion,
    generateUserCenteredDesignQuestion,
    generateUsefulUsableMeaningfulQuestion,
    generateGoodPoorDesignQuestion,
    generateIntroComparisonsQuestion,
  ],
  'statistical-analysis': [
    generateControlledExperimentQuestion,
    generateHypothesisQuestion,
    generateTestSelectionQuestion,
    generateDescriptiveStatsQuestion,
    generateErrorsAssumptionsQuestion,
  ],
  questionnaires: [
    generateQuestionnaireBasicsQuestion,
    generateUeqQuestion,
    generateUeqShortQuestion,
    generateQuestionnaireInterpretationQuestion,
  ],
  'usability-analytical-evaluation': [
    generateUsabilityTestingQuestion,
    generateMazeQuestion,
    generateAnalyticalEvaluationQuestion,
    generatePredictiveModelQuestion,
    generateAnalyticsQuestion,
  ],
  'cognitive-walkthrough': [
    generateCwOverviewQuestion,
    generateCwFourQuestionPrompt,
    generateCwProcessQuestion,
    generateCwPluralisticQuestion,
  ],
  'dark-patterns': [
    generateDarkPatternFoundationQuestion,
    generateBrignullQuestion,
    generateGrayCategoryQuestion,
    generateDarkPatternRedesignQuestion,
  ],
  'ethics-inclusivity-accessibility': [
    generateResearchEthicsQuestion,
    generateConsentPrivacyQuestion,
    generateDesignEthicsQuestion,
    generateInclusionAccessibilityQuestion,
    generatePersonalizationQuestion,
  ],
  'tangible-user-interfaces': [
    generateTuiFoundationQuestion,
    generateTuiConceptQuestion,
    generateTuiStrengthQuestion,
  ],
}

export function getDefaultExamUnitIds(): UnitId[] {
  return Object.keys(EXAM_GENERATORS_BY_UNIT) as UnitId[]
}

export function generateExamModeQuestion(unitIds: UnitId[]): NetworkingQuestion | null {
  const unitPool = unitIds
    .map((unitId) => EXAM_GENERATORS_BY_UNIT[unitId] ?? [])
    .flat()
  if (unitPool.length === 0) return null
  return randomPick(unitPool)()
}

export function getExamRecommendedTargetQuestionCount(unitIds: UnitId[]): number {
  const selected = unitIds.length > 0 ? unitIds : getDefaultExamUnitIds()
  const generatorCount = selected.reduce((sum, unitId) => {
    const generators = EXAM_GENERATORS_BY_UNIT[unitId] ?? []
    return sum + generators.length
  }, 0)
  return Math.max(10, generatorCount * 2)
}
