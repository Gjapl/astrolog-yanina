interface ServiceInfo {
    serviceName: string;
    servicePrice: number;
    serviceDesc1: string,
    serviceDesc2: string,
    serviceDesc3: string;
    hasServiceDesc1: boolean;
}

export function Service({serviceName, servicePrice, serviceDesc1, serviceDesc2, serviceDesc3, hasServiceDesc1}: ServiceInfo) {
    return (
        <div className="service">
            <div className="service-info">
                <h3 className='service-name'>{serviceName}</h3>
                <h5 className='service-price'>{servicePrice} РУБ.</h5>
                <ul className="service-description">
                    {hasServiceDesc1 && <li>{serviceDesc1}</li>}
                    <li>{serviceDesc2}</li>
                    <li>{serviceDesc3}</li>
                </ul>
            </div>
            <hr />
        </div>
    );
}