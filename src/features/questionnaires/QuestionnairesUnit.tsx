import { UnitScaffold } from '../../components/UnitScaffold'
import { NetworkingDrillPractice } from '../networkingShared/networkingDrills'
import {
  generateQuestionnaireBasicsQuestion,
  generateQuestionnaireInterpretationQuestion,
  generateUeqQuestion,
  generateUeqShortQuestion,
} from './questions'

export function QuestionnairesUnit() {
  return (
    <UnitScaffold
      unitLabel="Questionnaires"
      subtopics={[
        {
          id: 'basics',
          label: 'Questionnaires in Usability Testing',
          render: () => (
            <NetworkingDrillPractice
              key="questionnaires-basics"
              title="Questionnaires > Questionnaires in Usability Testing"
              generateQuestion={generateQuestionnaireBasicsQuestion}
            />
          ),
        },
        {
          id: 'ueq',
          label: 'UEQ Scales',
          render: () => (
            <NetworkingDrillPractice
              key="questionnaires-ueq"
              title="Questionnaires > UEQ Scales"
              generateQuestion={generateUeqQuestion}
            />
          ),
        },
        {
          id: 'ueq-s',
          label: 'UEQ-S + Pragmatic vs Hedonic',
          render: () => (
            <NetworkingDrillPractice
              key="questionnaires-ueqs"
              title="Questionnaires > UEQ-S + Pragmatic vs Hedonic"
              generateQuestion={generateUeqShortQuestion}
            />
          ),
        },
        {
          id: 'interpretation',
          label: 'Benchmarks + Result Interpretation',
          render: () => (
            <NetworkingDrillPractice
              key="questionnaires-interpretation"
              title="Questionnaires > Benchmarks + Result Interpretation"
              generateQuestion={generateQuestionnaireInterpretationQuestion}
            />
          ),
        },
      ]}
    />
  )
}
