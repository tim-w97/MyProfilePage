function SendEmailLink(props) {
    return(
        <a
            className={props.className}
            href="mailto:timwagner997@gmail.com"
            target="_blank"
            rel="noreferrer">
            {props.children}
        </a>
    )
}

export default SendEmailLink