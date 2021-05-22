import React from 'react';
import style from './Section.module.scss';

type Props = {
  title: string;
  controls: JSX.Element;
};

export const Section: React.FC<Props> = ({ title, controls, children }) => {
  return (
    <section className={style.section}>
      <h2 className={style.section__title}>{title}</h2>
      <div className={style.section__controls}>{controls}</div>
      <div className={style.section__main}>{children}</div>
    </section>
  );
};
