import { UnitScaffold } from '../../components/UnitScaffold'
import { NetworkingDrillPractice } from '../networkingShared/networkingDrills'
import {
  generateVdpCrapQuestion,
  generateVdpFoundationsQuestion,
  generateVdpGestaltPlatformQuestion,
  generateVdpHierarchyQuestion,
  generateVdpSimplicityQuestion,
  generateVdpSpacingGroupingQuestion,
} from './questions'

export function VisualDesignPrinciplesUnit() {
  return (
    <UnitScaffold
      unitLabel="Visual Design Principles"
      subtopics={[
        {
          id: 'foundations',
          label: 'Why Visual Design Matters',
          render: () => (
            <NetworkingDrillPractice
              key="vdp-foundations"
              title="Visual Design Principles > Why Visual Design Matters"
              generateQuestion={generateVdpFoundationsQuestion}
            />
          ),
        },
        {
          id: 'spacing-grouping',
          label: 'Spacing and Grouping',
          render: () => (
            <NetworkingDrillPractice
              key="vdp-spacing"
              title="Visual Design Principles > Spacing and Grouping"
              generateQuestion={generateVdpSpacingGroupingQuestion}
            />
          ),
        },
        {
          id: 'simplicity',
          label: 'Simplicity',
          render: () => (
            <NetworkingDrillPractice
              key="vdp-simplicity"
              title="Visual Design Principles > Simplicity"
              generateQuestion={generateVdpSimplicityQuestion}
            />
          ),
        },
        {
          id: 'crap',
          label: 'C.R.A.P. Principles',
          render: () => (
            <NetworkingDrillPractice
              key="vdp-crap"
              title="Visual Design Principles > C.R.A.P. Principles"
              generateQuestion={generateVdpCrapQuestion}
            />
          ),
        },
        {
          id: 'hierarchy',
          label: 'Visual Hierarchy',
          render: () => (
            <NetworkingDrillPractice
              key="vdp-hierarchy"
              title="Visual Design Principles > Visual Hierarchy"
              generateQuestion={generateVdpHierarchyQuestion}
            />
          ),
        },
        {
          id: 'gestalt-platform',
          label: 'Gestalt Review and Platform Considerations',
          render: () => (
            <NetworkingDrillPractice
              key="vdp-gestalt"
              title="Visual Design Principles > Gestalt Review and Platform Considerations"
              generateQuestion={generateVdpGestaltPlatformQuestion}
            />
          ),
        },
      ]}
    />
  )
}
