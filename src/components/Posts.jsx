import React from 'react'
import Post from './Post'

export default function Posts() {
    const posts = [
        {
            id: '1',
            username:"ApeYachtClub",
            userImg: "/boredape.jpg",
            img: "/ba1.png",
            caption: 'Nice car'
        },
        {
            id: '2',
            username:"ApeBlue",
            userImg: "/ba4.png",
            img: "/ba4.png",
            caption: 'Nice car'
        },
        {
            id: '3',
            username:"ApeAngry",
            userImg: "/ba5.png",
            img: "/ba5.png",
            caption: 'Nice car'
        }
    ]
  return (
    
    <div>
        {posts.map((post, index) => {
            return (
                <Post 
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                />
            );
        })}
    </div>
  );
}
