import React,{useState,useEffect} from 'react'



const Home = () => {
  return (
    <section className='max-w-7xl mx-auto'>
        <div>
            <h1 className='font-extrabold text-[#feffff] text-[32px]'>
                Вредное😷 полезное😉
            </h1>
            <p className='mt-2 text-[#a2a7ab] text-[14px] max-w[500px]'>
              Узнайте про вредных привычек нажав кнопку сверху
            </p>
        </div>
        <div className="mt-16">
        <iframe width="full" height="315" src="https://www.youtube.com/embed/5kI500Qm0n4?si=s2RmVBnR6xp0PzuL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      </div>
        <div className='mt-10'>
        <iframe width="full" height="315" src="https://www.youtube.com/embed/WqTA9MnWhW0?si=nd6agnGSN7lCHB--" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      

        </div>

    </section>
  )
}

export default Home