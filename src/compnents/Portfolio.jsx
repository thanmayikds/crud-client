
import "./portfolio.css"

export const Portfolio=()=>{
  return <div className="cv-container">
    <div className="header">
        <h1>thanmayi kds</h1>
        <p>Email: your@email.com | Phone: +123456789</p>
        <p>Location: Your City, Country</p>
    </div>

    <div className="section">
        <h2>Profile</h2>
        <p>
            A motivated and dedicated professional seeking opportunities to apply my skills
            and grow in a challenging environment.
        </p>
    </div>

    <div className="section">
        <h2>Education</h2>
        <p><strong>Bachelor of Science in Computer Science</strong></p>
        <p>University Name — 2021 to 2024</p>
    </div>

    <div className="section">
        <h2>Experience</h2>
        <p><strong>Web Developer Intern</strong></p>
        <p>Company Name — 2023</p>
        <ul>
            <li>Developed responsive web pages using HTML and CSS</li>
            <li>Assisted in website maintenance and updates</li>
            <li>Collaborated with the design team</li>
        </ul>
    </div>

    <div className="section">
        <h2>Skills</h2>
        <div class="two-column">
            <div>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Git & GitHub</li>
                    <li>Responsive Design</li>
                    <li>Problem Solving</li>
                </ul>
            </div>
        </div>
    </div>

    <div className="section">
        <h2>Languages</h2>
        <ul>
            <li>English</li>
            <li>Your Native Language</li>
        </ul>
    </div>
</div>

}