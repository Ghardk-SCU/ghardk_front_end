
export default function CartLocationPart() {
  const Submit = (e) => {
    e.preventDefault();
    console.log('submitted');
  }
  return (
    <div className="Fredoka relative w-[85%] min-h-[140px] max-h-[80%] bg-[rgb(36,36,36)] rounded-3xl p-6 text-White gap-2 md:gap-4">
      <h1 className="text-2xl my-5">Billing Details</h1>
      <form onSubmit={Submit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-500">*</span></label>
          <input
            type="email"
            id="email"
            className="bg-transparent w-full px-3 py-2 border rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="state">State <span className="text-red-500">*</span></label>
          <select id="state" className="bg-[rgb(36,36,36)] w-full px-3 py-2 border rounded-md">
            <EgyptStates />
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="country">Country / Region <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="country"
            className="bg-transparent w-full px-3 py-2 border rounded-md"
            value="Egypt"
            readOnly
          />
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label className="block text-sm font-medium mb-1" htmlFor="firstName">First name <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="firstName"
              className="bg-transparent w-full px-3 py-2 border rounded-md"
              placeholder="Enter your first name"
            />
          </div>
          <div className="w-1/2 pl-2">
            <label className="block text-sm font-medium mb-1" htmlFor="lastName">Last name <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="lastName"
              className="bg-transparent w-full px-3 py-2 border rounded-md"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="address">Address <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="address"
            className="bg-transparent w-full px-3 py-2 border rounded-md"
            placeholder="Enter your address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone <span className="text-red-500">*</span></label>
          <input
            type="tel"
            id="phone"
            className="bg-transparent w-full px-3 py-2 border rounded-md"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="neighborhood">Neighborhood <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="neighborhood"
            className="bg-transparent w-full px-3 py-2 border rounded-md"
            placeholder="Enter your neighborhood"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="orderNotes">Order notes</label>
          <textarea
            id="orderNotes"
            className="bg-transparent w-full px-3 py-2 border rounded-md"
            placeholder="Notes about your order, e.g. special notes for delivery."
          ></textarea>
        </div>
        <button type="submit" className="
        bg-White Fredoka text-Black text-[22px] w-[100%] py-[8px] rounded-full font-medium hover:bg-[#f9f1ac] transition-all ease-in-out duration-300
        ">
          Save
        </button>
      </form>
    </div>
  )
}


const EgyptStates = () => {
  return (
    <>
      <option value="alexandria">Alexandria</option>
      <option value="aswan">Aswan</option>
      <option value="asyut">Asyut</option>
      <option value="beheira">Beheira</option>
      <option value="beni-suef">Beni Suef</option>
      <option value="cairo">Cairo</option>
      <option value="dakahlia">Dakahlia</option>
      <option value="damietta">Damietta</option>
      <option value="faiyum">Faiyum</option>
      <option value="gharbia">Gharbia</option>
      <option value="giza">Giza</option>
      <option value="ismailia">Ismailia</option>
      <option value="kafr-el-sheikh">Kafr El Sheikh</option>
      <option value="luxor">Luxor</option>
      <option value="matrouh">Matrouh</option>
      <option value="minya">Minya</option>
      <option value="monufia">Monufia</option>
      <option value="new-valley">New Valley</option>
      <option value="north-sinai">North Sinai</option>
      <option value="port-said">Port Said</option>
      <option value="qalyubia">Qalyubia</option>
      <option value="qena">Qena</option>
      <option value="red-sea">Red Sea</option>
      <option value="sharqia">Sharqia</option>
      <option value="sohag">Sohag</option>
      <option value="south-sinai">South Sinai</option>
      <option value="suez">Suez</option>
    </>
  )
}