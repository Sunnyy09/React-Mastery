import React from "react";
import Container from "../Container";
import Heading from "../Heading";

function Post({ title, body }) {
  return (
    <Container isFancy>
      <Heading>{title}</Heading>
      <p>
        <i>{body}</i>
      </p>
    </Container>
  );
}

export default Post;
