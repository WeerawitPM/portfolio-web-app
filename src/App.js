import './App.css';
import Navbar from './components/navbar/navbar';
import boy from "./images/boy.png";
import ReactTypingEffect from 'react-typing-effect';
import boy2 from "./images/boy2.png";

function App() {
  return (
    <body>
      <Navbar />
      <div className="content">
        <div className="container" id="profile">
          <img src={boy} alt="profile" />
          <h1><ReactTypingEffect className="typingText" text={['My Name is Goodboy.', 'I am Web Developer.']} speed={100} eraseSpeed={100} eraseDelay={1500} typingDelay={2000} /></h1>
        </div>

        <hr></hr>

        <div className="container" id="about">
          <h1>About Me</h1>
          <div className="row">
            <div className="column flex-end">
              <img src={boy2} alt="profile" />
            </div>
            <div className="column flex-start">
              <h2>นายเด็กดี จริงใจ</h2>
              <h3>อาชีพ : Web Developer</h3>
              <p>ชื่นชอบการเขียนเว็บแอปพลิเคชัน เวลาว่างชอบศึกษาหาความรู้พัฒนาตนเองอยู่ตลอดเวลา.</p>
              <p>อายุ:21 Email:63030079@kmitl.ac.th</p>
              <p>โทร:099-999-999</p>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="container" id="skills">
          <h1>Skills</h1>
          <div className="container-skills">
            <p>HTML</p>
            <div class="skills-bar">
              <div class="skills html">90%</div>
            </div>
          </div>
          <div className="container-skills">
            <p>CSS</p>
            <div class="skills-bar">
              <div class="skills css">80%</div>
            </div>
          </div>
          <div className="container-skills">
            <p>JavaScript</p>
            <div class="skills-bar">
              <div class="skills js">65%</div>
            </div>
          </div>
          <div className="container-skills">
            <p>PHP</p>
            <div class="skills-bar">
              <div class="skills php">60%</div>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="container" id="education">
          <h1>Education</h1>
          <div class="timeline">
            <div class="container-timeline">
              <div class="content-timeline">
                <h2>2017</h2>
                <p>High School.</p>
              </div>
            </div>
            <div class="container-timeline">
              <div class="content-timeline">
                <h2>2016</h2>
                <p>High School.</p>
              </div>
            </div>
            <div class="container-timeline">
              <div class="content-timeline">
                <h2>2015</h2>
                <p>High School.</p>
              </div>
            </div>
            <div class="container-timeline">
              <div class="content-timeline">
                <h2>2012</h2>
                <p>High School.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </body>
  );
}

export default App;
