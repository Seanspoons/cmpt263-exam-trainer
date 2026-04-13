import { UnitScaffold } from '../../components/UnitScaffold'

export function UsabilityUnit() {
  return (
    <UnitScaffold
      unitLabel="Usability"
      subtopics={[
        {
          id: 'overview',
          label: 'Usability Foundations',
          plannedDrills: [
            'Define usability, utility, and usefulness',
            'Identify design principles from scenarios',
            'Compare real vs perceived affordance',
          ],
        },
      ]}
    />
  )
}
