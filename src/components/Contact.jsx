// import React from "react";
// import { CpuChipIcon } from "@heroicons/react/24/solid";
// import { EnvelopeIcon } from "@heroicons/react/16/solid";
// import { PhoneIcon } from "@heroicons/react/16/solid";
// import { PencilSquareIcon } from "@heroicons/react/16/solid";

// const Contact = () => {
//   return (
//     <main id="contact" className="py-10 text-gray-400">
//       <div className="text-center mb-10">
//         <CpuChipIcon className="w-10 inline-block mb-4" />
//         <h1 className="text-3xl sm:text-4xl font-medium title-font mb-4">
//           Contact Me
//         </h1>
//       </div>
//       <section className="relative">
//         <div className="container px-40 mx-auto flex sm:flex-nowrap flex-wrap">
//           <div className="lg:w-1/2 px-6 mt-4 lg:mt-12">
//             <h2 className="title-font font-semibold text-white tracking-widest text-xs">
//               <EnvelopeIcon className="w-6 inline-block mb-4" />
//             </h2>
//             <a href="mailto:veenaurkude10@gmail.com" className="hover:text-indigo-400 leading-relaxed">
//               veenaurkude10@gmail.com
//             </a>
//             <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
//               <PhoneIcon className="w-6 inline-block mb-4" />
//             </h2>
//             <a href="tel:+91-8793635754" className="hover:text-indigo-400 leading-relaxed">+91-8793635754</a>

//               <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4"> 
//                 <PencilSquareIcon className="w-6 inline-block mb-4"  />
//               </h2>
//             <p className="leading-relaxed text-justify">
//               I'm interested for new opportunities - especially ambitious or large projects. However, if you have any other questions, please connect with me for further discussion.
//             </p>

//           </div>

//           <form
//             name="contact"
//             method="POST"
//             data-netlify="true"
//             className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
//           >
           
//             <div className="relative mb-4 " >
//               <label htmlFor="name" className="leading-7 text-sm text-gray-400">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             </div>
//             <div className="relative mb-4">
//               <label
//                 htmlFor="email"
//                 className="leading-7 text-sm text-gray-400"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             </div>
//             <div className="relative mb-4">
//               <label
//                 htmlFor="message"
//                 className="leading-7 text-sm text-gray-400"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-20 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//               />
//             </div>
//             <button
//               type="submit"
//               className="text-white bg-sky-500/50 border-0 py-2 px-6 focus:outline-none hover:bg-sky-500/75 rounded text-lg"
//             >
//               Submit
//             </button>
//           </form>
          
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Contact;


import React from "react";
import { CpuChipIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { PhoneIcon } from "@heroicons/react/16/solid";
import { PencilSquareIcon } from "@heroicons/react/16/solid";

const Contact = () => {
  return (
    <main id="contact" className="py-10 text-gray-400">
      <div className="text-center mb-10">
        <CpuChipIcon className="w-10 inline-block mb-4" />
        <h1 className="text-3xl sm:text-4xl font-medium title-font mb-4">
          Contact Me
        </h1>
      </div>
      <section className="relative">
        <div className="container px-40 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-12">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              <EnvelopeIcon className="w-6 inline-block mb-4" />
            </h2>
            <a href="mailto:veenaurkude10@gmail.com" className="hover:text-indigo-400 leading-relaxed">
              veenaurkude10@gmail.com
            </a>
            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
              <PhoneIcon className="w-6 inline-block mb-4" />
            </h2>
            <a href="tel:+91-8793635754" className="hover:text-indigo-400 leading-relaxed">+91-8793635754</a>

            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4"> 
              <PencilSquareIcon className="w-6 inline-block mb-4" />
            </h2>
            <p className="leading-relaxed text-justify">
              I'm interested in new opportunities - especially ambitious or large projects. However, if you have any other questions, please connect with me for further discussion.
            </p>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-20 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-sky-500/50 border-0 py-2 px-6 focus:outline-none hover:bg-sky-500/75 rounded text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
