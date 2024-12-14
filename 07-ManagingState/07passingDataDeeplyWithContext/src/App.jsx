import "./App.css";
import Container from "./components/Container";
import Heading from "./components/Heading";
import Profile from "./components/Profile/Profile";

function App() {
  // return (
  //   <>
  //     <h1 className="text-3xl text-gray-500 font-bold underline">
  //       Context: an alternative to passing props!
  //     </h1>
  //     <Container level={1}>
  //       <Heading children="Heading 1" />
  //       <Heading children="Heading 1" />
  //       <Container level={2} isFancy>
  //         <Heading children="Heading 2" />
  //         <Heading children="Heading 2" />
  //         <Container level={3} isFancy>
  //           <Heading children="Heading 3" />
  //           <Heading children="Heading 3" />
  //           <Container level={4} isFancy>
  //             <Heading children="Heading 4" />
  //             <Heading children="Heading 4" />
  //           </Container>
  //         </Container>
  //       </Container>
  //     </Container>
  //   </>
  // );

  return (
    <>
      <h1 className="text-3xl text-gray-500 font-bold underline">
        Context: an alternative to passing props!{" "}
      </h1>
      <Profile />
    </>
  );
}

export default App;
