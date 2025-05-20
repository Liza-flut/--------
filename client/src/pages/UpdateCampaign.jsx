import React, { useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ethers } from "ethers";

import { useStateContext } from "../context";
import { money } from "../assets";
import { CustomButton, FormField, Loader } from "../components";
import { checkIfImage } from "../utils";
import { Button } from "@nextui-org/react";
import { MediaRenderer, useStorageUpload } from "@thirdweb-dev/react";
import { useDropzone } from "react-dropzone";

const UpdateCampaign = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const { updateCampaign } = useStateContext();

  const [form, setForm] = useState({
    id: `${state.pId}`,
    title: `${state.title}`,
    description: `${state.description}`,
    target: `${state.target}`,
    deadline: `${state.deadline}`,
    image: `${state.image}`,
    name: `${state.name}`,
    category: `${state.category}`,
    email: `${state.email}`,
    faqs: [],
    packages: [],
  });

  const [file, setFile] = useState([]);
  const [uris, setUris] = useState([]);
  const { mutateAsync: upload } = useStorageUpload();

  const onDrop = useCallback(
    async (acceptedFiles) => {
      const _uris = await upload({
        data: acceptedFiles,
        options: { uploadWithGatewayUrl: true },
      });
      setUris(_uris);
      alert("Файл успешно загружен");
    },
    [upload]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleFAQChange = (index, fieldName, value) => {
    const updatedFAQs = [...form.faqs];
    updatedFAQs[index][fieldName] = value;
    setForm({ ...form, faqs: updatedFAQs });
  };

  const addFAQ = () => {
    setForm({ ...form, faqs: [...form.faqs, { question: "", answer: "" }] });
  };

  const removeFAQ = (index) => {
    const updatedFAQs = [...form.faqs];
    updatedFAQs.splice(index, 1);
    setForm({ ...form, faqs: updatedFAQs });
  };

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handlePackageChange = (index, fieldName, value) => {
    const updatedPackage = [...form.packages];
    updatedPackage[index][fieldName] = value;
    setForm({ ...form, packages: updatedPackage });
  };

  const addPackage = () => {
    setForm({
      ...form,
      packages: [...form.packages, { amount: "", discount: "" }],
    });
  };

  const removePackage = (index) => {
    const updatedPackage = [...form.packages];
    updatedPackage.splice(index, 1);
    setForm({ ...form, packages: updatedPackage });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Пожалуйста, выберите файл изображения");
      return;
    }
    setIsLoading(true);
    try {
      setForm({ ...form, image: uris });
      await updateCampaign({
        ...form,
        target: ethers.utils.parseUnits(form.target, 18),
        image: uris,
      });
      navigate("/");
    } catch (error) {
      console.error("Ошибка при загрузке изображения:", error);
      alert("Ошибка при загрузке изображения. Пожалуйста, попробуйте еще раз.");
    } finally {
      setIsLoading(false);
    }
  };

  const renderFAQs = () => {
    return form.faqs.map((faq, index) => (
      <div key={index} className="flex flex-wrap gap-[40px]">
        <FormField
          labelName={`Вопрос ${index + 1} *`}
          placeholder="Вопрос"
          inputType="text"
          value={faq.question}
          handleChange={(e) =>
            handleFAQChange(index, "question", e.target.value)
          }
        />
        <FormField
          labelName="Ответ *"
          placeholder="Ответ"
          inputType="text"
          value={faq.answer}
          handleChange={(e) => handleFAQChange(index, "answer", e.target.value)}
        />
        {form.faqs.length > 1 && (
          <button type="button" onClick={() => removeFAQ(index)}>
            Удалить вопрос
          </button>
        )}
      </div>
    ));
  };

  const renderPackages = () => {
    return form.packages.map((pack, index) => (
      <div key={index} className="flex flex-wrap gap-[40px]">
        <FormField
          labelName={`Пакет ${index + 1} *`}
          placeholder="ETH"
          inputType="text"
          value={pack.amount}
          handleChange={(e) =>
            handlePackageChange(index, "amount", e.target.value)
          }
        />
        <FormField
          labelName="Скидка *"
          placeholder="%"
          inputType="text"
          value={pack.discount}
          handleChange={(e) =>
            handlePackageChange(index, "discount", e.target.value)
          }
        />
        {form.packages.length > 1 && (
          <button type="button" onClick={() => removePackage(index)}>
            Удалить пакет
          </button>
        )}
      </div>
    ));
  };

  return (
    <div className="flex justify-center items-center flex-col rounded-[10px] sm:p-10 mt-8 p-4 bg-white dark:bg-[#1c1c24]">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#ff0000] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Запустить кампанию
        </h1>
      </div>
      <div className="flex flex-row p-2 m-2">
        {uris.map((uri) => {
          return <MediaRenderer key={uri} src={uri} />;
        })}
      </div>

      <div className="m-2 text-bold font-epilogue dark:text-white text-black flex items-center bg-[#ff0000] justify-center border-dotted border-white p-3 rounded-md">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <button className="text-white">Перетащите файлы</button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Ваше имя *"
            placeholder="Иван Иванов"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange("name", e)}
          />
          <FormField
            labelName="Название кампании *"
            placeholder="Введите название"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange("title", e)}
          />
          <FormField
            labelName="Выберите категорию *"
            placeholder="Выберите..."
            isCategory
            value={form.category}
            handleChange={(e) => handleFormFieldChange("category", e)}
          />
          <FormField
            labelName="Введите Email"
            placeholder="example@example.com"
            value={form.email}
            handleChange={(e) => handleFormFieldChange("email", e)}
          />
        </div>
        <FormField
          labelName="История * (Поддерживается Markdown)"
          placeholder="Расскажите вашу историю"
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormFieldChange("description", e)}
        />

        <div className="w-full flex justify-center items-center p-4 bg-[#ff0000] h-[120px] rounded-[10px]">
          <img
            src={money}
            alt="деньги"
            className="w-[40px] h-[40px] object-contain"
          />
          <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">
            Вы получите 100% собранных средств
          </h4>
        </div>

        <div className="flex flex-wrap gap-[40px]">
          {renderFAQs()}
          <button type="button" onClick={addFAQ}>
            Добавить вопрос
          </button>
        </div>

        <div className="flex flex-wrap gap-[40px]">
          {renderPackages()}
          <button type="button" onClick={addPackage}>
            Добавить пакет
          </button>
        </div>

        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Цель *"
            placeholder="ETH 0.50"
            inputType="number"
            value={form.target}
            handleChange={(e) => handleFormFieldChange("target", e)}
          />
          <FormField
            labelName="Дата окончания *"
            placeholder="Дата окончания"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange("deadline", e)}
          />
        </div>

        <div className="flex justify-center items-center mt-[40px]">
          <Button
            type={"submit"}
            fullWidth={true}
            className={
              "font-epilogue h-[50px] font-semibold text-[18px]  text-white px-4 rounded-[10px] bg-[#ff0000]"
            }
          >
            Отправить кампанию
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCampaign;
