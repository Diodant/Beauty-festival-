import React from 'react';
import ArrowImg from '../img/arrow.svg'

function Position() {
  return (
    <div>
    <div className="ratings-content">
    <div className="content-overlay">
      <h1 className="main-title">Положение</h1>
      <h1 className="main-title">Международной Премии "Олимп красоты"</h1>
    </div>
    </div>
    <section className='main-section'>
          <div className='wrapper'>
    <div className='title'>О положении</div>
    <div className='text'>Положение Международной Премии "Олимп красоты" представляет собой документ, описывающий основные принципы, критерии и процедуры проведения награждения, которое призвано отметить выдающиеся достижения в сфере красоты и эстетической медицины. Вот примерное оформление такого положения:</div>
    </div>
    <section className='about-section'>
        <div className='wrapper'>
          <div className='title'>Цели и задачи премии</div>
          <ul className="styled-list">
          <li>
            <div className="list-item-container">
              <span className="big-number">1</span>
              <span>Поощрение и награждение мастеров и специалистов за выдающиеся достижения и инновации в индустрии красоты.</span>
            </div>
          </li>
          <li>
            <div className="list-item-container">
              <span className="big-number">2</span>
              <span>Стимулирование развития и внедрения новых технологий и методик в сфере красоты и эстетической медицины.</span>
            </div>
          </li>
          <li>
            <div className="list-item-container">
              <span className="big-number">3</span>
              <span>Поддержка и продвижение высоких стандартов обслуживания и клиентского сервиса.</span>
            </div>
          </li>
          <li>
            <div className="list-item-container">
              <span className="big-number">4</span>
              <span>Взаимодействие и сотрудничество профессионалов отрасли на международном уровне.</span>
            </div>
          </li>
        </ul>
        </div>
      </section>
      <div className='wrapper'>
    <div className='title'>Организаторы премии</div>
    <div className='text'>Организацию премии осуществляет комитет  Международной Ассоциацией Красоты и Ухода (International Association of Beauty and Care), состоящий из представителей ведущих учебных заведений, клиник и салонов красоты, а также независимых экспертов в области эстетической медицины.</div>
    </div>
    <section className='about-section'>
        <div className='wrapper'>
          <div className='title'>Участники</div>
          <ul className="styled-list">
          <li>
            <div className="list-item-container">
              <span className="big-number">1</span>
              <span>Премия открыта для мастеров ногтевого сервиса, парикмахеров, косметологов, мастеров перманентного макияжа и тату мастеров</span>
            </div>
          </li>
          <li>
            <div className="list-item-container">
              <span className="big-number">2</span>
              <span>Участники могут быть номинированы коллегами, профессиональными ассоциациями или самостоятельно подать заявку</span>
            </div>
          </li>
        </ul>
        </div>
      </section>

        <div className='wrapper mb-50'>
          <div className='title'>Категории наград</div>

          <div className='awards-cont'>
    <ul className="content-details-list">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Инновации в процедурах</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Выдающийся клиентский сервис</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Лучшая образовательная программа</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Прорыв года</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Лучший молодой специалист</li>
        </ul>
        <div className="awards-image"></div>
        </div>
        </div>

        <div className='wrapper mb-50'>
          <div className='title'>Критерии оценки</div>

          <div className='awards-cont'>
    <ul className="content-details-list">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Инновационный подход</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Качество и результаты работы</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Клиентская удовлетворенность</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Профессиональное развитие и вклад в отрасль</li>
        </ul>
        <div className="position-image"></div>
        </div>
        </div>

        <div className='wrapper mb-50'>
          <div className='title'>Процесс отбора</div>

          <div className='awards-cont'>
    <ul className="content-details-list">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Подача заявок и документации</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Предварительный отбор кандидатов</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Оценка экспертной комиссией</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Голосование и определение победителей</li>
        </ul>
        <div className="position-image"></div>
        </div>
        </div>
        <section className='about-section'>
        <div className='wrapper'>
          <div className='title'>Награждение</div>
          <ul className="styled-list">
          <li>
            <div className="list-item-container">
              <span className="big-number">1</span>
              <span>Победители в каждой категории получают статуэтку "Олимп красоты", сертификаты и призы от спонсоров.</span>
            </div>
          </li>
          <li>
            <div className="list-item-container">
              <span className="big-number">2</span>
              <span>Торжественная церемония награждения проводится ежегодно в одном из международных культурных центров.</span>
            </div>
          </li>
        </ul>
        </div>
      </section>
      <section className='about-section'>
        <div className='wrapper'>
          <div className='title'>Правила и условия участия</div>
          <ul className="styled-list">
          <li>
            <div className="list-item-container">
              <span className="big-number">1</span>
              <span>Детальное описание процесса регистрации, сроков подачи заявок и требований к документации.</span>
            </div>
          </li>
          <li>
            <div className="list-item-container">
              <span className="big-number">2</span>
              <span>Условия конфиденциальности и права на интеллектуальную собственность.</span>
            </div>
          </li>
        </ul>
        </div>
      </section>
      <div className='wrapper'>
    <div className='title'>Финансирование и спонсорство</div>
    <div className='text'>Описание системы финансирования премии, включая вклад спонсоров и партнеров. Это положение служит основой для организации и проведения премии, обеспечивая прозрачность и справедливость на всех этапах оценки и награждения.</div>
    </div>
      </section>
    </div>
  );
}

export default Position;