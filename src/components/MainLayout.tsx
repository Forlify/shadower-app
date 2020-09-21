import React, { useState, useEffect } from "react";

import NavBar from "./NavBar";
import Map from "./Map";

import styled from "styled-components";
import { useLoadScript } from "@react-google-maps/api";
import moment from "moment";

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
`;

const libraries = ["places"];

const MainLayout: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
    libraries,
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);
  const [date, setDate] = useState<moment.Moment>(moment());
  const [height, setHeight] = useState<string>("");

  useEffect(() => {
    console.log(height);
  }, [height]);

  if (loadError) return <p>Error</p>;
  if (!isLoaded) return <p>Loading...</p>;

  return (
    <Layout>
      <NavBar map={map} date={date} setDate={setDate} height={height} setHeight={setHeight} />
      <Map setMap={setMap} map={map} date={date} height={height} />
    </Layout>
  );
};

export default MainLayout;
