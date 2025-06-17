import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id='contact' className="relative bg-[#002357] text-white pt-12 pb-6 px-4 py-10 bg-[url('/services/footer-bg.png')] bg-cover bg-center">
      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-[#002357]/80 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Information:</h3>
          <p className="flex items-center gap-2 mb-2">
            <FaEnvelope className="text-orange-400" />
            saidigitalservices22@gmail.com
          </p>
          <p className="flex items-center gap-2 mb-2">
            <FaPhone className="text-orange-400" />
            +91 8148147110, +91 8015476919
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-orange-400" />
            No.54, First Floor, J. N. Road, Anakaputhur, Chennai – 600070.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end justify-between">
          <div className="flex gap-4 mb-4">
            <a href="#" aria-label="Facebook" className="text-orange-400 text-2xl"><FaFacebook /></a>
            <a href="#" aria-label="YouTube" className="text-orange-400 text-2xl"><FaYoutube /></a>
            <a href="#" aria-label="Instagram" className="text-orange-400 text-2xl"><FaInstagram /></a>
            <a href="#" aria-label="Twitter" className="text-orange-400 text-2xl"><FaTwitter /></a>
          </div>
          <p className="text-sm text-gray-300">© 2025 Created by Sai Digital Services</p>
        </div>
      </div>
    </footer>
  );
}
