import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from './pages/Home';
import Write from './pages/Write';
import PostDetail from './pages/PostDetail';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
`;

export default function App() {
  return (
    <Layout>
      <Navbar />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </Content>
    </Layout>
  );
}