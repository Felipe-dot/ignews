import Head from 'next/head';
import styles from './styles.module.scss'

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>18 de agosto de 2022</time>
                        <strong>Vamos que vamos</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, illum totam officiis neque cupiditate itaque id, ex, quaerat voluptates qui facilis? A velit facilis cupiditate veniam unde ea, eius minima!</p>
                    </a>
                    <a href="#">
                        <time>18 de agosto de 2022</time>
                        <strong>Vamos que vamos</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, illum totam officiis neque cupiditate itaque id, ex, quaerat voluptates qui facilis? A velit facilis cupiditate veniam unde ea, eius minima!</p>
                    </a>
                    <a href="#">
                        <time>18 de agosto de 2022</time>
                        <strong>Vamos que vamos</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, illum totam officiis neque cupiditate itaque id, ex, quaerat voluptates qui facilis? A velit facilis cupiditate veniam unde ea, eius minima!</p>
                    </a>
                </div>
            </main>
        </>
    );
}