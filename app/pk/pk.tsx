import GlowingNode from "../components/GlowingNode";
import { 
  SiCplusplus, SiC, SiPython, SiJavascript, SiTypescript, SiPhp,
  SiNodedotjs, SiNestjs, SiExpress, SiLaravel, SiGraphql, SiSocketdotio,
  SiDocker, SiPostgresql, SiSqlite, SiPug,
  SiReact, SiNextdotjs, SiCss, SiTailwindcss, SiGit, SiGithub, SiTelegram
} from 'react-icons/si';
import { FaServer, FaCogs, FaBug, FaVial, FaUsers, FaLightbulb, FaClock, FaComments, FaDatabase, FaShieldAlt } from 'react-icons/fa';

const iconMap: Record<string, React.ReactNode> = {
  'C++': <SiCplusplus color="#00599C" />,
  'C': <SiC color="#A8B9CC" />,
  'Python': <SiPython color="#3776AB" />,
  'JavaScript': <SiJavascript color="#F7DF1E" />,
  'TypeScript': <SiTypescript color="#3178C6" />,
  'PHP': <SiPhp color="#777BB4" />,

  'Node.js': <SiNodedotjs color="#339933" />,
  'NestJS': <SiNestjs color="#E0234E" />,
  'Express': <SiExpress color="#ffffff" />,
  'Laravel': <SiLaravel color="#FF2D20" />,
  'MVC / MVP': <FaCogs color="#A8B9CC" />,
  'PMS Systems': <FaServer color="#A8B9CC" />,
  'GraphQL': <SiGraphql color="#E10098" />,
  'Socket.IO': <SiSocketdotio color="#ffffff" />,
  'Docker': <SiDocker color="#2496ED" />,
  'PostgreSQL': <SiPostgresql color="#4169E1" />,
  'SQL Server': <FaDatabase color="#CC292B" />,
  'SQLite': <SiSqlite color="#003B57" />,
  'PUG': <SiPug color="#A86454" />,
  'EJS': <SiJavascript color="#B4CA65" />,
  'Git': <SiGit color="#F05032" />,
  'GitHub': <SiGithub color="#ffffff" />,

  'React.js': <SiReact color="#61DAFB" />,
  'Next.js': <SiNextdotjs color="#ffffff" />,
  'CSS': <SiCss color="#1572B6" />,
  'Tailwind CSS': <SiTailwindcss color="#06B6D4" />,

  'Teamwork': <FaUsers color="#A8B9CC" />,
  'Problem Solving': <FaLightbulb color="#FFD700" />,
  'Time Management': <FaClock color="#A8B9CC" />,
  'Communication': <FaComments color="#A8B9CC" />,
  'Data Analytics & Debugging': <FaBug color="#A8B9CC" />,
  'Telegram Bots': <SiTelegram color="#26A5E4" />,
  'Testing': <FaVial color="#A8B9CC" />,

  'Bug Bounty': <FaShieldAlt color="#FF4500" />
};

export default function PK(){ 
  return (
     
    <section className="bk" id="bk">


        <div className="about">
            <h2>About Me</h2>
            <p>Software Engineer focused on building fast, scalable, and real-time applications. I help businesses and startups turn ideas into high-performance systems using modern technologies. Build scalable backend systems using Node.js, NestJS, and Express. Develop real-time features such as chat, notifications, and live updates using WebSockets and Socket.IO. Design efficient APIs with GraphQL and REST to improve performance and reduce server load. Deliver production-ready applications using Docker for smooth deployment. Work with relational databases including PostgreSQL and SQL Server with optimized queries. Build modern and responsive user interfaces using React, Next.js, and Tailwind CSS. I focus on delivering solutions that are scalable, efficient, and ready for real-world use.</p>
        </div>

        <div className="skills" id="skills">
            <h2>Skills</h2>
            
            <h3>Programming</h3>
            <div className="skills-grid">
                {['C++', 'C', 'Python', 'JavaScript', 'TypeScript', 'PHP'].map((skill, i) => (
                    <GlowingNode key={skill} skill={skill} delay={i * 50} icon={iconMap[skill]} />
                ))}
            </div>

            <h3 style={{marginTop: '20px'}}>Back-End</h3>
            <div className="skills-grid">
                {['Node.js', 'NestJS', 'Express', 'Laravel', 'MVC / MVP', 'PMS Systems', 'GraphQL', 'Socket.IO', 'Docker', 'PostgreSQL', 'SQL Server', 'SQLite', 'PUG', 'EJS', 'Git', 'GitHub'].map((skill, i) => (
                    <GlowingNode key={skill} skill={skill} delay={i * 50} icon={iconMap[skill]} />
                ))}
            </div>

            <h3 style={{marginTop: '20px'}}>Front-End</h3>
            <div className="skills-grid">
                {['React.js', 'Next.js', 'CSS', 'Tailwind CSS'].map((skill, i) => (
                    <GlowingNode key={skill} skill={skill} delay={i * 50} icon={iconMap[skill]} />
                ))}
            </div>

            <h3 style={{marginTop: '20px'}}>Cyber Security</h3>
            <div className="skills-grid">
                {['Bug Bounty'].map((skill, i) => (
                    <GlowingNode key={skill} skill={skill} delay={i * 50} icon={iconMap[skill]} />
                ))}
            </div>

            <h3 style={{marginTop: '20px'}}>Soft Skills & Other</h3>
            <div className="skills-grid">
                {['Teamwork', 'Problem Solving', 'Time Management', 'Communication', 'Data Analytics & Debugging', 'Telegram Bots', 'Testing'].map((skill, i) => (
                    <GlowingNode key={skill} skill={skill} delay={i * 50} icon={iconMap[skill]} />
                ))}
            </div>
        </div>    
        

        
    </section>
  )
} 