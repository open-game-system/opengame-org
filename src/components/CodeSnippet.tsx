
import React from 'react';
import { cn } from '@/lib/utils';

interface CodeSnippetProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ 
  code, 
  language = 'javascript', 
  title,
  className = '' 
}) => {
  return (
    <div className={cn("rounded-lg overflow-hidden shadow-md", className)}>
      {title && (
        <div className="bg-secondary px-4 py-2 text-sm font-medium border-b border-border">
          {title}
        </div>
      )}
      <pre className="p-4 bg-card overflow-x-auto">
        <code className="text-sm font-mono text-foreground">
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
