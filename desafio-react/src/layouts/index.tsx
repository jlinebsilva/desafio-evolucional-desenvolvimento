import React from "react";
import Header from "./Header/Header";
import styles from './layout.module.css';


interface LayoutProps extends React.PropsWithChildren {
    titlePage: string
    subtitle?: string
}

export default function LayoutPage({ titlePage, subtitle, children }: LayoutProps) {

    return (
        <>
            <Header />

            <main>
                <div className={styles.titleSection}>
                    <h1>
                        {titlePage}
                    </h1>
                    <h3>
                        {subtitle}
                    </h3>
                </div>

                {children}
            </main>
        </>
    )
}