import PostList from "./app/pages/post/post-list/post-list";
import AddNewUser from "./app/pages/user/add-new-user/add-new-user";
import UserList from "./app/pages/user/user-list/user-list";

function App() {
  return (
    <div className="App">
      <PostList />
      <UserList />
      <AddNewUser />
    </div>
  );
}

export default App;
