import { UnitScaffold } from '../../components/UnitScaffold'
import { NetworkingDrillPractice } from '../networkingShared/networkingDrills'
import {
  generateCwFourQuestionPrompt,
  generateCwOverviewQuestion,
  generateCwPluralisticQuestion,
  generateCwProcessQuestion,
} from './questions'

export function CognitiveWalkthroughUnit() {
  return (
    <UnitScaffold
      unitLabel="Cognitive Walkthrough"
      subtopics={[
        {
          id: 'overview',
          label: 'Definition + Comparison',
          render: () => (
            <NetworkingDrillPractice
              key="cw-overview"
              title="Cognitive Walkthrough > Definition + Comparison"
              generateQuestion={generateCwOverviewQuestion}
            />
          ),
        },
        {
          id: 'four-questions',
          label: 'The 4 Walkthrough Questions',
          render: () => (
            <NetworkingDrillPractice
              key="cw-four"
              title="Cognitive Walkthrough > The 4 Walkthrough Questions"
              generateQuestion={generateCwFourQuestionPrompt}
            />
          ),
        },
        {
          id: 'process',
          label: 'Preparation + Process',
          render: () => (
            <NetworkingDrillPractice
              key="cw-process"
              title="Cognitive Walkthrough > Preparation + Process"
              generateQuestion={generateCwProcessQuestion}
            />
          ),
        },
        {
          id: 'pluralistic',
          label: 'Pluralistic Walkthrough',
          render: () => (
            <NetworkingDrillPractice
              key="cw-pluralistic"
              title="Cognitive Walkthrough > Pluralistic Walkthrough"
              generateQuestion={generateCwPluralisticQuestion}
            />
          ),
        },
      ]}
    />
  )
}
