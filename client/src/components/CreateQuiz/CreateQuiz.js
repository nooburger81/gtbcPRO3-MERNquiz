import React, { useState } from 'react';
import Sidebar from '../Sidebar/sidebar';
import './createQuiz.css';
import Dialog from '../Dialog/Dialog';
import axios from 'axios';
import Toast from '../Toast/toast';

const CreateQuiz = () => {
    const [categories] = useState(['School', 'Lifestyle', 'Technology', 'Anime']);
    const [category, setCategory] = useState('School');
    const [mustBeLoggedIn, setMustBeLoggedIn] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [name, setName] = useState('');
    const [addQuestion, setAddQuestion] = useState(false);
    const [questionName, setQuestionName] = useState('');
    const [answers, setAnswers] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState('');

    const selectPrivate = (event) => {
        const checked = event.target.checked;
        setMustBeLoggedIn(checked);
    };

    const addAnswer = () => {
        setAnswers([...answers, '']);
    };

    const updateAnswer = (event, index) => {
        const newArr = [...answers];
        newArr[index] = event.target.value;
        setAnswers(newArr);
    };

    const saveQuestion = () => {
        const question = {
            answers: answers,
            correctAnswer: correctAnswer,
            questionName: questionName
        };
        setQuestions([...questions, question]);
        setAddQuestion(false);
        setQuestionName('');
        setAnswers([]);
        setCorrectAnswer('');
    };

    const removeQuestion = (question) => {
        setQuestions(questions.filter((ques) => ques.questionName !== question.questionName));
    };

    const saveQuiz = () => {
        const quiz = {
            mustBeLoggedIn: mustBeLoggedIn,
            name: name,
            questions: questions,
        };
        axios.post('/api/quizzzes/create', { quiz })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className="create-quiz-wrapper">
            <Toast model={showToast} message="Quiz Created" />
            <div>
                <Sidebar />
            </div>

            <div className="main">
                <div className="header">Create Quiz</div>
                <div className="form card">
                    <input className="input" onChange={(e) => setName(e.target.value)} value={name} placeholder="Quiz Name" />
                    <br />
                    <input className="input" onChange={(e) => setImgUrl(e.target.value)} value={imgUrl} placeholder="Img url" />
                    <br />
                    <select
                        value={categoryVal}
                        onChange={(e) => setCategoryVal(e.target.value)}
                        className="input select"
                        placeholder="Category"
                    >
                        {categories.map((cat, idx) => (
                            <option key={idx} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                    <div className="checkbox">
                        <span>Must be logged in to take</span>
                        <input
                            checked={mustBeSignedIn}
                            onChange={selectPrivate}
                            type="checkbox"
                            placeholder="Must be logged in to take"
                        />
                    </div>

                    {questions.map((ques, idx) => (
                        <div className="question" key={idx}>
                            <div>{ques.questionName}</div>
                            <div>Correct Answer: {ques.correctAnswer}</div>
                            <div>Num of answers: {ques.answers.length}</div>
                            <span className="btn delete" onClick={() => removeQuestion(ques)}>
                                Delete
                            </span>
                        </div>
                    ))}

                    <div className="questions">
                        <div className="add-question" onClick={() => setAddQuestion(true)}>
                            Add Question
                        </div>
                    </div>

                    <span onClick={saveQuiz} className="btn save-quiz">
                        Save Quiz
                    </span>

                    <Dialog model={addQuestion}>
                        <div className="new-question-form">
                            <input className="input" placeholder="Question" value={questionName} onChange={(e) => setQuestionName(e.target.value)} />
                            <div>Answers</div>
                            {answers.map((ans, idx) => (
                                <div className="answer-form" key={idx}>
                                    <input
                                        type="radio"
                                        value={ans}
                                        onChange={(e) => setCorrectAnswer(ans)}
                                        name="answer"
                                    />{' '}
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Answer"
                                        value={answers[idx]}
                                        onChange={(e) => updateAnswer(e, idx)}
                                    />
                                </div>
                            ))}
                            <div className="add-answer" onClick={addAnswer}>
                                Add Answer
                            </div>
                            <div className="btn-wrapper">
                                <div className="btn" onClick={() => setAddQuestion(false)}>
                                    Close
                                </div>
                                <div className="btn" onClick={saveQuestion}>
                                    Save
                                </div>
                            </div>
                        </div>
                    </Dialog>
                </div>
            </div>
        </div>
    );
};

export default CreateQuiz;
