import { useState } from 'react';
import { svgSelector } from '../utils/svgSelector';

export default function BookingSteps({ activeStep = 1 }) {
  const [currentActiveStep, setCurrentActiveStep] = useState(activeStep);

  function handleStepClick({ step = 1 }) {
    setCurrentActiveStep(step);
  }

  return (
    <ul className="bookingsteps">
      <li className={`${currentActiveStep >= 1 && 'bookinsteps_active'}`}>
        <button
          onClick={() => {
            handleStepClick({ step: 1 });
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
      <li className={`${currentActiveStep >= 2 && 'bookinsteps_active'}`}>
        <button
          onClick={() => {
            handleStepClick({ step: 2 });
          }}>
          <div className="flex_row flex_gap_sm">
            {svgSelector({ svgName: 'ticket', svgWidth: '28px', svgHeight: '28px', svgFill: '#867c7c' })}
            <div>
              <span className="bookingsteps_step">STEP 02</span>
              <p className="bookingsteps_text">Seleziona la data</p>
            </div>
          </div>
          {svgSelector({ svgName: 'arrow_right', svgWidth: '30px', svgHeight: '100%', svgFill: '#867c7c' })}
        </button>
      </li>
      <li className={`${currentActiveStep >= 3 && 'bookinsteps_active'}`}>
        <button
          onClick={() => {
            handleStepClick({ step: 3 });
          }}>
          <div className="flex_row flex_gap_sm">
            {svgSelector({ svgName: 'ticket', svgWidth: '28px', svgHeight: '28px', svgFill: '#867c7c' })}
            <div>
              <span className="bookingsteps_step">STEP 03</span>
              <p className="bookingsteps_text">Conferma dati</p>
            </div>
          </div>
          {svgSelector({ svgName: 'arrow_right', svgWidth: '30px', svgHeight: '100%', svgFill: '#867c7c' })}
        </button>
      </li>
      <li className={`${currentActiveStep >= 4 && 'bookinsteps_active'}`}>
        <button
          onClick={() => {
            handleStepClick({ step: 4 });
          }}>
          <div className="flex_row flex_gap_sm">
            {svgSelector({ svgName: 'ticket', svgWidth: '28px', svgHeight: '28px', svgFill: '#867c7c' })}
            <div>
              <span className="bookingsteps_step">STEP 04</span>
              <p className="bookingsteps_text">Riepilogo</p>
            </div>
          </div>
        </button>
      </li>
    </ul>
  );
}
