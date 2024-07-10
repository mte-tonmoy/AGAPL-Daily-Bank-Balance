import React, { useEffect, useState } from "react";
import { MdOutlineStreetview } from "react-icons/md";

const DailyBalanceCalculation = ({ amount, selectDate }) => {
  //    const [totalAmount, setTotalAmount] = useState();
  const total =
    parseInt(amount?.BankAlfalahLtd || 0) +
    parseInt(amount?.HSBC || 0) +
    parseInt(amount?.SCB || 0) +
    parseInt(amount?.DhakaBankLtd || 0) +
    parseInt(amount?.WooriBank || 0) +
    parseInt(amount?.PrimeBankLtd || 0) +
    parseInt(amount?.TheCityBankLtd || 0) +
    parseInt(amount?.CitibankNA || 0) +
    parseInt(amount?.HabibBankLtd || 0) +
    parseInt(amount?.EasternBankLtd || 0) +
    parseInt(amount?.BRACBankLtd || 0) +
    parseInt(amount?.StateBankOfIndia || 0) +
    parseInt(amount?.DutchBanglaBankLtd || 0) +
    parseInt(amount?.DutchBanglaBankLtdOD || 0) +
    parseInt(amount?.TheCityBankLtdOD || 0) +
    parseInt(amount?.PrimeBankLtdOD || 0) +
    parseInt(amount?.StateBankOfIndiaOD || 0) +
    parseInt(amount?.MIDLANDBankLimited || 0) +
    parseInt(amount?.PubaliBankLtd || 0) +
    parseInt(amount?.IslamiBankBangladeshLtd || 0) +
    parseInt(amount?.ShahjalalIslamiBankLtd || 0) +
    parseInt(amount?.AlarafahIslamiBankLtd || 0) +
    parseInt(amount?.UnitedCommercialBankLtd || 0) +
    parseInt(amount?.SocialIslamiBankLtd || 0) +
    parseInt(amount?.MercentileBankLtd || 0) +
    parseInt(amount?.NationalBankLtdGulshan || 0) +
    parseInt(amount?.NationalBankLtdJoina || 0) +
    parseInt(amount?.SonaliBankLtd || 0) +
    parseInt(amount?.UttaraBankLtd || 0) +
    parseInt(amount?.AgraniBankLtd || 0) +
    parseInt(amount?.BangladeshKrishiBank || 0) +
    parseInt(amount?.ABBankLtd || 0) +
    parseInt(amount?.JanataBankLtd || 0) +
    parseInt(amount?.RupaliBankLtd || 0);

  // Balance with Savings Account
  const savings_account = parseInt(amount?.BankAlfalahLtd || 0);
  // Balance for Feedmill operation Bank (SFM & RFM)
  const sfm_rfm = parseInt(amount?.DhakaBankLtd || 0);

  const BankAlfalahLtd = parseInt(amount?.BankAlfalahLtd || 0);
  const HSBC = parseInt(amount?.HSBC || 0);
  const SCB = parseInt(amount?.SCB || 0);
  const WooriBank = parseInt(amount?.WooriBank || 0);
  const CitibankNA = parseInt(amount?.CitibankNA || 0);
  const HabibBankLtd = parseInt(amount?.HabibBankLtd || 0);
  const EasternBankLtd = parseInt(amount?.EasternBankLtd || 0);
  const BRACBankLtd = parseInt(amount?.BRACBankLtd || 0);

  const lc =
    // parseInt(BankAlfalahLtd > 0 ? BankAlfalahLtd : 0) +
    parseInt(HSBC > 0 ? HSBC : 0) +
    parseInt(SCB > 0 ? SCB : 0) +
    parseInt(WooriBank > 0 ? WooriBank : 0) +
    parseInt(CitibankNA > 0 ? CitibankNA : 0) +
    parseInt(HabibBankLtd > 0 ? HabibBankLtd : 0) +
    parseInt(EasternBankLtd > 0 ? EasternBankLtd : 0) +
    parseInt(BRACBankLtd > 0 ? BRACBankLtd : 0) +
    parseInt(amount?.PrimeBankLtd || 0) +
    parseInt(amount?.TheCityBankLtd || 0) +
    parseInt(amount?.StateBankOfIndia || 0) +
    parseInt(amount?.DutchBanglaBankLtd || 0) +
    parseInt(amount?.MIDLANDBankLimited || 0);

  const od =
    parseInt(BankAlfalahLtd < 0 ? BankAlfalahLtd : 0) +
    parseInt(HSBC < 0 ? HSBC : 0) +
    parseInt(SCB < 0 ? SCB : 0) +
    parseInt(WooriBank < 0 ? WooriBank : 0) +
    parseInt(CitibankNA < 0 ? CitibankNA : 0) +
    parseInt(HabibBankLtd < 0 ? HabibBankLtd : 0) +
    parseInt(EasternBankLtd < 0 ? EasternBankLtd : 0) +
    parseInt(BRACBankLtd < 0 ? BRACBankLtd : 0) +
    parseInt(amount?.DutchBanglaBankLtdOD || 0) +
    parseInt(amount?.TheCityBankLtdOD || 0) +
    parseInt(amount?.PrimeBankLtdOD || 0) +
    parseInt(amount?.StateBankOfIndiaOD || 0);

  const scb =
    parseInt(amount?.PubaliBankLtd || 0) +
    parseInt(amount?.IslamiBankBangladeshLtd || 0) +
    parseInt(amount?.ShahjalalIslamiBankLtd || 0) +
    parseInt(amount?.AlarafahIslamiBankLtd || 0) +
    parseInt(amount?.UnitedCommercialBankLtd || 0) +
    parseInt(amount?.SocialIslamiBankLtd || 0) +
    parseInt(amount?.MercentileBankLtd || 0) +
    parseInt(amount?.NationalBankLtdGulshan || 0) +
    parseInt(amount?.NationalBankLtdJoina || 0) +
    parseInt(amount?.SonaliBankLtd || 0) +
    parseInt(amount?.UttaraBankLtd || 0) +
    parseInt(amount?.AgraniBankLtd || 0) +
    parseInt(amount?.BangladeshKrishiBank || 0) +
    parseInt(amount?.ABBankLtd || 0) +
    parseInt(amount?.JanataBankLtd || 0) +
    parseInt(amount?.RupaliBankLtd || 0);

  const date = selectDate;
  const calculation = {
    date,
    total,
    savings_account,
    sfm_rfm,
    lc,
    od,
    scb,
  };
  // console.log(calculation);
  useEffect(() => {
    if (selectDate != "") {
      fetch("https://agapl-bank-server.onrender.com/addBanksData", {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(calculation),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  }, [amount]);

  return (
    <div className="border p-5 rounded-t-lg overflow-x-auto">
      <div className="overflow-x-auto">
        <div className="flex justify-center mb-2">
          <span className="btn bg-gray-800 text-white cursor-not-allowed hover:bg-gray-800 tracking-widest">
            {selectDate}
          </span>
        </div>

        <table className="table ">
          {/* head */}
          <thead className="tracking-wider text-gray-700">
            <tr>
              <th></th>
              <th>Operation Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody className="tracking-widest text-gray-800 text-sm from-neutral-700">
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Total Amount</td>
              <td>{total}</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Balance with Savings Account</td>
              <td>{savings_account}</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Balance for Feedmill operation Bank (SFM & RFM)</td>
              <td>{sfm_rfm}</td>
            </tr>
            {/* row 4 */}
            <tr>
              <th>4</th>
              <td>Balance with LC facility & Local Payment Bank</td>
              <td>{lc}</td>
            </tr>
            {/* row 5 */}
            <tr>
              <th>5</th>
              <td>Balance with OD Account</td>
              <td>{od}</td>
            </tr>
            {/* row 6 */}
            <tr>
              <th>6</th>
              <td>Balance with sales Collection Bank Account</td>
              <td>{scb}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DailyBalanceCalculation;
