import { UnitScaffold } from '../../components/UnitScaffold'
import { NetworkingDrillPractice } from '../networkingShared/networkingDrills'
import {
  generateTcdFoundationsQuestion,
  generateTcdIdentificationQuestion,
  generateTcdInterviewSurveyQuestion,
  generateTcdRequirementsQuestion,
  generateTcdTaskAnalysisQuestion,
} from './questions'

export function TaskCenteredDesignUnit() {
  return (
    <UnitScaffold
      unitLabel="Task-Centered Design"
      subtopics={[
        {
          id: 'foundations',
          label: 'User-Centered and Task-Centered Design',
          render: () => (
            <NetworkingDrillPractice
              key="tcd-foundations"
              title="Task-Centered Design > User-Centered and Task-Centered Design"
              generateQuestion={generateTcdFoundationsQuestion}
            />
          ),
        },
        {
          id: 'identification',
          label: 'Phase I: Identification',
          render: () => (
            <NetworkingDrillPractice
              key="tcd-identification"
              title="Task-Centered Design > Phase I: Identification"
              generateQuestion={generateTcdIdentificationQuestion}
            />
          ),
        },
        {
          id: 'task-analysis-personas',
          label: 'Task Analysis, Scenarios, and Personas',
          render: () => (
            <NetworkingDrillPractice
              key="tcd-analysis"
              title="Task-Centered Design > Task Analysis, Scenarios, and Personas"
              generateQuestion={generateTcdTaskAnalysisQuestion}
            />
          ),
        },
        {
          id: 'requirements',
          label: 'Requirements and Prioritization',
          render: () => (
            <NetworkingDrillPractice
              key="tcd-requirements"
              title="Task-Centered Design > Requirements and Prioritization"
              generateQuestion={generateTcdRequirementsQuestion}
            />
          ),
        },
        {
          id: 'interviews-surveys',
          label: 'Interviews and Surveys',
          render: () => (
            <NetworkingDrillPractice
              key="tcd-interviews"
              title="Task-Centered Design > Interviews and Surveys"
              generateQuestion={generateTcdInterviewSurveyQuestion}
            />
          ),
        },
      ]}
    />
  )
}
