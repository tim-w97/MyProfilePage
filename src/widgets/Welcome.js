import sticker from "../assets/images/sticker.png";

function Welcome(props) {
    return (
        <div className={props.className}>
            <div id="anchor-aboutme" className="absolute -top-48"></div>
            <p className="text-2xl font-bold">
                Hi, mein Name ist{" "}
                <span className="font-bold whitespace-nowrap">Tim.</span>
            </p>

            <p className="text-xl mt-6">
                Ich studiere{' '}
                <span className="font-bold whitespace-nowrap">Mobile-App-Entwicklung (B.Sc.)</span> an der{' '}
                <span className='whitespace-nowrap'>Hochschule Hof</span>,{' '}
                ein besonderer Informatik-Studiengang für App Freaks wie mich.
            </p>

            <p className="mt-3">
                Im Oktober 2024 beginnt mein 7. Semester und ich suche{' '}
                nach einem Praxispartner für ein spannendes App-Projekt.
            </p>

            <img src={sticker} alt="Sticker variant of Tim"></img>

            <p className="mt-6">
                Durch Ausbildung und Studium hatte ich Berührungspunkte mit einer langen Liste an verschiedenen
                Programmiersprachen und Werkzeugen, in diesen hier bin ich zurzeit am fittesten:
            </p>
        </div>
);
}

export default Welcome;
