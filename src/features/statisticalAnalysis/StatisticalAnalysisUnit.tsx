import { UnitScaffold } from '../../components/UnitScaffold'
import { NetworkingDrillPractice } from '../networkingShared/networkingDrills'
import {
  generateControlledExperimentQuestion,
  generateDescriptiveStatsQuestion,
  generateErrorsAssumptionsQuestion,
  generateHypothesisQuestion,
  generateTestSelectionQuestion,
} from './questions'

export function StatisticalAnalysisUnit() {
  return (
    <UnitScaffold
      unitLabel="Statistical Analysis"
      subtopics={[
        {
          id: 'controlled-experiments',
          label: 'Controlled Experiments + Variables',
          render: () => (
            <NetworkingDrillPractice
              key="stat-analysis-controlled"
              title="Statistical Analysis > Controlled Experiments + Variables"
              generateQuestion={generateControlledExperimentQuestion}
            />
          ),
        },
        {
          id: 'hypotheses-p-values',
          label: 'H0, Ha, Significance, p-value',
          render: () => (
            <NetworkingDrillPractice
              key="stat-analysis-hyp"
              title="Statistical Analysis > H0, Ha, Significance, p-value"
              generateQuestion={generateHypothesisQuestion}
            />
          ),
        },
        {
          id: 'test-selection',
          label: 'Paired vs Unpaired + Tails',
          render: () => (
            <NetworkingDrillPractice
              key="stat-analysis-tests"
              title="Statistical Analysis > Paired vs Unpaired + Tails"
              generateQuestion={generateTestSelectionQuestion}
            />
          ),
        },
        {
          id: 'descriptive-statistics',
          label: 'Descriptive Statistics',
          render: () => (
            <NetworkingDrillPractice
              key="stat-analysis-desc"
              title="Statistical Analysis > Descriptive Statistics"
              generateQuestion={generateDescriptiveStatsQuestion}
            />
          ),
        },
        {
          id: 'errors-assumptions',
          label: 'Error Types + Assumptions',
          render: () => (
            <NetworkingDrillPractice
              key="stat-analysis-errors"
              title="Statistical Analysis > Error Types + Assumptions"
              generateQuestion={generateErrorsAssumptionsQuestion}
            />
          ),
        },
      ]}
    />
  )
}
