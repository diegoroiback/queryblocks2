import React, { useEffect, useRef } from 'react';
import cn from "classnames";
import styles from "./Clients.module.sass";
import { clients } from "@/constants/clients";

type ClientsProps = {};

const Clients = ({}: ClientsProps) => {

    return (
        <div className={cn("section", styles.section)}>
            <div className={cn("container", styles.container)}>
                <div className={styles.head}>
                    <div className={styles.titles}>
                        <div className={cn("h2", styles.title)}>
                            Our clients lead <br /> the way
                        </div>
                    </div>
                    <a className={styles.link}>See who we are</a>
                </div>
                <div className={styles.list}>
                    {clients.map((item, index) => (
                        <div key={index}>
                            <img src={item.img} className={styles.img} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Clients;
