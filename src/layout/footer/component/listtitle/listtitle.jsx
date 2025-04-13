
import { Title } from "../title/title";
import styles from "./listitile.module.css";
function Document() {
    const Documents = [
        {
            title: 'Company',
            list: [
                { 'name': 'Blog', 'src': '#' },
                { 'name': 'Careers', 'src': '#' },
                { 'name': 'Pricing', 'src': '#' },
            ]
        },
        {
            title: 'Resources',
            list: [
                { 'name': 'Documentation', 'src': '#' },
                { 'name': 'Papers', 'src': '#' },
                { 'name': 'Press Conferences', 'src': '#' },
            ]
        },
        {
            title: 'Legal',
            list: [
                { 'name': 'Term of Service', 'src': '#' },
                { 'name': 'Privacy Policy', 'src': '#' },
                { 'name': 'Cookies Policy ', 'src': '#' },
            ]
        },
    ]
    return (
        <div className={styles['document-contain']}>
            {Documents.map((document, index) =>
                <Title key={index} document={document} />
            )}
        </div>
    )
}
export { Document }