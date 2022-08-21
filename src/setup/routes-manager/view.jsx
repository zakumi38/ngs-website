import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Blog
import BlogList from "../../app/pages/blog/blog-list/blog-list";
import AddBlog from "../../app/pages/blog/add-new-blog/add-new-blog";
import EditBlog from "../../app/pages/blog/edit-blog/edit-blog";

// User
import UserList from "../../app/pages/user/user-list/user-list";
import AddNewUser from "../../app/pages/user/add-new-user/add-new-user";
import EditUser from "../../app/pages/user/edit-user/edit-user";

//Team
import Teams from "../../app/pages/team/teams";
import AddTeam from "../../app/pages/team/add-team-member";
import EditTeamMember from "../../app/pages/team/edit-team-member";

//Profile
import UserProfile from "../../app/pages/user-profile/EditProfile";
import ChangePassword from "../../app/pages/user-profile/ChangePassword";
import Home from "../../core/components/home/home";

//Gallery
import GalleryList from "../../app/pages/gallery/gallery-list/gallerylist";
import AddGallery from "../../app/pages/gallery/add-new-gallery/add-new-gallery";
import EditGallery from "../../app/pages/gallery/edit-gallery/edit-gallery";

// Event
import EventsList from "../../app/pages/events/event-list/event-list";
import AddNewEvents from "../../app/pages/events/add-new-events/add-new-events";
import EditEvents from "../../app/pages/events/edit-events/edit-events";
import ProtectedRoutes from "./protected-routes";
import api from "../../mockdatabase/database";
import UserView from "../../app/pages/user/view-user/user-view";

function View() {
  const [adminData, setAdminData] = useState({});
  useEffect(() => {
    const FeatchUser = async () => {
      let response = await api.get("/admin");
      setAdminData(response.data);
    };
    FeatchUser();
  }, []);

  return (
    <Routes>
      <Route index element={<Home />}></Route>

      {/* Protect User Route */}
      <Route element={<ProtectedRoutes />}>
        {/* User */}
        <Route path="/user">
          <Route index element={<UserList />} />
          <Route path="add" element={<AddNewUser />} />
          <Route path="edit-user/:id" element={<EditUser />} />
          <Route path="view/:id" element={<UserView />} />
        </Route>
      </Route>

      {/* Blog */}
      <Route path="/blog">
        <Route index element={<BlogList />}></Route>
        <Route path="add" element={<AddBlog />}></Route>
        <Route path="edit/:id" element={<EditBlog />}></Route>
      </Route>

      {/* Teams */}
      <Route path="/team" element={<Teams />}>
        <Route index element={<Teams />} />
        <Route path=":teamName">
          <Route exact index element={<Teams />} />
        </Route>
      </Route>
      <Route
        path="/team/:teamName/:id/edit"
        element={<EditTeamMember />}
      ></Route>
      <Route path="/team/:teamName/addMember" element={<AddTeam />}></Route>
      <Route
        path="/team/:teamName/:id/view"
        element={<EditTeamMember disabled={true} />}
      ></Route>

      {/* Events */}
      <Route path="/events">
        <Route index element={<EventsList />} />
        <Route path="add" element={<AddNewEvents />} />
        <Route path="edit/:id" element={<EditEvents />} />
      </Route>

      {/* Porfile */}
      <Route path="/user-profile" element={<UserProfile />}></Route>
      <Route path="/change-password" element={<ChangePassword />}></Route>

      {/* Gallery */}
      <Route path="/gallery">
        <Route index element={<GalleryList />}></Route>
        <Route path="add" element={<AddGallery />}></Route>
        <Route path="edit/:id" element={<EditGallery />}></Route>
      </Route>
    </Routes>
  );
}

export default View;
