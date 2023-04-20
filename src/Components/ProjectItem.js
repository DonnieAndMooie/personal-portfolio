import React from 'react'
import Icon from '@mdi/react';
import { mdiOpenInNew, mdiGithub } from '@mdi/js';

export default function ProjectItem({video, title, description, link, github}) {
  return (
    <div className='project-item'>
      <div className="video-div">
        <video width="90%" autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>
            <div className="title-and-icons">
            <h2>{title}</h2>
            <div className="icons">
              <a href={link} target="_blank" rel='noreferrer'>
                <Icon path={mdiOpenInNew}
                  title="Open Project"
                  size={2}/>
                </a>
              <a href={github} target="_blank" rel='noreferrer'>
                <Icon path={mdiGithub}
                    title="Open Github Repo"
                    size={2}/>
              </a>
                
            </div>
        </div>
        <p className="description">{description}</p>
    </div>
  )
}
