import React from "react";
import { Canvas } from "react-three/fiber";

{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        POPUP
      </div> */
}
const Home = () => {
  return (
    <section className="w-full h-screen relative">
      <Canvas>
        <ambientLight />
      </Canvas>
    </section>
  );
};

export default Home;
