import { UnitScaffold } from '../../components/UnitScaffold'
import { NetworkingDrillPractice } from '../networkingShared/networkingDrills'
import {
  generateConsistencyAffordanceQuestion,
  generateDesignPrinciplesQuestion,
  generateScenarioPrinciplesQuestion,
  generateUtilityUsefulQuestion,
  generateUxGoalsQuestion,
  generateWhatIsUsabilityQuestion,
} from './questions'

export function UsabilityUnit() {
  return (
    <UnitScaffold
      unitLabel="Usability"
      subtopics={[
        {
          id: 'what-is-usability',
          label: 'What is Usability?',
          render: () => (
            <NetworkingDrillPractice
              key="usability-what"
              title="Usability > What is Usability?"
              generateQuestion={generateWhatIsUsabilityQuestion}
            />
          ),
        },
        {
          id: 'utility-useful',
          label: 'Usability vs Utility vs Useful',
          render: () => (
            <NetworkingDrillPractice
              key="usability-utility"
              title="Usability > Usability vs Utility vs Useful"
              generateQuestion={generateUtilityUsefulQuestion}
            />
          ),
        },
        {
          id: 'ux-goals',
          label: 'User Experience Goals',
          render: () => (
            <NetworkingDrillPractice
              key="usability-uxgoals"
              title="Usability > User Experience Goals"
              generateQuestion={generateUxGoalsQuestion}
            />
          ),
        },
        {
          id: 'design-principles',
          label: 'Design Principles',
          render: () => (
            <NetworkingDrillPractice
              key="usability-principles"
              title="Usability > Design Principles"
              generateQuestion={generateDesignPrinciplesQuestion}
            />
          ),
        },
        {
          id: 'scenario-principles',
          label: 'Visibility, Feedback, Constraints, Consistency',
          render: () => (
            <NetworkingDrillPractice
              key="usability-scenarios"
              title="Usability > Visibility, Feedback, Constraints, Consistency"
              generateQuestion={generateScenarioPrinciplesQuestion}
            />
          ),
        },
        {
          id: 'consistency-affordance',
          label: 'Consistency and Affordance',
          render: () => (
            <NetworkingDrillPractice
              key="usability-affordance"
              title="Usability > Consistency and Affordance"
              generateQuestion={generateConsistencyAffordanceQuestion}
            />
          ),
        },
      ]}
    />
  )
}
