// src/assets/svgs/MessageStarIcon.jsx
export default function MessageStarIcon({ className = "w-8 h-8 fill-white" }) {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none" // Changed fill to none, stroke will be used
      className={className}
    >
      <g strokeWidth="0" />
      <g strokeLinecap="round" strokeLinejoin="round" />
      <g>
        <path
          stroke="currentColor" // Changed to currentColor
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 8c-1.667.667-5.4 2.7-7 5.5m9.5-2.5C9.167 12.333 4 16.4 2 22m10.5-7.5c-1.167 1.167-3.8 4.1-5 6.5"
        />
        <path
          fill="currentColor" // Changed to currentColor
          stroke="currentColor" // Changed to currentColor
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m14.674 6.45.673-3.285 2.225 2.51 3.027-.294-1.768 3.062 1.743 2.639-3.286-.673-2.51 2.225.19-3.156-3.062-1.768 2.768-1.26z"
        />
      </g>
    </svg>
  );
}
