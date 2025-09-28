export default function SidebarProfile({ onSelect }) {
  return (
    <div className="h-screen w-64 bg-blue-200 text-blue-900 p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-6">Profile Menu</h2>
      <nav className="flex flex-col gap-4">
        <button onClick={() => onSelect("profile")} className="hover:text-blue-600">
          👤 Profile
        </button>
        <button onClick={() => onSelect("healthTips")} className="hover:text-blue-600">
          💡 Health Tips
        </button>
        <button onClick={() => onSelect("savedTips")} className="hover:text-blue-600">
          💾 Saved Tips
        </button>
      </nav>
    </div>
  );
}


// // src/components/SidebarProfile.jsx
// export default function SidebarProfile({ activeTab, onSelect }) {
//   const getButtonClass = (tab) =>
//     `text-left py-2 px-3 rounded hover:bg-blue-300 transition-colors ${
//       activeTab === tab ? "bg-blue-300 font-semibold" : ""
//     }`;

//   return (
//     <div className="h-screen w-64 bg-blue-200 text-blue-900 p-6 shadow-md flex flex-col">
//       <h2 className="text-2xl font-bold mb-6">Profile Menu</h2>
//       <nav className="flex flex-col gap-2 mt-2">
//         <button onClick={() => onSelect("profile")} className={getButtonClass("profile")}>
//           👤 Profile
//         </button>
//         <button onClick={() => onSelect("healthTips")} className={getButtonClass("healthTips")}>
//           💡 Health Tips
//         </button>
//         <button onClick={() => onSelect("savedTips")} className={getButtonClass("savedTips")}>
//           💾 Saved Tips
//         </button>
//       </nav>
//     </div>
//   );
// }
