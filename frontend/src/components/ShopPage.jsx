import { useParams } from 'react-router-dom';
import BookingSteps from './BookingSteps';
import ShopHeader from './ShopHeader';
import ShopService from './ShopService';

export default function ShopPage() {
  const { sID } = useParams();

  return (
    <>
      <ShopHeader />
      <BookingSteps />
      <ul className="shopservices_ul">
        <ShopService />
      </ul>
    </>
  );
}
