import { UnitScaffold } from '../../components/UnitScaffold'
import { NetworkingDrillPractice } from '../networkingShared/networkingDrills'
import {
  generateTuiConceptQuestion,
  generateTuiFoundationQuestion,
  generateTuiStrengthQuestion,
} from './questions'

export function TuiUnit() {
  return (
    <UnitScaffold
      unitLabel="Tangible User Interfaces (TUI)"
      subtopics={[
        {
          id: 'foundations',
          label: 'Definition + History',
          render: () => (
            <NetworkingDrillPractice
              key="tui-foundations"
              title="Tangible User Interfaces (TUI) > Definition + History"
              generateQuestion={generateTuiFoundationQuestion}
            />
          ),
        },
        {
          id: 'concepts',
          label: 'Core Concepts',
          render: () => (
            <NetworkingDrillPractice
              key="tui-concepts"
              title="Tangible User Interfaces (TUI) > Core Concepts"
              generateQuestion={generateTuiConceptQuestion}
            />
          ),
        },
        {
          id: 'strengths-limitations',
          label: 'Strengths + Limitations',
          render: () => (
            <NetworkingDrillPractice
              key="tui-strengths"
              title="Tangible User Interfaces (TUI) > Strengths + Limitations"
              generateQuestion={generateTuiStrengthQuestion}
            />
          ),
        },
      ]}
    />
  )
}
