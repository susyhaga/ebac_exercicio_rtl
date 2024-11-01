import { render, screen } from '@testing-library/react'
import Post from '../Post'

describe('Component test <Post />', () => {
    it('should render correctly with the text content', () => {
        // Renderiza o componente <Post /> com uma imagem de exemplo e um texto "Testing"
        render(
            <Post imageUrl="https://via.placeholder.com/200x200">
                Testing
            </Post>
        );

        // Verifica se o conteúdo de texto "Testing" está presente no documento
        expect(screen.getByText('Testing')).toBeInTheDocument();

        // Verifica se a imagem é renderizada com o atributo src correto
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('src', 'https://via.placeholder.com/200x200');
    });
});
