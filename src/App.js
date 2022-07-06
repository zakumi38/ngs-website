import PostList from "./app/pages/post/post-list/post-list";
import AddNewUser from "./app/pages/user/add-new-user/add-new-user";
import UserList from "./app/pages/user/user-list/user-list";
import EditUser from "./app/pages/user/edit-user/edit-user";
import AddPost from "./app/pages/post/add-new-post/add-new-post";
import EditPost from "./app/pages/post/edit-post/edit-post";
import Header from './core/components/header'
import React, { useState } from "react";
import "./app.sass";

function App() {
  const [navToggle, setToggle] = useState(false);

  return (
    <div className="App">
      <Header />
      <PostList />
      <UserList />
      <AddNewUser />
      <EditUser />
      <AddPost></AddPost>
      <EditPost />
    </div>
  );
}

export default App;
