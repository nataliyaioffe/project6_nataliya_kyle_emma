import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { userData, goToRoutine, handleChange, addRoutine } = this.props;

    return <section className="dashboard">
        {userData && <div>
            <h2>Routines</h2>
            <form action="" onSubmit={addRoutine}>
              <label className="visuallyhidden" htmlFor="routineName">
                Routine Name
              </label>
              <div className="inputDiv clearfix">
                <input required onChange={handleChange} type="text" name="routineName" id="routineName" placeholder="Routine Name" />
                <input className="btn--add" type="submit" value=">" />
              </div>
            </form>
            {Object.entries(userData).map(user => <div>
                <button className="btn--goTo" key={user[0]} id={user[0]} onClick={goToRoutine}>
                  {user[1].routineName}
                </button>
              </div>)}
          </div>}
      </section>;
  }
}

export default Dashboard;
