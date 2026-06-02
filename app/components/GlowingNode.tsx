"use client";
import React, { useRef } from 'react';

interface GlowingNodeProps {
  skill: string;
  delay?: number;
  icon?: React.ReactNode;
}

export default function GlowingNode({ skill, delay = 0, icon }: GlowingNodeProps) {
  const nodeRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!nodeRef.current) return;
    const rect = nodeRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    nodeRef.current.style.setProperty('--mouse-x', `${x}px`);
    nodeRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      className="glowing-node" 
      ref={nodeRef} 
      onMouseMove={handleMouseMove} 
      data-aos="zoom-in" 
      data-aos-delay={delay}
    >
      <div className="node-content" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {icon && <span style={{ display: 'flex', alignItems: 'center', fontSize: '1.2em' }}>{icon}</span>}
        <span>{skill}</span>
      </div>
    </div>
  );
}
