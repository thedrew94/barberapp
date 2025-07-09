import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingSteps from './BookingSteps';
import ServicesPage from './ServicesPage';
import ShopHeader from './ShopHeader';
import BookingDatePage from './BookingDatePage';

export default function ShopPage() {
  const [activeStep, setActiveStep] = useState(1);
  const { sID } = useParams();

  return (
    <>
      <ShopHeader />
      <BookingSteps activeStep={activeStep} setActiveStep={setActiveStep} />
      {/* <div className="shop_bg">
        <img src="../src/assets/forher_bg.jpg" alt="" />
        <h2>Cacca & Puppu</h2>
      </div> */}
      {activeStep === 1 && <ServicesPage />}
      {activeStep === 2 && <BookingDatePage />}
    </>
  );
}
