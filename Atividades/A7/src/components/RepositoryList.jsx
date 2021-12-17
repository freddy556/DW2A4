import { Counter } from "./Counter"
import {RepositoryItem} from "./RepositoryItem"
 
export function RepositoryList() {
    return(  
        <>
            <RepositoryItem repository={repository}/> 
            <Counter/>
        </>
    )
}