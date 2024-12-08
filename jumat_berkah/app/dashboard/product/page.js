"use client";

import databases from "@/lib/appwrite";
import { useEffect, useState } from "react";

export default function Page() {
  const [Nama, setNama] = useState([]);
  console.log(Nama);

  const [data, setData] = useState([]);

  // bakal jalan kalo di refrech
  useEffect(() => {
    // query data
    async function Getdata() {
      const result = await databases.listDocuments(
        "6755399d0028325b6681", // databaseId
        "675539bb00243f2a2371", // collectionId
        [] // queries (optional)
      );
      console.log(result);
      setData(result);
    }

    Getdata();
  }, []);

  async function input(params) {
    const result = await databases.createDocument(
      "6755399d0028325b6681", // databaseId
      "675539bb00243f2a2371", // collectionId
      "67553a4a00358e34a0cb", // documentId
      { nama: Nama } // data
    );
  }

  return (
    <>
      <h1>product</h1>

      <form onSubmit={input()}>
        <input
          type="text"
          name="nama"
          onChange={setNama(e.target.value)}
          placeholder="Masukan nama"
        />
        <button>Submit</button>
      </form>
    </>
  );
}
