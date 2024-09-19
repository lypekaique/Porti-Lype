import logo from '../src/assets/IMG/logo.7eb7df78c9c3f0b293b578bb70239387.svg';


export default function App() {
  return (
    <div>
      <header class="flex justify-between items-center p-0 bg-[#10E956] z-100 w-full h-[10vh] sticky top-0 animate-fade-down animate-once animate-ease-in-out animate-normal animate-fill-forwards">
        <img class='animate-fade-down animate-once animate-ease-in-out animate-normal animate-fill-forwards w-[54px] h-[54px] fixed p-0 z-[500] left-[4rem] top-[--7px]'  src={logo}/>
      </header>
      <div></div>

    </div>
  )
}