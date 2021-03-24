import React from 'react';

import { useSelector } from 'react-redux';
// import { Container } from './styles';

function Video() {
  const activeLesson = useSelector(state => state.course.activeLesson);
  const activeModule = useSelector(state => state.course.activeModule);
  return (
    <div>
        <strong>Modulo: {activeModule.title}</strong><br/>
        <span>Aula: {activeLesson.title}</span>
    </div>
  )
}

export default Video;