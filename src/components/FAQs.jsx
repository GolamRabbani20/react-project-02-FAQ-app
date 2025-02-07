import { useState } from 'react'
import {faqsData} from './Data'
import FAQ from './FAQ'
import style from './../assets/faqs.module.css'

const FAQs = () =>{
    const [faqs, setFaqs] = useState(faqsData)
    return(
        <main className={style.container}>
            <section className={style.faqs}>
                <h1>FAQs</h1>
                {faqs.map(faq=>(<FAQ key={faq.id}  {...faq} /> ))}
            </section>
        </main>
    )
}
export default FAQs