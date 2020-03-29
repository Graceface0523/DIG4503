import Head from 'next/head'
import Link from 'next/link';
import styles from './styles.module.css';



class Home extends React.Component {
  render(){
  return(
      <div>
        <Head>
          <title>
            Home Page
          </title>
          </Head>
      <div className={styles.body}>
        <p className={styles.head}>
          Pokemon Search
        </p>
        <br/>
        

        <Link href="/name">
          <a className={styles.a}>Name Page</a>
        </Link> <br/>
     <Link href="/id">
           <a className={styles.a}>Id Page</a>
        </Link> <br/>
      <Link href="/type">
           <a className={styles.a}>Type Page</a>
        </Link><br/>
        </div>
        </div>
  
  );
 }
}
export default Home