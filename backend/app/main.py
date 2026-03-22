from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# Changed to absolute imports to fix the "Could not import module" error
from app.routers import profile, projects 

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

@app.get("/root")
async def root():
    """Fallback root route for layered mode verification."""
    return {"message": "Portfolio API is running in Layered Mode"}