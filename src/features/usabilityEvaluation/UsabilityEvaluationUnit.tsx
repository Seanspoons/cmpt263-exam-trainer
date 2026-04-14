import { UnitScaffold } from '../../components/UnitScaffold'
import { NetworkingDrillPractice } from '../networkingShared/networkingDrills'
import {
  generateUeFoundationQuestion,
  generateUeTaskParticipantQuestion,
  generateUeTestingBasicsQuestion,
  generateUeTypesQuestion,
} from './questions'

export function UsabilityEvaluationUnit() {
  return (
    <UnitScaffold
      unitLabel="Usability Evaluation"
      subtopics={[
        {
          id: 'why-evaluate',
          label: 'Why, Where, and When to Evaluate',
          render: () => (
            <NetworkingDrillPractice
              key="ue-foundations"
              title="Usability Evaluation > Why, Where, and When to Evaluate"
              generateQuestion={generateUeFoundationQuestion}
            />
          ),
        },
        {
          id: 'evaluation-types',
          label: 'Types of Evaluation',
          render: () => (
            <NetworkingDrillPractice
              key="ue-types"
              title="Usability Evaluation > Types of Evaluation"
              generateQuestion={generateUeTypesQuestion}
            />
          ),
        },
        {
          id: 'testing-basics',
          label: 'Usability Testing Basics and Process',
          render: () => (
            <NetworkingDrillPractice
              key="ue-basics"
              title="Usability Evaluation > Usability Testing Basics and Process"
              generateQuestion={generateUeTestingBasicsQuestion}
            />
          ),
        },
        {
          id: 'tasks-participants',
          label: 'Task Design and Participants',
          render: () => (
            <NetworkingDrillPractice
              key="ue-tasks-participants"
              title="Usability Evaluation > Task Design and Participants"
              generateQuestion={generateUeTaskParticipantQuestion}
            />
          ),
        },
      ]}
    />
  )
}
