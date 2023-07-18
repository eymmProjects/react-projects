import React from 'react';
import teamData from './teamData';
import TeamItem from './TeamItem';

function TeamMembers() {
    return (
        <section className="team-section section-padding">
            <div className="container">
                <div className="row mtm-30">
                    {teamData.map((data) => (
                        <TeamItem
                            key={data.id}
                            img={data.img}
                            name={data.name}
                            position={data.position}
                            fbLink={data.fbLink}
                            twitterLink={data.twitterLink}
                            behanceLink={data.behanceLink}
                            youtubeLink={data.youtubeLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamMembers;
