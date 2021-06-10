import React from "react";
import { memo } from "react";
import { useRef } from "react";
import styles from "./header.module.css";

const Header = memo(({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const input = inputRef.current.value;
    console.log(input);
    onSearch(input);
  };
  const onKeyPress = (event) => {
    if (event.code === "Enter") {
      handleSearch();
    }
  };
  const onClick = () => {
    handleSearch();
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
        onKeyPress={onKeyPress}
      />
      <button className={styles.btn} type="submit" onClick={onClick}>
        <img className={styles.btn_img} src="/images/search.png" alt="search" />
      </button>
    </header>
  );
});

export default Header;
