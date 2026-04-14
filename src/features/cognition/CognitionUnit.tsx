import { UnitScaffold } from '../../components/UnitScaffold'
import { NetworkingDrillPractice } from '../networkingShared/networkingDrills'
import {
  generateAttentionSalienceQuestion,
  generateCognitionDesignImplicationQuestion,
  generateCognitionFoundationQuestion,
  generateGestaltQuestion,
  generateMemoryQuestion,
  generateModesOfCognitionQuestion,
  generatePerceptionQuestion,
} from './questions'

export function CognitionUnit() {
  return (
    <UnitScaffold
      unitLabel="Cognition"
      subtopics={[
        {
          id: 'foundations',
          label: 'What is Cognition?',
          render: () => (
            <NetworkingDrillPractice
              key="cognition-foundations"
              title="Cognition > What is Cognition?"
              generateQuestion={generateCognitionFoundationQuestion}
            />
          ),
        },
        {
          id: 'modes',
          label: 'Experiential vs Reflective Cognition',
          render: () => (
            <NetworkingDrillPractice
              key="cognition-modes"
              title="Cognition > Experiential vs Reflective Cognition"
              generateQuestion={generateModesOfCognitionQuestion}
            />
          ),
        },
        {
          id: 'attention-salience',
          label: 'Attention and Salience',
          render: () => (
            <NetworkingDrillPractice
              key="cognition-attention"
              title="Cognition > Attention and Salience"
              generateQuestion={generateAttentionSalienceQuestion}
            />
          ),
        },
        {
          id: 'perception',
          label: 'Perception',
          render: () => (
            <NetworkingDrillPractice
              key="cognition-perception"
              title="Cognition > Perception"
              generateQuestion={generatePerceptionQuestion}
            />
          ),
        },
        {
          id: 'gestalt',
          label: 'Gestalt Principles',
          render: () => (
            <NetworkingDrillPractice
              key="cognition-gestalt"
              title="Cognition > Gestalt Principles"
              generateQuestion={generateGestaltQuestion}
            />
          ),
        },
        {
          id: 'memory',
          label: 'Memory and Recognition vs Recall',
          render: () => (
            <NetworkingDrillPractice
              key="cognition-memory"
              title="Cognition > Memory and Recognition vs Recall"
              generateQuestion={generateMemoryQuestion}
            />
          ),
        },
        {
          id: 'design-implications',
          label: 'Design Implications',
          render: () => (
            <NetworkingDrillPractice
              key="cognition-design"
              title="Cognition > Design Implications"
              generateQuestion={generateCognitionDesignImplicationQuestion}
            />
          ),
        },
      ]}
    />
  )
}
