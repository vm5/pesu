import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

function Verification({ onVerify }) {
  const [srns, setSrns] = useState('');

  const handleVerification = () => {
    if (srns.startsWith("PES") && srns.length === 13) {
      onVerify();
    } else {
      alert('Please provide a valid SRN');
    }
  };

  return (
    <VerificationContainer>
      <Title>The first step is student Verification. This is simply to verify and confirm that you are a student of PES University.</Title>
      <Input
        type="text"
        placeholder="Enter your SRN (Case-sensitive)"
        value={srns}
        onChange={(e) => setSrns(e.target.value)}
      />
      <Button onClick={handleVerification}>Verify</Button>
    </VerificationContainer>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const VerificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
  font-weight: bold;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  width: 300px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: #333;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;

export default Verification;
