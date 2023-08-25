import React, { useEffect, useState } from 'react';

export default function KeyValueEditor({
  keyPair,
  setKeyPair,
  onKeyPairRemove,
}) {
  const [keyValue, setKeyValue] = useState(keyPair);
  const [debouncedKeyValue, setDebouncedKeyValue] = useState(keyValue);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedKeyValue(keyValue);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [keyValue]);

  useEffect(() => {
    setKeyPair(debouncedKeyValue);
    // eslint-disable-next-line
  }, [debouncedKeyValue]);

  const handleOnChange = (e) => {
    setKeyValue((prevState) => ({
      ...prevState,
      id: keyValue.id,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className='flex mb-3 gap-3'>
        <input
          className="bg-[#231f1f] w-full rounded h-9 border input border-[#2d2929] text-[#888d8d] text-sm outline-none px-2 leading-8"
          placeholder='Key'
          name='keyItem'
          onChange={(e) => handleOnChange(e)}
        />
        <input
          className="bg-[#231f1f] w-full rounded h-9 border input border-[#2d2929] text-[#888d8d] text-sm outline-none px-2 leading-8"
          placeholder='Value'
          name='valueItem'
          onChange={(e) => handleOnChange(e)}
        />
        <button
          className=" px-4 rounded-md text-[#Ff0000] border border-[#2d2929] hover:border-[#Ff0000]"
          onClick={() => onKeyPairRemove(keyPair)}>Remove</button>
      </div>
    </>
  );
}
