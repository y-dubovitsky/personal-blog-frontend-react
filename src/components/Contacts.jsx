export default function Contacts() {
    return (
        <div id="contacts">
            <center><h5>Обратная связь</h5></center>
            <form id="form_input">
                <label htmlFor="name">Имя <span>*</span></label>
                <br />
                <input type="text" name="name" id="name" placeholder="ФИО" />
                <br />
                <label htmlFor="email">Email <span>*</span></label>
                <br />
                <input type="email" name="email" id="email" placeholder="example@email.com" />
                <label htmlFor="message">Сообщение <span>*</span></label>
                <br />
                <textarea name="message" id="message" placeholder="...message" />
                <br />
                <div className="mess_send" className="btn">Отправить</div>
            </form>
        </div>
    )
}