//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

const App = ()=> {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
    const [state, setState] = useState(0);  //home
    const [count, setCount] = useState(0);  //away


    return (
            <div className="container">
              <section className="scoreboard">
                <div className="topRow">
                  <div className="home">
                    <h2 className="home__name">Lions</h2>

                    {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

                    <div className="home__score">{state}</div>
                  </div>
                  <div className="timer">00:03</div>
                  <div className="away">
                    <h2 className="away__name">Jazz</h2>
                    <div className="away__score">{`${count}`}</div>
                  </div>
                </div>
                <BottomRow />
              </section>
              <section className="buttons">
                <div className="homeButtons">
                  {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown"onClick={()=> setState (state + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = { ()=> setState (state + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick= { ()=> setCount (count + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = { ()=> setCount (count + 3)}>Away Field Goal</button>
          {/* <button className="awayButtons__fieldGoal" onClick = { ()=> setCountT (currentCountT => currentCountT + 3)}>Away Field Goal</button> */}
        </div>
      </section>
    </div>
  );
}

export default App;
