export default function DropDown(){
  return(
    <>
      <div>
        <div className="relative mb-5" data-te-dropdown-ref>
          <a
            className="flex items-center whitespace-nowrap rounded bg-green-300 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-300 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-green-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none w-40 h-10 self-start py-4 font-bold text-black md:py-0"
            href="#"
            type="button"
            id="dropdownMenuButton2"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            data-te-ripple-init
            data-te-ripple-color="light">
            All Photos
            <span className="ml-2 w-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd" />
              </svg>
            </span>
          </a>
          <ul
            className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButton2"
            data-te-dropdown-menu-ref>
            <li>
              <a
                className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                href="#"
                data-te-dropdown-item-ref
                >Events</a>
            </li>
            <li>
              <a
                className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                href="#"
                data-te-dropdown-item-ref
                >Community</a>
            </li>
            <li>
              <a
                className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                href="#"
                data-te-dropdown-item-ref
                >Hangout</a>
            </li>
          </ul>
        </div>
      </div>


        
   </>
   )
 }


// import { Menu, Transition } from '@headlessui/react'
// import { Fragment, useEffect, useRef, useState } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

// export default function Example() {
//   return (
//     <div className="top-36 w-26 text-right z-50">
//       <Menu as="div" className="relative inline-block text-left">
//         <div>
//           <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
//             Options
//             <ChevronDownIcon
//               className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
//               aria-hidden="true"
//             />
//           </Menu.Button>
//         </div>
//         <Transition
//           as={Fragment}
//           enter="transition ease-out duration-100"
//           enterFrom="transform opacity-0 scale-95"
//           enterTo="transform opacity-100 scale-100"
//           leave="transition ease-in duration-75"
//           leaveFrom="transform opacity-100 scale-100"
//           leaveTo="transform opacity-0 scale-95"
//         >
//           <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//             <div className="px-1 py-1 ">
//               <Menu.Item>
//                 {({ active }) => (
//                   <button
//                     className={`${
//                       active ? 'bg-violet-500 text-white' : 'text-gray-900'
//                     } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
//                   >
//                     {active ? (
//                       <EditActiveIcon
//                         className="mr-2 h-5 w-5"
//                         aria-hidden="true"
//                       />
//                     ) : (
//                       <EditInactiveIcon
//                         className="mr-2 h-5 w-5"
//                         aria-hidden="true"
//                       />
//                     )}
//                     Edit
//                   </button>
//                 )}
//               </Menu.Item>
//               <Menu.Item>
//                 {({ active }) => (
//                   <button
//                     className={`${
//                       active ? 'bg-violet-500 text-white' : 'text-gray-900'
//                     } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
//                   >
//                     {active ? (
//                       <DuplicateActiveIcon
//                         className="mr-2 h-5 w-5"
//                         aria-hidden="true"
//                       />
//                     ) : (
//                       <DuplicateInactiveIcon
//                         className="mr-2 h-5 w-5"
//                         aria-hidden="true"
//                       />
//                     )}
//                     Duplicate
//                   </button>
//                 )}
//               </Menu.Item>
//             </div>
//             <div className="px-1 py-1">
//               <Menu.Item>
//                 {({ active }) => (
//                   <button
//                     className={`${
//                       active ? 'bg-violet-500 text-white' : 'text-gray-900'
//                     } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
//                   >
//                     {active ? (
//                       <ArchiveActiveIcon
//                         className="mr-2 h-5 w-5"
//                         aria-hidden="true"
//                       />
//                     ) : (
//                       <ArchiveInactiveIcon
//                         className="mr-2 h-5 w-5"
//                         aria-hidden="true"
//                       />
//                     )}
//                     Archive
//                   </button>
//                 )}
//               </Menu.Item>
//               <Menu.Item>
//                 {({ active }) => (
//                   <button
//                     className={`${
//                       active ? 'bg-violet-500 text-white' : 'text-gray-900'
//                     } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
//                   >
//                     {active ? (
//                       <MoveActiveIcon
//                         className="mr-2 h-5 w-5"
//                         aria-hidden="true"
//                       />
//                     ) : (
//                       <MoveInactiveIcon
//                         className="mr-2 h-5 w-5"
//                         aria-hidden="true"
//                       />
//                     )}
//                     Move
//                   </button>
//                 )}
//               </Menu.Item>
//             </div>
//             <div className="px-1 py-1">
//               <Menu.Item>
//                 {({ active }) => (
//                   <button
//                     className={`${
//                       active ? 'bg-violet-500 text-white' : 'text-gray-900'
//                     } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
//                   >
//                     {active ? (
//                       <DeleteActiveIcon
//                         className="mr-2 h-5 w-5 text-violet-400"
//                         aria-hidden="true"
//                       />
//                     ) : (
//                       <DeleteInactiveIcon
//                         className="mr-2 h-5 w-5 text-violet-400"
//                         aria-hidden="true"
//                       />
//                     )}
//                     Delete
//                   </button>
//                 )}
//               </Menu.Item>
//             </div>
//           </Menu.Items>
//         </Transition>
//       </Menu>
//     </div>
//   )
// }

// function EditInactiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M4 13V16H7L16 7L13 4L4 13Z"
//         fill="#EDE9FE"
//         stroke="#A78BFA"
//         strokeWidth="2"
//       />
//     </svg>
//   )
// }

// function EditActiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M4 13V16H7L16 7L13 4L4 13Z"
//         fill="#8B5CF6"
//         stroke="#C4B5FD"
//         strokeWidth="2"
//       />
//     </svg>
//   )
// }

// function DuplicateInactiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M4 4H12V12H4V4Z"
//         fill="#EDE9FE"
//         stroke="#A78BFA"
//         strokeWidth="2"
//       />
//       <path
//         d="M8 8H16V16H8V8Z"
//         fill="#EDE9FE"
//         stroke="#A78BFA"
//         strokeWidth="2"
//       />
//     </svg>
//   )
// }

// function DuplicateActiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M4 4H12V12H4V4Z"
//         fill="#8B5CF6"
//         stroke="#C4B5FD"
//         strokeWidth="2"
//       />
//       <path
//         d="M8 8H16V16H8V8Z"
//         fill="#8B5CF6"
//         stroke="#C4B5FD"
//         strokeWidth="2"
//       />
//     </svg>
//   )
// }

// function ArchiveInactiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect
//         x="5"
//         y="8"
//         width="10"
//         height="8"
//         fill="#EDE9FE"
//         stroke="#A78BFA"
//         strokeWidth="2"
//       />
//       <rect
//         x="4"
//         y="4"
//         width="12"
//         height="4"
//         fill="#EDE9FE"
//         stroke="#A78BFA"
//         strokeWidth="2"
//       />
//       <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
//     </svg>
//   )
// }

// function ArchiveActiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect
//         x="5"
//         y="8"
//         width="10"
//         height="8"
//         fill="#8B5CF6"
//         stroke="#C4B5FD"
//         strokeWidth="2"
//       />
//       <rect
//         x="4"
//         y="4"
//         width="12"
//         height="4"
//         fill="#8B5CF6"
//         stroke="#C4B5FD"
//         strokeWidth="2"
//       />
//       <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
//     </svg>
//   )
// }

// function MoveInactiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
//       <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
//       <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
//     </svg>
//   )
// }

// function MoveActiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
//       <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
//       <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
//     </svg>
//   )
// }

// function DeleteInactiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect
//         x="5"
//         y="6"
//         width="10"
//         height="10"
//         fill="#EDE9FE"
//         stroke="#A78BFA"
//         strokeWidth="2"
//       />
//       <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
//       <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
//     </svg>
//   )
// }

// function DeleteActiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect
//         x="5"
//         y="6"
//         width="10"
//         height="10"
//         fill="#8B5CF6"
//         stroke="#C4B5FD"
//         strokeWidth="2"
//       />
//       <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
//       <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
//     </svg>
//   )
// }