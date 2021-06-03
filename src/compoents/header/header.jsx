import React from "react";
import { useRef } from "react";
import styles from "./header.module.css";

const Header = (props) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const input = inputRef.current.value;
    console.log(input);
    props.onSearch(input);
  };
  const onKeyPress = (event) => {
    if (event.code === "Enter") {
      handleSearch();
    }
  };
  const onClick = () => {
    handleSearch();
  };

  // 버튼 누르면 아이템 리스트 재배열 하도록 함수 만들고 그 다음 키워드 변수로 보내서 검색 기능 완성하기

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
};

export default Header;
