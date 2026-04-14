import { UnitScaffold } from '../../components/UnitScaffold'
import { NetworkingDrillPractice } from '../networkingShared/networkingDrills'
import {
  generateDiscountHeQuestion,
  generateHeErrorTypeQuestion,
  generateHeFoundationsQuestion,
  generateHeWorkflowSeverityQuestion,
  generateNielsenHeuristicQuestion,
} from './questions'

export function HeuristicEvaluationUnit() {
  return (
    <UnitScaffold
      unitLabel="Heuristic Evaluation"
      subtopics={[
        {
          id: 'foundations',
          label: 'Why Evaluation Matters',
          render: () => (
            <NetworkingDrillPractice
              key="he-foundations"
              title="Heuristic Evaluation > Why Evaluation Matters"
              generateQuestion={generateHeFoundationsQuestion}
            />
          ),
        },
        {
          id: 'discount-he',
          label: 'Analytical Evaluation and HE Basics',
          render: () => (
            <NetworkingDrillPractice
              key="he-discount"
              title="Heuristic Evaluation > Analytical Evaluation and HE Basics"
              generateQuestion={generateDiscountHeQuestion}
            />
          ),
        },
        {
          id: 'workflow-severity',
          label: 'Workflow, Evaluators, and Severity',
          render: () => (
            <NetworkingDrillPractice
              key="he-workflow"
              title="Heuristic Evaluation > Workflow, Evaluators, and Severity"
              generateQuestion={generateHeWorkflowSeverityQuestion}
            />
          ),
        },
        {
          id: 'heuristics',
          label: 'Nielsen’s 10 Heuristics',
          render: () => (
            <NetworkingDrillPractice
              key="he-nielsen"
              title="Heuristic Evaluation > Nielsen’s 10 Heuristics"
              generateQuestion={generateNielsenHeuristicQuestion}
            />
          ),
        },
        {
          id: 'error-types',
          label: 'Error Types and Prevention',
          render: () => (
            <NetworkingDrillPractice
              key="he-errors"
              title="Heuristic Evaluation > Error Types and Prevention"
              generateQuestion={generateHeErrorTypeQuestion}
            />
          ),
        },
      ]}
    />
  )
}
