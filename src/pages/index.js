import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"
import { Button } from "../components/button"
import ReactStopwatch from "react-stopwatch"
import { DATA } from "../components/data"

const Container = styled.div`
  background-color: #202c32;
  display: flex
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const SubContainer = styled.div`
  width: 50%;
  flex: 1;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    width: 75%;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`

const INITIAL = {
  isInitial: true,
  title: "Welcome to the Improv Game Generator.",
  desc: (
    <>
      {"These are the games I learned in TAPS 103."}
      <br /><br />
      {"Are you ready? Press "}
      <Button>{"enter"}</Button>
      {" to generate a new game. "}
    </>
  ),
}

const IndexPage = () => {
  const [currentGame, setCurrentGame] = useState(INITIAL)
  const handleKeyPress = () => {
    const randomGame = DATA[Math.floor(Math.random() * DATA.length)]
    setCurrentGame(randomGame)
  }

  useEffect(() => {
    document.addEventListener("click", handleKeyPress, false)
    document.addEventListener("keydown", handleKeyPress)
  }, [])

  const isInitial = currentGame.isInitial
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <SubContainer>
          {!isInitial && (
            <ReactStopwatch
              seconds={0}
              minutes={0}
              hours={0}
              onChange={({ hours, minutes, seconds }) => {
                // do something
              }}
              onCallback={() => console.log("Finish")}
              render={({ hours, minutes, seconds }) => {
                const realMinutes = minutes < 10 ? `0${minutes}` : minutes
                const realSeconds = seconds < 10 ? `0${seconds}` : seconds
                const realHours = hours < 10 ? `0${hours}` : hours

                return !!hours ? (
                  <p style={{ color: "#aaa" }}>
                    {realHours}:{realMinutes}:{realSeconds}
                  </p>
                ) : (
                  <p style={{ color: "#aaa" }}>
                    {realMinutes}:{realSeconds}
                  </p>
                )
              }}
            />
          )}

          <h1 style={{ textAlign: "center" }}>{currentGame.title}</h1>
          <p
            style={{
              color: "#aaa",
              whiteSpace: "pre-line",
              textAlign: isInitial ? "center" : "left",
            }}
          >
            {currentGame.desc}
          </p>
        </SubContainer>
      </Container>
    </Layout>
  )
}

export default IndexPage
