export default function PersonSelect() {
  return (
    <div className="person_slider_cnt">
      <h2 className="h4">Seleziona hair specialist</h2>
      <div className="person_slider_inner_cnt">
        <div className="person_preference">
          <label htmlFor="" className="h4">
            Nessuna preferenza
          </label>
          <input type="checkbox" name="" id="" />
        </div>
        <div className="person_slider">
          <ul className="person_ul">
            <li className="person_li"></li>
            <li className="person_li"></li>
            <li className="person_li"></li>
          </ul>
          <div className="person_slider_btns">
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
      <h2 className="h4">Seleziona orario</h2>
      <ul className="time_slots_ul">
        <li className="time_slots_li">
          <button className="time_slots_btn h5 slot_sltd">10:00</button>
        </li>
        <li className="time_slots_li">
          <button className="time_slots_btn h5">10:30</button>
        </li>
        <li className="time_slots_li">
          <button className="time_slots_btn h5">10:30</button>
        </li>
        <li className="time_slots_li">
          <button className="time_slots_btn h5">10:30</button>
        </li>
        <li className="time_slots_li">
          <button className="time_slots_btn h5">10:30</button>
        </li>
        <li className="time_slots_li">
          <button className="time_slots_btn h5">10:30</button>
        </li>
      </ul>
      <button className="person_book_btn h4">PRENOTA</button>
    </div>
  );
}
