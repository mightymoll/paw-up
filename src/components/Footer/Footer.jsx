import React from 'react';
import './footer.scss';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/intagram.png';
import useData from '../../utils/useData'

function Footer() {

  // get all data related to association
  const { data, error, isLoaded } = useData(
    "http://localhost:5001/asso/65c63c6dda87a502bdf4cb45"
  );

  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }

  var socials = [
    { name: 'facebook', url: data.soc_fb, icon: facebook },
    { name: 'instagram', url: data.soc_insta, icon: instagram }
  ];

  return (
    !isLoaded ? <div>...loading</div> :
    <div className="footer" >
      <div className="contact">
          <p>{data.tel}</p>
        <div className="address">
            <p>{data.loc_street}</p>
            <p>{data.loc_city}</p>
            <p>{data.loc_postal}</p>
        </div>
          <a href={'mailto:' + data.email}><p>{data.email}</p></a>
      </div>
      <div className="general">
          <h3>{data.name}</h3>
        <p>copyright ©2023 MVF</p>
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