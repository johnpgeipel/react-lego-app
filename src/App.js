import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import Form from './components/Form';
import Row from './components/Row';
import Card from './components/Card';
import Footer from './components/Footer';
import collection from './assets/json/data.json';
import Panzoom from '@panzoom/panzoom';
import './App.css';

class App extends Component {
  state = {
    data: [],
    selectVal: '',
    currentSet: null,
    toggleSearch: true,
    toggleHeader: false,
    toggleFooter: false,
    date: new Date().getFullYear(),
  };

  componentDidMount() {
    console.log(this.state.data)
    this.setState({
      data: collection
    })
  };

  componentDidUpdate() {
    console.log(this.state)
  };

  handleItemSelect = (event) => {
    const eventVal = event.target.value;
    this.setState({
      selectVal: eventVal,
      currentSet: eventVal === "All sets" ? this.state.data : this.state.data.filter( item => item.setId === eventVal),
      toggleSearch: !this.state.toggleSearch,
      toggleHeader: true,
      toggleFooter: true
    });
    this.cardContainerStyle();
  };

  handleThemeSelect = (event) => {
    const eventVal = event.target.value;
    this.setState({
      selectVal: eventVal,
      currentSet: eventVal === "All sets" ? this.state.data : this.state.data.filter( item => item.theme === eventVal),
      toggleSearch: !this.state.toggleSearch,
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
      toggleSearch: !this.state.toggleSearch
    });
  };

  toggleFooter = () => {
    this.setState({
      toggleFooter: !this.state.toggleFooter
    })
  };

  cardContainerStyle = () => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.classList.add('marginBottom');
  };

  handleMouseEnter = (e) => {
    const panzoom = Panzoom(e.target, {
      maxScale: 5
    });
    panzoom.pan(10, 10);
    panzoom.zoom(2.5, { animate: true });
  };

  handleMouseLeave = (e) => {
    const panzoom = Panzoom(e.target, {
      disablePan: true
    });
    panzoom.zoom(1, { animate: true });
    panzoom.resetStyle();
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
            toggleSearch={ this.state.toggleSearch }
            handleToggle={ this.handleToggle }
            handleItemSelect={ this.handleItemSelect }
            handleThemeSelect={ this.handleThemeSelect }
          />
        </Jumbotron>
        <Row>
          { this.state.currentSet && this.state.currentSet.length === 1 ?
            this.state.currentSet.map(obj =>
              <Card
                key={ obj.setId }
                name={ obj.name }
                imgUrl={ obj.imgUrl }
                setId={ obj.setId }
                themeLogo={ obj.themeLogo }
                pieces={ obj.pieces }
                pdfOne={ obj.pdfOne }
                pdfTwo={ obj.pdfTwo }
                columnClass="card-col-one"
                containerClass="img-col-one"
                titleClass="title-col-one"
                handleMouseEnter={this.handleMouseEnter}
                handleMouseLeave={this.handleMouseLeave}
              />
            ) :
            this.state.currentSet ?
              this.state.currentSet.map(obj =>
                <Card
                  key={ obj.setId }
                  name={ obj.name }
                  imgUrl={ obj.imgUrl }
                  setId={ obj.setId }
                  themeLogo={ obj.themeLogo }
                  pieces={ obj.pieces }
                  pdfOne={ obj.pdfOne }
                  pdfTwo={ obj.pdfTwo }
                  handleMouseEnter={this.handleMouseEnter}
                  handleMouseLeave={this.handleMouseLeave}
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