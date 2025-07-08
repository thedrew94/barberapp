import { svgSelector } from '../utils/svgSelector';

export default function BookingSteps() {
  return (
    <ul className="bookingsteps">
      <li className="bookinsteps_active">
        <button>
          {svgSelector({ svgName: 'ticket', svgWidth: '28px', svgHeight: '28px', svgFill: '#867c7c' })}
          <div>
            <span className="bookingsteps_step">STEP 01</span>
            <p className="bookingsteps_text">Seleziona il servizio</p>
          </div>
          {svgSelector({ svgName: 'arrow_right', svgWidth: '30px', svgHeight: '100%', svgFill: '#867c7c' })}
        </button>
      </li>
      <li>
        <button>
          {svgSelector({ svgName: 'ticket', svgWidth: '28px', svgHeight: '28px', svgFill: '#867c7c' })}
          <div>
            <span className="bookingsteps_step">STEP 01</span>
            <p className="bookingsteps_text">Seleziona il servizio</p>
          </div>
          {svgSelector({ svgName: 'arrow_right', svgWidth: '30px', svgHeight: '100%', svgFill: '#867c7c' })}
        </button>
      </li>
      <li>
        <button>
          {svgSelector({ svgName: 'ticket', svgWidth: '28px', svgHeight: '28px', svgFill: '#867c7c' })}
          <div>
            <span className="bookingsteps_step">STEP 01</span>
            <p className="bookingsteps_text">Seleziona il servizio</p>
          </div>
          {svgSelector({ svgName: 'arrow_right', svgWidth: '30px', svgHeight: '100%', svgFill: '#867c7c' })}
        </button>
      </li>
      <li>
        <button>
          {svgSelector({ svgName: 'ticket', svgWidth: '28px', svgHeight: '28px', svgFill: '#867c7c' })}
          <div>
            <span className="bookingsteps_step">STEP 01</span>
            <p className="bookingsteps_text">Seleziona il servizio</p>
          </div>
        </button>
      </li>
    </ul>
  );
}
