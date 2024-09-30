import { useState } from "react";
import Lista from "../components/Lista";
import Content from "../components/Content";

function Dictionary() {
  const [scrollToId, setScrollToId] = useState(null);

  const handleScroll = (id) => {
    setScrollToId(id);
  };
  return (
    <>
      <Lista handleScroll={handleScroll} />
      <Content scrollToId={scrollToId} />
    </>
  );
}

export default Dictionary;
