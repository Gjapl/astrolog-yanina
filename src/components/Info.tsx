import photo from '../assets/photo-3.jpg';

export function Info() {
    return (
        <section className="info-section" id="information">
            <div className="info">
                <div className='info-text'>
                    <p className='info-description'>Меня зовут Янина. Я практикующий астролог.</p>
                    <hr />
                    <h3>Профессиональная деятельность:</h3>
                    <p className='profession-title'>Астрологическое консультирование</p>
                    <p className='main-info'>Если у вас есть жизненные ситуации, в которых, для принятия верного решения,
                    важно получить дополнительную информацию, то вы попали туда, где сможете получить эту информацию.задействуя прогностические методики, 
                    помогаю направить будущее в нужное русло.</p>
                </div>
                <img src={photo} alt="photo" />
            </div>
        </section>
    );
}