// const Dashboard = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 p-6">
//       <header className="bg-gradient-to-r from-green-800 to-green-600 text-white py-6 px-8 mb-8 rounded-lg shadow-lg">
//         {/* <h1 className="text-4xl font-bold">Admin Dashboard</h1> */}
//         <h1 className="text-4xl font-bold">
//           <span
//             style={{
//               color: "white",
//               textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//               fontWeight: "bold",
//             }}
//           >
//             Admin
//           </span>{" "}
//           <span
//             style={{
//               color: "lightgreen",
//               textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//               fontWeight: "bold",
//             }}
//           >
//             Dashboard
//           </span>
//         </h1>

//         <p className="text-sm opacity-80 mt-2">
//           Streamline your platform management with ease.
//         </p>
//       </header>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* Overview Cards */}
//         <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 flex items-center gap-4">
//           <img
//             src="https://via.placeholder.com/50"
//             alt="Users"
//             className="w-16 h-16 rounded-full border-2 border-green-500"
//           />
//           <div>
//             <h2 className="text-lg font-semibold text-gray-800">Total Users</h2>
//             <p className="text-4xl font-extrabold text-gray-900">120</p>
//           </div>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 flex items-center gap-4">
//           <img
//             src="https://via.placeholder.com/50"
//             alt="Orders"
//             className="w-16 h-16 rounded-full border-2 border-blue-500"
//           />
//           <div>
//             <h2 className="text-lg font-semibold text-gray-800">Orders</h2>
//             <p className="text-4xl font-extrabold text-gray-900">75</p>
//           </div>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 flex items-center gap-4">
//           <img
//             src="https://via.placeholder.com/50"
//             alt="Revenue"
//             className="w-16 h-16 rounded-full border-2 border-yellow-500"
//           />
//           <div>
//             <h2 className="text-lg font-semibold text-gray-800">Revenue</h2>
//             <p className="text-4xl font-extrabold text-gray-900">$4500</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Recent Orders */}
//         <div className="bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">
//             Recent Orders
//           </h2>
//           <ul className="divide-y divide-gray-200">
//             <li className="py-4 flex justify-between items-center">
//               <div className="flex items-center gap-4">
//                 <img
//                   src="https://via.placeholder.com/40"
//                   alt="Order"
//                   className="w-12 h-12 rounded"
//                 />
//                 <span className="text-gray-700 font-medium">Order #123</span>
//               </div>
//               <span className="text-gray-800 font-semibold">$150</span>
//             </li>
//             <li className="py-4 flex justify-between items-center">
//               <div className="flex items-center gap-4">
//                 <img
//                   src="https://via.placeholder.com/40"
//                   alt="Order"
//                   className="w-12 h-12 rounded"
//                 />
//                 <span className="text-gray-700 font-medium">Order #124</span>
//               </div>
//               <span className="text-gray-800 font-semibold">$200</span>
//             </li>
//             <li className="py-4 flex justify-between items-center">
//               <div className="flex items-center gap-4">
//                 <img
//                   src="https://via.placeholder.com/40"
//                   alt="Order"
//                   className="w-12 h-12 rounded"
//                 />
//                 <span className="text-gray-700 font-medium">Order #125</span>
//               </div>
//               <span className="text-gray-800 font-semibold">$300</span>
//             </li>
//           </ul>
//           <p className="mt-6 text-gray-600">
//             Easily manage recent orders to ensure smooth operations and client
//             satisfaction.
//           </p>
//         </div>

//         {/* User Activity */}
//         <div className="bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">
//             User Activity
//           </h2>
//           <ul className="divide-y divide-gray-200">
//             <li className="py-4 flex justify-between items-center">
//               <div className="flex items-center gap-4">
//                 <img
//                   src="https://via.placeholder.com/40"
//                   alt="User"
//                   className="w-12 h-12 rounded-full border-2 border-green-500"
//                 />
//                 <span className="text-gray-700 font-medium">John Doe</span>
//               </div>
//               <span className="text-gray-500">Logged in</span>
//             </li>
//             <li className="py-4 flex justify-between items-center">
//               <div className="flex items-center gap-4">
//                 <img
//                   src="https://via.placeholder.com/40"
//                   alt="User"
//                   className="w-12 h-12 rounded-full border-2 border-blue-500"
//                 />
//                 <span className="text-gray-700 font-medium">Jane Smith</span>
//               </div>
//               <span className="text-gray-500">Placed an order</span>
//             </li>
//             <li className="py-4 flex justify-between items-center">
//               <div className="flex items-center gap-4">
//                 <img
//                   src="https://via.placeholder.com/40"
//                   alt="User"
//                   className="w-12 h-12 rounded-full border-2 border-yellow-500"
//                 />
//                 <span className="text-gray-700 font-medium">Tom Brown</span>
//               </div>
//               <span className="text-gray-500">Updated profile</span>
//             </li>
//           </ul>
//           <p className="mt-6 text-gray-600">
//             Stay updated with user activities to boost engagement and
//             performance.
//           </p>
//         </div>
//       </div>

//       <div className="mt-12">
//         {/* Footer */}
//         <footer className="bg-gradient-to-r from-green-800 to-green-600 text-white rounded-lg p-8 text-center shadow-md">
//           <p className="text-sm font-bold">
//             &copy; 2024 Admin Dashboard. All rights reserved.
//           </p>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { useState, useEffect, useContext } from "react";
// import { backendUrl } from "../../App";
import axios from "axios";
import { toast } from "react-toastify";
import { ExpenseContext } from "../../Context/ExpenseContext";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
const Dashboard = () => {
  const [orders, setOrders] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const { revenue } = useContext(ExpenseContext);

  useEffect(() => {
    fetchOrders();
    fetchUserCount();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/order/order-count`);
      if (response.status === 200) {
        setOrders(Number(response.data.orderCount));
      } else {
        toast.error("Failed to fetch orders.");
      }
    } catch (error) {
      toast.error(
        "Error fetching orders: " +
          (error?.response?.data?.error || error.message)
      );
    }
  };

  const fetchUserCount = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/user/user-count`);
      if (response.status === 200) {
        setUserCount(response.data.userCount);
      }
    } catch (error) {
      console.error("Error fetching user count:", error);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center overflow-x-hidden px-3 sm:px-4"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/0a/f9/72/0af9721bc5afb32a9f2a0cdf2fe84fd7.jpg')",
      }}
    >
      <div className="max-w-6xl mx-auto py-6 sm:py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-800 mb-10 mt-5 text-center">
          PlantPro Control Panel
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[
            {
              title: "Total Users",
              value: userCount,
              color: "from-green-400 to-green-600",
              img: "https://img.freepik.com/premium-vector/person-with-green-blue-logo-that-says-name_1076610-66914.jpg",
            },
            {
              title: "Orders",
              value: orders,
              color: "from-blue-400 to-blue-600",
              img: "https://png.pngtree.com/background/20231031/original/pngtree-eco-friendly-shopping-cart-icon-in-3d-render-isolation-against-white-picture-image_5812683.jpg",
            },
            {
              title: "Revenue",
              value: `$${revenue}`,
              color: "from-yellow-400 to-yellow-600",
              img: "https://img.freepik.com/premium-photo/closeup-potted-plant-table_964463-1715.jpg?w=360",
            },
          ].map(({ title, value, color, img }, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${color} text-white shadow-lg rounded-lg p-4 sm:p-6 transition-transform transform hover:scale-105 flex items-center gap-4`}
            >
              <div className="flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full">
                <img src={img} alt={title} className="w-10 h-10 rounded-full" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold">{title}</h2>
                <p className="text-2xl sm:text-3xl font-extrabold">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Top Products */}
          <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 backdrop-blur-md bg-opacity-60 transition-transform transform hover:scale-105">
            <h2 className="text-xl sm:text-2xl text-center font-extrabold text-green-800 mb-4">
              Most Selling Top Products!
            </h2>

            {[
              {
                name: "Red Rose",
                desc: "Red Rose is known for its beauty and symbolism of love. It is often used in bouquets and decorative arrangements.",
                img: "https://picture.lk/files/preview/960x1713/11711313452uqglh6tnqouvkdyvzjzhnzah68asf5k4ik01e5ru3fpgmbstbwqakovf1mekysq881tt9owkowia8g7wjiytzhvehnveknxk80dg.jpg",
              },
              {
                name: "Tulip",
                desc: "Tulips are spring-blooming flowers known for their vibrant colors and smooth petals. They make an ideal gift for any occasion.",
                img: "https://i.pinimg.com/736x/53/b8/ff/53b8ff5238b68e410dbfd150d3fdd754.jpg",
              },
              {
                name: "Jasmine",
                desc: "Jasmine flowers are popular for their fragrant aroma and are commonly used in perfumes and traditional medicine.",
                img: "https://img.freepik.com/premium-photo/floral-background-white-terry-jasmine-flower-petals-macro-flowers-backdrop-holiday-design_459897-4553.jpg?w=360",
              },
              {
                name: "AloeVera",
                desc: "Aloe Vera is a popular succulent used for its healing properties. It’s commonly used in skincare and health remedies.",
                img: "https://www.ikea.com/nl/en/images/products/aloe-vera-potted-plant-aloe__1368841_pe957973_s5.jpg?f=s",
              },
              {
                name: "Sunflower",
                desc: "Sunflowers are large and bright flowers that symbolize happiness and positivity. They are widely known for their cheerful appearance.",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJxZvRq8QVqH3f1y3ZLDbiwv-LlmG7RS0Pg&s",
              },
            ].map((product, index) => (
              <div className="flex items-start mb-4" key={index}>
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-md"
                />
                <div className="ml-3">
                  <p className="font-semibold text-green-800">{product.name}</p>
                  <p className="text-gray-900 text-sm text-justify">{product.desc}</p>
                </div>
              </div>
            ))}

            <p className="text-gray-900 text-sm text-justify mt-4">
              Green Heaven's most selling products are carefully curated to meet
              the needs of our customers. Our collection includes vibrant
              flowers like the Red Rose, Tulip, and Jasmine, each known for
              their unique beauty and fragrance. We also offer plants like Aloe
              Vera and Sunflower, which are not only visually appealing but also
              offer health benefits.
            </p>
          </div>

          {/* Video Section */}
          <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 backdrop-blur-md bg-opacity-60 transition-transform transform hover:scale-105">
            <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-4 text-center">
              Watch the Latest Promotional Video for Our GreenHeaven Products🌿
            </h2>
            <div className="w-full">
              <video
                className="rounded-lg w-full max-w-full"
                controls
                muted
                style={{ border: "4px solid #4caf50" }}
              >
                <source src="/my.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-green-800 to-green-600 text-white rounded-lg p-4 sm:p-6 text-center shadow-md mt-12">
          <p className="text-xs sm:text-sm font-bold">
            &copy; 2024 Green Heaven Dashboard. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
