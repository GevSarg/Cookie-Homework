import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function User() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [id]);

  console.log(user);

  if (!user) {
    return <div>User not found.</div>;
  }

  const { fullname, email, image } = user;

  return (
    <div className="p-6 bg-white bg-opacity-20 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{fullname}</h2>
      <p className="text-gray-700 mb-2">Email: {email}</p>
      {image && (
        <img
          src={image}
          alt={`${fullname}'s profile`}
          className="w-32 h-32 rounded-full"
        />
      )}
    </div>
  );
}
