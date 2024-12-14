import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Post from "./Post";

function RecentPosts() {
  return (
    <Container>
      <Heading>Recent Posts</Heading>
      <Post title="Flavors of Lisbon" body="...those pastéis de nata!" />
      <Post title="Buenos Aires in the rhythm of tango" body="I loved it!" />
    </Container>
  );
}

export default RecentPosts;
