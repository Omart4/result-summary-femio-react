import useFetch from "../useFetch";
import Reaction from '../assets/images/icon-reaction.svg'
import Visual from '../assets/images/icon-visual.svg'
import Verbal from '../assets/images/icon-verbal.svg'
import Memory from '../assets/images/icon-memory.svg'


const Summary = () =>{
    const svgs = [Reaction,Memory,Verbal,Visual]
    const {error,results} = useFetch('http://localhost:8080/results')
    return(
        <div className="summary">
            <h3>Summary</h3>
            {results.map(result=>(
                <div className="individual-summary" id={result.color}>
                    <div className="name">
                        <img src={svgs[results.indexOf(result)]} alt='icon' />
                        <p>{result.category}</p>
                    </div>
                    <div className="score">
                        <p>{result.score}</p>
                    </div>
                </div>
            ))}
            <button>Continue</button>
        </div>
    )
}

export default Summary;