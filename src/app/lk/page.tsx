import styles from './page.module.css';

export default function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="Логотип" className={styles.logoImage} />
      </div>
      <div className={styles.leftSection}>
        <div className={styles.toggleButtons}>
          <button className={`${styles.toggleButton} ${styles.active}`}>Тренер</button>
          <button className={styles.toggleButton}>Танцор</button>
        </div>
        <h1 className={styles.title}>Регистрация</h1>
        <form className={styles.form}>
          <input type="text" placeholder="Фамилия" className={styles.input} />
          <input type="text" placeholder="Имя" className={styles.input} />
          <input type="email" placeholder="Почта" className={styles.input} />
          <input type="tel" placeholder="Номер телефона" className={styles.input} />
          <input type="password" placeholder="Пароль" className={styles.input} />
          <input type="password" placeholder="Подтверждение пароля" className={styles.input} />
          <button type="submit" className={styles.submitButton}>Продолжить</button>
        </form>
        <p className={styles.footerText}>
          есть аккаунт? <a href="/login" className={styles.loginLink}>Войти</a>
        </p>
      </div>
      <div className={styles.rightSection}>
        <img
          src="/rightSvg.svg"
          alt="плакат регистрация"
          className={styles.rightSvg}>
        </img>
      </div>
    </div>
  );
}
