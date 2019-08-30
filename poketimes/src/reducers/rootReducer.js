const initState = {
    posts: [
        {id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis sint perferendis possimus quidem deserunt deleniti numquam asperiores atque rerum eos. Ut natus ratione itaque porro ex molestias sequi tempore magni.'},
        {id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis sint perferendis possimus quidem deserunt deleniti numquam asperiores atque rerum eos. Ut natus ratione itaque porro ex molestias sequi tempore magni.'},
        {id: '3', title: 'A Helix Fossil was Found', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis sint perferendis possimus quidem deserunt deleniti numquam asperiores atque rerum eos. Ut natus ratione itaque porro ex molestias sequi tempore magni.'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;
