import React from "react";

const FormField = ({
  labelName,
  placeholder,
  isTextArea,
  isCategory,
  inputType,
  value,
  multiple,
  handleChange,
}) => {
  return (
    <label className="flex-1 w-full flex flex-col">
      {labelName && (
        <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
          {labelName /* Метка */}
        </span>
      )}

      {isTextArea ? (
        <textarea
          required
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder /* Подсказка */}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        />
      ) : isCategory ? (
        <select
          required
          value={value}
          onChange={handleChange}
          placeholder={placeholder /* Подсказка */}
          className="py-[20px] sm:px-[25px] px-[20px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        >
          <option value="Fundraiser" className="dark:text-black">Сбор средств</option>
          <option value="Personal" className="dark:text-black">Личный</option>
          <option value="Nonprofit" className="dark:text-black">Некоммерческий</option>
          <option value="Medical" className="dark:text-black">Медицинский</option>
          <option value="Crisis Relief" className="dark:text-black">Помощь в кризис</option>
          <option value="Education" className="dark:text-black">Образование</option>
          <option value="Emergency" className="dark:text-black">Чрезвычайная ситуация</option>
          <option value="Sports" className="dark:text-black">Спорт</option>
          <option value="Environment" className="dark:text-black">Окружающая среда</option>
          <option value="Family" className="dark:text-black">Семья</option>
          <option value="Competition" className="dark:text-black">Соревнование</option>
          <option value="Memorial" className="dark:text-black">Памятный</option>
          <option value="Research" className="dark:text-black">Исследование</option>
        </select>
      ) : (
        <input
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          multiple={multiple}
          step="0.01"
          placeholder={placeholder /* Подсказка */}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        />
      )}
    </label>
  );
};

export default FormField;
