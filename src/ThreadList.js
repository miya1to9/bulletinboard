// DO NOT DELETE
import * as React from "react";

export const ThreadListContainer = () => {
  const [threads, setthreads] = React.useState(0);
  fetch("https://railway-react-bulletin-board.herokuapp.com/threads?offset=0")
    .then((response) => response.json())
    .then((data) => {
      setthreads(Object.values(data[0]));
    });
  // console.log(Object.values(data[0]));
  // setDogURl("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg")
  return (
    //<BreedsSelect
    <>
      <div>{threads}テスト</div>
    </>
  );
};
