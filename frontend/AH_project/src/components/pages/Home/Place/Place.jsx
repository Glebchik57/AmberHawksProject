import styles from './Place.module.css'

export default function Place() {
    return (
        <div>
            <div className={styles.place__title}>Наше местоположение</div>
            <div className={styles.place__map}>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A31b656cf3e53ba0d4073369918afe0d7a61abbe99496f7fcab5f1df2638badea&amp;source=constructor" width="100%" height="500" frameBorder="0"></iframe>
            </div>
        </div>
    );
}