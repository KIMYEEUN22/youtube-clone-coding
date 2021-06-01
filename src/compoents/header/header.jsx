import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const input = inputRef.current.value;
    console.log(input);
    //this.inputRef.current.value = "";
    //input.current.reset();
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search.."
      />
      <button className={styles.btn} type="submit" onClick={onSubmit}>
        <img className={styles.btn_img} src="/images/search.png" alt="search" />
      </button>
    </header>
  );
};

export default Header;
