function Menu(props) {
    function scrollToAnchor(id) {
        props.onMenuClose()

        let anchor = document.getElementById(id)
        anchor.scrollIntoView({ behavior: 'smooth' })
    }

    // TODO: Show my full name here.
    return (
        <div>
            {/* if the user taps anywhere but not the buttons, the menu will close */}
            <div className="absolute w-screen h-screen" onClick={props.onMenuClose}></div>

            <ul className="list-none max-w-screen-md m-auto bg-tim-black text-tim-green drop-shadow-md">
                <li className="text-right">
                    <button className="text-2xl p-5" onClick={() => scrollToAnchor('anchor-aboutme')}>Über mich</button>
                </li>
                <li className="text-right">
                    <button className="text-2xl p-5" onClick={() => scrollToAnchor('anchor-cv')}>Lebenslauf</button>
                </li>
                <li className="text-right">
                    <button className="text-2xl p-5" onClick={() => scrollToAnchor('anchor-tools')}>Tools</button>
                </li>
                <li className="text-right">
                    <button className="text-2xl p-5" onClick={() => scrollToAnchor('anchor-projects')}>Projekte</button>
                </li>
                <li className="text-right">
                    <button className="text-2xl p-5" onClick={() => scrollToAnchor('anchor-contacts')}>Kontakt</button>
                </li>
            </ul>
        </div>
    );
}

export default Menu;