import { UnitScaffold } from '../../components/UnitScaffold'

export function CognitiveWalkthroughUnit() {
  return (
    <UnitScaffold
      unitLabel="Cognitive Walkthrough"
      subtopics={[
        {
          id: 'overview',
          label: 'Walkthrough Preparation + Questions',
          plannedDrills: [
            'Identify which walkthrough question a scenario violates',
            'Compare cognitive walkthrough vs heuristic evaluation',
            'Order the preparation and review steps',
          ],
        },
      ]}
    />
  )
}
