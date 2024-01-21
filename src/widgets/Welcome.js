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
        Ich studiere{" "}
        <span className="font-bold whitespace-nowrap">Mobile-App-Entwicklung</span> an
        der Hochschule für Angewandte Wissenschaften Hof.
      </p>

      <p className="mt-3">
        In meinem Studium geht es neben der allgemeinen Informatik vor allem um
        eins - um die Programmierung von Apps.
      </p>

      <img src={sticker} alt="Sticker variant of Tim"></img>

      <p className="mt-6">
          Warum habe ich mich für genau diesen Studiengang entschieden?
          Ich habe viele verschiedene Bereiche ausprobiert und im Laufe der Zeit festgestellt,
          dass die App-Entwicklung mich am meisten fasziniert. 🎯
      </p>

      <p className="mt-3">
        Flutter und Dart finde ich besonders spannend, doch ich habe auch mit
        anderen Tools bereits Erfahrungen gesammelt:
      </p>
    </div>
  );
}

export default Welcome;
