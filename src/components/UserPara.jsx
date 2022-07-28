import { useState, useEffect, useRef } from 'react'

function UserPara({ userInput, paragraph }) {

    const [isWrong, setIsWrong] = useState(false)

    const renderUserInputPara = () => {
        let elements = []
        let wrongCounter = 0

        for (let i = 0; i < userInput.length; ++i) {
            // console.log(userInput[i])

            console.log("userInput: ", userInput)
            // console.log("paragraph: ", paragraph)

            let last = userInput.length - 1

            let uiSlice = userInput.slice(0, i + 1)
            let pSlice = paragraph.slice(0, i + 1)
            console.log("Paragraph slice: ", pSlice)
            console.log(userInput === pSlice)

            // if they're equal AND everything so far is the equal
            if (userInput[i] === paragraph[i] && uiSlice === pSlice) {
                elements.push(
                    <span key={i} className="correct-input">
                        {userInput[i]}
                    </span>
                )
            }
            else {
                elements.push(
                    <span key={i} className="incorrect-input">
                        {userInput[i]}
                    </span>
                )
                wrongCounter += 1
            }
        }

        if (wrongCounter >= 6) {
            alert("You have a typo!")
        }

        return (
            <div>
                {elements}
            </div>
        )
    }

    // let firstRender = useRef(true)

    // useEffect(() => {
    //     if (!firstRender.current) {
    //         renderUserInputPara()
    //         firstRender.current = true
    //     }
    // }, [userInput])

    // useEffect(() => {
    //     console.log("userInput: ", userInput)
    //     console.log("paragraph: ", paragraph)

    //     let last = userInput.length - 1

    //     let pSlice = paragraph.slice(0, last)
    //     console.log("Paragraph slice: ", pSlice)

    //     if (userInput[last] !== paragraph[last]) {
    //         setIsWrong(false)
    //     } else {
    //         setIsWrong(true)
    //     }

    // }, [])

    return (
        <div id="user-input" className="paragraph-div">
            {/* <p>{userInput}</p> */}
            {renderUserInputPara()}


        </div>
    )

}

export default UserPara