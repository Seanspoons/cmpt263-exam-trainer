import { UnitScaffold } from '../../components/UnitScaffold'
import { NetworkingDrillPractice } from '../networkingShared/networkingDrills'
import {
  generateAnalyticsQuestion,
  generateAnalyticalEvaluationQuestion,
  generateMazeQuestion,
  generatePredictiveModelQuestion,
  generateUsabilityTestingQuestion,
} from './questions'

export function UsabilityAnalyticalEvaluationUnit() {
  return (
    <UnitScaffold
      unitLabel="Usability Study Tools + Analytical Evaluation"
      subtopics={[
        {
          id: 'usability-testing',
          label: 'Usability Testing Core Elements',
          render: () => (
            <NetworkingDrillPractice
              key="usability-testing"
              title="Usability Study Tools + Analytical Evaluation > Usability Testing Core Elements"
              generateQuestion={generateUsabilityTestingQuestion}
            />
          ),
        },
        {
          id: 'maze',
          label: 'Maze + Unmoderated Studies',
          render: () => (
            <NetworkingDrillPractice
              key="usability-maze"
              title="Usability Study Tools + Analytical Evaluation > Maze + Unmoderated Studies"
              generateQuestion={generateMazeQuestion}
            />
          ),
        },
        {
          id: 'analytical-evaluation',
          label: 'Analytical Evaluation',
          render: () => (
            <NetworkingDrillPractice
              key="analytical-eval"
              title="Usability Study Tools + Analytical Evaluation > Analytical Evaluation"
              generateQuestion={generateAnalyticalEvaluationQuestion}
            />
          ),
        },
        {
          id: 'predictive-models',
          label: 'Fitts’ Law, GOMS, KLM',
          render: () => (
            <NetworkingDrillPractice
              key="predictive-models"
              title="Usability Study Tools + Analytical Evaluation > Fitts’ Law, GOMS, KLM"
              generateQuestion={generatePredictiveModelQuestion}
            />
          ),
        },
        {
          id: 'analytics-ab',
          label: 'Web Analytics + A/B Testing + Crowdsourcing',
          render: () => (
            <NetworkingDrillPractice
              key="analytics-ab"
              title="Usability Study Tools + Analytical Evaluation > Web Analytics + A/B Testing + Crowdsourcing"
              generateQuestion={generateAnalyticsQuestion}
            />
          ),
        },
      ]}
    />
  )
}
