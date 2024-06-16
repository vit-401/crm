import React, {ReactNode, useState} from 'react';
// import NavBar from '../navBar';
// import TopBar from '../topBar';
import styles from './style.module.scss';
import Container from "@mui/material/Container";
import {ThemeProvider} from "@mui/material/styles";
import theme from "../theme";
import NavBar from "./navBar";

interface Props {
  children?: ReactNode
  contentHeader?: ReactNode
}

const LayoutAdmin = (props: Props) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  return (
    <ThemeProvider theme={theme}>

      <div className={styles.root}>
        {/*<TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />*/}
        <NavBar
          onMobileClose={() => setMobileNavOpen(false)}
          openMobile={isMobileNavOpen}
        />
        <div className={styles.wrapper}>
          <div className={styles.content_container}>
            <div className={styles.content}>
              <div className={styles.page}>
                <Container maxWidth={false}>
                  <div>
                    {props.contentHeader}
                  </div>
                </Container>
                <Container disableGutters className={styles.container} maxWidth={false}>
                  <div>
                    {props.children}
                  </div>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>

  );
};

export default LayoutAdmin;
