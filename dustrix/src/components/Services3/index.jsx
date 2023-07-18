import React from 'react';
import ServicesThreeCard from './ServicesThreeCard';
import servicesThreeData from './servicesThreeData';

function Services3() {
    return (
        <section className="services-wrapper services-2 section-padding pt-0">
            <div className="services-grid">
                {servicesThreeData.map((data) => (
                    <ServicesThreeCard
                        key={data.id}
                        thumb={data.thumbnail}
                        index={data.index}
                        heading={data.heading}
                        text={data.text}
                    />
                ))}
            </div>
        </section>
    );
}

export default Services3;
