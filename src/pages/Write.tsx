import { useState } from 'react';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, ListOrdered, Quote, Link, Image, Code } from 'lucide-react';

const styles = {
  container: {
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  editorWrapper: {
    maxWidth: '1000px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '5px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
  },
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '15px 20px'
  },
  headerTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: 0
  },
  titleContainer: {
    padding: '15px 20px',
    borderBottom: '1px solid #e0e0e0'
  },
  titleInput: {
    width: '100%',
    padding: '10px 0',
    fontSize: '20px',
    border: 'none',
    borderBottom: '1px solid #e0e0e0',
    outline: 'none'
  },
  toolbar: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '5px',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderBottom: '1px solid #e0e0e0'
  },
  toolbarButton: {
    padding: '5px',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  toolbarDivider: {
    height: '20px',
    width: '1px',
    backgroundColor: '#e0e0e0',
    margin: '0 5px'
  },
  contentContainer: {
    padding: '20px'
  },
  contentTextarea: {
    width: '100%',
    height: '400px',
    padding: '10px',
    border: '1px solid #e0e0e0',
    borderRadius: '3px',
    resize: 'none',
    outline: 'none',
    fontSize: '16px',
    lineHeight: '1.6'
  },
  settingsContainer: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderTop: '1px solid #e0e0e0'
  },
  settingsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  formGroup: {
    marginBottom: '15px'
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#333'
  },
  select: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '3px'
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '3px'
  },
  radioContainer: {
    marginTop: '5px'
  },
  radioOption: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px'
  },
  radioInput: {
    marginRight: '8px'
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 20px',
    backgroundColor: '#f2f2f2',
    borderTop: '1px solid #ddd'
  },
  buttonDefault: {
    padding: '8px 16px',
    backgroundColor: '#e0e0e0',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '14px'
  },
  buttonPrimary: {
    padding: '8px 20px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '14px',
    marginLeft: '10px'
  },
  buttonGroup: {
    display: 'flex',
    alignItems: 'center'
  }
};

export default function TistoryBlogEditor() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  
  const categories = [
    { id: 1, name: '일상' },
    { id: 2, name: '여행' },
    { id: 3, name: '맛집' },
    { id: 4, name: '개발' },
    { id: 5, name: '취미' }
  ];

  const handlePublish = () => {
    alert('포스트가 발행되었습니다!');
  };

  const insertFormatting = (format) => {
    alert(`${format} 서식이 적용되었습니다.`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.editorWrapper}>
        {/* 헤더 */}
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>새 글 작성</h1>
        </div>
        
        {/* 제목 입력 */}
        <div style={styles.titleContainer}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
            style={styles.titleInput}
          />
        </div>
        
        {/* 툴바 */}
        <div style={styles.toolbar}>
          <button 
            onClick={() => insertFormatting('굵게')} 
            style={styles.toolbarButton}
          >
            <Bold size={18} />
          </button>
          <button 
            onClick={() => insertFormatting('기울임')} 
            style={styles.toolbarButton}
          >
            <Italic size={18} />
          </button>
          <button 
            onClick={() => insertFormatting('밑줄')} 
            style={styles.toolbarButton}
          >
            <Underline size={18} />
          </button>
          <div style={styles.toolbarDivider}></div>
          <button 
            onClick={() => insertFormatting('왼쪽 정렬')} 
            style={styles.toolbarButton}
          >
            <AlignLeft size={18} />
          </button>
          <button 
            onClick={() => insertFormatting('가운데 정렬')} 
            style={styles.toolbarButton}
          >
            <AlignCenter size={18} />
          </button>
          <button 
            onClick={() => insertFormatting('오른쪽 정렬')} 
            style={styles.toolbarButton}
          >
            <AlignRight size={18} />
          </button>
          <div style={styles.toolbarDivider}></div>
          <button 
            onClick={() => insertFormatting('글머리 기호')} 
            style={styles.toolbarButton}
          >
            <List size={18} />
          </button>
          <button 
            onClick={() => insertFormatting('번호 매기기')} 
            style={styles.toolbarButton}
          >
            <ListOrdered size={18} />
          </button>
          <button 
            onClick={() => insertFormatting('인용구')} 
            style={styles.toolbarButton}
          >
            <Quote size={18} />
          </button>
          <div style={styles.toolbarDivider}></div>
          <button 
            onClick={() => insertFormatting('이미지 삽입')} 
            style={styles.toolbarButton}
          >
            <Image size={18} />
          </button>
          <button 
            onClick={() => insertFormatting('링크')} 
            style={styles.toolbarButton}
          >
            <Link size={18} />
          </button>
          <button 
            onClick={() => insertFormatting('코드')} 
            style={styles.toolbarButton}
          >
            <Code size={18} />
          </button>
        </div>
        
        {/* 본문 에디터 */}
        <div style={styles.contentContainer}>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요"
            style={styles.contentTextarea}
          />
        </div>
        
        {/* 글 설정 영역 */}
        <div style={styles.settingsContainer}>
          <div style={styles.settingsGrid}>
            {/* 왼쪽 설정 */}
            <div>
              <div style={styles.formGroup}>
                <label style={styles.label}>카테고리</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={styles.select}
                >
                  <option value="">카테고리 선택</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>태그</label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="쉼표로 구분하여 입력"
                  style={styles.input}
                />
              </div>
            </div>
            
            {/* 오른쪽 설정 */}
            <div>
              <div style={styles.formGroup}>
                <label style={styles.label}>공개 설정</label>
                <div style={styles.radioContainer}>
                  <div style={styles.radioOption}>
                    <input 
                      type="radio" 
                      id="public" 
                      name="visibility" 
                      defaultChecked 
                      style={styles.radioInput} 
                    />
                    <label htmlFor="public">공개</label>
                  </div>
                  <div style={styles.radioOption}>
                    <input 
                      type="radio" 
                      id="private" 
                      name="visibility" 
                      style={styles.radioInput} 
                    />
                    <label htmlFor="private">비공개</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 하단 버튼 */}
        <div style={styles.footer}>
          <button style={styles.buttonDefault}>임시저장</button>
          <div style={styles.buttonGroup}>
            <button style={styles.buttonDefault}>취소</button>
            <button 
              onClick={handlePublish}
              style={styles.buttonPrimary}
            >
              발행하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}