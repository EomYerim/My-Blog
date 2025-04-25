import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const posts = [
  { id: 1, title: '첫 번째 글', date: '2025-04-25', content: '예림 블로그에 온 걸 환영해!' },
  { id: 2, title: '두 번째 글', date: '2025-04-26', content: '여기에 새로운 글을 추가할 수 있어요!' },
  { id: 3, title: '세 번째 글', date: '2025-04-27', content: '이번 글은 조금 더 길어요.' },
  { id: 4, title: '네 번째 글', date: '2025-04-28', content: '이곳에 여러분이 관심 있을만한 내용을 추가하세요.' },
  { id: 5, title: '다섯 번째 글', date: '2025-04-29', content: '길고 유익한 내용을 작성할 수 있습니다.' },
  { id: 6, title: '여섯 번째 글', date: '2025-04-30', content: '이것도 중요한 글이에요!' },
  { id: 7, title: '일곱 번째 글', date: '2025-05-01', content: '긴 글을 쓸 수 있는 예제입니다.' },
  { id: 8, title: '여덟 번째 글', date: '2025-05-02', content: '이 글은 매우 유용할 수 있습니다.' },
  { id: 9, title: '아홉 번째 글', date: '2025-05-03', content: '테스트 글을 추가할 수 있는 공간입니다.' },
  { id: 10, title: '열 번째 글', date: '2025-05-04', content: '이것은 한 페이지에 맞춰진 10번째 글입니다.' },
  { id: 11, title: '열한 번째 글', date: '2025-05-05', content: '페이지 2로 넘어가는 글입니다.' },
];

const Wrapper = styled.div`
  padding: 1.5rem;
  display: grid;
  gap: 1rem;
`;

const PostCard = styled(Link)`
  background: white;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: box-shadow 0.2s;
  text-decoration: none;
  color: inherit;

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
`;

const Date = styled.p`
  font-size: 0.75rem;
  color: #9ca3af;
`;

const Content = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin-top: 0.5rem;
`;

const WriteButton = styled(Link)`
  position: absolute;
  top: 6.5rem;
  left: 1.5rem;
  /* background-color: #ffffff0; */
  color: #000000;
  padding: 0.5rem 1rem;
  /* border-radius: 1rem; */
  font-size: 1rem;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    background-color: #ffffff;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const PageButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 1rem;
  margin: 0 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #1e40af;
  }

  &:disabled {
    background-color: #d1d5db;
    cursor: not-allowed;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 1.5rem;
  font-size: 0.875rem;
  color: #6b7280;
`;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAdmin, setIsAdmin] = useState(false); // 관리자 상태 추가
  const postsPerPage = 10;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  // 관리자 여부 확인 함수
  const handleAdminClick = () => {
    setIsAdmin(prev => !prev); // 관리자 여부 토글
  };

  return (
    <div className="relative">
      {/* 글쓰기 버튼은 관리자가 아닐 때 보이지 않음 */}
      {isAdmin && <WriteButton to="/write">글쓰기</WriteButton>}

      <Wrapper>
        {currentPosts.map(post => (
          <PostCard to={`/post/${post.id}`} key={post.id}>
            <Title>{post.title}</Title>
            <Date>{post.date}</Date>
            <Content>{post.content}</Content>
          </PostCard>
        ))}
      </Wrapper>

      {/* 페이징 처리 */}
      <Pagination>
        <PageButton 
          onClick={() => setCurrentPage(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          이전
        </PageButton>
        <span className="mx-2">{currentPage} / {totalPages}</span>
        <PageButton 
          onClick={() => setCurrentPage(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          다음
        </PageButton>
      </Pagination>

      {/* Footer */}
      <Footer>
        <p onClick={handleAdminClick} style={{ cursor: 'pointer', color: '#2563eb' }}>
          관리자이신가요?
        </p>
      </Footer>
    </div>
  );
}
