import React, { useEffect, useState } from "react";
import { Button, Modal, Spin } from "antd";
import axios from "axios";

const TranslatingModal = ({ isModalOpen, setIsModalOpen, fileUrl }) => {
  const [text, setText] = useState("");
  const [loading, setIsLoading] = useState(true);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const translateFile = async () => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/translate-file`,
        { mediaFile: fileUrl }
      );
      setIsLoading(false);
      setText(data?.text);
    };
    translateFile();
  }, [fileUrl]);

  return (
    <Modal
      title="Translation Result"
      closable={isModalOpen}
      open={isModalOpen}
      //   onOk={handleOk}
      onCancel={handleCancel}
      className="!p-6" // Using !p-6 to override Ant Design's padding
    >
      <div className="flex flex-col items-center">
        {loading ? (
          <Spin size="large" className="p-5" />
        ) : (
          <div className="text-gray-700 text-lg h-[20rem] overflow-y-scroll">
            <p className="mb-4">{text}</p>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default TranslatingModal;
