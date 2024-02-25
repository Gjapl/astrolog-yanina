interface ServiceInfo {
    serviceName: string;
    servicePrice: number;
}

export function Service({serviceName, servicePrice}: ServiceInfo) {
    return (
        <div className="service">
            <div className="service-info">
                <h3 className='service-name'>{serviceName}</h3>
                <h5 className='service-price'>{servicePrice} РУБ.</h5>
            </div>
            <hr />
        </div>
    );
}