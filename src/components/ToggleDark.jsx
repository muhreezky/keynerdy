import { useState, useEffect, useRef } from 'react'
import { FaSun, FaMoon } from "react-icons/fa"; // import logo
import { Toggle } from "react-daisyui";

// Component untuk Toggle Light/Dark Mode
function ToggleDark() {
  const [dark, setDark] = useState(false);  // Nilai awal ketika pertama kali dikunjungi
  const darkbutton = useRef();

  // Trigger event
  const toggleMode = (mode) => {
    setDark(mode);
    darkbutton.current.checked = mode;
  }

  // Yang dilakukan setiap load page
  useEffect(() => {
    // Menggunakan truthy dan falsy value
    // Jika localStorage.darked ada, maka Dark Mode akan dinyalakan
    if(localStorage.darked) {
      darkbutton.current.checked = true;
      setDark((dark) => !dark);
    }
  }, []);

  // Dilakukan setiap kali variabel dark berubah nilai
  useEffect(() => {
    // memasukkan classList dari element root html ke dalam variable 'root'
    const root = document.querySelector("html").classList;

    // Jika dark bernilai true, maka ...
    if(dark) {
      localStorage.darked = true;   // item dengan key "darked" di dalam localStorage bernilai true
      root.add("bg-slate-800");
      root.add("dark");
      root.remove("bg-white");
    } 
    // Jika tidak, maka ...
    else {
      localStorage.removeItem("darked");  // item dengan key "darked" di dalam localStorage akan dihapus
      // item darked di localStorage dihapus karena localStorage hanya menerima tipe data string dan akan mengubahnya jika formatnya bukan string
      root.remove("bg-slate-800"); 
      root.remove("dark");
      root.add("bg-white");
    }
  }, [dark]);

  return (
    <>
      <label className="m-auto hover:cursor-pointer" onClick={() => toggleMode(false)}>
        <FaSun /> 
      </label>
      <Toggle id="toggleDark" onChange={(e) => setDark(e.target.checked)} ref={darkbutton} /> 
      <label className="m-auto hover:cursor-pointer" onClick={() => toggleMode(true)}>
        <FaMoon />
      </label>
    </>
  );
}

export default ToggleDark;