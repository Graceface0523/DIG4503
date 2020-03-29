import Head from 'next/head';
import Link from 'next/link';
import IdSearch from "../components/IdSearch";
import styles from './styles.module.css'


class Id extends React.Component {
    render(){
    return(
        <div>
            <Head>
               <title>
                Id Page
               </title>
             </Head>
            <div className={styles.body}>
            <b><div className={styles.p}>Search by ID</div></b>
            <br/>
                <IdSearch/>
                  <br/>
            <div className={styles.header}>Results:</div>     
             <div className ={styles.results} id="reportingArea"></div>
             <br/>
        
                   <Link href="/">
                     <a className={styles.a}>Home</a>
                   </Link>
      </div>
      </div>
    );
  }
}
export default Id