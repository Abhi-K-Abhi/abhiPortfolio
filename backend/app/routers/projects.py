from fastapi import APIRouter

router = APIRouter()

@router.get("/projects")
async def get_projects():
    return [
        {
        "id": 1,
        "title": "CI/CD AI Risk Engine",
        "category": "Artificial Intelligence & Machine Learning",
        "tech": [
            "HYBRID_AI(ML+LLM)",
            "PYTHON",
            "GITHUB_API",
            "PROMPT_ENG",
            "FINE_TUNING",
            "SCIKIT-LEARN"
        ],
        "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "github_url": "https://github.com/Abhi-K-Abhi/GENAI",
        "roadmapImage": "/assets/roadmap-bg-01.jpg", 
        "long_description": "This system automates risk assessment within DevOps pipelines by analyzing GitHub commit streams in real-time. By combining classical Machine Learning classifiers with fine-tuned Large Language Models, the engine identifies defect-prone code changes before they hit production, preventing costly deployment failures.",
        "points": [
            "Hybrid Intelligence Architecture: Integrated fine-tuned LLMs (CodeLLaMA/Mistral) for semantic code analysis alongside traditional classifiers for structural pattern recognition.",
            "Performance Benchmarking: Achieved a 10% improvement in F1-score over baseline models through feature optimization and ensemble techniques.",
            "Enterprise Scalability: Optimized data pipelines using vectorized batch processing, significantly reducing inference latency for real-time monitoring.",
            "Advanced Prompt Engineering: Leveraged Zero-shot, Few-shot, and Chain-of-Thought techniques to extract semantic signals from messy code diffs.",
            "Autonomous AI Monitoring: Engineered an AI agent to monitor GitHub commit streams and predict deployment risks using a hybrid architecture."
        ],
        "overcomes": [
            {
            "challenge": "Historical Git data is notoriously unstructured and noisy, containing inconsistent commit messages and messy code diffs that confuse standard ML models.",
            "solution": "Developed a custom preprocessing engine and Supervised Fine-Tuning (SFT) on curated datasets to transform raw code artifacts into high-dimensional semantic vectors."
            }
        ],
        "roadmap": [
            {
            "title": "Data Ingestion & Vectorization",
            "mainObjective": "Establish reliable data upstream",
            "subTasks": [
                "GitHub Webhook Microservice",
                "Commit Metadata Profiling",
                "Code-Diff Vectorization Engine",
                "Relational SQL Persistence"
            ]
            },
            {
            "title": "Hybrid Model Orchestration",
            "mainObjective": "Semantic & Structural Analysis",
            "subTasks": [
                "LLM Inference Service (Llama-3)",
                "Classical ML Pattern Classifier",
                "Prompt Engineering Optimizer",
                "F1-Score Benchmark Suite"
            ]
            },
            {
            "title": "Pipeline Integration",
            "mainObjective": "Real-time Defect Prediction",
            "subTasks": [
                "Jenkins/GitLab CI Trigger",
                "Automated Analytical Reporter",
                "Autonomous AI Agent Core",
                "Batch Processing Optimizer"
            ]
            }
        ]
        },

        {
        "id": 2,
        "title": "Evolutionary AI: Neural Agent",
        "category": "Neuroevolution & Genetic Algorithms",
        "tech": [
            "NEAT_ALGORITHM",
            "PYTHON",
            "PYGAME",
            "GENETIC_PROGRAMMING",
            "MATPLOTLIB",
            "NEURAL_NETWORKS",
        ],
        "video_url": "https://www.youtube.com/embed/your-ai-demo", 
        "github_url": "https://github.com/Abhi-K-Abhi/FlappyBird_Evolutionary-AI",
        "roadmapImage": "/assets/roadmap-bg-04.jpg", 
        "long_description": "An autonomous agent learning system built using NeuroEvolution of Augmenting Topologies (NEAT). The project simulates a Darwinian environment where neural networks evolve their own structure and weights over generations to master physics-based flight through complex obstacle navigation.",
        "points": [
            "NeuroEvolution Core: Developed self-learning agents using the NEAT algorithm, enabling neural networks to evolve both weights and topology without manual backpropagation.",
            "Genetic Optimization: Implemented selection, crossover, mutation, and speciation to ensure the survival of the fittest genomes while maintaining structural diversity.",
            "Heuristic Fitness Engineering: Designed complex reward strategies and fitness functions to guide autonomous behavior in dynamic, real-time environments.",
            "Real-time Neural Visualization: Leveraged Matplotlib to visualize generation-wise performance metrics, including average fitness trends and species convergence.",
            "Hyperparameter Tuning: Optimized population size, mutation rates, and survival thresholds to drastically reduce the number of generations required for agent mastery."
        ],
        "overcomes": [
            {
            "challenge": "Fixed-topology neural networks often struggle to adapt to the variable nature of real-time physics simulations, leading to stagnant learning (local minima).",
            "solution": "Utilized the NEAT algorithm to allow the neural network's 'brain' to grow and add new nodes/connections dynamically, finding more efficient solutions through evolution."
            }
        ],
        "roadmap": [
            {
            "title": "Simulation & Physics",
            "mainObjective": "Build the environment foundation",
            "subTasks": [
                "Pygame Physics Engine",
                "Collision Detection Logic",
                "Input/Output Sensor Mapping",
                "Agent Body Class (OOP)"
            ]
            },
            {
            "title": "Neural Evolution Setup",
            "mainObjective": "Initialize the learning brain",
            "subTasks": [
                "NEAT Configuration Mapping",
                "Neural Network Backbone",
                "Genome Initialization",
                "Fitness Function Design"
            ]
            },
            {
            "title": "Training & Visualization",
            "mainObjective": "Iterative agent optimization",
            "subTasks": [
                "Batch Generation Training",
                "Speciation & Crossover Logic",
                "Real-time Metric Tracking",
                "Convergence Trend Analysis"
            ]
            }
        ]
        },

        {
        "id": 3,
        "title": "Le-Gym: Enterprise Fitness Hub",
        "category": "Full-Stack System Architecture",
        "tech": [
            "REACT.JS",
            "NODE.JS",
            "POSTGRESQL",
            "RBAC_SECURITY",
            "STRIPE_API",
            "REDIS"
        ],
        "video_url": "https://www.youtube.com/embed/le-gym-demo",
        "github_url": "https://github.com/Abhi-K-Abhi/Le-Gym-Concordia",
        "roadmapImage": "/assets/roadmap-bg-06.jpg",
        "long_description": "A comprehensive, end-to-end fitness management ecosystem modeled after Concordia University's Le-Gym. Built with a focus on high-availability and security, the platform manages member subscriptions, real-time class scheduling, and secure financial transactions for a large-scale university demographic.",
        "points": [
            "Modular Enterprise Architecture: Applied SOLID principles to a Node.js/Express backend, ensuring a decoupled and highly maintainable codebase for multi-developer collaboration.",
            "RBAC Security Implementation: Engineered a robust Role-Based Access Control (RBAC) system to distinguish between Admin, Staff, and Student tiers, securing sensitive user data and financial records.",
            "Financial Orchestration: Integrated a secure payment gateway (Stripe) to handle subscription billing, class bookings, and digital receipts with automated transaction logging.",
            "Dynamic Feedback Loop: Developed a full-stack user feedback and administrative reporting system, enabling data-driven operational improvements based on real-time member input.",
            "High-Performance Data Modeling: Designed and optimized normalized PostgreSQL schemas to manage complex relational data between trainers, schedules, and 1000+ active members."
        ],
        "overcomes": [
            {
            "challenge": "Managing concurrent class bookings and subscription states for a large user base often leads to data race conditions and inconsistent scheduling.",
            "solution": "Implemented ACID-compliant transactions in PostgreSQL and a centralized scheduling service to ensure atomic updates for all member bookings and payments."
            }
        ],
        "roadmap": [
            {
            "title": "Architecture & Security",
            "mainObjective": "Define the secure system skeleton",
            "subTasks": [
                "Express/Node Server Boilerplate",
                "RBAC Middleware Logic",
                "JWT Identity Management",
                "SOLID Pattern Refactoring"
            ]
            },
            {
            "title": "Financials & Features",
            "mainObjective": "Develop core business logic",
            "subTasks": [
                "Stripe Gateway Integration",
                "Dynamic Class Scheduler",
                "Admin Analytics Dashboard",
                "Subscription State Machine"
            ]
            },
            {
            "title": "Deployment & Feedback",
            "mainObjective": "Launch and iterate",
            "subTasks": [
                "PostgreSQL Connection Pooling",
                "User Feedback Microservice",
                "Automated Receipt Generator",
                "Unit/Integration Testing"
            ]
            }
        ]
        },

        {
        "id": 4,
        "title": "OS Performance Analytics Suite",
        "category": "Systems Programming & Simulation",
        "tech": [
            "PYTHON",
            "PYQTGraph",
            "MATPLOTLIB",
            "NUMPY",
            "PANDAS",
            "OS_ALGORITHM_ANALYSIS"
        ],
        "video_url": "https://www.youtube.com/embed/os-sim-demo",
        "github_url": "https://github.com/Abhi-K-Abhi/OS-Scheduler-Sim",
        "roadmapImage": "/assets/roadmap-bg-07.jpg",
        "long_description": "A high-fidelity hardware-level orchestration simulator designed to visualize and evaluate Operating System scheduling logic. The suite simulates disk head movement and CPU process lifecycles, providing real-time statistical breakdowns of seek time, throughput, and utilization across multiple algorithmic strategies including FCFS, SJF, and Round Robin.",
        "points": [
            "System-Level Orchestration: Engineered a Python-based framework to simulate low-level disk I/O requests and CPU scheduling, modeling complex head movements and process queues.",
            "Comparative Algorithm Analysis: Built a reproducible experimental architecture to evaluate FCFS, Shortest Job First (SJF), and Round Robin efficiency using synthetic workloads.",
            "Real-time Hardware Monitoring: Developed dynamic Matplotlib visualizations to map execution timelines, identifying performance bottlenecks and seek-time distributions.",
            "Statistical Metric Engine: Leveraged NumPy and Pandas to calculate and model key performance indicators (KPIs) such as waiting time, CPU utilization, and total head movement.",
            "Optimized Modular Design: Applied OOP principles to ensure zero-downtime execution during request queue processing, allowing for modular updates to scheduling logic."
        ],
        "overcomes": [
            {
            "challenge": "Visualizing abstract hardware-level logic like disk seek-time and CPU context switching is difficult for performance tuning without a real-time feedback loop.",
            "solution": "Developed a GUI-based event-level logging system that transforms raw process data into interactive visual timelines, enabling precise Exploratory Data Analysis (EDA)."
            }
        ],
        "roadmap": [
            {
            "title": "Simulation Engine Core",
            "mainObjective": "Build the mathematical foundation",
            "subTasks": [
                "Disk Request Queue Logic",
                "CPU Process Lifecycle Manager",
                "OOP Scheduler Architecture",
                "Workload Generator (NumPy)"
            ]
            },
            {
            "title": "Visualization & UI",
            "mainObjective": "Transform data into insights",
            "subTasks": [
                "PyQt5 Dashboard Integration",
                "Live Matplotlib Plotting",
                "Seek-Time Distribution Maps",
                "Gantt Chart Generator"
            ]
            },
            {
            "title": "Analytics & Evaluation",
            "mainObjective": "Optimize system performance",
            "subTasks": [
                "KPI Calculation Engine",
                "Throughput Stress Testing",
                "Algorithm Comparison Suite",
                "Exportable Performance Reports"
            ]
            }
        ]
        },

        {
        "id": 5,
        "title": "Enterprise Canteen System",
        "category": "Full-Stack & Enterprise Architecture",
        "tech": [
            "JAVA",
            "REACT.JS",
            "POSTGRESQL",
            "DOCKER",
            "REST_API",
            "CRON_SCHEDULING",
            "GitHub"
        ],
        "video_url": "https://www.youtube.com/embed/your-canteen-demo", 
        "github_url": "NA",
        "roadmapImage": "/assets/roadmap-bg-02.jpg", 
        "long_description": "A production-grade, scalable Canteen Management System designed to handle 100+ daily transactions. Built with a modular microservices architecture, the platform synchronizes seamless frontend-backend data flow while automating high-frequency operational tasks.",
        "points": [
            "Modular Backend Architecture: Engineered a robust Java-Spring Boot backend using SOLID principles to ensure long-term maintainability and system reliability.",
            "Automated AI-Driven Workflows: Implemented Cron and Task scheduling for real-time updates, reducing manual operational effort by 90%.",
            "Performance Optimization: Reduced application load times by 43% through optimized server and client-side rendering for over 200 daily users.",
            "Data Retrieval Efficiency: Optimized complex PostgreSQL schemas and SQL queries, achieving a 50% improvement in data retrieval speed.",
            "Agile CI/CD Deployment: Containerized the entire ecosystem using Docker, reducing bug-fix turnaround time by 35% through consistent dev-prod environments."
        ],
        "overcomes": [
            {
            "challenge": "Manual canteen operations were prone to human error and high latency in real-time data synchronization across 200+ daily users.",
            "solution": "Developed a Microservices-oriented API architecture with automated notification triggers and optimized database indexing to ensure 100% data reliability."
            }
        ],
        "roadmap": [
            {
            "title": "Core System Architecture",
            "mainObjective": "Establish a scalable modular foundation",
            "subTasks": [
                "Spring Boot Microservices Setup",
                "PostgreSQL Schema Design",
                "SOLID Principle Implementation",
                "RESTful API Development"
            ]
            },
            {
            "title": "Automation & Optimization",
            "mainObjective": "Enhance speed and reduce manual overhead",
            "subTasks": [
                "Cron-Job Workflow Engine",
                "SQL Query Performance Tuning",
                "Client-Side Rendering (CSR) Optimization",
                "Real-Time Notification Service"
            ]
            },
            {
            "title": "Deployment & Scale",
            "mainObjective": "Ensure enterprise-grade reliability",
            "subTasks": [
                "Docker Containerization",
                "CI/CD Pipeline Integration",
                "Load Testing for 200+ Concurrent Users",
                "Cross-Platform UI Refinement"
            ]
            }
        ]
        },

        {
        "id": 6,
        "title": "Unified Workspace Connector",
        "category": "SaaS Orchestration & API Middleware",
        "tech": [
            "PYTHON",
            "REACT.JS",
            "OAUTH2.0",
            "PALLEN_UI",
            "REDIS_CAPPING",
            "JIRA/TEAMS/GITHUB_API"
        ],
        "video_url": "https://www.youtube.com/embed/workspace-sync-demo", 
        "github_url": "NA",
        "roadmapImage": "/assets/roadmap-bg-03.jpg", 
        "long_description": "A centralized intelligence hub designed to aggregate disparate data streams from enterprise SaaS providers. By unifying Jira, Microsoft Teams, GitHub, and Calendar APIs into a single-pane-of-glass dashboard, the system eliminates context-switching and provides real-time event monitoring across the entire development lifecycle.",
        "points": [
            "Cross-Platform Orchestration: Engineered a centralized Python hub to synchronize data between Jira (Task Tracking), Teams (Communication), and GitHub (Version Control).",
            "Secure OAuth2 Handshake: Implemented multi-tenant OAuth2 flows with encrypted token rotation to ensure secure cross-platform data synchronization.",
            "Unified Schema Mapping: Developed a standardized data model to aggregate and normalize disparate JSON outputs from various SaaS vendors into a single UI stream.",
            "Real-Time Notification Pallen: Built an asynchronous notification engine using FastAPI and WebSockets to trigger multi-platform alerts for critical system events.",
            "Performance Scaling: Leveraged Redis for API response caching, reducing redundant external network calls by 60% and improving dashboard responsiveness."
        ],
        "overcomes": [
            {
            "challenge": "Context-switching between 5+ different platforms caused significant productivity loss and fragmented project visibility for stakeholders.",
            "solution": "Architected a 'Unified Middleware' layer that polls and webhooks into external APIs, presenting a filtered, high-priority view of tasks and notifications in one React dashboard."
            }
        ],
        "roadmap": [
            {
            "title": "API Gateway & Security",
            "mainObjective": "Establish secure data tunnels",
            "subTasks": [
                "Multi-Provider OAuth2 Core",
                "Token Encryption Service",
                "FastAPI Middleware Setup",
                "Rate Limiting & Throttling"
            ]
            },
            {
            "title": "Data Aggregation Layer",
            "mainObjective": "Unify disparate SaaS outputs",
            "subTasks": [
                "Jira/Teams/Git Integrators",
                "Schema Normalization Engine",
                "Asynchronous Polling Service",
                "Redis Cache Implementation"
            ]
            },
            {
            "title": "Command Center UI",
            "mainObjective": "Deliver real-time visibility",
            "subTasks": [
                "React Dashboard Development",
                "WebSocket Notification Pallen",
                "Calendar/Timeline Visualizer",
                "Cross-Platform Event Triggers"
            ]
            }
        ]
        },
        
        {
        "id": 7,
        "title": "Real-time Auction Engine",
        "category": "High-Concurrency Backend Architecture",
        "tech": [
            "PYTHON_DJANGO",
            "REACT.JS",
            "WEBSOCKETS",
            "JWT_AUTH",
            "POSTGRESQL"
        ],
        "video_url": "https://www.youtube.com/embed/auction-engine-demo",
        "github_url": "https://github.com/Abhi-K-Abhi/Auction-Engine",
        "roadmapImage": "/assets/roadmap-bg-05.jpg",
        "long_description": "A high-performance bidding platform designed for low-latency auction environments. The system utilizes a robust Django-based REST API and WebSockets to synchronize bids across thousands of concurrent users, ensuring sub-second updates and atomic transaction integrity during peak traffic bursts.",
        "points": [
            "High-Concurrency Bidding Logic: Engineered a scalable auction core using Django and Python, managing complex relationships between Buyers, Sellers, and real-time Bids.",
            "Sub-Second State Sync: Integrated WebSockets to provide instant price updates and countdown timers, achieving a seamless 'Live' auction experience for competitive users.",
            "Financial Integrity & Security: Implemented secure transaction logging and JWT-based authentication via Djoser to prevent unauthorized bidding and ensure 100% data auditability.",
            "Optimized API Performance: Developed efficient Serializers and Viewsets that reduced database query overhead, enabling the system to handle heavy bid bursts without latency.",
            "Atomic Database Operations: Applied advanced SQL locking mechanisms to ensure that bid increments are processed sequentially, preventing race conditions in high-speed auctions."
        ],
        "overcomes": [
            {
            "challenge": "Handling thousands of simultaneous bids on a single item can lead to 'race conditions' where multiple users are recorded as the highest bidder at the same price.",
            "solution": "Implemented database-level atomic transactions and optimized the bidding view logic to validate timestamps and amounts in real-time before committing the bid to the ledger."
            }
        ],
        "roadmap": [
            {
            "title": "Foundation & Auth",
            "mainObjective": "Establish secure multi-tenant access",
            "subTasks": [
                "Custom UserAccount Modeling",
                "JWT & Djoser Integration",
                "Buyer/Seller Role Permissions",
                "REST API Endpoint Mapping"
            ]
            },
            {
            "title": "Bidding Core & Real-time",
            "mainObjective": "Enable high-speed updates",
            "subTasks": [
                "WebSocket Channel Setup",
                "Bid Validation Middleware",
                "Live Countdown Logic",
                "Automated Bid Status Updater"
            ]
            },
            {
            "title": "Scale & Optimization",
            "mainObjective": "Ensure performance under load",
            "subTasks": [
                "PostgreSQL Indexing & Optimization",
                "Atomic Transaction Guardrails",
                "React Dashboard Integration",
                "Concurrency Stress Testing"
            ]
            }
        ]
        }

        

        
    ]