import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';

class Home extends Component{

    state = {
        posts: []
    }

    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            this.setState({
                posts: res.data.slice(0,10)
            });
        })
    }

    render(){
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post=>{
                return(
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="A pokeball" />
                        <div className="card-content">
                            <Link to={`/post/${post.id}`}>
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        )

        return(
            <>
                <div className="container home">
                    <h4 className="center">Home</h4>
                    <p>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                    {postList}
                </div>
            </>
        )
    }
}

export default Home;