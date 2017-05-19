import React from 'react';
import Cookies from 'universal-cookie';
import GoogleSignIn from './GoogleSignIn';
import TrendChart from './Chart';
import Input from './Input';
import History from './History';
import ArticleList from './ArticleList';
import DateSelector from './DateSelector.jsx';

const cookies = new Cookies();

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let loggedIn;
    if (cookies.get('loggedIn') === 'true') {
      loggedIn = <div>Welcome Back! <a href="/logout">Logout</a></div>
    } else {
      loggedIn = <GoogleSignIn />
    }
    return (
      <div className="row">
      <div className="col col-m-10 offset-m-1 col-lg-8 offset-lg-2">
         {loggedIn}
        <Input 
          collectData={this.props.collectData}
          addStart={this.props.addStart}
          addEnd={this.props.addEnd}
          setTrend={this.props.setTrend}
          trend={this.props.trend}
        />
        <History history={this.props.history} userHistory={this.props.userHistory} collectData={this.props.collectData} loggedIn={this.props.loggedIn}/>
        <TrendChart 
          getChartClick={this.props.getChartClick} 
          chartData={this.props.chartData} 
          storyPoint={this.props.storyPoint}
          trend={this.props.trend}
          collectData={this.props.collectData}
          setTrend={this.props.setTrend}
        />
        <ArticleList selectedDate={this.props.selectedDate} trend={this.props.chartData.trend} storyPoint={this.props.storyPoint}/>
      </div>
    </div>
    );
  }
}



export default Body;
