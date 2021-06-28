declare module "*.svg" {
  import React from "react";
  import { SvgProps } from 'react-native-scg';
  const content: React.FC<SvgProps>;
  export default content;
}