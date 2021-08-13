import React from 'react'

type QProps = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<QProps> = ({question,userAnswer,callback, answers, questionNumber, totalQuestions}) => {

  return (
    <div>
      <p className="number">Question: {questionNumber}/ {totalQuestions}</p>
      <p dangerouslySetInnerHTML={{__html: question}}></p>
      {
        answers.map(answer => (
          <div>
            <button disabled={userAnswer} onClick={callback}></button>
            <span dangerouslySetInnerHTML={{__html: answer}}></span>
          </div>
        ))
      }
    </div>
  )
}

export default QuestionCard
