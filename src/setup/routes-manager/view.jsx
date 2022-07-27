import React from "react";
import { Routes, Route } from "react-router-dom";

// Blog
import BlogList from "../../app/pages/blog/blog-list/blog-list";
import AddBlog from "../../app/pages/blog/add-new-blog/add-new-blog";
import EditBlog from "../../app/pages/blog/edit-blog/edit-blog";

// User
import UserList from "../../app/pages/user/user-list/user-list";
import AddNewUser from "../../app/pages/user/add-new-user/add-new-user";
import EditUser from "../../app/pages/user/edit-user/edit-user";

//Profile
import UserProfile from "../../app/pages/user-profile/EditProfile";
import ChangePassword from "../../app/pages/user-profile/ChangePassword";
import Home from "../../core/components/home/home";

//Gallery
import GalleryList from "../../app/pages/gallery/gallery-list/gallerylist";
import AddGallery from "../../app/pages/gallery/add-new-gallery/add-new-gallery";
import EditGallery from "../../app/pages/gallery/edit-gallery/edit-gallery";

function View() {
  return (
    <Routes>
      <Route index element={<Home />}></Route>

      {/* User */}
      <Route path="/user">
        <Route index element={<UserList />}></Route>
        <Route path="add" element={<AddNewUser />}></Route>
        <Route path="edit" element={<EditUser />}></Route>
      </Route>

      {/* Blog */}
      <Route path="/blog">
        <Route index element={<BlogList />}></Route>
        <Route path="add" element={<AddBlog />}></Route>
        <Route path="edit/:id" element={<EditBlog />}></Route>
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
