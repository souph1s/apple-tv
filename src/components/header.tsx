import { Button } from "./button"
import { Container } from "./container"

export const Header = () => {
    return (
        <>

            <header className="bg-backgroundContrast text-white">
                <Container className="flex items-center min-h-11">
                    <a href="/" className="flex h-11 items-center px-6 -ml-6"><span className="sr-only">Back to home page</span></a>
                </Container>
            </header>
            <div className="sticky top-0 bg-backgroundContrast text-white">
                <Container className="flex min-h-11 justify-between items-center">
                <p>Apple TV+</p>
                <Button size="small">Test</Button>
                </Container>
            </div>
        </>
    )
} 