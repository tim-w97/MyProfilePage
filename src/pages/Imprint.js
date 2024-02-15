import PageTemplate from "../widgets/PageTemplate";
import DismissTopBar from "../widgets/DismissTopBar";
import {useEffect} from "react";
import SendEmailLink from "../widgets/SendEmailLink";

function Imprint() {
    useEffect(() => window.scrollTo(0, 0));

    return (
        <PageTemplate>
            <DismissTopBar title='Impressum'/>
            <div className='p-5 pt-20'>
                <p>Angaben gemäß § 5 TMG</p>

                <p className='mt-5'>Tim Wagner</p>
                <p>Königstr. 62</p>
                <p>95028 Hof</p>

                <p className='font-bold my-5'>Kontakt:</p>

                <div className='flex flex-col sm:flex-row mb-5 sm:m-0'>

                    <p className='sm:w-24'>Telefon:</p>

                    <a href='tel:015204847344'>
                        <p className='text-tim-light-blue'>01520-4847344</p>
                    </a>
                </div>

                <div className='flex flex-col sm:flex-row'>
                    <p className='sm:w-24'>E-Mail:</p>
                    <SendEmailLink>
                        <p className='text-tim-light-blue'>timwagner997@gmail.com</p>
                    </SendEmailLink>
                </div>

                <p className='font-bold my-5'>Haftungsausschluss:</p>

                <p className='font-bold my-5'>Haftung für Inhalte</p>

                <p>
                    Ich habe die Inhalte dieser Webseite mit größter Sorgfalt erstellt. Dennoch kann ich keine Gewähr
                    für die Richtigkeit, Vollständigkeit und Aktualität der Informationen übernehmen. Als Betreiber
                    dieser Webseite bin ich gemäß § 7 Abs. 1 TMG für meine eigenen Inhalte verantwortlich. Gemäß §§ 8
                    bis 10 TMG bin ich jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                    überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                    Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                    Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                    Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
                </p>

                <p className='font-bold my-5'>Haftung für Links</p>

                <p>Ich biete auf meiner Webseite Links zu externen Webseiten Dritter an. Für die Inhalte dieser fremden
                    Seiten übernehme ich jedoch keine Gewähr. Verantwortlich für die Inhalte der verlinkten Seiten ist
                    jeweils der entsprechende Anbieter oder Betreiber. Zum Zeitpunkt der Verlinkung habe ich die
                    verknüpften Seiten auf mögliche Rechtsverstöße überprüft und es waren keine rechtswidrigen Inhalte
                    erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                    Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Sollten mir Rechtsverletzungen bekannt werden,
                    werde ich derartige Links umgehend entfernen.
                </p>
            </div>
        </PageTemplate>
    )
}

export default Imprint