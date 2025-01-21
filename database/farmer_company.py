from models.farmer_company import FarmerCompany
from sqlalchemy.orm import Session

def farmer_company_helper(farmerData:FarmerCompany) -> dict:
    return {
        "id":farmerData.id,
        "name":farmerData.name,
        "code":farmerData.code,
        "active":farmerData.active,
        "created_at": farmerData.created_at,
        "created_by": farmerData.created_by,
        "updated_at": farmerData.updated_at,
        "updated_by":  farmerData.updated_by,
    }


def get_farmer_companies_data(db:Session) ->FarmerCompany:
    farmerData = db.query(FarmerCompany).all()
    return farmerData
    
def add_farmer_company_data(companyData:dict,db:Session)->FarmerCompany:
    try:
        new_data = FarmerCompany(**companyData)   
        db.add(new_data)
        db.commit()
        db.refresh(new_data)
        return new_data
    except:
        return "Something Went wrong.. Unable to add data to the database"
    
def update_farmer_company(db:Session,id:int,data:dict,)->bool:
        existing_farmer_company = db.query(FarmerCompany).filter(FarmerCompany.id == id).first()
        if not existing_farmer_company:
             return False
        for key, value in data.items():
             setattr(existing_farmer_company,key,value)
        db.commit()
        db.refresh(existing_farmer_company)
        return True             

def get_single_farmer_company(db:Session,id:int):
     farmer_company = db.query(FarmerCompany).filter(FarmerCompany.id == id).first()
     if farmer_company:
        return farmer_company
     return None

def delete_company(id:int,db:Session)->bool:
     existing_company = db.query(FarmerCompany).filter(FarmerCompany.id == id).first()
     if existing_company:
          db.delete(existing_company)
          db.commit()
          return True
     return False