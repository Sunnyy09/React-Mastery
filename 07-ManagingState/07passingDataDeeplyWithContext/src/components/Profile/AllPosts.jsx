import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import RecentPosts from "./RecentPosts";

function AllPosts() {
  return (
    <Container>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Container>
  );
}

export default AllPosts;
