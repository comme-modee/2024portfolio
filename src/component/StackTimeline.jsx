import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './StackTimeline.css'

const StackTimeline = ({ projectDetailPopup, openProjectDetail }) => {
    return (
        <VerticalTimeline
            className='stack-timeline'
            lineColor='#EE7B50'
            layout='1-column-left' //1-column-left //1-column-right //2-columns (default)
        >
            <VerticalTimelineElement
            contentStyle={{ background: '#ffebd3' }}
            contentArrowStyle={{ borderRight: '7px solid #ffebd3' }}
            date="7월 15일 ~ "
            iconStyle={{ overflow: 'hidden' }}
            icon={<img src='./img/stacks/fe/React.svg' width={'100%'} alt="myLogo" />}
            >
            <h3 className="vertical-timeline-element-title">React Native</h3>
            <p>
                React Native를 이용한 앱 작업 중.
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className='hover-event'
            date="7월"
            iconStyle={{ overflow: 'hidden' }}
            icon={<img src='./img/stacks/fe/React.svg'  width={'100%'} alt="myLogo" />}
            onTimelineElementClick={() => 
                openProjectDetail({ 
                    title: '(주)햇님달님', 
                    description: '(주)햇님달님 메인페이지 작업', 
                    PCImg: './img/project/HD.png', 
                    mobileImg: './img/project/HD-m.png', 
                    stacks: ['React', 'React-Fullpage'],
                    url: 'http://www.mkthd.net'
                })}
            >
            <h3 className="vertical-timeline-element-title">React, React-Fullpage</h3>
            <p>
                (주)햇님달님 메인페이지 프론트 작업 (React-Fullpage 라이브러리를 이용해 원페이지 형식으로 작업)
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className='hover-event'
            date="6월 16일 ~ 6월 30일"
            iconStyle={{ overflow: 'hidden' }}
            icon={<img src='./img/stacks/fe/Redux.svg' width={'100%'} alt="myLogo" />}
            onTimelineElementClick={() => 
                openProjectDetail({ 
                    title: '개발자 커뮤니티 dev-ing', 
                    description: '개발자 커뮤니티 사이트 dev-ing 작업 및 배포. (FE: React / BE: Node.js)', 
                    PCImg: './img/project/dev-ing.png', 
                    mobileImg: './img/project/dev-ing-m.png', 
                    stacks: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'React Redux', 'Socket.io'],
                    url: 'https://dev-ing.netlify.app/'
                })}
            >
            <h3 className="vertical-timeline-element-title">Node.js, Express, MongoDB, Mongoose, React Redux, Socket.io</h3>
            <h4 className="vertical-timeline-element-subtitle">배포: Cloudtype, Netlify</h4>
            <p>
                개발자 커뮤니티 사이트 'dev-ing' 작업 및 배포. (FE: React / BE: Node.js)
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className='hover-event'
            date="5월 19일 ~ 6월 15일"
            iconStyle={{ overflow: 'hidden' }}
            icon={<img src='./img/stacks/be/NodeJS.svg' width={'100%'} alt="myLogo" />}
            onTimelineElementClick={() => 
                openProjectDetail({ 
                    title: '쇼핑몰 사이트', 
                    description: '쇼핑몰 사이트 작업 및 배포. (FE: React / BE: Node.js)', 
                    PCImg: './img/project/mall.png', 
                    mobileImg: './img/project/mall-m.png', 
                    stacks: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'React Redux'],
                    url: 'https://comme-mall.netlify.app'
                })}
            >
            <h3 className="vertical-timeline-element-title">Node.js, Express, MongoDB, Mongoose, React Redux</h3>
            <h4 className="vertical-timeline-element-subtitle">배포: AWS, Netlify</h4>
            <p>
                쇼핑몰 사이트 작업 및 배포. (FE: React / BE: Node.js)
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            date="4월"
            iconStyle={{ overflow: 'hidden' }}
            icon={<img src='./img/stacks/fe/ReactQuery.png' width={'100%'} alt="myLogo" />}
            >
            <h3 className="vertical-timeline-element-title">React, React Query, React-dnd</h3>
            <p>
                (주)햇님달님 홈페이지 어드민페이지 작업<br/> (Hyper 라이브러리(React ver) / Chart component로 각종 차트 데이터 연결 / React-dnd)
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            date="4월"
            iconStyle={{ overflow: 'hidden' }}
            icon={<img src='./img/stacks/fe/ReactQuery.png' width={'100%'} alt="myLogo" />}
            >
            <h3 className="vertical-timeline-element-title">React, React Query, React-dnd, xlsx-js-style</h3>
            <p>
                모니터링 사이트 VCATCH 작업<br/>(Hyper 라이브러리(React ver) / 반응형 테이블 작업 / Chart component로 각종 차트 데이터 연결 / React-dnd / xlsx-js-style로 보고서 엑셀 출력 기능 구현)
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            date="3월"
            iconStyle={{ overflow: 'hidden' }}
            icon={<img src='./img/stacks/fe/React.svg' width={'100%'} alt="myLogo" />}
            >
            <h3 className="vertical-timeline-element-title">React 입문</h3>
            <p>
                React 강의 수강. 넷플릭스 사이트 구현.
            </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--year"
            iconStyle={{ background: '#EE7B50' }}
            date="2024년"
            />

            <VerticalTimelineElement
            className='hover-event'
            date="12월"
            iconStyle={{ background: '#3D3C3A', overflow: 'hidden' }}
            icon={<img src='./img/stacks/tools/ChartJS.svg' width={'100%'} alt="myLogo" />}
            onTimelineElementClick={() => 
                openProjectDetail({ 
                    title: '(주)자연의 신비', 
                    description: '(주)자연의 신비 홈페이지 작업. Hyper 라이브러리(Html ver)를 이용해 어드민페이지 작업. (Chart js, Apex Chart 등 chart 라이브러리 이용)', 
                    PCImg: './img/project/holynature.png', 
                    mobileImg: './img/project/holynature-m.png', 
                    stacks: ['Html5', 'Css3', 'Javascript', 'JQuery'],
                    url: 'http://holynature.kr'
                })}
            >
            <h3 className="vertical-timeline-element-title">Html5, Css3, Javascript, JQuery</h3>
            <p>
                (주)자연의 신비 홈페이지 작업.<br/>
                Hyper 라이브러리(Html ver)를 이용해 어드민페이지 작업. (Chart js, Apex Chart 등 chart 라이브러리 이용)
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className='hover-event'
            date="10월"
            iconStyle={{ overflow: 'hidden' }}
            icon={<img src='./img/stacks/fe/GSAP.png' width={'100%'} alt="myLogo" />}
            onTimelineElementClick={() => 
                openProjectDetail({ 
                    title: '고돌이', 
                    description: '고돌이 랜딩페이지 작업.', 
                    PCImg: './img/project/godol2.png', 
                    mobileImg: './img/project/godol2-m.png', 
                    stacks: ['Html5', 'Css3', 'Javascript', 'GSAP'],
                    url: 'https://godol2.com'
                })}
            >
            <h3 className="vertical-timeline-element-title">Html5, Css3, Javascript, GSAP</h3>
            <p>
                고돌이 랜딩페이지 작업.
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            date="9월"
            iconStyle={{ overflow: 'hidden' }}
            icon={<img src='./img/stacks/fe/Javascript.svg' width={'100%'} alt="myLogo" />}
            >
            <h3 className="vertical-timeline-element-title">Html5, Css3, Javascript</h3>
            <p>
                할일 앱(날씨 api 사용) / 숫자맞추기 게임 구현.
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            date="3월 21일 ~ 7월 6일"
            iconStyle={{ overflow: 'hidden' }}
            icon={<img src='./img/stacks/fe/HTML.svg' width={'100%'} alt="myLogo" />}
            >
            <h3 className="vertical-timeline-element-title">Html5, Css3, Javascript, JQuery</h3>
            <p>
                SBS아카데미 웹퍼블리셔 과정 수료.
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--year"
            iconStyle={{ background: '#EE7B50' }}
            date="2023년"
            />
        </VerticalTimeline>
    )
}

export default StackTimeline