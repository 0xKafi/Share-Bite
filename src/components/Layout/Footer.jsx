import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-neutral-100 mt-20 py-12 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <p className="text-xl font-semibold">ShareBite</p>
          </div>
          <p className="text-sm">Level-5, 14, Palobi, Mirpur-12, Dhaka</p>
          <p className="text-sm">Helpline: 0112295265 , 01152-850428</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Legal</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Terms of use</a></li>
            <li><a href="#" className="hover:underline">Privacy policy</a></li>
            <li><a href="#" className="hover:underline">Cookie policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 fill-current hover:text-blue-400" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.64l.36-4h-4v-1.67c0-.96.19-1.33 1.11-1.33h2.89v-5h-3.81c-3.6 0-5.19 1.58-5.19 4.61v3.39z" />
              </svg>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 fill-current hover:text-sky-400" viewBox="0 0 24 24">
                <path d="M24 4.56c-.88.39-1.83.65-2.83.77 1.02-.61 1.8-1.57 2.17-2.72-.95.56-2 .97-3.13 1.2-.9-.96-2.18-1.55-3.6-1.55-3.18 0-5.52 2.97-4.8 6.05C7.09 8.66 3.46 6.71 1.03 3.73c-1.29 2.21-.67 5.11 1.52 6.57-.81-.03-1.56-.25-2.23-.61-.05 2.28 1.58 4.41 3.95 4.89-.69.19-1.45.23-2.22.08.63 1.96 2.44 3.38 4.6 3.42-2.07 1.62-4.68 2.35-7.29 2.04 2.18 1.4 4.77 2.21 7.55 2.21 9.14 0 14.31-7.72 13.99-14.65.96-.7 1.8-1.57 2.46-2.55z" />
              </svg>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 fill-current hover:text-red-500" viewBox="0 0 24 24">
                <path d="M19.6 3.18c-3.6-.25-11.63-.25-15.23 0-3.9.27-4.36 2.62-4.39 8.82.03 6.19.48 8.55 4.39 8.82 3.6.25 11.63.25 15.23 0 3.9-.27 4.36-2.62 4.39-8.82-.03-6.19-.48-8.55-4.39-8.82zM9 16V8l8 4-8 4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
