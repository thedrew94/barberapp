import { useParams } from 'react-router-dom';
import ShopHeader from './ShopHeader';
import BookingSteps from './BookingSteps';
import ShopService from './ShopService';

export default function ShopPage() {
  const { sID } = useParams();

  return (
    <>
      <ShopHeader />
      <BookingSteps />
      <div className="list_divider">
        <h2>Per lui</h2>
      </div>
      <ul className="shopservices_ul">
        <ShopService />
        <ShopService />
        <ShopService />
      </ul>
      <div className="list_divider">
        <h2>Per lei</h2>
      </div>
      <ul className="shopservices_ul">
        <ShopService />
        <ShopService />
        <ShopService />
      </ul>
    </>
  );
}
