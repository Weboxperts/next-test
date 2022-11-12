import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header1 from "../compo/header1";
import Button from "../compo/button";
import styles from "../styles/Home.module.css";
import Namelist from "../compo/namelist";
import Counter from "../compo/counter";

const Home: NextPage = () => {

  return(
<Counter/>
  )
  

  
  // var allNameList:string[] = 
  // [
  // "Abdul",
  // "Ali",
  // "Numan",
  // ]
  // return (
  //   <div>
  //  <Namelist AllName={allNameList}/>
  //   </div>
  //   // <div>

  //   //   {/* <Header1
  //   //     abc={{ color: "black", background: "red" }}
  //   //     abc2={{ color: "green", background: "#cccccc" }}
  //   //   />
  //   //   <Button/> */}
  //   // </div>
  // );
};
export default Home;
