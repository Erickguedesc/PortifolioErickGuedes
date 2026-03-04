import style from "./Sobre.module.css";
import { useTranslation } from "react-i18next";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function Sobre() {
  const { t } = useTranslation();

  return (
    <section className={style.sobrePage}>
      <div className={style.container}>

        {/* FOTO */}
        <div className={style.photoWrapper}>
          <div className={style.photoCircle}>
            FOTO DO DEV
          </div>
        </div>

        {/* SOBRE MIM */}
        <div className={style.section}>
          <h2 className={style.sectionTitle}>Sobre Mim</h2>
          <p className={style.description}>
            Sou estudante de Engenharia de Software com foco em desenvolvimento
            backend e frontend. Tenho experiência com Java, Spring Boot,
            React e bancos de dados relacionais. Busco evoluir constantemente
            como desenvolvedor e construir soluções escaláveis.
          </p>
        </div>

        {/* EXPERIÊNCIA */}
        <div className={style.section}>
          <h2 className={style.sectionTitle}>Experiência</h2>
          <p className={style.subtitle}>
            Veja um pouco sobre minha carreira
          </p>

          <div className={style.timeline}>

            {/* Item 1 */}
            <div className={style.timelineItem}>
              <div className={style.timelineIcon}>
                <BusinessCenterIcon />
              </div>

              <div className={style.card}>
                <h3>Cargo</h3>
                <span className={style.company}>
                  <ApartmentIcon fontSize="small" /> Empresa
                </span>
                <p>
                  Desenvolvimento de aplicações web utilizando React
                  e Spring Boot, participação em modelagem de banco
                  de dados e integração com APIs REST.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className={style.timelineItem}>
              <div className={style.timelineIcon}>
                <BusinessCenterIcon />
              </div>

              <div className={style.card}>
                <h3>Cargo</h3>
                <span className={style.company}>
                  <ApartmentIcon fontSize="small" /> Empresa
                </span>
                <p>
                  Atuação no desenvolvimento e manutenção de sistemas,
                  correção de bugs e melhoria de performance.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* INDICADORES */}
        <div className={style.section}>
          <h2 className={style.sectionTitle}>Indicadores</h2>

          <div className={style.statsBox}>
            <TrendingUpIcon />
            <div className={style.stats}>
              <div>
                <h3>5</h3>
                <span>Projetos</span>
              </div>
              <div>
                <h3>3</h3>
                <span>Anos</span>
              </div>
              <div>
                <h3>1</h3>
                <span>Clientes</span>
              </div>
              <div>
                <h3>23</h3>
                <span>Commits</span>
              </div>
              <div>
                <h3>100+</h3>
                <span>Cafés</span>
              </div>
            </div>
          </div>

          <div className={style.academicBox}>
            <h3>
              <SchoolIcon /> Progresso Acadêmico
            </h3>

            <div className={style.progressItem}>
              <span>Engenharia de Software - PUC Minas</span>
              <div className={style.progressBar}>
                <div style={{ width: "60%" }}></div>
              </div>
            </div>

            <div className={style.progressItem}>
              <span>JavaScript e TypeScript - Udemy</span>
              <div className={style.progressBar}>
                <div style={{ width: "30%" }}></div>
              </div>
            </div>

            <div className={style.progressItem}>
              <span>Imersão Python - Hashtag</span>
              <div className={style.progressBar}>
                <div style={{ width: "100%" }}></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}