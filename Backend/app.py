from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database.config import Base,engine
from routes.farmer_company import router as FarmerCompanyRouter
from routes.cultivator import router as CultivatorRouter

app = FastAPI()

Base.metadata.create_all(bind=engine)

origins = [
"http://localhost:3000",
"http://localhost:8000",
]

app.add_middleware(
CORSMiddleware,
allow_origins=["*"],
allow_credentials=True,
allow_methods=["*"],   
allow_headers=["*"],  
)
app.include_router(FarmerCompanyRouter, tags=["Farmer Company"],prefix = "/farmer")
app.include_router(CultivatorRouter, tags=["Cultivator"],prefix = "/cultivator")


@app.get("/",tags=["Root"])
def read_route():
    return {"Welcome":"Scaria!"}