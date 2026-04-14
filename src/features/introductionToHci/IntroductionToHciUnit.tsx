import { UnitScaffold } from '../../components/UnitScaffold'
import { NetworkingDrillPractice } from '../networkingShared/networkingDrills'
import {
  generateGoodPoorDesignQuestion,
  generateIntroComparisonsQuestion,
  generateUiUxInteractionQuestion,
  generateUsefulUsableMeaningfulQuestion,
  generateUserCenteredDesignQuestion,
  generateWhatIsHciQuestion,
} from './questions'

export function IntroductionToHciUnit() {
  return (
    <UnitScaffold
      unitLabel="Introduction to HCI"
      subtopics={[
        {
          id: 'what-is-hci',
          label: 'What is HCI?',
          render: () => (
            <NetworkingDrillPractice
              key="intro-hci-what"
              title="Introduction to HCI > What is HCI?"
              generateQuestion={generateWhatIsHciQuestion}
            />
          ),
        },
        {
          id: 'ui-ux-interaction',
          label: 'UI, UX, and Interaction Design',
          render: () => (
            <NetworkingDrillPractice
              key="intro-hci-uiux"
              title="Introduction to HCI > UI, UX, and Interaction Design"
              generateQuestion={generateUiUxInteractionQuestion}
            />
          ),
        },
        {
          id: 'user-centered-design',
          label: 'User-Centered Design',
          render: () => (
            <NetworkingDrillPractice
              key="intro-hci-ucd"
              title="Introduction to HCI > User-Centered Design"
              generateQuestion={generateUserCenteredDesignQuestion}
            />
          ),
        },
        {
          id: 'useful-usable-meaningful',
          label: 'Useful, Usable, Meaningful',
          render: () => (
            <NetworkingDrillPractice
              key="intro-hci-triad"
              title="Introduction to HCI > Useful, Usable, Meaningful"
              generateQuestion={generateUsefulUsableMeaningfulQuestion}
            />
          ),
        },
        {
          id: 'good-vs-poor-design',
          label: 'Good vs Poor Design',
          render: () => (
            <NetworkingDrillPractice
              key="intro-hci-goodpoor"
              title="Introduction to HCI > Good vs Poor Design"
              generateQuestion={generateGoodPoorDesignQuestion}
            />
          ),
        },
        {
          id: 'comparisons',
          label: 'Design, Engineering, Art, and Why HCI Matters',
          render: () => (
            <NetworkingDrillPractice
              key="intro-hci-comparisons"
              title="Introduction to HCI > Design, Engineering, Art, and Why HCI Matters"
              generateQuestion={generateIntroComparisonsQuestion}
            />
          ),
        },
      ]}
    />
  )
}
