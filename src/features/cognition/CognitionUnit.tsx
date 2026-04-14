import { UnitScaffold } from '../../components/UnitScaffold'

export function CognitionUnit() {
  return (
    <UnitScaffold
      unitLabel="Cognition"
      subtopics={[
        {
          id: 'overview',
          label: 'Cognition Foundations',
          plannedDrills: [
            'Compare experiential and reflective cognition',
            'Recognize attention, perception, memory, and gestalt scenarios',
            'Apply cognitive design implications to interface choices',
          ],
        },
      ]}
    />
  )
}
