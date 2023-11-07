import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

import CottageIcon from "@mui/icons-material/Cottage";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";

export function Footer() {
  return (
    <footer className="background-footer">
      <div className="dimensioni-footer">
        
          <div className="container-footer">
            <h3 className="title-footer">Note finali</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              cupiditate soluta suscipit similique tenetur ab id ea, unde
              facilis itaque doloribus voluptate maiores, necessitatibus velit?
              Magni consequuntur ratione labore esse? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Enim rem assumenda exercitationem
              pariatur saepe natus atque magni quaerat. Recusandae mollitia at
              consequuntur nisi enim iure nostrum quos sit velit rem.
            </p>
          </div>
        

        <div className="separatore">
          <div className="contatti-footer">
            <h3 className="title-footer">Quick Links</h3>
            <span className="hover-footer">About Us</span>
            <span className="hover-footer">Privacy Policy</span>
            <span className="hover-footer">Contribute</span>
            <span className="hover-footer">Pippo</span>
            <span className="hover-footer">Pluto</span>
          </div>

          <div className="contatti-footer">
            <h3 className="title-footer">Tecnologie</h3>
            <span className="hover-footer">HTML</span>
            <span className="hover-footer">CSS</span>
            <span className="hover-footer">Javascript</span>
            <span className="hover-footer">React</span>
            <span className="hover-footer">Material UI</span>
          </div>

          <div className="contatti-footer">
            <h3 className="title-footer">Contatti</h3>
            <div className="allineamento-contatti">
              <CottageIcon
                sx={{
                  color: "#adb5bd",
                  "&:hover": { cursor: "pointer", fontSize: 26 },
                }}
              />
              <span className="info-contatti">80000,Italia</span>
            </div>
            <div className="allineamento-contatti">
              <MailIcon
                sx={{
                  color: "#adb5bd",
                  "&:hover": { cursor: "pointer", fontSize: 26 },
                }}
              />
              <span className="info-contatti">f16team1@gmail.com</span>
            </div>
            <div className="allineamento-contatti">
              <CallIcon
                sx={{
                  color: "#adb5bd",
                  "&:hover": { cursor: "pointer", fontSize: 26 },
                }}
              />
              <span className="info-contatti">081 234 673 86</span>
            </div>
          </div>
        </div>
      </div>

      <div className="newsletter-footer">
        <h3 className="title-footer">Iscriviti alla nostra newsletter</h3>

        <div className="button-footer">
          <Box
            sx={{
              "& > :not(style)": {
                backgroundColor: "white",
                width: "50ch",
              },
            }}
          >
            <TextField
              id="outlined-basic"
              label="Inserisci la tua e-mail "
              variant="outlined"
            />
          </Box>

          <Button sx={{ width: "130px" }} variant="outlined">
            Invia
          </Button>
        </div>
      </div>

      <div className="social">
        <LinkedInIcon
          sx={{
            fontSize: 60,
            color: "#0e76a8",
            "&:hover": { cursor: "pointer", fontSize: 65 },
          }}
        />
        <FacebookIcon
          sx={{
            fontSize: 60,
            color: "#3b5998",
            "&:hover": { cursor: "pointer", fontSize: 65 },
          }}
        />
        <InstagramIcon
          sx={{
            fontSize: 60,
            color: "#E4405F",
            "&:hover": { cursor: "pointer", fontSize: 65 },
          }}
        />
        <WhatsAppIcon
          sx={{
            fontSize: 60,
            color: "#075E54",
            "&:hover": { cursor: "pointer", fontSize: 65 },
          }}
        />
        <GoogleIcon
          sx={{
            fontSize: 60,
            color: "#D32F2F",
            "&:hover": { cursor: "pointer", fontSize: 65 },
          }}
        />
        <GitHubIcon
          sx={{
            fontSize: 60,
            color: "white",
            "&:hover": { cursor: "pointer", fontSize: 65 },
          }}
        />
      </div>
      <div className="copyright-footer">
        <span className="hover-footer">
          Copyright © 2023 Dungeons & Dragons Reserved by Team1
        </span>
      </div>
    </footer>
  );
}
