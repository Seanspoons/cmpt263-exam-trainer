import { UnitScaffold } from '../../components/UnitScaffold'

export function LowFidelityPrototypesUnit() {
  return (
    <UnitScaffold
      unitLabel="Low-Fidelity Prototypes (LFP)"
      subtopics={[
        {
          id: 'overview',
          label: 'LFP Foundations',
          plannedDrills: [
            'Identify prototype purpose, sketching, storyboarding, and paper prototyping concepts',
            'Classify benefits, drawbacks, pitfalls, and good LFP practices',
            'Recognize low-fidelity examples and exploration strategies',
          ],
        },
      ]}
    />
  )
}
