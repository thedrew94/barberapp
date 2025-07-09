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
      <div className="shoppage_head">
        <ShopHeader />
        <BookingSteps activeStep={activeStep} setActiveStep={setActiveStep} />
      </div>
      <main className="shoppage_body">
        {activeStep === 1 && <ServicesPage />}
        {activeStep === 2 && <BookingDatePage />}
      </main>
    </>
  );
}
