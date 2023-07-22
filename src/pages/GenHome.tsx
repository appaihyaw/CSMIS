import React from "react";
import { NavLink } from "react-router-dom";
import Log from "./Log";
import StaffHome from "./staff Pages/StaffHomePage";
import Footer from "../components/Footer";

export default function GenHome() {
  return (
    <div>
      <header>
        <nav className=" m-6 mt-0 mb-0 bg-blue-950 text-white">
          <div className=" flex justify-between ">
            <div className=" order-1"></div>
            <div className=" order-2 space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="Log">Login</NavLink>
              <NavLink to="StaffHomePage">Staff Homepage</NavLink>
              <NavLink to="StudHomePage">Student Homepage</NavLink>
            </div>
          </div>
        </nav>

        <div className=" flex justify-center m-6 text-2xl font-medium text-blue-500 space-x-1">
          <h3>csMIS</h3>
          <img
            src=" https://www.ug.edu.gh/sites/default/files/ug_standard_new_sl_1.png"
            width="80"
            height="60"
            alt="uglogo"
          />
        </div>
      </header>
      <div className="">
        <main>
          <div className=" flex bg-blue-950 text-white pl-20 m-6 mt-0">
            <div className=" flex-1 hover:bg-blue-300 hover:text-gray-900">
              <ul>
                <li>Academics</li>
              </ul>
            </div>

            <div className=" flex-1 hover:bg-blue-300 hover:text-gray-900">
              <ul>
                <li>Research</li>
              </ul>
            </div>
            <div className=" flex-1 hover:bg-blue-300 hover:text-gray-900">
              <ul>
                <li>Library</li>
              </ul>
            </div>
            <div className=" flex-1 hover:bg-blue-300 hover:text-gray-900">
              <ul>
                <li>International Programmes</li>
              </ul>
            </div>
            <div className=" flex-1 hover:bg-blue-300 hover:text-gray-900 pl-20">
              <ul>
                <li>Freshmen info</li>
              </ul>
            </div>
          </div>
          <div className=" flex justify-center h-72 m-6">
            <img src=" ug main2.jpeg" alt="" width={2000}/>
          </div>
          <div className=" flex justify-between m-6 mb-0">
            <div className=" text-green-600">
              <h4>News</h4>
            </div>
            <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="indigo" className="bi bi-arrow-left-circle" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/> </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="indigo" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16"> <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/> </svg>
            </div>
          </div>
          <div className=" grid grid-cols-5 gap-2 text-center h-48 shadow-md m-6 mt-0 text-xs text-blue-400">
            <div className=" grid grid-cols-1 bg-white rounded-sm underline">
              <img src="batch.jpg"/>
              <h4 className=" "><a href="/news/department-theatre-arts-receives-audio-visual-equipment-johnson-children%E2%80%99s-school-foundation">Department of Theatre Arts Receives Audio-Visual...</a></h4>
            </div>

            <div className=" grid grid-cols-1 bg-white rounded-sm underline">
              <ul>
                <li  className="three columns jcarousel-item jcarousel-item-horizontal jcarousel-item-2 jcarousel-item-2-horizontal">
                <div className="pic">
                  <a href="/news/classroom-modernisation-committee-inspects-commissioned-and-ongoing-projects" title="leg">
                  <img typeof="foaf:Image" src="https://www.ug.edu.gh/sites/default/files/styles/portfolio_item/public/field/image/ant_shots-0122.jpg?itok=yCI6uou5" width="585" height="431" alt=""/></a>
                </div>
                  <h4><a href="/news/classroom-modernisation-committee-inspects-commissioned-and-ongoing-projects">Classroom Modernisation Committee Inspects Commissioned...</a></h4>
              </li>
              </ul>
            </div>

            <div className=" grid grid-cols-1 bg-white rounded-sm underline">
              <ul>
                <li className="three columns jcarousel-item jcarousel-item-horizontal jcarousel-item-3 jcarousel-item-3-horizontal" >
                  <div className="pic">
                    <a href="/news/boost-student-accommodation-4160-bed-guss-hostel-gets-underway"><img typeof="foaf:Image" src="https://www.ug.edu.gh/sites/default/files/styles/portfolio_item/public/field/image/7_0.jpg?itok=_56Fr283" width="585" height="431" alt="KKKK"/></a>
                  </div>
                  <h4><a href="/news/boost-student-accommodation-4160-bed-guss-hostel-gets-underway">Boost to Student Accommodation as 4,160 Bed GUSS Hostel...</a></h4>
                </li>
              </ul>
            </div>

            <div className=" grid grid-cols-1 bg-white rounded-sm underline">
              <ul>
                <li className="three columns jcarousel-item jcarousel-item-horizontal jcarousel-item-4 jcarousel-item-4-horizontal">
                  <div className="pic">
                    <a href="/news/book-documenting-development-women-psychologists-ghana-launched">
                      <img typeof="foaf:Image" src="https://www.ug.edu.gh/sites/default/files/styles/portfolio_item/public/field/image/batch_110A0205.jpg?itok=ewH2Kla8" width="585" height="431" alt="KKK"/></a>
                  </div>
                  <h4><a href="/news/book-documenting-development-women-psychologists-ghana-launched">Book Documenting Development of Women Psychologists in...</a></h4>
                </li>
              </ul>
            </div>

            <div className=" grid grid-cols-1 bg-black rounded-sm underline">
              <h1 className=" text-xl">Ads</h1>
              <h1 className=" text-xl">Ads</h1>
              <h1 className=" text-xl">Ads</h1>
              <h1 className=" text-xl">Ads</h1>
            </div>

          </div>
          <div className=" grid grid-rows-1 grid-flow-col gap-0 justify-between m-6 bg-black text-white">
        
            <div className="row-span-3 bg-white text-blue-500 text-center ...">
              <div id="block-views-announcements-block-1" className="block block-views">
                <h4 className=" uppercase"><span>Announcements</span>
                </h4>
                <div className="">
                  <div className="">
                    <div className="">
                      <div className="">
                        <h4 className=""><span><a href="/announcements/call-applications-kwame-nkrumah-chair-african-studies-2">Call for Applications: The Kwame Nkrumah Chair in African Studies</a></span></h4>
                      </div>
                      <div className="">
                        <h4 className=""> <span><a href="/announcements/ecowas-one-health-leadership-course-%E2%80%93-pandemic-preparedness-response-school-public">ECOWAS One Health Leadership Course – Pandemic Preparedness &amp; Response - School of Public Health</a></span></h4>
                      </div>
                      <div className="">
                        <h4 className=""> <span><a href="/announcements/call-applications-msc-genetic-counselling-west-african-genetic-medicine-centre-wagmc">Call for Applications - MSc. in Genetic Counselling - West African Genetic Medicine Centre (WAGMC)</a></span></h4>
                      </div>
                      <div className=""><h4 className="announcements"><span><a href="/announcements/internal-advertisement-accountant-finance-directorate">Internal Advertisement - Accountant, Finance Directorate</a></span></h4></div>
                      <div className=""><h4 className="announcements"> <span><a href="/announcements/call-applications-funded-mphil-scholarship-university-ghana">Call for Applications for a Funded MPhil Scholarship at the University of Ghana</a></span></h4></div>
                      <div className=""><h4 className="announcements"> <span><a href="/announcements/academic-calendar-school-graduate-studies-20232024-academic-year">Academic Calendar - School of Graduate Studies (2023/2024 Academic Year)</a></span></h4></div>
                      <div className=""><h4 className="views-announcements"> <span><a href="/announcements/call-applications-ug-pada-august-2023-doctoral-schools">Call for Applications - UG-PADA August 2023 Doctoral Schools</a></span></h4></div>
                      <div className=""><h4 className="announcements"> <span><a href="/announcements/call-applications-queen-elizabeth-scholars-qes-west-africa-3rd-and-4th-cohorts">Call for Applications - Queen Elizabeth Scholars (QES) West Africa - 3rd and 4th Cohorts</a></span></h4></div>
                    </div>
                    <div className=""><a href="/announcements"> more announcements... </a></div>
                  </div>
                </div>
              </div>
            </div>
            <> 
            <div className=" bg-blue-100 text-black w-full">
              <h1> hshkajukkj jhkvjvhhbbbjjookkkkkkkkkkkkkkkkkkkkkk</h1>
            </div>
            </>
            <div className="row-span-3 bg-blue-500 text-center">
              <div className="">
                <div className="">
                  <h4 className=" uppercase text-yellow-100 underline text-l"><span>Featured Links</span></h4>
                  <div className="">
                    <div className="">
                      <a href="https://sts.ug.edu.gh/services/" target="_blank">Course Lecturer Evaluation</a>
                    </div>
                      <div className="featurebtn" id="featurebtnash">
                        <a href="https://admission.ug.edu.gh/applying/undergraduate/mature-entry/ba-distance-learning" target="_blank">Mature Student Admissions (Second Batch)</a>
                      </div>
                      <div className="featurebtn" id="featurebtnblue">
                          <a href="https://sts.ug.edu.gh/timetable">2ND Semester Examination Timetable</a>
                      </div>
                        <div className="featurebtn" id="featurebtnyellow">
                          <a href="https://www.ug.edu.gh/announcements/general-amnesty-undergraduate-students-yet-graduate-0">General Amnesty for Undergraduate Students yet to Graduate</a>
                        </div>
                        <div className="featurebtn" id="featurebtngreen">
                          <a href="https://apply.ug.edu.gh/admissions/admissionstatus" target="_blank">Admission Status Checker</a>
                        </div>
                        <div className="featurebtn" id="featurebtn">
                            <a href="https://forms.office.com/pages/responsepage.aspx?id=X78blMDydUiiTGkHhl0lGtIKYVDBwMpHgEdfPKU7qO9URVNSRFlGT0VKUFZPSUMyMlNNWExYUlFEVi4u&amp;utm_source=Brave" target="_blank">Join the UG Alumni Network</a>
                        </div>
                        <div className="featurebtn" id="featurebtnblue">
                          <a href="https://www.ug.edu.gh/vcsdi/home" target="_blank">Donate to VC's Student Digitalisation Initiative</a>
                        </div>
                        <div className="featurebtn" id="featurebtngreen">
                          <a href="https://sts.ug.edu.gh/services/" target="_blank">Coronavirus Risk Assessment Form</a>
                        </div>
                        <div className="featurebtn" id="featurebtn">
                          <a href="https://sakai.ug.edu.gh" target="_blank">Sakai LMS Login</a>
                        </div>
                        <div className="featurebtn" id="featurebtnash">
                          <a href="/employment-opportunities" target="_blank">Vacancy Announcements</a>
                        </div><div className="featurebtn" id="featurebtngreen">
                          <a href="https://www.ug.edu.gh/aad/registration">Steps for Online Registration</a>
                        </div>
                        <div className="featurebtn" id="featurebtnyellow">
                          <a href="aad/fees" target="_blank">SCHEDULE OF FEES</a>
                        </div><div className="featurebtn" id="featurebtn">
                          <a href="https://www.ug.edu.gh/academics/calendar" target="_blank">Academic Calendar</a>
                        </div>
                        <div className="featurebtn" id="featurebtnblue">
                          <a href="https://www.ug.edu.gh/sites/default/files/aad/University_Regulations_for_Junior_Members-2017R-compressed.pdf" target="_blank">University Regulations for Junior Members</a>
                        </div>
                        <div>&nbsp;</div>
                 </div>
                </div>
              </div>
            </div>
          </div>
        
        </main>

      </div>
      < Footer/>
    </div>
  );
}
