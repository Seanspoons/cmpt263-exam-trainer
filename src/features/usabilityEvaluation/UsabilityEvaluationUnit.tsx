import { UnitScaffold } from '../../components/UnitScaffold'

export function UsabilityEvaluationUnit() {
  return (
    <UnitScaffold
      unitLabel="Usability Evaluation"
      subtopics={[
        {
          id: 'overview',
          label: 'Usability Evaluation Foundations',
          plannedDrills: [
            'Classify evaluation types, settings, and timing choices',
            'Recognize usability testing structure, think-aloud, and participant decisions',
            'Compare qualitative versus quantitative analysis and heuristic versus user testing',
          ],
        },
      ]}
    />
  )
}
