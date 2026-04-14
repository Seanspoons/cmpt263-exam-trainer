import { UnitScaffold } from '../../components/UnitScaffold'

export function InterfaceTypesUnit() {
  return (
    <UnitScaffold
      unitLabel="Interface Types"
      subtopics={[
        {
          id: 'overview',
          label: 'Interface Type Foundations',
          plannedDrills: [
            'Classify interface types from scenarios',
            'Compare benefits and drawbacks across platforms',
            'Choose the right interface style for the task',
          ],
        },
      ]}
    />
  )
}
