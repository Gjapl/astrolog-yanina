import { Service } from "./Service";

export function Services() {
    return (
        <section className="services-section" id="services">
            <h2>
                Услуги
            </h2>
            <div className="services">
                <Service serviceName="КАРМИЧЕСКОЕ ПРЕДНАЗНАЧЕНИЕ" servicePrice={3000} hasServiceDesc1={false} serviceDesc1="" serviceDesc2={"Голосовое или письменное сообщение; возможно в телефонном режиме"} serviceDesc3={"Необходимо знать точное время рождения"} />
                <Service serviceName="НАТАЛЬНАЯ КАРТА" servicePrice={7000} hasServiceDesc1={true} serviceDesc1={"Выполнение работы около недели"} serviceDesc2={"Голосовое или письменное сообщение, возможно в телефонном режиме"} serviceDesc3={"Необходимо знать точное время рождения"} />
                <Service serviceName="ЭКСПРЕСС-КОНСУЛЬТАЦИЯ" servicePrice={2000} hasServiceDesc1={true} serviceDesc1="1 вопрос" serviceDesc2="Голосовое или письменное сообщение;возможно в телефонном режиме" serviceDesc3="Необходимо знать точное время рождения" />
                <Service serviceName="СИНАСТРИЯ (взаимодействие 2-х людей)" servicePrice={5000} hasServiceDesc1={false} serviceDesc1="" serviceDesc2={"Голосовое или письменное сообщение, возможно в телефонном режиме"} serviceDesc3={"Необходимо знать точное время рождения"} />
                <Service serviceName="ПРОГНОЗ НА ГОД" servicePrice={5000} hasServiceDesc1={true} serviceDesc1={"Выполнение работы около недели"} serviceDesc2={"Голосовое сообщение, возможно в телефонном режиме"} serviceDesc3={"Необходимо знать точное время рождения"} />
            </div>
        </section>
    );
}