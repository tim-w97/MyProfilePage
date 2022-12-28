import GoogleDrive from "./icons/GoogleDrive";

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
                    <button className="text-2xl p-5" onClick={() => scrollToAnchor('anchor-aboutme')}>
                        <p>Über mich</p>
                    </button>
                </li>
                <li className="text-right">
                    <button className="text-2xl p-5" onClick={() => scrollToAnchor('anchor-tools')}>
                        <p>Tools</p>
                    </button>
                </li>
                <li className="text-right">
                    <button className="text-2xl p-5" onClick={() => scrollToAnchor('anchor-projects')}>
                        <p>Projekte</p>
                    </button>
                </li>
                <li className="text-right">
                    <button className="text-2xl p-5" onClick={() => scrollToAnchor('anchor-contacts')}>
                        <p>Kontakt</p>
                    </button>
                </li>
                <li className="text-right">
                    <button className="text-2xl">
                        <div className='flex items-center'>
                            <GoogleDrive className='h-8' />
                            <p className="p-5">Lebenslauf</p>
                        </div>
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Menu;