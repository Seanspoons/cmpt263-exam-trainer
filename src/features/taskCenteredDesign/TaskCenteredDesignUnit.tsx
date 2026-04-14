import { UnitScaffold } from '../../components/UnitScaffold'

export function TaskCenteredDesignUnit() {
  return (
    <UnitScaffold
      unitLabel="Task-Centered Design"
      subtopics={[
        {
          id: 'overview',
          label: 'Task-Centered Design Foundations',
          plannedDrills: [
            'Identify phases, requirements, and user/task analysis concepts',
            'Classify interview and survey question quality',
            'Recognize FR vs NFR and user-type design needs',
          ],
        },
      ]}
    />
  )
}
