import { Link } from "react-router-dom";
import styles from './Navigation.module.css'

export const Navigation = () => {
    return (
        <div className={styles.container}>
            <Link to='/generator'>Генерировать QR код</Link>
            <Link to='/scanner'>Сканировать QR код</Link>
            <Link to='/generatorHistory'>История генерации QR кода</Link>
            <Link to='/scannerHistory'>История сканирования QR кода</Link>
        </div>

    )

}