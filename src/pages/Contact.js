import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";

function Contact() {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 4 } }}>
        <Typography variant="h4">
          Bütün təklif və şikayətlərinizi bizə yazıb göndərmənizi xahiş edirik.
        </Typography>
        <p>
          MADO Restoranlar Şəbəkəsi daim öz qonaqlarını dinləməyə hazırdır.
          Xidmət və keyfiyyət səviyyəmizin yüksəlməsi üçün daim onları dinləyir
          və fikirlərinə əsasən öz üzərimizdə çalışırıq.
          <br/> 
          </p>

          <p>

          Bildirmək istərdik ki,
          biz MADO Restoranlar Şəbəkəsi olaraq bütün təklif və iradlara daim
          önəm veririk. Qonaqlarımızın daim xoş emosiyalarla bizdən ayrılması
          üçün əlimizdən gələni etməyə hazırıq.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "400px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "#122F83", color: "white" }}
                  align="center"
                >
                  Bizimlə əlaqə
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} />
                  (tollfree) 1800
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} />
                  info@mado.az
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} />
                  (+994 12) 310 10 30
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
}

export default Contact;
