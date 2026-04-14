import { UnitScaffold } from '../../components/UnitScaffold'

export function VisualDesignPrinciplesUnit() {
  return (
    <UnitScaffold
      unitLabel="Visual Design Principles"
      subtopics={[
        {
          id: 'overview',
          label: 'Visual Design Foundations',
          plannedDrills: [
            'Identify spacing, grouping, simplicity, and CRAP examples',
            'Classify hierarchy techniques from scenarios',
            'Compare web and mobile visual design constraints',
          ],
        },
      ]}
    />
  )
}
