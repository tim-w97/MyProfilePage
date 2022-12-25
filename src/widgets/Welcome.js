import timAtWaterStation from '../assets/images/tim-at-water-station.png';

function Welcome(props) {
    return (
        <div className={props.className}>
            <p className="text-2xl font-bold font-mono">Hey, mein Name ist Tim. 👨🏻‍💻</p>

            <p className="text-xl mt-6">Ich studiere <span className='font-bold'>Mobile Computing</span> an der Hochschule für Angewandte Wissenschaften in Hof.</p>

            <p className='mt-3'>In meinem Studium geht es neben der allgemeinen Informatik vor allem um eins - um die Programmierung von Apps.</p>

            <img src={timAtWaterStation} alt="Tim at a water station"></img>

            <p className='mt-6'>Denn App-Programmierung ist genau das, was ich nach meinem Studium hauptberuflich machen will.</p>

            <p className='mt-3'>Das Flutter-Framework interessiert mich am meisten, doch ich habe auch mit anderen Tools bereits Erfahrungen gesammelt.</p>
        </div>
    );
}

export default Welcome;