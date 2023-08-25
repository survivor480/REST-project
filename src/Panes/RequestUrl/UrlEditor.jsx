import React from 'react';
import { methods } from '../../Data/methods';


export default function UrlEditor({
  url,
  setUrl,
  reqMethod,
  setReqMethod,
  onInputSend,
}) {
  return (
    <>
      <form className='flex mx-4 mt-2 gap-3'>
        <select
          className='border rounded-md pl-2 focus:outline-none bg-[#231f1f] border-[#2d2929] w-[10rem]'
          value={reqMethod}
          onChange={(e) => setReqMethod(e.target.value)}
        >
          {methods.map((option) => (
            <option key={option.slug} value={option.method} className={`${option.color}`}>
              {option.method}
            </option>
          ))}
        </select>
        <input
          className='bg-[#231f1f] w-full rounded h-9 border input border-[#2d2929] text-[#888d8d] text-sm outline-none px-2 leading-8'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className='w-[8.5rem] p-2 text-[#92917f] text-sm rounded disabled:cursor-not-allowed border border-[#2d2929] disabled:bg-[#231f1f] text-center cursor-pointer bg-[#231f1f] hover:bg-[#231f1f]'
          type='button'
          onClick={(e) => onInputSend(e)}
        >
          Send
        </button>
      </form>
    </>
  );
}
