import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsTranslate } from "react-icons/bs";
import TranslatingModal from "../Components/Modals/TranslatingModal";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [url, setUrl] = useState("");

  const columns = [
    { title: "Name", dataIndex: "fullName", key: "fullName" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "File URL", dataIndex: "feedbackFile", key: "feedbackFile" },
    { title: "Transcribe" },
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/user/get-users`
      );
      setUsers(data?.users);
    };
    fetchUsers();
  }, []);

  return (
    <>
      {isModal && (
        <TranslatingModal
          isModalOpen={isModal}
          setIsModalOpen={setIsModal}
          fileUrl={url}
        />
      )}
      <div className="min-h-screen w-full overflow-auto bg-gray-100 p-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">User Management</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  {columns.map((column) => (
                    <th key={column.key} className="py-3 px-6 text-left">
                      {column.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {users.map((user, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-100 transition duration-150 text-lg"
                  >
                    <td className="py-3 px-6">{user.fullName}</td>
                    <td className="py-3 px-6">{user.email}</td>
                    <td className="py-3 px-6">
                      <a
                        href={user.feedbackFile}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View File
                      </a>
                    </td>
                    <td className="py-3 px-6">
                      <BsTranslate
                        className="text-center hover:text-blue-600 hover:scale-125 cursor-pointer transition-all"
                        onClick={() => {
                          setUrl(user?.feedbackFile);
                          setIsModal(true);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
