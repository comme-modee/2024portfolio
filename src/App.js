import React, { useEffect, useRef, useState } from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import setVh from './hook/useSetVh';
import Header from './component/Header';
import './App.css'
import StackTimeline from './component/StackTimeline';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faXmark } from '@fortawesome/free-solid-svg-icons';
import resume from '../src/asset/file/resume.pdf'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons/faFileDownload';

const fe = [ "React", "ReactQuery", "Redux", "TypeScript", "JavaScript", "JQuery", "HTML", "CSS", "Bootstrap", "GSAP" ]
const be = [ "NodeJS", "ExpressJS", "MongoDB", "Mongoose", "Socket.IO", "AWS" ]
const tools = [ "VSCode", "Github", "Discord", "Figma", "Illustrator", "Photoshop" ]

function App() {
  const projectDetailPopup = useRef(null)
  const projectInitialData = {
    title: '',
    description: '',
    PCImg: '',
    mobileImg: '',
    stacks: [],
    url: ''
  }
  const [ projectData, setProjectData ] = useState(projectInitialData)
  const fullpageApiRef = useRef(null);
  const [isFullpageApiRefReady, setIsFullpageApiRefReady] = useState(false)
  const [ isMobile, setIsMobile ] = useState(window.innerWidth <= 540);

  
  window.addEventListener('resize', () => {
    setVh()
    if(window.innerWidth <= 480) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  })

  useEffect(() => {
    console.log('Made with fullPage.js');
    setVh();
  },[])

  const handleLeave = async (origin, destination, direction) => {
    // origin: 떠날 섹션, destination: 도착할 섹션
  }

const openProjectDetail = ({title, description, PCImg, mobileImg, stacks, url}) => {
  projectDetailPopup.current.style.opacity = 1;
  projectDetailPopup.current.style.visibility = 'visible';
  setProjectData({title, description, PCImg, mobileImg, stacks, url})
}

const closeProjectDetailPopup = () => {
  projectDetailPopup.current.style.opacity = 0;
  projectDetailPopup.current.style.visibility = 'hidden';
  setTimeout(() => {
    setProjectData(projectInitialData);
  }, 300);
}

const handleFullpageApi = (fullpageApi) => {
  fullpageApiRef.current = fullpageApi;
  setTimeout(() => {
    setIsFullpageApiRefReady(true)
  }, 1000);
}

  return (
    <React.Fragment>
      {isFullpageApiRefReady && <Header isMobile={isMobile} fullpageController={fullpageApiRef.current}/>}
      <ReactFullpage
          //fullpage options
          licenseKey = {'gplv3-license'}
          scrollingSpeed = {800} /* Options here */
          onLeave={handleLeave}
          navigation={!isMobile && true}
          // anchors={fullPageAnchors}
          normalScrollElements='.stack-timeline' //일부 요소를 스크롤 가능하게 함. 단, 섹션 자체에 적용하면 안됨.
          // touchSensitivity = {10} //터치민감도
          render={({ state, fullpageApi }) => {
            handleFullpageApi(fullpageApi);
            return (
              <ReactFullpage.Wrapper>
                <div className="section intro">
                  <div className='text'>
                    <div className='left'>
                      <div>2024</div>
                      <div>Portfolio</div>
                    </div>
                    <div className='line'></div>
                    <div className='right'>
                      <div>프론트엔드 개발자</div>
                      <div><span className='bold'>배수정</span>입니다 <span className='bold'>:)</span></div>
                    </div>
                  </div>
                </div>
                <div className="section stack">
                  <div className='stack-container'>
                    <div className='left'>
                      <span>Skills</span>
                      <span>&</span>
                      <span>Tools</span>
                    </div>
                    <div className='line'></div>
                    <div className='stacks'>
                      <div className='fe'>
                        <p>Frontend</p>
                        <div className='badge-container'>
                          {fe.map((stack, index) => 
                              stack === "ReactQuery" || stack === "GSAP" ? <img key={`${index}${stack}`} src={`./img/stacks/fe/${stack}.png`} alt={stack}/>
                              : <img key={`${index}${stack}`} src={`./img/stacks/fe/${stack}.svg`} alt={stack}/>)}
                        </div>
                      </div>
                      <div className='be'>
                        <p>Backend</p>
                        <div className='badge-container'>
                          {be.map((stack, index) => 
                              stack === "Mongoose" || stack === "Socket.IO" ? <img key={`${index}${stack}`} src={`./img/stacks/be/${stack}.png`} alt={stack}/>
                              : <img key={`${index}${stack}`} src={`./img/stacks/be/${stack}.svg`} alt={stack}/>)}
                        </div>
                      </div>
                      <div className='tools'>
                        <p>Tools</p>
                        <div className='badge-container'>
                          {tools.map((stack, index) => <img key={`${index}${stack}`} src={`./img/stacks/tools/${stack}.svg`} alt={stack}/>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section stack-timeline-container">
                  {projectData &&
                    <div className='project-detail-popup' ref={projectDetailPopup}>
                      <div className='project-title'>{projectData.title} <Link to={projectData.url} target="_blank" title={`${projectData.title} 바로가기`}><FontAwesomeIcon icon={faLink}/></Link></div>
                      <FontAwesomeIcon icon={faXmark} className='close-btn' onClick={() => closeProjectDetailPopup()}/>
                      <div className='description'>{projectData.description}</div>
                      <div className='stacks'>{projectData.stacks.map((stack, index) => <span key={`${index}${stack}`}>{stack}</span>)}</div>
                      <div className='img'>
                        <img className='pc-img' src={projectData.PCImg} alt=''/>
                        <img className='mobile-img' src={projectData.mobileImg} alt=''/>
                      </div>
                    </div>
                  }
                  <div className='title'>
                    <span>Stack<br/>Record</span>
                  </div>
                  <StackTimeline projectDetailPopup={projectDetailPopup} openProjectDetail={openProjectDetail}/>
                </div>
                <div className='section contact'>
                  <div className='contact-container'>
                    <div className='left'>
                      <div>Contact</div>
                    </div>
                    <div className='line'></div>
                    <div className='right'>
                      <div><span className='bold'>Github</span> <Link to={'https://github.com/comme-modee'} target="_blank" title={`깃허브 바로가기`}><FontAwesomeIcon icon={faLink}/></Link></div>
                      <div><span className='bold'>E-mail</span> comme746@naver.com</div>
                      <div><span className='bold'>Phone</span> 010-3039-3888</div>
                      <div><span className='bold'>Resume</span> <a href={resume} download='배수정 이력서' title={`이력서 다운로드`}><FontAwesomeIcon icon={faFileDownload}/></a></div>
                    </div>
                  </div>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
      />
    </React.Fragment>
  );
}

export default App;


