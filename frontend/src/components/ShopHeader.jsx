import { Link } from 'react-router-dom';
import { svgSelector } from '../utils/svgSelector';

export default function ShopHeader() {
  return (
    <div className="shopheader">
      <Link to="/" className="shopheader_back">
        {svgSelector({ svgName: 'goback', svgWidth: '42px', svgHeight: '42px', svgFill: '#481b1b' })}
      </Link>
      <h2 className="shopheader_service">PRENOTA SERVIZIO</h2>
      <h3 className="shopheader_shopname">NOME DEL NEGOZIO</h3>
    </div>
  );
}
