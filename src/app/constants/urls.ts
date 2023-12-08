const baseURL = 'https://jsonplaceholder.typicode.com'

const users = `${baseURL}/users`
const posts = `${baseURL}/posts`

const urls = {
  users:{
    base:users,
    byId: (id: number): string => `${users}/${id}`
  },

  posts:{
    byId: (id: number)=> `${posts}/${id}`,
    postsUserById:(id:number):string => `${users}/${id}/posts`
  },

  comments: {
    byPostId: (postId: number)=> `${posts}/${postId}/comments`
  }

}

export {
  urls
}
