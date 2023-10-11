import Info from "./Info/Info"
import CoachesList from "./CoachesList/СoachesList"
import PlayersList from "./PlayersList/PlayersList"
import Form from "@/components/UI/form/form"

function TeamPage() {
    return (
        <>
            <Info />
            <CoachesList />
            <PlayersList />
            <Form />
        </>
    )
}

export default TeamPage