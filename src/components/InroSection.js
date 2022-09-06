import React from 'react'
import InroCard from './InroCard'

const InroSection = () => {
  return (

<div id='what' className='mx-[120px] py-[60PX] '>

  {/* intro cards */}
<div  className='flex justify-center gap-10 mt-12 flex-wrap	'>

{/* community */}
<InroCard btnMsg="Community" cardHead1="Our" cardHead2="Community" cardTop="Coummunity."  description="Be part of our community. Get you problem's solution and solve others and earn points"/>


{/* live  */}
<InroCard btnMsg="Create Room" cardHead1="Live Code" cardHead2="Share" cardTop="Live." description="Share your code live with anyone with live editing"/>

{/* web dev  */}
<InroCard btnMsg="Create Playground" cardHead1="Web Dev" cardHead2="Playground" cardTop="Web" description="Playground for start your web development journey"/>

{/* languages */}
<InroCard btnMsg="Create Playground" cardHead1="Other" cardHead2="Languages" cardTop="Languages" description="Playground for almost every programming language, Code directly in browser"/>
</div>

</div>
    
  )
}

export default InroSection