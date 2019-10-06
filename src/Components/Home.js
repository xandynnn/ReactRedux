import React from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';

function Home ( props ) {

    const { posts } = props;
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
                { postList }
            </div>
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);