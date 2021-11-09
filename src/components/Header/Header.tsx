import { IoMdDocument } from 'react-icons/io'
import Icon from '../../fragments/Icon/Icon'
import './style.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="info">
                <Icon icon={<IoMdDocument />} />
                <div className="text">
                    <h2>Solicitação</h2>
                    <p>Visualize e envie as documentações solicitadas.</p>
                </div>
            </div>
            <div>
                logoimg
            </div>
        </header>
    )
}

export default Header
