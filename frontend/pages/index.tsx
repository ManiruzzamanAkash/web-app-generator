import MainLayout from '../components/layouts/MainLayout'
import styles from '../styles/Home.module.css'
import { NextFunctionComponent } from 'next'

type Props = {
  // 
}

const Home: NextFunctionComponent<Props> = () => {
  return (
    <div className={styles.container}>
     <MainLayout />
    </div>
  )
}

export default Home
