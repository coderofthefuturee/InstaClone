import React from 'react'
import Post from './Post'

export default function Posts() {
    const posts = [
        {
            id: '1',
            username:"YachtClubApe",
            userImg: "/boredape.jpg",
            img: "/ba1.png",
            caption: 'Nice car'
        }
    ]
  return (
    
    <div>
        {posts.map((post) => (
            <Post 
                key={post.id}
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
            />
        ))}
    </div>
  )
}
