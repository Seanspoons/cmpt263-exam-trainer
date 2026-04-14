import { UnitScaffold } from '../../components/UnitScaffold'
import { NetworkingDrillPractice } from '../networkingShared/networkingDrills'
import {
  generateLfpAlternativesQuestion,
  generateLfpFoundationQuestion,
  generateLfpPitfallsQuestion,
  generateLfpSketchingQuestion,
  generateLfpStoryboardQuestion,
} from './questions'

export function LowFidelityPrototypesUnit() {
  return (
    <UnitScaffold
      unitLabel="Low-Fidelity Prototypes (LFP)"
      subtopics={[
        {
          id: 'foundations',
          label: 'What Is a Prototype?',
          render: () => (
            <NetworkingDrillPractice
              key="lfp-foundations"
              title="Low-Fidelity Prototypes (LFP) > What Is a Prototype?"
              generateQuestion={generateLfpFoundationQuestion}
            />
          ),
        },
        {
          id: 'sketching-ideation',
          label: 'Sketching and Ideation',
          render: () => (
            <NetworkingDrillPractice
              key="lfp-sketching"
              title="Low-Fidelity Prototypes (LFP) > Sketching and Ideation"
              generateQuestion={generateLfpSketchingQuestion}
            />
          ),
        },
        {
          id: 'alternatives',
          label: 'Getting the Right Design',
          render: () => (
            <NetworkingDrillPractice
              key="lfp-alternatives"
              title="Low-Fidelity Prototypes (LFP) > Getting the Right Design"
              generateQuestion={generateLfpAlternativesQuestion}
            />
          ),
        },
        {
          id: 'storyboarding-paper',
          label: 'Storyboarding and Paper Prototyping',
          render: () => (
            <NetworkingDrillPractice
              key="lfp-storyboarding"
              title="Low-Fidelity Prototypes (LFP) > Storyboarding and Paper Prototyping"
              generateQuestion={generateLfpStoryboardQuestion}
            />
          ),
        },
        {
          id: 'pitfalls-tips',
          label: 'Pitfalls and Good Practices',
          render: () => (
            <NetworkingDrillPractice
              key="lfp-pitfalls"
              title="Low-Fidelity Prototypes (LFP) > Pitfalls and Good Practices"
              generateQuestion={generateLfpPitfallsQuestion}
            />
          ),
        },
      ]}
    />
  )
}
