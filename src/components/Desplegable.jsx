import React, { useState } from "react"
import './Desplegable.css'
import 'animate.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-regular-svg-icons"

const Desplegable = ( {question, answer} ) => {

    const [toggle, setToggle] = useState(false)

    const showAnswer = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <div className="desplegable-question">
                <h2>{question}</h2>
                 <FontAwesomeIcon icon={faEye} onClick={showAnswer} className="icon" /> 
            </div>
            { toggle ? <div className="animate__animated animate__fadeIn desplegable-answer"> <p>{answer}</p> </div> : '' }
        </>
    )
}

export default Desplegable