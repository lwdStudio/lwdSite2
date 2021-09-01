import * as React from 'react'
import Layout from '../components/layout'

const Resume = ({location}) => {
  return (
    <Layout pageTitle="Resume" pageType="Resume" location={location}>
      <div className="container">
        <div className="row">
            <div className="col-lg-auto">
                <div className="sticky text-md-center">
                    <img src="../img/profile.jpg" className="profile-pic center" />
                    <h1>段力文</h1>
                    <ul>
                        <li><i className="fas fa-phone-alt" aria-hidden="true"></i> <a href="tel:+13154504201">(315)450-4201</a></li>
                        <li><i className="fas fa-envelope" aria-hidden="true"></i> <a href="mailto:hi@liwenduan.com">hi@liwenduan.com</a></li>
                        <li><i className="fab fa-linkedin" aria-hidden="true"></i> <a href="https://www.linkedin.com/in/lwd">我的领英档案</a></li>
                        <li><i className="fas fa-file-pdf" aria-hidden="true"></i> <a href="../en/resume/[Liwen Duan] - Resume New.pdf">下载 PDF 版本简历</a><span className="sr-only">人才库PDF下载</span></li>
                    </ul>
                    <div id="resume-nav" className="list-group card">
                      <a className="list-group-item list-group-item-action" href="#about">关于我</a>
                      <a className="list-group-item list-group-item-action" href="#education">教育经历</a>
                      <a className="list-group-item list-group-item-action" href="#experience">工作经历</a>
                      <a className="list-group-item list-group-item-action" href="#project">个人项目</a>
                      <a className="list-group-item list-group-item-action" href="#skill">技术技能</a>
                    </div>
                </div>

            </div>

            <main className="col-lg">
                <section id="about" className="full-height ease-in-out">
                    <div>
                        <h2>关于我</h2>
                        <p>我是一名在雪城大学信息管理学院攻读 信息管理与技术专业（Information Management & Technology）的学生。我学习如何使用科技来改变我们的生活。拥有好的技术可以帮助企业和个人能够更好的完成他们所想去做的。我想利用我所学的知识为这些企业带来这些改变。
                        </p>
                        <p> 我曾经在学生电视台的经历让我也在关注新媒体行业的发展。这是一个新兴行业，为这个世界提供了一个为自己发声的渠道。人们现在可以通过互联网自由分享自己的观点与看法，让更多的人去收获一个全新的观察这个世界的角度。同时，我认为利用信息技术与文化创意两个产业的结合可以帮助这个行业的人能够产出更多更好的内容，这也可能是一个全新的发展方向。
                        </p>
                        <h2>关注我</h2>
                        <div className="row padding">
                            <a className="col" target="_blank" href="https://go.liwenduan.com/weibo"><i className="fab fa-weibo fa-2x" title="微博 @Keyboard酱" aria-hidden="true"></i> @Keyboard酱</a>
                            <a className="col" target="_blank" href="https://go.liwenduan.com/bilibili"><i className="ri-bilibili-fill ri-2x" title="哔哩哔哩 @Keyboard酱" aria-hidden="true"></i> @Keyboard酱</a>
                        </div>
                    </div>
                </section>
                <section id="education" className="full-height">
                    <h2>教育经历</h2>
                    <h3 className="syracuse">雪城大学</h3>
                    <p>
                        信息管理学院 iSchool<span className="date"> 已于2021年5月毕业 </span> <br />
                        理学学士， 信息管理与技术
                    </p>

                    <p>
                        <b>相关课程与部分课业结果（仅提供英文版本）：</b>
                        <ul>
                            <li>IST 256: Applied Programing for Information Systems (Python)  <a href="https://github.com/liduan-su/fall-2019-ist256-project" target="_blank" className="rounded-border-right">Course Work Demo</a></li><br />
                            <li>IST 263: Intro to Front-End Web Dev: HTML and CSS Skills <a href="https://liduan-su.github.io/ist263-spring-2020/" target="_blank" className="rounded-border-right">Course Work Demo</a></li><br />
                            <li>IST 387: Intro to Applied Data Science  <a href="https://github.com/liduan-su/ist387-summer2020" target="_blank" className="rounded-border-right">Course Work Demo</a></li><br />
                            <li>IST 486: Social Media in the Organiz. <a href="https://facebook.com/upstatehikes/" target="_blank" className="rounded-border-right">Course Work Demo</a></li><br />
                            <li>IST 363: Advanced Front End Web Design: PHP, ReactJS, and Headless WordPress <a href="https://github.com/liduan-su/ist363-spring-2021" target="_blank" className="rounded-border-right">Course Work Demo</a></li><br />
                            <li>IST 341: Human Centered Design</li><br />
                        </ul>
                    </p>
                </section>
                <section id="experience" className="full-height">
                    <h2>工作经历</h2>
                        <section id="work-1">
                            <h3>本科助教</h3>
                            <p>
                            <span className="syracuse">雪城大学</span>，信息管理学院 iSchool
                            <span className="date"> 2019年9月 - 2019年12月 </span>
                            </p>
                            <ul>
                                <li>准备和核查每周实践课程的内容完整度和准确性</li>
                                <li>帮助超过一百名的学生使用 Cisco Packet Tracer（网络模拟软件）, Linux（操作系统）, Wireshark（网络数据包分析软件）, Vsphere（虚拟化软件）。</li>
                                <li>帮助学生理解关于网络的知识内容</li>
                                <li>参与编写实践内容步骤说明以帮助学生完成课程内容</li>
                            </ul>
                        </section>
                        <section id="work-2">
                            <h3>Dining Hall Student Employee</h3>
                            <p>
                            <span className="syracuse">Syracuse University</span> Food Services
                            <span className="date"> Oct 2018 - May 2019 </span>
                            </p>
                            <ul>
                                <li>Worked as part of a team to help the dining hall run smoothly</li>
                                <li>Performed serving, cleaning, and stocking duties in order to facilitate customer service</li>
                                <li>Assisted with meal preparation</li>
                                <li>Assisted with the cleanliness of the dining hall</li>
                            </ul>
                        </section>                   
                </section>
                <section id="project" className="full-height">
                    <h2>个人项目</h2>
                        <section id="project-1">
                            <p>
                            我的个人网站（包括本网站liwenduan.com以及lwdmail.com）
                            <span className="date"> 从2016年至今 </span>
                            </p>
                            <ul>
                                <li>自学如何部署LNMP服务环境</li>
                                <li>自学如何在云端服务器上部署WordPress网站</li>
                                <li>自学使用Certbot部署诸如为加密HTTPS网站所使用的SSL证书</li>
                            </ul>
                        </section>
                </section>
                <section id="skill" className="full-height">
                    <h2>技术技能</h2>
                    <h3>编程语言</h3>
                    <div className="row padding">
                        <div className="col"><i className="fab fa-python fa-3x" title="Python" aria-hidden="true"></i><span className="sr-only">Python</span></div>
                        <div className="col"><i className="fab fa-r-project fa-3x" title="R" aria-hidden="true"></i><span className="sr-only">R</span></div>
                        <div className="col"><i className="fab fa-html5 fa-3x" title="HTML5" aria-hidden="true"></i><span className="sr-only">HTML5</span></div>
                        <div className="col"><i className="fab fa-css3-alt fa-3x" title="CSS3" aria-hidden="true"></i><span className="sr-only">CSS3</span></div>
                        <div className="col"><i className="fab fa-react fa-3x" title="ReactJS" aria-hidden="true"></i><span className="sr-only">ReactJS</span></div>
                    </div>
                    <br />

                    <h3>操作系统</h3>
                    <div className="row padding">
                        <div className="col"><i className="fab fa-ubuntu fa-3x" title="Ubuntu" aria-hidden="true"></i><span className="sr-only">Ubuntu</span></div>
                        <div className="col"><i className="fab fa-windows fa-3x" title="Windows" aria-hidden="true"></i><span className="sr-only">Windows</span></div>
                        <div className="col"><i className="fab fa-apple fa-3x" title="macOS" aria-hidden="true"></i><span className="sr-only">macOS</span></div>
                    </div>
                    <br />

                    <h3>软件技能</h3>
                    <div className="row padding">
                        <div className="col"><i className="fab fa-wordpress fa-3x" title="WordPress 的使用" aria-hidden="true"></i><span className="sr-only">WordPress</span></div>
                        <div className="col"><i className="fab fa-aws fa-3x" title="Amazon Web Services: SES and EC2" aria-hidden="true"></i><span className="sr-only">Amazon Web Services</span></div>
                        <div className="col"><i className="fab fa-markdown fa-3x" title="Markdown" aria-hidden="true"></i><span className="sr-only">Markdown</span></div>
                    </div>
                    <br />
                    <div className="row padding">
                        <div className="col"><i className="fas fa-file-excel fa-3x" title="Microsoft Excel" aria-hidden="true"></i><span className="sr-only">Microsoft Excel</span></div>
                        <div className="col"><i className="fas fa-file-word fa-3x" title="Microsoft PowerPoint" aria-hidden="true"></i><span className="sr-only">Microsoft Excel</span></div>
                        <div className="col"><i className="fas fa-file-powerpoint fa-3x" title="Microsoft Word" aria-hidden="true"></i><span className="sr-only">Microsoft Excel</span></div>
                    </div>
                    <br />

                    </section>
            </main>
        </div>
      </div>
    </Layout>
  )
}

export default Resume