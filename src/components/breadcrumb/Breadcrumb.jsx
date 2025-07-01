// src/components/Breadcrumb.jsx
import React from "react";
import { FiHome, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "All Category", path: "/category" },
  ];

  return (
    <div className="w-full  py-3 ">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex items-center text-sm">
          <Link
            to="/"
            className="flex items-center text-gray-600 hover:text-gray-900 "
          >
            Home
          </Link>

          {breadcrumbs.slice(1).map((crumb, index) => (
            <React.Fragment key={index}>
              <FiChevronRight className="mx-2 text-gray-400" size={14} />
              {index === breadcrumbs.length - 2 ? (
                <span className="text-gray-500 font-medium">{crumb.name}</span>
              ) : (
                <Link
                  to={crumb.path}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {crumb.name}
                </Link>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
