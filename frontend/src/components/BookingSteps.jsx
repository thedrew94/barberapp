import { svgSelector } from '../utils/svgSelector';

export default function BookingSteps({ activeStep = 1, setActiveStep = () => {} }) {
  return (
    <ul className="bookingsteps">
      <li className={`${activeStep >= 1 && 'bookinsteps_active'}`}>
        <button
          onClick={() => {
            setActiveStep(1);
          }}>
          <div className="flex_row flex_gap_sm">
            {svgSelector({ svgName: 'ticket', svgWidth: '28px', svgHeight: '28px', svgFill: '#867c7c' })}
            <div>
              <span className="bookingsteps_step">STEP 01</span>
              <p className="bookingsteps_text">Seleziona il servizio</p>
            </div>
          </div>
          {svgSelector({ svgName: 'arrow_right', svgWidth: '30px', svgHeight: '100%', svgFill: '#867c7c' })}
        </button>
      </li>
      <li className={`${activeStep >= 2 && 'bookinsteps_active'}`}>
        <button
          onClick={() => {
            setActiveStep(2);
          }}>
          <div className="flex_row flex_gap_sm">
            {svgSelector({ svgName: 'calendar', svgWidth: '28px', svgHeight: '28px', svgFill: '#867c7c' })}
            <div>
              <span className="bookingsteps_step">STEP 02</span>
              <p className="bookingsteps_text">Seleziona la data</p>
            </div>
          </div>
          {svgSelector({ svgName: 'arrow_right', svgWidth: '30px', svgHeight: '100%', svgFill: '#867c7c' })}
        </button>
      </li>
      <li className={`${activeStep >= 3 && 'bookinsteps_active'}`}>
        <button
          onClick={() => {
            setActiveStep(3);
          }}>
          <div className="flex_row flex_gap_sm">
            {svgSelector({ svgName: 'file', svgWidth: '28px', svgHeight: '28px', svgFill: '#867c7c' })}
            <div>
              <span className="bookingsteps_step">STEP 03</span>
              <p className="bookingsteps_text">Conferma dati</p>
            </div>
          </div>
          {svgSelector({ svgName: 'arrow_right', svgWidth: '30px', svgHeight: '100%', svgFill: '#867c7c' })}
        </button>
      </li>
      <li className={`${activeStep >= 4 && 'bookinsteps_active'}`}>
        <button
          onClick={() => {
            setActiveStep(4);
          }}>
          <div className="flex_row flex_gap_sm">
            {svgSelector({ svgName: 'confirm', svgWidth: '28px', svgHeight: '28px', svgFill: '#867c7c' })}
            <div>
              <span className="bookingsteps_step">STEP 04</span>
              <p className="bookingsteps_text">Riepilogo</p>
            </div>
          </div>
          {svgSelector({ svgName: 'arrow_right', svgWidth: '30px', svgHeight: '100%', svgFill: '#867c7c' })}
        </button>
      </li>
    </ul>
  );
}
