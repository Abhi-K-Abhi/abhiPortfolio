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
                "year": "2018 - 2022",
                "location": "Ahmedabad, India",
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
                "year": "2016 - 2018",
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
                "year": "2014 - 2016",
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

            # Update your profile.py with these specific keys
            {
                "id": "exp-azilen",
                "role": "AI & Software Engineer",
                "company": "Azilen Technologies",
                "mode": "Hybrid / Enterprise-Scale",
                "image_url": "/assets/exp/azilen-main.jpg", # Primary project/office image
                "responsibilities": [
                    "Architected secure backend modules using Java Spring Boot.",
                    "Developed Python-based AI connectors for data ingestion pipelines.",
                    "Optimized PostgreSQL schemas to handle high-frequency data streams."
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
            "id": "exp-02",
            "company": "Suvidha Foundation",
            "role": "Full-Stack Developer (Intern)",
            "year": "June 2022 – Aug 2022",
            "location": "Remote / Ahmedabad",
            "desc": "Led the development of a production-ready platform using React.js and MySQL, focusing on user-centric interfaces and real-time data consistency.",
            "long_description": "Managed the full project lifecycle from ideation to deployment in a high-collaboration hybrid environment. I led the frontend architecture using React.js while simultaneously designing the relational database structures in MySQL to ensure a seamless end-to-end user experience.",
            "tech_stack": ["REACT.JS", "JAVASCRIPT", "MYSQL", "FIGMA", "BOOTSTRAP", "REST_API"],
            "detailed_points": [
                "Led the frontend development using React.js and Figma, building responsive, user-centric interfaces that synchronized perfectly with backend API flows.",
                "Designed and managed complex MySQL database structures, optimizing queries for efficient data handling and real-time retrieval.",
                "Collaborated with cross-functional teams via Microsoft Teams to manage the full project lifecycle, ensuring API consistency and data integrity.",
                "Implemented automated data validation and filtering layers to minimize operational errors and maintain system reliability in a production-ready environment.",
                "Gained hands-on experience in DevOps practices, supporting CI/CD deployments and ensuring cross-platform UI/UX consistency."
            ],
            "impact_metrics": "Production-Grade Deployment | 100% Data Consistency | Optimized Query Performance"
            },
            {
            "id": "exp-03",
            "company": "Media Platforms",
            "role": "Backend Developer (Intern)",
            "year": "May 2021 – July 2021",
            "location": "Ahmedabad, India",
            "desc": "Developed high-performance Python-Django modules for large-scale relational datasets and optimized business logic for data-driven analytics.",
            "long_description": "Served as a solo contributor for critical backend modules, focusing on the architecture of data-processing layers. I specialized in optimizing complex SQL queries to identify missing records and validate integrity across multi-table datasets.",
            "tech_stack": ["PYTHON", "DJANGO", "SQL", "DATA_VALIDATION", "REST_FRAMEWORK"],
            "detailed_points": [
                "Independently developed Python–Django backend modules to process and analyze multi-table relational datasets with zero supervised failures.",
                "Optimized complex SQL business logic layers, significantly improving query performance and data retrieval speed for large-scale analytical workflows.",
                "Implemented structured data filtering and validation layers to ensure 100% data integrity for missing record identification.",
                "Strengthened backend engineering fundamentals by designing scalable database schemas and high-efficiency REST API endpoints.",
                "Authored comprehensive technical documentation for data schemas to ensure long-term maintainability and reproducible analytics."
            ],
            "impact_metrics": "Solo Contributor Ownership | Optimized Analytical Workflows | High-Speed SQL Tuning"
            },
            {
            "id": "exp-04",
            "company": "Google Developer Student Clubs",
            "role": "Student Chapter Lead & Project Head",
            "year": "June 2021 – June 2022",
            "location": "Indus University",
            "desc": "Orchestrated technical workshops and mentored 15+ cross-functional teams on AI, Machine Learning, and Cloud Computing for 200+ students.",
            "long_description": "As the GDSC Lead, I acted as the bridge between Google’s technical resources and the student community. I managed large-scale technical events, mentored teams on production-level AI/ML pipelines, and delivered workshops on cutting-edge technologies.",
            "tech_stack": ["MACHINE_LEARNING", "GEN_AI", "ANDROID", "PUBLIC_SPEAKING", "PROJECT_MGMT"],
            "detailed_points": [
                "Managed and mentored 15+ cross-functional teams, coordinating developers and speakers to align technical goals with delivery timelines.",
                "Led 7+ technical workshops on Generative AI, Prompt Engineering, and Machine Learning, reaching over 200 active student participants.",
                "Oversaw student-led projects on Deep Learning and BDA, ensuring high-quality outcomes and timely deployment of AI/ML models.",
                "Directed the end-to-end planning and execution of technical events, maintaining high engagement and delivering hands-on sessions on Cloud and Android.",
                "Established reproducible analytics workflows and CI/CD foundations for student projects, fostering a culture of software engineering best practices."
            ],
            "impact_metrics": "200+ Students Mentored | 15+ Teams Managed | 7+ High-Impact Workshops"
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