import Downloads from "../components/Downloads";
import ParallaxBg from "../components/parallax";
import BackLayout from "../layouts/BackLayout";
import MainLayout from "../layouts/MainLayout";

import { useEffect, useState } from "react";
import { Dots } from "react-preloaders2";

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <MainLayout>
        <ParallaxBg />
        <BackLayout>
          {/* <Brands/> */}
          <Downloads />
        </BackLayout>
      </MainLayout>
      <Dots color="#f3a511" customLoading={isLoading} />
    </>
  );
};

export default Home;
