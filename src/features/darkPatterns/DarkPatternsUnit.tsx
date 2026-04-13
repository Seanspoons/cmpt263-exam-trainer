import { UnitScaffold } from '../../components/UnitScaffold'
import { NetworkingDrillPractice } from '../networkingShared/networkingDrills'
import {
  generateBrignullQuestion,
  generateDarkPatternFoundationQuestion,
  generateDarkPatternRedesignQuestion,
  generateGrayCategoryQuestion,
} from './questions'

export function DarkPatternsUnit() {
  return (
    <UnitScaffold
      unitLabel="Dark Patterns"
      subtopics={[
        {
          id: 'foundations',
          label: 'Definition + Harms',
          render: () => (
            <NetworkingDrillPractice
              key="dark-foundations"
              title="Dark Patterns > Definition + Harms"
              generateQuestion={generateDarkPatternFoundationQuestion}
            />
          ),
        },
        {
          id: 'brignull',
          label: 'Brignull Named Patterns',
          render: () => (
            <NetworkingDrillPractice
              key="dark-brignull"
              title="Dark Patterns > Brignull Named Patterns"
              generateQuestion={generateBrignullQuestion}
            />
          ),
        },
        {
          id: 'categories',
          label: 'Gray et al. Categories',
          render: () => (
            <NetworkingDrillPractice
              key="dark-categories"
              title="Dark Patterns > Gray et al. Categories"
              generateQuestion={generateGrayCategoryQuestion}
            />
          ),
        },
        {
          id: 'redesign',
          label: 'Ethical Redesign',
          render: () => (
            <NetworkingDrillPractice
              key="dark-redesign"
              title="Dark Patterns > Ethical Redesign"
              generateQuestion={generateDarkPatternRedesignQuestion}
            />
          ),
        },
      ]}
    />
  )
}
