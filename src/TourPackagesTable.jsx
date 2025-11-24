import React from 'react'

function TourPackagesTable() {
const tourPackages = [
  { tour: "Hunza Valley under Shades of Rakaposhi Peak", days: "6 Days", price: "Rs. 15,000" },
  { tour: "Foodie Swat Kalam Tour Packages", days: "7 Days", price: "Rs. 15,000" },
  { tour: "Neelum Valley Pure Kashmir Delight", days: "3 Days", price: "Rs. 5,000" },
  { tour: "Famous Naran Kaghan Tour Packages", days: "3 Days", price: "Rs. 9,000" },
  { tour: "Skardu Valley, that’s now International -Wow!", days: "3 Days", price: "Rs. 9,000" },
  { tour: "Magnificent Luxus Hunza Tour", days: "4 Days", price: "Rs.5,000" },
  { tour: "Khoj Skardu Tour-Unflod the mystery", days: "4 Days", price: "Rs. 5,000" },
  { tour: "Famree Resort Hunza Tour", days: "7 Days", price: "Rs. 25,000" },
  { tour: "Cherry Blossom Skardu Tour 2025", days: "7 Days", price: "Rs.15,000" },
  { tour: "Katpana Glamp Tour-A Night under Galaxy", days: "6 Days", price: "Rs. 10,000" },
  { tour: "Relaxing ayun fort inn tour", days: "4 Days", price: "Rs. 8500" },
  { tour: "Delightful Murree & Nathiagali Tours", days: "3 Days", price: "Rs. 7,000" },
];

  return (
     <section className="container my-5">
      <h1 className="mb-4">List of Pakistan Tour Packages 2025 With Prices</h1>

      <div className="table-responsive shadow-sm">
        <table className="table mb-0 align-middle">
          <thead className="bg-success text-white">
            <tr>
              <th style={{ minWidth: "55%" }}>Tour</th>
              <th style={{ width: "18%" }} className="text-center">No. of Days</th>
              <th style={{ width: "27%" }} className="text-center">Price per person*</th>
            </tr>
          </thead>
          <tbody>
            {tourPackages.map((pkg, idx) => (
              <tr key={idx}>
                <td>{pkg.tour}</td>
                <td className="text-center">{pkg.days}</td>
                <td className="text-center">{pkg.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default TourPackagesTable