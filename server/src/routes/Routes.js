const { Router } = require('express');
const router = Router();

router.get('/auth/error', (req, res) => {
    res.send('Error logging in');
});

router.get('/success', (req, res) => {
    // Verifica se req.user existe e contém os dados do perfil do usuário
    if (req.user) {
        // Acesso aos dados do perfil do usuário a partir de req.user
        const { id, displayName, email } = req.user;

        // Exemplo de mensagem de boas-vindas com os dados do perfil
        const message = `Welcome, ${displayName}! Your email is ${email}.`;

        // Renderiza a página de sucesso com a mensagem personalizada
        res.send(message);
    } else {
        // Se não houver dados do perfil, redireciona para a página de erro
        res.redirect('/auth/error');
    }
});

module.exports = router;