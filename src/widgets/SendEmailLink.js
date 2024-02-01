function SendEmailLink(props) {
    return(
        <a
            className={props.className}
            href="mailto:timwagner997@gmail.com?subject=Deine%20Bewerbung&body=Hi%20Tim%2C"
            target="_blank"
            rel="noreferrer">
            {props.children}
        </a>
    )
}

export default SendEmailLink