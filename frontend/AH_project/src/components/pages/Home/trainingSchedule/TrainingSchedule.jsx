import React from 'react';
import styles from './TrainingSchedule.module.css'

export default function TrainingSchedule() {
  return (
    <div>
      <div className={styles.scheduleTitle}>Расписание тренировок</div>
      <div className={styles.schedule__list}>
      <div className={styles.schedule__item}>
          <span>Понедельник</span>
          <span>20:00</span>
          <span>Стадион &ldquo;Сельма&ldquo;</span>
        </div>
        <div className={styles.schedule__item}>
          <span>Вторник</span>
          <span>20:00</span>
          <span>Стадион &ldquo;Сельма&ldquo;</span>
        </div>
        <div className={styles.schedule__item}>
          <span>Четверг</span>
          <span>20:00</span>
          <span>Стадион &ldquo;Сельма&ldquo;</span>
        </div>
        <div className={styles.schedule__item}>
          <span>Суббота</span>
          <span>20:00</span>
          <span>Стадион &ldquo;Сельма&ldquo;</span>
        </div>
      </div>
    </div>
  );
}
