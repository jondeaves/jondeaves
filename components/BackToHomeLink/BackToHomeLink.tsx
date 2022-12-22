import React from "react";
import Link from "next/link";

const BackToHomeLink = () => {
  return (
    <div className="spaced-below-xs">
      <Link href="/">Back home</Link>
    </div>
  );
};

export default BackToHomeLink;
