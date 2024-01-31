import { Link } from "react-router-dom";
import cvRus from "./assets/cv-ru.pdf";
import "./App.css"

function Rus() {

    return (
        <>
            <main className="ru">
                <div className="lang">
                    <Link to="/" className="rus">RUS</Link>
                    /
                    <Link to="eng" className="eng">ENG</Link>
                </div>
                <div className="title">
                    <div className="name">Дарья Трофимова</div>
                    <div className="subtitle">
                        ex-Frontend-разработчик в <a target="_blank" href="https://rsttur.ru/">RST-Tur</a>
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
                    </ul>
                    <div className="cv">
                        <a href={cvRus} target="_blank" rel="noreferrer">CV</a>
                    </div>
                </div>
            </main>
        </>
    )
}


export default Rus