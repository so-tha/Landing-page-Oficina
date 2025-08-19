import React from 'react';
import './ContentBox.css';

interface ContentBoxProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ContentBox: React.FC<ContentBoxProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`content-box ${className}`}>
      <h3 className="box-title">{title}</h3>
      {children}
    </div>
  );
};

export default ContentBox; 