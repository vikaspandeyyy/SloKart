import React from "react";
// import WorkingFormat from "./workingformat.png";
// import salaryStatics from "./salarystatics.png";
// import staffTurnover from "./Staffturnover.png";
// import totalProject from "./totalproject.png";
// import top3dept from "./top3dept.png";
// import onboardingStatus from "./onboardingstatus.png";
import "./HRDashboard.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NavBar from "../NavBar";
import { Button } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function HRDashboard() {
  return (
    <>
      <NavBar />
      <div id="Right-content-Down-First">
        <h2>Dashboard</h2>
        <div id="Right-content-Down-Filters">
          <Button variant="outlined" startIcon={<AddCircleOutlineIcon />}>
            Add Recruitment
          </Button>
          <Button variant="outlined" startIcon={<AddCircleOutlineIcon />}>
            Add an employee
          </Button>
          <div
            style={{
              "border-left": "5px dotted rgba(0, 0, 0, 0.989)",
              height: "60%",
            }}
          ></div>
        </div>
      </div>
      <div id="hr-parent-div">
        <div id="hr-div-child1" className="hrChild">
          <div id="hr-child1-left" className="hrChildLeft">
            <div id="hr-child1-left-up" className="hrChildLeftUp">
              <div>
                <b>352</b>
                <p><TrendingUpIcon/></p>
                <span>
                  <small>TOTAL EMPLOYEES</small>
                </span>
              </div>
              <div>
                <b>27</b>
                <span>
                  <small>NEW EMPLOYEES</small>
                </span>
              </div>
              <div>
                <b>80%</b>
                <span>
                  <small>HAPPINESS RATE</small>
                </span>
              </div>
              <div>
                <b>5</b> 
                <span>
                  <small>EMPLOYEES ON LEAVE</small>
                </span>
              </div>
            </div>
            <div id="hr-child1-left-dn" className="hrChildLeftdn">
              <div id="hr-Child1-left-dn1" className="hrChildLeftdndiv">
                {/* <img src={WorkingFormat} alt="" /> */}
              </div>
              <div id="hr-Child1-left-dn2" className="hrChildLeftdndiv">
                {/* <img src={staffTurnover} alt="" /> */}
              </div>
              <div
                id="hr-Child1-left-dn3"
                className="hrChildLeftdndiv hrChildLeftdndiv3"
              >
                <h5>REQUESTS</h5>
                {RequestsData.map((val) => (
                  <>
                    <span>
                      <small>Profile Updates</small>
                      <b>{val.prf_upd}</b>
                    </span>
                    <span>
                      <small>Business Trips</small>
                      <b>{val.busn_trip}</b>
                    </span>
                    <span>
                      <small>Vacations</small>
                      <b>{val.vacation}</b>
                    </span>
                    <span>
                      <small>Sick Leaves</small>
                      <b>{val.sick_leav}</b>
                    </span>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div id="hr-child1-right" className="hrChildRight">
            {/* <img src={onboardingStatus} alt="" /> */}
          </div>
        </div>
        <div id="hr-div-child2" className="hrChild">
          <div className="hrChildLeft" id="hr-div-child2-left">
            {/* <img src={salaryStatics} alt="" width={'100%'} height={"100%"} /> */}
          </div>
          <div className="hrChildRight" id="hr-div-child2-right">
            <h5>RECRUITMENT PROCESS</h5>
            <table width={'100%'}>
              <tr>
                <th>Full Name</th>
                <th>Profession</th>
                <th>Status</th>
              </tr>
              {RecruitmentProcessData.map((val) => (
                <tr>
                  <td>{val.fname}</td>
                  <td>{val.profession}</td>
                  <td>{val.status}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
        <div id="hr-div-child3" className="hrChild">
          <div id="hr-child3-left" className="hrChildLeft">
            <div id="hr-child3-left-up" className="hrChildLeftUp">
              <div>
                <b>40</b>
                <span>
                  <small>POLICIES</small>
                </span>
              </div>
              <div>
                <b>50</b>
                <span>
                  <small>CLIENTS</small>
                </span>
              </div>
              <div>
                <b>60</b>
                <span>
                  <small>TEAMS</small>
                </span>
              </div>
              <div>
                <b>20</b>
                <span>
                  <small>DEPARTMENTS</small>
                </span>
              </div>
            </div>
            <div id="hr-child3-left-dn" className="hrChildLeftdn">
              <div id="hr-Child3-left-dn1" className="hrChildLeftdndiv">
                {/* <img src={totalProject} alt="" /> */}
              </div>
              <div id="hr-Child3-left-dn2" className="hrChildLeftdndiv">
                <h5>TOP EMPLOYEES</h5>
                <table>
                  <tr>
                    <th>Full Name</th>
                    <th>Department</th>
                    <th>Project Finished</th>
                  </tr>
                  {topEmployeesData.map((val) => (
                    <tr>
                      <td>{val.fName}</td>
                      <td>{val.dept}</td>
                      <td>{val.proj_fin}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <div
                id="hr-Child3-left-dn3"
                className="hrChildLeftdndiv hrChildLeftdndiv3"
              >
                <h5>PROJECTS</h5>
                {ProjectsData.map((val) => (
                  <>
                    <span>
                      <small>Received Requests</small>
                      <b>{val.req_rec}</b>
                    </span>
                    <span>
                      <small>Completed</small>
                      <b>{val.compl}</b>
                    </span>
                    <span>
                      <small>In Progress</small>
                      <b>{val.in_Prog}</b>
                    </span>
                    <span>
                      <small>Rejected Projects</small>
                      <b>{val.rej_Proj}</b>
                    </span>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div id="hr-child3-right" className="hrChildRight">
            {/* <img src={top3dept} alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
}
export const ProjectsData = [
  {
    req_rec: 200,
    compl: 190,
    in_Prog: 10,
    rej_Proj: 0,
  },
];
export const RequestsData = [
  {
    prf_upd: 9,
    busn_trip: 2,
    vacation: 16,
    sick_leav: 10,
  },
];
export const topEmployeesData = [
  { fName: "Ellie Clinton", dept: "Content Writer", proj_fin: "Interview" },
  { fName: "Ellie Clinton", dept: "Content Writer", proj_fin: "Resume" },
  { fName: "Ellie Clinton", dept: "Content Writer", proj_fin: "Task Assigned" },
];
export const RecruitmentProcessData = [
  { fname: "Emilia", profession: "Content Writer", status: "Interview" },
  { fname: "Emilia", profession: "Content Writer", status: "Interview" },
  { fname: "Emilia", profession: "Content Writer", status: "Interview" },
  { fname: "Emilia", profession: "Content Writer", status: "Interview" },
  { fname: "Emilia", profession: "Content Writer", status: "Interview" },
  { fname: "Emilia", profession: "Content Writer", status: "Interview" },
  { fname: "Emilia", profession: "Content Writer", status: "Interview" },
];
