import { Nav } from "components/Nav";
import React, { useMemo, useState } from "react";
import { Card } from "components/Card";
import { InferGetStaticPropsType } from "next";

export async function getStaticProps() {
  const res = await fetch("http://isd-test.cucheck.in/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
    revalidate: 60, // In seconds
  };
}
type User = {
  username: string;
  name: string;
  surname: string;
};

const Namelist = ({
  users,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [query, setQuery] = useState<string>("");

  const filteredUsers = useMemo(
    () =>
      users.filter(
        (user: User) =>
          query === "" ||
          user.username.toUpperCase().includes(query.toUpperCase()) ||
          user.name.toUpperCase().includes(query.toUpperCase()) ||
          user.surname.toUpperCase().includes(query.toUpperCase())
      ),
    [query, users]
  );

  return (
    <div className="relative flex flex-col w-full min-h-screen ">
      <Nav />
      <div className="flex w-full bg-center bg-no-repeat bg-cover h-[calc(100vh-64px)] md:bg-isd-desktop bg-isd-mobile">
        <div className="flex flex-col items-center w-full h-full pt-8 md:pt-16">
          <div className="flex flex-col w-full px-8 pb-5 md:flex-row md:justify-around md:items-center">
            <h3 className="pb-3 text-4xl font-semibold font-display text-start md:text-5xl">
              รายชื่อผู้ลงทะเบียน
            </h3>
            <input
              type={"text"}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ค้นหา"
              className="w-full h-10 px-3 text-gray-500 rounded-lg md:w-1/5 focus:border-pink-500"
            />
          </div>
          <div className="flex flex-wrap justify-center w-full space-y-5 overflow-y-scroll max-w-7xl md:space-y-0 no-scrollbar">
            {filteredUsers.map((user: User) => (
              <Card
                key={user.username}
                username={user.username}
                name={user.name}
                surname={user.surname}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Namelist;
