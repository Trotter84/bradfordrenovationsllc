declare module 'react-netlify-form' {

  import React from "react";

  export type NetlifyFormProps = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> & {
    children: (state: { loading: boolean, error: boolean, success: boolean }) => React.ReactNode
  }

  const NetlifyForm: React.FC<NetlifyFormProps> 

  export default NetlifyForm;
}