import React from "react";
import Head from "../components/head";
import CButton from "../components/button";

export default () => (
  <div className="badan">
    <Head title="Kamicreative Indonesia" />
    <div className="hero">
      <h1>Kamicreative</h1>
      <p>
        Sebuah Industri Kreatif Digital yang menyediakan jasa dibidang konsultan
        IT, Grafik Ilustrasi Visual dan Jasa Produksi.
      </p>
      <CButton isWhite={true} url="/forever">
        Selengkapnya
      </CButton>
    </div>
  </div>
);
