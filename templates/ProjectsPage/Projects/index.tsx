import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import cn from "classnames";
import styles from "./Projects.module.sass";
import Image from "@/components/Image";
import { projects } from "@/constants/projects";
import Link from "next/link";


type projectsProps = {};

const Projects = ({}: projectsProps) => {
    const [filteredItems, setFilteredItems] = useState(projects);
    const [filteredIndustry, setFilteredIndustry] = useState<string | undefined>(undefined);
    const [filteredTecnology, setFilteredTecnology] = useState<string | undefined>(undefined);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const allIndustries: string[] = Array.from(new Set(
        projects.map(project => project.tags.industries).flat()
    ));

    const allTechnologies: string[] = Array.from(new Set(
        projects.map(project => project.tags.tecnologies).flat()
    ));

    const getFilteredProjects = (industry?: string, technology?: string) => {
        return projects.filter(project => {
            const matchesIndustry = industry ? project.tags.industries.includes(industry) : true;
            const matchesTechnology = technology ? project.tags.tecnologies.includes(technology) : true;
            return matchesIndustry && matchesTechnology;
        });
    }

    const filterTecnology = (item: string | undefined) => {
        setFilteredTecnology(item);
        const newFilteredItems = getFilteredProjects(filteredIndustry, item);
        setFilteredItems(newFilteredItems);
    }

    const filterIndustry = (item: string | undefined) => {
        setFilteredIndustry(item);
        const newFilteredItems = getFilteredProjects(item, filteredTecnology);
        setFilteredItems(newFilteredItems);
    }

    return (
        <div className={styles.wrapper}>
            <div className={cn("container", styles.container)}>
                <div className={styles.tags}>
                    <p className={cn("h4", styles.tags_title)}>Industries</p>
                    <div className={styles.tags_list}>
                        <button
                            className={cn(styles.btn, { [styles.active]: !filteredIndustry })}
                            onClick={() => filterIndustry(undefined)}
                        >
                            All
                        </button>
                        {allIndustries.map((item, index) => (
                            <button
                                className={cn(styles.btn, { [styles.active]: filteredIndustry === item })}
                                onClick={() => filterIndustry(item)}
                                key={index}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.tags}>
                    <p className={cn("h4", styles.tags_title)}>Technologies</p>
                    <div className={styles.tags_list}>
                        <button
                            className={cn(styles.btn, { [styles.active]: !filteredTecnology })}
                            onClick={() => filterTecnology(undefined)}
                        >
                            All
                        </button>
                        {allTechnologies.map((item, index) => (
                            <button
                                className={cn(styles.btn, { [styles.active]: filteredTecnology === item })}
                                onClick={() => filterTecnology(item)}
                                key={index}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.slider}>
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <Link href={item.url} key={index}>
                            <a>
                            <div className={styles.slide}>
                                <Image
                                    src={item.img}
                                    layout="fill"
                                    objectFit="cover"
                                    alt={item.title}
                                />
                                <div className={styles.tags_slide}>
                                    {item.tags.industries?.map((tag, index) => (
                                        <p className={styles.tag_slide} key={index}>{tag}</p>
                                    ))}
                                    {item.tags.tecnologies?.map((tag, index) => (
                                        <p className={styles.tag_slide} key={index}>{tag}</p>
                                    ))}
                                    <p className={styles.tag_slide}>{'>>'}</p>
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
                            </div>
                            </a>
                        </Link>
                        ))
                    ) : (
                        <h3 className={styles.no_match}>No matching projects!</h3>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Projects;
