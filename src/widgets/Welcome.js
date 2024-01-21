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
        <span className="font-bold whitespace-nowrap">Mobile-App-Entwicklung (B.Sc.)</span> im 5. Semester an
        der Hochschule für Angewandte Wissenschaften Hof.
      </p>

      <p className="mt-3">
          Im Oktober 2024 beginnt mein 7. Semester und ich suche nach einem Praxispartner, um ein spannendes App-Projekt durchzuführen und meine Bachelorarbeit zu schreiben.
      </p>

      <img src={sticker} alt="Sticker variant of Tim"></img>

      <p className="mt-6">
          Warum habe ich mich für genau diesen Studiengang entschieden?
          Ich habe viele verschiedene Bereiche ausprobiert und im Laufe der Zeit festgestellt,
          dass die App-Entwicklung mich am meisten fasziniert.
      </p>

      <p className="mt-3">
        Flutter und Dart finde ich besonders spannend, doch ich habe auch mit
        anderen Tools bereits Erfahrungen gesammelt:
      </p>
    </div>
  );
}

export default Welcome;
