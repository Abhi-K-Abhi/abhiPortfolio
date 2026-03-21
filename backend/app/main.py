from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# We import the routers we just created from the local 'routers' folder
from .routers import profile, projects 

app = FastAPI(title="Abhi Patel Portfolio API")

# Professional Middleware for Vercel communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # We will restrict this later for security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Layer Connection
# 'prefix' adds "/api" to every route automatically.
# 'tags' groups them in the auto-generated documentation (/docs).
app.include_router(profile.router, prefix="/api", tags=["Profile"])
app.include_router(projects.router, prefix="/api", tags=["Projects"])

@app.get("/")
async def health_check():
    """Basic route to ensure the server is alive."""
    return {
        "status": "online",
        "message": "Abhi Patel's Portfolio API is running in modular mode"
    }