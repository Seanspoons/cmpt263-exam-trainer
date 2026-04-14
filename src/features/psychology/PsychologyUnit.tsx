import { UnitScaffold } from '../../components/UnitScaffold'

export function PsychologyUnit() {
  return (
    <UnitScaffold
      unitLabel="Psychology"
      subtopics={[
        {
          id: 'overview',
          label: 'Psychology Foundations',
          plannedDrills: [
            'Identify transfer effects, mental models, and gulf scenarios',
            'Order the action cycle and compare execution vs evaluation',
            'Recognize mapping, signifiers, feedback, and conceptual models',
          ],
        },
      ]}
    />
  )
}
