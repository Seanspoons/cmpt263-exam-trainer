import { useEffect, useState } from 'react'
import { FiBookOpen, FiChevronRight, FiMenu, FiX, FiInfo } from 'react-icons/fi'
import { CognitiveWalkthroughUnit } from './features/cognitiveWalkthrough/CognitiveWalkthroughUnit'
import { DarkPatternsUnit } from './features/darkPatterns/DarkPatternsUnit'
import { EthicsInclusivityAccessibilityUnit } from './features/ethicsInclusivityAccessibility/EthicsInclusivityAccessibilityUnit'
import { HeuristicEvaluationUnit } from './features/heuristicEvaluation/HeuristicEvaluationUnit'
import { InterfaceTypesUnit } from './features/interfaceTypes/InterfaceTypesUnit'
import { IntroductionToHciUnit } from './features/introductionToHci/IntroductionToHciUnit'
import { LowFidelityPrototypesUnit } from './features/lowFidelityPrototypes/LowFidelityPrototypesUnit'
import { MediumFidelityPrototypesUnit } from './features/mediumFidelityPrototypes/MediumFidelityPrototypesUnit'
import { PsychologyUnit } from './features/psychology/PsychologyUnit'
import { QuestionnairesUnit } from './features/questionnaires/QuestionnairesUnit'
import { StatisticalAnalysisUnit } from './features/statisticalAnalysis/StatisticalAnalysisUnit'
import { TaskCenteredDesignUnit } from './features/taskCenteredDesign/TaskCenteredDesignUnit'
import { TuiUnit } from './features/tui/TuiUnit'
import { CognitionUnit } from './features/cognition/CognitionUnit'
import { UsabilityUnit } from './features/usability/UsabilityUnit'
import { UsabilityAnalyticalEvaluationUnit } from './features/usabilityAnalyticalEvaluation/UsabilityAnalyticalEvaluationUnit'
import { VisualDesignPrinciplesUnit } from './features/visualDesignPrinciples/VisualDesignPrinciplesUnit'
import { SessionProgressPanel } from './components/SessionProgressPanel'
import { ExamModePanel } from './components/ExamModePanel'
import { SessionProvider } from './components/SessionContext'
import { ConfirmDialogProvider } from './components/ConfirmDialogContext'
import { UNIT_OPTIONS, type UnitId } from './lib/study'
import { UNIT_NAVIGATE_EVENT } from './lib/navigation'
import './App.css'

const ACTIVE_UNIT_STORAGE_KEY = 'cmpt263.nav.activeUnit.v1'

function loadActiveUnit(): UnitId {
  if (typeof window === 'undefined') return 'introduction-to-hci'
  const raw = window.localStorage.getItem(ACTIVE_UNIT_STORAGE_KEY)
  const fallback: UnitId = 'introduction-to-hci'
  if (!raw) return fallback
  const isKnown = UNIT_OPTIONS.some((option) => option.id === raw)
  return isKnown ? (raw as UnitId) : fallback
}

function App() {
  const brandWordmarkSrc = `${import.meta.env.BASE_URL}cmpt-263-exam-trainer-wordmark.svg`
  const [activeUnit, setActiveUnit] = useState<UnitId>(() => loadActiveUnit())
  const [isUnitMenuOpen, setIsUnitMenuOpen] = useState(false)
  const [isExamModeOpen, setIsExamModeOpen] = useState(false)
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null)

  const selectUnit = (unitId: UnitId) => {
    setActiveUnit(unitId)
    setIsUnitMenuOpen(false)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(ACTIVE_UNIT_STORAGE_KEY, activeUnit)
  }, [activeUnit])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<{ unitId?: UnitId }>
      const unitId = customEvent.detail?.unitId
      if (!unitId) return
      const isKnown = UNIT_OPTIONS.some((option) => option.id === unitId)
      if (!isKnown) return
      setActiveUnit(unitId)
      setIsUnitMenuOpen(false)
    }
    window.addEventListener(UNIT_NAVIGATE_EVENT, handler as EventListener)
    return () =>
      window.removeEventListener(UNIT_NAVIGATE_EVENT, handler as EventListener)
  }, [])

  const renderUnit = () => {
    switch (activeUnit) {
      case 'introduction-to-hci':
        return <IntroductionToHciUnit />
      case 'usability':
        return <UsabilityUnit />
      case 'interface-types':
        return <InterfaceTypesUnit />
      case 'cognition':
        return <CognitionUnit />
      case 'psychology':
        return <PsychologyUnit />
      case 'heuristic-evaluation':
        return <HeuristicEvaluationUnit />
      case 'task-centered-design':
        return <TaskCenteredDesignUnit />
      case 'visual-design-principles':
        return <VisualDesignPrinciplesUnit />
      case 'low-fidelity-prototypes':
        return <LowFidelityPrototypesUnit />
      case 'medium-fidelity-prototypes':
        return <MediumFidelityPrototypesUnit />
      case 'statistical-analysis':
        return <StatisticalAnalysisUnit />
      case 'questionnaires':
        return <QuestionnairesUnit />
      case 'usability-analytical-evaluation':
        return <UsabilityAnalyticalEvaluationUnit />
      case 'cognitive-walkthrough':
        return <CognitiveWalkthroughUnit />
      case 'dark-patterns':
        return <DarkPatternsUnit />
      case 'ethics-inclusivity-accessibility':
        return <EthicsInclusivityAccessibilityUnit />
      case 'tangible-user-interfaces':
        return <TuiUnit />
      default:
        return null
    }
  }

  return (
    <SessionProvider>
      <ConfirmDialogProvider>
        <main className="app-shell">
          <header className="app-header">
            <div className="brand-row">
              <img
                src={brandWordmarkSrc}
                alt="CMPT 263 Exam Trainer"
                className="brand-wordmark"
              />
              <button
                className="info-trigger"
                aria-label="About this tool"
                type="button"
                onMouseEnter={(e) => {
                  setTooltipPos({ x: e.clientX, y: e.clientY })
                }}
                onMouseMove={(e) => {
                  setTooltipPos({ x: e.clientX, y: e.clientY })
                }}
                onMouseLeave={() => setTooltipPos(null)}
              >
                <FiInfo aria-hidden="true" />
              </button>
              {tooltipPos && (
                <div
                  className="info-tooltip-floating"
                  style={{
                    top: tooltipPos.y + 12,
                    left: tooltipPos.x + 12,
                  }}
                >
                  Based on CMPT 263: Introduction to Human-Centered Computing D100 (Spring 2026)
                </div>
              )}
              <button
                className="button-secondary unit-menu-toggle"
                onClick={() => setIsUnitMenuOpen((value) => !value)}
                aria-expanded={isUnitMenuOpen}
                aria-controls="unit-drawer"
              >
                {isUnitMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
                <span>{isUnitMenuOpen ? 'Close Units' : 'Select Unit'}</span>
              </button>
            </div>
            <h1 className="visually-hidden">CMPT 263 Exam Trainer</h1>
            <p>Exam-style drills across all CMPT 263 lecture units</p>
          </header>
          <SessionProgressPanel onOpenExamMode={() => setIsExamModeOpen(true)} />
          <aside
            id="unit-drawer"
            className={`unit-drawer ${isUnitMenuOpen ? 'unit-drawer--open' : ''}`}
            aria-hidden={!isUnitMenuOpen}
          >
            <div className="unit-drawer-head">
              <strong>
                <FiBookOpen aria-hidden="true" /> Course Units
              </strong>
              <button
                className="button-secondary"
                onClick={() => setIsUnitMenuOpen(false)}
              >
                <FiX aria-hidden="true" />
                <span>Close</span>
              </button>
            </div>
            <div className="unit-drawer-list">
              {UNIT_OPTIONS.map((unit) => (
                <button
                  key={unit.id}
                  className={`unit-drawer-item ${
                    activeUnit === unit.id ? 'unit-drawer-item--active' : ''
                  }`}
                  onClick={() => selectUnit(unit.id)}
                >
                  <span className="unit-drawer-label">
                    {unit.label}
                    {unit.implemented ? (
                      <span className="unit-count-badge">
                        {unit.questionCount === 'infinity'
                          ? '∞Q'
                          : `${unit.questionCount ?? 0}Q`}
                      </span>
                    ) : (
                      <span className="unit-status-badge">Coming Soon</span>
                    )}
                  </span>
                  <FiChevronRight aria-hidden="true" />
                </button>
              ))}
            </div>
          </aside>
          {isUnitMenuOpen ? (
            <div
              className="unit-overlay"
              aria-hidden="true"
              onClick={() => setIsUnitMenuOpen(false)}
            />
          ) : null}
          <section className="tab-panel">
            {isExamModeOpen ? (
              <ExamModePanel onClose={() => setIsExamModeOpen(false)} />
            ) : (
              renderUnit()
            )}
          </section>
          <footer className="app-footer">
            <p>&copy; {new Date().getFullYear()} Sean Wotherspoon</p>
          </footer>
        </main>
      </ConfirmDialogProvider>
    </SessionProvider>
  )
}

export default App
