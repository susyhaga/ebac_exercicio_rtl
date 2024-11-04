import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '.'

describe('Test for the PostComments component', () => {
    it('should render the component correctly', () => {
        render(<PostComments />);
        // Verifica se o botão "Comentar" está presente no documento
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('should add two comments', () => {
        render(<PostComments />);

        // Adiciona o primeiro comentário
        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: { value: 'Comment added via test' },
        });
        fireEvent.click(screen.getByTestId('comment-button'));

        // 2 segundo comentário
        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: { value: 'Second comment added via test' },
        });
        fireEvent.click(screen.getByTestId('comment-button'));

        // p/verificar  se dois comentários foram adicionados
        expect(screen.getAllByTestId('comment-element')).toHaveLength(2);
    });
});
