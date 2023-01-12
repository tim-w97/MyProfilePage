import timAtWaterStation from "../assets/images/tim-at-water-station.png";

function Welcome(props) {
  return (
    <div className={props.className}>
      <div id="anchor-aboutme" className="absolute -top-48"></div>
      <p className="text-2xl font-bold">
        Hi, mein Name ist{" "}
        <span className="font-bold whitespace-nowrap">Tim. 🙋🏻‍♂️</span>
      </p>

      <p className="text-xl mt-6">
        Ich studiere{" "}
        <span className="font-bold whitespace-nowrap">Mobile Computing</span> an
        der Hochschule für Angewandte Wissenschaften Hof.
      </p>

      <p className="mt-3">
        In meinem Studium geht es neben der allgemeinen Informatik vor allem um
        eins - um die Programmierung von Apps.
      </p>

      <img src={timAtWaterStation} alt="Tim at a water station"></img>

      <p className="mt-6">
        Warum ich genau diesen Studiengang gewählt habe? Ich habe vieles
        ausprobiert und mit der Zeit bemerkt, dass App-Entwicklung genau das
        Gebiet ist, was mich am meisten interessiert. 🎯
      </p>

      <p className="mt-3">
        Flutter und Dart finde ich besonders spannend, doch ich habe auch mit
        anderen Tools bereits Erfahrungen gesammelt:
      </p>
    </div>
  );
}

export default Welcome;
