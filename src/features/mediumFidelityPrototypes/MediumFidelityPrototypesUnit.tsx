import { UnitScaffold } from '../../components/UnitScaffold'
import { NetworkingDrillPractice } from '../networkingShared/networkingDrills'
import {
  generateMfpFidelityComparisonQuestion,
  generateMfpFoundationQuestion,
  generateMfpPrototypeTypesQuestion,
  generateMfpScriptedSimulationQuestion,
  generateMfpToolsQuestion,
  generateMfpWizardOfOzQuestion,
} from './questions'

export function MediumFidelityPrototypesUnit() {
  return (
    <UnitScaffold
      unitLabel="Medium-Fidelity Prototypes (MFP)"
      subtopics={[
        {
          id: 'foundations',
          label: 'What Makes a Prototype Medium-Fidelity?',
          render: () => (
            <NetworkingDrillPractice
              key="mfp-foundations"
              title="Medium-Fidelity Prototypes (MFP) > What Makes a Prototype Medium-Fidelity?"
              generateQuestion={generateMfpFoundationQuestion}
            />
          ),
        },
        {
          id: 'scripted-simulation',
          label: 'Scripted Simulations',
          render: () => (
            <NetworkingDrillPractice
              key="mfp-scripted"
              title="Medium-Fidelity Prototypes (MFP) > Scripted Simulations"
              generateQuestion={generateMfpScriptedSimulationQuestion}
            />
          ),
        },
        {
          id: 'wizard-of-oz',
          label: 'Wizard of Oz',
          render: () => (
            <NetworkingDrillPractice
              key="mfp-woz"
              title="Medium-Fidelity Prototypes (MFP) > Wizard of Oz"
              generateQuestion={generateMfpWizardOfOzQuestion}
            />
          ),
        },
        {
          id: 'fidelity-comparison',
          label: 'LFP, MFP, and HFP Comparison',
          render: () => (
            <NetworkingDrillPractice
              key="mfp-comparison"
              title="Medium-Fidelity Prototypes (MFP) > LFP, MFP, and HFP Comparison"
              generateQuestion={generateMfpFidelityComparisonQuestion}
            />
          ),
        },
        {
          id: 'prototype-types',
          label: 'Horizontal, Vertical, T, and Local Prototypes',
          render: () => (
            <NetworkingDrillPractice
              key="mfp-types"
              title="Medium-Fidelity Prototypes (MFP) > Horizontal, Vertical, T, and Local Prototypes"
              generateQuestion={generateMfpPrototypeTypesQuestion}
            />
          ),
        },
        {
          id: 'tools',
          label: 'Balsamiq and Figma Basics',
          render: () => (
            <NetworkingDrillPractice
              key="mfp-tools"
              title="Medium-Fidelity Prototypes (MFP) > Balsamiq and Figma Basics"
              generateQuestion={generateMfpToolsQuestion}
            />
          ),
        },
      ]}
    />
  )
}
