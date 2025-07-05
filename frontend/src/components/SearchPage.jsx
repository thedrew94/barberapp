import { svgSelector } from '../utils/svgSelector';

export default function SearchPage() {
  return (
    <div className="search_page">
      <div className="bg_header"></div>
      <div className="search_form">
        <div className="search_for">
          <button>PER LEI</button>
          <button>PER LUI</button>
          <button>PER ANIMALI</button>
        </div>
        <form action="">
          <fieldset>
            <div>
              <div>{svgSelector({ svgName: 'location', svgWidth: '36px', svgHeight: '36px', svgFill: '#212121' })}</div>
              <input type="text" name="" id="" placeholder="" />
            </div>
            <div>
              <input type="text" name="" id="" placeholder="" />
            </div>
            <button type="submit"></button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
