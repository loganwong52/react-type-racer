import Form from 'react-bootstrap/Form'


function UserInputForm({ setUserInput }) {

    const handleChange = (event) => {
        const value = event.target.value
        // console.log(`${value} val changed`)

        setUserInput(value)
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