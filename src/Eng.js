import { Link } from "react-router-dom";
import cvEng from "./assets/cv-en.pdf";

function Eng() {

    return (
        <>
            <main className="en">
                <div className="lang">
                    <Link to="/" className="rus">RUS</Link>
                    /
                    <Link to="eng" className="eng">ENG</Link>
                </div>
                <div className="title">
                    <div className="name">Daria Trofimova</div>
                    <div className="subtitle">
                        ex-Frontend Developer at <a target="_blank" href="https://rsttur.ru/">RST-Tur</a>
                    </div>
                </div>

                <div className="contacts">
                    <ul>
                        <li className="email">
                            <a target="_blank" href="mailto:trofimova.hk@gmail.com">trofimova.hk@gmail.com</a>
                        </li>
                        <li className="telegram">
                            <a target="_blank" href="https://t.me/dartlibre">telegram</a>
                        </li>
                        <li className="github">
                            <a target="_blank" href="https://github.com/trofimovadd">GitHub</a>
                        </li>
                        <li>
                            <a href={cvEng} target="_blank" rel="noreferrer">CV</a>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    )
}

export default Eng