import getConfig from "next/config";
import React from "react";

import AppWrapper from "../components/AppWrapper";
import { Col } from "../components/Layout";

const { publicRuntimeConfig } = getConfig();
const TermsPage = () => (
  <AppWrapper>
    {/* TODO: better container */}
    <Col width={600} maxWidth="97%" alignItems="flex-start">
      <h3>Persyaratan Layanan {publicRuntimeConfig.SITE_NAME}</h3>
      <p>
        Dengan mengakses situs web di{" "}
        <a href={`https://${publicRuntimeConfig.DEFAULT_DOMAIN}`}>
          https://{publicRuntimeConfig.DEFAULT_DOMAIN}
        </a>
        , Anda setuju untuk terikat dengan persyaratan layanan ini, semua hukum
        dan peraturan yang berlaku, dan setuju bahwa Anda bertanggung jawab
        untuk mematuhi hukum setempat yang berlaku. Jika Anda tidak setuju
        dengan salah satu persyaratan ini, Anda dilarang menggunakan atau
        mengakses situs ini. Materi yang terkandung dalam situs web ini
        dilindungi oleh undang-undang hak cipta dan merek dagang yang berlaku.
      </p>
      <p>
        Dalam keadaan apa pun {publicRuntimeConfig.SITE_NAME} atau pemasok pihak
        ketiga (termasuk, tanpa batasan, kerusakan karena kehilangan data atau
        keuntungan, atau karena gangguan bisnis) yang timbul dari penggunaan
        atau ketidakmampuan untuk menggunakan materi di situs web{" "}
        {publicRuntimeConfig.DEFAULT_DOMAIN}, meskipun{" "}
        {publicRuntimeConfig.SITE_NAME} atau perwakilan resmi{" "}
        {publicRuntimeConfig.SITE_NAME} telah diberitahu secara lisan atau
        tertulis tentang kemungkinan kerusakan tersebut. Karena beberapa
        yurisdiksi tidak mengizinkan batasan pada jaminan tersirat, atau batasan
        tanggung jawab atas kerusakan konsekuensial atau insidental, batasan ini
        mungkin tidak berlaku untuk Anda.
      </p>
      <p>
        Materi yang muncul pada website {publicRuntimeConfig.SITE_NAME} dapat
        berupa kesalahan teknis, tipografi, atau fotografi.{" "}
        {publicRuntimeConfig.SITE_NAME} tidak menjamin bahwa salah satu materi
        di situs webnya akurat, lengkap, atau terkini.{" "}
        {publicRuntimeConfig.SITE_NAME} dapat sewaktu-waktu mengubah materi yang
        terdapat di situs webnya tanpa pemberitahuan. Namun{" "}
        {publicRuntimeConfig.SITE_NAME} dtidak membuat komitmen untuk
        memperbarui materi.
      </p>
      <p>
        {publicRuntimeConfig.SITE_NAME} belum meninjau semua situs yang tertaut
        ke situs webnya dan tidak bertanggung jawab atas isi dari situs tertaut
        tersebut. Dimasukkannya tautan apa pun tidak menyiratkan pengesahan dan
        segala bentuk "endorsement" untuk situs tertaut oleh{" "}
        {publicRuntimeConfig.SITE_NAME}. Penggunaan situs web tertaut tersebut
        merupakan risiko pengguna sendiri.
      </p>
      <p>
        {publicRuntimeConfig.SITE_NAME} dapat merevisi dokumen persyaratan
        layanan ini untuk situs webnya setiap saat tanpa pemberitahuan. Dengan
        menggunakan situs web ini, Anda setuju untuk terikat dengan versi
        persyaratan layanan saat ini.
      </p>
    </Col>
  </AppWrapper>
);

export default TermsPage;
