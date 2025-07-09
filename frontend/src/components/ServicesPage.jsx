import ShopService from './ShopService';

export default function ServicesPage() {
  return (
    <>
      <div className="list_divider">
        <h3>Per lui</h3>
      </div>
      <ul className="shopservices_ul">
        <ShopService />
        <ShopService />
        <ShopService />
      </ul>
      <div className="list_divider">
        <h3>Per lei</h3>
      </div>
      <ul className="shopservices_ul">
        <ShopService />
        <ShopService />
        <ShopService />
      </ul>
    </>
  );
}
