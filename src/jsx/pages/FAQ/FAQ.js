import React from 'react';
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';
// for English version faq

const isEnglish = window.location.pathname.includes('en');


function FAQEn(props) {
    return (
        <div id='FAQEn'>
            <SectionHero></SectionHero>
            <OurVision></OurVision>
            <Newsletter></Newsletter>
        </div>
    );
}

export default FAQEn;

const SectionHero = () => {
    return (
        <section className="section section-hero faq">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-top padding-xxhuge custom-hero-2">
                        <div className="max-width-full">
                            <div className="padding-bottom">
                                <div className="content-grid">
                                    <div
                                        id="w-node-c964651c-c1fb-84db-6b92-c18292305996-418f4829"
                                        className="max-width-full"
                                    >
                                        <h1>F.A.Q.</h1>
                                    </div>
                                    <div
                                        id="w-node-c964651c-c1fb-84db-6b92-c1829230599e-418f4829"
                                        className="max-width-full"
                                    >
                                        <div className="margin-top">
                                            {
                                                isEnglish ? <a
                                                    href="/faq/de"
                                                    className="button-arrow action_arrow button-arrow-large w-inline-block"
                                                >
                                                    <div>Lesen Sie auf Deutsch</div>
                                                    <span className="arrow">
                                                        ↘
                                                    </span>
                                                </a> :

                                                    <a
                                                        href="/faq/en"
                                                        className="button-arrow action_arrow button-arrow-large w-inline-block"
                                                    >
                                                        <div>Read in English</div>
                                                        <span className="arrow">
                                                            ↘
                                                        </span>
                                                    </a>
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

const OurVision = () => {
    //console.log(window.location.pathname.includes('en'))

    const category_object = {
        category_1: {
            de: {
                title: 'Aktienmarkt',
                accordions: [
                    {
                        id: 1,
                        title: 'Auf welcher gesetzlichen Grundlage basieren die Aktientoken?',
                        description: <div className="text-rich-text w-richtext">
                            <p>
                                Mit den am 01.02.21 in Kraft getretenen{" "}
                                <a href="https://www.sif.admin.ch/sif/de/home/finanzmarktpolitik/digit_finanzsektor/blockchain.html">
                                    Änderungen im Schweizer Obligationenrecht
                                </a>{" "}
                                wurde der Begriff der Registerwertrechte eingeführt.{" "}
                                <a href="https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#part_5/tit_33/chap_1/lvl_H">
                                    Artikel 973d
                                </a>{" "}
                                definiert das Registerwertrecht als ein Recht, (1)
                                welches in einem Wertrechteregister eingetragen ist
                                und (2) nur über dieses geltend gemacht werden kann.
                            </p>
                            <p>
                                Ein auf DLT (Distributed Ledger Technology)
                                basierendes Register wie bspw. eine Blockchain
                                erfüllt die in Artikel 973d Ziffer 2 genannten
                                Anforderungen an ein Wertrechteregister. Sofern die
                                Statuten eines Unternehmens dies erlauben, können
                                Wertpapiere wie bspw. Aktien als Registerwertrechte
                                ausgegeben werden.
                            </p>
                            <p>
                                Auf dieser Grundlage tokenisieren wir unsere eigenen
                                Aktien, sowie die unserer Kunden. Damit beinhalten
                                die Aktientoken exakt dieselben Rechte und Pflichten
                                wie “traditionelle” Aktien.
                            </p>
                        </div>
                    },
                    {
                        id: 2,
                        title: `Was brauche ich, um tokenisierte Aktien kaufen zu
                        können?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Im Grunde reicht eine Ethereum-Wallet, damit
                                    Aktientoken in das Wallet des Investors ausgeliefert
                                    werden können, sofern man Aktien per Banküberweisung
                                    kaufen möchte. Idealerweise verwendet man unser
                                    eigenes Mobile Wallet (
                                    <a href="https://apps.apple.com/ch/app/aktionariat/id1518326813?l=en">
                                        iOS
                                    </a>{" "}
                                    oder{" "}
                                    <a href="https://play.google.com/store/apps/details?id=com.aktionariat.app">
                                        Android
                                    </a>
                                    ). Dieses wurde eigens für das Zusammenspiel mit dem
                                    Aktionariat Brokerbot (Aktienautomat) entwickelt.
                                    Daneben besteht die Möglichkeit den Brokerbot mit
                                    MetaMask oder einer WalletConnect kompatiblen
                                    Portfolio App zu verbinden.
                                </p>
                                <p>
                                    Möchte man Aktientoken per Ether (ETH) oder
                                    Kryptofranken (XCHF) zahlen, muss der entsprechende
                                    Betrag in der Wallet vorhanden sein. Über die
                                    Aktionariat Portfolio App kann man per
                                    Banküberweisung Ether kaufen.
                                </p>
                            </div>
                    },
                    {
                        id: 3,
                        title: `Ist das Investieren anonym oder wird die Identität
                        eines Investors in irgendeiner Form veröffentlicht?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Persönliche Daten von Investoren wie z.B. Namen,
                                    Adresse und Email-Adresse werden nicht publiziert.
                                    Um einen Eintrag im Aktienbuch des entsprechenden
                                    Unternehmens zu erhalten, müssen sich Investoren mit
                                    Namen und Adresse registrieren (mehr dazu unter
                                    weiter unten). Die Ethereum-Adresse eines Halters
                                    von Aktientoken ist in der Ethereum Blockchain
                                    gespeichert und für jeden einsehbar, allerdings ohne
                                    jegliche Verknüpfung zu persönlichen Daten, welche
                                    nicht auf der Blockchain gespeichert werden.
                                </p>
                            </div>
                    },
                    {
                        id: 4,
                        title: `Ist das Investieren anonym oder wird die Identität
                        eines Investors in irgendeiner Form veröffentlicht?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Persönliche Daten von Investoren wie z.B. Namen,
                                    Adresse und Email-Adresse werden nicht publiziert.
                                    Um einen Eintrag im Aktienbuch des entsprechenden
                                    Unternehmens zu erhalten, müssen sich Investoren mit
                                    Namen und Adresse registrieren (mehr dazu unter
                                    weiter unten). Die Ethereum-Adresse eines Halters
                                    von Aktientoken ist in der Ethereum Blockchain
                                    gespeichert und für jeden einsehbar, allerdings ohne
                                    jegliche Verknüpfung zu persönlichen Daten, welche
                                    nicht auf der Blockchain gespeichert werden.
                                </p>
                            </div>
                    },
                    {
                        id: 5,
                        title: `Bei einem effektiven Aktienverkauf, wie werden die
                        Aktionäre in das Handelsregister eingetragen und
                        vorher vom Notar beglaubigt?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Dies ist nur bei der Zeichnung neuer Aktien
                                    notwendig. Unser Modell basiert auf dem Handwechsel
                                    von Namensaktien, die im Besitz des Unternehmens
                                    sind (Treasury Shares), also bereits gezeichnet
                                    wurden. Bei einem Kauf/Verkauf von Aktientoken über
                                    den Aktionariat Brokerbot wird kein Kaufvertrag
                                    benötigt, da dieser durch den Smart-Contract ersetzt
                                    wird.
                                </p>
                            </div>
                    },
                    {
                        id: 6,
                        title: ` Wie werden Aktionäre im Aktienbuch eingetragen?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Aktionäre müssen sich ins Aktienbuch eintragen
                                    lassen, wenn sie das Recht auf Dividende und
                                    Stimmabgabe erhalten möchten. Dazu können sie sich
                                    einfach in der Aktionariat Portfolio App oder dem
                                    Shareholder Registry Widget (auf unserer
                                    Investorenseite) mit Namen und Adresse erfassen. Wir
                                    empfehlen Investoren dies vor dem Kauf der Aktien zu
                                    erledigen.
                                </p>
                                <p>‍</p>
                            </div>
                    },
                    {
                        id: 7,
                        title: ` Wie finde ich Investoren?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Die Aktionariat AG versteht sich als
                                    Technologie-Anbieter und sucht nicht aktiv nach
                                    Investoren für seine Kunden. Dennoch besitzt die
                                    Aktionariat AG eine gewisse Reichweite über
                                    verschiedene Medien. Das Aufschalten des Brokerbots
                                    eines Kunden wird über sämtliche Kanäle der
                                    Aktionariat AG geteilt (Social Media, Newsletter).
                                    Ausserdem werden sämtliche unserer Presse-Kontakte
                                    über den Go-Live neuer Kunden informiert.
                                </p>
                            </div>
                    },
                    {
                        id: 8,
                        title: `Müssen Emittenten ein Whitelisting betreiben?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Nein, ein Whitelisting ist im Allgemeinen nicht
                                    nötig. Wenn ein Emittent eine
                                    Übertragungsbeschränkung (Vinkulierung) der Aktien
                                    wünscht, empfiehlt es sich, diese auf der Ebene der
                                    Registrierung im Aktienbuch umzusetzen und nicht
                                    mittels Whitelisting im Smart Contract. Auch
                                    vertragliche Übertragungsbeschränkungen
                                    (beispielsweise ein Lockup) können flexibler über
                                    sekundäre Register abgebildet werden. Je einfacher
                                    das Hauptregister (smart contract) gehalten wird,
                                    desto tiefer sind die Transaktionsgebühren im
                                    Ethereum-System und desto besser kann der Token ins
                                    Blockchain-Ökosystem integriert werden.
                                    Beispielsweise lehnen viele dezentrale Exchanges
                                    Token ab, die einem Whitelisting oder ähnlichen
                                    Beschränkungen unterliegen.
                                </p>
                            </div>
                    },
                    {
                        id: 9,
                        title: `Kann ein Emittent (Unternehmen) die E-Mail-Adresse
                        eines Aktionärs selbstständig anpassen?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Nein, das ist nicht möglich. Aber ein Anleger kann
                                    jederzeit eine zusätzliche E-Mail-Adresse in der
                                    Aktionariat Mobile Wallet (App) hinzufügen und
                                    auswählen welche Adresse die primäre Adresse sein
                                    soll. Nicht primäre Adressen können vom Investor in
                                    der Aktionariat App entfernt werden.
                                </p>
                            </div>
                    },
                    {
                        id: 10,
                        title: `Sind Emittenten verpflichtet eine KYC/AML
                        durchzuführen?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Es besteht laut der{" "}
                                    <a href="https://www.finma.ch/de/news/2018/02/20180216-mm-ico-wegleitung/">
                                        Wegleitung der FINMA
                                    </a>{" "}
                                    keine gesetzliche Verpflichtung die Käufer von
                                    Aktientoken vor dem Kauf zu identifizieren, da in
                                    diesem Fall keine GwG-Unterstellung besteht.
                                    Hingegen ist der Aktionär verpflichtet, sich bei der
                                    Gesellschaft zu registrieren, sofern er mit dem Kauf
                                    25 Prozent des Aktienkapitals oder der Stimmrechte
                                    erreicht oder überschreitet (
                                    <a href="https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_697_j">
                                        Art. 697j OR
                                    </a>
                                    ) Ohne Registrierung kann er seine Rechte als
                                    Aktionär nicht geltend machen. Auch zu beachten gilt
                                    es, dass Finanzintermediäre beim Wechseln von
                                    Kryptowährungen einen Herkunftsnachweis verlangen.
                                    Welche Dokumente dafür nötig sind, hängt von den
                                    jeweiligen Umständen ab.
                                </p>
                                <p>‍</p>
                            </div>
                    },
                    {
                        id: 11,
                        title: `Wie wird die Marktkapitalisierung berechnet?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Die Marktkapitalisierung wird wie folgt berechnet:
                                    (Gesamtzahl der Aktien - eigene Aktien) * Aktienkurs
                                </p>
                                <p>
                                    Eigene Aktien sind Aktien, die vom Unternehmen (und
                                    nicht von einem Anleger) gehalten werden.
                                </p>
                                <p>‍</p>
                            </div>
                    },
                    {
                        id: 12,
                        title: `Welche Dokumente wie bspw. Abschlüsse oder Prospekte
                        müssen Emittenten veröffentlichen?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Abschlüsse: Im Modell der Aktionariat AG muss kein
                                    (Jahres-)Abschluss veröffentlicht werden.
                                    Bestehenden Aktionären hingegen sind
                                    Geschäftsberichte und Revisionsberichte natürlich
                                    offenzulegen (
                                    <a href="https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_696">
                                        Art. 696 Abs. 1 OR
                                    </a>
                                    ). Lediglich Unternehmen, welche ihre
                                    Beteiligungspapiere an einer Börse kotiert haben,
                                    sogenannte Publikumsgesellschaften, müssen ihre
                                    Geschäftsberichte, sowie Revisionsberichte
                                    publizieren (
                                    <a href="https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_958_e">
                                        Art. 958e Abs. 1 OR
                                    </a>
                                    ,{" "}
                                    <a href="https://www.six-exchange-regulation.com/dam/downloads/regulation/admission-manual/listing-rules/03_01-LR_de.pdf">
                                        Art. 49 KR SIX
                                    </a>
                                    ). Die Aktionariat AG empfiehlt aber dringend
                                    Informationen zur Performance des Unternehmens auf
                                    der eigenen Webseite zu veröffentlichen, um
                                    potentiellen Investoren gegenüber eine gewisse
                                    Transparenz zu schaffen, dazu gehören insb. auch die
                                    Jahresabschlüsse.
                                </p>
                                <p>
                                    Prospektpflicht: Gemäss dem Schweizer
                                    <a href="https://www.fidleg.com/fidleg">
                                        {" "}
                                        Finanzdienstleistungsgesetz (FIDLEG)
                                    </a>{" "}
                                    muss kein Prospekt veröffentlicht werden, sofern
                                    (Art 36, Ziffer 1):
                                </p>
                                <ul role="list">
                                    <li>
                                        sich nur an Anlegerinnen und Anleger richtet, die
                                        als professionelle Kunden gelten;
                                    </li>
                                    <li>
                                        sich an weniger als 500 Anlegerinnen und Anleger
                                        richtet;
                                    </li>
                                    <li>
                                        sich an Anlegerinnen und Anleger richtet, die
                                        Effekten im Wert von mindestens 100 000 Franken
                                        erwerben;
                                    </li>
                                    <li>
                                        eine Mindeststückelung von 100 000 Franken
                                        aufweist;
                                    </li>
                                    <li>
                                        über einen Zeitraum von 12 Monaten berechnet einen
                                        Gesamtwert von 8 Millionen Franken nicht
                                        übersteigt.
                                    </li>
                                </ul>
                                <p>‍</p>
                            </div>
                    },
                    {
                        id: 13,
                        title: `Where does the ETH/CHF conversion rate come from?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Der Wechselkurs (ETH/CHF), den wir berücksichtigen,
                                    wird von chain.link geholt. Tatsächlich holen wir
                                    den ETH/USD und den USD/CHF Wechselkurs, um ETH/CHF
                                    zu berechnen. Darüber hinaus integrieren wir einen
                                    1%igen Slippage-Schutz beim Auslösen von
                                    Brokerbot-Transaktionen.
                                </p>
                            </div>
                    },
                    {
                        id: 14,
                        title: `Ist unser Unternehmen potentiellen Investoren
                        gegenüber verpflichtet einen Revisionsbericht
                        offenzulegen?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Nein, es besteht gegenüber potentiellen Investoren
                                    weder eine Pflicht zur Offenlegung des
                                    Geschäftsberichts noch eine Pflicht diesen von einer
                                    Revisionsstelle prüfen zu lassen.&nbsp;
                                </p>
                            </div>
                    },
                    {
                        id: 15,
                        title: `Wenn ein Käufer einer Aktie, diese weiterverkaufen
                        oder zurückverkaufen möchte - wie funktioniert das und
                        welche Möglichkeiten hat er?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Der Emittent hat dank der Aktionariat AG die
                                    Möglichkeit einen Liquiditätspool zur Verfügung zu
                                    stellen, indem er einen Teil der von Investoren
                                    gesammelten Gelder für Aktienrückkäufe in seinem
                                    Brokerbot belässt. Der Investor geht in diesem Fall
                                    gleich vor wie beim Aktienkauf, indem er sein
                                    Ethereum-Wallet mit dem Brokerbot verbindet und
                                    anstelle des ”Buy”- den “Sell”-Reiter anwählt. So
                                    kann Investor ganz leicht seine Aktien oder einen
                                    Teil davon an das Unternehmen zurückverkaufen.
                                </p>
                                <p>
                                    Daneben besteht auch die die Möglichkeit die Aktien
                                    vom Wallet eines Investors auf ein anderes Wallet zu
                                    übertragen. Bei Verwendung der Aktionariat Portfolio
                                    App:
                                </p>
                                <ul role="list">
                                    <li>
                                        wählt der Investor den Tab&nbsp;
                                        “Portfolio”,&nbsp;
                                    </li>
                                    <li>wählt das entsprechende Asset,</li>
                                    <li>
                                        wählt unter “Positions” die gewünschte
                                        Absenderadresse und
                                    </li>
                                    <li>drückt danach auf “Transfer”.</li>
                                </ul>
                                <p>
                                    Unter “to Address” kann der Investor anschliessend
                                    eine eigene Ethereum-Adresse oder externe Adresse
                                    wählen und per Scan des QR-Codes oder mittels
                                    manueller Eingabe der Ziel-Ethereum-Adresse die
                                    gewünschte Anzahl Aktientoken übertragen. Die
                                    Bezahlung der transferierten Token ist ein separater
                                    Prozess und kann auch ausserhalb des
                                    Blockchain-Ökosystems geschehen.&nbsp;
                                </p>
                                <p>
                                    Wichtig: Der neue Inhaber der Aktientoken muss sich
                                    über die Aktionariat Portfolio App registrieren,
                                    damit er im Aktienbuch eingetragen wird. Bei
                                    Verwendung einer anderen Ethereum Wallet kann sich
                                    der Investor mit Hilfe des Registration Widgets im
                                    Aktienbuch erfassen. Mehr dazu unter:{" "}
                                    <a href="https://aktionariat.com/market#shareholder-registry">
                                        https://aktionariat.com/market#shareholder-registry
                                    </a>
                                    <br />
                                </p>
                            </div>
                    },
                    {
                        id: 16,
                        title: ` Müssen zwingend sämtliche Aktien tokenisiert werden?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Nein. Sowohl unser Corporate Dashboard als auch
                                    unsere Mobile Wallet sind in der Lage sowohl
                                    tokenisierte als auch traditionelle Aktien zu
                                    halten. Ein Unternehmen kann also problemlos
                                    zeitgleich tokenisierte und nicht-tokenisierte Aktie
                                    verwalten. Wir empfehlen zumindest den Free
                                    Float-Teil der Aktien als Security Token zur
                                    Verfügung zu stellen, damit dieser Teil der Aktien
                                    gehandelt werden kann.
                                </p>
                            </div>
                    },
                    {
                        id: 17,
                        title: `Was hat es mit den Transaktionskosten auf sich?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Die Transaktionskosten werden vom Ethereum Netzwerk
                                    erhoben und können stark variieren. Die Kosten
                                    hängen hauptsächlich davon ab wie viele andere
                                    Transaktionen auf der Ethereum Blockchain gerade
                                    ausgeführt werden. In Zukunft werden wir eine Lösung
                                    mit dauerhaft geringeren Transaktionskosten
                                    anbieten.
                                </p>
                            </div>
                    },
                ]
            },
            en: {
                title: 'Shares market',
                accordions: [
                    {
                        id: 1,
                        title: 'On what legal foundation are the share tokens based?',
                        description:
                            <div className="text-rich-text w-richtext"><p>With the <a href="https://www.sif.admin.ch/sif/en/home/finanzmarktpolitik/digit_finanzsektor/blockchain.html">amendments to the Swiss Code of Obligations</a> that came into force on 01.02.21, the concept of register value rights was introduced. <a href="https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#part_5/tit_33/sec_1/lvl_H">Article 973d</a> defines the ledger-based securities as a right (1) which is registered in a securities ledger and (2) which can only be asserted via securities ledger.</p><p>A securities ledger on DLT (Distributed Ledger Technology), such as a blockchain, meets the requirements for a securities ledger set out in Article 973d (2) CO. If permitted by the articles of association of a company, securities such as shares can be issued as ledger-based security.</p><p>On this basis, we tokenize our own shares, as well as those of our customers. Thus, the share tokens contain exactly the same rights and obligations as "traditional" shares.</p></div>
                    },
                    {
                        id: 2,
                        title: `What do I need to be able to buy tokenized shares?`,
                        description:
                            <div className="text-rich-text w-richtext"><p>With the <a href="https://www.sif.admin.ch/sif/en/home/finanzmarktpolitik/digit_finanzsektor/blockchain.html">amendments to the Swiss Code of Obligations</a> that came into force on 01.02.21, the concept of register value rights was introduced. <a href="https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#part_5/tit_33/sec_1/lvl_H">Article 973d</a> defines the ledger-based securities as a right (1) which is registered in a securities ledger and (2) which can only be asserted via securities ledger.</p><p>A securities ledger on DLT (Distributed Ledger Technology), such as a blockchain, meets the requirements for a securities ledger set out in Article 973d (2) CO. If permitted by the articles of association of a company, securities such as shares can be issued as ledger-based security.</p><p>On this basis, we tokenize our own shares, as well as those of our customers. Thus, the share tokens contain exactly the same rights and obligations as "traditional" shares.</p></div>
                    },
                    {
                        id: 3,
                        title: `Is investing anonymous or is an investor's identity made public in any way?`,
                        description:
                            <div className="text-rich-text w-richtext"><p>Personal data of investors such as name, address and email address are not published. In order to get an entry in the share ledger of the corresponding company, investors have to register with their name and address (more on further below). The Ethereum address of a holder of share tokens is stored in the Ethereum Blockchain and can be viewed by anyone, but without any link to personal data, which is not stored on the Blockchain.</p></div>,
                    },
                    {
                        id: 4,
                        title: `In the event of an effective share sale, how are the shareholders entered in the commercial register and certified by the notary beforehand?`,
                        description: <div className="text-rich-text w-richtext"><p>This is only necessary when subscribing for new shares. Our model is based on the exchange of registered shares held by the company (treasury shares), i.e. already subscribed. In the case of a purchase/sale of share tokens via the Aktionariat Brokerbot, no purchase agreement is required, as this is replaced by the smart contract.</p></div>

                    },
                    {
                        id: 5,
                        title: `How are shareholders registered in the share register?`,
                        description:
                            <div className="text-rich-text w-richtext"><p>Shareholders must, however, register in the share register if they wish to receive the right to dividends and vote. To do this, they can simply register their name and address in the Shareholder Portfolio App or the Shareholder Registry Widget (on the Investor Relations page of the company). We recommend that investors do this before purchasing shares.</p></div>
                    },
                    {
                        id: 6,
                        title: `How do I find investors?`,
                        description:
                            <div className="text-rich-text w-richtext"><p>Aktionariat AG sees itself as a technology provider and does not actively seek investors for its clients. Nevertheless, Aktionariat AG has a certain reach via various media. The launch of a client's brokerbot is shared across all Aktionariat AG channels (social media, newsletter). In addition, all our press contacts are informed about the go-live of new clients.</p></div>
                    },
                    {
                        id: 7,
                        title: `Do issuers have to operate a whitelisting?`,
                        description:
                            <div className="text-rich-text w-richtext"><p>No, whitelisting is generally not necessary. If an issuer wants a transfer restriction (restriction on transferability) of the shares, it is advisable to implement this at the level of registration in the share register and not by means of whitelisting in the smart contract. Contractual transfer restrictions (for example a lockup) can also be mapped more flexibly via secondary registers. The simpler the main register (smart contract) is kept, the lower the transaction fees in the Ethereum system and the better the token can be integrated into the blockchain ecosystem. For example, many decentralised exchanges reject tokens that are subject to whitelisting or similar restrictions.</p></div>
                    },
                    {
                        id: 8,
                        title: `Can an issuer (company) adjust the email address of an investor?`,
                        description:
                            <div className="text-rich-text w-richtext"><p>No, this is not possible. But an investor can always add an additional email address in the Aktionariat Mobile Wallet (App) and choose which address should be the primary address. Non primary address can be removed.</p></div>
                    },
                    {
                        id: 9,
                        title: `Kann ein Emittent (Unternehmen) die E-Mail-Adresse
                        eines Aktionärs selbstständig anpassen?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Nein, das ist nicht möglich. Aber ein Anleger kann
                                    jederzeit eine zusätzliche E-Mail-Adresse in der
                                    Aktionariat Mobile Wallet (App) hinzufügen und
                                    auswählen welche Adresse die primäre Adresse sein
                                    soll. Nicht primäre Adressen können vom Investor in
                                    der Aktionariat App entfernt werden.
                                </p>
                            </div>
                    },
                    {
                        id: 10,
                        title: `Are issuers obliged to conduct a KYC/AML?`,
                        description:
                            <div className="text-rich-text w-richtext"><p>According to the <a href="https://www.finma.ch/de/news/2018/02/20180216-mm-ico-wegleitung/">FINMA guidelines</a>, there is no legal obligation to identify the purchasers of share tokens before the purchase, as in this case there is no MLA obligation. On the other hand, the shareholder is obliged to register with the company if he reaches or exceeds 25 per cent of the share capital or voting rights with the purchase (<a href="https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_697_j">Art. 697j OR</a>). Without registration, he cannot assert his rights as a shareholder. It should also be noted that financial intermediaries require proof of origin when cryptocurrencies are exchanged. Which documents are necessary for this depends on the respective circumstances.</p></div>
                    },
                    {
                        id: 11,
                        title: `How is the market cap calculated?`,
                        description:
                            <div className="text-rich-text w-richtext"><p>The market cap is calculated as follows: (Total number of shares - &nbsp;treasury shares) * share price</p><p>Treasury shares are shares held by the company (and not an investor).</p></div>
                    },
                    {
                        id: 12,
                        title: `Which documents, such as financial statements or prospectuses, do issuers have to publish?`,
                        description:
                            <div className="text-rich-text w-richtext"><p>Financial statements: In the model of Aktionariat AG, no (annual) financial statements have to be published. Existing shareholders, on the other hand, must of course be provided with annual reports and audit reports (<a href="https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_696">Art. 696 para. 1 OR</a>). Only companies that have their equity securities listed on a stock exchange, so-called public companies, have to publish their annual reports and audit reports (<a href="https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_958_e">Art. 958e para. 1 OR</a>, <a href="https://www.six-exchange-regulation.com/dam/downloads/regulation/admission-manual/listing-rules/03_01-LR_de.pdf">Art. 49 LR SIX</a>). However, Aktionariat AG strongly recommends publishing information on the company's performance on its own website in order to create a certain degree of transparency for potential investors, including in particular the annual financial statements.</p><p>Prospectus obligation: According to the <a href="https://www.fidleg.com/fidleg">Swiss Financial Services Act (FIDLEG)</a>, no prospectus has to be published if (Art 36, No. 1):</p><ul role="list"><li>is aimed only at investors who are considered professional clients;</li><li>is aimed at fewer than 500 investors;</li><li>is aimed at investors who acquire securities with a value of at least 100,000 francs;</li><li>has a minimum denomination of 100,000 francs;</li><li>does not exceed a total value of 8 million francs calculated over a period of 12 months.</li></ul></div>
                    },
                    {
                        id: 13,
                        title: `Where does the ETH/CHF conversion rate come from?`,
                        description:
                            <div className="text-rich-text w-richtext"><p>The exchange rate (ETH/CHF) which we take into account is fetched from chain.link. Actually, we fetch the ETH/USD and the USD/CHF exchange rate in order to calculate ETH/CHF. Furthermore we integrate a 1% slippage protection when triggering Brokerbot transactions.</p></div>
                    },
                    {
                        id: 14,
                        title: `Is our company obliged to disclose an audit report to potential investors?`,
                        description:
                            <div className="text-rich-text w-richtext"><p>No, there is neither an obligation to disclose the annual report to potential investors nor an obligation to have it audited by an auditor.</p></div>
                    },
                    {
                        id: 15,
                        title: `If a buyer of a share wants to sell it on or sell it back - how does that work and what options does he have?
                        `,
                        description:
                            <div className="text-rich-text w-richtext"><p>Thanks to Aktionariat AG, the issuer has the possibility to provide a liquidity pool by leaving part of the funds collected from investors for share buybacks in his brokerbot. In this case, the investor proceeds in the same way as when buying shares by connecting his Ethereum wallet to the brokerbot and selecting the "Sell" tab instead of the "Buy" tab. In this way, the investor can easily sell his shares or part of them back to the company.</p><p>It is also possible to transfer the shares from one investor's wallet to another. When using the Shareholder Portfolio App:</p><ul role="list"><li>the investor selects the "Portfolio" tab,&nbsp;</li><li>selects the corresponding asset,</li><li>selects the desired sender address under "Positions" and then</li><li>then presses "Transfer".</li></ul><p>Under "to Address", the investor can then select his own Ethereum address or an external address and transfer the desired number of share tokens by scanning the QR code or by manually entering the target Ethereum address. The payment of the transferred tokens is a separate process and can also be done outside the blockchain ecosystem.&nbsp;</p><p>Important: The new holder of the share tokens must register via the Aktionariat Portfolio App in order to be entered in the share register. If using a different Ethereum wallet, the investor can register in the share ledger using the registration widget. Find out more at: <a href="https://aktionariat.com/market#shareholder-registry">https://aktionariat.com/market#shareholder-registry</a></p><p><br /></p></div>
                    },
                    {
                        id: 16,
                        title: `Do all shares necessarily have to be tokenized?`,
                        description:
                            <div className="text-rich-text w-richtext"><p>No. Both our Corporate Dashboard as well as our Mobile Wallet are capable of holding both tokenized and traditional stock in parallel. So a company can easily manage tokenized and non-tokenized stock at the same time. We recommend providing at least the free float portion of the shares as security tokens so that this portion of the shares can be traded.</p><p>‍</p></div>
                    },
                    {
                        id: 17,
                        title: `What are transaction costs all about?`,
                        description:
                            <div className="text-rich-text w-richtext"><p>Transaction fees are charged by the Ethereum network and can vary widely. The costs mainly depend on how many other transactions are currently being executed on the Ethereum blockchain. In the future, we will offer a solution with permanently lower transaction costs.</p></div>
                    },
                ]
            }
        },
        category_2: {
            de: {
                title: 'Drag-Along',
                accordions: [
                    {
                        id: 1,
                        title: 'Können die Kleinaktionäre (Investoren in den Free Float Teil der Aktien) den Verkauf des Unternehmens blockieren?',
                        description: <div className="text-rich-text w-richtext"><p>Im Gegenteil. Unsere Basetokens können in einen Drag-Along Token verpackt werden. Dieser erlaubt es Kleinaktionäre bei einem Exit automatisch zum Verkauf ihrer Aktientoken zu zwingen, sofern min 75% aller abgegebenen Stimmen einem Verkauf zustimmen. Jeder Drag-Along Token berechtigt zur Abgabe einer Stimme. Mit dem Kauf von Drag-Along Token über den Brokerbot auf der Webseite des Emittenten stimmen Aktionäre dem „Token Holder Agreement“ zu, womit sie sich mit der Drag-Along-Klausel einverstanden erklären. Zum Verkauf des gesamten Unternehmens mittels dieser Drag-Along-Funktion müssen allerdings zuvor sämtliche Aktien tokenisiert werden. Das Tokenisieren von “traditionellen” Aktien, welche bspw. von den Gründern und/oder Lead-Investoren gehalten werden, kann problemlos auf den Zeitpunkt verschoben werden, zu dem ein Verkauf realistisch erscheint**.</p></div>
                    },
                    {
                        id: 2,
                        title: 'Wie funktioniert die Durchsetzung der Drag-Along-Klausel?',
                        description: <div className="text-rich-text w-richtext"><p>Initiierung: Jeder interessierte Käufer mit genügend Kapital* kann ein Angebot zum Erwerb aller (aber nicht weniger) Drag-Along-Token von den anderen Drag-Along-Token-Inhabern zu einem bestimmten Preis pro Aktie im Drag-Along-Smart-Contract initiieren. Den Übernahmepreis definiert der potentielle Käufer. Dadurch wird ein Smart Contract, der den Erwerb regelt, erstellt und ein entsprechendes Ereignis auf der Blockchain emittiert. Sämtliche Tokenholder werden über das Kaufangebot benachrichtigt und um eine Stimmabgabe gebeten.</p><p>Abstimmung: Nach der Initiierung eines Angebots beginnt die Abstimmungsphase (diese dauert 60 Tage). Während der Abstimmungsphase kann jeder Drag-Along-Token-Inhaber (einschließlich der anbietenden Partei) mit „Ja“ oder „Nein“ über das Erwerbsangebot abstimmen. Nach dem Ende des Abstimmungszeitraums beginnt der Ausführungszeitraum.</p><p>Ausführung: Die anbietende Partei kann die Funktion "Ausführung" auf dem Angebotsvertrag auslösen, um den Erwerb jederzeit während des Abstimmungszeitraums oder des Ausführungszeitraums zu erzwingen. Die Durchführung des Erwerbs ist nur zu einem Zeitpunkt möglich, zu dem das Erwerbsquorum erreicht ist und die erforderliche Finanzierung zur Verfügung steht*. Während der Abstimmungsphase müssen min. 75% aller Drag-Along Tokens mit „Ja“ gestimmt haben, während der Ausführungsphase reichen 75% aller abgegeben Stimmen. Mit der Ausführung des Erwerbsangebots werden alle „verpackten“ Basis-Token an die anbietende Partei abgetreten und durch den Verkaufserlös ersetzt. Die Inhaber der Basis-Token erhalten anschliessend den Verkaufserlös im Verhältnis zur Anzahl ihrer Token.&nbsp;</p><p><strong>Weitere Informationen zum Drag-Along Mechanismus:</strong>‍</p><ul role="list"><li>Erklärung des Drag-Along Smart Contracts:<br />‍<a href="https://aktionariat.com/documentation/smart-contracts/draggable.html">https://aktionariat.com/documentation/smart-contracts/draggable.html</a></li><li>Rechtliche Grundlage innerhalb des Token Holder Agreements unserer DAKS: <br />‍<a href="https://aktionariat.com/assets/terms/Token%20Holder%20Agreement.pdf">https://aktionariat.com/assets/terms/Token%20Holder%20Agreement.pdf</a></li></ul><p><strong>Warnhinweis für potentielle Käufer eines Unternehmens:</strong></p><p>* Das Platzieren eines Übernahmeangebots mittels Drag-Along-Funktion kostet 3 Ether, unabhängig davon, ob es zu einem Verkauf kommt oder nicht. In der Wallet der Partei, welche ein Übernahmeangebot platziert, müssen zu jeder Zeit ab dem Platzieren des Übernahmeangebots bis Abschluss (erfolgreich oder nicht) genügend liquide Mittel vorhanden sein. Jeder Besitzer entsprechender Tokens kann während der Abstimmungsphase zur Übernahme der Token (bzw. des gesamten Unternehmens) das Übernahmeangebot “challengen”. Sollte beispielsweise festgestellt werden, dass in der Wallet der Partei, die ein Übernahmeangebot platziert hat, nicht genügend liquide Mittel vorhanden sind, um sämtliche Token zum angebotenen Kaufpreis zu bezahlen, und jemand challenged das Übernahmeangebot, so wird der Prozess umgehend automatisch abgebrochen. Die 3 Ether, welche der potentielle Käufer für das Platzieren des Angebots bezahlt hat, gehen damit verloren.<br /></p><p>** Es ist grundsätzlich zu jedem Zeitpunkt möglich bestehende, “traditionelle” Aktien zu tokenisieren. Damit kann sich die Anzahl Aktientoken rasch stark erhöhen. Gründer könnten dies tun wollen, wenn jemand versucht sämtliche Token mittels Drag-Along-Funktion zu erwerben, um gegen das Kaufangebot abzustimmen. Dies kann ein Risiko für einen potentiellen Käufer der Aktientoken bergen, der von der Drag-Along-Funktion im Smart Contract der Draggable Aktien gebrauch macht. Dieser hat womöglich vorab mit den Inhaber der bestehenden Aktientoken gesprochen und ist aufgrund der Gespräche zuversichtlich sämtliche bestehenden Aktientoken erwerben zu können. Mit der Tokenisierung Ihrer Aktien und das Stimmen gegen das Kaufangebot, könnten bspw. Gründer dem potentiellen Käufer einen Strich durch die Rechnung machen. Das potentielle Schadensausmass umfasst 3 Ether, denn diese werden für das Platzieren eines Übernahmeangebots benötigt.<br /></p></div>
                    },
                ]
            },
            en: {
                title: 'Drag-Along',
                accordions: [
                    {
                        id: 1,
                        title: 'Can the small shareholders (investors in the free float part of the shares) block the sale of the company?',
                        description: <div className="text-rich-text w-richtext"><p>On the contrary. Our base tokens can be wrapped into a drag-along token. This allows small shareholders to automatically be forced to sell their share tokens at an exit, provided that at least 75% of all votes cast agree to a sale. Each Drag-Along Token entitles the holder to cast one vote. By purchasing Drag-Along Tokens via the Brokerbot on the issuer's website, shareholders agree to the "Token Holder Agreement", thereby agreeing to the Drag-Along clause. However, to sell the entire company using this drag-along feature, all shares must first be tokenized. The tokenization of "traditional" shares, which are held by the founders and/or lead investors, for example, can easily be postponed to the time when a sale seems realistic**.</p></div>
                    },
                    {
                        id: 2,
                        title: 'How does drag-along enforcement work?',
                        description: <div className="text-rich-text w-richtext"><p><strong>Initiation: </strong>any interested buyer with sufficient capital* can initiate an offer to acquire all (but not less) Drag-Along tokens from the other Drag-Along token holders at a certain price per share in the Drag-Along smart contract. The acquisition price is defined by the potential buyer. This creates a smart contract governing the acquisition and issues a corresponding event on the blockchain. All token holders are notified of the purchase offer and asked to vote.</p><p><strong>Voting: </strong>After the initiation of an offer, the voting phase begins (this lasts 60 days). During the voting period, each Drag-Along token holder (including the offering party) can vote "Yes" or "No" on the acquisition offer. After the end of the voting period, the execution period begins.</p><p><strong>Execution: </strong>The offering party may trigger the "Execution" function on the offer agreement to force the acquisition at any time during the voting period or the execution period. Execution of the acquisition is only possible at a time when the acquisition quorum has been reached and the required financing is available*. During the voting period, at least 75% of all Drag-Along Tokens must have voted "Yes", during the execution period 75% of all votes cast are sufficient. Upon execution of the acquisition offer, all "wrapped" Base Tokens will be assigned to the offering party and replaced by the sale proceeds. The holders of the Base Tokens will subsequently receive the sale proceeds in proportion to the number of their tokens.&nbsp;</p><p><strong>More information about the Drag-Along mechanism:</strong></p><ul role="list"><li>Explanation of the Drag-Along Smart Contract:<br />‍<a href="https://aktionariat.com/documentation/smart-contracts/draggable.html">https://aktionariat.com/documentation/smart-contracts/draggable.html</a></li></ul><ul role="list"><li>Legal basis within the Token Holder Agreement of our DAKS:<a href="https://aktionariat.com/assets/terms/Token%20Holder%20Agreement.pdf"><br />https://aktionariat.com/assets/terms/Token%20Holder%20Agreement.pdf</a><br /></li></ul><p><strong>Warning notice for potential buyers of a company:</strong></p><p>* Placing a takeover offer via drag-along function costs 3 Ether, regardless of whether a sale occurs or not. There must be sufficient liquid funds in the wallet of the party placing a takeover offer at all times from the placement of the takeover offer until completion (successful or not). Any holder of corresponding tokens can "challenge" the takeover offer during the voting phase for the takeover of the tokens (or the entire company). For example, if it is found that there are not enough liquid funds in the wallet of the party that placed a takeover offer to pay for all the tokens at the offered purchase price, and someone challenges the takeover offer, the process is immediately terminated automatically. The 3 Ether that the potential buyer paid for placing the offer will be lost.<br /></p><p>** In principle, it is possible to tokenize existing, "traditional" shares at any time. This can quickly greatly increase the number of share tokens. Founders may want to do this if someone tries to acquire all tokens via drag-along to vote against the purchase offer. This may pose a risk to a potential buyer of the share tokens who makes use of the drag-along function in the smart contract of the draggable shares. The latter may have talked to the holders of the existing share tokens in advance and is confident to acquire all existing share tokens based on the discussions. By tokenizing their shares and voting against the purchase offer, founders, for example, could put a spoke in the potential buyer's wheel. The potential damage is 3 Ether, because these are needed for the placement of a takeover bid.<br /></p></div>
                    }
                ]
            }
        },
        category_3: {
            de: {
                title: 'Abhängigkeiten',
                accordions: [
                    {
                        id: 1,
                        title: 'In welchem Land werden die Daten zum Aktienbuch gehostet?',
                        description: <div className="text-rich-text w-richtext">
                            <p>
                                Wir hosten unsere Daten (inkl. der Aktienbücher) bei einem Anbieter in der
                                Schweiz.
                            </p>
                        </div>

                    },
                    {
                        id: 2,
                        title: 'Besteht ein Risiko für den Emittenten falls der Ether auf 0$ fällt?',
                        description: <div className="text-rich-text w-richtext">
                            <p>
                                Nein, grundsätzlich nicht. Ether wird „nur“ für das Bezahlen der
                                Transaktionsgebühr des Ethereum Systems gebraucht. Ein tiefer Etherpreis
                                geht oftmals einher mit tiefen Transaktionsgebühren des Ethereumsystems. Der
                                Worst Case wäre, dass das Ethereum-System kaputt geht und man die Token auf
                                eine andere Blockchain migrieren müsste. Dieser Fall ist jedoch sehr
                                unwahrscheinlich, denn das Ethereumsystem ging vor mittlerweile 6 Jahren
                                live und erwies sich bislang als sehr stabil. Ausserdem befindet sich das
                                Aktienbuch des Emittenten nicht auf der Blockchain. Die Informationen
                                darüber welche Investoren wie viele Aktien halten, würden also bestehen
                                bleiben auch wenn die Ethereum Blockchain nicht mehr existieren würde.
                            </p>
                        </div>
                    },
                    {
                        id: 3,
                        title: 'Was passiert mit den Aktien falls die Aktionariat AG Konkurs anmelden müsste?',
                        description: <div className="text-rich-text w-richtext">
                            <p>
                                Die Aktientokens basieren auf dem ERC-20 Standardtoken und funktionieren
                                vollständig ohne unser Zutun. Falls die Aktionariat AG Konkurs geht, gäbe es
                                lediglich unser Userinterfaces nicht mehr (Aktionariat App, Corporate
                                Dashboard, Market Widgets) aber die Inhaber der Tokens könnten diese
                                weiterhin transferieren, halten und die Rechte ausüben, die damit verbunden
                                sind. Auch besteht immer die Möglichkeit die Tokens auf anderen Marktplätzen
                                anzubieten. Wir bauen auch deshalb auf der Ethereum-Blockchain und verwenden
                                ERC-20 Tokens, weil es unsere Kunden in keine unnötige Abhängigkeit der
                                Aktionariat AG bringt. Der dezentrale Ansatz ist für Aktionariat deshalb ein
                                Kernanliegen, weil keine neuen Abhängigkeiten geschaffen werden sollen.
                            </p>
                        </div>
                    },
                    {
                        id: 4,
                        title: 'Wie viel kostet es das Unternehmen wieder auf ein traditionelles Aktiensystem zu wechseln?',
                        description: <div className="text-rich-text w-richtext">
                            <p>
                                Das Unternehmen kann in Absprache mit den Aktionären alle Security Tokens
                                einsammeln und ‘’verbrennen’’. Das Einsammeln der Tokens verursacht mehrere
                                Transaktionen auf der Ethereum Blockchain. Deshalb fallen dafür
                                entsprechende Transaktionskosten an. Wie hoch diese sind, hängt von der
                                Anzahl Transaktionen und dem ‘’Gaspreis’’ ab.
                            </p>
                        </div>
                    },
                ]
            },
            en: {
                title: 'Dependencies',
                accordions: [
                    {
                        id: 1,
                        title: 'In which country is the shareholder registry data hosted?',
                        description: <div className="text-rich-text w-richtext"><p>We host our data (incl. shareholder registry) with a provider in Switzerland.</p></div>
                    },
                    {
                        id: 2,
                        title: 'Is there a risk for the issuer if the Ether falls to $0?',
                        description: <div className="text-rich-text w-richtext">
                            <p>
                                No, basically not. Ether is "only" used to pay the transaction fee of the
                                Ethereum system. A low Ether price often goes hand in hand with low
                                transaction fees of the Ethereum system. The worst case would be that the
                                Ethereum system breaks and you have to migrate the tokens to another
                                blockchain. However, this case is very unlikely, because the Ethereum system
                                went live 6 years ago and has proven to be very stable so far. Moreover, the
                                issuer's share ledger is not on the blockchain. The information about which
                                investors hold how many shares would therefore remain even if the Ethereum
                                blockchain no longer existed.
                            </p>
                        </div>
                    },
                    {
                        id: 3,
                        title: 'What happens to the shares if Aktionariat AG has to file for bankruptcy?',
                        description: <div className="text-rich-text w-richtext">
                            <p>
                                The share tokens are based on the ERC-20 standard token and work completely
                                without our intervention. If Aktionariat AG goes bankrupt, only our user
                                interfaces would no longer exist (Aktionariat App, Corporate Dashboard,
                                Market Widgets) but the holders of the tokens would still be able to
                                transfer, hold and exercise the rights associated with them. Also, there is
                                always the possibility to offer the tokens on other marketplaces. We also
                                build on the Ethereum blockchain and use ERC-20 tokens because it does not
                                put our clients in unnecessary dependency on Aktionariat AG. The
                                decentralized approach is therefore a core concern for Aktionariat because
                                no new dependencies should be created.
                            </p>
                        </div>

                    },
                    {
                        id: 4,
                        title: 'How much does it cost a company to switch back to a traditional share system?',
                        description: <div className="text-rich-text w-richtext">
                            <p>
                                The company can collect and ''burn'' all Security Tokens in consultation
                                with shareholders. Collecting the tokens causes multiple transactions on the
                                Ethereum Blockchain. Therefore, there are corresponding transaction costs
                                for this. How high these are depends on the number of transactions and the
                                ''gas price''.
                            </p>
                        </div>
                    },
                ]
            }
        },
        category_4: {
            de: {
                title: 'Wallet',
                accordions: [
                    {
                        id: 1,
                        title: 'Warum ist das Feld "Name" in der Aktionariat App und im Dashboard nicht in ein "Vorname"- und ein "Nachname"-Feld unterteilt?',
                        description: <div className="text-rich-text w-richtext">
                            <p>
                                Die Schönheit der Lösung liegt in ihrer Einfachheit: Die Verwendung von nur
                                einem Feld funktioniert für alle gleichermaßen: Unternehmen wie "Aktionariat
                                AG", Personen wie "Ewan McGregor", Personen, die auf die Verwendung von
                                mittleren Buchstaben bestehen, z.B. "George W. Bush", Personen, die gerne
                                mit Doppelnamen angesprochen werden, z.B. "Marie-Christin Weidmann",
                                Personen, die zwei Vornamen verwenden, z.B. "Rainer Maria Hubacher", usw.
                                Wenn wir zum Beispiel ein Feld "Vorname" und das andere Feld "Nachname"
                                nennen, wo soll Rainer Maria Rilke dann "Maria" eintragen?
                            </p>
                            <p>‍</p>
                        </div>
                    },
                    {
                        id: 2,
                        title: 'Weshalb sehe ich meine DAKS Token nicht auf meiner MetaMask Wallet?',
                        description: <div className="text-rich-text w-richtext">
                            <p>
                                Da MetaMask nur grosse / bekannt Coins erkennt, muss der DAKS oder andere
                                Security Tokens von Aktionariat Kunden zuerst importiert werden. Wenn man
                                die App auf dem Smartphone verwendet:
                            </p>
                            <ol start={1} role="list">
                                <li>MetaMask öffnen und im Menü den Browser in der App selber öffnen.</li>
                                <li>
                                    Im Browser auf etherscan.io die eigene Ethereum-Adresse (sichtbar im
                                    MetaMask Wallet) eingeben
                                </li>
                                <li>Beim Security Token unter ‘’More’’ → Add DAKS to MetaMask</li>
                            </ol>
                            <p>
                                Wenn man MetaMask als Erweiterung in einem Browser auf dem Laptop verwendet,
                                ist es wichtig in diesem Browser auf <strong>etherscan.io </strong>die
                                eigene Ethereum Adresse einzugeben. Da ebenfalls beim DAKS / anderen
                                Security Token unter ‘’more’’ → Add to MetaMask.
                            </p>
                        </div>
                    },
                    {
                        id: 3,
                        title: 'Was ist eine Seed-Phrase?',
                        description: <div className="text-rich-text w-richtext">
                            <p>
                                Die Seed Phrase besteht aus einer Aneinanderreihung von 12 oder 24 Wörter
                                und erfüllt den Zweck eines Back-up Schlüssels. Bei Verlust des Wallets kann
                                mithilfe dieser Seed Phrase das eigene Konto wiederhergestellt werden.
                            </p>
                        </div>
                    },
                    {
                        id: 4,
                        title: 'Wer ist verantwortlich für die Seed-Phrase?',
                        description: <div className="text-rich-text w-richtext">
                            <p>
                                Jeder Benutzer ist selber für die eigene Seed-Phrase verantwortlich und
                                sollte diese sicher aufbewahren.
                            </p>
                        </div>
                    },
                    {
                        id: 5,
                        title: 'Wo finde ich meine Seed-Phrase?',
                        description: <div className="text-rich-text w-richtext">
                            <p>Bei erster Benutzung:</p>
                            <ul role="list">
                                <li>
                                    Im Aktionariat Wallet unten im Screen auf ‘<strong>’Connect</strong>’’
                                    klicken.&nbsp;
                                </li>
                                <li>
                                    Unter ‘’All Ethereum Addresses’’ auf ‘’<strong>This Device BACKUP</strong>
                                    ’’&nbsp;
                                </li>
                                <li>
                                    Auf den roten Banner ‘’<strong>Backup Address</strong>’’ klicken&nbsp;
                                </li>
                                <li>
                                    Auf ‘’<strong>View</strong>’’ klicken
                                </li>
                                <li>→ Nun wird ihr Seed-Phrase angezeigt</li>
                                <li>
                                    <strong>ACHTUNG:</strong> Notieren Sie diese 12 Wörter in der richtigen
                                    Reihenfolge (Wir empfehlen ein Hardware Wallet zu verwenden, oder den
                                    Inhalt auf ein Blatt Papier zu schreiben und sicher zu verwahren). Wenn
                                    sie anschließend auf ‘’Continue’’ klicken, wird ein Kontrollmechanismus
                                    eingeleitet. Dieser verlangt ihre 12 Wörter in der richtigen Reihenfolge.
                                    Sobald Sie diese richtig eingegeben haben, verschwindet der rote
                                    Warn-Balken.&nbsp;
                                </li>
                            </ul>
                            <p>Nach Backup:</p>
                            <ul role="list">
                                <li>
                                    Nachdem Sie ihre Seed-Phrase aufgerufen und den Kontrollmechanismus
                                    durchlaufen haben, können Sie ihre Seed-Phrase nicht mehr einsehen.&nbsp;
                                </li>
                            </ul>
                        </div>

                    },
                ]
            },
            en: {
                title: 'Wallet',
                accordions: [
                    {
                        id: 1,
                        title: 'What is a seed phrase?',
                        description: <div className="text-rich-text w-richtext">
                            <p>
                                A seed phrase consists of a combination of 12 or 24 words and serves the
                                purpose of a back-up key. If the wallet is lost, the personal seed phrase
                                can be used to restore the account.
                            </p>
                        </div>
                    },
                    {
                        id: 2,
                        title: 'Who is responsible for the seed phrase?',
                        description: <div className="text-rich-text w-richtext">
                            <p>
                                Each user is responsible for their own seed phrase and must keep it safe.
                            </p>
                        </div>
                    },
                    {
                        id: 3,
                        title: 'Where can I find my seed phrase?',
                        description: <div className="text-rich-text w-richtext">
                            <p>At first use:</p>
                            <ul role="list">
                                <li>
                                    Click on ‘’connect’’ at the bottom of the Aktionariat Wallet App.&nbsp;
                                </li>
                                <li>
                                    Click on ‘’<strong>This Device BACKUP</strong>’’ below ‘’ All Ethereum
                                    Adresses’’&nbsp;
                                </li>
                                <li>
                                    Click on ‘’<strong>Backup Adress</strong>’’&nbsp;
                                </li>
                                <li>
                                    Click on ‘’<strong>View</strong>’’&nbsp;
                                </li>
                                <li>Now your seed phrase is visible.&nbsp;</li>
                                <li>
                                    WARNING: Write down these 12 words in the correct order (we recommend
                                    using a hardware wallet or writing the seed phrase on a piece of paper and
                                    keeping it safe). After writing down your seed phrase, click on ‘’
                                    <strong>continue’’</strong> to initiate a control mechanism. The mechanism
                                    will ask for the 12 words of your seed phrase in the correct order. Once
                                    you entered them correctly the red warning notice will disappear.
                                </li>
                            </ul>
                            <p>
                                <br />
                            </p>
                            <p>
                                <br />
                            </p>
                        </div>
                    },
                    {
                        id: 4,
                        title: 'Why is the "Name" field not divided into a "Firstname" and a "Lastname" field in the Aktionariat App and Dashboard?',
                        description: <div className="text-rich-text w-richtext">
                            <p>
                                The beauty of the solution lays in its simplicity: Using only one field
                                works for everyone alike: companies like "Aktionariat AG", persons like
                                "Ewan McGregor", persons that insist on using middlle letter, e.g. "George
                                W. Bush", persons that like to be called by double names, e.g.
                                "Marie-Christin Weidmann", persons that use two first names, e.g. "Rainer
                                Maria Hubacher", etc. For example, when we call one field "First Name" and
                                the other field "Family Name", where should Rainer Maria Rilke enter
                                "Maria"?
                            </p>
                        </div>
                    },
                    {
                        id: 5,
                        title: 'Why can’t I see my DAKS on my MetaMask wallet?',
                        description: <div className="text-rich-text w-richtext">
                            <p>
                                MetaMask only recognizes established coins, therefore DAKS or other security
                                tokens from Aktionariat clients need to be imported first. If you are using
                                a smartphone, please use the following steps;
                            </p>
                            <ol start={1} role="list">
                                <li>Open MetaMask, open the menu and click on Browser inside the app</li>
                                <li>
                                    Enter etherscan.io as URL and search for your ethereum address (visible in
                                    your MetaMask wallet)
                                </li>
                                <li>
                                    You’ll see your security tokens, then click ‘’more’’ → Add DAKS to
                                    MetaMask
                                </li>
                            </ol>
                            <p>
                                If you are using MetaMast as an extension of a browser, please make sure to
                                use this browser when entering etherscan.io and searching for your ethereum
                                address. There you can see your security tokens, then click ‘’more’’ → Add
                                DAKS to MetaMask
                            </p>
                            <p>
                                <br />
                            </p>
                        </div>
                    },
                ]
            }
        },

    }

    // accordion variable
    const category_1_accordion_object = isEnglish ? category_object.category_1.en : category_object.category_1.de;
    //console.log(category_1_accordion_object)


    const category_2_accordion_object = isEnglish ? category_object.category_2.en : category_object.category_2.de;
    const category_3_accordion_object = isEnglish ? category_object.category_3.en : category_object.category_3.de;
    const category_4_accordion_object = isEnglish ? category_object.category_4.en : category_object.category_4.de;


    function accordionControl(id, category = 1) {
        let getAccordion = document.querySelector(`.faqCategory${category}Collapse${id}icon`);
        getAccordion.classList.toggle('icon_rotate');
    }

    return <section id="our-vision" className='section section-grey'>
        <div id="our-vision" className="page-padding">
            <div className="container-large">
                <div className="padding-vertical padding-xxlarge">
                    <div className="content-grid">
                        <div
                            id="w-node-fa089396-172b-9643-4216-14fba0126f99-c2046b69"
                            className="sidebar sidebar-sticky"
                        >
                            <div className="margin-bottom margin-small">
                                <div className="text-size-medium">Category</div>
                            </div>
                            <div className="sidebar-links-list">
                                <Scrollspy items={['shares-market', 'drag-along', 'dependencies', 'wallet']} currentClassName="w--current">
                                    <a href="#shares-market" className="sidebar-link">
                                        {category_1_accordion_object.title}
                                    </a>
                                    <a href="#drag-along" className="sidebar-link">
                                        {category_2_accordion_object.title}

                                    </a>
                                    <a href="#dependencies" className="sidebar-link">
                                        {category_3_accordion_object.title}

                                    </a>
                                    <a href="#wallet" className="sidebar-link ">
                                        {category_4_accordion_object.title}
                                    </a>
                                </Scrollspy>
                            </div>
                        </div>
                        <div
                            id="w-node-fa089396-172b-9643-4216-14fba0126fa6-c2046b69"
                            className="content-block space-between"
                        >
                            <div id="shares-market" className="sidebar-section">
                                <div className="margin-bottom margin-medium">
                                    <h2>{category_1_accordion_object.title}</h2>
                                </div>
                                <div className="w-dyn-list">

                                    <div role="list" className="w-dyn-items">
                                        {category_1_accordion_object.accordions.map(v => {
                                            return (
                                                <div key={v.id} role="listitem" className="w-dyn-item">
                                                    <div className="accordion-item w-dyn-item" style={{ opacity: "0.6" }}>
                                                        <div
                                                            data-w-id="d79ecbd3-b0e6-8ab0-6838-8e83c83a34ee"
                                                            className="accordion-trigger"
                                                            onClick={() => accordionControl(v.id)}
                                                            data-mdb-toggle="collapse"
                                                            data-mdb-target={`#faqCategory1Collapse${v.id}`}
                                                        >
                                                            <div className="dropdown-title large-title">
                                                                <h3 className="text-size-medium text-weight-normal">
                                                                    {v.title}
                                                                </h3>
                                                            </div>
                                                            <div
                                                                className={`icon accordion-icon faqCategory1Collapse${v.id}icon`}
                                                            >
                                                                <img
                                                                    src={require('../../../icons/plus.svg').default}
                                                                    loading="lazy"
                                                                    alt="Plus Icon"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="accordion-item-content accordion-collapse collapse"
                                                            id={`faqCategory1Collapse${v.id}`}
                                                        >
                                                            <div className="accordion-description">
                                                                {v.description}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                </div>
                            </div>




                            <div id="drag-along" className="sidebar-section">
                                <div className="margin-bottom margin-medium">
                                    <div className="margin-bottom margin-xlarge">
                                        <div className="divider top-clear" />
                                    </div>
                                    <div className="margin-bottom margin-medium">
                                        <h2>{category_2_accordion_object.title}</h2>
                                    </div>
                                </div>
                                <div className="w-dyn-list">
                                    <div role="list" className="w-dyn-items">
                                        {category_2_accordion_object.accordions.map(v => {
                                            return (
                                                <div key={v.id} role="listitem" className="w-dyn-item">
                                                    <div className="accordion-item w-dyn-item" style={{ opacity: "0.6" }}>
                                                        <div
                                                            data-w-id="d79ecbd3-b0e6-8ab0-6838-8e83c83a34ee"
                                                            className="accordion-trigger"
                                                            onClick={() => accordionControl(v.id, 2)}
                                                            data-mdb-toggle="collapse"
                                                            data-mdb-target={`#faqCategory2Collapse${v.id}`}
                                                        >
                                                            <div className="dropdown-title large-title">
                                                                <h3 className="text-size-medium text-weight-normal">
                                                                    {v.title}
                                                                </h3>
                                                            </div>
                                                            <div
                                                                className={`icon accordion-icon faqCategory2Collapse${v.id}icon`}
                                                            >
                                                                <img
                                                                    src={require('../../../icons/plus.svg').default}
                                                                    loading="lazy"
                                                                    alt="Plus Icon"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="accordion-item-content accordion-collapse collapse"
                                                            id={`faqCategory2Collapse${v.id}`}
                                                        >
                                                            <div className="accordion-description">
                                                                {v.description}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div id="dependencies" className="sidebar-section">
                                <div className="margin-bottom margin-xlarge">
                                    <div className="divider top-clear" />
                                </div>
                                <div className="margin-bottom margin-medium">
                                    <div className="margin-bottom margin-medium">
                                        <h2>{category_3_accordion_object.title}</h2>
                                    </div>
                                </div>
                                <div className="w-dyn-list">
                                    <div role="list" className="w-dyn-items">
                                        {category_3_accordion_object.accordions.map(v => {
                                            return (
                                                <div key={v.id} role="listitem" className="w-dyn-item">
                                                    <div className="accordion-item w-dyn-item" style={{ opacity: "0.6" }}>
                                                        <div
                                                            data-w-id="d79ecbd3-b0e6-8ab0-6838-8e83c83a34ee"
                                                            className="accordion-trigger"
                                                            onClick={() => accordionControl(v.id, 3)}
                                                            data-mdb-toggle="collapse"
                                                            data-mdb-target={`#faqCategory3Collapse${v.id}`}
                                                        >
                                                            <div className="dropdown-title large-title">
                                                                <h3 className="text-size-medium text-weight-normal">
                                                                    {v.title}
                                                                </h3>
                                                            </div>
                                                            <div
                                                                className={`icon accordion-icon faqCategory3Collapse${v.id}icon`}
                                                            >
                                                                <img
                                                                    src={require('../../../icons/plus.svg').default}
                                                                    loading="lazy"
                                                                    alt="Plus Icon"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="accordion-item-content accordion-collapse collapse"
                                                            id={`faqCategory3Collapse${v.id}`}
                                                        >
                                                            <div className="accordion-description">
                                                                {v.description}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div id="wallet" className="sidebar-section">
                                <div className="margin-bottom margin-xlarge">
                                    <div className="divider top-clear" />
                                </div>
                                <div className="margin-bottom margin-medium">
                                    <div className="margin-bottom margin-medium">
                                        <h2>{category_4_accordion_object.title}</h2>
                                    </div>
                                </div>
                                <div className="w-dyn-list">
                                    <div role="list" className="w-dyn-items">
                                        {category_4_accordion_object.accordions.map(v => {
                                            return (
                                                <div key={v.id} role="listitem" className="w-dyn-item">
                                                    <div className="accordion-item w-dyn-item" style={{ opacity: "0.6" }}>
                                                        <div
                                                            data-w-id="d79ecbd3-b0e6-8ab0-6838-8e83c83a34ee"
                                                            className="accordion-trigger"
                                                            onClick={() => accordionControl(v.id, 4)}
                                                            data-mdb-toggle="collapse"
                                                            data-mdb-target={`#faqCategory4Collapse${v.id}`}
                                                        >
                                                            <div className="dropdown-title large-title">
                                                                <h3 className="text-size-medium text-weight-normal">
                                                                    {v.title}
                                                                </h3>
                                                            </div>
                                                            <div
                                                                className={`icon accordion-icon faqCategory4Collapse${v.id}icon`}
                                                            >
                                                                <img
                                                                    src={require('../../../icons/plus.svg').default}
                                                                    loading="lazy"
                                                                    alt="Plus Icon"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="accordion-item-content accordion-collapse collapse"
                                                            id={`faqCategory4Collapse${v.id}`}
                                                        >
                                                            <div className="accordion-description">
                                                                {v.description}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
const Newsletter = () => {
    return <section id="newsletter">
        <div className="page-padding">
            <div className="container-large">
                <div className="padding-vertical padding-xlarge">
                    <div className="max-width-full">
                        <div className="margin-bottom margin-medium">
                            <p className="heading-xlarge text-weight-bold">
                                Still have a question?
                            </p>
                        </div>
                        <div className="margin-bottom margin-xlarge">
                            <div className="margin-bottom margin-medium">
                                <p className="text-color-darkgrey">
                                    If you can’t find answer to your question in our FAQ, you can
                                    always contact us. We will answer to you shortly.
                                </p>
                            </div>
                            <p className="text-size-small text-color-grey">
                                Fields marked with an asterisk (*) are required.
                            </p>
                        </div>
                    </div>
                    <div className="max-width-large">
                        <div className="contact_form-wrapper w-form">
                            <form
                                id="wf-form-Contact-Form"
                                name="wf-form-Contact-Form"
                                data-name="Contact Form"
                                method="get"
                                className="contact_form"
                                aria-label="Contact Form"
                                data-hs-cf-bound={true}
                            >
                                <div className="margin-bottom margin-small">
                                    <div className="form-field-row">
                                        <input
                                            type="text"
                                            className="form-text-input w-input"
                                            maxLength={256}
                                            name="contact-2-first-name-2"
                                            data-name="Contact 2 First Name 2"
                                            placeholder="First Name*"
                                            id="contact-2-first-name-2"
                                            required
                                        />
                                        <input
                                            type="text"
                                            className="form-text-input w-input"
                                            maxLength={256}
                                            name="contact-2-last-name-2"
                                            data-name="Contact 2 Last Name 2"
                                            placeholder="Last Name*"
                                            id="contact-2-last-name-2"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="margin-bottom margin-small">
                                    <div className="form-field-row">
                                        <input
                                            type="email"
                                            className="form-text-input w-input"
                                            maxLength={256}
                                            name="contact-2-email-3"
                                            data-name="Contact 2 Email 3"
                                            placeholder="Email*"
                                            id="contact-2-email-3"
                                            required
                                        />
                                        <input
                                            type="tel"
                                            className="form-text-input w-input"
                                            maxLength={256}
                                            name="contact-2-email-2"
                                            data-name="Contact 2 Email 2"
                                            placeholder="Phone Number"
                                            id="contact-2-email-2"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="margin-bottom margin-small">
                                    <textarea
                                        placeholder="Message"
                                        maxLength={5000}
                                        id="contact-2-message-2"
                                        name="contact-2-message-2"
                                        data-name="Contact 2 Message 2"
                                        required
                                        className="form-text-input text-area w-input"
                                        defaultValue={""}
                                    />
                                </div>
                                <input
                                    type="submit"
                                    defaultValue="Submit"
                                    data-wait="Please wait..."
                                    className="button-form-visible w-button"
                                />
                            </form>
                            <div
                                className="success-message w-form-done"
                                tabIndex={-1}
                                role="region"
                                aria-label="Contact Form success"
                            >
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div
                                className="error-message w-form-fail"
                                tabIndex={-1}
                                role="region"
                                aria-label="Contact Form failure"
                            >
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}