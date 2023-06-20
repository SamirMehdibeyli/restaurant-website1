import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Layout>
      <Box
        sx={{
          my: 8,

          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h3" p={2}  color={{ color: "#122F83" }}>
          Şirkətin tarixi
        </Typography>
        <p mx={5}>
          MADO-nun bir dünya brendinə çevrilmə yolundakı ilk əhəmiyyətli addımı
          Yaşar şirniyyat evi ilə başlayır. 150 illik təcrübənin dünya
          miqyasında bir brend kimi hərtərəfli və olduqca effektiv bir şəkildə
          təmsil edilməsində Yaşar şirniyyat evi önəmli rol oynayır. Belə ki bu
          məkan təbiətin comərdliyi ilə insan əməyinin və səbrinin dondurma
          sevərlərlə görüşdüyü ilk məkana çevrilir. 1965-ci ildə Kahramanmaraşda
          açılan buz fabriki bölgə üçün əhəmiyyətli olduğu qədər MADO üçün də
          əhəmiyyətli olur. Kiçik dükan böyüdülür və istehsal gücü daha da
          artırılır. Elə həmin ildən dükana "deep freze" soyuducularının
          gətirilməsi sayəsində dondurma gecə-gündüz saxlanılmağa başlanılır. Bu
          təkmilləşdirilmə prosesləri MADO-nun dadından və keyfiyyətindən heç
          bir şey əskiltmir. MADO dondurmasının bugünkü məşhurluğa qovuşmasına
          beşiklik edən şirniyyat evi 1980-ci ildə Trabzon küçəsində açılır.
          Texnologiya ilə olan bu ilk görüşmənin ardından MADO bu gün dadından,
          keyfiyyətindən, tərkibindən heç bir şey itirmədən dünya səviyyəsində
          bir brendə çevrilib. Sözü gedən şirniyyat evi bölgəyə xas vasitələrlə
          hazırlanan döymə dondurmasını təqdim edir. Bununla yanaşı
          Kahramanmaraş mətbəxi və bölgə mədəniyyətini təmsil edən əl sənətləri
          sərgisi vəzifəsini də öz öhdəsinə götürür. Bu şirniyyat evi həmçinin
          ziyarətçi foto şəkillərlə divarlarını örtdüyü, ailə yadigarı olan
          köhnə əşyaların sərgiləndiyi bir muzey kimi də qiymətlidir. Bu
          xüsusiyyəti ilə bölgəni tanımaq istəyən yerli və xarici turistlərin
          vaz keçilməz məkanı olan şirniyyat evində MADO dondurmasını məşhur
          edən bir sirrin macərası da sərgilənir. Dünyada MADO dondurmasına
          şöhrət gətirən "döymə ustalığı" Yaşar şirniyyat evinə qonaq olanlara
          özünəməxsus şou ilə göstərilir. Dondurmanın sərt və qatı bir tərkibə
          sahib olmasının ipucları folklorik məlumatlarla ötürülür.
        </p>
        <br />
        <p>
          MADO-nun məqsədi 150 illik tarixə malik dondurma ənənəsini gələcəyə
          ötürməkdir. Bunu edərkən işə ilk başlama həyəcanını və həvəsini
          itirməmək istəyi MADO-nun enerjisinin əsas mənbəyidir. Şəbəkəmizə
          əlavə edilən hər yeni restoran xalis ləzzətin hər kəsə çatdırılması
          istiqamətindəki növbəti uğurumuza çevrilir. Ənənə, müasir konsept,
          dinamika... Bu üçünü eyni anda özündə əks etdirmək üçün MADO seçdiyi
          prinsiplərə hər zaman sadiqdir.
        </p>
      </Box>
    </Layout>
  );
}

export default About;
