from fastapi import APIRouter

router = APIRouter()

@router.get("/profile")
async def get_profile():
    return {
        "name": "Abhi Patel",
        "summary": "Master of Engineering graduate specializing in scalable web apps and AI-driven systems.",
        "strengths": ["Analytical Thinking", "Quick Learner", "Ethical Engineering", "Leadership"],
        "education": [
            {
                "id": "edu-master",
                "degree": "Master of Engineering",
                "major": "Software Engineering",
                "uni": "Concordia University",
                "year": "2023 - 2025",
                "location": "Montreal, QC",
                "cgpa": "3.2 / 4.0",
                "details": [
                    "Specialized in Cloud Computing and Advanced Software Architecture.",
                    "Focusing on Distributed Systems and AI-driven defect detection research.",
                    "Engaged in advanced software design methodologies and ethical engineering."
                ]
            },
            {
                "id": "edu-bachelor",
                "degree": "Bachelor of Technology",
                "major": "Computer Science Engineering",
                "uni": "Indus University",
                "year": "2019 - 2023",
                "location": "Gujarat, India",
                "cgpa": "9.85 / 10.0",
                "details": [
                    "Achieved a near-perfect CGPA of 9.85/10.0.",
                    "Led the Google Developer Student Club (GDSC) as Chapter Lead.",
                    "Ranked in the top 1% of the Computer Science department."
                ]
            },
            {
                "id": "edu-hsc",
                "degree": "Higher Secondary (HSC)",
                "major": "Science (PCM)",
                "uni": "GSHSEB Board",
                "year": "2019",
                "location": "Gujarat, India",
                "cgpa": "85%",
                "details": [
                    "Focused on Physics, Chemistry, and Advanced Mathematics.",
                    "Developed foundational analytical and problem-solving skills."
                ]
            },
            {
                "id": "edu-ssc",
                "degree": "Secondary School (SSC)",
                "major": "General Science",
                "uni": "GSHSEB Board",
                "year": "2017",
                "location": "Gujarat, India",
                "cgpa": "91%",
                "details": [
                    "Graduated with distinction.",
                    "Recognized for excellence in Mathematics and Science."
                ]
            }
        ],
        "skills": [
            {"name": "React.js", "level": "Advanced"},
            {"name": "Python", "level": "Advanced"},
            {"name": "ASP.NET Core", "level": "Advanced"},
            {"name": "Gen-AI / ML", "level": "Intermediate"},
            {"name": "Docker", "level": "Learning"}
        ],
        "experience": [
                        {
                            "id": "exp-azilen",
                            "role": "AI Software Engineer",
                            "company": "Azilen Technologies",
                            "year": "Dec 2022 - Dec 2023",
                            "mode": "Hybrid",
                            "image_url": "/assets/exp/azilen-main.jpg",
                            "location": "Ahmedabad, India",
                            "desc": "Architecting secure backend modules and AI-driven data ingestion pipelines for high-frequency enterprise environments.",
                            "responsibilities": [
                                "Architected secure backend modules using Java Spring Boot.",
                                "Developed Python-based AI connectors for data ingestion pipelines.",
                                "Optimized PostgreSQL schemas to handle high-frequency data streams.",
                                "Integrated LLM processing middleware for automated data analysis."
                            ],
                            "depth_ride": {
                                "start": "Joined as Backend Engineer focusing on API security.",
                                "growth": "Pivoted to AI integration, building custom middleware for LLM processing.",
                                "peak": "Led the optimization of the core data engine, reducing latency by 40%."
                            },
                            "data_flow": [
                                {"node": "Data Source", "desc": "Enterprise CRM/ERP Systems"},
                                {"node": "AI Connector", "desc": "Python FastAPI Middleware"},
                                {"node": "Processing", "desc": "Vector Embedding & LLM Analysis"},
                                {"node": "Storage", "desc": "PostgreSQL + Redis Cache"}
                            ],
                            "tech_stack": ["JAVA_SPRING", "PYTHON", "POSTGRESQL", "DOCKER", "REDIS"],
                            "impact_metrics": ["40% Latency Reduction", "99.9% API Uptime"]
                        },
                        {
                            "id": "exp-suvidha",
                            "role": "Data Engineer (Intern)",
                            "company": "Suvidha Foundation",
                            "year": "May 2022 – Aug 2022",
                            "mode": "Hybrid",
                            "image_url": "/assets/exp/suvidha-main.jpg",
                            "location": "Ahmedabad, India",
                            "desc": "Led the development of production-ready platforms and automated pipelines for multi-table relational datasets.",
                            "responsibilities": [
                                "Architected responsive, user-centric interfaces in React.js integrated with RESTful API flows.",
                                "Developed and maintained automated Python data pipelines for multi-table relational datasets.",
                                "Optimized complex MySQL schemas and queries to improve high-frequency data retrieval performance.",
                                "Containerized backend services using Docker to create reproducible cloud-native environments."
                            ],
                            "depth_ride": {
                                "start": "Joined as a Full-Stack Intern focusing on UI/UX and React.js frontend architecture.",
                                "growth": "Pivoted into Data Engineering, engineering validation layers for automated analytical workflows.",
                                "peak": "Successfully deployed a production-grade platform with containerized microservices and optimized SQL."
                            },
                            "data_flow": [
                                {"node": "Frontend", "desc": "React.js + Bootstrap UI"},
                                {"node": "Logic Layer", "desc": "JavaScript API & Python Data Logic"},
                                {"node": "Database", "desc": "MySQL Relational Architecture"},
                                {"node": "DevOps", "desc": "Docker Containerization & CI/CD"}
                            ],
                            "tech_stack": ["REACT.JS", "PYTHON", "MYSQL", "DOCKER", "FIGMA", "BOOTSTRAP"],
                            "impact_metrics": ["100% Data Consistency", "Production-Ready Deployment", "Optimized Query Performance"]
                        },
                        {
                            "id": "exp-media",
                            "role": "Backend Developer (Intern)",
                            "company": "Media Platforms",
                            "year": "May 2021 – Jul 2021",
                            "mode": "Remote",
                            "image_url": "/assets/exp/media-main.jpg",
                            "location": "Ahmedabad, India",
                            "desc": "Developed high-performance Python-Django modules for large-scale relational datasets and optimized business logic for data-driven analytics.",
                            "responsibilities": [
                                "Independently engineered Django backend modules to process multi-table relational datasets.",
                                "Designed and optimized complex SQL queries, achieving a 40% reduction in query latency.",
                                "Implemented structured data filtering and validation layers to ensure 100% data integrity.",
                                "Conducted comprehensive unit testing using PyTest to uphold high-quality software standards."
                            ],
                            "depth_ride": {
                                "start": "Joined as a solo contributor to take ownership of critical backend data-processing layers.",
                                "growth": "Pivoted toward database optimization, specializing in identifying missing records across massive MySQL datasets.",
                                "peak": "Successfully strengthened the core analytical engine, improving retrieval speeds for real-time reporting."
                            },
                            "data_flow": [
                                {"node": "Data Source", "desc": "Relational MySQL Datasets"},
                                {"node": "Logic Layer", "desc": "Python-Django Business Logic"},
                                {"node": "Optimization", "desc": "SQL Query Tuning & Latency Reduction"},
                                {"node": "Validation", "desc": "PyTest & Integrity Filtering"}
                            ],
                            "tech_stack": ["PYTHON", "DJANGO", "SQL", "PYTEST", "REST_FRAMEWORK", "LINUX"],
                            "impact_metrics": ["40% Latency Reduction", "Solo Contributor Ownership", "Zero Supervised Failures"]
                        },
                        {
                            "id": "exp-gdsc",
                            "role": "GDSC Project Head",
                            "company": "Google Developer Student Clubs",
                            "year": "Jun 2021 – Jun 2022",
                            "mode": "In-Person",
                            "image_url": "/assets/exp/gdsc-main.jpg",
                            "location": "Indus University",
                            "desc": "Orchestrated technical workshops and mentored 15+ cross-functional teams on AI, Machine Learning, and Cloud Computing for 200+ students.",
                            "responsibilities": [
                                "Led 7+ high-impact technical workshops on GenAI, ML, and Python for a community of 200+ students.",
                                "Mentored 15+ cross-functional teams, overseeing the end-to-end execution of AI/ML pipelines.",
                                "Managed the full project lifecycle for student-led initiatives in Deep Learning and Big Data Analytics.",
                                "Established CI/CD foundations and reproducible analytics workflows for chapter-wide technical projects."
                            ],
                            "depth_ride": {
                                "start": "Appointed as Chapter Lead to bridge the gap between Google's technical resources and the student community.",
                                "growth": "Scaled the chapter by coordinating speakers and developers, delivering hands-on sessions on model deployment.",
                                "peak": "Successfully directed 7+ major events, fostering a culture of software engineering best practices and Agile delivery."
                            },
                            "data_flow": [
                                {"node": "Strategy", "desc": "Curriculum Planning & Event Roadmap"},
                                {"node": "Mentorship", "desc": "Cross-Functional Team Coordination"},
                                {"node": "Execution", "desc": "Live Workshops & Hands-on Lab Delivery"},
                                {"node": "Outcome", "desc": "Deployment of AI/ML Student Projects"}
                            ],
                            "tech_stack": ["MACHINE_LEARNING", "GEN_AI", "PYTHON", "SQL", "CI/CD", "PROJECT_MGMT"],
                            "impact_metrics": ["200+ Students Engaged", "15+ Teams Mentored", "7+ Workshops Delivered"]
                        }
                    ],
        "contact": {
            "email": "abhi1281.patel@gmail.com",
            "linkedin": "https://www.linkedin.com/in/abhi-patel-76a297218/",
            "github": "https://github.com/Abhi-K-Abhi/",
            "location": "Montreal, QC"
        },
        "sports": "State Level Cricket & Competitive Gaming (Call Of Duty)"
    }