import React, { FC, useEffect } from "react";
import getConfig from "next/config";

import showRecaptcha from "../helpers/recaptcha";
import { useStoreState } from "../store";
import { ColCenter } from "./Layout";
import ReCaptcha from "./ReCaptcha";
import ALink from "./ALink";
import Text from "./Text";

const { publicRuntimeConfig } = getConfig();

const Footer: FC = () => {
  const { isAuthenticated } = useStoreState(s => s.auth);

  useEffect(() => {
    showRecaptcha();
  }, []);

  return (
    <ColCenter
      as="footer"
      width={1}
      backgroundColor="white"
      p={isAuthenticated ? 2 : 24}
    >
      {!isAuthenticated && <ReCaptcha />}
      <Text fontSize={[12, 13]} py={2}>
        Made by Unit Transformasi Digital - PNJ
        {" | "}
        <ALink href="https://github.com/chillrend/kutt" title="Open Source">
          &#128588; Contribute &#128588;
        </ALink>
        {" | "}
        <ALink href="/terms" title="Persyaratan Layanan">
          Persyaratan Layanan
        </ALink>
        {" | "}
        <ALink href="/report" title="Lapor Penyalahgunaan">
          Lapor Penyalahgunaan
        </ALink>
        {publicRuntimeConfig.CONTACT_EMAIL && (
          <>
            {" | "}
            <ALink
              href={`mailto:${publicRuntimeConfig.CONTACT_EMAIL}`}
              title="Contact us"
            >
              Kontak
            </ALink>
          </>
        )}
        .
      </Text>
    </ColCenter>
  );
};

export default Footer;
