import { svgSelector } from '../utils/svgSelector';

export default function SearchPage() {
  return (
    <div className="search_page">
      <span className="cornice"></span>
      <div className="bg_header">
        <h1>BarberApp</h1>
      </div>
      <div className="search_form">
        <div className="search_for">
          <button className="stnd_btn">PER LEI</button>
          <button className="stnd_btn">PER LUI</button>
          <button className="stnd_btn">PER ANIMALI</button>
        </div>
        <form className="main_search_form">
          <fieldset className="flex_row flex_gap_sm">
            <div className="inner_input">
              <div>{svgSelector({ svgName: 'location', svgWidth: '28px', svgHeight: '28px', svgFill: '#867c7c' })}</div>
              <input type="text" name="" id="id1" placeholder="Cerca nome negozio" />
            </div>
            <span className="divider"></span>
            <div className="inner_input">
              <div>{svgSelector({ svgName: 'location', svgWidth: '28px', svgHeight: '28px', svgFill: '#867c7c' })}</div>
              <input type="text" name="" id="id2" placeholder="Indirizzo o citta" />
            </div>
            <button type="submit" className="form_sbm_btn">
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
                  {svgSelector({ svgName: 'location', svgWidth: '18px', svgHeight: '18px', svgFill: '#867c7c' })}
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
            <li className="result_li">
              <div className="result_li_actions">
                <h2>Il nome del posto Cacca & Puppu 2</h2>
                <button>
                  {svgSelector({ svgName: 'location', svgWidth: '18px', svgHeight: '18px', svgFill: '#867c7c' })}
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
