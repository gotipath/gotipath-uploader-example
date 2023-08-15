import { useState } from "react";
import Uppy from "@uppy/core";
import Tus from "@uppy/tus";
import { Dashboard, DragDrop, ProgressBar, FileInput } from "@uppy/react";

import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "@uppy/drag-drop/dist/style.css";
import "@uppy/file-input/dist/style.css";
import "@uppy/progress-bar/dist/style.css";

export default function Uploader() {
  const ClientID = "92f9d000-5051-4339-9b3a-91f1c2a4c07";
  const LibraryID = "00d21629-0f9b-4989-83f6-eed66d49c6b";
  const ApiKey =
    "VZoizMPdFuXjU0jC3TBKfdCOEyFwMfubysN3l3vOAOI9b6JUStjrR9KrBRdtC3T/nkOFW";

  const uppy = new Uppy({
    meta: {},
    autoProceed: true,
    debug: true,
  }).use(Tus, {
    endpoint: "https://tus-stream.gotipath.com/tusupload/",
    retryDelays: [0, 1000, 3000, 5000],
    chunkSize: 20 * 1024 * 1024,
    headers: {
      VideoId: "8219cdcc-7a4d-4f0d-9c78-ead95bd1bbc6", // required  // First create video and get video id
      "X-Auth-ClientId": ClientID, // required
      "X-Auth-LibraryId": LibraryID, // required
      "X-Auth-ApiKey": ApiKey, // required
    },
  });

  return (
    <div>
      <Dashboard
        uppy={uppy}
        metaFields={[{ id: "name", name: "Name", placeholder: "File name" }]}
      />
    </div>
  );
}
