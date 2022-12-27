function Menu(props) {
    // TODO: Show my full name here.
    return (
        <div>
            <div className="bg-tim-black text-tim-green p-3 font-mono drop-shadow-md">
                <ul>
                    <li className="text-2xl text-right m-5">Über mich</li>
                    <li className="text-2xl text-right m-5">Tools</li>
                    <li className="text-2xl text-right m-5">Projekte</li>
                    <li className="text-2xl text-right m-5">Kontakt</li>
                </ul>
            </div>

            {/* if the user taps anywhere but not the buttons, the menu will still close */}
            <div className="h-screen" onClick={props.onMenuClose}></div>
        </div>
    );
}

export default Menu;