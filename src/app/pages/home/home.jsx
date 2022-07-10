import React from "react";
import { useState, useEffect } from "react";
import HomeStyle from "./home.module.sass";
import api from '../../../database-setup/database-setup'

function Home() {
  const [posts, setPosts] = useState([])
  useEffect(_ => {
    api.get('/posts').then(res => setPosts(res.data))
  },[])
  return (
    <div>
        <div  className={HomeStyle.container} >
          <div className={HomeStyle.row}>
            {posts.map(post=>{
              // const path = require(`${post.path}`)
                return(
                      <div key={post.id} className={HomeStyle.card}>
                          <div className={HomeStyle.imageBox}>
                            <img className={HomeStyle.img} src={process.env.PUBLIC_URL + post.path} alt="" />
                            <a href="/service" className={HomeStyle.link}> 
                            </a>
                          </div>
                          <div className={HomeStyle.textBox}>
                              <h2 className={HomeStyle.title} >{post.title}</h2>
                              <p className={HomeStyle.description} >{post.description}</p>
                          </div>
                      </div>
                )
            })}
          </div>
        </div>
    </div>
  );
}

export default Home;
