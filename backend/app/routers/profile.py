from fastapi import APIRouter

router = APIRouter()

@router.get("/profile") # Prefix "/api" will be added in main.py
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
                    "Conducted technical workshops for 200+ students on Cloud and Android.",
                    "Ranked in the top 1% of the Computer Science department."
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
                "year": "Dec, 2022 - 2023",
                "role": "Associate Software Engineer",
                "company": "Azilen Technologies",
                "desc": "Developed secure ASP.NET & Java apps using SOLID principles. Integrated CI/CD pipelines to improve delivery speed."
            },
            {
                "year": "Jun - Aug, 2022",
                "role": "Full-Stack Developer (Intern)",
                "company": "Suvidha Foundation",
                "desc": "Led frontend using React.js and Figma. Managed MySQL database structures for production-ready interfaces."
            },
            {
                "year": "May - Jul, 2021",
                "role": "Backend Developer (Intern)",
                "company": "Media Platforms",
                "desc": "Developed Python-Django modules for relational datasets. Optimized complex SQL queries to validate data integrity."
            },
            {
                "year": "June, 2021 - 2022",
                "role": "GDSC Student Chapter Lead",
                "company": "Google Developer Student Clubs",
                "desc": "Managed 15+ cross-functional teams and led technical workshops for 200+ students on Cloud and Android."
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