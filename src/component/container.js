import React, {Component} from 'react'
import UserForm from './other/form'
import axios from 'axios'
import '../App.css'

class ContainerExampleText extends Component {
    state = {
        repos: null,
        name: null,
        followers: null,
        following: null,
        url: null,
        user: null,
        img: null,
        bio: null
    }
    getuser = (e) => {

        e.preventDefault()
        const user = e.target.elements.username.value;

        if (user) {
            axios.get(`https://api.github.com/users/${user}`)
                .then((res) => {
                    const repos = res.data.public_repos
                    const name = res.data.name
                    const followers = res.data.followers
                    const following = res.data.following
                    const url = res.data.html_url
                    const user = res.data.login
                    const img = res.data.avatar_url
                    const bio = res.data.bio
                    this.setState({
                        name, repos, followers, following, url, user, img, bio

                    })
                })
        } else return;


    }

    render() {
        return <div className="App" id="main-div">


            <div className="row">
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-title" id="title">
                            Git Fetch
                        </div>
                        <div className="card-content">
                            <UserForm getuser={this.getuser}/>
                            {this.state.repos ? <div><img src={this.state.img} id={"img"}/>
                                    {this.state.bio?  <div id={"span1"}>BIO : {this.state.bio}</div>: <div> </div> }

                                    <p></p>
                                    <span id={"span3"}>Name : {this.state.name}</span>
                                    <span id={"span2"}> No of repos are : {this.state.repos}</span>

                                    <p></p>
                                    <span id={"span6"}>Followers : {this.state.followers}</span>
                                    <span id={"span4"}>Following : {this.state.following}</span>
                                    <p></p><span id={"span5"}>URL : {this.state.url}</span>


                                </div> :
                                <p id={"other"}>Please enter username </p>
                            }

                        </div>
                    </div>
                </div>
            </div>


        </div>
    }

}

export default ContainerExampleText
