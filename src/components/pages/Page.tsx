import {PagesType} from "../dataState/dataState";
import {useLocation, useParams} from "react-router-dom";
import {Error404} from "./Error404";

type PropsType = {
    pages: PagesType[]
}

export const Page = ({pages}: PropsType) => {

    const params = useParams()
    const location = useLocation()

    return (
        <>
            {location.pathname === '/page/2' && <div>SECRET TEXT</div>}
            {pages[Number(params.id)]
            ? <div>
            <h2>{pages[Number(params.id)].heading}</h2>
            <div>{pages[Number(params.id)].about}</div>
        </div>
            : <Error404/>}
        </>


    )
}