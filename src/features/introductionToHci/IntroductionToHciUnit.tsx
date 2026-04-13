import { UnitScaffold } from '../../components/UnitScaffold'

export function IntroductionToHciUnit() {
  return (
    <UnitScaffold
      unitLabel="Introduction to HCI"
      subtopics={[
        {
          id: 'overview',
          label: 'HCI Foundations',
          plannedDrills: [
            'Define HCI, UI, UX, and interaction design',
            'Compare useful, usable, and meaningful',
            'Recognize user-centered design and designer fallacy scenarios',
          ],
        },
      ]}
    />
  )
}
