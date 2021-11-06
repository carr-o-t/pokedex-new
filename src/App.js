import React, { useState } from "react";
import axios from "axios";
import { useQuery } from 'react-query'

const App = () => {
  const [bgColor, setbgColor] = useState(`#${Math.floor(Math.random() * 16777215).toString(16)}`)

  const handleChange = (e) => {
    e.preventDefault()
    localStorage.setItem('pokemon', e.target.value.toLowerCase())
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    refetch()
  }

  const { data, refetch, isLoading } = useQuery('pokedata', async () => {
    var poke
    if (localStorage.getItem('pokemon')) {
      poke = localStorage.getItem('pokemon')
    } else {
      poke = 'pikachu'
    }
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setTimeout(() => {
      setbgColor(`#${randomColor}`)
    }, 300)
    return data
  })


  return (
    <div className="App bg-[#2b292f] h-screen text-[#d5d7d9]">
      <div className="p-3 mx-auto max-w- max-w-[200px]">
        <img src="/images/poke.png" alt="" className="max-w-full max-h-full" />
      </div>
      <form onSubmit={handleSubmit} className="form max-w-[fit-content] m-auto" >
        <label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="enter pokemon name"
            className=" self-center rounded-[10px] mx-auto max-w-[300px] p-[5px] text-blue-gray-400"
          />
        </label>
      </form>
      {
        isLoading ? <h2 style={{ color: 'white' }}>Capturing Pokemon...</h2> : (
          <div className={`container shadow-custom overflow-hidden relative w-[fit-content] max-w-[fit-content] h-[fit-content] rounded-[15px] my-[20px] mx-auto`} style={{ maxWidth: 'fit-content' }}>
            <div className="h-[200px] w-[inherit] absolute" style={{
              background: `${bgColor}`
            }}></div>
            <div className="content p-3 flex flex-col">
              <div className="image z-[2] ">
                <img src={data?.sprites.other["dream_world"]["front_default"]} className="" style={{ height: '300px', width: '300px' }} alt="err" />
              </div>
              <div className="inner my-3">
                <div className="name text-center mt-3 mb-4">
                  <span className="font-extrabold text-center text-lg ">{data?.name.toUpperCase()}</span>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="border-r-[1px] border-blue-gray-600 text-center p-2 pr-5" >
                    <div className="font-semibold">{data?.types[0].type.name.charAt(0).toUpperCase() + data?.types[0].type.name.slice(1)}</div>
                    <div className="text-sm text-blue-gray-400 text-center">Type</div>
                  </div>
                  <div className="border-r-[1px] border-blue-gray-600 text-center py-2 pr-5">
                    <div className="font-semibold">
                      {" "}
                      {Math.round(data?.height * 3.9)}"
                    </div>
                    <div className="text-sm text-blue-gray-400 text-center">Height</div>
                  </div>
                  <div className=" text-center p-2">
                    <div className="font-semibold">
                      {" "}
                      {Math.round(data?.weight / 4.53)} lbs
                    </div>
                    <div className="text-sm text-blue-gray-400 text-center">Weight</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default App;
