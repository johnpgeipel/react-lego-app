import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import Form from './components/Form';
import Row from './components/Row';
import Card from './components/Card';
import Footer from './components/Footer';
import collection from './assets/json/data.json'
import './App.css';

class App extends Component {
  state = {
    data: collection,
    selectVal: '',
    currentSet: null,
    currentTheme: null,
    toggleSearh: true,
    toggleHeader: false,
    toggleFooter: false,
    date: new Date().getFullYear()
  };

  componentDidMount() {
    console.log(this.state.data)
  };

  componentDidUpdate() {
    console.log(this.state)
  };

  handleItemSelect = (event) => {
    const eventVal = event.target.value;
    this.setState({
      selectVal: eventVal,
      currentSet: this.state.data.filter( item => item.setId === eventVal),
      currentTheme: null,
      toggleSearh: !this.state.toggleSearh,
      toggleHeader: true,
      toggleFooter: true
    });
    this.cardContainerStyle();
  };

  handleThemeSelect = (event) => {
    const eventVal = event.target.value;
    this.setState({
      selectVal: eventVal,
      currentSet: null,
      currentTheme: this.state.data.filter( item => item.theme === eventVal),
      toggleSearh: !this.state.toggleSearh,
      toggleHeader: true,
      toggleFooter: true,
    });
    this.cardContainerStyle();
  };

  toggleHeader = () => {
    this.setState({
      toggleHeader: !this.state.toggleHeader
    })
  };

  handleToggle = () => {
    this.setState({
      toggleSearh: !this.state.toggleSearh
    });
  };

  toggleFooter = () => {
    this.setState({
      toggleFooter: !this.state.toggleFooter
    })
  };

  cardContainerStyle = () => {
    const cardContainer = document.getElementById('card-container');
    console.log(cardContainer);
    cardContainer.classList.add('marginBottom');
  };

  render() {
    return (
      <div className="App">
        <Jumbotron
          title="John's Legos"
          toggleHeader={ this.state.toggleHeader }
          >
          <Form
            data={ this.state.data }
            toggleSearh={ this.state.toggleSearh }
            handleToggle={ this.handleToggle }
            handleItemSelect={ this.handleItemSelect }
            handleThemeSelect={ this.handleThemeSelect }
          />
        </Jumbotron>
        <Row>
          { this.state.currentSet ?
            <Card
            key={ this.state.currentSet[0].setId }
            name={ this.state.currentSet[0].name }
            imgUrl={ this.state.currentSet[0].imgUrl }
            setId={ this.state.currentSet[0].setId }
            themeLogo={ this.state.currentSet[0].themeLogo }
            pieces={ this.state.currentSet[0].pieces }
            columnClass="card-col-one"
            containerClass="img-col-one"
            titleClass="title-col-one"
            /> :
            this.state.currentTheme && this.state.currentTheme.length === 1 ?
              this.state.currentTheme.map(obj => 
              <Card
              key={ obj.setId }
              name={ obj.name }
              imgUrl={ obj.imgUrl }
              setId={ obj.setId }
              themeLogo={ obj.themeLogo }
              pieces={ obj.pieces }
              columnClass="card-col-one"
              containerClass="img-col-one"
              titleClass="title-col-one"
              />
              ) : this.state.currentTheme ?
              this.state.currentTheme.map(obj => 
                <Card
                key={ obj.setId }
                name={ obj.name }
                imgUrl={ obj.imgUrl }
                setId={ obj.setId }
                themeLogo={ obj.themeLogo }
                pieces={ obj.pieces }
                />
              ) : null
          }
        </Row>
        <Footer
          date={ this.state.date }
          toggleFooter={ this.state.toggleFooter }
        />
      </div>
    );
  };
};

export default App;