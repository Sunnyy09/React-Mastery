import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import AllPosts from "./AllPosts";
import Post from "./Post";

function Profile() {
  return (
    <Container>
      <Heading>My Profile</Heading>
      <Post title="Hello traveller!" body="Read about my adventures." />
      <AllPosts />
    </Container>
  );
}

export default Profile;
