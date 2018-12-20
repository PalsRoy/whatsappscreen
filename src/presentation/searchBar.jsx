import React, { Component } from 'react';
import 'line-awesome/css/line-awesome.min.css';

class SearchBar extends Component{

   constructor(props){
    super(props);
    this.state = { searchTerm: ''};

    this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event){
   event.preventDefault();
   let searchTerm = event.target.value
   this.setState({searchTerm});
   this.props.onChange(searchTerm);
   }


   render(){
   return(
   <div>
    <div>
      <span className={'la la-search'}></span>
      <input type="text" placeholder="Search Name" value={this.state.searchTerm} onChange={this.handleChange}>
      </input>
    </div>
   </div>
   );
   }
}

export default SearchBar;
