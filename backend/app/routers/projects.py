from fastapi import APIRouter

router = APIRouter()

@router.get("/projects")
async def get_projects():
    return [
        {
            "id": 1,
            "title": "CI/CD AI Risk Engine",
            "tech": ["LLM", "ML", "Python", "Prompt Eng", " Fine Tuning", "GitHub"],
            "points": [
                            "Architected hybrid prediction system using fine-tuned Llama/Mistral models.",
                            "Boosted F1-score by 10% via advanced CoT and Few-Shot prompt engineering.",
                            "Engineered ML pipelines with vectorized batching for high-speed training.",
                            "Benchmarked performance across NN, SVM, and Random Forest classifiers."
                        ]
        },

        {
            "id": 2,
            "title": "Unified Workspace Connector",
            "tech": ["Spring Boot", "Java", "OAuth2", "APIs"],
            "points": [
                            "Integrated Jira, Teams, and Outlook APIs into a centralized Spring Boot hub.",
                            "Implemented secure OAuth2 flows for cross-platform data synchronization.",
                            "Developed unified data schemas to aggregate disparate SaaS provider outputs.",
                            "Built real-time notification triggers for multi-platform event monitoring."
                        ]
        },

        {
            "id": 3,
            "title": "Production Canteen CMS",
            "tech": ["React", ".NET", "Postgre", "Postman", "GitHub Copilot"],
            "points": [
                            "Developed production-grade CMS handling 100+ daily transactions with zero downtime.",
                            "Automated communication via Cron-jobs, reducing manual effort by 90%.",
                            "Reduced load times by 43% through server-side rendering and query tuning.",
                            "Applied SOLID principles to ensure modular and maintainable backend architecture."
                        ]
        },

        {
            "id": 4,
            "title": "Flappy Bird: Evolutionary AI",
            "tech": ["NEAT Algorithm", "Python", "Mathematics", "Matplotlib"],
            "points": [
                            "Evolved autonomous neural networks using NEAT for physics-based gameplay.",
                            "Designed custom fitness functions for rapid model convergence and learning.",
                            "Optimized weight distributions using genetic crossover and mutation operators.",
                            "Visualized generation-wise metrics via Matplotlib for topology optimization."
                        ]
        },

        {
            "id": 5,
            "title": "Real-time Auction Engine",
            "tech": ["Python", "WebSockets", "Django"],
            "points": [
                            "Engineered high-concurrency bidding platform using Django and WebSockets.",
                            "Achieved sub-second latency for live updates in competitive environments.",
                            "Implemented secure transaction logging to ensure 100% data integrity.",
                            "Optimized database locking mechanisms to handle peak traffic bid bursts."
                        ]
        },
        {
            "id": 6,
            "title": "Weather Dashboard",
            "tech": ["React", "Python", "RESTful API", "PostgresSQL", "GitHub"],
            "points": [
                            "Built full-stack dashboard with real-time OpenWeatherMap API integration.",
                            "Managed user search persistence using Python and PostgreSQL backend.",
                            "Developed dynamic data visualizations for humidity and temperature trends.",
                            "Implemented robust error handling and geolocation-based auto-search."
                        ]
        },
    
        {
            "id": 7,
            "title": "OS Disk Simulator",
            "tech": ["PyQt5", "Matplotlib", "Python", "OOP", "Pandas"],
            "points": [
                            "Developed GUI-based FCFS simulator with real-time job execution tracking.",
                            "Integrated dynamic Matplotlib plotting for hardware-level process monitoring.",
                            "Applied OOP principles for efficient queue management and modular design.",
                            "Optimized scheduler responsiveness by reducing I/O simulation overhead."
                        ]
        }



    ]