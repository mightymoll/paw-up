import React from 'react';
import './footer.scss';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/intagram.png';
import useData from '../../utils/useData'
import apiUrl from '../../index'

function Footer() {

  // get all data related to association
  const { data, error, isLoaded } = useData(
    apiUrl + "/asso/65c63c6dda87a502bdf4cb45"
  );

  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }

  var socials = [
    { name: 'facebook', url: data.soc_fb, icon: facebook },
    { name: 'instagram', url: data.soc_insta, icon: instagram }
  ];

  // format telephone number for french system (XX XX XX XX XX)
  function formatTel(number) {
    number = number.replace(/(.{2})/g, "$1 ").trim();
    return number;
  }

  return (
    !isLoaded ? <div>...loading</div> :
    <div className="footer" >
        <div className="footer-col">
          <p>{formatTel(data.tel)}</p>
        <div className="address">
            <p>{data.loc_street}</p>
            <p>{data.loc_city + ' ' + data.loc_postal}</p>
          </div>
        </div>
        <div className="footer-col center">
          <div>
            <h3>{data.name}</h3>
            <a href={'mailto:' + data.email}><p>{data.email}</p></a>
          </div>
          <p className="copyright">copyright ©2023 MVF</p>
      </div>
      <div className="social">
        {socials.map((social) =>
          <a key={social.name} href={social.url}>
            <img src={social.icon} alt={social.name + " logo"} /></a>
        )}
          {data.soc_other ? <a key={data.soc_other} href={data.soc_other}>{data.soc_other_name}</a> : <></>}
      </div>
    </div >
  );
};

export default Footer;