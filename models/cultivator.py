from database.config import Base
from pydantic import BaseModel
from sqlalchemy import String, Boolean, ForeignKey, Integer, Column, DateTime
from datetime import datetime
from typing import Optional

class Cultivator(Base):
    __tablename__ = "cultivator"
    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("farmer_company.id"), nullable=False)
    name = Column(String, nullable = False)
    active = Column(Boolean, nullable = False)
    created_at = Column(DateTime, default = datetime.now)
    updated_at = Column(DateTime, default = datetime.now)
    created_by = Column(String, nullable = False)
    updated_by = Column(String, nullable = False)

class CultivatorSchema(BaseModel):
    company_id = int
    name = str
    active = bool
    created_at = DateTime
    updated_at = DateTime
    created_by = String
    updated_by = String 
    
class Config:
    from_attributes = True

class UpdateCultivatorSchema(BaseModel):
    company_id = Optional[int]
    name = Optional[str]
    active = Optional[bool]
    created_at : Optional[datetime]
    created_by: Optional[str]
    updated_at: Optional[datetime]
    updated_by: Optional[str]

class Config:
    from_attributes = True