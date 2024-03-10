function GoogleMapsLink(props) {
    return(
        <a
            className={props.className}
            href="https://maps.app.goo.gl/VteFgTfx7So5fu5UA"
            target="_blank"
            rel="noreferrer">
            {props.children}
        </a>
    )
}

export default GoogleMapsLink