import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchUsers,deleteUser } from '../actionCreators/fetchUserAction';
import * as styles from './styles.css';
import SearchBar from '../presentation/searchBar';


class WhatsappScreen extends Component {

  constructor(props){
    super(props);
    this.state = {userList : []};
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event,id){
    this.props.deleteUser(id);
  }

  componentDidMount(){
     this.props.fetchUsers();
     if(this.props.users){
      this.setState({userList: this.props.users});
     }
  }

  componentDidUpdate(prevProps){
    if(prevProps !== this.props){
    this.setState({userList:this.props.users});
    }
  }

  handleSearch(content){
  let updatedList = this.props.users;
  updatedList = updatedList.filter(eachUser =>{
    return (eachUser.name.toLowerCase()).indexOf(content.toLowerCase().trim()) !== -1;
  });
  this.setState({userList:updatedList});
  }

  render(){
   const { users } = this.props;
   const { userList } = this.state;

    return(
    <div>
    <SearchBar onChange={this.handleSearch.bind(this)}/>
    <ul className="list-group">
      { userList && userList.map((eachUser) => (
      <li key ={eachUser.name}>
      <span><img src={eachUser.image}/></span>
      <span>{eachUser.name}</span>
      <span><button className={styles.deleteButton} onClick={(evt) => this.handleDelete(evt,eachUser.name)}>x</button></span>
      </li>
      ))
      }
    </ul>
    </div>
    );
  }

}

function mapStateToProps(state){
  return {
    users: state.usersContext.users
  };
}

function mapDispatchToStore(dispatch){
  return bindActionCreators({fetchUsers,deleteUser},dispatch);
}

export default connect(mapStateToProps,mapDispatchToStore)(WhatsappScreen);
