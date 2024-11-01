import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '../PostComments'

describe('Test for the PostComment component', () => {
    it('Should render the component correctly', () => {
        render(<PostComment />);
        // Verifica se o botão "Comentar" está presente no documento
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Should add two comments', () => {
        render(<PostComment />);

        // Adiciona o primeiro comentário
        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Comment added via test',
            }
        });
        fireEvent.click(screen.getByTestId('comment-button'));

        // Adiciona o segundo comentário
        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Second comment added via test',
            }
        });
        fireEvent.click(screen.getByTestId('comment-button'));

        // Verifica se dois comentários foram adicionados
        expect(screen.getAllByTestId('comment-element')).toHaveLength(2);
    });
});
