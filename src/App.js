import React from 'react'
import Header from './components/Header/Header'
import Searchbox from './components/Searchbox/Searchbox'
import './App.css'
import ResultContainer from './components/ResultsContainer/ResultContainer';

const name=require('@rstacruz/startup-name-generator')

class App extends React.Component{
  constructor(){
    super();
    this.state={
      headerText:"Name!",
      headerExpanded:true,
      suggestedNames:[],
    }
  

  }
  
  handleInputChange=(inputText)=>{
    
    
    this.setState({
      headerExpanded:!(inputText.length>0) ,
      suggestedNames:inputText?name(inputText):[]});
     
  };


  render(){
    return (
      <div>
        <Header headerExpanded={this.state.headerExpanded}
        headTitle={this.state.headerText} />
        <Searchbox onInputChange={this.handleInputChange} />
        <ResultContainer suggestedNames={this.state.suggestedNames} />
      </div>
    )
  }
}


export default App
