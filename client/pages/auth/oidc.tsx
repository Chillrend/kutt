import getConfig from "next/config";
import React from "react";
import { GetServerSideProps } from "next";

import AppWrapper from "../../components/AppWrapper";
import { Col } from "../../components/Layout";

const { publicRuntimeConfig } = getConfig();

export const getServerSideProps: GetServerSideProps = async context => {
  const { req, res } = context;

  const { cookie } = req.headers;

  return { props: { cookie } };
};

const OidcPage = () => {
  return (
    <AppWrapper>
      {/* TODO: better container */}
      <Col width={600} maxWidth="97%" alignItems="flex-start">
        <h3>Kami akan mengalihkan Anda ke halaman utama sebentar lagi..</h3>
      </Col>
    </AppWrapper>
  );
};

export default OidcPage;
