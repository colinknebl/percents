import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    percents: {
      ninety: 0,
      eighty: 0,
      seventy: 0,
      sixty: 0,
      fifty: 0,
      forty: 0,
      thirty: 0,
      twenty: 0,
      ten: 0
    }
  }

  formSubmit = (e) => {
    e.preventDefault();
    const weight = this.refs.weight.value;

    this.setState({
      percents: {
        ninety: Math.floor(weight * .9),
        eighty: Math.floor(weight * .8),
        seventy: Math.floor(weight * .7),
        sixty: Math.floor(weight * .6),
        fifty: Math.floor(weight * .5),
        forty: Math.floor(weight * .4),
        thirty: Math.floor(weight * .3),
        twenty: Math.floor(weight * .2),
        ten: Math.floor(weight * .1)
      }
    })
  }

  render() {
    const percents = this.state.percents;
    return (
      <div className="App">
        <header className="App-header">
          <h1>What's my percent?</h1>
        </header>

        <main>

          <form onSubmit={this.formSubmit}>
            <label htmlFor="weight">Weight: 
              <input type="number" ref="weight" placeholder="0"/>
            </label>
            <button>Calculate</button>
          </form>


          <table className="weight-table">
            <thead>
              <tr>
                <th>Percent</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>90%</td>
                <td>{percents.ninety}</td>
              </tr>
              <tr>
                <td>80%</td>
                <td>{percents.eighty}</td>
              </tr>
              <tr>
                <td>70%</td>
                <td>{percents.seventy}</td>
              </tr>
              <tr>
                <td>60%</td>
                <td>{percents.sixty}</td>
              </tr>
              <tr>
                <td>50%</td>
                <td>{percents.fifty}</td>
              </tr>
              <tr>
                <td>40%</td>
                <td>{percents.forty}</td>
              </tr> 
              <tr>
                <td>30%</td>
                <td>{percents.thirty}</td>
              </tr>
              <tr>
                <td>20%</td>
                <td>{percents.twenty}</td>
              </tr>
              <tr>
                <td>10%</td>
                <td>{percents.ten}</td>
              </tr>         
            </tbody>
          </table>
        </main>

        <footer>
          <a className="footer-link" href="https://colinknebl.com">@Colin Knebl</a>
        </footer>
      </div>
    );
  }
}

export default App;
