function Menu(props) {
    // TODO: Show my full name here.
    return (
        <div>
            {/* if the user taps anywhere but not the buttons, the menu will close */}
            <div className="absolute w-screen h-screen" onClick={props.onMenuClose}></div>

            <div className="max-w-screen-md m-auto bg-tim-black text-tim-green p-3 drop-shadow-md">
                <ul>
                    <li className="text-2xl text-right m-5">Über mich</li>
                    <li className="text-2xl text-right m-5">Lebenslauf</li>
                    <li className="text-2xl text-right m-5">Tools</li>
                    <li className="text-2xl text-right m-5">Projekte</li>
                    <li className="text-2xl text-right m-5">Kontakt</li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;