import React, { useState } from 'react';
import './AccordionSection.css';

const AccordionSection = ({
    title,
    children,
    defaultExpanded = false
}) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    const toggleAccordion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="accordion-section">
            <div className="accordion-header" onClick={toggleAccordion}>
                <h3 className="accordion-title">{title}</h3>
                <span className={`accordion-chevron ${isExpanded ? 'expanded' : ''}`}>
                    ▼
                </span>
            </div>

            {isExpanded && (
                <div className="accordion-content">
                    {children}
                </div>
            )}
        </div>
    );
};

export default AccordionSection;
