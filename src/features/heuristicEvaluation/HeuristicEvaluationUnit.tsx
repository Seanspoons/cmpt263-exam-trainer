import { UnitScaffold } from '../../components/UnitScaffold'

export function HeuristicEvaluationUnit() {
  return (
    <UnitScaffold
      unitLabel="Heuristic Evaluation"
      subtopics={[
        {
          id: 'overview',
          label: 'HE Foundations',
          plannedDrills: [
            'Classify evaluation methods and analytical evaluation',
            'Recognize Nielsen heuristic violations from scenarios',
            'Practice HE workflow and severity ratings',
          ],
        },
      ]}
    />
  )
}
