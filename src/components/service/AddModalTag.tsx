import React, { useState } from 'react';
import styled from '@emotion/styled';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h2(({ theme }) => ({
  margin: '0',
  fontSize: theme.typography.text2.fontSize,
  fontWeight: theme.typography.text2.fontWeight,
  lineHeight: `${theme.typography.text2.lineHeight}px`,
  color: theme.colors.gray[0],
  width: '500px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;

const ModalBody = styled.div`
  margin-bottom: 20px;
`;

const TagButton = styled.button<{ isSelected: boolean }>`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.green[0]};
  border-radius: 15px;
  padding: 5px 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  background: #00a000;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  font-size: 1em;
  cursor: pointer;
`;

const AddButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  margin-left: 10px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  /* flex-direction: column; */
`;

const STitle = styled.div(({ theme }) => ({
  fontSize: theme.typography.text3.fontSize,
  fontWeight: theme.typography.text3.fontWeight,
  lineHeight: `${theme.typography.text3.lineHeight}px`,
  color: theme.colors.gray[0],
  margin: '0',
  marginBottom: '10px',
}));

const Input = styled.input`
  flex: 1;
  padding: 5px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  margin-right: 5px;
  padding: 16px;
`;

interface IAddModalTag {
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
  onClose: () => void;
  handleAddTag: (tag: string) => void;
}

const AddModalTag = ({
  selectedTags,
  setSelectedTags,
  onClose,
  handleAddTag,
}: IAddModalTag) => {
  const [newTag, setNewTag] = useState<string>('');

  const handleNewTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTag(e.target.value);
  };

  const handleNewTagAdd = () => {
    const trimmedTag = `#${newTag.trim()}`;
    if (trimmedTag && !selectedTags.includes(trimmedTag)) {
      handleAddTag(trimmedTag);
      setSelectedTags((prev) => [...prev, trimmedTag]);
      setNewTag('');
    }
  };

  const handleTagClick = (name: string) => {
    setSelectedTags((prev) =>
      prev.includes(name) ? prev.filter((t) => t !== name) : [...prev, name]
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleNewTagAdd();
    }
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>내 관심 분야 설정</ModalTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        <ModalBody>
          <STitle>관심분야</STitle>
          <InputGroup>
            <Input
              value={newTag}
              onChange={handleNewTagChange}
              onKeyPress={handleKeyPress}
              placeholder="관심 분야 추가"
            />
            <AddButton onClick={handleNewTagAdd}>+</AddButton>
          </InputGroup>
          <div>
            {selectedTags.map((tag) => (
              <TagButton
                key={tag}
                isSelected
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </TagButton>
            ))}
          </div>
        </ModalBody>
        <SubmitButton onClick={onClose}>수정완료</SubmitButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default AddModalTag;
