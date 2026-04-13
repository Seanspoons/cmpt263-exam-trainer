import { UnitScaffold } from '../../components/UnitScaffold'

export function DarkPatternsUnit() {
  return (
    <UnitScaffold
      unitLabel="Dark Patterns"
      subtopics={[
        {
          id: 'overview',
          label: 'Patterns, Categories, Harms',
          plannedDrills: [
            'Scenario to Brignull pattern identification',
            'Scenario to Gray et al. category classification',
            'Ethical redesign practice',
          ],
        },
      ]}
    />
  )
}
