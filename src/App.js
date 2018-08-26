import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    percents: {
      ninetyFive: 0,
      ninety: 0,
      eightyFive: 0,
      eighty: 0,
      seventyFive: 0,
      seventy: 0,
      sixtyFive: 0,
      sixty: 0,
      fiftyFive: 0,
      fifty: 0,
      fortyFive: 0,
      forty: 0,
      thirtyFive: 0,
      thirty: 0,
      twentyFive: 0,
      twenty: 0,
      fifteen: 0,
      ten: 0
    }
  }

  formSubmit = (e) => {
    e.preventDefault();
    const weight = this.refs.weight.value;

    this.setState({
      percents: {
        ninetyFive: Math.floor(weight * .95),
        ninety: Math.floor(weight * .9),
        eightyFive: Math.floor(weight * .85),
        eighty: Math.floor(weight * .8),
        seventyFive: Math.floor(weight * .75),
        seventy: Math.floor(weight * .7),
        sixtyFive: Math.floor(weight * .65),
        sixty: Math.floor(weight * .6),
        fiftyFive: Math.floor(weight * .55),
        fifty: Math.floor(weight * .5),
        fortyFive: Math.floor(weight * .45),
        forty: Math.floor(weight * .4),
        thirtyFive: Math.floor(weight * .35),
        thirty: Math.floor(weight * .3),
        twentyFive: Math.floor(weight * .25),
        twenty: Math.floor(weight * .2),
        fifteen: Math.floor(weight * .15),
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
                <td>95%</td>
                <td>{percents.ninetyFive}</td>
              </tr>
              <tr>
                <td>90%</td>
                <td>{percents.ninety}</td>
              </tr>
              <tr>
                <td>85%</td>
                <td>{percents.eightyFive}</td>
              </tr>
              <tr>
                <td>80%</td>
                <td>{percents.eighty}</td>
              </tr>
              <tr>
                <td>75%</td>
                <td>{percents.seventyFive}</td>
              </tr>
              <tr>
                <td>70%</td>
                <td>{percents.seventy}</td>
              </tr>
              <tr>
                <td>65%</td>
                <td>{percents.sixtyFive}</td>
              </tr>
              <tr>
                <td>60%</td>
                <td>{percents.sixty}</td>
              </tr>
              <tr>
                <td>55%</td>
                <td>{percents.fiftyFive}</td>
              </tr>
              <tr>
                <td>50%</td>
                <td>{percents.fifty}</td>
              </tr>
              <tr>
                <td>45%</td>
                <td>{percents.fortyFive}</td>
              </tr> 
              <tr>
                <td>40%</td>
                <td>{percents.forty}</td>
              </tr> 
              <tr>
                <td>35%</td>
                <td>{percents.thirtyFive}</td>
              </tr>
              <tr>
                <td>30%</td>
                <td>{percents.thirty}</td>
              </tr>
              <tr>
                <td>25%</td>
                <td>{percents.twentyFive}</td>
              </tr>
              <tr>
                <td>20%</td>
                <td>{percents.twenty}</td>
              </tr>
              <tr>
                <td>15%</td>
                <td>{percents.fifteen}</td>
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
