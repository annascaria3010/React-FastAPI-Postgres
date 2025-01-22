from database.config import Base
from pydantic import BaseModel
from sqlalchemy import String, Boolean, Integer, Column,DateTime
from datetime import datetime
from typing import Optional

class FarmerCompany(Base):
    __tablename__ = "farmer_company"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    code = Column(Integer, nullable=False)
    active = Column(Boolean, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow)
    created_by = Column(String, nullable=False)
    updated_by = Column(String, nullable=False)

class FarmerCompanySchema(BaseModel):
    name: str
    code: int
    active: bool
    created_at: datetime
    updated_at: datetime
    created_by: str
    updated_by: str

    class Config:
        orm_mode = True

class UpdateFarmerCompanySchema(BaseModel):
    name: Optional[str]
    code: Optional[int]
    active: Optional[bool]
    created_at: Optional[datetime]
    created_by: Optional[str]
    updated_at: Optional[datetime]
    updated_by: Optional[str]

    class Config:
        orm_mode = True
