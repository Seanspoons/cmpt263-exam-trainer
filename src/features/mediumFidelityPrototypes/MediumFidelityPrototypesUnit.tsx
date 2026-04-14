import { UnitScaffold } from '../../components/UnitScaffold'

export function MediumFidelityPrototypesUnit() {
  return (
    <UnitScaffold
      unitLabel="Medium-Fidelity Prototypes (MFP)"
      subtopics={[
        {
          id: 'overview',
          label: 'MFP Foundations',
          plannedDrills: [
            'Classify scripted simulations, Wizard of Oz, and prototype breadth/depth types',
            'Compare LFP, MFP, and HFP tradeoffs',
            'Recognize Balsamiq and Figma concepts and modes',
          ],
        },
      ]}
    />
  )
}
