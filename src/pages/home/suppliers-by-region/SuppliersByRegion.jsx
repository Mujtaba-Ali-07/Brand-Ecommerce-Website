import React from "react";
import Us from "../../../assets/flags/us.png";
import Ch from "../../../assets/flags/ch.png";
import Au from "../../../assets/flags/au.png";
import Ae from "../../../assets/flags/ae.png";
import Ru from "../../../assets/flags/ru.png";
import Fr from "../../../assets/flags/fr.png";
import Dm from "../../../assets/flags/dm.png";
import Pk from "../../../assets/flags/pk.png";

const SuppliersByRegion = () => {
  const suppliers = [
    { Image: Us, country: "UAE Emirates", email: "info@uae.com" },
    { Image: Ch, country: "China", email: "info@switzerland.com" },
    { Image: Au, country: "Australia", email: "info@australia.com" },
    { Image: Ae, country: "Arab Emirates", email: "info@uae.com" },
    { Image: Ru, country: "Russia", email: "info@russia.com" },
    { Image: Fr, country: "France", email: "info@france.com" },
    { Image: Dm, country: "Denmark", email: "info@denmark.com" },
    { Image: Pk, country: "Pakistan", email: "info@pakistan.com" },
  ];

  return (
    <div className="container lg:mt-6 mt-3">
      <h2 className="lg:text-4xl text-2xl font-bold  mb-8 text-gray-800">
        Suppliers by region
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {suppliers.map((supplier, index) => (
          <div
            key={index}
            className="   p-4 flex items-center justify-center min-h-[100px] "
          >
            <div className="text-lg font-bold text-blue-600 mb-1">
              <img
                src={supplier.Image}
                alt={supplier.country}
                className="w-12 h-8"
              />
            </div>
            <div className="  flex ml-1 flex-col items-center justify-between">
              <p className="text-md font-[500]">{supplier.country}</p>
              <p className="text-xs text-gray-500">{supplier.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuppliersByRegion;
