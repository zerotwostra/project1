import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Jhon DarkSouls' },
        { id: 2, name: 'Vlados-mirozzz' },
        { id: 3, name: 'Smartschoolboy9' },
        { id: 4, name: 'debik715' }
    ];

    let messages = [
        { id: 1, message: 'i want to cut myself.....' },
        { id: 2, message: "don't do it sweetheart" },
        { id: 3, message: 'im at your location' },
        { id: 4, message: 'zdorovy kaif' }
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = messages.map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;