import Form from 'react-bootstrap/Form'


function UserInputForm({ setUserInput, setNumChars }) {

    const handleChange = (event) => {
        let value = event.target.value
        let numChars = value.length
        // console.log(`${value} val changed`)
        // console.log(`${value.length}`)
        if (value === "") {
            value = "**userInput will appear here**"
            numChars = 0
        }

        setUserInput(value)
        setNumChars(numChars)
    }



    return (
        <div>
            <Form >
                <Form.Group className='mb'>

                    <Form.Control
                        as="textarea"
                        placeholder="Enter text here:"
                        aria-label="Search"
                        rows={20}
                        cols={100}
                        onChange={(event) => { handleChange(event) }}
                    />
                </Form.Group>

            </Form>
        </div>
    )
}

export default UserInputForm