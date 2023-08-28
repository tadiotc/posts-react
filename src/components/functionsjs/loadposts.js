export const loadPosts = async () => {
    
    const postResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const postPhotos = fetch('https://jsonplaceholder.typicode.com/photos');
    const [posts, photos] = await Promise.all([postResponse, postPhotos])
    const postsJson = await posts.json()
    const photosJson = await photos.json()

    const postsPhotos = postsJson.map( (post, index)=>{

      return { ...post, cover: photosJson[index].url }

    })

    return postsPhotos;
}