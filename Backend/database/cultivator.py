from models.cultivator import Cultivator
from sqlalchemy.orm import Session

def cultivator_helper(cultivator:Cultivator)->dict:
    return{
        "id":cultivator.id,
        "company_id":cultivator.company_id,
        "name":cultivator.name,
        "active":cultivator.active,
        "created_at":cultivator.created_at,
        "created_by":cultivator.created_by,
        "updated_at":cultivator.updated_at,
        "updated_by":cultivator.updated_by
    }

def get_cultivators(db:Session)->Cultivator:
    return db.query(Cultivator).all()

def get_cultivator(db:Session,id:int)->Cultivator:
    return db.query(Cultivator).filter(Cultivator.id == id).first()
def get_cultivator_by_farmer_company_id(db:Session,comp_id:int)->Cultivator:
     return db.query(Cultivator).filter(Cultivator.company_id == comp_id).first()

def add_cultivator(db:Session,data:dict)->Cultivator:
        new_cultivator = Cultivator(**data)
        db.add(new_cultivator)
        db.commit()
        db.refresh(new_cultivator)
        return new_cultivator

def update_cultivator(db:Session,id:int,data:dict)->bool:
     existing_cultivator = db.query(Cultivator).filter(Cultivator.id == id).first()
     if not existing_cultivator:
          return False
     for key, value in data.items():
          setattr(existing_cultivator,key,value)
     db.commit()
     db.refresh(existing_cultivator)
     return True

def delete_cultivator(db:Session,id:int)->bool:
     existing_cultivator = db.query(Cultivator).filter(Cultivator.id == id).first()
     if existing_cultivator:
          db.delete(existing_cultivator)
          db.commit()
          return True
     return False 