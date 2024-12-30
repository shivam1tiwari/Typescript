import React from "react";
import "./App.css";
import QUESTION from "./utils/question1.tsx";
import { useRef, useState } from "react";
import Timer from "./componenets/Timer";

/**
* App component - Show the  Question and result summary
*/
const App:React.FC = () => {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [answer, setAnswer] = useState<Answer[]>([]);
  const ref = useRef("");

  const uniqueIndex = new Set<number>();
    while (uniqueIndex.size < 10) {
      const random = Math.floor(Math.random() * (QUESTION.length));
      uniqueIndex.add(random);
    }
    interface Answer {
      id: string;
      option: string|null;
      isCorrect?: boolean|null;
    }
    
    interface Question {
      id: string;
      text: string;
      answers: Answer[];
    }     
  let randomQuestion:Question[] = [];
        [...uniqueIndex].forEach((ind)=> randomQuestion.push(QUESTION[ind]))
/**
* handleQuestion takes 
* @param answer and set answer also update questionNumber 
*/     
  const handleQuestion = (answer:Answer) => {
    setAnswer((prev) => {
      return [...prev, answer];
    });
    setQuestionNumber((prev) => {
      let newNumber = prev;
      newNumber++;
      return newNumber;
    });
  };
/**
* It takes event as 
*@param e and update ref.current value
*/
  const handleRadio = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const target = e.target as HTMLElement;
    ref.current = target.dataset.id ?? '';
    
  }
/**
* when click next button it call handleQuestion function
*/
  const handleNext =()=>{

    if(ref.current!==""){
      handleQuestion(JSON.parse(ref.current));
      ref.current = ""
    }

    if(ref.current===""){ 
    handleQuestion({
      id: `${randomQuestion[questionNumber].id}`,
      option: null,
      isCorrect:null
    })}
  }
/**
* It show summary of question answer 
*/
  if (questionNumber > 9) {
    const result = {
      totalScore: 0,
      skipped: 0,
    };

    answer.forEach((val) =>
      QUESTION.forEach((ans) => {

        if (val.id === ans.id) {

          if (val.isCorrect) {
            result.totalScore = result.totalScore + 1;
          }

          if (val.option === null) {
            result.skipped = result.skipped + 1;
          }
        }
      })
    );
    return (
      <div  className="container">
        <h1 className="heading">Quiz Completed</h1>
        <h3 className="total-mark">Total Mark - {result.totalScore}</h3>
        <div className="result">
          <p className="result__content green">Correct {result.totalScore}</p>
          <p className="result__content yellow"> Skipped {result.skipped}</p>
          <p className="result__content red">
            Wrong {answer.length - (result.totalScore + result.skipped)}
          </p>
        </div>
        {answer.map((val) =>
          QUESTION.map((ans) => {
            if (val.id === ans.id) {
              return (
                <div className="quiz__card" key={val.id}>
                  <div className=" question__text-box">
                    <p className="question__text">
                      {ans.id.substring(0, 1).toLocaleUpperCase()}.
                    </p>
                    <p className="question__text"> {ans.text}</p>
                  </div>
                  <ol>
                    {ans.answers.map((answ,i) =>{
                      return ( <li
                        className={
                          val.option===answ.option&&val.isCorrect?
                            "option-1 green"
                              :val.option===answ.option&&!val.isCorrect?"option-1 red":"option-1"
                        }
                        key={i}
                      > 
                      {(answ.isCorrect)?<span className="radio-disable">&#9989;</span>:(val.option===answ.option&&!val.isCorrect)?<span className="radio-disable">&#10060;</span>:<span></span> }
                      <span className="radio-disable">{answ.option}</span>
                      </li>
                    )})}
                  </ol>
                </div>
              );
            }
          })
        )}
      </div>
    );
  }
/**
* Question Card
*/
  return (
    <div className="App">
      <h1 className="heading">Quizes</h1>
      <div className="question__container">
        <div className="question__option">
        <h3>Mark : 1</h3>
          <div className="show-timer">
          <p>
            {randomQuestion[questionNumber].id
              .substring(0, 1)
              .toLocaleUpperCase()}
            . {randomQuestion[questionNumber].text}
          </p><span className={"timer__container"}>
        <span>Time : </span>
        <Timer
          key={questionNumber}
          interval={questionNumber}
          handleInterval={() =>
            handleQuestion({
              id: `${randomQuestion[questionNumber].id}`,
              option: null,
              isCorrect: null,
            })
          }
        />
      </span>
      </div>
          <ol>
            {randomQuestion[questionNumber].answers.map((answer,i) =>(
              <li
                className="option"
                key={answer.id+i}
              > 
                <input className="radio-input" onChange={(e)=>handleRadio(e)} type="radio" name={answer.id}  data-id ={JSON.stringify(answer)} ></input>
                {answer["option"]}
              </li>
            ))}
          </ol>
          
        </div>
        <button className="next-button" onClick={()=>handleNext()} >Next</button>
      </div>
    </div>
  );
};

export default App;
