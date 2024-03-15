function CVEntry(props) {
  return (
    <div className={props.className + " mx-5"}>
      <p className="text-tim-gray">{props.time}</p>
      <p className="text-xl mt-3">{props.position}</p>
        <a href={props.link} target='_blank' rel='noreferrer'>
            <div className="flex items-center my-3 text-tim-gray">
                <div className="w-10 mr-3 shrink-0 grow-0">
                    {props.logo}
                </div>
                {props.location}
            </div>
        </a>
        {props.description}
    </div>
  );
}

export default CVEntry;
