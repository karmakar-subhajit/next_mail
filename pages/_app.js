import Layout from "@/layout/Layout";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/styles.css";

export default function App({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}