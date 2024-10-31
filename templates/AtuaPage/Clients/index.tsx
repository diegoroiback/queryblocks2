import { useRef, useEffect, useState } from "react";
import styles from "./Clients.module.sass";
import cn from "classnames";
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from "@/constants/projects";
import Image from "@/components/Image";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

type ClientsProps = {};

const Clients = ({}: ClientsProps) => {
  const targetRef = useRef(null);
  const [isWideScreen, setIsWideScreen] = useState(true);
  const [othersClients, setOthersClients] = useState(projects);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1179);
    };
    setOthersClients(projects.filter(project => project.title !== "Atua"))

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const xTransform = useTransform(scrollYProgress, [0, 1], ['0%', '-155dvw']);

  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <div className={styles.titles} data-aos="fade-right">
              <div className={cn("h2", styles.title)}>
                More projects
              </div>
          </div>
        </div>
      </div>
      <div className={styles.section_carousel} ref={targetRef}>
        <motion.div
          className={styles.container_slider}
          style={{ x: isWideScreen ? xTransform : '0%' }}
        >
          <div className={styles.slider}>
            {othersClients.map((item, index) => (
              <div className={styles.slide} key={index}>
                <Link href={item.url}>
                  <a>
                    <Image
                        src={item.img}
                        layout="fill"
                        objectFit="cover"
                        alt={item.title}
                    />
                    <div className={styles.tags}>
                      {item.tags.industries?.map((tag, index) => (
                        <p className={styles.tag} key={index}>{tag}</p>
                      ))}
                      {item.tags.tecnologies?.map((tag, index) => (
                        <p className={styles.tag} key={index}>{tag}</p>
                      ))}
                        <p className={styles.tag}>{'>>'}</p>
                    </div>
                    <div className={styles.info}>
                      <Image className={styles.logo}
                        src={item.logo}
                        width={119}
                        alt={item.title}
                        height={32} />
                      <p className={styles.name}>{item.title}</p>
                      <p className={styles.text}>{item.text}</p>
                      <div className={styles.other_info}>
                        {item.info.map((inf, index) => (
                          <div key={index} className={styles.other_info_item}>
                            <p className={styles.other_info_title}>{inf.title}</p>
                            <p className={styles.other_info_text}>{inf.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
            <div className={`${styles.slide_link} ${styles.slide}`}>
              <Link href="/projects" className={styles.link}>
                See all projects
              </Link>
            </div>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Clients;
