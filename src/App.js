import PostList from "./app/pages/post/post-list/post-list";
import AddNewUser from "./app/pages/user/add-new-user/add-new-user";
import UserList from "./app/pages/user/user-list/user-list";
import EditUser from "./app/pages/user/edit-user/edit-user";

function App() {
  return (
    <div className="App">
      <PostList />
      <UserList />
      <AddNewUser />
      <EditUser />
    </div>
  );
}

export default App;
