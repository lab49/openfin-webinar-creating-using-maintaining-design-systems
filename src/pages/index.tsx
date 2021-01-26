import React from "react";
import Head from "next/head";

import { Page } from "../components/Page";

const Home: React.FunctionComponent = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>OpenFin Webinar</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page onLogin={() => {}} onLogout={() => {}} onCreateAccount={() => {}} />
    </div>
  );
};

export default Home;
