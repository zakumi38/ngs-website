import { Container } from "@mui/material"
import React from "react"
import TeamTable from "./teams-table"

const TeamList = () => {
    return (
        <>
            <Container
                maxWidth={false}
                sx={{
                    paddingTop: "15px",
                    paddingBottom: "15px",
                    minHeight: "100vh",
                    backgroundColor: "#F1F1F1",
                }}
            >
                <TeamTable />
            </Container>
        </>
    )
}

export default TeamList
