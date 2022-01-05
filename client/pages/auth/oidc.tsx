import getConfig from "next/config";
import React, { useEffect } from "react";
import { GetServerSideProps } from "next";
import { cookie_parser } from "../../helpers/cookie_parser";

import AppWrapper from "../../components/AppWrapper";
import { Col } from "../../components/Layout";
import Router from "next/router";
import { useStoreActions, useStoreState } from "../../store";

const { publicRuntimeConfig } = getConfig();

export const getServerSideProps: GetServerSideProps = async context => {
  const { req, res } = context;

  const cookiesr = cookie_parser(req.headers.cookie);

  return { props: { cookiesr } };
};

const OidcPage = cookiesr => {
  const login = useStoreActions(s => s.auth.loginSSO);
  const { isAuthenticated } = useStoreState(s => s.auth);
  useEffect(() => {
    if (cookiesr) {
      if (!isAuthenticated) {
        const temp_token = cookiesr.cookiesr.token_temp;
        login({ sso_token: temp_token });
      }
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      Router.push("/");
    }
  }, [isAuthenticated]);

  return (
    <AppWrapper>
      {/* TODO: better container */}
      <Col width={600} maxWidth="97%" alignItems="flex-start">
        <h3>
          Kami akan mengalihkan Anda ke halaman utama sebentar lagi..
        </h3>
      </Col>
    </AppWrapper>
  );
};

export default OidcPage;
