import React from 'react';

export interface MessageProps {
  from: string;
  to: string;
  label: string;
  dashed?: boolean;
  direction?: 'forward' | 'backward';
}

export interface EntityProps {
  id: string;
  label: string;
}

interface SimpleSequenceDiagramProps {
  entities: EntityProps[];
  messages: MessageProps[];
  title?: string;
  className?: string;
}

export const SimpleSequenceDiagram: React.FC<SimpleSequenceDiagramProps> = ({
  entities,
  messages,
  title,
  className = ''
}) => {
  const entityWidth = 120;
  const entityHeight = 50;
  const verticalSpacing = 60;
  const horizontalPadding = 40;
  const svgWidth = (entities.length * entityWidth) + (horizontalPadding * 2);
  
  // Calculate total height based on number of messages
  const totalHeight = (messages.length + 1) * verticalSpacing + (entityHeight * 2) + 20;
  
  // Calculate positions for entities
  const entityPositions = entities.map((entity, index) => ({
    id: entity.id,
    x: (index * entityWidth) + (entityWidth / 2) + horizontalPadding,
    label: entity.label
  }));

  // Helper function to find entity position by ID
  const getEntityPositionById = (id: string) => {
    return entityPositions.find(entity => entity.id === id);
  };

  return (
    <div className={`sequence-diagram ${className}`}>
      {title && <h4 className="font-medium mb-3 text-foreground">{title}</h4>}
      <div className="w-full overflow-x-auto">
        <svg 
          width={svgWidth} 
          height={totalHeight}
          viewBox={`0 0 ${svgWidth} ${totalHeight}`}
          xmlns="http://www.w3.org/2000/svg"
          style={{ minWidth: '100%', maxWidth: '100%' }}
        >
          {/* Background */}
          <rect 
            x="0" 
            y="0" 
            width={svgWidth} 
            height={totalHeight} 
            fill="var(--card)"
            rx="8"
            ry="8"
          />
          
          {/* Entity boxes (top) */}
          {entityPositions.map((entity, index) => (
            <g key={`entity-top-${index}`}>
              <rect
                x={entity.x - (entityWidth / 2) + 10}
                y={10}
                width={entityWidth - 20}
                height={entityHeight}
                rx="4"
                ry="4"
                fill="var(--primary)"
                fillOpacity="0.3"
                stroke="var(--primary)"
                strokeWidth="1"
              />
              <text
                x={entity.x}
                y={10 + (entityHeight / 2) + 5}
                textAnchor="middle"
                fill="var(--foreground)"
                fontSize="14"
                fontFamily="system-ui, sans-serif"
              >
                {entity.label}
              </text>
            </g>
          ))}
          
          {/* Vertical lifelines */}
          {entityPositions.map((entity, index) => (
            <line
              key={`lifeline-${index}`}
              x1={entity.x}
              y1={10 + entityHeight}
              x2={entity.x}
              y2={totalHeight - entityHeight - 10}
              stroke="var(--border)"
              strokeWidth="2"
              strokeDasharray="4"
            />
          ))}
          
          {/* Messages */}
          {messages.map((message, index) => {
            const fromEntity = getEntityPositionById(message.from);
            const toEntity = getEntityPositionById(message.to);
            
            if (!fromEntity || !toEntity) return null;
            
            const isRightToLeft = fromEntity.x > toEntity.x;
            const arrowStartX = fromEntity.x;
            const arrowEndX = toEntity.x;
            const arrowY = 10 + entityHeight + ((index + 1) * verticalSpacing);
            
            const direction = message.direction || (isRightToLeft ? 'backward' : 'forward');
            
            return (
              <g key={`message-${index}`}>
                <line
                  x1={arrowStartX}
                  y1={arrowY}
                  x2={arrowEndX}
                  y2={arrowY}
                  stroke="var(--foreground)"
                  strokeWidth="1.5"
                  strokeDasharray={message.dashed ? "4" : "0"}
                />
                
                {/* Arrow */}
                {direction === 'forward' ? (
                  <polygon
                    points={`${arrowEndX - 8},${arrowY - 4} ${arrowEndX},${arrowY} ${arrowEndX - 8},${arrowY + 4}`}
                    fill="var(--foreground)"
                  />
                ) : (
                  <polygon
                    points={`${arrowStartX + 8},${arrowY - 4} ${arrowStartX},${arrowY} ${arrowStartX + 8},${arrowY + 4}`}
                    fill="var(--foreground)"
                  />
                )}
                
                {/* Label */}
                <text
                  x={(arrowStartX + arrowEndX) / 2}
                  y={arrowY - 8}
                  textAnchor="middle"
                  fill="var(--foreground)"
                  fontSize="13"
                  fontFamily="system-ui, sans-serif"
                  fontWeight="500"
                  dy="-0.5em"
                >
                  {`${index + 1}. ${message.label}`}
                </text>
              </g>
            );
          })}
          
          {/* Entity boxes (bottom) */}
          {entityPositions.map((entity, index) => (
            <g key={`entity-bottom-${index}`}>
              <rect
                x={entity.x - (entityWidth / 2) + 10}
                y={totalHeight - entityHeight - 10}
                width={entityWidth - 20}
                height={entityHeight}
                rx="4"
                ry="4"
                fill="var(--primary)"
                fillOpacity="0.3"
                stroke="var(--primary)"
                strokeWidth="1"
              />
              <text
                x={entity.x}
                y={totalHeight - (entityHeight / 2) - 5}
                textAnchor="middle"
                fill="var(--foreground)"
                fontSize="14"
                fontFamily="system-ui, sans-serif"
              >
                {entity.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default SimpleSequenceDiagram; 