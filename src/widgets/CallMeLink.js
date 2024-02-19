function CallMeLink(props) {
    return(
        <a
            className={props.className}
            href="tel:015204847344"
            target="_blank"
            rel="noreferrer">
            {props.children}
        </a>
    )
}

export default CallMeLink