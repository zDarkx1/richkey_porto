import { SiLaravel,SiNextdotjs,SiTailwindcss,SiReact, SiNodedotjs, SiExpress  } from "react-icons/si";
import ToolTip from "../components/ToolTip";
export default function About(){
    return (
        <div className="wrapper mb-[10px]">
            <div className="md:pt-[50px] pt-[50px]">
                <h1 className="text-[32px] font-semibold dark:text-white text-dark leading-9 font-display pb-3">About Me </h1>
                <p className="mb-8 leading-relaxed text-secondary dark:text-white text-[14px]">Hi, my name is Alrizky Filardhi Budiman.Currently, I am studying at Vocational School 1 Cimahi, Software Engineering (RPL).</p>
                <p className="mb-8 leading-relaxed text-secondary dark:text-white text-[14px]">My journey into the world of programming began when I was in high school. I developed an interest in coding after discovering a programming book. That moment sparked my curiosity and passion, leading me to explore further and eventually choose Software Engineering as my path.</p>
                <p className="mb-8 leading-relaxed text-secondary dark:text-white text-[14px]">I am now on my way to becoming a skilled developer. I’m always learning and working on improving my knowledge and skills in software development. I have taken courses, attended workshops, and even worked on personal projects to deepen my understanding of programming.</p>
                <p className="mb-8 leading-relaxed text-secondary dark:text-white text-[14px]">Through this portfolio, I would like to showcase the projects I have worked on. I hope they can inspire others who are starting their journey into the world of programming. Remember, the key to success is persistence. Keep learning, keep coding, and never stop exploring!</p>
            </div>
            <hr/>
            <div className="md:pt-[10px] pt-[10px] mb-[20px]">
                <h2 className="mb-[10px] font-semibold ">Current Techstack : </h2>
                <div className="flex flex-wrap gap-3 items-center ">
                    <ToolTip text="Laravel" className="hover:cursor-pointer">
                        <SiLaravel className="w-[2rem] h-[2rem] text-red-500 dark:text-red-400"/>
                    </ToolTip>
                    <ToolTip text="Next JS">
                        <SiNextdotjs className="w-[2rem] h-[2rem] text-slate-900 dark:text-slate-200"/>
                    </ToolTip>
                    <ToolTip text="Tailwind CSS">
                        <SiTailwindcss  className="w-[2rem] h-[2rem] text-sky-600"/>
                    </ToolTip>
                    <ToolTip text="React JS">
                        <SiReact  className="w-[2rem] h-[2rem] text-cyan-600"/>
                    </ToolTip>
                    <ToolTip text="Node JS">
                        <SiNodedotjs  className="w-[2rem] h-[2rem] text-green-600"/>
                    </ToolTip>
                    <ToolTip text="Express JS">
                        <SiExpress  className="w-[2rem] h-[2rem] text-gray-400"/>
                    </ToolTip>
                </div>
            </div>
            <hr/>
        </div>
    )
}
