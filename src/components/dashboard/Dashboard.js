import React from 'react'
// import './dashboard.css'
import { useNavigate } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
function DashBoard() {
  let navigate = useNavigate();


  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Dataset 2',
        data: [10, 30, 46, 38, 60, 50,],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <div>
      <main>
        <div className="container-fluid px-4">
          <h1 className="mt-4">Dashboard</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
          <div className="row">
            <div className="col-xl-6 col-md-6" onClick={() => navigate('/getUser')}>
              <div className="card bg-primary text-white mb-4" id="dash__card">
                <div className="card-body">User's</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <p className="small text-white stretched-link">0</p>
                  <div className="small text-white"><svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" /></svg></div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6" >
              <div className="card bg-success text-white mb-4" id="dash__card">
                <div className="card-body">Registered Complaint's</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  {/* {
                    length.fileCount ?
                      <p className="small text-white stretched-link">{length.fileCount}</p>
                      : */}
                  <p className="small text-white stretched-link" >0</p>
                  {/* } */}
                  <div className="small text-white"><svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" /></svg></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-xl-6">
              <Line options={options} data={data} />;
            </div>
            <div className="col-xl-6">
              <Bar options={options} data={data} />;
            </div>
          </div>

          {/* <div className="card  mt-5" id='dash__card'>
            <div className="card-header">
              DataTable Example
            </div>
            <BizFiles />

          </div> */}


        </div>
      </main>

    </div>
  )
}

export default DashBoard