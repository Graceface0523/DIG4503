import Head from 'next/head'
import Link from 'next/link';
import NameSearch from '../components/NameSearch'
import styles from './styles.module.css';

class Name extends React.Component {
    render(){
    return(
        <div>
            <Head>
              <title>
               Name Page
              </title>
            </Head>
            <div className={styles.body}>
            <b><div className={styles.p}>Search by Name</div></b>
            <br/>
                <NameSearch/>
                  <br/>
                  <div className={styles.header}>Results:</div>     
             <div className ={styles.results} id="reportingArea"></div>
        
                   <Link href="/">
                     <a className={styles.a}>Home</a>
                   </Link>
    </div>
    </div>
    );
  }
}
export default Name