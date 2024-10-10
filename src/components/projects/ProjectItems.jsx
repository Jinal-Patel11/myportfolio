import React from 'react';

const ProjectItems = ({ item }) => {
    return (
        <>
            <div className="project__card" key={item.id}>
                <img className="project__img" src={item.image} alt="" />
                <h3 className="project__title">{item.title}</h3>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <a href={item.live} target='_blank' className="project__button">
                        Demo
                    </a>
                    <a href={item.github} target='_blank' className="project__button">
                        Github
                    </a>
                </div>
            </div>
        </>
    );
}

export default ProjectItems;