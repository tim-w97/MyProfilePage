function XMark(props) {
  return (
    <svg
      className={props.className + " stroke-tim-green"}
      viewBox="0 0 24 24"
      strokeWidth={3}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export default XMark;
