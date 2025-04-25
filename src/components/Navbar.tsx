import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

// 사이드바 스타일
const SidebarWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${props => (props.isOpen ? '0' : '-400px')};  // 클릭 시 열리고 닫히는 상태
  height: 100vh;
  width: 400px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: left 0.3s ease;
  z-index: 10;
`;

const SidebarItem = styled(Link)`
  color: #000000;
  text-decoration: none;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b7b1dd;
    /* border-radius: 10px; */
  }
`;

// 네비게이션 바 스타일
const Nav = styled.nav`
  background: white;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

// 블로그 이름 스타일
const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #230d2f;
  text-decoration: none;
`;

// 햄버거 버튼 스타일
const HamburgerButton = styled.div`
  position: absolute;
  left: 1rem;
  top: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

// 닫기(X) 버튼 스타일
const CloseButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: #222222;
`;

// 메인 컨텐츠 스타일
const MainContent = styled.div`
  padding: 2rem;
  transition: margin-left 0.3s ease;

  ${SidebarWrapper}:hover + & {
    margin-left: 200px;
  }
`;

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // 사이드바 열기 / 닫기 토글 함수
  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <>
      {/* 사이드바 */}
      <SidebarWrapper isOpen={isSidebarOpen}>
        <SidebarItem to="/">Home</SidebarItem>
        <SidebarItem to="/portfolio">Portfolio</SidebarItem>
        <SidebarItem to="/github">Github</SidebarItem>
        <SidebarItem to="/guestbook">Guestbook</SidebarItem>

        {/* 닫기 버튼 */}
        <CloseButton onClick={toggleSidebar}>X</CloseButton>
      </SidebarWrapper>

      {/* 네비게이션 바 */}
      <Nav>
        <HamburgerButton onClick={toggleSidebar}>☰</HamburgerButton>
        <Logo to="/">Yerim's Log</Logo>
      </Nav>

      {/* 페이지 본문 컨텐츠 */}
      <MainContent>
        {/* 페이지 컨텐츠는 여기에 들어갑니다 */}
      </MainContent>
    </>
  );
}
