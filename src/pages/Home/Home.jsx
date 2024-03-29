import img from "../../assets/img/div.MuiStack-root (1).png";
import img1 from "../../assets/img/div.MuiStack-root (2).png";
import img2 from "../../assets/img/div.MuiStack-root.png";
import img3 from "../../assets/img/div.MuiBox-root.png";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const data = [
  { month: "Jan", value: 400 },
  { month: "Feb", value: 300 },
  { month: "Mar", value: 600 },
  { month: "Apr", value: 800 },
  { month: "May", value: 700 },
  { month: "Jun", value: 900 },
  { month: "Jul", value: 600 },
  { month: "Aug", value: 400 },
  { month: "Sep", value: 500 },
  { month: "Oct", value: 300 },
  { month: "Nov", value: 200 },
  { month: "Dec", value: 400 },
];
import image from "../../assets/Bitmap.svg"

const Home = () => {
  return (
    <div className="p-[28px] flex flex-col gap-[24px]">
      <h1 className="text-[#111927] text-[24px] font-[700]">Dashboard</h1>
      <div className="flex items-start gap-[16px]">
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-start gap-[12px]">
            <img src={img2} alt="" />
            <img src={img} alt="" />
            <img src={img1} alt="" />
          </div>
          <div className="border rounded-[4px] p-[16px_20px] flex flex-col gap-[10px] ">
            <h1 className="text-[#111927] text-[16px] font-[600] pl-[20px]">
              Sales Revenue
            </h1>
            <LineChart width={650} height={320} data={data}>
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              {/* <Legend /> */}
              <Line
                type="linear"
                dataKey="value"
                stroke="#1E5EFF"
                strokeWidth={3}
              />
            </LineChart>
          </div>
        </div>
        <div className="flex flex-col gap-[16px] p-[12px_16px_20px_16px] items-center rounded-[4px] border w-[311px]">
          <div className="flex justify-between gap-[50px] items-center">
            <h1>Top selling products</h1>
            <h1>See All</h1>
          </div>
          <div className="flex flex-col gap-[18px]">
            <div className="flex items-center gap-[12px] self-stretch">
              <img src={img3} alt="" />
              <div className="flex flex-col gap-[2px] items-start">
                <h1 className="text-[#111927] text-[14px] font-[500]">
                  Healthcare Erbology
                </h1>
                <h1 className="text-[#6C737F] text-[14px] font-[400]">
                  Accessories
                </h1>
              </div>
              <div className="flex flex-col justify-center items-end">
                <h1 className="text-[#10B981] text-[14px] font-[500]">
                  13,153
                </h1>
                <h1 className="text-[#6C737F] text-[14px] font-[400]">
                  in sales
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-[12px] self-stretch">
              <img src={img3} alt="" />
              <div className="flex flex-col gap-[2px] items-start">
                <h1 className="text-[#111927] text-[14px] font-[500]">
                  Healthcare Erbology
                </h1>
                <h1 className="text-[#6C737F] text-[14px] font-[400]">
                  Accessories
                </h1>
              </div>
              <div className="flex flex-col justify-center items-end">
                <h1 className="text-[#10B981] text-[14px] font-[500]">
                  13,153
                </h1>
                <h1 className="text-[#6C737F] text-[14px] font-[400]">
                  in sales
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-[12px] self-stretch">
              <img src={img3} alt="" />
              <div className="flex flex-col gap-[2px] items-start">
                <h1 className="text-[#111927] text-[14px] font-[500]">
                  Healthcare Erbology
                </h1>
                <h1 className="text-[#6C737F] text-[14px] font-[400]">
                  Accessories
                </h1>
              </div>
              <div className="flex flex-col justify-center items-end">
                <h1 className="text-[#10B981] text-[14px] font-[500]">
                  13,153
                </h1>
                <h1 className="text-[#6C737F] text-[14px] font-[400]">
                  in sales
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-[12px] self-stretch">
              <img src={img3} alt="" />
              <div className="flex flex-col gap-[2px] items-start">
                <h1 className="text-[#111927] text-[14px] font-[500]">Healthcare Erbology</h1>
                <h1 className="text-[#6C737F] text-[14px] font-[400]">Accessories</h1>
              </div>
              <div className="flex flex-col justify-center items-end">
                <h1 className="text-[#10B981] text-[14px] font-[500]">13,153</h1>
                <h1 className="text-[#6C737F] text-[14px] font-[400]">in sales</h1>
              </div>
            </div>
            <div className="flex items-center gap-[12px] self-stretch">
              <img src={img3} alt="" />
              <div className="flex flex-col gap-[2px] items-start">
                <h1 className="text-[#111927] text-[14px] font-[500]">Healthcare Erbology</h1>
                <h1 className="text-[#6C737F] text-[14px] font-[400]">Accessories</h1>
              </div>
              <div className="flex flex-col justify-center items-end">
                <h1 className="text-[#10B981] text-[14px] font-[500]">13,153</h1>
                <h1 className="text-[#6C737F] text-[14px] font-[400]">in sales</h1>
              </div>
            </div>
            <div className="flex items-center gap-[12px] self-stretch">
              <img src={img3} alt="" />
              <div className="flex flex-col gap-[2px] items-start">
                <h1 className="text-[#111927] text-[14px] font-[500]">Healthcare Erbology</h1>
                <h1 className="text-[#6C737F] text-[14px] font-[400]">Accessories</h1>
              </div>
              <div className="flex flex-col justify-center items-end">
                <h1 className="text-[#10B981] text-[14px] font-[500]">13,153</h1>
                <h1 className="text-[#6C737F] text-[14px] font-[400]">in sales</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-[20px]">
        <div className="w-[48%] border-[2px] rounded-2xl p-[20px]">
          <h1 className="text-[20px] font-sans font-[500]">
            Recent Transactions
          </h1>
          <table className="w-[100%]">
            <thead>
              <tr className="border-b-[2px]">
                <th className="h-[50px] text-[18px] text-[gray] font-[400] text-start">
                  Name
                </th>
                <th className="h-[50px] text-[18px] text-[gray] font-[400] text-center">
                  Date
                </th>
                <th className="h-[50px] text-[18px] text-[gray] font-[400] text-center">
                  Amount
                </th>
                <th className="h-[50px] text-[18px] text-[gray] font-[400] text-center">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-[18px] font-[500] h-[70px] w-[23%]">
                  Jagarnath S.
                </td>
                <td className="text-[18px] font-[500] text-center w-[23%]">
                  24.05.2023
                </td>
                <td className="text-[18px] font-[500] text-center w-[23%]">
                  $124.97
                </td>
                <td className="text-center w-[30%]">
                  <button className="text-[#06A561] w-[70%] h-[40px] bg-[#C4F8E2] rounded-md">
                    Paid
                  </button>
                </td>
              </tr>
              <tr>
                <td className="text-[18px] font-[500] h-[70px] w-[23%]">
                  Anand G.
                </td>
                <td className="text-[18px] font-[500] text-center w-[23%]">
                  23.05.2023
                </td>
                <td className="text-[18px] font-[500] text-center w-[23%]">
                  $55.42
                </td>
                <td className="text-center w-[30%]">
                  <button className="bg-[#E6E9F4] w-[70%] h-[40px] text-[#5A607F] rounded-md">
                    Pending
                  </button>
                </td>
              </tr>
              <tr>
                <td className="text-[18px] font-[500] h-[70px] w-[23%]">
                  Kartik S.
                </td>
                <td className="text-[18px] font-[500] text-center w-[23%]">
                  23.05.2023
                </td>
                <td className="text-[18px] font-[500] text-center w-[23%]">
                  $89.90
                </td>
                <td className="text-center w-[30%]">
                  <button className="bg-[#E6E9F4] w-[70%] h-[40px] text-[#5A607F] rounded-md">
                    Pending
                  </button>
                </td>
              </tr>
              <tr>
                <td className="text-[18px] font-[500] h-[70px] w-[23%]">
                  Rakesh S.
                </td>
                <td className="text-[18px] font-[500] text-center w-[23%]">
                  22.05.2023
                </td>
                <td className="text-[18px] font-[500] text-center w-[23%]">
                  $144.94
                </td>
                <td className="text-center w-[30%]">
                  <button className="bg-[#E6E9F4] w-[70%] h-[40px] text-[#5A607F] rounded-md">
                    Pending
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-[48%] border-[2px] rounded-2xl p-[20px]">
          <h1 className="text-[20px] font-sans font-[500]">
            Top Products by Units Sold
          </h1>
          <table className="w-[100%]">
            <thead>
              <tr className="border-b-[2px]">
                <th className="h-[50px] text-[18px] text-[gray] font-[400] text-start">
                  Name
                </th>
                <th className="h-[50px] text-[18px] text-[gray] font-[400] text-center">
                  Price

                </th>
                <th className="h-[50px] text-[18px] text-[gray] font-[400] text-center">
                  Units
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-[18px] font-[500] h-[70px] w-[40%]">
                  <div className="flex gap-[10px] items-center">
                    <img src={image} alt="" />
                    <h1 className="text-[16px] font-[500]">Men Grey Hoodie</h1>
                  </div>
                </td>
                <td className="text-[18px] font-[500] text-center w-[30%]">
                  $124.97
                </td>
                <td className="text-center w-[30%] text-[18px] font-[500]">
                  204
                </td>
              </tr>
              <tr>
                <td className="text-[18px] font-[500] h-[70px] w-[40%]">
                  <div className="flex gap-[10px] items-center">
                    <img src={image} alt="" />
                    <h1 className="text-[16px] font-[500]">Men Grey Hoodie</h1>
                  </div>
                </td>
                <td className="text-[18px] font-[500] text-center w-[30%]">
                  $124.97
                </td>
                <td className="text-center w-[30%] text-[18px] font-[500]">
                  204
                </td>
              </tr>
              <tr>
                <td className="text-[18px] font-[500] h-[70px] w-[40%]">
                  <div className="flex gap-[10px] items-center">
                    <img src={image} alt="" />
                    <h1 className="text-[16px] font-[500]">Men Grey Hoodie</h1>
                  </div>
                </td>
                <td className="text-[18px] font-[500] text-center w-[30%]">
                  $124.97
                </td>
                <td className="text-center w-[30%] text-[18px] font-[500]">
                  204
                </td>
              </tr>
              <tr>
                <td className="text-[18px] font-[500] h-[70px] w-[40%]">
                  <div className="flex gap-[10px] items-center">
                    <img src={image} alt="" />
                    <h1 className="text-[16px] font-[500]">Men Grey Hoodie</h1>
                  </div>
                </td>
                <td className="text-[18px] font-[500] text-center w-[30%]">
                  $124.97
                </td>
                <td className="text-center w-[30%] text-[18px] font-[500]">
                  204
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
