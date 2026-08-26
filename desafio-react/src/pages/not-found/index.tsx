import IconLabelButton from '../../components/IconLabelButton/IconLabelButton'
import { returnToPreviousPage } from '../../utils/navigation'
import styles from './notFound.module.css'


export default function NotFound() {
    return (
        <main className={styles.notFound}>
            <h1 className={styles.errorCode}>404</h1>

            <h3 className={styles.errorText}>
                Página não existe ou pesquisa não encontrado
            </h3>

            <IconLabelButton
                labelButton='Voltar Página'
                onClick={returnToPreviousPage}
            />
        </main>
    )
}