import React, { useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponents";
import FileMenu from "../components/dialogs/FileMenu";
import { sampleMessage } from "../constants/sampleData";
import MessageComponent from "../shared/MessageComponent";

const user = {
  _id: "safsafsaf",
  name: "Abhishh",
};

const Chat = () => {
  const containerRef = useRef(null);

  const fileMenuRef = useRef(null);

  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={"#A396CF"}
        height={"90%"}
        sx={{ overflowX: "hidden", overflowY: "auto" }}
      >
        {sampleMessage.map((i) => (
          <MessageComponent message={i} user={user} />
        ))}
      </Stack>

      <form style={{ height: "10%" }}>
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{ position: "absolute", left: "1.5rem", rotate: "30deg" }}
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox placeholder="Type Message Here..." />

          <IconButton
            type="submit"
            sx={{
              backgroundColor: "#EB5ACE",
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": { bgcolor: "#FF00CC" },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </>
  );
};

export default AppLayout()(Chat);
