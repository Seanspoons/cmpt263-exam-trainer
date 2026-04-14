import { UnitScaffold } from '../../components/UnitScaffold'
import { NetworkingDrillPractice } from '../networkingShared/networkingDrills'
import {
  generateCliGuiQuestion,
  generateEmergingInterfaceQuestion,
  generateInterfaceFoundationsQuestion,
  generateTouchMobileQuestion,
  generateTuiTaskSelectionQuestion,
  generateWimpQuestion,
} from './questions'

export function InterfaceTypesUnit() {
  return (
    <UnitScaffold
      unitLabel="Interface Types"
      subtopics={[
        {
          id: 'foundations',
          label: 'What is a Computer User Interface?',
          render: () => (
            <NetworkingDrillPractice
              key="interface-foundations"
              title="Interface Types > What is a Computer User Interface?"
              generateQuestion={generateInterfaceFoundationsQuestion}
            />
          ),
        },
        {
          id: 'cli-gui',
          label: 'CLI and GUI',
          render: () => (
            <NetworkingDrillPractice
              key="interface-cligui"
              title="Interface Types > CLI and GUI"
              generateQuestion={generateCliGuiQuestion}
            />
          ),
        },
        {
          id: 'wimp',
          label: 'GUI / WIMP',
          render: () => (
            <NetworkingDrillPractice
              key="interface-wimp"
              title="Interface Types > GUI / WIMP"
              generateQuestion={generateWimpQuestion}
            />
          ),
        },
        {
          id: 'touch-mobile',
          label: 'Touch Screens and Mobile',
          render: () => (
            <NetworkingDrillPractice
              key="interface-touchmobile"
              title="Interface Types > Touch Screens and Mobile"
              generateQuestion={generateTouchMobileQuestion}
            />
          ),
        },
        {
          id: 'emerging',
          label: 'Speech, Wearables, AR/VR, NUI',
          render: () => (
            <NetworkingDrillPractice
              key="interface-emerging"
              title="Interface Types > Speech, Wearables, AR/VR, NUI"
              generateQuestion={generateEmergingInterfaceQuestion}
            />
          ),
        },
        {
          id: 'tui-task-selection',
          label: 'TUI and Choosing the Right Interface',
          render: () => (
            <NetworkingDrillPractice
              key="interface-selection"
              title="Interface Types > TUI and Choosing the Right Interface"
              generateQuestion={generateTuiTaskSelectionQuestion}
            />
          ),
        },
      ]}
    />
  )
}
