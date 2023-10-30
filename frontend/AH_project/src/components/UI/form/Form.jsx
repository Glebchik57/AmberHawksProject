import styles from './Form.module.css';
import Image from 'next/image';

export default function Form({ img }) {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Запись на тренировку</h1>
            <div className={styles.formWrapper}>
                <form className={styles.form} action="">
                    <input className={styles.input} placeholder='Имя' type="text" />
                    <input className={styles.input} placeholder='Номер телефона' type="text" />

                    <div className={styles.checkbox_wrapper}>
                        <input className={styles.checkbox} type="checkbox" id="checkbox" />
                        <label htmlFor="checkbox">Нажимая отправить я согласен с политикой обработки ПД</label>
                    </div>

                    <button className={styles.button} type="submit">Отправить заявку</button>
                </form>
                <Image
                    width={600}
                    height={500}
                    src={img}
                    alt='photo'
                />

            </div>

        </div>
    );
}