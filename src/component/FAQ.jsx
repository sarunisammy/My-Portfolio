import { useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"


const FAQ = ({question, answer}) => {
    //introduce the isshowing js mode for the plus and minus icons
    const [isAnswerShowing, setIsAnswershowing] = useState(false)
  return (
  <article className="faq" >
    <div>
    <h4>{question}</h4>
    <button className="faq__icon" onClick={() => setIsAnswershowing(prev =>!prev)} style={{cursor:"pointer"}}>
        {/* interchange to showing which icon should show if the isshowing comand is true  */}
       
        {
            isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus/>
        }
    </button>
    </div>
    {/*  */}
    {isAnswerShowing && <p>{answer}</p>}
  </article>
  )
}

export default FAQ