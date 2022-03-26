import React, { useState } from "react";

import { AddOwner } from "./AddOwner";
import { RepoList } from "./RepoList";

export const RepoApp = ({ initialOwners = [] }) => {
  const [owners, setOwner] = useState(initialOwners);

  return (
    <div className="md:container mx-auto">
      <div className="bg-slate-900 container flex flex-row space-x-56 p-16 w-full">
        <h1 className="basis-full w-full text-slate-50 font-bold italic hover:not-italic hover:text-2xl">
          TypesCript and graphql Aplicacion
        </h1>
        <AddOwner setOwner={setOwner} />

        <br />
      </div>
      <div className="flex flex-wrap bg-blue-100">
        {owners.map((owner) => (
          <RepoList key={owner} owner={owner} />
        ))}
      </div>
      </div>
  );
};
