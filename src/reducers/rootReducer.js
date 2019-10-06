const initState = {
    posts:[
        {id: 1, title: 'Squitle laid and Egg', body:'Lorem ipsum, dolor sit amet 1'},
        {id: 2, title: 'Charmander laid and egg', body:'Lorem ipsum, dolor sit amet 2'},
        {id: 3, title: 'a Helix Fossil was Found', body:'Lorem ipsum, dolor sit amet 3'}
    ]
}

const rootReducer = (state = initState, action) =>{
    if ( action.type === 'DELETE_POST' ) {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id;
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;