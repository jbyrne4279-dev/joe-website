'use client'

// Opens the "Which assessment" quiz (rendered globally by NotSureQuiz) via a
// custom window event, so it can be triggered from anywhere in the tree.
export default function UnderinsuredQuizButton({ className }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('open-rca-quiz'))}
      className={className}
    >
      Check If You&rsquo;re Underinsured
      <span className="material-symbols-outlined" style={{ fontSize: '1.15rem' }}>fact_check</span>
    </button>
  )
}
