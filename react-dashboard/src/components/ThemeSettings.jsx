import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ThemeSettings = ({ open, onClose }) => {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = (value) => {
    setTheme(value);
    document.documentElement.classList.toggle("dark", value === "dark");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[90%] max-w-md">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            <span>Theme Settings</span>

          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p className="font-semibold text-lg">Theme Options</p>
          <RadioGroup value={theme} onValueChange={handleThemeChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="light" id="light" />
              <label htmlFor="light">Light</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dark" id="dark" />
              <label htmlFor="dark">Dark</label>
            </div>
          </RadioGroup>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ThemeSettings;

