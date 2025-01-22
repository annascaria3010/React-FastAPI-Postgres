from sqlalchemy.orm import Session
from fastapi import Depends
from database.config import get_db
from models.cultivator import CultivatorSchema,UpdateCultivatorSchema
from fastapi import APIRouter
# from database.response import ResponseModel,ErrorResponseModel
from database.cultivator import(
    get_cultivator,
    get_cultivators,
    get_cultivator_by_farmer_company_id,
    add_cultivator,
    delete_cultivator,
    update_cultivator,
    cultivator_helper
)

router = APIRouter()

@router.get("/",response_description="Data retrieved from the database")
def retrieve_cultivators(db:Session = Depends(get_db)):
    cultivators = get_cultivators(db)
    if cultivators:
        return [cultivator_helper(fc) for fc in cultivators]
    return "empty list returned"

@router.get("/{id}",response_description="Data retrieved from the database")
def retrieve_cultivator(id:int,db:Session = Depends(get_db)):
    cultivator = get_cultivator(db,id)
    if cultivator:
        return cultivator_helper(cultivator)
    return "empty list returned"
@router.get("/farmer-company-cultivators/{companyid}",response_description="Data retrieved from the database")
def retrieve_cultivator_by_farmer_company(id:int,db:Session = Depends(get_db)):
    cultivator = get_cultivator_by_farmer_company_id(db,id)
    if cultivator:
        return cultivator_helper(cultivator),"Data retrieved successfully"
    return "empty list returned"

@router.post("/",response_description="data added to database")
def add_cultivator_data(data:CultivatorSchema,db:Session = Depends(get_db)):
    added = add_cultivator(db,data.dict())
    if added:
        return cultivator_helper(added)
    return "Failed to add data to the database"

@router.put("/{id}",response_description="data updated")
def update_cultivator_data(data:UpdateCultivatorSchema, id:int, db:Session = Depends(get_db)):
    updated = update_cultivator(db,id,data.dict())
    if updated:
        return cultivator_helper(get_cultivator(db,id))
    return "Something went wrong unable to update data"

@router.delete("/{id}",response_description="data deleted successfully")
def remove_cultivator(id:int,db:Session=Depends(get_db)):
    deleted = delete_cultivator(db,id)
    if deleted:
        return f"Cultivator with id {id} deleted successfully"
    return "Something went wrong, unble to delete the data"