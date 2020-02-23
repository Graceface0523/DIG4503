import React from 'react';
import idSearch from './components/idSearch/';
import nameSearch from './components/nameSearch/';

class App extends React.Component {
  render(){
  return (
    <div>
      <idSearch></idSearch>
      <nameSearch></nameSearch>
      <h2>Reporting</h2>
      <div id="reportingArea"></div>
    </div>

  );
}
}
export default App; 