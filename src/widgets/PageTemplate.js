function PageTemplate(props) {
    return(
        <div className="font-comfortaa font-light text-xl text-tim-light-grey max-w-screen-md m-auto bg-tim-dark-blue">
            {props.children}
        </div>
    )
}

export default PageTemplate