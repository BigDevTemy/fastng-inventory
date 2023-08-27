import { useRouteError } from "react-router-dom";
import Logo from '../../assets/logo.png'
import { Button } from "antd";
export default function ErrorPage(): JSX.Element {
  const error:any = useRouteError();
  console.error(error);

  return (
    <div id="error-page" >
      
      <img src={Logo} style={{width:'2%'}} />
      <h1 style={{fontFamily:'Poppins'}}>Oops!</h1>
      <p style={{fontFamily:'Poppins'}}>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}