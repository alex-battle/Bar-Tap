import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import {findBar, barsList, loungesList, cocktailList, sportsBarList, hookahList, diveBarList, whiskeyList} from './services/ApiHelper';



class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      search: [],
      searchedBar: null,
      searchInput:'',
      list: [],
      loungeList: [],
      cocktaillist: [],
      sportsbarlist: [],
      hookahlist: [],
      divelist: [],
      whiskeylist: []
     };
    this.handleChange=this.handleChange.bind(this)
    this.handleButtonClick= this.handleButtonClick.bind(this)
  }
  
  async componentDidMount(){
    let response = await findBar();
    this.setState({
      name: response.data
    })
    let rspnse = await barsList();
    this.setState({
      list: rspnse.data
    })
    
    let rspns = await loungesList();
    this.setState({
      loungelist: rspns.data
    })
    
    let rspn = await cocktailList();
    this.setState({
      cocktaillist: rspn.data
    })
    let rsp = await sportsBarList();
    this.setState({
      sportsbarlist: rsp.data
    })
     let res = await hookahList();
     this.setState({
       hookahlist: res.data
     })
     let respn = await diveBarList();
     this.setState({
       divelist: respn.data
     })

    let respon = await whiskeyList();
    this.setState({
      whiskeylist: respon.data
    })
    }
    

    handleChange(e){
      let value = e.target.value
      this.setState({
        searchInput: value,
        venues: [],
        list: value,
        venue:[]
      }
      )
    }

    async handleButtonClick(e){
      let word = await findBar(this.state.searchInput);
      this.setState ({
        venues: word.data.response.venues
      })
    }
    async handleClick(e){
      let allBars = await barsList();
      this.setState({
        list: allBars.data.response.venues
      })
    }
    async handleLoungeClick(e){
      let allLounge = await loungesList();
      this.setState({
        loungeList: allLounge.data.response.venues
      })
      console.log(allLounge)
    }
    async handleCocktailClick(e){
      let allCocktail = await cocktailList();
      this.setState({
        cocktaillist: allCocktail.data.response.venues
      })
    }
      async handleSportsBarClick(e){
        let allSportsBar = await sportsBarList();
        this.setState({
          sportsbarlist: allSportsBar.data.response.venues
        })
      
      }
        async handlehookahClick(e){
          let allHookah = await hookahList();
          this.setState({
            hookahlist: allHookah.data.response.venues
          })
        }
          async handleDiveClick(e){
            let allDive = await diveBarList();
            this.setState({
              divelist: allDive.data.response.venues
            })
          }
            async handleWhiskeyClick(e){
              let allWhiskey = await whiskeyList();
              this.setState({
                whiskeylist: allWhiskey.data.response.venues
              })
            }
    
  render() {
    return (
      <div className="App">
      <HomePage 
        hookahlist={this.state.hookahlist}
        whiskeylist={this.state.whiskeylist} 
        divelist={this.state.divelist} 
        sportsbarlist={this.state.sportsbarlist} 
        cocktaillist={this.state.cocktaillist} 
        loungelist={this.state.loungelist} 
        venues={this.state.venues} 
        list={this.state.list} 
        handleHookahClick={this.handleHookahClick}
        handleWhiskeyClick={this.handleWhiskeyClick} 
        handleDiveClick={this.handleDiveClick} 
        handleSportsBarClick={this.handleSportsBarClick} 
        handleCocktailClick={this.handleCocktailClick} 
        handleLoungeClick={this.handleLoungeClick} 
        handleClick={this.handleClick} 
        handleButtonClick={this.handleButtonClick} 
        handleChange={this.handleChange} 
        searchInput={this.state.searchInput}/>     
    </div>
      
    );
    
  }
}

export default App;
