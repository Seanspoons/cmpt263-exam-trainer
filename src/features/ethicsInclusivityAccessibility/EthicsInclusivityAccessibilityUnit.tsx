import { UnitScaffold } from '../../components/UnitScaffold'

export function EthicsInclusivityAccessibilityUnit() {
  return (
    <UnitScaffold
      unitLabel="Ethics + Inclusivity + Accessibility"
      subtopics={[
        {
          id: 'overview',
          label: 'Ethics, Inclusion, Accessibility',
          plannedDrills: [
            'Identify ethics principle violations',
            'Compare personalization vs customization',
            'Map disability scenarios to accessibility support needs',
          ],
        },
      ]}
    />
  )
}
