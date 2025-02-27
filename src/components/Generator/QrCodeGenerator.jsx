import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import { GENERATE_DATA } from "../../components";
import styles from './QrCodeGenerator.module.css';

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    }

    const onClickHandler = () => {
        setResult(value);
        setValue('');

        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
        
                localStorage.setItem(
                    GENERATE_DATA, 
                    JSON.stringify([...prevData, value]));
    }


    return (
        <div className={styles.container}>

            {result !== '' && (
                <div className={styles.qr_wrapper}>
                    <QRCodeSVG 
                        value={result}
                        size={200} 
                    /> 
                </div>
            )}

            <input
                type="text"
                placeholder="Введите текст"
                value={value}
                onChange={onChangeHandler}
                className={styles.result} 
            />

            <button type="button" onClick={onClickHandler}  className={styles.btn}>
                Сгенерировать QR
            </button> 
        </div>
    )
}