"use client";
import {useState} from "react";
import {ArrowTop} from "./svg/Arrow";
import {Logo, Instagram, Linkedin, Pinterest, Contact} from "./svg/Logo";

interface HeaderProps {
  data: {
    id: number;
    body: string;
    classname: string;
    teams: string;
  };
}

export default function Header({data}: HeaderProps) {
  console.log(data);

  return (
    <header>
      {/* CONTAINER TOP */}
      <div>
        <div></div>
        <div>
          <ArrowTop />
          <Logo />
          <h6>
            Démarrer
            <br /> votre projet
          </h6>
        </div>
        <div>
          <Logo />
        </div>
      </div>

      {/* CONTAINER BOTTOM */}
      <div>
        {/* CONTAINER LEFT */}
        <div>
          <div className="b-top">
            <Logo />
            <div>
              <div>
                <p>STACKY AGENCY</p>
                <span>L'AGENCE</span>
              </div>
              <div>
                <h1>Qui donne une dimension créative à votre projet</h1>
              </div>
            </div>
          </div>
          <div className="b-bottom">
            <div>
              <ArrowTop />
              <Logo />
              <h6>
                Démarrer
                <br /> votre projet
              </h6>
            </div>
            <div>
              <Logo />

              <div>
                <div>
                  <div>
                    <Instagram />
                    <p>INSTAGRAM</p>
                  </div>
                  <ArrowTop />
                </div>
                <div>
                  <div>
                    <Linkedin />
                    <p>LINKEDIN</p>
                  </div>
                  <ArrowTop />
                </div>
                <div>
                  <div>
                    <Pinterest />
                    <p>PINTEREST</p>
                  </div>
                  <ArrowTop />
                </div>
                <div>
                  <div>
                    <Contact />
                    <p>CONTACT</p>
                  </div>
                  <ArrowTop />
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        {/* CONTAINER RIGHT */}
        <div>
          <div></div>
        </div>
      </div>
    </header>
  );
}
