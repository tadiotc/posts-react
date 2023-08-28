
export const PostCard = ( { title, cover, body, id} )=> (

    <div key={id} className='post_content'>
        <img src={cover} alt={title} />
        <h3> { title } </h3>
        <p> { body } </p>
    </div>

);




