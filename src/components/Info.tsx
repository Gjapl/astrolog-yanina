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
                    {/* <p className='main-info'>В какой-то момент жизни я стала искать ответы на свои вопросы. И так попала в увлекательный мир астрологии. 
                    С 2021 года обучалась натальной, и прогностической астрологии. Астрология стала для меня источником понимания жизни.</p>
                    <p className='main-info'>Если у вас есть жизненные ситуации, в которых, для принятия верного решения,
                    важно получить дополнительную информацию, то вы попали туда, где сможете получить эту информацию.задействуя прогностические методики, 
                    помогаю направить будущее в нужное русло.</p> */}
                    <ul className='main-info'>
                        <li className='info-item'>
                        С 2021 года обучалась натальной, и прогностической астрологии.
                        </li>
                        <li className='info-item'>
                        Московский институт психоанализа, профессиональная 
                        переподготовка «Психоанализ, психоаналитическая психотерапия и психоаналитическое консультирование» (2800 часов, 2023 - 2026 гг.)
                        </li>
                    </ul>
                </div>
                <img src={photo} alt="photo" />
            </div>
        </section>
    );
}