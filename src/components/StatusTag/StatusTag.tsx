import React from 'react'
import './style.scss'
import {ImWarning} from 'react-icons/im'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {GrValidate} from 'react-icons/gr'

type Props = {
    item: string
}
const StatusTag = ({item}: Props ) => {
    return (
        <div className={
                item === 'Validado' || item === 'Atualizado'? 'validated' : 
                item === 'Pendente' ?  'pending' : 
                item === 'Desatualizado' || item === 'A Validar' || item === 'Inválido' ? 'validating' : ''
            }>
                <div className="tag-content">
                    <div className="tag-icon">
                        {
                            item === 'Validado' || item === 'Atualizado' ? <GrValidate /> : 
                            item === 'Pendente' || item === 'Desatualizado' || item === 'Inválido' ? <AiOutlineInfoCircle /> : 
                            item === 'A Validar'? <ImWarning /> :
                            ''
                        }
                    </div>
                    <div>
                        {item}
                    </div>
                </div>
        </div>
    )
}

export default StatusTag
