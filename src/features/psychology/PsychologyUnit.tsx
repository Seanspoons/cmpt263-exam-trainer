import { UnitScaffold } from '../../components/UnitScaffold'
import { NetworkingDrillPractice } from '../networkingShared/networkingDrills'
import {
  generatePsychActionGulfQuestion,
  generatePsychMemoryLearningQuestion,
  generatePsychMetaphorQuestion,
  generatePsychPrinciplesQuestion,
  generatePsychTransferMentalModelQuestion,
} from './questions'

export function PsychologyUnit() {
  return (
    <UnitScaffold
      unitLabel="Psychology"
      subtopics={[
        {
          id: 'memory-learning',
          label: 'Learning and Memory Review',
          render: () => (
            <NetworkingDrillPractice
              key="psych-memory-learning"
              title="Psychology > Learning and Memory Review"
              generateQuestion={generatePsychMemoryLearningQuestion}
            />
          ),
        },
        {
          id: 'transfer-mental-models',
          label: 'Transfer Effects and Mental Models',
          render: () => (
            <NetworkingDrillPractice
              key="psych-transfer-models"
              title="Psychology > Transfer Effects and Mental Models"
              generateQuestion={generatePsychTransferMentalModelQuestion}
            />
          ),
        },
        {
          id: 'metaphors',
          label: 'Metaphors and DOET',
          render: () => (
            <NetworkingDrillPractice
              key="psych-metaphors"
              title="Psychology > Metaphors and DOET"
              generateQuestion={generatePsychMetaphorQuestion}
            />
          ),
        },
        {
          id: 'action-gulfs',
          label: 'Action Cycle and Gulfs',
          render: () => (
            <NetworkingDrillPractice
              key="psych-action-gulfs"
              title="Psychology > Action Cycle and Gulfs"
              generateQuestion={generatePsychActionGulfQuestion}
            />
          ),
        },
        {
          id: 'principles',
          label: 'Interaction Principles',
          render: () => (
            <NetworkingDrillPractice
              key="psych-principles"
              title="Psychology > Interaction Principles"
              generateQuestion={generatePsychPrinciplesQuestion}
            />
          ),
        },
      ]}
    />
  )
}
