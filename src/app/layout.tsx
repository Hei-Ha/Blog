import React from "react";
import Provider from "./provider";
import { ClientOrServer } from '../utils/utils'
import '../style/global.css'

export default ({ children }: { children: React.ReactNode }) => {
    ClientOrServer('layout')

  return (
    <html>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
};
