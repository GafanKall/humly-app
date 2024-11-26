import React, { useState } from "react";
import styles from "./dropdown.module.css";

interface DropdownFilterProps {
  options: string[]; // Tipe untuk array opsi
  onSelect: (option: string) => void; // Callback ketika opsi dipilih
  defaultOption: string; // Opsi awal yang dipilih
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({
  options,
  onSelect,
  defaultOption,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(defaultOption);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    onSelect(option);
  };

  return (
    <>
      {/* Overlay */}
      {isDropdownOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsDropdownOpen(false)}
        ></div>
      )}
      {/* Dropdown Trigger */}
      <div className={styles.dropdownContainer}>
        <h1 onClick={toggleDropdown} className={styles.dropdownTrigger}>
          {selectedOption} <i className="bx bx-chevron-down"></i>
        </h1>
        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className={styles.dropdownMenu}>
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option)}
                className={`${styles.dropdownItem} ${
                  selectedOption === option ? styles.active : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default DropdownFilter;
