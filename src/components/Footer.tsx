import React from 'react'

function Footer() {
  return (
    <div>
        <div className=" flex justify-between items-center m-6 h-36 bg-slate-200 text-blue-400 text-sm">
            <img className="" src="resources.png" alt="resource image" title="Resources"/>
            <div className=""><a href="https://ienabler.ug.edu.gh/pls/prodi41/w99pkg.mi_login" target="_blank" title="MIS Web">MIS Web</a></div>
            <div className=""><a href="https://mail.ug.edu.gh/owa" target="_blank" title="Staff email">Staff email</a></div>
            <div className=""><a href="http://mail.google.com/a/st.ug.edu.gh" target="_blank" title="Student email">Student email</a></div>
            <div className=""><a href="http://sakai.ug.edu.gh" title="sakai" target="_blank">Sakai LMS</a></div><div className="resources_link three columns"><a href="https://careers.ug.edu.gh/" title="KEWL for Univeristy of Ghana" target="_blank">Careers &amp; Counselling</a></div>
            <div className=""><a href="https://www.universnewsroom.com/" title="Radio Univers" target="_blank">Radio Univers</a></div>
        </div>

        <div className=" h-1 m-6 mb-0 bg-red-500">
        </div>

        <div className=" bg-blue-950 grid grid-cols-5 gap-4 text-center h-36 shadow-md m-6 mb-0 mt-0 text-xs ">
      
            <div className=" grid grid-cols-1 rounded-sm text-white">
                <div id="block-block-5" className="block block-block">
                    <h3 className=" uppercase text-yellow-100 text-sm underline">Get in Touch with Us</h3>
                    <div className="">
                        <div className="icon_phone" title="Phone">+233-(0)302-213820</div>
                        <div className="icon_phone" title="Phone">+233-(0)302-213850</div>
                        <div className="icon_mail" title="Email"><a href="mailto:pad@ug.edu.gh">pad@ug.edu.gh</a></div>
                        <div className="icon_loc" title="Location">P.O. Box LG 25 <br/> Legon, Accra</div><div className="clear">&nbsp;</div>
                        <div className="h10">&nbsp;</div>
                    </div>
                </div>
            </div>

            <div className=" grid grid-cols-1 rounded-sm text-white">
                <div id="block-block-3" className="block block-block">
                    <h3 className=' uppercase text-yellow-100 text-sm underline'>Colleges</h3>
                    <div className="content">
                        <ul className="margined_left">
                            <li><a href="http://cbas.ug.edu.gh" target="_blank">Basic &amp; Applied Sciences</a></li>
                            <li><a href="http://coe.ug.edu.gh" target="_blank">Education</a></li>
                            <li><a href="http://chs.ug.edu.gh" target="_blank">Health Science</a></li>
                            <li><a href="http://coh.ug.edu.gh" target="_blank">Humanities</a></li>
                            <li><a href="http://sgs.ug.edu.gh" target="_blank">School of Graduate Studies</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" grid grid-cols-1 rounded-sm text-white">
                <div id="block-block-4" className="block block-block">
                    <h3 className='uppercase text-yellow-100 text-sm underline'>Admissions</h3>
                    <div className="content">
                        <ul className="margined_left">
                            <li><a href="http://admission.ug.edu.gh/applying/undergraduate/overview" target="_blank">Undergraduate</a></li>
                            <li><a href="http://admission.ug.edu.gh/applying/postgraduate/overview" target="_blank">Postgraduate</a></li>
                            <li><a href="http://admission.ug.edu.gh/applying/international/overview" target="_blank">International</a></li>
                            <li><a href="http://admission.ug.edu.gh/applying/distance/undergraduate-overview" target="_blank">Distance Education</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" grid grid-cols-1 rounded-sm text-white">
               <div id="block-block-10" className="block block-block">
                    <h3 className=" uppercase text-yellow-100 text-sm underline"> Quick Links</h3>
                    <div className="content">
                        <ul className="margined_left">
                            <li><a href="https://sts.ug.edu.gh/academicrecords/" target="_blank">Academic Record&nbsp;Verification</a></li>
                            <li><a href="http://journals.ug.edu.gh/">UG Journals</a></li>
                            <li><a href="https://www.ug.edu.gh/library-resources/times-higher-education" target="_blank">Times Higher Education</a></li>
                            <li><a href="https://ugportal.ug.edu.gh/">UG Intranet Portal</a></li>
                            <li><a href="http://pada.ug.edu.gh" target="_blank">The Pan-African Doctoral Academy (PADA)</a></li>
                            <li><a href="http://www.ug.edu.gh/employment-opportunities">Employment Opportunities</a></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className=" grid grid-cols-1 rounded-sm text-white">
                <div id="block-block-9" className="block block-block">
                    <h3 className=' uppercase text-yellow-100 text-sm underline'>Alumni</h3>
                    <div className="content">
                        <ul className="margined_left">
                            <li><a href="https://ar.ug.edu.gh" target="_blank">UG Alumni Relations Office&nbsp;</a></li>
                            <li><a href="http://alumni.ug.edu.gh" target="_blank">UG Alumni Association (Ghana)</a></li>
                            <li><a href="https://www.ugaana.org">UG Alumni Association (North America)</a></li>
                            <li><a href="https://ar.ug.edu.gh/give-ug" target="_blank">Give to UG</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
        <div className=" bg-amber-950 mt-0 m-6 h-8 text-yellow-100 flex justify-between text-sm text-center">
            <div className=" ml-4"> Copyright ©&nbsp;2023,&nbsp;<a href="https://www.ug.edu.gh/">University of Ghana</a></div>
            <div className=" mr-4"> <a href="https://twitter.com/UnivofGh" target="_blank" className="icon_tweet" title="Twitter">Twitter</a> <a href="https://plus.google.com/u/0/+universityofghana/posts" target="_blank" className="icon_google" title="Google+">Google+</a> <a href="https://www.facebook.com/univofgh" target="_blank" className="icon_facebook" title="Facebook">Facebook</a> <a href="http://www.youtube.com/user/universityghana" className="icon_skype" title="youtube" target="_blank">youtube</a></div>
        </div>
    </div>
   
  );
}

export default Footer
