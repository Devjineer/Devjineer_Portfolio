import React from 'react'
import { RegularList } from '../_design-patterns'
import { socialLinks } from '../../constants'
import SocialIcon from './SocialIcon'

const Connect = () => {
  return (
    <div className='flex items-center gap-x-2'>
      <RegularList data={socialLinks} component={SocialIcon} />
    </div>
  )
}

export default Connect