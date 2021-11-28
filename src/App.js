import React, {useEffect, useState} from 'react';
import './styles/App.css';
import CandidateService from "./services/CandidateService";
import MyButton from "./services/UI/button/MyButton";

const App = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect( () => {
    CandidateService.getCandidates()
        .then(data => setCandidates(data))
  }, [])

  return (
      <div className="app">
                  {
                      candidates.map((candidate, index) => {
                          return <div key={index} className="post">
                              <div className="post_content">
                                  <div>
                                      <strong>Name: </strong>{candidate.name}
                                  </div>
                                  <div>
                                      <strong>Birth Year: </strong>{candidate.birth_year}
                                  </div>
                                  <div>
                                      <strong>Gender: </strong>{candidate.gender}
                                  </div>
                              </div>
                              <div className="post_btns">
                                  <MyButton>More</MyButton>
                              </div>
                          </div>
                      })
                  }

        <button>Next Candidates</button>
      </div>
  );
}

export default App;
