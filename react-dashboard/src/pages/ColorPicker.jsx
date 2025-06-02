
// import React from 'react'
// import {Header} from '../components'

// const ColorPicker = () => {
//   return (
//     <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
//       <Header category="App" title="Color Picker" />

//       <div className='text-center'>
//         <div id="preview" />
//       </div>
//     </div>
//   )
// }

// export default ColorPicker


// components/ui/color-picker.jsx
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ColorPicker = () => {
  const [color, setColor] = useState("#aabbcc");

  return (
    <div className="flex flex-col items-center gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            style={{ backgroundColor: color }}
            className="w-32 h-10 border"
          >
            {color}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-4 bg-white rounded shadow">
          <HexColorPicker color={color} onChange={setColor} />
        </PopoverContent>
      </Popover>

      <Card className="w-full p-4 text-center">
        <div className="text-sm mb-2">Preview</div>
        <div
          className="w-full h-20 rounded border"
          style={{ backgroundColor: color }}
        />
      </Card>
    </div>
  );
};

export default ColorPicker;
