import { useEffect, useState } from 'react';
import { svgSelector } from '../utils/svgSelector';

const themes = {
  forHer: {
    '--color-custom1': '#ffffff',
    '--color-custom2': '#867c7c',
    '--color-custom3': '#4b1c1f',
    '--color-custom4': '#4b1c1f',
    '--color-custom5': '#e7c1bf',
    '--bg-custom': "url('./src/assets/forher_bg.jpg')",
  },
  forHerOld: {
    '--color-custom1': '#ffffff',
    '--color-custom2': '#212112',
    '--color-custom3': '#d86363',
    '--color-custom4': '#867c7c',
    '--color-custom5': '#ffe2e2',
    '--bg-custom': "url('./src/assets/forher_bg.jpg')",
  },
  forHim: {
    '--color-custom1': '#fffbf0',
    '--color-custom2': '#212112',
    '--color-custom3': '#323332',
    '--color-custom4': '#867c7c',
    '--color-custom5': '#f7e1b5',
    '--bg-custom': "url('./src/assets/forhim_bg.jpg')",
  },
  forAnimals: {
    '--color-custom1': '#fffbf0',
    '--color-custom2': '#212112',
    '--color-custom3': '#323332',
    '--color-custom4': '#867c7c',
    '--color-custom5': '#f7e1b5',
    '--bg-custom': "url('./src/assets/foranimal_bg.jpg')",
  },
};

export default function SearchPage() {
  const [theme, setTheme] = useState('forHer');

  function changeAppTheme({ theme = 'forHer' }) {
    setTheme(theme);
  }

  useEffect(() => {
    const currentTheme = themes[theme];
    Object.keys(currentTheme).forEach((key) => {
      document.documentElement.style.setProperty(key, currentTheme[key]);
    });
  }, [theme]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="search_page">
      <div className="bg_header">
        <h1>BarberApp</h1>
      </div>
      <div className="search_form">
        <div className="search_for">
          <button
            className="stnd_btn"
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
          <ul className="result_ul">
            <li className="result_li">
              <div className="result_li_actions">
                <h2>Il nome del posto Cacca & Puppu 2</h2>
                <button>
                  {svgSelector({ svgName: 'bookmark', svgWidth: '18px', svgHeight: '18px', svgFill: '#867c7c' })}
                  <p>Bookmark this place</p>
                </button>
              </div>
              <div className="place_info">
                {/* img slider */}
                <div className="place_img">
                  <img src="./src/assets/forher_bg.jpg" alt="" width="200px" height="200px" />
                </div>
                {/* info */}
                <div className="place_text">
                  <h3 className="place_description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, illum tempore quisquam repellendus, quidem nobis recusandae, tenetur dicta perferendis quaerat
                    odit? Sed, doloremque provident! Aliquam magnam consequuntur harum maxime numquam.
                  </h3>
                  <button className="place_open">Controlla disponibilita</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
