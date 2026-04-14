import type { ComponentType } from 'react'

export type UnitId =
  | 'introduction-to-hci'
  | 'usability'
  | 'interface-types'
  | 'cognition'
  | 'statistical-analysis'
  | 'questionnaires'
  | 'usability-analytical-evaluation'
  | 'cognitive-walkthrough'
  | 'dark-patterns'
  | 'ethics-inclusivity-accessibility'
  | 'tangible-user-interfaces'

export type SubtopicId = string

export type QuestionModule = ComponentType

export type UnitOption = {
  id: UnitId
  label: string
  implemented: boolean
  questionCount?: number | 'infinity'
}

export const UNIT_OPTIONS: UnitOption[] = [
  {
    id: 'introduction-to-hci',
    label: 'Introduction to HCI',
    implemented: true,
    questionCount: 18,
  },
  {
    id: 'usability',
    label: 'Usability',
    implemented: true,
    questionCount: 20,
  },
  {
    id: 'interface-types',
    label: 'Interface Types',
    implemented: true,
    questionCount: 22,
  },
  {
    id: 'cognition',
    label: 'Cognition',
    implemented: true,
    questionCount: 25,
  },
  {
    id: 'statistical-analysis',
    label: 'Statistical Analysis',
    implemented: true,
    questionCount: 24,
  },
  {
    id: 'questionnaires',
    label: 'Questionnaires',
    implemented: true,
    questionCount: 13,
  },
  {
    id: 'usability-analytical-evaluation',
    label: 'Usability Study Tools + Analytical Evaluation',
    implemented: true,
    questionCount: 17,
  },
  {
    id: 'cognitive-walkthrough',
    label: 'Cognitive Walkthrough',
    implemented: true,
    questionCount: 13,
  },
  {
    id: 'dark-patterns',
    label: 'Dark Patterns',
    implemented: true,
    questionCount: 16,
  },
  {
    id: 'ethics-inclusivity-accessibility',
    label: 'Ethics + Inclusivity + Accessibility',
    implemented: true,
    questionCount: 19,
  },
  {
    id: 'tangible-user-interfaces',
    label: 'Tangible User Interfaces (TUI)',
    implemented: true,
    questionCount: 9,
  },
]
