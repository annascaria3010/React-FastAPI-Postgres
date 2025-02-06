import React from 'react'
import { GiMushroomGills } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
const  { t } = useTranslation();

  return (
    <div className='bot-body'>
      <h3 className="small-title">
              <GiMushroomGills />
              <span>{t('navbar.mush')}</span>
            </h3>
    </div>
  )
}

export default Sidebar