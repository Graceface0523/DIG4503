import Head from 'next/head'
import Link from 'next/link';
import TypeSearch from '../components/TypeSearch'
import styles from './styles.module.css';

class Type extends React.Component {
    render(){
    return(
        <div>
            <Head>
              <title>
                Type Page
                </title>
             </Head>
             <div className={styles.body}>
            <b><div className={styles.p}>Search by Type</div></b><br/>
                <TypeSearch/>
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
export default Type