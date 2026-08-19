import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold text-lg mb-1">Find Us on</h2>
      <p className="text-sm text-gray-500 mb-4">
        Follow us on social media
      </p>

      <div className="space-y-3">
        {/* Facebook */}
        <button className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-base-100 hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
            <FaFacebook className="text-blue-600 text-xl group-hover:scale-110 transition-transform" />
          </div>

          <div className="text-left">
            <p className="font-semibold text-sm">Facebook</p>
            <p className="text-xs text-gray-400">Follow us</p>
          </div>

          <span className="ml-auto text-gray-400 group-hover:text-blue-600">
            →
          </span>
        </button>

        {/* Twitter */}
        <button className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-base-100 hover:shadow-md hover:border-sky-200 transition-all duration-300 group">
          <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center">
            <FaTwitter className="text-sky-500 text-xl group-hover:scale-110 transition-transform" />
          </div>

          <div className="text-left">
            <p className="font-semibold text-sm">Twitter</p>
            <p className="text-xs text-gray-400">Follow us</p>
          </div>

          <span className="ml-auto text-gray-400 group-hover:text-sky-500">
            →
          </span>
        </button>

        {/* Instagram */}
        <button className="w-full flex items-center gap-3 p-2 rounded-lg border border-gray-200 bg-base-100 hover:shadow-md hover:border-pink-200 transition-all duration-300 group">
          <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center">
            <FaInstagram className="text-pink-500 text-xl group-hover:scale-110 transition-transform" />
          </div>

          <div className="text-left">
            <p className="font-semibold text-sm">Instagram</p>
            <p className="text-xs text-gray-400">Follow us</p>
          </div>

          <span className="ml-auto text-gray-400 group-hover:text-pink-500">
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default FindUs;