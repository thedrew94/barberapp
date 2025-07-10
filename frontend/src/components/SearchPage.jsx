import { useEffect, useState } from 'react';
import { svgSelector } from '../utils/svgSelector';
import { getFetch } from '../utils/getFetch';
import { Link } from 'react-router-dom';
import MainNavbar from './MainNavbar';

const themes = {
  forHer: {
    '--color-custom1': '#ffffff',
    '--color-custom2': '#867c7c',
    '--color-custom3': '#4b1c1f',
    '--color-custom4': '#4b1c1f',
    '--color-custom5': '#e7c1bf',
    '--bg-custom': "url('../src/assets/forher_bg.jpg')",
  },
  forHerOld: {
    '--color-custom1': '#ffffff',
    '--color-custom2': '#212112',
    '--color-custom3': '#d86363',
    '--color-custom4': '#867c7c',
    '--color-custom5': '#ffe2e2',
    '--bg-custom': "url('../src/assets/forher_bg.jpg')",
  },
  forHim: {
    '--color-custom1': '#fffbf0',
    '--color-custom2': '#212112',
    '--color-custom3': '#323332',
    '--color-custom4': '#867c7c',
    '--color-custom5': '#f7e1b5',
    '--bg-custom': "url('../src/assets/forhim_bg.jpg')",
  },
  forAnimals: {
    '--color-custom1': '#fffbf0',
    '--color-custom2': '#212112',
    '--color-custom3': '#323332',
    '--color-custom4': '#867c7c',
    '--color-custom5': '#f7e1b5',
    '--bg-custom': "url('../src/assets/foranimal_bg.jpg')",
  },
};

export default function SearchPage() {
  const [theme, setTheme] = useState('forHer');
  const [businessData, setBusinessData] = useState(null);

  function changeAppTheme({ theme = 'forHer' }) {
    setTheme(theme);
  }

  useEffect(() => {
    const currentTheme = themes[theme];
    Object.keys(currentTheme).forEach((key) => {
      document.documentElement.style.setProperty(key, currentTheme[key]);
    });
  }, [theme]);

  // FETCH THE DATA FOR THE SHOPS AND RENDER THE RESULTS
  async function handleSubmit(e) {
    e.preventDefault();
    const fetchedData = await getFetch({ url: 'http://localhost:5001/api/getShop' });
    setBusinessData(fetchedData.data);
  }

  return (
    <div className="search_page">
      <MainNavbar />
      <div className="bg_header">
        <h1>BarberApp</h1>
      </div>
      <div className="search_form">
        <div className="search_for">
          <button
            className="stnd_btn stnd_btn_sltd"
            onClick={() => {
              changeAppTheme({ theme: 'forHer' });
            }}>
            PER LEI
          </button>
          <button
            className="stnd_btn"
            onClick={() => {
              changeAppTheme({ theme: 'forHim' });
            }}>
            PER LUI
          </button>
          <button
            className="stnd_btn"
            onClick={() => {
              changeAppTheme({ theme: 'forAnimals' });
            }}>
            PER ANIMALI
          </button>
        </div>
        <form className="main_search_form">
          <fieldset className="flex_row flex_gap_sm">
            <div className="inner_input">
              <div>{svgSelector({ svgName: 'store', svgWidth: '28px', svgHeight: '28px', svgFill: '#867c7c' })}</div>
              <input type="text" name="" id="id1" autoComplete="off" placeholder="Cerca nome negozio" />
            </div>
            <span className="divider"></span>
            <div className="inner_input">
              <div>{svgSelector({ svgName: 'location', svgWidth: '28px', svgHeight: '28px', svgFill: '#867c7c' })}</div>
              <input type="text" name="" id="id2" autoComplete="off" placeholder="Indirizzo o citta" />
            </div>
            <button type="submit" className="form_sbm_btn" onClick={handleSubmit}>
              Cerca
            </button>
          </fieldset>
        </form>
        {/* results */}
        <div>
          {businessData && (
            <>
              <div className="spotlight_title">
                {svgSelector({ svgName: 'store', svgWidth: '28px', svgHeight: '28px', svgFill: '#481b1b' })}
                <h6 className="h2">Risultati</h6>
              </div>
              <ul className="result_ul">
                {businessData.length > 0 ? (
                  businessData.map((bd, idx) => {
                    return (
                      // <li key={`shop_${idx}`} className="result_li">
                      //   <div className="result_li_actions">
                      //     <h2>Il nome del posto Cacca & Puppu 2</h2>
                      //     <button>
                      //       {svgSelector({ svgName: 'bookmark', svgWidth: '18px', svgHeight: '18px', svgFill: '#867c7c' })}
                      //       <p>Bookmark this place</p>
                      //     </button>
                      //   </div>
                      //   <div className="place_info">
                      //     {/* img slider */}
                      //     <div className="place_img">
                      //       <img src="./src/assets/forher_bg.jpg" alt="" width="200px" height="200px" />
                      //     </div>
                      //     {/* info */}
                      //     <div className="place_text">
                      //       <h3 className="place_description">
                      //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, illum tempore quisquam repellendus, quidem nobis recusandae, tenetur dicta perferendis
                      //         quaerat odit? Sed, doloremque provident! Aliquam magnam consequuntur harum maxime numquam.
                      //       </h3>
                      //       <Link to="/shop/123" className="place_open">
                      //         Controlla disponibilita
                      //       </Link>
                      //     </div>
                      //   </div>
                      // </li>
                      <li key={`shop_${idx}`}>
                        <div className="spotlight_business">
                          <img src="./src/assets/forher_bg.jpg" alt="" width="250px" height="250px" />
                          <div className="spotlight_business_info_container">
                            <div className="spotlight_business_info">
                              {svgSelector({ svgName: 'store', svgWidth: '24px', svgHeight: '24px', svgFill: '#481b1b' })}
                              <h5 className="h4">Il barbiere Bastardo</h5>
                            </div>
                            <div className="spotlight_business_info">
                              {svgSelector({ svgName: 'location', svgWidth: '24px', svgHeight: '24px', svgFill: '#481b1b' })}
                              <h5 className="h4">Roma via della marsala 9999</h5>
                            </div>
                            <div className="spotlight_business_info">
                              {svgSelector({ svgName: 'feedback', svgWidth: '24px', svgHeight: '24px', svgFill: '#481b1b' })}
                              <h5 className="h4">4.4</h5>
                            </div>
                            <button className="spotlight_shops_btns">
                              {svgSelector({ svgName: 'bookmark', svgWidth: '20px', svgHeight: '20px', svgFill: '#fff' })}
                              <p className="h5">Aggiungi ai preferiti</p>
                            </button>
                            <button className="spotlight_shops_btns h5">
                              {svgSelector({ svgName: 'booking', svgWidth: '20px', svgHeight: '20px', svgFill: '#fff' })}
                              <p>Controlla disponibilita</p>
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })
                ) : (
                  <h2 className="h4 nothing_found_text">Nessun risultato trovato...</h2>
                )}
              </ul>
            </>
          )}
        </div>
      </div>

      {/* SPOTLIGHT SHOPS */}
      <div className="spotlight_shops">
        <div className="spotlight_title">
          {svgSelector({ svgName: 'lamp', svgWidth: '28px', svgHeight: '28px', svgFill: '#481b1b' })}
          <h6 className="h2">Sotto i riflettori</h6>
        </div>
        <ul className="spotlight_list">
          <li>
            <div className="spotlight_business">
              <img src="./src/assets/forher_bg.jpg" alt="" width="250px" height="250px" />
              <div className="spotlight_business_info_container">
                <div className="spotlight_business_info">
                  {svgSelector({ svgName: 'store', svgWidth: '24px', svgHeight: '24px', svgFill: '#481b1b' })}
                  <h5 className="h4">Il barbiere Bastardo</h5>
                </div>
                <div className="spotlight_business_info">
                  {svgSelector({ svgName: 'location', svgWidth: '24px', svgHeight: '24px', svgFill: '#481b1b' })}
                  <h5 className="h4">Roma via della marsala 9999</h5>
                </div>
                <div className="spotlight_business_info">
                  {svgSelector({ svgName: 'feedback', svgWidth: '24px', svgHeight: '24px', svgFill: '#481b1b' })}
                  <h5 className="h4">4.4</h5>
                </div>
                <button className="spotlight_shops_btns">
                  {svgSelector({ svgName: 'bookmark', svgWidth: '20px', svgHeight: '20px', svgFill: '#fff' })}
                  <p className="h5">Aggiungi ai preferiti</p>
                </button>
                <button className="spotlight_shops_btns h5">
                  {svgSelector({ svgName: 'booking', svgWidth: '20px', svgHeight: '20px', svgFill: '#fff' })}
                  <p>Controlla disponibilita</p>
                </button>
              </div>
            </div>
          </li>
          <li>
            <div className="spotlight_business">
              <img src="./src/assets/forher_bg.jpg" alt="" width="250px" height="250px" />
              <div className="spotlight_business_info_container">
                <div className="spotlight_business_info">
                  {svgSelector({ svgName: 'store', svgWidth: '24px', svgHeight: '24px', svgFill: '#481b1b' })}
                  <h5 className="h4">Il barbiere Bastardo</h5>
                </div>
                <div className="spotlight_business_info">
                  {svgSelector({ svgName: 'location', svgWidth: '24px', svgHeight: '24px', svgFill: '#481b1b' })}
                  <h5 className="h4">Roma via della marsala 9999</h5>
                </div>
                <div className="spotlight_business_info">
                  {svgSelector({ svgName: 'feedback', svgWidth: '24px', svgHeight: '24px', svgFill: '#481b1b' })}
                  <h5 className="h4">4.4</h5>
                </div>
                <button className="spotlight_shops_btns">
                  {svgSelector({ svgName: 'bookmark', svgWidth: '20px', svgHeight: '20px', svgFill: '#fff' })}
                  <p className="h5">Aggiungi ai preferiti</p>
                </button>
                <button className="spotlight_shops_btns h5">
                  {svgSelector({ svgName: 'booking', svgWidth: '20px', svgHeight: '20px', svgFill: '#fff' })}
                  <p>Controlla disponibilita</p>
                </button>
              </div>
            </div>
          </li>
          <li>
            <div className="spotlight_business">
              <img src="./src/assets/forher_bg.jpg" alt="" width="250px" height="250px" />
              <div className="spotlight_business_info_container">
                <div className="spotlight_business_info">
                  {svgSelector({ svgName: 'store', svgWidth: '24px', svgHeight: '24px', svgFill: '#481b1b' })}
                  <h5 className="h4">Il barbiere Bastardo</h5>
                </div>
                <div className="spotlight_business_info">
                  {svgSelector({ svgName: 'location', svgWidth: '24px', svgHeight: '24px', svgFill: '#481b1b' })}
                  <h5 className="h4">Roma via della marsala 9999</h5>
                </div>
                <div className="spotlight_business_info">
                  {svgSelector({ svgName: 'feedback', svgWidth: '24px', svgHeight: '24px', svgFill: '#481b1b' })}
                  <h5 className="h4">4.4</h5>
                </div>
                <button className="spotlight_shops_btns">
                  {svgSelector({ svgName: 'bookmark', svgWidth: '20px', svgHeight: '20px', svgFill: '#fff' })}
                  <p className="h5">Aggiungi ai preferiti</p>
                </button>
                <button className="spotlight_shops_btns h5">
                  {svgSelector({ svgName: 'booking', svgWidth: '20px', svgHeight: '20px', svgFill: '#fff' })}
                  <p>Controlla disponibilita</p>
                </button>
              </div>
            </div>
          </li>
        </ul>
        {/* <div className="spotlight_business">
          <img src="./src/assets/forher_bg.jpg" alt="" width="250px" height="250px" />
          <div className="spotlight_business_info_container">
            <div className="spotlight_business_info">
              {svgSelector({ svgName: 'store', svgWidth: '24px', svgHeight: '24px', svgFill: '#481b1b' })}
              <h5 className="h4">Il barbiere Bastardo</h5>
            </div>
            <div className="spotlight_business_info">
              {svgSelector({ svgName: 'location', svgWidth: '24px', svgHeight: '24px', svgFill: '#481b1b' })}
              <h5 className="h4">Roma via della marsala 9999</h5>
            </div>
            <div className="spotlight_business_info">
              {svgSelector({ svgName: 'feedback', svgWidth: '24px', svgHeight: '24px', svgFill: '#481b1b' })}
              <h5 className="h4">4.4</h5>
            </div>
            <h6 className="h6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus inventore quis nulla cum quas corrupti quaerat voluptate magni! Quia quo impedit delectus
              pariatur ut maiores sunt consequatur nobis, dicta consequuntur...
            </h6>
          </div>
        </div> */}

        <div className="spotlight_btns">
          <button className="spotlight_act_btns">.</button>
          <button className="spotlight_act_btns">.</button>
          <button className="spotlight_act_btns">.</button>
        </div>
      </div>
    </div>
  );
}
