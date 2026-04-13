import { UnitScaffold } from '../../components/UnitScaffold'
import { NetworkingDrillPractice } from '../networkingShared/networkingDrills'
import {
  generateConsentPrivacyQuestion,
  generateDesignEthicsQuestion,
  generateInclusionAccessibilityQuestion,
  generatePersonalizationQuestion,
  generateResearchEthicsQuestion,
} from './questions'

export function EthicsInclusivityAccessibilityUnit() {
  return (
    <UnitScaffold
      unitLabel="Ethics + Inclusivity + Accessibility"
      subtopics={[
        {
          id: 'research-ethics',
          label: 'Research Ethics + TCPS 2',
          render: () => (
            <NetworkingDrillPractice
              key="ethics-research"
              title="Ethics + Inclusivity + Accessibility > Research Ethics + TCPS 2"
              generateQuestion={generateResearchEthicsQuestion}
            />
          ),
        },
        {
          id: 'consent-privacy',
          label: 'Consent + Privacy + Accountability',
          render: () => (
            <NetworkingDrillPractice
              key="ethics-consent"
              title="Ethics + Inclusivity + Accessibility > Consent + Privacy + Accountability"
              generateQuestion={generateConsentPrivacyQuestion}
            />
          ),
        },
        {
          id: 'design-ethics',
          label: 'Design Ethics',
          render: () => (
            <NetworkingDrillPractice
              key="ethics-design"
              title="Ethics + Inclusivity + Accessibility > Design Ethics"
              generateQuestion={generateDesignEthicsQuestion}
            />
          ),
        },
        {
          id: 'inclusion-accessibility',
          label: 'Inclusive Design + Accessibility',
          render: () => (
            <NetworkingDrillPractice
              key="ethics-accessibility"
              title="Ethics + Inclusivity + Accessibility > Inclusive Design + Accessibility"
              generateQuestion={generateInclusionAccessibilityQuestion}
            />
          ),
        },
        {
          id: 'personalization',
          label: 'Personalization vs Customization',
          render: () => (
            <NetworkingDrillPractice
              key="ethics-personalization"
              title="Ethics + Inclusivity + Accessibility > Personalization vs Customization"
              generateQuestion={generatePersonalizationQuestion}
            />
          ),
        },
      ]}
    />
  )
}
