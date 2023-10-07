import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
// import ManualHeader from "../components/ManualHeader";
import Header from "../components/Header";
import Lottery from "../components/LotteryEntrance";
import { useMoralis } from "react-moralis";

export default function Home() {
    return (
        <div className={styles.container}>
            <title>Smart Contract Lottery </title>
            <meta name="description" content="Our Smart Contract Lottery" />
            <Header />
            <Lottery />
        </div>
    );
}
