import { UnitScaffold } from '../../components/UnitScaffold'

export function TuiUnit() {
  return (
    <UnitScaffold
      unitLabel="Tangible User Interfaces (TUI)"
      subtopics={[
        {
          id: 'overview',
          label: 'TUI Concepts + Strengths',
          plannedDrills: [
            'Recognize TUI history and named concepts',
            'Match strengths and limitations to TUIs',
            'Identify physical constraints and epistemic actions',
          ],
        },
      ]}
    />
  )
}
