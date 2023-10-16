import styles from './Form.module.css';

export default function Form() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Записаться на тренировку</h1>
            <div>
                <form className={styles.form} action="">
                    <input className={styles.input} placeholder='Как зовут?' type="text" />
                    <input className={styles.input} placeholder='Номер телефона для связи' type="text" />

                    <div className={styles.checkbox_wrapper}>
                        <input className={styles.checkbox} type="checkbox" id="checkbox" />
                        <label htmlFor="checkbox">Нажимая отправить я согласен с политикой обработки ПД</label>
                    </div>

                    <button className={styles.button} type="submit">Отправить заявку</button>
                </form>
            </div>

        </div>
    );
}