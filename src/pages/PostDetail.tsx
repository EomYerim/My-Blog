import { useParams } from 'react-router-dom';
import styled from 'styled-components';

// 더미 데이터 (게시글)
const posts = [
  { id: 1, title: '첫 번째 글', date: '2025. 4. 25. 16:16', content: `예림 블로그에 오신 것을 환영합니다!\n\n이곳은 다양한 글을 공유하고 소통할 수 있는 공간입니다.\n\n## 블로그의 목적\n이 블로그는 저의 경험, 아이디어, 그리고 개인적인 생각을 나누기 위해 만들어졌습니다. 앞으로 다양한 주제에 대해 글을 작성할 예정입니다.\n\n저와 함께 성장하는 블로그가 되었으면 좋겠습니다!\n\n**감사합니다!**` },
];

const Wrapper = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-top: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const Meta = styled.div`
  font-size: 0.875rem;
  color: #9ca3af;
  margin-bottom: 1rem;
`;

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #e5e7eb;
  margin: 1rem 0;
`;

const Content = styled.div`
  font-size: 1.125rem;
  color: #374151;
  line-height: 1.8;
  white-space: pre-line;
  margin-bottom: 2rem;
  
  // 글자 강조와 링크 스타일
  strong {
    font-weight: bold;
    color: #2563eb;
  }

  em {
    font-style: italic;
    color: #6b7280;
  }

  // 코드 스타일을 위한 추가
  code {
    background-color: #f3f4f6;
    padding: 0.2rem 0.4rem;
    border-radius: 0.3rem;
    font-family: "Courier New", Courier, monospace;
  }

  // 제목 스타일 (h2, h3 등)
  h2, h3 {
    color: #1f2937;
  }
`;

const CommentSection = styled.div`
  font-size: 1rem;
  color: #374151;
`;

const CommentInput = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  resize: vertical;
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: #2563eb;
  }
`;

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  if (!post) return <p style={{ padding: '2rem', color: 'red' }}>글을 찾을 수 없습니다.</p>;

  return (
    <Wrapper>
      {/* 제목과 작성일자 */}
      <Title>{post.title}</Title>
      <Meta>{post.date}</Meta>

      {/* 시간 아래에 구분선 추가 */}
      <Divider />

      {/* 글 내용 */}
      <Content>{post.content}</Content>

      {/* 시간 아래에 또 다른 구분선 추가 */}
      <Divider />

      {/* 댓글 영역 */}
      <CommentSection>
        <h2>댓글</h2>
        <CommentInput placeholder="댓글을 입력하세요..." rows={4} />
        <SubmitButton>댓글 작성</SubmitButton>
      </CommentSection>
    </Wrapper>
  );
}
