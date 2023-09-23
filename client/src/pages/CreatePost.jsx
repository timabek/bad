import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets/assets'
import { getRandomPrompt } from '../utils'
import { FormField, Loader } from '../components'

const CreatePost = () => {
    const navigate = useNavigate();
    const [form,setForm] = useState({
        name: '',
        prompt: '',
        photo: '',
    });
    const [generatingImg, setGeneratingImg] = useState(false);
    const [loading, setLoading] = useState(false);

    const generateImage = async () => {
       if(form.prompt) {
        try{
          setGeneratingImg(true);
          const response = await fetch('http://localhost:8080/api/v1/dalle',{
            method: 'Post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: form.prompt}),
          })
          const data = await response.json();
          setForm({...form, photo: `data:image/jpeg;base64,${data.photo}`})
        }catch (error) {
          alert(error);
        }finally {
          setGeneratingImg(false)
        }
       }else{
        alert('you failed my boy')
       }
    }
    const handleSubmit = async (e) => {
      e.preventDefault();

      if(form.prompt && form.photo) {
        setLoading(true);

        try{
          const response = await fetch('http://localhost:8080/api/v1/post', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
          })
          await response.json();
          navigate('/')
        }catch (err) {
           alert(err)
        }finally{
          setLoading(false);
        }
      }else{
        alert('baby you have')
      }
    }
    const handleChange=(e)=>{
        setForm({ ...form, [e.target.name]: e.target.value})
    }
    const handleSurpriseMe=()=>{
        const randomPrompt = getRandomPrompt(form.prompt);
        setForm({ ...form,prompt: randomPrompt})
    }

  return (
    <section className='max-w-7xl mx-auto'>
        <div>
            <h1 className='font-extrabold text-[#f1f1f1] text-[32px]'>
               Вред сигарет 😢
            </h1>
            <p className='mt-2 text-[#d2dee7] text-[14px] max-w[500px]'>
                нажмите на кнопку для подробной информации
            </p>
            <a href="https://youtu.be/M-2Xr_lhuxk?si=ftnISoXWc5uzAgFR"><button className='bg-black border border-solid border-white text-white px-4 py-2 w-full rounded-md mt-10'>Вред</button></a>
            <a href="https://youtu.be/Oyj6YpeKMUM?si=n5u-CWzHAQNh_YH4"> <button className='bg-black border border-solid border-white text-white px-4 py-2 w-full rounded-md mt-10'>Для здоровье</button></a>
            
           
        </div>
        
            <div className='flex flex-col gap-5 mt-20'>
            <h1 className='font-extrabold text-[#050202] text-[32px]'>
               Про насвай 🙄 
            </h1>
         
            <button className='bg-black border border-solid border-white text-white px-4 py-2 rounded-md mt-5'>Вред</button>
            <button className='bg-black border border-solid border-white text-white px-4 py-2 rounded-md mt-5'>Изготовление</button>
            </div>

          
         

       

    </section>
  )
}

export default CreatePost