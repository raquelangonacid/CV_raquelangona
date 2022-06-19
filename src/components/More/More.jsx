import React from 'react';
import "./More.scss";

const Languages = ({languages, habilities}) => {
  return (
    <div className="More">

      <section>
        <div className="divresponsive">
          <div className="tituloidiomas">
            <h2>IDIOMAS</h2>
            <div>
              <img src="https://cdn-icons-png.flaticon.com/512/555/555635.png" alt="español" className="bandera"/>
              <img src="https://cdn-icons-png.flaticon.com/512/206/206592.png" alt="inglés" className="bandera"/>
              <img src="https://cdn-icons-png.flaticon.com/512/206/206657.png" alt="francés" className="bandera"/>
            </div>
          </div>
          {languages.map((item=>{
            return(

              <div className="Languages">

                <div className="Language">
                <p key={languages.language} className="idioma">{item.language}</p>
                <p key={languages.wrlevel} className="nivel">{item.wrlevel}</p>
                <p key={languages.splevel} className="nivel">{item.splevel}</p>
                </div>
              </div>
            )
          }))}
      </div>
      </section>

      <section className="Habilities">
        <h2>HABILIDADES</h2>
        <div className="listado">
          <p>{habilities[0]}</p>
          <p>{habilities[1]}</p>
          <p>{habilities[2]}</p>
          <p>{habilities[3]}</p>
          <p>{habilities[4]}</p>
          <p>{habilities[5]}</p>

          <div className="iconos">
            <img src="https://www.imaginacolombia.com/assets/media/iconos/hosting-linux/moodle-logo.png" alt="MOODLE" className="icono"/>
            <img src="https://help.totaralearning.com/download/attachments/5640479/TL29?version=4&modificationDate=1533633628017&api=v2" alt="TOTARA" className="icono"/>
            <img src="https://yt3.ggpht.com/ytc/AKedOLT3tX2L-FCbXTPuTn9bvLNXu5BVDlvHV0RIrFGziA=s900-c-k-c0x00ffffff-no-rj" alt="ARTICULATE" className="icono"/>
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" alt="HTML" className="icono"/>
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt="CSS" className="icono"/>
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JS" className="icono"/>
            <img src="https://symbols.getvecta.com/stencil_88/104_mongodb-icon.50ec4bab66.png" alt="MONGO" className="icono"/>
            <img src="https://cdn-icons-png.flaticon.com/512/337/337953.png" alt="SQL" className="icono"/>
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="NODE" className="icono"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png" alt="ANGULAR" className="icono"/>
            <img src="https://cdn-icons-png.flaticon.com/512/919/919851.png" alt="REACT" className="icono"/>
        </div>

        </div>

      </section>
    </div>


  )
}


export default Languages;


