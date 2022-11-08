import * as React from "react"
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import UserList from "./components/UserList"
import UserCreate from "./components/UserCreate"
import UserEdit from "./components/UserEdit"
import PostList from "./components/PostList"
import PostCreate from "./components/PostCreate"
import PostEdit from "./components/PostEdit"


function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit} />
      <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} />
    </Admin>
  );
}

export default App;
