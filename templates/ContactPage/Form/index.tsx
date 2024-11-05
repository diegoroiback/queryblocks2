import cn from "classnames";
import styles from "./Form.module.sass";
import { HiOutlinePaperClip, HiOutlineDocumentText } from "react-icons/hi";
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from "next/link";
import * as Yup from 'yup';
import { useDropzone } from 'react-dropzone';

type FormProps = {};

const schema = Yup.object().shape({
    category: Yup.string(),
    name: Yup.string().required('Name is required'),
    company: Yup.string(),
    overview: Yup.string().required('Overview is requeired'),
    email: Yup.string().email('Invalid email').required('Email is requeired'),
    file: Yup.mixed(),
    acceptPolicy: Yup.bool().oneOf([true], 'You must accept the data policy'),
});

const Form = ({}: FormProps) => {
    const { register, handleSubmit, control, watch, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const [selectedCategory, setSelectedCategory] = useState('Categoria1');
    const [files, setFiles] = useState<File[]>([]);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [loader, setLoader] = useState<boolean | null>(false);
    const [sended, setSended] = useState<boolean | null>(false);
    const [loadError, setLoadError] = useState<boolean | null>(false);

    const nameValue = watch('name');
    const companyValue = watch('company');
    const emailValue = watch('email');
    const overviewValue = watch('overview');

    const onDrop = (acceptedFiles: File[]) => {
        setValue('file', acceptedFiles[0]);
        setFiles(acceptedFiles);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop, multiple: false });

    const onSubmit = async (data: any) => {
        const formData = new FormData();
        setLoader(true)
        setLoadError(false)
        Object.keys(data).forEach(key => {
            formData.append(key, data[key]);
        });
        try {
            const response = await fetch('https://getform.io/f/ajjjjvga', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                setLoader(false)
                setSended(true)
            } else {
                console.error("Error al enviar el formulario");
                setLoadError(true)
            }
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
        }
    };

    const handleFocus = (field: string) => setFocusedField(field);
    const handleBlur = () => setFocusedField(null);

    return (
        <div className={styles.form_content}>
            {sended ? (
                <div className={styles.div_sended}>
                    <h3 className={styles.title}>Message sent!</h3>
                    <Link href="/blog">
                        <a className={cn("button", styles.button)}>
                        Go back to Home Page
                        </a>
                    </Link>
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <fieldset className={styles.fieldset}>
                        <label className={styles.label}>My product industry is::</label>
                        <div className={styles.tags}>
                            {['All', 'Fintech', 'Banking', 'Healthcare', 'Entertaiment', 'Video Games', 'Blockchain'].map((category) => (
                                <button
                                    key={category}
                                    className={styles.tag}
                                    type="button"
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setValue('category', category);
                                    }}
                                    style={{
                                        color: selectedCategory === category ? '#fff' : '#222325',
                                        backgroundColor: selectedCategory === category ? '#222325' : '#fff',
                                    }}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        {errors.category && <p className={styles.error}>{errors.category.message}</p>}
                    </fieldset>

                    <fieldset className={`${styles.fieldset} ${styles.fieldset_half} ${styles.disable} ${focusedField === 'name' || nameValue ? styles.fieldset_focus : ''}`}>
                        <label className={styles.label}>Nombre:</label>
                        <input className={styles.input}
                            onFocus={() => handleFocus('name')}
                            {...register('name')}
                            onBlur={handleBlur}
                            type="text" />
                        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
                    </fieldset>

                    <fieldset className={`${styles.fieldset} ${styles.fieldset_half} ${styles.disable} ${focusedField === 'company' || companyValue ? styles.fieldset_focus : ''}`}>
                        <label className={styles.label}>Company name: <span className={styles.optional}>(Optional)</span></label>
                        <input className={styles.input}
                            onFocus={() => handleFocus('company')}
                            {...register('company')}
                            onBlur={handleBlur}
                            type="text"  />
                        {errors.company && <p className={styles.error}>{errors.company.message}</p>}
                    </fieldset>

                    <fieldset className={`${styles.fieldset} ${styles.disable} ${focusedField === 'email' || emailValue ? styles.fieldset_focus : ''}`}>
                        <label className={styles.label}>Email:</label>
                        <input className={styles.input}
                            onFocus={() => handleFocus('email')}
                            {...register('email')}
                            onBlur={handleBlur}
                            type="email"  />
                        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                    </fieldset>

                    <fieldset className={`${styles.fieldset} ${styles.disable} ${focusedField === 'overview' || overviewValue ? styles.fieldset_focus : ''}`}>
                        <label className={styles.label}>Overview:</label>
                        <input className={styles.input}
                            onFocus={() => handleFocus('overview')}
                            {...register('overview')}
                            onBlur={handleBlur}
                            type="text" />
                        {errors.overview && <p className={styles.error}>{errors.overview.message}</p>}
                    </fieldset>

                    <fieldset className={styles.fieldset}>
                        <label className={styles.label}>Add files you'd like to share <span className={styles.optional}>(Optional)</span></label>
                        <div className={styles.file} {...getRootProps({})}>
                            <input {...getInputProps()} />
                            <HiOutlinePaperClip />
                            <p>Attach files</p>
                        </div>
                        <ul className={styles.file_list}>
                            {files.map((file, index) => (
                                <li key={index} className={styles.file_item}><HiOutlineDocumentText />{file.name}</li>
                            ))}
                        </ul>
                    </fieldset>

                    <fieldset className={styles.fieldset}>
                        <label className={styles.checkbox_label}>
                            <input type="checkbox" {...register('acceptPolicy')} />
                            I agree to the processing of my personal data, in order to establish contact and present marketing information. I declare that I have read and I accept the Privacy Policy.
                        </label>
                        {errors.acceptPolicy && <p className={styles.error}>{errors.acceptPolicy.message}</p>}
                    </fieldset>

                    <button type="submit" className={cn("button", styles.button)}>Send</button>
                    {loader && (
                        <fieldset className={`${styles.fieldset} ${styles.fieldset_loader}`}>
                            <span className={styles.loader}></span>
                        </fieldset>
                    )}
                    {loadError && (
                        <fieldset className={`${styles.fieldset} ${styles.fieldset_loader}`}>
                            <span className={styles.error}>Error sending the form</span>
                        </fieldset>
                    )}
                    <p className={styles.text_data}>The administrator of your personal data is Query Blocks, with its registered office in 1645 E Hwy 193, Suite 103, Layton, UT 84040. We process provided information in order to answer your questions, contact you and conduct business communication.</p>
                </form>
            )}
        </div>
    );
};

export default Form;
