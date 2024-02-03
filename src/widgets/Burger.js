function Burger(props) {
  return (
    <svg className={props.className} version="1.1" viewBox="0 0 100 100">
        <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="20">
            <path d="m10 10h80" style={{paintOrder: 'markers stroke fill'}}/>
            <path d="m40 50h50" style={{paintOrder: 'markers stroke fill'}}/>
            <path d="m10 90h80" style={{paintOrder: 'markers stroke fill'}}/>
        </g>
    </svg>
  );
}

export default Burger;
