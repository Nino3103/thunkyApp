import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')

    dispatch({type: 'FETCH_POSTS', payload: response.data})
  }

export const fetchUser = (id) =>  async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`)

    dispatch({type:'FETCH_USER', payload: response.data})
  }


// good but longer
// export const fetchPosts = () => {
//   return async (dispatch, getState) => {
//     const response = await jsonPlaceholder.get('/posts')

//     dispatch({type: 'FETCH_POSTS', payload: response})
//   }
// }



// bad approach !
// ACTIONS MUST BE PLAIN OBJECTS
// USE CUSTOME MIDDLEWARE FOR ASYNC ACTIONS

// export const fetchPosts = async () => {
//   const response = await jsonPlaceholder.get('/posts')
  
//   return{
//     type: 'FETCH_POSTS',
//     payload: response
//   }
// }
