import { Service } from "./Service";

export function Services() {
    return (
        <section className="services-section" id="services">
            <h2>
                Услуги
            </h2>
            <div className="services">
                <Service serviceName="КАРМИЧЕСКОЕ ПРЕДНАЗНАЧЕНИЕ" servicePrice={2500} />
                <Service serviceName="НАТАЛЬНАЯ КАРТА" servicePrice={4500} />
                <Service serviceName="ЭКСПРЕСС-КОНСУЛЬТАЦИЯ" servicePrice={3500} />
                <Service serviceName="СИНАСТРИЯ" servicePrice={3000} />
            </div>
        </section>
    );
}