import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
  className?: string;
}

export const Mermaid: React.FC<MermaidProps> = ({ chart, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'neutral',
      securityLevel: 'loose',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: 14,
      themeVariables: {
        primaryColor: '#8b5cf6',
        primaryTextColor: '#f8fafc',
        primaryBorderColor: '#6b7280',
        lineColor: '#6b7280',
        secondaryColor: '#f1f5f9',
        tertiaryColor: '#f8fafc'
      }
    });
    
    try {
      const renderChart = async () => {
        if (ref.current) {
          ref.current.innerHTML = chart;
          try {
            const { svg } = await mermaid.render('mermaid-svg', chart);
            setSvgContent(svg);
            setError(null);
          } catch (err) {
            console.error('Mermaid rendering error:', err);
            setError('Failed to render diagram');
          }
        }
      };
      
      renderChart();
    } catch (err) {
      console.error('Mermaid initialization error:', err);
      setError('Failed to initialize diagram');
    }
  }, [chart]);
  
  if (error) {
    return (
      <div className="p-4 border border-red-300 bg-red-50 text-red-800 rounded-md">
        {error}
        <pre className="mt-2 text-xs overflow-auto bg-white p-2 rounded">
          {chart}
        </pre>
      </div>
    );
  }
  
  return (
    <div className={`mermaid-diagram rounded-md border border-border ${className}`}>
      <div className="responsive-diagram overflow-auto w-full">
        <div 
          className="mermaid min-w-[768px] md:min-w-0 w-full"
          ref={ref} 
          dangerouslySetInnerHTML={svgContent ? { __html: svgContent } : undefined} 
        />
      </div>
    </div>
  );
}; 